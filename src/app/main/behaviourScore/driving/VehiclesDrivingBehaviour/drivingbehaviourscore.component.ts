
import { Component, ElementRef, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { RouteConfig } from 'src/app/config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-drivingbehaviourscore',
  templateUrl: './drivingbehaviourscore.component.html',
  styleUrls: ['./drivingbehaviourscore.component.scss']
})



export class DrivingbehaviourscoreComponent implements OnInit {

  public isCollapsed = true;
  active = 1;
  displayedColumns: string[] = ['license_plate', 'vin', 'vehicle_category.name', 'model', 'fuel_type', 'vehicle_summarised_data[0].fuel_consumption', 'mileage', 'vehicle_summarised_data[0].last_apk_date'];

  dataSource;
  page: number = 1;
  limit: number = 50;
  totalCount: number;
  count = 2;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  searchString: string;
  isTripHistoryLoading = false;
  speedProfile: any = { 'weight': [], "date": [] };
  accProfile: any = { 'weight': [], 'date': [] };

  // CALENDAR
  graphname = "safe_score"
  drivingBehaviourLeftgraph: any;
  drivingBehaviourRightgraph: any;
  ranges: any = AppConfig.momentRange;
  alwaysShowCalendars: boolean = true;
  showRangeLabelOnInput: boolean = true;
  keepCalendarOpeningWithRange: boolean = true;
  selected: any;
  selectedAgain: any;

  selectedVehicleCategory: any = 'all';
  selectedVehicle: any = 'all';
  searchCategory: string = '';
  searchVehicle: string = ''

  invalidDates = [];
  selectedOrgID: any;

  tooltips = [
    { date: moment(), text: 'Today is just unselectable' },
    { date: moment().add(2, 'days'), text: 'Yeeeees!!!' }
  ];

  dashboardData: any;
  vehicleCategoryData: any = [];
  vehicleList: any = [];

  myChartleft;
  myChartright;

  drivingBehaviourLeft: any;
  drivingBehaviourRight: any;

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
      this.getVehicleCategory();
      this.getVehicles();
      this.updatePageData()
    }

    this.localService.watchOrgData().subscribe((resp) => {
      if (resp && this.router.url.split('?')[0] == RouteConfig.drivingBehaviour.url) {
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
          this.getVehicleCategory();
          this.getVehicles();
          this.updatePageData();
        }

      }
    });
  }

  getVehicleDashboardData(categoryId?, vehicleId?, date?, search?) {
    let querryParams = this.createQuerryparams(categoryId, vehicleId, search, date)
    this.service.get(`vehicles/report?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.dashboardData = response.data;
      }
    }, (error) => {

    })
  }

  getVehicleCategory() {
    this.searchCategory = '';
    this.service.get(`vehicles/category-by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
      if (response.data && response.data.length) {
        this.vehicleCategoryData = response.data;
      }
    }, (error) => {

    })
  }

  getVehicles(categoryId?) {
    if ((categoryId && categoryId == 'all') || categoryId == undefined) {
      categoryId = ''
    }
    this.searchVehicle = '';
    this.service.get(`vehicles/by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
      if (response.data && response.data.length) {
        this.vehicleList = response.data;
      }
      // this.getUpdatedStats()
    }, (error) => {

    })
  }
  // // 1. Yesterday, 2. last 7 Days, 3. last 30 days, 4. last 3 Months, 5. last 12 months
  getDrivingBehaviour(side, categoryId?, vehicleId?, search?, date?) {
    this.isTripHistoryLoading = true;
    let querryParams = this.createQuerryparams(categoryId, vehicleId, search, date)
    this.service.get(`driving-analytics?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.isTripHistoryLoading = false;
        if (side == 1) {
          this.drivingBehaviourLeft = response.data;
        }
        else {
          this.drivingBehaviourRight = response.data;
        }
      }
      else {
        this.isTripHistoryLoading = false;
        if (side == 1) {
          this.drivingBehaviourLeft = {};
        }
        else {
          this.drivingBehaviourRight = {};
        }
      }
    }, (error) => {
      this.isTripHistoryLoading = false;
    })
  }
  updategraph(name) {
    this.graphname = name;
    this.creategraphArray(1,this.graphname)
    this.creategraphArray(2,this.graphname)
  }
  
  getDrivingBehaviourgraph(side, categoryId?, vehicleId?, search?, date?, graphname?) {
    this.isTripHistoryLoading = true;
    let querryParams = this.createQuerryparams(categoryId, vehicleId, search, date, "aa", graphname)
    this.service.get(`driving-analytics-graph?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.isTripHistoryLoading = false;
        if (side == 1) {
          this.speedProfile = { 'weight': [], "date": [] };
         
          this.drivingBehaviourLeftgraph = response.data;
          this.creategraphArray(side,this.graphname)
          
        }
        else if (side == 2) {
          
        
          this.drivingBehaviourRightgraph = response.data;
          this.creategraphArray(side,this.graphname)
          
          
        }
        
      }
      else {
        this.isTripHistoryLoading = false;
        if (side == 1) {
          if (this.myChartleft) {
            this.myChartleft.destroy();
          }
          this.drivingBehaviourLeftgraph = {};
        }
        else {
          this.drivingBehaviourRightgraph = {};
        }
      }
    }, (error) => {
      if(side==1){
        if (this.myChartright) {
          this.myChartleft.destroy();
        }
        this.speedProfile = { 'weight': [], "date": [] };
        // this.createleftChart()
      }
      else{
        if (this.myChartright) {
          this.myChartright.destroy();
        }
        this.accProfile = { 'weight': [], 'date': [] };
        // this.createrightChart()
        
      }
      
      
      this.isTripHistoryLoading = false;
    })
  }

  updatePageData() {
    this.page = 1;
    this.limit = 5;
    this.totalCount = 0;
    this.searchVehicle = '';
    this.searchCategory = '';
    this.getVehicleDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedShowCopy, this.searchString)
    this.getDrivingBehaviour(1, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selected)
    this.getDrivingBehaviour(2, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedAgain)
    this.getDrivingBehaviourgraph(1, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selected, this.graphname)
    this.getDrivingBehaviourgraph(2, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedAgain, this.graphname)
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

  datesUpdatedDashboard(range) {
  }


  datesUpdated(range, side) {
    if (this.count > 0) {
      this.count = this.count - 1;
      return
    }
    else {
      if (side == 1) {
        this.getDrivingBehaviour(1, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selected)
        this.getDrivingBehaviourgraph(1, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selected, this.graphname)
      }
      else {
        this.getDrivingBehaviour(2, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedAgain)
        this.getDrivingBehaviourgraph(2, this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedAgain, this.graphname)
      }
    }
    // console.log('[datesUpdated] range is : ', range);
  }


  changeState() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.resetToLastState();
    }
  }

  resetToLastState() {
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
    let search = this.localService.getItem("search")
    let date: any = this.localService.getItem("dateRange")
    this.graphname = 'safe_score';
    this.active = 1;
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
        startDate: moment().subtract(29, 'days').set('hours', 0).set('minutes', 0),
        endDate: moment().set('hours', 23).set('minutes', 59)
      };
      this.selectedShowCopy = {
        startDate: moment().subtract(29, 'days').set('hours', 0).set('minutes', 0),
        endDate: moment().set('hours', 23).set('minutes', 59)
      };
    }
    search ? this.searchString = search : this.searchString = '';
    category && category !== 'all' ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = 'all';
    vehicle && vehicle !== 'all' ? this.selectedVehicle = JSON.parse(vehicle) : this.selectedVehicle = 'all';
  }

  filterApply() {
    this.localService.setItem("category", this.selectedVehicleCategory)
    this.localService.setItem("vehicle", this.selectedVehicle)
    this.localService.setItem("search", this.searchString)
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
    this.selectedShowCopy = this.selectedShow;
    this.updatePageData();
    this.changeState();
  }

  createQuerryparams(categoryId?, vehicleId?, search?, date?, listing?, graphname?) {
    let querryParams
    if (listing) {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}&page=${this.page}&limit=${this.limit}`;
    }
    else {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
    }

    if ((categoryId && categoryId !== 'all')) {
      querryParams = querryParams + `&vehicle_category=[${categoryId}]`
    }
    if ((vehicleId && vehicleId !== 'all')) {
      querryParams = querryParams + `&vehicle=[${vehicleId}]`
    }
    if (search) {
      querryParams = querryParams + `&search=${search}`
    }
    if (graphname) {
      querryParams = querryParams + `&score_type=${graphname}`
    }
    querryParams = querryParams + `&from_date=${moment(date.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(date.endDate).format('YYYY-MM-DD')}`
    let val = this.service.checkCustomDate(moment(date.startDate).format('YYYY-MM-DD'),moment(date.endDate).format('YYYY-MM-DD'))
       if(val == undefined){
      querryParams = querryParams + `&custom_filter=true&filter_value=''`
    }
    else{
      if((categoryId && categoryId !== 'all') || (vehicleId && vehicleId !== 'all') || search){
        querryParams = querryParams + `&custom_filter=true&filter_value=''`
      }
      else{
        querryParams = querryParams + `&custom_filter=false&filter_value=${val}`
      }
    }
    return querryParams;
  }

  routeToVehicleDetail(id) {
    this.localService.setItem('vehicleId', id)
    this.router.navigate([RouteConfig.vehicleDetail.url])
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
    this.selectedVehicleCategory = 'all';
    this.selectedVehicle = 'all';
    this.searchString = '';
    this.selectedShow = {
      startDate: moment().subtract(29, 'days').set('hours', 0).set('minutes', 0),
      endDate: moment().set('hours', 23).set('minutes', 59)
    };
    this.filterApply();
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
        if(element[graphname] !== '1001' && element[graphname] !== 1001 && element[graphname] !== '1001.0'){
          this.accProfile.weight.push(((Number(element[graphname]))).toFixed(1));
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
            label: `${formatDate(this.selected.startDate._d, 'dd-MM-yyyy', this.locale)} - ${formatDate(this.selected.endDate._d, 'dd-MM-yyyy', this.locale)}`,
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
        maintainAspectRatio: false,
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
            label: `${formatDate(this.selectedAgain.startDate._d, 'dd-MM-yyyy', this.locale)} - ${formatDate(this.selectedAgain.endDate._d, 'dd-MM-yyyy', this.locale)}`,
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
        maintainAspectRatio: false,
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
  destroy() {
    this.myChartleft.destroy();
  }
}

