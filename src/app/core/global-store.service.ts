import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { mergeAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GlobalStoreService {
  globalStore = new ReplaySubject<any>();
  globalObj: any = {};

  constructor() {
  }

  getData(): Observable<any> {
    return this.globalStore.asObservable();
  }

  removeData(key) {
    delete this.globalObj[key];
    this.globalStore.next(this.globalObj);
  }

  saveData(key:string, value:any) {
    this.globalObj[key] = value;
    this.globalStore.next(this.globalObj);
  }

}
