import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { InitItems } from '../models/staticInitObjects';
import { gameObject } from '../models/gameObject.interface';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ItemCategories } from '../models/deductionItems.interface';
import { DeductionStatus } from '../models/deductionStatus.enum';
@Injectable({
  providedIn: 'root',
})
export class ClueStorageService {
  private gameStateSubject: BehaviorSubject<gameObject>;
  constructor(private localStorage: LocalStorageService) {
    this.gameStateSubject =
    new BehaviorSubject<gameObject>({
      Weapons: [],
      Locations: [],
      Suspects: [],
    })
  }
  itemKey = 'gameItems';

  initStorage() {
    try {
      let item = this.localStorage.tryGet(this.itemKey);
      if (!item.success) {
        this.resetStorage();
      } else {
        this.gameStateSubject.next(
          item.value as gameObject
        );
      }
    } catch (error) {
      console.log('Error occurred on init ' + error);
    }
  }

  resetStorage() {
    console.log('here');
    this.localStorage.set(this.itemKey, InitItems);
    this.gameStateSubject.next(InitItems);
  }

  getClueState(): Observable<gameObject> {
    return this.gameStateSubject.asObservable() as Observable<gameObject>;
  }

  saveClueState(state: gameObject) {
    try {
      this.localStorage.set(this.itemKey, state);
    } catch (error) {
      console.log('Error in saving clue state ' + error);
    }
  }

  updateItem(
    itemName: string,
    itemType: 'Suspects' | 'Weapons' | 'Locations',
    newStatus: DeductionStatus
  ) {
    try {
      let item = this.gameStateSubject.getValue();
      let itemTypeList = item[itemType];
      let targetItemIndex = itemTypeList.findIndex((i) => i.Name === itemName);
      if (targetItemIndex == -1) {
        throw new Error('This is bad');
      }
      itemTypeList[targetItemIndex].Status = newStatus;
      this.saveClueState(item);
      this.gameStateSubject.next(item);
    } catch (error) {
      console.log(`item ${itemName} could not be found in list of ${itemType}`);
    }
  }
}
