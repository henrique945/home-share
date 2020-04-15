import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private myMap = new Map();

  constructor() { }

  public setMap(key: string, value: any): void{
    this.myMap.set(key, value);
  }

  public getMap(key: string): any{
    return this.myMap.get(key);
  }

}
