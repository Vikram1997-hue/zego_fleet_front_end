import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent implements OnInit {
  public isCollapsed = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  isTripHistoryLoading: boolean = false;
  tripHistory: any = [];

  reportData: any = {};

  idling: any;
  acceleration: any;
  braking: any;
  cornering: any;
  speed: any;
  
  speedProfile: any = { 'speed': [], "limit": [], 'time': [] };
  accProfile: any = { 'acc': [], "deacc": [], 'time': [] };

  page: number = 1;
  limit: number = 5;
  totalCount: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  selectedOrgID: any;

  tripToolTipData: any = {};

  alertsCount: any = [];

  gaugeType = "semi";
  thresholdConfig = AppConfig.gaugeThreshold;

  gaugeMin = AppConfig.gaugeMin;
  gaugeMax = AppConfig.gaugeMax;

  // stacked bar variable

  colorBox: any = ["#ed502e", "#604EFF", "#F0CE00", "#4dbfff", "#2A1E91"];

  stackBar = [
    { value: 0, class: "ridOfmax1", speed: 0, color: '' },
    { value: 0, class: "busyRoad1", speed: 0, color: '' },
    { value: 0, class: "quietRoad1", speed: 0, color: '' },
    { value: 0, class: "buildUp1", speed: 0, color: '' },
    { value: 0, class: "ridOfHighSpeed1", speed: 0, color: '' }
  ]

  showStackBar: any = [];
  noRoadTypeData: boolean = false;

  tableView: string = 'table';
  searchString: string = '';

  // CALENDAR

  ranges: any = AppConfig.momentRange;
  alwaysShowCalendars: boolean = true;
  showRangeLabelOnInput: boolean = true;
  keepCalendarOpeningWithRange: boolean = true;

  selectedDriver: any;
  searchDriver: string = ''
  driverList: any = [];

  invalidDates = [];

  tooltips = [
    { date: moment(), text: 'Today is just unselectable' },
    { date: moment().add(2, 'days'), text: 'Yeeeees!!!' }
  ];

  selectedShow: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };
  selectedShowCopy: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };

  dashboardData: any;


  constructor(
    private elementRef: ElementRef,
    public service: MainService,
    private localService: LocalService,
    public dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    Chart.register(...registerables);
    Chart.register(zoomPlugin);
  }

  ngOnInit(): void {
    this.limit =  Number(this.localService.getItem("tripLimit")) || 5;
    this.selectedOrgID = this.localService.getItem("selectedOrgs")
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }

    if (this.selectedOrgID) {
      this.resetToLastState();
      this.getDrivers()
      this.updatePageData()
    }

    this.localService.watchOrgData().subscribe((resp) => {
      if (resp && this.router.url.split('?')[0] == RouteConfig.driverDetail.url) {
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
          this.getDrivers()
          this.updatePageData();
        }

      }
    });
  }

  getDrivers() {
    this.searchDriver = '';
    this.service.get(`drivers/by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
      if (response.data) {
        this.driverList = response.data;
      }
    }, (error) => {

    })
  }


  goToLastPage(){
    if(this.localService.getItem('driverUrl')){
      let url  = this.localService.getItem('driverUrl')
      let page = url.split('=')[1]
      page =  page? page: '1'
      this.router.navigate([RouteConfig.driver.url],{queryParams: {page: page}})
    }
    else{
      this.router.navigate([RouteConfig.driver.url])
    }
  }

  toggleChange(value) {
    this.tableView = value;
  }

  formatToFixed(val, precision) {
    if (typeof val == 'string') {
      val = parseFloat(val)
    }
    if (val) {
      return val.toFixed(precision);
    }
    return 0;
  }

  resetFilter() {
    let driver = this.localService.getItem("driverId")
    driver? this.selectedDriver = JSON.parse(driver) : this.selectedDriver = '';
    this.searchString = '';
    this.selectedShow = {
      startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
      endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
    };
    this.filterApply();
  }

  getTripHistory(driverId?,search?) {
    this.isTripHistoryLoading = true;
    let querryParams = this.createQuerryparams(driverId,search, 'listing')
    this.service.get(`trips?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.isTripHistoryLoading = false;
        this.totalCount = response.data.count;
        this.tripHistory = response.data.rows;
        this.alertsCount = [];
        response.data.rows.forEach(element => {
          this.alertsCount.push(element.id)
        });
        if (this.totalCount){
          this.getexception();
          this.getTooltipInfo(this.tripHistory)
        }
        this.setPage(this.page-1)
      }
      else{
        this.totalCount = 0;
        this.tripHistory = [];
      }
    }, (error) => {
      this.isTripHistoryLoading = false;
      this.tripHistory = [];
    })
  }

  getexception() {
    const data = {
      "tripId": this.alertsCount
    }
    this.service.post('trips/alerts', data).pipe().subscribe(res => {
      if (res.data) {
        this.tripHistory.filter((ele, i) => {
          for (const k in res.data) {
            if (ele.id == k) {
              this.tripHistory[i].exception_events = ((res.data)[k]);
            }
          }
        })
      }
    })
  }


  changeState() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.resetToLastState();
    }
  }

  resetToLastState() {
    let driver = this.localService.getItem("driverId")
    let search = this.localService.getItem("search")
    let date: any = this.localService.getItem("dateRange")
    if (date) {
      date = JSON.parse(date)
      this.selectedShowCopy = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate)
      };
      this.selectedShow = this.selectedShowCopy;
    }
    else {
      this.selectedShow = {
        startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
        endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
      };
      this.selectedShowCopy = {
        startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
        endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
      };
    }
    search ? this.searchString = search : this.searchString = '';
    driver? this.selectedDriver = JSON.parse(driver) : this.selectedDriver = '';
  }

  filterApply() {
    this.localService.setItem("driverId", this.selectedDriver)
    this.localService.setItem("search", this.searchString)
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
    this.selectedShowCopy = this.selectedShow;
    this.updatePageData();
    this.changeState();
  }

  updatePageData() {
    this.searchDriver = '';
    this.totalCount = 0;
    this.activeRoute.queryParams
    .subscribe(params => {
      // const details:any = params.page;
      this.page=params?.page || 1;
    }
  );
    this.getTripHistory(this.selectedDriver, this.searchString)
    this.getDriverReport(this.selectedDriver)
    this.getDriverProfileScore(this.selectedDriver)
    this.getRoadTypeDistribution(this.selectedDriver)
    this.getSpeedProfileData();
    this.getAccelerationProfileData();
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

  createQuerryparams(driverId?, search?,listing?) {
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
    // if(search){
    //   querryParams = querryParams + `&search=${search}`
    // }
    querryParams = querryParams + `&from_date=${moment(this.selectedShowCopy.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selectedShowCopy.endDate).format('YYYY-MM-DD')}`
    return querryParams;
  }

  getTooltipInfo(tableData) {
    const data = {
      "tripId": this.alertsCount
    }
    this.service.post('trips/exception-counts', data).pipe().subscribe(res => {
      if (res.data) {
        for(const k in res.data){
          this.tripToolTipData[k] = this.service.convertFormat((res.data)[k]);
        }
      }
    })
  }

  getDriverReport(driverId){
    let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`
    querryParams = querryParams + `&from_date=${moment(this.selectedShowCopy.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selectedShowCopy.endDate).format('YYYY-MM-DD')}`
    this.service.get(`drivers/${driverId}?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.reportData = response.data;
      }
      else {
        this.reportData = {};
      }
    }, (error) => {
      this.reportData = {};
    })
  }

  getDriverProfileScore(driverId){
    let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`
    querryParams = querryParams + `&from_date=${moment(this.selectedShowCopy.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selectedShowCopy.endDate).format('YYYY-MM-DD')}`
    this.service.get(`drivers/${driverId}/score?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.idling = response.data.idling;
        this.acceleration = response.data.acceleration;
        this.braking = response.data.breaking;
        this.cornering = response.data.cornering;
        this.speed = response.data.speed;      
      }
      else {
        this.idling = 0;
        this.acceleration = 0;
        this.braking = 0;
        this.cornering = 0;
        this.speed = 0;
      }
    }, (error) => {
      this.idling = 0;
      this.acceleration = 0;
      this.braking = 0;
      this.cornering = 0;
      this.speed = 0;    })
  }


  getRoadTypeDistribution(driverId) {
    let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`
    querryParams = querryParams + `&from_date=${moment(this.selectedShowCopy.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selectedShowCopy.endDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&custom_filter=true&filter_value=''`
    // let val = this.service.checkCustomDate(moment(this.selectedShowCopy.startDate).format('YYYY-MM-DD'),moment(this.selectedShowCopy.endDate).format('YYYY-MM-DD'))
    //    if(val == undefined){
    //   querryParams = querryParams + `&custom_filter=true&filter_value=''`
    // }
    // else{
    //   querryParams = querryParams + `&custom_filter=false&filter_value=${val}`
    // }
    this.service.get(`drivers/${driverId}/road-type-distribution?${querryParams}`).pipe().subscribe(response => {
      if (response.data && response.data.length) {
        for (let i = 0; i < response.data.length; i++) {
          if (this.stackBar[i]) {
            this.stackBar[i].value = response.data[i].contribution_value.toFixed(1);
            this.stackBar[i].speed = response.data[i].road_factor_name
            this.stackBar[i].color = this.colorBox[i];
          }
        }
        this.showStackBar = this.stackBar.filter((x) => {
          return x.value > 0;
        })
        if (!this.showStackBar.length) {
          this.noRoadTypeData = true;
        }
        else {
          this.noRoadTypeData = false;
        }
      }
      else {
        this.noRoadTypeData = true;
      }
    }, (error) => {
      this.noRoadTypeData = true;
    })
  }

  getSpeedProfileData() {
    let querryParams = `type=1`
    querryParams = querryParams + `&from_date=${moment(this.selectedShowCopy.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selectedShowCopy.endDate).format('YYYY-MM-DD')}`
    this.service.get(`drivers/${this.selectedDriver}/driving-data?${querryParams}`).pipe().subscribe(response => {
      if (response.data && response.data.length) {
        response.data.forEach(element => {
          this.speedProfile['speed'].push(+element.property_value)
          this.speedProfile['limit'].push(+element.waypoint.road_speed)
          this.speedProfile['time'].push(moment(element.timestamp).utc().format('D/MM ,HH:mm:ss'))
        });
      }
      else {
        this.speedProfile = { 'speed': [], "limit": [], 'time': [] };
      }
      this.createSpeedProfileChart();
    }, (error) => {
      this.speedProfile = { 'speed': [], "limit": [], 'time': [] };
    })
  }

  getAccelerationProfileData() {
    let querryParams = `type=2`
    querryParams = querryParams + `&from_date=${moment(this.selectedShowCopy.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selectedShowCopy.endDate).format('YYYY-MM-DD')}`
    this.service.get(`drivers/${this.selectedDriver}/driving-data?${querryParams}`).pipe().subscribe(response => {
      if (response.data && response.data.length) {
        response.data.forEach(element => {
          if (element.property_id == 'AccelerationID') {
            this.accProfile['acc'].push(+element.property_value)
            this.accProfile['deacc'].push('')
          }
          else {
            this.accProfile['acc'].push('')
            this.accProfile['deacc'].push(+element.property_value)
          }
          this.accProfile['time'].push(moment(element.timestamp).utc().format('D/MM, HH:mm:ss'))
        });
      }
      else {
        this.accProfile = { 'acc': [], "deacc": [], 'time': [] };
      }
      this.createAccProfileChart();
    }, (error) => {
      this.accProfile = { 'acc': [], "deacc": [], 'time': [] };
    })
  }

  myChart;
  createSpeedProfileChart() {
    const labels = this.speedProfile['time'];
    let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    const gradient = this.elementRef.nativeElement.querySelector(`#myChart`).getContext('2d').createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0, 'rgba(0, 122, 255, 0.33)');
    if(this.myChart) this.myChart.destroy();
     this.myChart = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Speed km/h',
            data: this.speedProfile['speed'],
            borderColor: '#0064FF',
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            fill: 'start',
            backgroundColor: gradient
          },
          {
            label: 'Limit',
            data: this.speedProfile['limit'],
            borderColor: '#FA1464',
            stepped: true
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'Stacked scales',
          },
          legend: {
            labels: {
              usePointStyle: true
            }
          },
          tooltip: {
            mode: 'nearest',
            axis: 'x',
            intersect: true
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
            }

          },
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0)'
            },
            ticks:{
              maxTicksLimit: 10
            }
          },
          
        }
      }
    });
  }
  myChart1;
  createAccProfileChart() {
    var labels = this.accProfile['time'];
    let htmlRef = this.elementRef.nativeElement.querySelector(`#myChartAcc`);
    const gradient = this.elementRef.nativeElement.querySelector(`#myChartAcc`).getContext('2d').createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0, 'rgba(0, 122, 255, 0.33)');
    let _this = this;
    if(this.myChart1) this.myChart1.destroy();
     this.myChart1 = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Acceleration profile',
            data: this.accProfile['acc'],
            borderColor: '#0064FF',
            // stepped: true
          },
          {
            label: 'Braking Profile',
            data: this.accProfile['deacc'],
            borderColor: '#FA1464',
            // stepped: true,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'Stacked scales',
          },
          legend: {
            labels: {
              usePointStyle: true
            }
          },
          tooltip: {
            mode: 'nearest',
            axis: 'x',
            intersect: true
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0)'
            },
            ticks:{
              maxTicksLimit: 10
            }
          },
          y: {
            position: 'left',
            stack: 'demo',
            stackWeight: 2,
            grid: {
              color: 'rgba(0, 0, 0, 0)'
            }
          }
        }
      }
    });
  }

  openChartPopup(chartData,type){
    let chart = {chartData: chartData, type: type}
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      disableClose: true ,
      panelClass: 'custom-dialog-container',
      height: '80%',
      width: '80%',
      data: chart,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  pageChange(event) {
    if(this.limit !== event.pageSize){
      const queryParams: Params = { page: 1 };
      this.router.navigate(
        [], 
        {
          
          queryParams: queryParams, 
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
      this.page = 1;
    }
    else{
      const queryParams: Params = { page: event.pageIndex + 1 };
      this.router.navigate(
        [], 
        {
          
          queryParams: queryParams, 
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
      this.page = event.pageIndex + 1;
    }
    this.limit = event.pageSize;
    this.localService.setItem("tripLimit", this.limit);
    this.isCollapsed = true;
    let driver = this.localService.getItem("driverId")
    let search = this.localService.getItem("search")
    this.getTripHistory(driver, search)
  }

  setPage(index: number) {
    if(this.paginator)
    this.paginator.pageIndex = index;
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './chart-data.html',
  styleUrls: ['./driver-detail.component.scss']
})

export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    private elementRef: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    Chart.register(...registerables);
    Chart.register(zoomPlugin);
    setTimeout(()=>{
    if(this.data.type == 1){
        this.createSpeedProfileChart(this.data.chartData)
    }
    else{
      this.createAccProfileChart(this.data.chartData)
    }
  },200)
  }
  myChart;
  createSpeedProfileChart(data) {
    const labels = data['time'];
    let htmlRef = this.elementRef.nativeElement.querySelector(`#popupChart`);
    const gradient = this.elementRef.nativeElement.querySelector(`#popupChart`).getContext('2d').createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0, 'rgba(0, 122, 255, 0.33)');
      this.myChart = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Speed km/h',
            data: data['speed'],
            borderColor: '#0064FF',
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            fill: 'start',
            backgroundColor: gradient
          },
          {
            label: 'Limit',
            data: data['limit'],
            borderColor: '#FA1464',
            stepped: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: false,
            text: 'Stacked scales',
          },
          legend: {
            labels: {
              usePointStyle: true
            }
          },
          tooltip: {
            mode: 'nearest',
            axis: 'x',
            intersect: true
          },
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              drag:{
                enabled: true
              },
              mode: 'x',
            }
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
            }

          },
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0)'
            },
            ticks:{
              maxTicksLimit: 15
            }
          },

        }
      }
    });
  }

  createAccProfileChart(data) {
    var labels = data['time'];
    let htmlRef = this.elementRef.nativeElement.querySelector(`#popupChart`);
    const gradient = this.elementRef.nativeElement.querySelector(`#popupChart`).getContext('2d').createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0, 'rgba(0, 122, 255, 0.33)');
     this.myChart = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Acceleration profile',
            data: data['acc'],
            borderColor: '#0064FF',
            // stepped: true
          },
          {
            label: 'Braking Profile',
            data: data['deacc'],
            borderColor: '#FA1464',
            // stepped: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: false,
            text: 'Stacked scales',
          },
          legend: {
            labels: {
              usePointStyle: true
            }
          },
          tooltip: {
            mode: 'nearest',
            axis: 'x',
            intersect: true
          },
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              drag:{
                enabled: true
              },
              mode: 'x',
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0)'
            },
            ticks:{
              maxTicksLimit: 15
            }
          },
          y: {
            position: 'left',
            stack: 'demo',
            stackWeight: 2,
            grid: {
              color: 'rgba(0, 0, 0, 0)'
            }
          }
        }
      }
    });
  }

  resetZoom(){
    this.myChart.resetZoom();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

