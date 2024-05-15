import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { InitItems } from '../models/staticInitObjects';
import { gameObject } from '../models/gameObject.interface';
import { throwError } from 'rxjs';
import { ItemCategories } from '../models/deductionItems.interface';
import { DeductionStatus } from '../models/deductionStatus.enum';
@Injectable({
  providedIn: 'root',
})
export class ClueStorageService {
  constructor(private localStorage: LocalStorageService) {}
  itemKey = 'gameItems';
  initStorage = () => {
    try {
      let item = this.localStorage.tryGet(this.itemKey);
      if (!item.success) {
        this.localStorage.set(this.itemKey, InitItems);
      }
    } catch (error) {
      console.log('Error occurred on init ' + error);
    }
  };

  getClueState = (): gameObject => {
    let item;
    try {
      let res = this.localStorage.tryGet(this.itemKey);
      if (!res.success) {
        throw new Error('Clue State not in memory');
      }
      item = res.value;
    } catch (error) {
      console.log('Error');
    }
    return item;
  };

  saveClueState = (state: gameObject) => {
    try {
      this.localStorage.set(this.itemKey, state);
    } catch (error) {
      console.log("Error in saving clue state " + error);
    }
  }

  updateItemInState = (
    itemName: string,
    itemType: 'Suspects' | 'Weapons' | 'Locations',
    newStatus: DeductionStatus
  ) => {
    try {
      let item = this.getClueState();
      let itemTypeList = item[itemType];
      let targetItemIndex = itemTypeList.findIndex(i => i.Name === itemName);
      if(targetItemIndex == -1)
        {
          throw new Error("This is bad")
        }
      itemTypeList[targetItemIndex].Status = newStatus
      this.saveClueState(item);
    } catch (error) {
      console.log(`item ${itemName} could not be found in list of ${itemType}`)
    }
  };
}
