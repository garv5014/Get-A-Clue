import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  tryGet(key: string): { success: boolean, value: any } {
    try {
      const data = this.get(key);
      return { success: data !== null, value: data };
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
      return { success: false, value: null };
    }
  }
}
