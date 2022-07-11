import { Component, ElementRef, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { Chart, registerables } from 'chart.js';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';

@Component({
  selector: 'app-fuel-dashboard',
  templateUrl: './fuel-dashboard.component.html',
  styleUrls: ['./fuel-dashboard.component.scss']
})
export class FuelDashboardComponent implements OnInit {

  //table
  displayedColumns: string[] = ['license_plate', 'category_name', 'vehicle_model', 'fuel_type', 'consumption100km'];
  dataSource;

  public isCollapsed = true;

  selectedOrgID: any;
  searchString: string;

  searchCategory: string;
  searchVehicle: string;

  vehicleCategoryData: any = [];
  vehicleList: any = [];
  driverList: any = [];

  selectedVehicleCategory: any = 'all';
  selectedVehicle: any = 'all';

  page: number = 1;
  limit: number = 1000;
  totalCount: number;
  pageSizeOptions: number[] = [5, 10, 25, 100, 1000];

  toggleType: string = 'ice';

  dashboardData: any = {};

  isFuelListLoading: boolean = false;

  selected: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };
  selectedShow: any = {
    startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
    endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
  };

  // CALENDAR

  ranges: any = AppConfig.momentRange;

  alwaysShowCalendars: boolean = true;
  showRangeLabelOnInput: boolean = true;
  keepCalendarOpeningWithRange: boolean = true;
  invalidDates = [];
  fuelChart: any = { licensePlate: [], mileage: [] }

  tooltips = [
    { date: moment(), text: 'Today is just unselectable' },
    { date: moment().add(2, 'days'), text: 'Yeeeees!!!' }
  ];

  constructor(
    public service: MainService,
    private localService: LocalService,
    private elementRef: ElementRef,
    private router: Router
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.limit = Number(this.localService.getItem("fuelLimit")) || 1000;
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
      if (resp && this.router.url.split('?')[0] == RouteConfig.fuelmilage.url) {
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

  getFuelDashboardData(categoryId?, vehicleId?, search?) {
    let querryParams = this.createQuerryparams(categoryId, vehicleId, search, 'listing')
    this.service.get(`fuel-report?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.dashboardData = response.data;
      }
      else {
        this.dashboardData = {};
      }
    }, (error) => {
      this.dashboardData = {};
    })
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

  getVehicleCategory() {
    this.searchCategory = '';
    this.service.get(`vehicles/category-by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
      if (response.data && response.data.length) {
        this.vehicleCategoryData = response.data;
        this.selectedVehicleCategory = 'all';
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
        this.selectedVehicle = 'all';
      }
      // this.getUpdatedStats()
    }, (error) => {

    })
  }

  changeState() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.resetToLastState();
    }
  }

  updatePageData() {
    this.page = 1;
    this.totalCount = 0;
    this.searchVehicle = '';
    this.searchCategory = '';
    this.getFuelDashboardData(this.selectedVehicleCategory, this.selectedVehicle, this.searchString)
    this.getFuelListing(this.selectedVehicleCategory, this.selectedVehicle, this.searchString)
  }


  getFuelListing(categoryId?, vehicleId?, search?) {
    this.isFuelListLoading = true;
    this.fuelChart = { licensePlate: [], mileage: [] }
    let querryParams = this.createQuerryparams(categoryId, vehicleId, search, 'listing')
    this.service.get(`fuel-list?${querryParams}&listFor=ice`).pipe().subscribe(response => {
      this.isFuelListLoading = false;
      if (response.data) {
        this.totalCount = response.data.count;
        if (this.totalCount) {
          response.data.rows.sort(function (a, b) {
            if (a.consumption100km > 200) a.consumption100km = 0;
            if (b.consumption100km > 200) b.consumption100km = 0;

            return b.consumption100km - a.consumption100km
          })

          response.data.rows.forEach(element => {
            if (element.consumption100km && element.consumption100km <= 200) {
              element.consumption100km = parseFloat(element.consumption100km).toFixed(1)
            }
            else {
              element.consumption100km = 'NA'
            }
            this.fuelChart.licensePlate.push(element.license_plate)
            this.fuelChart.mileage.push(element.consumption100km == 'NA' ? 0 : element.consumption100km)
          });
          this.dataSource = response.data.rows;
        }
        this.createFuelChart();
      }
      else {
        this.fuelChart = { licensePlate: [], mileage: [] }
        this.totalCount = 0;
        this.dataSource = [];
      }
    }, (error) => {
      this.isFuelListLoading = false;
      this.dataSource = [];
    })
  }

  pageChange(event) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.localService.setItem("fuelLimit", this.limit)
    this.isCollapsed = true;
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
    let search = this.localService.getItem("search")
    this.getFuelListing(category, vehicle, search)
  }



  resetToLastState() {
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
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

  filterApply() {
    this.localService.setItem("category", this.selectedVehicleCategory)
    this.localService.setItem("vehicle", this.selectedVehicle)
    this.localService.setItem("search", this.searchString)
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow))
    this.selected = this.selectedShow;
    this.updatePageData();
    this.changeState();
  }

  createQuerryparams(categoryId?, vehicleId?, search?, listing?) {
    let querryParams
    if (listing) {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}&page=${this.page}&limit=${this.limit}`;
    }
    else {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
    }

    if ((categoryId && categoryId !== 'all')) {
      let arr = [categoryId]
      querryParams = querryParams + `&vehicle_category=${JSON.stringify(arr)}`
    }
    if ((vehicleId && vehicleId !== 'all')) {
      let arr = [vehicleId]
      querryParams = querryParams + `&vehicle=${JSON.stringify(arr)}`
    }

    if (search) {
      querryParams = querryParams + `&search=${search}`
    }
    querryParams = querryParams + `&from_date=${moment(this.selected.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selected.endDate).format('YYYY-MM-DD')}`
    let val = this.service.checkCustomDate(moment(this.selected.startDate).format('YYYY-MM-DD'),moment(this.selected.endDate).format('YYYY-MM-DD'))
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

  selectFuelType(event) {
    event.checked ? this.toggleType = 'ev' : this.toggleType = 'ice';
    this.updatePageData();
  }

  myChart: any;
  createFuelChart() {
    const labels = this.fuelChart.licensePlate;
    let background =   Array(this.fuelChart.licensePlate.length).fill('#4DBFFF')    
    let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    if (this.myChart) this.myChart.destroy();
    this.myChart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Mileage (ltr/100km)',
            data: this.fuelChart.mileage,
            borderColor: background,
            backgroundColor: background,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: true,
            text: 'Mileage'
          }
        },
        scales: {
          x: {
            display: false
          }
        }
      }
    });

    var dataset = this.myChart.data.datasets[0];
    for (var i = 0; i < dataset.data.length; i++) {
      if (dataset.data[i] < 35) {
        dataset.backgroundColor[i] = 'green';
      }
      else if(dataset.data[i] < 45){
        dataset.backgroundColor[i] = 'yellow';
      }
      else if(dataset.data[i] < 60){
        dataset.backgroundColor[i] = 'Orange';
      }
      else{
        dataset.backgroundColor[i] = 'red';
      }
    }
    this.myChart.update();
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
        case 'category_name':
          return this.compare(a.category_name, b.category_name, isAsc);
        case 'vehicle_model':
          return this.compare(a.vehicle_model, b.vehicle_model, isAsc);
        case 'fuel_type':
          return this.compare(a.fuel_type, b.fuel_type, isAsc);
        case 'consumption100km':
          return this.compare(a.consumption100km, b.consumption100km, isAsc);
        default:
          return 0;
      }
    });
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
