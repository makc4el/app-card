import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GlobalStoreService {
  public globalStore = new Subject<any>();

  constructor() {
  }

  getData(): Observable<any> {
    return this.globalStore.asObservable();
  }

  saveData(key:string, value:any) {
    let obj = {};
    obj[key] = value;
    this.globalStore.next(obj);
  }

}
