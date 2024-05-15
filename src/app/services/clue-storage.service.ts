import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { InitItems } from '../models/staticInitObjects';
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
      } else {
      }
    } catch (error) {}
  };
}
