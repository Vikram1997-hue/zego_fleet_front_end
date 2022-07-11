import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { RouteConfig } from 'src/app/config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

import { Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-vehicle-dashboard',
  templateUrl: './vehicle-dashboard.component.html',
  styleUrls: ['./vehicle-dashboard.component.scss']
})



export class VehicleDashboardComponent implements OnInit {
  matDialogRef: MatDialogRef<ModalComponent>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public isCollapsed = true;

  displayedColumns: string[] = ['license_plate', 'model', 'total_distance', 'total_trips', 'harsh_event', 'vehicle_score', 'speed_score', 'idiling_score', 'acclaration_score', 'breaking_score', 'cornering_score'];

  dataSource;
  page: number = 1;
  limit: number = 1000;
  data = [{}, {}, {}];
  totalCount: number;
  pageSizeOptions: number[] = [5, 10, 25, 100, 1000];
  searchString: string;

  selected: any;
  selectedAgain: any;

  selectedVehicleCategory: any = 'all';
  selectedVehicle: any = 'all';
  searchCategory: string = '';
  searchVehicle: string = ''

  selectedOrgID: any;

  dashboardData: any;
  dashBoardData: any = {};
  vehicleCategoryData: any = [];
  vehicleList: any = [];

  drivingBehaviourLeft: any;
  drivingBehaviourRight: any;

  tableDataLoading: boolean = true;

  filterCalledVehicle = new Subject();

  selectedShow: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };
  selectedShowCopy: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };

  constructor(
    private router: Router,
    public service: MainService,
    private localService: LocalService,
    private matDialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.localService.removeItem('vehicleUrl')

    this.selected = {
      startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
      endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
    };
    this.selectedAgain = {
      startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
      endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
    };
  }

  ngOnInit(): void {
    this.filterCalledVehicle = new Subject();

    this.limit = Number(this.localService.getItem("vehiclePagelimit")) || 1000;
    if (this.activeRoute.snapshot.queryParams.page) {
      this.page = Number(this.activeRoute.snapshot.queryParams.page)
    }

    this.filterCalledVehicle.pipe(
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
      if(val && this.router.url.split('?')[0] == RouteConfig.vehicle.url){
        this.filterCalledVehicle.next(true)
      }
    })

    this.selectedOrgID = this.localService.getItem("selectedOrgs")
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }
    if (this.selectedOrgID) {
      this.resetToLastState();
      this.updatePageData()
    }
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
    // this.getVehicleDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedShowCopy, this.searchString)
    // this.getDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.selectedShowCopy, this.searchString);
    this.getVehicleList(this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedShowCopy)
    this.getVehicleAnalytics(this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedShowCopy)
  }

  getVehicleList(categoryId?, vehicleId?, search?, date?) {
    this.tableDataLoading = true;
    let querryParams = this.createQuerryparams(categoryId, vehicleId, search, date, 'listing')
    this.service.get(`vehicle/listing?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.totalCount = response.data.count;
        response.data.rows.forEach(element => {
          if (element.last_apk_date) {
            element.class = this.apkClassCheck(element.last_apk_date)
          }
          else {
            element.class = 'noInfo'
          }
        });
        this.dataSource = response.data.rows;
        this.tableDataLoading = false;
        this.setPage(this.page - 1)
      }
    }, (error) => {
      this.tableDataLoading = false;
    })
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
    this.localService.setItem("vehiclePagelimit", this.limit)
    this.isCollapsed = true;
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
    let search = this.localService.getItem("search")
    this.getVehicleList(category, vehicle, search, this.selectedShowCopy)
  }

  apkClassCheck(date) {
    if (moment(date).diff(moment(), 'days') > 30) {
      return 'success'
    }
    else {
      return 'danger'
    }
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

  createQuerryparams(categoryId?, vehicleId?, search?, date?, listing?) {
    let querryParams
    if (listing) {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}&page=${this.page}&limit=${this.limit}`;
    }
    else {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
    }
    let val = this.service.checkCustomDate(moment(date.startDate).format('YYYY-MM-DD'), moment(date.endDate).format('YYYY-MM-DD'))
    if (val == undefined) {
      querryParams = querryParams + `&custom_filter=true&filter_value=''`
    }
    else {
      if ((categoryId && categoryId !== 'all') || (vehicleId && vehicleId !== 'all') || search) {
        querryParams = querryParams + `&custom_filter=true&filter_value=''`
      }
      else {
        querryParams = querryParams + `&custom_filter=false&filter_value=${val}`
      }
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
    querryParams = querryParams + `&from_date=${moment(date.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(date.endDate).format('YYYY-MM-DD')}`

    return querryParams;
  }

  routeToVehicleDetail(data) {
    this.localService.setItem('vehicleId', data.id)
    this.localService.setItem('vehicleUrl', this.router.url)
    this.router.navigate([RouteConfig.vehicleDetail.url])
  }

  worstScore: any = [];
  bestScore: any = [];
  probablyCrashed: any = [];
  mostTravelled: any = [];

  getVehicleAnalytics(categoryId?, vehicleId?, search?, date?) {
    this.worstScore = [];
    this.bestScore = [];
    this.probablyCrashed = [];
    this.mostTravelled = [];

    let querryParams = this.createQuerryparams(categoryId, vehicleId, search, date);
    this.service
      .get(`zego/vehicle/top-listing?${querryParams}`)
      .pipe()
      .subscribe(
        (res: any) => {
          if (res && res.data) {
            this.bestScore = res.data.bestScore;
            this.worstScore = res.data.worstScore;
            this.probablyCrashed = res.data.probablyCrashed;
            this.mostTravelled = res.data.mostTravelled;
          }

        },
        (err) => {
          this.worstScore = [];
          this.bestScore = [];
          this.probablyCrashed = [];
          this.mostTravelled = [];
        }
      );

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
      startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
      endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
    };
    this.filterApply();
  }

  openAddModal(rowData) {
    let data = {
      heading: 'Update Category Name',
      content: '',
      data: rowData,
      categoryData: this.vehicleCategoryData

    }
    this.matDialogRef = this.matDialog.open(ModalComponent, {
      data: data,
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        this.getVehicleList(this.selectedVehicleCategory, this.selectedVehicle, this.searchString, this.selectedShowCopy)
      }
    });
  }

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = data;
      return;
    }

    this.dataSource = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'license_plate':
          return this.compare(a.license_plate, b.license_plate, isAsc);
        case 'model':
          return this.compare(a.model, b.model, isAsc);
        case 'total_distance':
          return this.compare(a.total_distance, b.total_distance, isAsc);
        case 'total_trips':
          return this.compare(a.total_trips, b.total_trips, isAsc);
        case 'model':
          return this.compare(a.model, b.model, isAsc);
        case 'harsh_event':
          return this.compare(a.harsh_event, b.harsh_event, isAsc);
        case 'vehicle_score':
          return this.compare(a.vehicle_score, b.vehicle_score, isAsc);
        case 'speed_score':
          return this.compare(a.speed_score, b.speed_score, isAsc);
        case 'idiling_score':
          return this.compare(a.idiling_score, b.idiling_score, isAsc);
        case 'acclaration_score':
          return this.compare(a.acclaration_score, b.acclaration_score, isAsc);
        case 'breaking_score':
          return this.compare(a.breaking_score, b.breaking_score, isAsc);
        case 'cornering_score':
          return this.compare(a.cornering_score, b.cornering_score, isAsc);
        default:
          return 0;
      }
    });
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  setPage(index: number) {
    if (this.paginator)
      this.paginator.pageIndex = index;
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  openSnackBarmodal(message, panelClass: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { image: false, message: message },
      panelClass: panelClass,
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  exportApi(){
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
    let search = this.localService.getItem("search")
    let querryParams = this.createQuerryparams(category, vehicle, search, this.selectedShowCopy)
    this.service.get(`vehicles-export?${querryParams}`).pipe().subscribe(res => {
      this.openSnackBarmodal(res.message, 'export-message')
      if (res.data) {      
      }
    }, (error) => {
    })
  }

}
