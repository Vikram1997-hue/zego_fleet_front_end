import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { RouteConfig } from 'src/app/config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { Sort } from '@angular/material/sort';
import { GoalSettingComponent } from '../goal-setting/goal-setting.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.scss']
})
export class DriverDashboardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  matDialogRef: MatDialogRef<GoalSettingComponent>;
  public isCollapsed = true;
  tableView: string = 'tableView';
  // , 'goal_enabled'
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'contact', 'last_driver_vehicle', 'total_trips', 'driving_behaviour'];
  displayScoreColumns: string[] = ['name', 'soreValue.speed', 'soreValue.breaking', 'soreValue.idling', 'soreValue.cornering', 'soreValue.acceleration', 'driving_behaviour'];

  dataSource;
  page: number = 1;
  limit: number = 25;
  totalCount: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  searchString: string;
  // CALENDAR

  ruleId: string = '';

  ranges: any = AppConfig.momentRange;
  alwaysShowCalendars: boolean = true;
  showRangeLabelOnInput: boolean = true;
  keepCalendarOpeningWithRange: boolean = true;

  selectedDriver: any = 'all';
  searchDriver: string = ''
  driverList: any = [];

  invalidDates = [];
  selectedOrgID: any;

  tooltips = [
    { date: moment(), text: 'Today is just unselectable' },
    { date: moment().add(2, 'days'), text: 'Yeeeees!!!' }
  ];

  dashboardData: any;

  tableDataLoading: boolean = true;
  selectedShow: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };
  selectedShowCopy: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };

  constructor(
    private matDialog: MatDialog,

    private router: Router,
    public service: MainService,
    private localService: LocalService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.localService.removeItem('driverUrl')
    this.ruleId = this.activeRoute.snapshot.queryParams.rule || '';
    this.limit = Number(this.localService.getItem("driverLimit")) || 25;
    this.selectedOrgID = this.localService.getItem("selectedOrgs")
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }
    if (this.selectedOrgID) {
      this.resetToLastState();
      this.getDrivers();
      this.updatePageData()
    }

    this.localService.watchOrgData().subscribe((resp) => {
      if (resp  && this.router.url.split('?')[0] == RouteConfig.driver.url) {
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
          this.getDrivers();
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

  goalSetting(data) {
    this.matDialogRef = this.matDialog.open(GoalSettingComponent, {
      data: data,
      disableClose: true,
      panelClass: 'goal-setting'
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        this.getDriverList(this.selectedDriver, this.searchString, this.selectedShowCopy)
      }
    });
  }

  getDriverDashboardData(driverId?, date?, search?) {
    let querryParams = this.createQuerryparams(driverId, search, date)
    this.service.get(`drivers/report?${querryParams}&rule_id=${this.ruleId}`).pipe().subscribe(response => {
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
        this.page=params?.page || 1;
      }
    );
    this.totalCount = 0;
    this.searchDriver = '';
    this.getDriverDashboardData(this.selectedDriver, this.selectedShowCopy, this.searchString)
    this.getDriverList(this.selectedDriver, this.searchString, this.selectedShowCopy)
  }

  getDriverList(driverId?, search?, date?) {
    this.tableDataLoading = true;
    let querryParams = this.createQuerryparams(driverId, search, date, 'listing')
    this.service.get(`drivers?${querryParams}&rule_id=${this.ruleId}`).pipe().subscribe(response => {
      if (response.data) {
        this.totalCount = response.data.count;
        // this.dataSource = response.data.rows;
        this.dataSource = response.data.rows.filter((x)=>{
          return x.driving_behaviour !== "1001";
        });
        this.setPage(this.page-1);
        this.tableDataLoading = false;
      }
    }, (error) => {
      this.tableDataLoading = false;
    })
  }

  isInvalidDate = (m) => {
    return this.invalidDates.some(d => d.isSame(m, 'day'));
  }

  getClass(val) {
    if (val <= 2.5) {
      return 'red'
    }
    else if (val <= 5) {
      return 'orange'
    }
    else if (val <= 7.5) {
      return 'yellow'
    }
    else if (val == 1001) {
      return 'grey'
    }
    else {
      return 'success'
    }
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
    this.localService.setItem("driverLimit", this.limit)
    this.isCollapsed = true;
    let driver = this.localService.getItem("driver")
    let search = this.localService.getItem("search")
    this.getDriverList(driver, search, this.selectedShowCopy)
  }

  changeState() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.resetToLastState();
    }
  }

  resetToLastState() {
    if (!this.ruleId) {
      let driver = this.localService.getItem("driver")
      let search = this.localService.getItem("search")
      search ? this.searchString = search : this.searchString = '';
      driver && driver !== 'all' ? this.selectedDriver = JSON.parse(driver) : this.selectedDriver = 'all';
    }
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

  }

  filterApply() {
    this.localService.setItem("driver", this.selectedDriver)
    this.localService.setItem("search", this.searchString)
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
    this.selectedShowCopy = this.selectedShow;
    this.updatePageData();
    this.changeState();
  }

  createQuerryparams(driverId?, search?, date?, listing?) {
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
      if ((driverId && driverId !== 'all') || search) {
        querryParams = querryParams + `&custom_filter=true&filter_value=''`
      }
      else {
        querryParams = querryParams + `&custom_filter=false&filter_value=${val}`
      }
    }

    if ((driverId && driverId !== 'all')) {
      querryParams = querryParams + `&driver=[${driverId}]`
    }
    if (search) {
      querryParams = querryParams + `&search=${search}`
    }
    querryParams = querryParams + `&from_date=${moment(date.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(date.endDate).format('YYYY-MM-DD')}`
    return querryParams;
  }

  routeToDriverDetail(id) {
    this.localService.setItem('driverId', id)
    this.localService.setItem('driverUrl', this.router.url)
    this.router.navigate([RouteConfig.driverDetail.url])
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
    this.selectedDriver = 'all';
    this.searchString = '';
    this.selectedShow = {
      startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
      endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
    };
    this.ruleId = '';
    this.router.navigate([], {
      queryParams: {
        'rule': null,
      },
      queryParamsHandling: 'merge'
    })
    this.filterApply();
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

        case 'first_name':
          return this.compare(a.first_name, b.first_name, isAsc);
        case 'name':
          return this.compare(a.first_name, b.first_name, isAsc);
        case 'last_name':
          return this.compare(a.last_name, b.last_name, isAsc);
        case 'email':
          return this.compare(a.email, b.email, isAsc);
        case 'contact':
          return this.compare(a.contact, b.contact, isAsc);
        case 'last_driver_vehicle':
          return this.compare(a.last_driver_vehicle, b.last_driver_vehicle, isAsc);
        case 'total_trips':
          return this.compare(Number(a.total_trips), Number(b.total_trips), isAsc);
        case 'goal_enabled':
          return this.compare(a.goal_enabled,b.goal_enabled, isAsc);
        case 'driving_behaviour':
          return this.compare(Number(a.driving_behaviour), Number(b.driving_behaviour), isAsc);
        case 'soreValue.speed':
          return this.compare(Number(a.soreValue.speed), Number(b.soreValue.speed), isAsc);
        case 'soreValue.idling':
          return this.compare(Number(a.soreValue.idling), Number(b.soreValue.idling), isAsc);
        case 'soreValue.acceleration':
          return this.compare(Number(a.soreValue.acceleration), Number(b.soreValue.acceleration), isAsc);
        case 'soreValue.breaking':
          return this.compare(Number(a.soreValue.breaking), Number(b.soreValue.breaking), isAsc);
        case 'soreValue.cornering':
          return this.compare(Number(a.soreValue.cornering), Number(b.soreValue.cornering), isAsc);
        default:
          return 0;
      }
    });
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  toggleChange(value) {
    this.tableView = value;
  }
  setPage(index: number) {
    if(this.paginator)
    this.paginator.pageIndex = index;
  }

}

