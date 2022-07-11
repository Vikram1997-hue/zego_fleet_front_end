import { Component, ElementRef, Inject, OnInit, ViewChild } from "@angular/core";
import zoomPlugin from 'chartjs-plugin-zoom';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from "@angular/material/paginator";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Chart, registerables } from "chart.js";
import * as moment from "moment";
import { AppConfig } from "src/app/config/app-config";
import { RouteConfig } from "src/app/config/route-config";
import { LocalService } from "src/app/services/local.service";
import { MainService } from "src/app/services/main.service";

declare var google;
@Component({
  selector: "app-vehicle-detail",
  templateUrl: "./vehicle-detail.component.html",
  styleUrls: ["./vehicle-detail.component.scss"],
})
export class VehicleDetailComponent implements OnInit {
  public isCollapsed = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dashboardData: any = {};
  dashBoardData: any;
  vehicleCategoryData: any = [];
  selected = 0;
  vehicleList: any = [];
  thresholdConfig = AppConfig.gaugeThreshold;
  gaugeMin = AppConfig.gaugeMin;
  gaugeMax = AppConfig.gaugeMax;
  gaugeType = "semi";
  tableView: string = "table";
  isTripHistoryLoading: boolean = false;
  tripHistory: any = [];

  page: number = 1;
  limit: number = 5;
  totalCount: number;
  pageSizeOptions: number[] = [5, 10, 25];
  selectedOrgID: any;

  speedProfile: any = { speed: [], limit: [], time: [] };
  accProfile: any = { acc: [], deacc: [], time: [] };

  tripToolTipData: any = {};

  selectedVehicleCategory: any = "all";
  selectedVehicle: any = "all";
  searchCategory: string = "";
  searchVehicle: string = "";
  searchString: string;

  pageSpeed: number = 1;
  speedCount:number = 0;
  pageAcc:number = 1;
  accCount:number = 0;
  //CALENDAR

  ranges: any = AppConfig.momentRange;

  alwaysShowCalendars: boolean = true;
  showRangeLabelOnInput: boolean = true;
  keepCalendarOpeningWithRange: boolean = true;
  selectedShow: any = {
    startDate: moment()
      .subtract(1, "month")
      .startOf("month")
      .set("hours", 0)
      .set("minutes", 0),
    endDate: moment()
      .subtract(1, "month")
      .endOf("month")
      .set("hours", 23)
      .set("minutes", 59),
  };
  selectedShowCopy: any = {
    startDate: moment()
      .subtract(1, "month")
      .startOf("month")
      .set("hours", 0)
      .set("minutes", 0),
    endDate: moment()
      .subtract(1, "month")
      .endOf("month")
      .set("hours", 23)
      .set("minutes", 59),
  };
  invalidDates = [];

  tooltips = [
    { date: moment(), text: "Today is just unselectable" },
    { date: moment().add(2, "days"), text: "Yeeeees!!!" },
  ];

  alertsCount: any = [];
  map;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    public service: MainService,
    private localService: LocalService,
    private elementRef: ElementRef,
    private translate: TranslateService,
    public dialog: MatDialog
  ) {
    Chart.register(...registerables);
    Chart.register(zoomPlugin);
  }

  safeScoreCheckboxsecond = true;
  otherCheckboxsecond = true;
  vehicleData: any;
  vehicleId: any;
  ngOnInit(): void {
    this.vehicleId = this.localService.getItem('vehicleId')
    setTimeout(() => {
      this.initMap()
    }, 20)


    this.localService.getLang().subscribe((val) => {
        setTimeout(() => {
          this.createSpeedProfileChart();
          this.createAccProfileChart();
          this.lineChartScore(
            this.dayNightScore.date,
            this.dayNightScore.dayScore,
            this.dayNightScore.nightScore,
            "Day Night"
          );
        }, 200);
    });

    this.limit = Number(this.localService.getItem("tripLimit")) || 5;
    this.selectedOrgID = this.localService.getItem("selectedOrgs");
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }

    if (this.selectedOrgID) {
      this.resetToLastState();
      // this.getVehicleCategory();
      // this.getVehicles();
      this.updatePageData();
    }

    // this.localService.watchOrgData().subscribe((resp) => {
    //   if (
    //     resp &&
    //     this.router.url.split("?")[0] == RouteConfig.vehicleDetail.url
    //   ) {
    //     // console.log('')
    //     let orgId: any = this.localService.getItem("selectedOrgs");
    //     if (orgId) {
    //       orgId = JSON.parse(orgId);
    //     }
    //     let isEqual = true;
    //     if (
    //       this.selectedOrgID &&
    //       this.selectedOrgID.length &&
    //       orgId &&
    //       orgId.length
    //     ) {
    //       isEqual =
    //         orgId.length === this.selectedOrgID.length &&
    //         orgId.every((val) => this.selectedOrgID.includes(val));
    //     } else {
    //       isEqual = false;
    //     }
    //     if (!isEqual) {
    //       this.selectedOrgID = [...orgId];
    //       this.resetToLastState();
    //       this.getVehicleCategory();
    //       this.getVehicles();
    //       this.updatePageData();
    //     }
    //   }
    // });
  }
  openChartPopup(chartData, type) {
    let chart = { chartData: chartData, type: type };
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      disableClose: true,
      panelClass: "custom-dialog-container",
      height: "auto",
      width: "80%",
      data: chart,
    });

    dialogRef.afterClosed().subscribe((result) => {
    
    });
  }
  changecheckboxValuesecond(num) {
    
  }
  initMap() {
    var neitherLandCordi = new google.maps.LatLng(AppConfig.netherlandLat, AppConfig.netherlandLong);
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: neitherLandCordi,
      disableDefaultUI: true,
      draggable: true,
      scaleControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      fullscreenControl: true,
      fullscreenControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.BOTTOM_RIGHT
      },
    });
    this.map.setOptions({ styles: AppConfig.mapStyle });
  }

  toggleChange(value) {
    this.tableView = value;
  }

  getVehicleCategory() {
    this.searchCategory = "";
    this.service
      .get(
        `vehicles/category-by-organisation?organisation=${JSON.stringify(
          this.selectedOrgID
        )}`
      )
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.length) {
            this.vehicleCategoryData = response.data;
          }
        },
        (error) => {}
      );
  }

  getVehicles(categoryId?) {
    if ((categoryId && categoryId == "all") || categoryId == undefined) {
      categoryId = "";
    }
    this.searchVehicle = "";
    this.service
      .get(
        `vehicles/by-organisation?organisation=${JSON.stringify(
          this.selectedOrgID
        )}`
      )
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.length) {
            this.vehicleList = response.data;
          }
          // this.getUpdatedStats()
        },
        (error) => {}
      );
  }

  getVehicleDashboardData(categoryId?, vehicleId?, search?) {
    let querryParams = this.createQuerryparams(categoryId, vehicleId, search);
    this.service
      .get(`zego/vehicles/${this.vehicleId}?${querryParams}`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.rows) {
            this.vehicleData = response.data.rows[0];
            if(this.vehicleData.last_location && this.vehicleData.last_location.length){
              var latLong = new google.maps.LatLng(this.vehicleData.last_location[0].latitude, this.vehicleData.last_location[0].longitude);
              new google.maps.Marker({
                position: latLong,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  fillColor: '#E35B28',
                  fillOpacity: 1,
                  strokeColor: '#E35B28',
                  scale: 6
                },
                map: this.map,
              });
          
              this.map.setCenter(latLong);
            }

          } else {
            this.vehicleData = {};
          }
        },
        (error) => {
          this.vehicleData = {};
        }
      );
  }

  vehicleSafeScore: any = {label: [], data: []}
  getDrivingBehaviour( categoryId?, vehicleId?, search?) {
    this.vehicleSafeScore = {label: [], data: []}
    let querryParams = this.createQuerryparams(categoryId, vehicleId, search)
    this.service.get(`zego/vehicles/score/${this.vehicleId}?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        let lastDate;
        for (let i = 0; i < response.data.length; i++) {
            if (i == 0) {
              lastDate = moment.utc(response.data[i].date);
              this.pushChartData(response.data[i]);
            } else {
              if (
                moment.utc(response.data[i].date).diff(lastDate, "days") == 1
              ) {
                this.pushChartData(response.data[i]);
                lastDate = moment.utc(response.data[i].date);
              } else {
                let days = moment
                  .utc(response.data[i].date)
                  .diff(lastDate, "days");
                let j = 1;
                while (j < days) {
                  this.vehicleSafeScore.label.push(
                    moment(lastDate).add(j, "days").format("DD/MM")
                  );
                  this.vehicleSafeScore.data.push(null);
     
                  j = j + 1;
                }
                this.pushChartData(response.data[i]);
                lastDate = moment.utc(response.data[i].date);
              }
            }
          }
          this.lineChart();        
      }
 
    }, (error) => {
    })
  }

  pushChartData(element) {
    this.vehicleSafeScore.label.push(moment.utc(element.date).format("DD/MM"));

    if (!this.naValue.includes(element.safe_score)) {
      this.vehicleSafeScore.data.push(this.formatToFixed(element.safe_score, 1));
    } else {
      this.vehicleSafeScore.data.push(null);
    }
  }


  // getTripHistory(categoryId?, vehicleId?, search?) {
  //   this.isTripHistoryLoading = true;
  //   let querryParams = this.createQuerryparams(
  //     categoryId,
  //     vehicleId,
  //     search,
  //     "listing"
  //   );
  //   this.service
  //     .get(`trips?${querryParams}`)
  //     .pipe()
  //     .subscribe(
  //       (response) => {
  //         if (response.data) {
  //           this.isTripHistoryLoading = false;
  //           this.totalCount = response.data.count;
  //           this.tripHistory = response.data.rows;
  //           this.alertsCount = [];
  //           response.data.rows.forEach((element) => {
  //             this.alertsCount.push(element.id);
  //           });
  //           if (this.totalCount) {
  //             this.getexception();
  //             this.getTooltipInfo(this.tripHistory);
  //           }
  //           this.setPage(this.page - 1);
  //         } else {
  //           this.totalCount = 0;
  //           this.tripHistory = [];
  //         }
  //       },
  //       (error) => {
  //         this.isTripHistoryLoading = false;
  //         this.tripHistory = [];
  //       }
  //     );
  // }

  // getexception() {
  //   const data = {
  //     tripId: this.alertsCount,
  //   };
  //   this.service
  //     .post("trips/alerts", data)
  //     .pipe()
  //     .subscribe((res) => {
  //       if (res.data) {
  //         this.tripHistory.filter((ele, i) => {
  //           for (const k in res.data) {
  //             if (ele.id == k) {
  //               this.tripHistory[i].exception_events = res.data[k];
  //             }
  //           }
  //         });
  //       }
  //     });
  // }

  createQuerryparams(categoryId?, vehicleId?, search?, listing?) {
    let querryParams;
    if (listing) {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}&page=${
        this.page
      }&limit=${this.limit}`;
    } else {
      querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
    }
    let val = this.service.checkCustomDate(
      moment(this.selectedShowCopy.startDate).format("YYYY-MM-DD"),
      moment(this.selectedShowCopy.endDate).format("YYYY-MM-DD")
    );
    if (val == undefined) {
      querryParams = querryParams + `&custom_filter=true&filter_value=''`;
    } else {
      if (
        (categoryId && categoryId !== "all") ||
        (vehicleId && vehicleId !== "all") ||
        search
      ) {
        querryParams = querryParams + `&custom_filter=true&filter_value=''`;
      } else {
        querryParams =
          querryParams + `&custom_filter=false&filter_value=${val}`;
      }
    }

    if (categoryId && categoryId !== "all") {
      querryParams = querryParams + `&vehicle_category=[${categoryId}]`;
    }
    if (vehicleId && vehicleId !== "all") {
      querryParams = querryParams + `&vehicle=[${vehicleId}]`;
    }
    if (search) {
      querryParams = querryParams + `&search=${search}`;
    }
    querryParams =
      querryParams +
      `&from_date=${moment(this.selectedShowCopy.startDate).format(
        "YYYY-MM-DD"
      )}`;
    querryParams =
      querryParams +
      `&to_date=${moment(this.selectedShowCopy.endDate).format("YYYY-MM-DD")}`;
    return querryParams;
  }

  // getTooltipInfo(tableData) {
  //   const data = {
  //     tripId: this.alertsCount,
  //   };
  //   this.service
  //     .post("trips/exception-counts", data)
  //     .pipe()
  //     .subscribe((res) => {
  //       if (res.data) {
  //         for (const k in res.data) {
  //           this.tripToolTipData[k] = this.service.convertFormat(res.data[k]);
  //         }
  //       }
  //     });
  // }

  updatePageData() {
    this.activeRoute.queryParams.subscribe((params) => {
      // const details:any = params.page;
      this.page = params?.page || 1;
    });
    this.getDayNightScore();
    this.getVehicleDashboardData(
      this.selectedVehicleCategory,
      this.selectedVehicle,
      this.searchString
    );
    this.pageSpeed = 1;
    this.speedCount = 0;
    this.pageAcc = 1;
    this.accCount = 0;
    this.totalCount = 0;
    this.speedProfile = { speed: [], limit: [], time: [] };
    this.accProfile = { acc: [], deacc: [], time: [] };
    this.getDrivingBehaviour()
    this.getSpeedProfileData();
    this.getAccelerationProfileData();
  }

  goToLastPage() {
    if (this.localService.getItem("vehicleUrl")) {
      let url = this.localService.getItem("vehicleUrl");
      let page = url.split("=")[1];
      page = page ? page : "1";
      this.router.navigate([RouteConfig.vehicle.url], {
        queryParams: { page: page },
      });
    } else {
      this.router.navigate([RouteConfig.vehicle.url]);
    }
  }

  formatToFixed(val, precision) {
    if (typeof val == "string") {
      val = parseFloat(val);
    }
    if (val) {
      return val.toFixed(precision);
    }
    return 0;
  }

  // filterApply() {
  //   this.localService.setItem("category", this.selectedVehicleCategory);
  //   this.localService.setItem("vehicleId", this.selectedVehicle);
  //   this.localService.setItem("search", this.searchString);
  //   this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
  //   this.selectedShowCopy = this.selectedShow;
  //   this.updatePageData();
  //   this.changeState();
  // }

  resetToLastState() {
    let category = this.localService.getItem("category");
    let vehicle = this.localService.getItem("vehicleId");
    let search = this.localService.getItem("search");
    let date: any = this.localService.getItem("dateRange");
    if (date) {
      date = JSON.parse(date);
      this.selectedShowCopy = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate),
      };
      this.selectedShow = this.selectedShowCopy;
    } else {
      this.selectedShow = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
      this.selectedShowCopy = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
    }
    search ? (this.searchString = search) : (this.searchString = "");
    category && category !== "all"
      ? (this.selectedVehicleCategory = JSON.parse(category))
      : (this.selectedVehicleCategory = "all");
    vehicle && vehicle !== "all"
      ? (this.selectedVehicle = JSON.parse(vehicle))
      : (this.selectedVehicle = "all");
  }

  // changeState() {
  //   this.isCollapsed = !this.isCollapsed;
  //   if (!this.isCollapsed) {
  //     this.resetToLastState();
  //   }
  // }

  // datesUpdatedDashboard(range) {}

  // rangeClicked(label) {
  //   // console.log('[rangeClicked] range is : ', label);
  // }

  // isInvalidDate = (m) => {
  //   return this.invalidDates.some((d) => d.isSame(m, "day"));
  // };

  // isTooltipDate = (m) => {
  //   const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, "day"));
  //   if (tooltip) {
  //     return tooltip.text;
  //   } else {
  //     return false;
  //   }
  // };

  // resetFilter() {
  //   this.selectedVehicleCategory = "all";
  //   let vehicle = this.localService.getItem("vehicleId");
  //   vehicle && vehicle !== "all"
  //     ? (this.selectedVehicle = JSON.parse(vehicle))
  //     : (this.selectedVehicle = "all");
  //   this.searchString = "";
  //   this.selectedShow = {
  //     startDate: moment()
  //       .subtract(1, "month")
  //       .startOf("month")
  //       .set("hours", 0)
  //       .set("minutes", 0),
  //     endDate: moment()
  //       .subtract(1, "month")
  //       .endOf("month")
  //       .set("hours", 23)
  //       .set("minutes", 59),
  //   };
  //   this.filterApply();
  // }

  // pageChange(event) {
  //   if (this.limit !== event.pageSize) {
  //     const queryParams: Params = { page: 1 };
  //     this.router.navigate([], {
  //       queryParams: queryParams,
  //       queryParamsHandling: "merge", // remove to replace all query params by provided
  //     });
  //     this.page = 1;
  //   } else {
  //     const queryParams: Params = { page: event.pageIndex + 1 };
  //     this.router.navigate([], {
  //       queryParams: queryParams,
  //       queryParamsHandling: "merge", // remove to replace all query params by provided
  //     });
  //     this.page = event.pageIndex + 1;
  //   }

  //   this.limit = event.pageSize;
  //   this.localService.setItem("tripLimit", this.limit);
  //   this.isCollapsed = true;
  //   let category = this.localService.getItem("category");
  //   let vehicle = this.localService.getItem("vehicleId");
  //   let search = this.localService.getItem("search");
  //   this.getTripHistory(category, vehicle, search);
  // }

  // setPage(index: number) {
  //   if (this.paginator) this.paginator.pageIndex = index;
  // }
  // datesUpdated(range) {
  //   //  console.log('[datesUpdated] range is : ', range);
  // }
  linemyChart: any;
  lineChart() {
    if (this.linemyChart) {
      this.linemyChart.destroy();
    }
    let htmlRef = this.elementRef.nativeElement.querySelector(`#drivingScore`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#drivingScore`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
    gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
    const dataSet: any = [
      {
        data: this.vehicleSafeScore.data,
        borderColor: "#001E50",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
      },
    ];

    this.linemyChart = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: this.vehicleSafeScore.label,
        datasets: dataSet,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#ffffff",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            titleColor: "#1B194B",
            displayColors: false,
            callbacks: {
              labelTextColor: (context) => {
                return "#1B194B";
              },
            },
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            // min: -10,
            ticks: {
              precision: 0,
            },
          },
        },
      },
    });
  }
  dayNightScore = { dayScore: [], nightScore: [], date: [] };
  naValue = ["1001.0", 1001, "1001.0"];
  getDayNightScore() {
    this.dayNightScore = { dayScore: [], nightScore: [], date: [] };
    let querryParams = this.createQuerryparams();
    this.service
      .get(`zego/vehicles/day-night/${this.vehicleId}?${querryParams}&is_day_trip=[true,false]`)
      .pipe()
      .subscribe(
        (res: any) => {
          res.data.forEach((element: any) => {
            if (element.is_day_trip) {
              this.dayNightScore.date.push(
                moment.utc(element.start_date_time).format("DD/MM")
              );
              if (!this.naValue.includes(element?.safe_score)) {
                this.dayNightScore.dayScore.push(element?.safe_score);
              } else {
                this.dayNightScore.dayScore.push(null);
              }
            } else {
              if (!this.naValue.includes(element?.safe_score)) {
                this.dayNightScore.nightScore.push(element?.safe_score);
              } else {
                this.dayNightScore.nightScore.push(null);
              }
            }
          });
          this.dayNightScore.date.reverse();
          this.dayNightScore.dayScore.reverse();
          this.dayNightScore.nightScore.reverse();
          // console.log(this.dayNightScore);
          this.lineChartScore(
            this.dayNightScore.date,
            this.dayNightScore.dayScore,
            this.dayNightScore.nightScore,
            "Day Night"
          );
        },
        (err) => {}
      );
  }
  linemyChartScore: any;
  lineChartScore(label, point, pointsSecond, name) {
    if (this.linemyChartScore) {
      this.linemyChartScore.destroy();
    }
    var labels = label;

    const datapoints = point;
    let dayDrive;
    this.translate.get("daydriving").subscribe((text: string) => {
      dayDrive = text;
    });
    let nightDrive;
    this.translate.get("nightdriving").subscribe((text: string) => {
      nightDrive = text;
    });

    let htmlRef =
      this.elementRef.nativeElement.querySelector(`#lineChartScore`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#lineChartScore`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
    gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
    const dataSet: any = [
      {
        data: pointsSecond,
        borderColor: "#939EAA",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: nightDrive,
      },
      {
        data: point,
        borderColor: "#001E50",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: dayDrive,
      },
    ];
   

    // console.log(dataSet);

    this.linemyChartScore = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: dataSet,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#ffffff",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            titleColor: "#1B194B",
            displayColors: false,
            callbacks: {
              labelTextColor: (context) => {
                return "#1B194B";
              },
            },
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            // min: -10,
            max: AppConfig.gaugeMax,
            ticks: {
              precision: 0,
              // stepSize: 10,
              // callback: (value, index, values) => {
              //   return (index == (values.length-1)) ?  undefined :  value
              // }
            },
          },
        },
      },
    });
  }
  pageCountUpdate(){
    this.pageSpeed = this.pageSpeed + 1;
    this.getSpeedProfileData();
  }

  checkPageSize(){
    let totalPage = Math.ceil(this.speedCount/500);
    if(this.pageSpeed < totalPage){
      return false;
    }
    else{
      return true;
    }
  }


  pageCountUpdateAcc(){
    this.pageAcc = this.pageAcc + 1;
    this.getAccelerationProfileData();
  }

  checkPageSizeAcc(){
    let totalPage = Math.ceil(this.accCount/500);
    if(this.pageAcc < totalPage){
      return false;
    }
    else{
      return true;
    }
  }

  isSpeedDataLoading: boolean = false;
  getSpeedProfileData() {
    this.isSpeedDataLoading = true;
    let querryParams = this.createQuerryparams();
    this.service
      .get(
        `zego/vehicles/speed-acceleration-breaking/${this.vehicleId}?type=1&${querryParams}&page=${this.pageSpeed}`
      )
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.rows && response.data.rows.length) {
            this.speedCount = response.data.count;
            response.data.rows.forEach((element) => {
              this.speedProfile["speed"].push(+element.property_value);
              this.speedProfile["limit"].push(+element.waypoint.road_speed);
              this.speedProfile["time"].push(
                moment(element.timestamp).utc().format("D/MM, HH:mm:ss")
              );
            });
          } 
          this.isSpeedDataLoading = false;
          this.createSpeedProfileChart();
        },
        (error) => {
          this.speedProfile = { speed: [], limit: [], time: [] };
        }
      );
  }

  isAccDataLoading: boolean = false;
  getAccelerationProfileData() {
    this.isAccDataLoading = true;
    let querryParams = this.createQuerryparams();
    this.service
      .get(
        `zego/vehicles/speed-acceleration-breaking/${this.vehicleId}?type=2&${querryParams}&page=${this.pageAcc}`
      )
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.rows && response.data.rows.length) {
            this.accCount = response.data.count;
            response.data.rows.forEach((element) => {
              if (element.property_id == "AccelerationID") {
                this.accProfile["acc"].push(+element.property_value);
                this.accProfile["deacc"].push("");
              } else {
                this.accProfile["acc"].push("");
                this.accProfile["deacc"].push(+element.property_value);
              }
              this.accProfile["time"].push(
                moment(element.timestamp).utc().format("D/MM,HH:mm:ss")
              );
            });
          } 
          this.isAccDataLoading = false;
          this.createAccProfileChart();
        },
        (error) => {
          this.accProfile = { acc: [], deacc: [], time: [] };
        }
      );
  }

  speedChart;
  createSpeedProfileChart() {
    if(this.speedChart){
      this.speedChart.destroy();
    }
    const labels = this.speedProfile['time'];
    var speed;
    var limit;

    this.translate.get("speed").subscribe( (text: string) => {
      speed=text
    });
    this.translate.get("limit").subscribe( (text: string) => {
      limit=text
    });
    let htmlRef = this.elementRef.nativeElement.querySelector(`#speedProfile`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#speedProfile`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0, "rgba(0, 122, 255, 0.33)");
    var dataset1 = this.speedProfile["speed"];
    var dataset2 = this.speedProfile["limit"];
    const up = (ctx, value) => {
      if (dataset1[ctx.p0DataIndex] > dataset2[ctx.p0DataIndex]) {
        return "#FA1464"
      }
      else {
        return "#001E50"
      }
    }
    this.speedChart = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: `${speed} km/h`,
            data: this.speedProfile["speed"],
            borderColor: '#001E50',
            cubicInterpolationMode: "monotone",
            tension: 0.4,
            fill: "start",
            backgroundColor: gradient,
          },
          {
            label: limit,
            data: this.speedProfile["limit"],
            borderColor: "#939EAA",
            stepped: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: false,
            text: "Stacked scales",
          },
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
            },
          },

          tooltip: {
            mode: "nearest",
            axis: "x",
            intersect: true,
            enabled: true,
            backgroundColor: "#ffffff",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            titleColor: "#1B194B",
            displayColors: false,
            callbacks: {
              labelTextColor: (context) => {
                return "#1B194B";
              },
            },
          },
        },
        scales: {
          y: {
            type: "linear",
            position: "left",
            stack: "demo",
            stackWeight: 2,
            grid: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
          x: {
            ticks:{
              maxTicksLimit: 15
            },
            grid: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        },
      },
    });



  }

  accChart;
  createAccProfileChart() {
    if(this.accChart){
      this.accChart.destroy();
    }
    var labels = this.accProfile['time'];
    var breakingprofile;
    var accelerationprofile;

    this.translate.get("breakingprofile").subscribe( (text: string) => {
      breakingprofile=text
    });
    this.translate.get("accelerationprofile").subscribe( (text: string) => {
      accelerationprofile=text
    });
    let htmlRef = this.elementRef.nativeElement.querySelector(`#myChartAcc`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#myChartAcc`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0, "rgba(0, 122, 255, 0.33)");
    this.accChart = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: `${accelerationprofile}`,
            data: this.accProfile['acc'],
            borderColor: '#001E50',
            // stepped: true
          },
          {
            label:`${breakingprofile}`,
            data: this.accProfile['deacc'],
            borderColor: "#939EAA",
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
            text: "Stacked scales",
          },
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
            },
          },
          tooltip: {
            mode: "nearest",
            axis: "x",
            intersect: false,
            enabled: true,
            backgroundColor: "#ffffff",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            titleColor: "#1B194B",
            displayColors: false,
            callbacks: {
              labelTextColor: (context) => {
                return "#1B194B";
              },
            },
          },
        },
        scales: {
          x: {
            ticks:{
              maxTicksLimit: 15
            },
            grid: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
          y: {
            position: "left",
            stack: "demo",
            stackWeight: 2,
            grid: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        },
      },
    });
  }
}



@Component({
  selector: "dialog-content-example-dialog",
  templateUrl: "./chart-data.html",
  styleUrls: ["./vehicle-detail.component.scss"],
})
export class DialogContentExampleDialog {
  graphData: any;
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    private elementRef: ElementRef,
    private translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    Chart.register(...registerables);
    Chart.register(zoomPlugin);
    setTimeout(() => {
      if (this.data.type == 1) {
        this.createSpeedProfileChart(this.data.chartData);
      } else if(this.data.type==2){
        this.createAccProfileChart(this.data.chartData);
      }
      else if(this.data.type==4){
        this.lineChart(this.data.chartData.label,this.data.chartData.data)
      }
      else{
        this.lineChartScore(this.data.chartData.date,this.data.chartData.dayScore,this.data.chartData.nightScore)
      }
    }, 200);
  }
  myChart;
  createSpeedProfileChart(data) {
    const labels = data['time'];
    var speed;
    var limit;

    this.translate.get("speed").subscribe( (text: string) => {
      speed=text
    });
    this.translate.get("limit").subscribe( (text: string) => {
      limit=text
    });
    let htmlRef = this.elementRef.nativeElement.querySelector(`#popupChart`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#popupChart`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 600);
    var dataset1 = data["speed"];
    var dataset2 = data["limit"];
    const up = (ctx, value) => {
      if (dataset1[ctx.p0DataIndex] > dataset2[ctx.p0DataIndex]) {
        return "#FA1464"
      }
      else {
        return "#001E50"
      }
    }
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0, "rgba(0, 122, 255, 0.33)");
    const dataSet: any = [
      {
        label: "Limit",
        data: data["limit"],
        borderColor: "#939EAA",
        stepped: true,
      },
      {
        label: "Speed km/h",
        data: data["speed"],
        borderColor: "#001E50",
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        fill: "start",
        backgroundColor: gradient,
        segment: {
          borderColor: ctx => up(ctx, 'rgb(0,0,0,0.2)'),
        }
      },

    ];
    if (!this.safeScoreCheckbox) {
      dataSet.splice(1, 1);
    }
    if (!this.otherCheckbox) {
      dataSet.splice(0, 1);
    }
    

    this.myChart = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: `${speed} km/h`,
            data: data['speed'],
            borderColor: '#001E50',
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            fill: 'start',
            backgroundColor: gradient
          },
          {
            label: limit,
            data: data['limit'],
            borderColor: '#939EAA',
            stepped: true
          }
        ]
      },
      options: {
        // responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: false,
            text: "Stacked scales",
          },
          legend: {
            labels: {
              usePointStyle: true,
            },
            display: false
          },
          tooltip: {
            mode: "nearest",
            axis: "x",
            intersect: false,
            enabled: true,
            backgroundColor: "#ffffff",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            titleColor: "#1B194B",
            displayColors: false,
            callbacks: {
              labelTextColor: (context) => {
                return "#1B194B";
              },
            },
          },
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              drag: {
                enabled: true,
              },
              mode: "x",
            },
          },
        },
        scales: {
          y: {
            type: "linear",
            position: "left",
            stack: "demo",
            stackWeight: 2,
            grid: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
          x: {
            grid: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        },
      },
    });
  }

  createAccProfileChart(data) {
    var labels = data['time'];
    var breakingprofile;
    var accelerationprofile;
    this.translate.get("breakingprofile").subscribe( (text: string) => {
      breakingprofile=text
    });
    this.translate.get("accelerationprofile").subscribe( (text: string) => {
      accelerationprofile=text
    });
    let htmlRef = this.elementRef.nativeElement.querySelector(`#popupChart`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#popupChart`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0, "rgba(0, 122, 255, 0.33)");
    const dataSet: any = [
      {
        label: "Braking Profile",
        data: data["deacc"],
        borderColor: "#939EAA",
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
      {
        label: "Acceleration profile",
        data: data["acc"],
        borderColor: "#001E50",
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },

    ];
    if (!this.safeScoreCheckbox) {
      dataSet.splice(1, 1);
    }
    if (!this.otherCheckbox) {
      dataSet.splice(0, 1);
    }
    this.myChart = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: accelerationprofile,
            data: data['acc'],
            borderColor: '#001E50',
            // stepped: true
          },
          {
            label: breakingprofile,
            data: data['deacc'],
            borderColor: '#939EAA',
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
            text: "Stacked scales",
          },
          legend: {
            labels: {
              usePointStyle: true,
            },
            display: false
          },
          tooltip: {
            mode: "nearest",
            axis: "x",
            intersect: false,
            enabled: true,
            backgroundColor: "#ffffff",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            titleColor: "#1B194B",
            displayColors: false,
            callbacks: {
              labelTextColor: (context) => {
                return "#1B194B";
              },
            },
          },
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              drag: {
                enabled: true,
              },
              mode: "x",
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
          y: {
            position: "left",
            stack: "demo",
            stackWeight: 2,
            grid: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        },
      },
    });
  }

  lineChartScore(label, point, pointsSecond) {
    // console.log(point,pointsSecond,label)
    if (this.myChart) {
      this.myChart.destroy();
    }
    var labels = label;

    const datapoints = point;
    let dayDrive;
    this.translate.get("daydriving").subscribe((text: string) => {
      dayDrive = text;
    });
    let nightDrive;
    this.translate.get("nightdriving").subscribe((text: string) => {
      nightDrive = text;
    });

    let htmlRef =
      this.elementRef.nativeElement.querySelector(`#popupChart`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#popupChart`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
    gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
    const dataSet: any = [
      {
        data: pointsSecond,
        borderColor: "#939EAA",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: nightDrive,
      },
      {
        data: point,
        borderColor: "#001E50",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: dayDrive,
      },
    ];
   

    // console.log(dataSet);

    this.myChart = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: dataSet,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: {
            display: true,
          },
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              drag: {
                enabled: true,
              },
              mode: "x",
            },
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#ffffff",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            titleColor: "#1B194B",
            displayColors: false,
            callbacks: {
              labelTextColor: (context) => {
                return "#1B194B";
              },
            },
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            // min: -10,
            max: AppConfig.gaugeMax,
            ticks: {
              precision: 0,
              // stepSize: 10,
              // callback: (value, index, values) => {
              //   return (index == (values.length-1)) ?  undefined :  value
              // }
            },
          },
        },
      },
    });
  }

  lineChart(label,data) {
    if (this.myChart) {
      this.myChart.destroy();
    }
    let htmlRef = this.elementRef.nativeElement.querySelector(`#popupChart`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#popupChart`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
    gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
    const dataSet: any = [
      {
        data: data,
        borderColor: "#001E50",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
      },
    ];

    this.myChart = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: label,
        datasets: dataSet,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              drag: {
                enabled: true,
              },
              mode: "x",
            },
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#ffffff",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            titleColor: "#1B194B",
            displayColors: false,
            callbacks: {
              labelTextColor: (context) => {
                return "#1B194B";
              },
            },
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            // min: -10,
            ticks: {
              precision: 0,
            },
          },
        },
      },
    });
  }

  resetZoom() {
    this.myChart.resetZoom();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  safeScoreCheckbox = true;
  otherCheckbox = true;
  changecheckboxValue(num) {
    if (num == 1) {
      this.safeScoreCheckbox = !this.safeScoreCheckbox;
    } else {
      this.otherCheckbox = !this.otherCheckbox;
    }
    
    if (this.data.type == 1) {
      this.createSpeedProfileChart(this.data.chartData);
    } else {
      this.createAccProfileChart(this.data.chartData);
    }

    // if (this.title == "Speed score") {
    //   this.lineChart(this.chartData.date, this.chartData.speed, this.title);
    // } else if (this.title == "Acceleration score") {
    //   this.lineChart(this.chartData.date, this.chartData.acc, this.title);
    // } else if (this.title == "Braking score") {
    //   this.lineChart(this.chartData.date, this.chartData.braking, this.title);
    // } else if (this.title == "Cornering score") {
    //   this.lineChart(this.chartData.date, this.chartData.cornering, this.title);
    // } else {
    //   this.lineChart(this.chartData.date, this.chartData.idiling, this.title);
    // }
  }
}