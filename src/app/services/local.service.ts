import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private orgUpdated = new Subject();
  private langUpdated = new Subject();
  private imageUpdated = new Subject();
  private dateRangeUpdated = new Subject();
  private filterApplied = new Subject();
  private dashboard = new BehaviorSubject({});


  constructor() { }

  watchOrgData(){
   return this.orgUpdated.asObservable();
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    if(key == 'selectedOrgs'){
      this.orgUpdated.next(true);
    }
    if(key == 'dateRange'){
      this.dateRangeUpdated.next(true);
    }
  }

  getDateRange(){
    return this.dateRangeUpdated.asObservable();
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }

  removeAllItem(){
    localStorage.clear();
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  storageclear() {
    localStorage.clear()
  }

  storeinSession(key: string, data: any) {
    sessionStorage.setItem(key, data);
  }

  getdatafromSession(key: any) {
    return sessionStorage.getItem(key);
  }

  sessionStorageclear() {
    sessionStorage.clear();
  }

  checkLoggedIn(){
    return localStorage.getItem('hmAccessToken')?true:false;
  }

  getLang(){
    return this.langUpdated.asObservable();
  }

  setLang(){
    this.langUpdated.next(true);
  }

  getImage(){
    return this.imageUpdated.asObservable();
  }

  setImage(){
    this.imageUpdated.next(true);
  }

  getFilter(){
    return this.filterApplied.asObservable();
  }

  setFilter(){
    this.filterApplied.next(true);
  }

  getdashboardData(){
    return this.dashboard.asObservable();
  }

  setdashboardData(data){
    this.dashboard.next(data);
  }
}
