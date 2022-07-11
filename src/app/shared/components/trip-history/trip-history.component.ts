import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { RouteConfig } from 'src/app/config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-trip-history',
  templateUrl: './trip-history.component.html',
  styleUrls: ['./trip-history.component.scss']
})
export class TripHistoryComponent implements OnInit {

  @Input("tableData") tableData: any = [];
  @Input("toolTipData") toolTipData: any = {};
  
  showPopupIndex: number;

  constructor(private router: Router, public service: MainService, private localService: LocalService) { }

  ngOnInit(): void {
  }

  calcTime(stopTime, startTime){
    let duration  = moment.duration(moment(stopTime).diff(moment(startTime)))
    const lang = this.localService.getItem('currentlang') || 'en';
    if(lang == 'en'){
      return moment.utc(duration.as('milliseconds')).format('HH[h] mm[m]') 
    }
    else{
      return moment.utc(duration.as('milliseconds')).format('HH[u] mm[m]') 
    }
  }

  dateTimeFormat(dateTime){
    if(dateTime)
      return moment(dateTime).utc().format("HH:mm [•] DD/MM/yyyy")
    else
      return 'NA'
  }

  onMouseEnter(selectedObj, index){
    if(index == this.showPopupIndex) this.showPopupIndex = null;
    else this.showPopupIndex = index;
  }

  routeToTripDetailInfo(id){
    this.router.navigate([RouteConfig.tripDetail.url], { queryParams: {tripId: id}})
  }

  checkKeyPresent(obj){
    if(obj){
      let key  = Object.keys(obj)
      if(key.length) return true;
      else return false;
    }
    else{
      return false;
    }   
  }


  routeToDriverDetail(id) {
    this.localService.setItem('driverId', id)
    this.router.navigate([RouteConfig.driverDetail.url])
  }

}
