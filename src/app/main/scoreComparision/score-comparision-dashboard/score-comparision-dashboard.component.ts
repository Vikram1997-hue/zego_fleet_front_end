import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';

@Component({
  selector: 'app-score-comparision-dashboard',
  templateUrl: './score-comparision-dashboard.component.html',
  styleUrls: ['./score-comparision-dashboard.component.scss']
})
export class ScoreComparisionDashboardComponent implements OnInit {
  tableView: string = 'table';

  public isCollapsed = true;

  searchString:string;

    // GUAGE CHART VARIABLES

    hideToggle = false;
    gaugeType = "semi";
    thresholdConfig = AppConfig.gaugeThreshold;
      // stacked bar variable

  colorBox: any = ["#ed502e", "#604EFF", "#FFEA6C", "#4dbfff", "#2A1E91"];

  stackBar = [
    { value: 0, class: "ridOfmax1", speed: 0, color: '' },
    { value: 0, class: "busyRoad1", speed: 0, color: '' },
    { value: 0, class: "quietRoad1", speed: 0, color: '' },
    { value: 0, class: "buildUp1", speed: 0, color: '' },
    { value: 0, class: "ridOfHighSpeed1", speed: 0, color: '' }
  ]

  showStackBar: any = [];
  noRoadTypeData: boolean = false;
  selectedOrgID: any;
  idling: number;
  acceleration: number;
  braking: number;
  cornering: number;
  speed: number;
  speedProfile: any = { 'speed': [], "limit": [], 'time': [] };
  accProfile: any = { 'acc': [], "deacc": [], 'time': [] };
  alerts: any = {};

  exceptionTypeObj = {
    "speed": "Speeding",
    "breaking": "Braking",
    "acceleration": "Acceleration",
    "cornering": "Cornering",
    "idling": "Idiling"
  }
  exceptionArray: any = {};
  exceptionCount: number = 0;
  exceptionKeys: any = [];
  exceptionShowOnMap: boolean = false;


  tripId:string;



    //Ng Accordian 
    hideToggle1 = false;
    displayMode: string = 'default';
    multi = true;
    disabled = false;

    selected: any = {
      startDate: moment().subtract(6, 'days').set('hours', 0).set('minutes', 0),
      endDate: moment().set('hours', 23).set('minutes', 59)
    };
    selectedShow: any = {
      startDate: moment().subtract(6, 'days').set('hours', 0).set('minutes', 0),
      endDate: moment().set('hours', 23).set('minutes', 59)
    };

      // CALENDAR

      ranges: any =  AppConfig.momentRange;

      alwaysShowCalendars: boolean = true;
      showRangeLabelOnInput: boolean = true;
      keepCalendarOpeningWithRange: boolean = true;
      invalidDates = [];
    
      tooltips = [
        { date: moment(), text: 'Today is just unselectable' },
        { date: moment().add(2, 'days'), text: 'Yeeeees!!!' }
      ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleChange(value){
    this.tableView = value;
  }


isInvalidDate = (m) => {
  return this.invalidDates.some(d => d.isSame(m, 'day'));
}

isTooltipDate = (m) => {
  const tooltip = this.tooltips.find(tt => tt.date.isSame(m, 'day'));
  if (tooltip) {
    return tooltip.text;
  } else {
    return false;
  }
}

rangeClicked(label) {
  // console.log('[rangeClicked] range is : ', label);
}

datesUpdated(range) {
  //  console.log('[datesUpdated] range is : ', range);
}

  // toggleChange(value) {
  //   this.tableView = value;
  // }

  changeState() {
    this.isCollapsed = !this.isCollapsed;
    // if (!this.isCollapsed) {
    //   this.resetToLastState();
    // }
  }

}
