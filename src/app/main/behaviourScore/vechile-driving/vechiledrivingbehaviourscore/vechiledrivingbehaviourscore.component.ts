import { formatDate } from '@angular/common';
import { Component, ElementRef, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { RouteConfig } from 'src/app/config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-vechiledrivingbehaviourscore',
  templateUrl: './vechiledrivingbehaviourscore.component.html',
  styleUrls: ['./vechiledrivingbehaviourscore.component.scss']
})



export class VechiledrivingbehaviourscoreComponent implements OnInit {

  public isCollapsed = true;
  active=1;
  displayedColumns: string[] = ['license_plate','vin', 'vehicle_category.name', 'model', 'fuel_type', 'vehicle_summarised_data[0].fuel_consumption', 'mileage', 'vehicle_summarised_data[0].last_apk_date'];

  dataSource;
  page: number = 1;
  limit: number = 5;
  totalCount: number;
  count = 2;
  searchString: string;
  isTripHistoryLoading=false;
 
  speedProfile: any = { 'weight': [], "date": []};
  accProfile: any = { 'weight': [], 'date': [] };
  // CALENDAR

  ranges: any =  AppConfig.momentRange;
  alwaysShowCalendars: boolean = true;
  showRangeLabelOnInput: boolean = true;
  keepCalendarOpeningWithRange: boolean = true;
  selected: any;
  selectedAgain: any;

  selectedDriver: any = 'all';
  searchDriver: string = ''
  driverList: any = [];

  invalidDates = [];
  selectedOrgID: any;
  graphname="safe_score"
  tooltips = [
    { date: moment(), text: 'Today is just unselectable' },
    { date: moment().add(2, 'days'), text: 'Yeeeees!!!' }
  ];

  myChartleft;
  myChartright;
  drivingBehaviourLeft: any;
  drivingBehaviourRight: any;
  drivingBehaviourLeftgraph: any;
  drivingBehaviourRightgraph: any;

  tableDataLoading: boolean = true;
  selectedShow: any = {
    startDate: moment().subtract(29, 'days').set('hours', 0).set('minutes', 0),
    endDate: moment().set('hours', 23).set('minutes', 59)
  };
  selectedShowCopy: any = {
    startDate: moment().subtract(29, 'days').set('hours', 0).set('minutes', 0),
    endDate: moment().set('hours', 23).set('minutes', 59)
  };

  constructor(
    private router: Router,
    public service: MainService,
    private localService: LocalService,
    private elementRef: ElementRef,
    @Inject(LOCALE_ID) private locale: string
  ) {
    Chart.register(...registerables);

    this.selected = {
      startDate: moment().subtract(3, 'month').startOf('month').set('hours', 0).set('minutes', 0),
      endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
    };
    this.selectedAgain = {
      startDate: moment().subtract(29, 'days').set('hours', 0).set('minutes', 0),
      endDate: moment().set('hours', 23).set('minutes', 59)
    };
  }

  ngOnInit(): void {
    this.selectedOrgID = this.localService.getItem("selectedOrgs")
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }
    if (this.selectedOrgID) {
      this.resetToLastState();
      this.updatePageData();
      this.getDrivers();
    }

    this.localService.watchOrgData().subscribe((resp) => {
      if (resp && this.router.url.split('?')[0] == RouteConfig.vechiledrivingBehaviour.url) {
        // console.log('')
        let orgId: any = this.localService.getItem("selectedOrgs")
        if (orgId) {
          orgId = JSON.parse(orgId);
        }
        let isEqual = true;
        if (this.selectedOrgID && this.selectedOrgID.length && orgId && orgId.length) {
          isEqual = (orgId.length === this.selectedOrgID.length) && (orgId.every(val => this.selectedOrgID.includes(val)));
        }
        else {
          isEqual = false;
        }
        if (!isEqual) {
          this.selectedOrgID = [...orgId];
          this.resetToLastState();
          this.updatePageData();
          this.getDrivers();
        }

      }
    });
  }
  getDrivers() {
    this.searchDriver = '';
    this.service.get(`drivers/by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
      if (response.data) {
        this.driverList = response.data;
        // console.log(this.driverList)
      }
    }, (error) => {

    })
  }


  // // 1. Yesterday, 2. last 7 Days, 3. last 30 days, 4.last 1 month ,  5. last 3 Months, 6. last 12 months
  getDrivingBehaviour(side, driverId?,search?, date?) {
    this.isTripHistoryLoading=true;
    let querryParams = this.createQuerryparams(driverId,search,date)
    this.service.get(`driving-analytics?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.isTripHistoryLoading=false;
        if (side == 1) {
          this.drivingBehaviourLeft = response.data;
        }
        else {
          this.drivingBehaviourRight = response.data;
        }
      }
      else {
        this.isTripHistoryLoading=false;
        if (side == 1) {
          this.drivingBehaviourLeft = {};
        }
        else {
          this.drivingBehaviourRight = {};
        }
      }
    }, (error) => {
      this.isTripHistoryLoading=false;
    })
  }
  getDrivingBehaviourgraph(side, driverId?,search?, date?,graphname?) {
    // console.log(this.selectedDriver)
    this.isTripHistoryLoading=true;
    let querryParams = this.createQuerryparams(driverId,search,date,graphname,graphname)
    this.service.get(`driving-analytics-graph?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.isTripHistoryLoading=false;
        if (side == 1) {
          
          this.speedProfile = { 'weight': [], "date": [] };
         
          this.drivingBehaviourLeftgraph = response.data;
          this.creategraphArray(side,this.graphname)
          
        }
        else if (side == 2) {
          this.drivingBehaviourRightgraph = response.data;
          this.creategraphArray(side,this.graphname)
        }
        // else {
        //   this.drivingBehaviourRight = response.data;
        // }
      }
      else {
        this.isTripHistoryLoading=false;
        if (side == 1) {
          if(this.myChartleft){
            this.myChartleft.destroy();
          }
          this.drivingBehaviourLeftgraph = {};
        }
        else {
          this.drivingBehaviourRightgraph = {};
        }
      }
    }, (error) => {
      this.speedProfile = { 'weight': [], "date": [] };
      this.accProfile = { 'weight': [], 'date': [] };
      this.isTripHistoryLoading=false;
    })
  }
  creategraphArray(side,graphname){
    // console.log(this.drivingBehaviourRightgraph)
    if(side==1){
      this.speedProfile= { 'weight': [], "date": [] };
  
      if(this.myChartleft){
        this.myChartleft.destroy()
      }
      // console.log(array)
      this.drivingBehaviourLeftgraph.forEach(element => {
        if(element[graphname] !== '1001' && element[graphname] !== 1001 && element[graphname] !== '1001.0'){
          this.speedProfile.weight.push((Number(element[graphname])).toFixed(1));
        }
        else{
          this.speedProfile.weight.push(null);
        }
        this.speedProfile.date.push(moment.utc(element.date).format('DD/MM'))
      });
      // console.log(this.speedProfile)
      this.createleftChart();
    }
    else{
      this.accProfile= { 'weight': [], 'date': [] };
      if(this.myChartright){
        this.myChartright.destroy()
      }
      // console.log(array)
      this.drivingBehaviourRightgraph.forEach(element => {
        if(element[graphname] !== '1001' && element[graphname] !== 1001  && element[graphname] !== '1001.0'){
          this.accProfile.weight.push((Number(element[graphname])).toFixed(1));
        }
        else{
          this.accProfile.weight.push(null);
        }
        this.accProfile.date.push(moment.utc(element.date).format('DD/MM'))
      });
      // console.log(this.speedProfile)
      this.createrightChart()
    }
}

  updatePageData() {
    this.getDrivingBehaviour(1, this.selectedDriver,this.searchString,this.selected)
    this.getDrivingBehaviour(2, this.selectedDriver,this.searchString, this.selectedAgain)
    this.getDrivingBehaviourgraph(1, this.selectedDriver,this.searchString,this.selected,this.graphname)
    this.getDrivingBehaviourgraph(2, this.selectedDriver,this.searchString, this.selectedAgain,this.graphname)
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

  datesUpdatedDashboard(range){
  }

 
  datesUpdated(range, side) {
    if (this.count > 0) {
      this.count = this.count - 1;
      return
    }
    else {
      if (side == 1) {
        this.getDrivingBehaviour(1, this.selectedDriver,this.searchString,this.selected),
        this.getDrivingBehaviourgraph(1, this.selectedDriver,this.searchString,this.selected,this.graphname)
      }
      else {
        this.getDrivingBehaviour(2, this.selectedDriver,this.searchString,this.selectedAgain)
        this.getDrivingBehaviourgraph(2, this.selectedDriver,this.searchString,this.selectedAgain,this.graphname)

      }
    }
    // console.log('[datesUpdated] range is : ', range);
  }
  updategraph(name) {
    this.graphname = name;
    this.creategraphArray(1,this.graphname)
    this.creategraphArray(2,this.graphname)
  }


  changeState(){
    this.isCollapsed = !this.isCollapsed;
    if(!this.isCollapsed){
      this.resetToLastState();
    }
  }

  resetToLastState() {
    this.graphname='safe_score';
    this.active=1
    let category = this.localService.getItem("driver")
    let search = this.localService.getItem("search")
    let date: any = this.localService.getItem("dateRange")
    if(date){
      date = JSON.parse(date)
      this.selectedShowCopy = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate)
      };
      this.selectedShow = this.selectedShowCopy;
    }
    else{
      this.selectedShow = {
        startDate: moment().subtract(29, 'days').set('hours', 0).set('minutes', 0),
        endDate: moment().set('hours', 23).set('minutes', 59)
      };
      this.selectedShowCopy = {
        startDate: moment().subtract(29, 'days').set('hours', 0).set('minutes', 0),
        endDate: moment().set('hours', 23).set('minutes', 59)
      };
    }
    search?  this.searchString = search : this.searchString = '';
    category && category!=='all' ? this.selectedDriver = JSON.parse(category) : this.selectedDriver = 'all';
  }

  filterApply() {
    this.localService.setItem("driver", this.selectedDriver)
    this.localService.setItem("search", this.searchString)
    this.localService.setItem("dateRange",JSON.stringify(this.selectedShow));
    this.selectedShowCopy = this.selectedShow;
    this.updatePageData();
    this.changeState();
  }

  createQuerryparams(driverId?, search?,date?,listing?,graphname?) {
    let querryParams
    if (listing) {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}&page=${this.page}&limit=${this.limit}`;
    }
    else {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
    }

    if ((driverId && driverId !== 'all')) {
      querryParams = querryParams + `&driver=[${driverId}]`
    }
    if(search){
      querryParams = querryParams + `&search=${search}`
    }
    if(graphname){
      querryParams = querryParams + `&score_type=${graphname}`
    }
    querryParams = querryParams + `&from_date=${moment(date.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(date.endDate).format('YYYY-MM-DD')}`
    // querryParams = querryParams + `&custom_filter=true`
    let val = this.service.checkCustomDate(moment(date.startDate).format('YYYY-MM-DD'),moment(date.endDate).format('YYYY-MM-DD'))
       if(val == undefined){
      querryParams = querryParams + `&custom_filter=true&filter_value=''`
    }
    else{
      if((driverId && driverId !== 'all') || search){
        querryParams = querryParams + `&custom_filter=true&filter_value=''`
      }
      else{
        querryParams = querryParams + `&custom_filter=false&filter_value=${val}`
      }
     }
    return querryParams;
  }

  routeToVehicleDetail(id){
    this.localService.setItem('vehicleId', id)
    this.router.navigate([RouteConfig.vehicleDetail.url])
  }

  formatToFixed(val,precision){
    if(typeof val == 'string'){
      val = parseFloat(val)
    }
   if(val){
     return val.toFixed(precision);
   }
   return 0;
 }

 resetFilter(){
  this.selectedDriver = 'all';
  // this.selectedVehicle = 'all';
  this.searchString = '';
  this.selectedShow = {
    startDate: moment().subtract(29, 'days').set('hours', 0).set('minutes', 0),
    endDate: moment().set('hours', 23).set('minutes', 59)
  };
  this.filterApply();
}

createleftChart() { 
  const labels = this.speedProfile['date'];
  let htmlRef = this.elementRef.nativeElement.querySelector(`#myChartleft`);
  const gradient = this.elementRef.nativeElement.querySelector(`#myChartleft`).getContext('2d').createLinearGradient(0, 0, 0, 600);
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  gradient.addColorStop(0, 'rgba(0, 122, 255, 0.33)');
   this.myChartleft = new Chart(htmlRef, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: `${formatDate(this.selected.startDate._d ,'dd-MM-yyyy',this.locale)} - ${formatDate(this.selected.endDate._d ,'dd-MM-yyyy',this.locale)}`,
          data: this.speedProfile['weight'],
          borderColor: '#0064FF',
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
          fill: 'start',
          backgroundColor: gradient
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio:false,
      aspectRatio: 1,
      plugins: {
        title: {
          display: false,
          text: 'Stacked scales',
        },
        legend: {
          align: 'end',
          labels: {
            usePointStyle: true,
            pointStyle: 'rect',
            
          }
        },
        tooltip: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        }
      },
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          stack: 'demo',
          stackWeight: 2,
          grid: {
            color: 'rgba(0, 0, 0, 0)'
          },
          ticks:{
            precision: 0
          }

        },
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 0)'
          }
        },
        
      }
    }
  });

}
createrightChart() { 
  const labels = this.accProfile['date'];
  let htmlRef = this.elementRef.nativeElement.querySelector(`#myChartright`);
  const gradient = this.elementRef.nativeElement.querySelector(`#myChartright`).getContext('2d').createLinearGradient(0, 0, 0, 600);
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  gradient.addColorStop(0, 'rgba(0, 122, 255, 0.33)');
   this.myChartright = new Chart(htmlRef, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: `${formatDate(this.selectedAgain.startDate._d ,'dd-MM-yyyy',this.locale)} - ${formatDate(this.selectedAgain.endDate._d ,'dd-MM-yyyy',this.locale)}`,
          data: this.accProfile['weight'],
          borderColor: '#4DBFFF',
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
          fill: 'start',
          backgroundColor: gradient
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio:false,
      aspectRatio: 1,
      plugins: {
        title: {
          display: false,
          text: 'Stacked scales',
        },
        legend: {
          align: 'end',
          labels: {
            usePointStyle: true,
            pointStyle: 'rect',
            
          }
        },
        tooltip: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        }
      },
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          stack: 'demo',
          stackWeight: 2,
          grid: {
            color: 'rgba(0, 0, 0, 0)'
          },
          ticks:{
            precision: 0
          }

        },
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 0)'
          }
        },
        
      }
    }
  });

}
destroy(){
  this.myChartleft.destroy();
}
}



