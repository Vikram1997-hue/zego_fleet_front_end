import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

// table
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-rule-engine-dashboard',
  templateUrl: './rule-engine-dashboard.component.html',
  styleUrls: ['./rule-engine-dashboard.component.scss']
})
export class RuleEngineDashboardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  dataSource: any;
  totalCount: number;
  page: number = 1;
  limit: number = 1000;
  active = 1;
  pageSizeOptions: number[] = [5, 10, 100, 1000];
  isTripHistoryLoading = false;
  displayedColumns: string[] = ['organization.name', 'percentage_of_violation_max', 'duration_of_violation', 'score', 'speed', 'road_factor', 'vehicle_category.name', 'day_night_driving', 'weather', 'exception_type', 'symbol'];
  exception_type = ""
  constructor(private _snackBar: MatSnackBar, private main: MainService, private route: Router, public localService: LocalService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.limit = Number(this.localService.getItem("rulelimit")) || 1000;
    this.getRuleengineList()
  }

  pageChange(event) {
    if(this.limit !== event.pageSize){
      const queryParams: Params = { page: 1 };
      this.route.navigate(
        [], 
        {
          
          queryParams: queryParams, 
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
      this.page = 1;
    }
    else{
      const queryParams: Params = { page: event.pageIndex + 1 };
      this.route.navigate(
        [], 
        {
          
          queryParams: queryParams, 
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
      this.page = event.pageIndex + 1;
    }
    this.limit = event.pageSize;
    this.localService.setItem("rulelimit", this.limit);
    this.getRuleengineList();
  }
  exceptionType(type: string, num) {
    this.exception_type = type;
    this.active = num;
    this.getRuleengineList();
  }

  getRuleengineList() {
    this.activeRoute.queryParams
    .subscribe(params => {
      // const details:any = params.page;
      this.page=params?.page || 1;
    }
  );
    this.isTripHistoryLoading = true;
    this.dataSource = [];
    this.main.get(`rule-engine/list?page=${this.page}&limit=${this.limit}&exception_type=${this.exception_type}`).pipe().subscribe(res => {
      if (res.data.rows) {
        this.isTripHistoryLoading = false;
        this.totalCount = res.data.count;
        this.dataSource = res.data.rows;
        this.setPage(this.page-1);
      }
    }), err => {
      this.isTripHistoryLoading = false;
    }
  }
  editRule(data) {
    this.route.navigate([RouteConfig.editruleengine.url], { queryParams: { details: JSON.stringify(data) } });
  }
  resetStatus(ele, status) {
    // console.log(id)
    let data = {
      id: ele.id,
      is_active: status,
      road_type_min: ele.road_type_min,
      road_type_max: ele.road_type_max,
      road_factor: ele.road_factor,
      exception_type: ele.exception_type
    }
    this.main.put(`rule-engine/change-status`, data).pipe().subscribe(res => {
      this.getRuleengineList();
      this.openSnackBarmodal(res.message, "status-rule")

    }), err => {

    }
  }

  openSnackBarmodal(message, panelClass: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { image: false, message: message },
      panelClass: panelClass,
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,

    });
  }

  checkUnit(data) {
    if (data == 'speed') {
      return "km/hr"
    }
    else if (data == 'breaking') {
      return "m/s"
    }
    else if (data == 'cornering') {
      return "m/s"
    }
    else if (data == 'acceleration') {
      return "m/s"
    }
    else if (data == 'idling') {
      return "s"
    }
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
        case 'organization.name':
          return this.compare(a.organization.name, b.organization.name, isAsc);
        case 'percentage_of_violation_max':
          return this.compare(a.percentage_of_violation_max, b.percentage_of_violation_max, isAsc);
        case 'duration_of_violation':
          return this.compare(a.duration_of_violation, b.duration_of_violation, isAsc);
        case 'score':
          return this.compare(a.score, b.score, isAsc);
        case 'road_factor':
          return this.compare(a.road_factor, b.road_factor, isAsc);
        case 'vehicle_category.name':
          return this.compare(a.vehicle_category.name, b.vehicle_category.name, isAsc);
        case 'day_night_driving':
          return this.compare(a.day_night_driving, b.day_night_driving, isAsc);
        case 'exception_type':
          return this.compare(a.exception_type, b.exception_type, isAsc);
        case 'weather':
          return this.compare(a.weather, b.weather, isAsc);
        default:
          return 0;
      }
    });
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  setPage(index: number) {
    if(this.paginator)
    this.paginator.pageIndex = index;
  }
}
