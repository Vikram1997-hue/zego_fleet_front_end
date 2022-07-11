import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { RouteConfig } from 'src/app/config/route-config';
import { MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trip-dashboard',
  templateUrl: './trip-dashboard.component.html',
  styleUrls: ['./trip-dashboard.component.scss']
})
export class TripDashboardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public isCollapsed = true;
  searchString: string;
  // GUAGE CHART VARIABLES

  hideToggle = false;
  gaugeType = "semi";
  gaugeValue = 28.3;

  thresholdConfig = AppConfig.gaugeThreshold;

  gaugeMin = AppConfig.gaugeMin;
  gaugeMax = AppConfig.gaugeMax;
  maxDate: any = moment();
  // stacked bar variable

  colorBox: any = ["#ed502e", "#604EFF", "#F0CE00", "#4dbfff", "#2A1E91"];

  stackBar = [
    { value: 0, class: "ridOfmax1", speed: '0', color: '', name: '' },
    { value: 0, class: "busyRoad1", speed: '0', color: '', name: '' },
    { value: 0, class: "quietRoad1", speed: '0', color: '', name: '' },
    { value: 0, class: "buildUp1", speed: '0', color: '', name: '' },
    { value: 0, class: "ridOfHighSpeed1", speed: '0', color: '', name: '' }
  ]

  showStackBar = [];
  noRoadTypeData: boolean = true;

  tableView: string = 'table';
  selectedOrgID: any;

  searchCategory: string;
  searchVehicle: string;
  searchDriver: string;

  dashboardData: any;
  vehicleCategoryData: any = [];
  vehicleList: any = [];
  driverList: any = [];

  selected: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };
  selectedShow: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };

  selectedVehicleCategory: any = 'all';
  selectedVehicle: any = 'all';
  selectedDriver: any = 'all';
  tripToolTipData: any = {};

  page: number = 1;
  limit: number = 5;
  totalCount: number;
  pageSizeOptions: number[] = [5, 10, 25];
  tripHistory: any = [];
  isTripHistoryLoading: boolean = true;
  tripBehaviour: any = {};
  // 
  alertsCount = [];
  alertsData = [];

  filterCalledTrip = new Subject();

  constructor(
    private router: Router,
    public service: MainService,
    private localService: LocalService,
    private activeRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
  }
  customeRange='Custom';
  setDate='Set Date';
  cancelDate='Cancel';
  changeLangRoadDis(){
  
    
    this.localService.getLang().subscribe((val) => {
      this.translate.get("kmph").subscribe((text: string) => {
        for(var i=0;i<this.stackBar.length;i++){
          if(this.stackBar[i].speed.includes('kmph')){
            this.stackBar[i].speed= this.stackBar[i].speed.replace(/kmph/gi,'km/u')
          }
          else if(this.stackBar[i].speed.includes('km/u')){
            this.stackBar[i].speed= this.stackBar[i].speed.split(' ')[0] + " " + 'kmph';
           }
        }      
      });
    });
  }

  ngOnInit(): void {
    this.changeLangRoadDis()
    this.filterCalledTrip = new Subject();

    this.limit = Number(this.localService.getItem("tripLimit")) || 5;
    this.selectedOrgID = this.localService.getItem("selectedOrgs")
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }

    this.filterCalledTrip.pipe(
      debounceTime(500),
    ).subscribe(
      value => {
        if(value){
          this.selectedOrgID = this.localService.getItem("selectedOrgs")
          if (this.selectedOrgID) {
            this.selectedOrgID = JSON.parse(this.selectedOrgID);
          }
          this.resetToLastState();
          this.filterApply();
        }
      }
    )

    this.localService.getFilter().subscribe((val)=>{
      if(val && this.router.url.split('?')[0] == RouteConfig.trip.url){
        this.filterCalledTrip.next(true)
      }
    })

    if (this.selectedOrgID) {
      this.resetToLastState();
      this.updatePageData()
    }
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

  getDriverList(categoryId?, vehicleId?) {
    if ((categoryId && categoryId == 'all') || categoryId == undefined) {
      categoryId = ''
    }
    if ((vehicleId && vehicleId == 'all') || vehicleId == undefined) {
      vehicleId = ''
    }
    this.searchDriver = '';
    this.service.get(`drivers/by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
      if (response.data) {
        this.driverList = response.data;
      }
    }, (error) => {

    })
  }


  getTripDashboardData(categoryId?, vehicleId?, driverId?, search?) {
    let querryParams = this.createQuerryparams(categoryId, vehicleId, driverId, search, undefined, false)
    this.service.get(`trips/report?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.dashboardData = response.data;
        this.dashboardData.driving_behaviour = parseFloat(this.formatToFixed(this.dashboardData.driving_behaviour, 1));
      }
      else {
        this.dashboardData = {};
      }
    }, (error) => {
      this.dashboardData = {};
    })
  }

  isRoadTypeLoading: boolean = false;
  getRoadTypeDistribution(categoryId?, vehicleId?, driverId?, search?) {
    this.isRoadTypeLoading = true;
    let querryParams = this.createQuerryparams(categoryId, vehicleId, driverId, search, undefined, true)
    this.service.get(`trips/road-type-distribution?${querryParams}`).pipe().subscribe(response => {
      this.isRoadTypeLoading = false;
      if (response.data && response.data.length) {
        
        for (let i = 0; i < response.data.length; i++) {
          if (this.stackBar[i]) {
            this.stackBar[i].value = response.data[i].contribution_value.toFixed(1);
            this.stackBar[i].speed = response.data[i].road_factor_name
            this.stackBar[i].color = this.colorBox[i];
            if (response.data[i].road_factor_name == 'roadFactor1') {
              this.stackBar[i].name = 'Highway'
            }
            else {
              this.stackBar[i].name = 'Lorem'
            }
          }
        }
        this.translate.get("kmph").subscribe((text: string) => {
          for(var i=0;i<this.stackBar.length;i++){
            if(this.stackBar[i].speed.includes('kmph')){
              this.stackBar[i].speed= this.stackBar[i].speed.replace(/kmph/gi,text)
            }
            // else if(this.stackBar[i].speed.includes('km/u')){
            //   this.stackBar[i].speed= this.stackBar[i].speed.replace(/''/gi,'kmph')
            // }
          }
          //  console.log(this.stackBar);
                 
        });
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
      this.isRoadTypeLoading = false;
    })
  }

  getTripHistory(categoryId?, vehicleId?, driverId?, search?) {
    this.isTripHistoryLoading = true;
    this.tripHistory = [];
    let querryParams = this.createQuerryparams(categoryId, vehicleId, driverId, search, 'listing')
    this.service.get(`trips?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.isTripHistoryLoading = false;
        this.totalCount = response.data.count;
        this.tripHistory = [...response.data.rows];
        this.alertsCount = [];
        response.data.rows.forEach(element => {
          this.alertsCount.push(element.id)
        });
        if (this.totalCount) {
          this.getexception();
          this.getTooltipInfo(this.tripHistory)
        }
        this.setPage(this.page - 1);
      }
      else {
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

  toggleChange(value) {
    this.tableView = value;
  }

  pageChange(event) {
    if (this.limit !== event.pageSize) {
      const queryParams: Params = { page: 1 };
      this.router.navigate(
        [],
        {

          queryParams: queryParams,
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
      this.page = 1;
    }
    else {
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
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
    let driver = this.localService.getItem("driver")
    let search = this.localService.getItem("search")
    this.getTripHistory(category, vehicle, driver, search)
  }

  getTooltipInfo(tableData) {
    const data = {
      "tripId": this.alertsCount
    }
    this.service.post('trips/exception-counts', data).pipe().subscribe(res => {
      if (res.data) {
        for (const k in res.data) {
          this.tripToolTipData[k] = this.service.convertFormat((res.data)[k]);
        }
      }
    })
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

  filterApply() {
    this.localService.setItem("category", this.selectedVehicleCategory)
    this.localService.setItem("vehicle", this.selectedVehicle)
    this.localService.setItem("driver", this.selectedDriver)
    this.localService.setItem("search", this.searchString)
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow))
    this.selected = this.selectedShow;
    this.updatePageData();
    this.changeState();
  }

  updatePageData() {
    // this.page = 1;
    this.activeRoute.queryParams
      .subscribe(params => {
        // const details:any = params.page;
        this.page = params?.page || 1;
      }
      );
    // this.getTripDashboardData();
    // this.getDashboardData();
    this.totalCount = 0;
    this.searchVehicle = '';
    this.searchCategory = '';
    this.searchDriver = '';
    // this.getDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString)
    this.getTripHistory(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString)
    this.getRoadTypeDistribution(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString)
  }

  resetToLastState() {
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
    let driver = this.localService.getItem("driver")
    let search = this.localService.getItem("search")
    let date: any = this.localService.getItem("dateRange")
    if (date) {
      date = JSON.parse(date)
      this.selected = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate)
      };
      this.selectedShow = this.selected;
    }
    else {
      this.selectedShow = {
        startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
        endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
      };
      this.selected = {
        startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
        endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
      };
    }
    search ? this.searchString = search : this.searchString = '';
    category && category !== 'all' ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = 'all';
    vehicle && vehicle !== 'all' ? this.selectedVehicle = JSON.parse(vehicle) : this.selectedVehicle = 'all';
    driver && driver !== 'all' ? this.selectedDriver = JSON.parse(driver) : this.selectedDriver = 'all';
  }

  changeState() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.resetToLastState();
    }
  }

  createQuerryparams(categoryId?, vehicleId?, driverId?, search?, listing?, roadType?) {
    let querryParams
    if (listing) {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}&page=${this.page}&limit=${this.limit}`;
    }
    else {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
    }

    if (roadType) {
      querryParams = querryParams + `&custom_filter=true&filter_value=''`
    }
    else {
      let val = this.service.checkCustomDate(moment(this.selected.startDate).format('YYYY-MM-DD'), moment(this.selected.endDate).format('YYYY-MM-DD'))
      if (val == undefined) {
        querryParams = querryParams + `&custom_filter=true&filter_value=''`
      }
      else {
        if ((categoryId && categoryId !== 'all') || (vehicleId && vehicleId !== 'all') || (driverId && driverId !== 'all')) {
          querryParams = querryParams + `&custom_filter=true&filter_value=''`
        }
        else {
          querryParams = querryParams + `&custom_filter=false&filter_value=${val}`
        }
      }
    }

    if ((categoryId && categoryId !== 'all')) {
      let arr = [categoryId]
      querryParams = querryParams + `&vehicle_category=${JSON.stringify(arr)}`
    }
    if ((vehicleId && vehicleId !== 'all')) {
      let arr = [vehicleId]
      querryParams = querryParams + `&vehicle=${JSON.stringify(arr)}`
    }
    if ((driverId && driverId !== 'all')) {
      let arr = [driverId]
      querryParams = querryParams + `&driver=${JSON.stringify(arr)}`
    }
    querryParams = querryParams + `&from_date=${moment(this.selected.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selected.endDate).format('YYYY-MM-DD')}`
    return querryParams;
  }

  resetFilter() {
    this.selectedVehicleCategory = 'all';
    this.selectedDriver = 'all';
    this.selectedVehicle = 'all';
    this.searchString = '';
    this.selectedShow = {
      startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
      endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
    };
    this.filterApply();
  }

  setPage(index: number) {
    if (this.paginator)
      this.paginator.pageIndex = index;
  }

}
