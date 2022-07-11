import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { MatPaginator } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

declare var google;

@Component({
  selector: 'app-exceptions-dashboard',
  templateUrl: './exceptions-dashboard.component.html',
  styleUrls: ['./exceptions-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExceptionsDashboardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public isCollapsed = true;

  selectedOrgID: any;
  searchString: string;

  searchCategory: string;
  searchVehicle: string;
  searchDriver: string;

  vehicleCategoryData: any = [];
  vehicleList: any = [];
  driverList: any = [];

  selectedVehicleCategory: any = 'all';
  selectedVehicle: any = 'all';
  selectedDriver: any = 'all';
  selectedException: any = 'all';
  filterException: any = [];
  tableView: string = 'tableView';

  page: number = 1;
  limit: number = 1000;
  totalCount: number;
  pageSizeOptions: number[] = [5, 10, 25, 100, 1000];
  exceptionArray: any = [];

  //Ng Accordian 
  hideToggle1 = false;
  displayMode: string = 'default';
  multi = true;
  disabled = false;
  singleShowIndex: any = { index: '', trip_id: '' }
  isDataLoading: boolean = false;

  exceptionTypeObj = {
    "speed": "Speeding",
    "breaking": "Harsh braking",
    "acceleration": "Harsh Acceleration",
    "cornering": "Harsh Cornering",
    "idling": "Idiling"
  }

  exceptions: any = [{ name: 'Speeding', value: 'speed' }, { name: 'Harsh braking', value: 'breaking' }, { name: 'Harsh Acceleration', value: 'acceleration' }, { name: 'Harsh Cornering', value: 'cornering' }, { name: 'Idiling', value: 'idling' }]


  selected: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };
  selectedShow: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };

  filterCalledException = new Subject();

  constructor(
    public service: MainService,
    private localService: LocalService,
    public dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.filterCalledException = new Subject();

    const lang=this.localService.getItem('currentlang')|| 'en';
    if(lang == 'en'){
      this.exceptionTypeObj = {
        "speed": "Speeding",
        "breaking": "Harsh braking",
        "acceleration": "Harsh Acceleration",
        "cornering": "Harsh Cornering",
        "idling": "Idiling"
      }
    }
    else{
      this.exceptionTypeObj = {
        "speed": "Te hard rijden",
        "breaking": "Te Hard remmen",
        "acceleration": "Te Hard optrekken",
        "cornering": "Te hard door de bocht",
        "idling": "Stationair draaien"
      }
    }

    this.filterCalledException.pipe(
      debounceTime(500),
    ).subscribe(
      value => {
        if(value){
          this.selectedOrgID = this.localService.getItem("selectedOrgs")
          if (this.selectedOrgID) {
            this.selectedOrgID = JSON.parse(this.selectedOrgID);
          }
          this.resetToLastState();
          // this.polardata()
          this.filterApply();
        }
      }
    )


    this.localService.getLang().subscribe((val) => {
      const lang=this.localService.getItem('currentlang')|| 'en';
      if(lang == 'en'){
        this.exceptionTypeObj = {
          "speed": "Speeding",
          "breaking": "Harsh braking",
          "acceleration": "Harsh Acceleration",
          "cornering": "Harsh Cornering",
          "idling": "Idiling"
        }
      }
      else{
        this.exceptionTypeObj = {
          "speed": "Te hard rijden",
          "breaking": "Te Hard remmen",
          "acceleration": "Te Hard optrekken",
          "cornering": "Te hard door de bocht",
          "idling": "Stationair draaien"
        }
      }
    });
    this.limit = Number(this.localService.getItem("exceptionLimit")) || 1000;
    this.selectedOrgID = this.localService.getItem("selectedOrgs")
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }

    this.localService.getFilter().subscribe((val)=>{
      if(val  && this.router.url.split('?')[0] == RouteConfig.exceptions.url){
        this.filterCalledException.next(true)
      }
    })

    if (this.selectedOrgID) {
      this.resetToLastState();
      // this.polardata()
      this.updatePageData()
    }
  }

  exceptionRatio: any = {}
  polarObject: any = {
    speed: 0,
    idling: 0,
    acceleration: 0,
    breaking: 0,
    cornering: 0,
  };
  polardata() {
    let querryParams = this.createQuerryparams();
    this.service
      .get(`dashboard/exception-ratio?${querryParams}`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.length) {
            this.exceptionRatio = response.data;
            let total = this.exceptionRatio.reduce(
              (previousValue, currentValue) =>
                previousValue + Number(currentValue.score_type_count),
              0
            );
            for (let i = 0; i < this.exceptionRatio.length; i++) {
              this.polarObject[this.exceptionRatio[i].score_type] = (
                (this.exceptionRatio[i].score_type_count) *
                1
              ).toFixed(1);
            }
          }
          else {
            this.exceptionRatio = {};
            this.polarObject = {
              speed: 0,
              idling: 0,
              acceleration: 0,
              breaking: 0,
              cornering: 0,
            };
          }
          this.cd.detectChanges();
        },
        (error) => {
          this.exceptionRatio = {};
          this.polarObject = {
            speed: 0,
            idling: 0,
            acceleration: 0,
            breaking: 0,
            cornering: 0,
          };
          this.cd.detectChanges();
        }
      );
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
    this.localService.setItem("exceptionLimit", this.limit);
    this.isCollapsed = true;
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
    let driver = this.localService.getItem("driver")
    let search = this.localService.getItem("search")
    let exception = this.localService.getItem("exception")
    this.getAllException(category, vehicle, driver, search, exception)
  }
  groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[moment.utc(currentValue[key]).format('DD/MM/yyyy')] = result[moment.utc(currentValue[key]).format('DD/MM/yyyy')] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  getAllException(categoryId?, vehicleId?, driverId?, search?, exception?) {
    this.isDataLoading = true;
    let querryParams = this.createQuerryparams(categoryId, vehicleId, driverId, search, exception)
    this.exceptionArray = [];
    this.service.get(`exceptions?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.totalCount = response.data.count;
        this.exceptionArray = [...response.data.rows];
        this.filterException = [];
        let data = this.groupBy(this.exceptionArray,'start_time');
        for(let key in data){
          var obj = {
            date: key,
            data: data[key]
          }
          this.filterException.push(obj)
        }
        this.setPage(this.page-1);
        this.isDataLoading = false;
        this.cd.detectChanges();
      }
      else {
        this.isDataLoading = false;
        this.exceptionArray = [];
        this.filterException = [];
        this.cd.detectChanges();
      }
    }, (error) => {
      this.isDataLoading = false;
      this.exceptionArray = [];
      this.filterException = [];
      this.cd.detectChanges();
    })
  }


  toggleChange(value) {
    this.tableView = value;
    if (this.tableView == 'tableView') {
      this.singleShowIndex = { index: '', trip_id: '' }
    }
  }

  updatePageData() {
    // this.page = 1;
    this.activeRoute.queryParams
      .subscribe(params => {
        // const details:any = params.page;
        this.page = params?.page || 1;
      }
      );
    this.totalCount = 0;
    this.searchVehicle = '';
    this.searchCategory = '';
    this.searchDriver = '';
    // this.getDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString, this.selectedException)
    this.getAllException(this.selectedVehicleCategory, this.selectedVehicle, this.selectedDriver, this.searchString, this.selectedException)
  }

  resetToLastState() {
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
    let driver = this.localService.getItem("driver")
    let search = this.localService.getItem("search")
    let date: any = this.localService.getItem("dateRange")
    let exception = this.localService.getItem("exception")
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
    exception && exception !== 'all' ? this.selectedException = exception : this.selectedException = 'all';
  }

  createQuerryparams(categoryId?, vehicleId?, driverId?, search?, exception?) {
    let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}&page=${this.page}&limit=${this.limit}`
    let val = this.service.checkCustomDate(moment(this.selected.startDate).format('YYYY-MM-DD'), moment(this.selected.endDate).format('YYYY-MM-DD'))
    if (val == undefined) {
      querryParams = querryParams + `&custom_filter=true&filter_value=''`
    }
    else {
      if ((categoryId && categoryId !== 'all') || (vehicleId && vehicleId !== 'all') || (driverId && driverId !== 'all') || (exception && exception !== 'all') || search) {
        querryParams = querryParams + `&custom_filter=true&filter_value=''`
      }
      else {
        querryParams = querryParams + `&custom_filter=false&filter_value=${val}`
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
    if (search) {
      querryParams = querryParams + `&search=${search}`
    }
    if (exception && exception !== 'all') {
      let arr = [exception]
      querryParams = querryParams + `&exception_type=${exception}`
    }
    querryParams = querryParams + `&from_date=${moment(this.selected.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selected.endDate).format('YYYY-MM-DD')}`

    return querryParams;
  }

  resetFilter() {
    this.selectedVehicleCategory = 'all';
    this.selectedDriver = 'all';
    this.selectedVehicle = 'all';
    this.selectedException = 'all';
    this.searchString = '';
    this.selectedShow = {
      startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
      endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
    };
    this.filterApply();
  }

  filterApply() {
    this.localService.setItem("category", this.selectedVehicleCategory)
    this.localService.setItem("vehicle", this.selectedVehicle)
    this.localService.setItem("driver", this.selectedDriver)
    this.localService.setItem("search", this.searchString)
    this.localService.setItem("exception", this.selectedException)
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow))
    this.selected = this.selectedShow;
    this.updatePageData();
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

  openChartPopup(tripid, alertdata) {
    let data = { trip: tripid, alertData: alertdata }
    const dialogRef = this.dialog.open(SingleException, {
      panelClass: 'custom-dialog-container',
      height: '95%',
      width: '95%',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  setPage(index: number) {
    if (this.paginator)
      this.paginator.pageIndex = index;
  }
  openTripListPage(data){
   
      this.router.navigate([RouteConfig.tripDetail.url], { queryParams: {tripId: data.trip_id}})
    
  }
}


@Component({
  selector: 'signle-exception',
  templateUrl: './single-exception.html',
  styleUrls: ['./exceptions-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleException {

  tripDetail: any;
  isMapLoading: boolean = true;
  exceptionColors: any = {
    "speed": '#FF9950',
    "breaking": '#FFEA6C',
    "acceleration": '#4DBFFF',
    "cornering": '#FF7070',
    "idling": '#00CBA0'
  };
  constructor(
    public dialogRef: MatDialogRef<SingleException>,
    @Inject(MAT_DIALOG_DATA) public data,
    public service: MainService,
    private local: LocalService,
    private cd: ChangeDetectorRef,
  ) {
    this.exceptionColors = JSON.parse(this.local.getItem('colors'));
    this.getTripDetails();
  }

  getTripDetails() {
    this.service.get(`trips/${this.data.trip}`).pipe().subscribe(response => {
      if (response && response.data) {
        this.tripDetail = response.data;
        this.initMap(this.tripDetail, this.data.alertData)
        this.isMapLoading = false;
        this.cd.detectChanges();
      }
    }, (error) => {
      this.isMapLoading = false;
      this.cd.detectChanges();
    })
  }

  polylines = [];
  alertMarkers;

  exceptionStartArray: any = []



  initMap(routes?, alerts?) {
    var routes = routes;
    var waypoints = [];
    this.alertMarkers = [];
    var neitherLandCordi = new google.maps.LatLng(AppConfig.netherlandLat, AppConfig.netherlandLong);
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      maxZoom: 18,
      center: neitherLandCordi,
      disableDefaultUI: true,
      draggable: true,
      scaleControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      fullscreenControl: false,
    });

    // map.setOptions({ styles: AppConfig.mapStyle });
    var infowindow = new google.maps.InfoWindow({
      content: '',
      minWidth: 333,
    });
    var bounds = new google.maps.LatLngBounds();
    // Plot Points
    if (routes) {
      if (alerts.points && alerts.points.length) {
        this.alertMarkers = new google.maps.Marker({
          position: new google.maps.LatLng(alerts.points[0].latitude, alerts.points[0].longitude),
          map: map,
          icon: {
            path: 'M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z',
            fillColor: this.exceptionColors[alerts.score_type],
            fillOpacity: 1,
            strokeColor: '#fff',
            scale: 1
          }
        });
        bounds.extend(this.alertMarkers.position);
      }
      alerts.changedDate = this.convertDateFormat(alerts.start_time)
      if (routes) {
        var extendedHtml = '';
        var unit = '';
        if (alerts.score_type == 'idling') {
          if (!alerts.duration_seconds.includes(":"))
            alerts.duration_seconds = this.service.convertHMS(alerts.duration_seconds)
          unit = 's';
          extendedHtml =
            `<div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
              <div style="font: 600 14px/20px ModernEra; color:#FA1464; ">
              <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
              </svg>
              
              Idiling</div>
              <div>
                  <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
          border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                      Violation: <span style="color:#FA1464"> ${alerts.duration_seconds}</span>
                  </div>
              </div>
            </div>`
        }
        else if (alerts.score_type == 'speed') {
          unit = 'km/h'
          extendedHtml = `
              <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                  <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">
                  <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
                 </svg>
                          Speeding</div>
                  <div>
                      <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
              border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                          Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} km/h</span>
                      </div>
                  </div>
              </div>`

        }
        else if (alerts.score_type == 'cornering') {
          unit = `G`
          extendedHtml = `
          <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
          <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">
          <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
         </svg>
         Harsh cornering</div>
          <div>
              <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
      border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                  Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
              </div>
          </div>
      </div>
              `
        }
        else if (alerts.score_type == 'acceleration') {
          unit = `G`
          extendedHtml = `
          <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
          <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">
          <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
         </svg>
         Harsh acceleration</div>
          <div>
              <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
      border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                  Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
              </div>
          </div>
      </div>
              `
        }
        else {
          unit = `G`
          extendedHtml = `
          <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
          <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">
          <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
         </svg>
         Harsh braking</div>
          <div>
              <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
      border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                  Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
              </div>
          </div>
      </div>
              `
        }

        var html =
          `<div style="display:flex">
                <div style=" flex-basis: calc(50% - 10px);
                      max-width: calc(50% - 10px); margin-right:20px;">
                    <div style="display:flex; align-items: center; padding-bottom:16px;">
                        <div style="margin-right:10px"><img src="../../../../assets/images/location-tick.svg"> </div>
                        <div style="width:135px">
                            <div style="font: 700 12px/18px ModernEra; color:#604EFF"> ${alerts.changedDate}</div>
                            <div style="font: 600 11px/18px ModernEra; color:#001E50;   white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;"></div>
                        </div>
                    </div>
                </div>
                <div style="flex-basis: calc(50% - 10px);
                max-width: calc(50% - 10px);">
                    <div style=" min-width:145px;text-align:center; padding:10px 9px; background: rgba(0,240,156, 0.05);
                border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50; text-align:center">
                        Limit: <span style="color:#00F09C"> ${this.service.convertToDutch(alerts.limit)} ${unit}</span>
                    </div>
                </div>
            </div>
            ` + extendedHtml
        this.bindInfoWindow(this.alertMarkers, map, infowindow, html);
        this.cd.detectChanges();
      }

      map.fitBounds(bounds);
      google.maps.event.addDomListener(window, "resize", function () {
        google.maps.event.trigger(map, "resize");
        map.fitBounds(bounds);
      });
    }
  }

  bindInfoWindow(marker, map, infowindow, html) {
    google.maps.event.addListener(marker, 'mouseover', function () {
      infowindow.setContent(html);
      infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
      infowindow.close();
    });
  }

  convertDateFormat(date) {
    if (date) {
      return moment(date).utc().format("HH:mm [•] DD/MM/yyyy")
    }
    else {
      return 'NA'
    }
  }

  convertToFixed(val) {
    val = String(val);
    return val.split('.')[0] + '.' + val.split('.')[1].substring(0, 3)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
 
}