import { Component, ElementRef, Inject, OnInit } from "@angular/core";
import * as moment from "moment";
import { AppConfig } from "src/app/config/app-config";
import { Chart, registerables } from "chart.js";
import { Route, Router } from "@angular/router";
import { LocalService } from "src/app/services/local.service";
import { MainService } from "src/app/services/main.service";
import zoomPlugin from "chartjs-plugin-zoom";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { RouteConfig } from "src/app/config/route-config";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

//table
interface Transaction {
  item: string;
  cost: string;
  score: string;
}

@Component({
  selector: "app-dashboard-home-v2",
  templateUrl: "./dashboard-home-v2.component.html",
  styleUrls: ["./dashboard-home-v2.component.scss"],
})
export class DashboardHomeV2Component implements OnInit {
  showSpeedingBox: boolean = true;
  showIdilingBox: boolean = false;
  showAccelerationBox: boolean = false;
  showBrakingBox: boolean = false;
  showCorneringBox: boolean = false;
  isTripHistoryLoading: boolean = false;

  tableView: string = "table";
  noRoadTypeData: boolean = true;
  public isCollapsed = true;

  //checkoboxes
  safeScoreCheckbox = true;
  otherCheckbox = true;
  speedingCheckbox = false;
  idilingCheckbox = false;
  accCheckbox = false;
  brakingCheckbox = false;
  corneringCheckbox = false;
  removeArr = [];

  safeScoreCheckboxsecond = true;
  otherCheckboxsecond = true;
  data = [{}, {}, {}];
  maxDate: any = moment();

  //table
  displayedColumns: string[] = ["item", "score", "cost"];
  transactions: Transaction[] = [
    { item: "Drivers name", cost: "View profile", score: "-10" },
    { item: "Drivers name", cost: "View profile", score: "-10" },
    { item: "Drivers name", cost: "View profile", score: "-10" },
    { item: "Drivers name", cost: "View profile", score: "-10" },
    { item: "Drivers name", cost: "View profile", score: "-10" },
  ];
  items = [
    { name: "10:00", imagePath: "assets/images/Drizzle.svg" },
    { name: "11:00", imagePath: "assets/images/Drizzle.svg" },
    { name: "12:00", imagePath: "assets/images/Drizzle.svg" },
    { name: "13:00", imagePath: "assets/images/Drizzle.svg" },
    { name: "14:00", imagePath: "assets/images/sun.svg" },
    { name: "15:00", imagePath: "assets/images/sun.svg" },
    { name: "16:00", imagePath: "assets/images/sun.svg" },
    { name: "17:00", imagePath: "assets/images/sun.svg" },
  ];

  searchString: string;

  selected: any = {
    startDate: moment().subtract(6, "days").set("hours", 0).set("minutes", 0),
    endDate: moment().set("hours", 23).set("minutes", 59),
  };
  selectedShow: any = {
    startDate: moment().subtract(6, "days").set("hours", 0).set("minutes", 0),
    endDate: moment().set("hours", 23).set("minutes", 59),
  };

  isFuelListLoading: boolean = false;

  // dashboard new variables
  RULE_ID = {
    RulePostedSpeedingId: "SpeedViolation",
    RulePostedBreakingId: "BreakingViolation",
    RulePostedAccelerationId: "AccelerationViolation",
    RulePostedIdlingId: "IdlingViolation",
    RulePostedCorneringId: "CorneringViolation",
  };
  title: string = "Safe score";
  chartData: any = {
    date: [],
    speed: [],
    acc: [],
    braking: [],
    idiling: [],
    cornering: [],
    safe_score: [],
    tsp_speed: [],
    tsp_acc: [],
    tsp_braking: [],
    tsp_idiling: [],
    tsp_cornering: [],
    tsp_safe_score: [],
  };
  dashBoardData: any = {};
  selectedOrgID: any;
  boxVal = 1;
  leftSide = false;
  rightSide = false;
  leftCount = 0;
  leftWidth = 0;
  rightWidth = 0;
  exceptionRatio: any;
  worstDriverdetail: any;
  fuelChart: any = { licensePlate: [], mileage: [] };
  polarObject: any = {
    speed: 0,
    idling: 0,
    acceleration: 0,
    breaking: 0,
    cornering: 0,
  };
  exceptionObject = {
    speed: "Speeding",
    idling: "Idiling",
    acceleration: "Harsh Acceleration",
    cornering: "Harsh Cornering",
    breaking: "Harsh Braking",
  };
  stackBar = [
    { value: 0, class: "ridOfmax1", speed: 0, color: "" },
    { value: 0, class: "busyRoad1", speed: 0, color: "" },
    { value: 0, class: "quietRoad1", speed: 0, color: "" },
    { value: 0, class: "buildUp1", speed: 0, color: "" },
    { value: 0, class: "ridOfHighSpeed1", speed: 0, color: "" },
  ];
  colorBox: any = ["#ed502e", "#604EFF", "#F0CE00", "#4dbfff", "#2A1E91"];
  showStackBar = [];
  browsername:any;
  filterCalledDashboard = new Subject();

  constructor(
    private route: Router,
    private elementRef: ElementRef,
    public service: MainService,
    public dialog: MatDialog,
    private localService: LocalService,
    private translate: TranslateService
  ) {
    Chart.register(...registerables);
    this.browsername=this.service.detectBrowserName();
    // console.log(this.browsername);
    
  }

  fleetScore;
  idling;
  speed;
  safeAcc;
  deAcc;
  corner;
  isLoadingshimmer = false;
  customeRange = "Custom";
  setDate = "Set Date";
  cancelDate = "Cancel";
  ngOnInit(): void {
    this.filterCalledDashboard = new Subject();

    this.localService.getFilter().subscribe((val)=>{
      if(val && this.route.url == RouteConfig.dashboard.url){
        this.filterCalledDashboard.next(true)
      }
    })


    this.filterCalledDashboard.pipe(
      debounceTime(500),
    ).subscribe(
      value => {
        if(value){
          this.selectedOrgID = this.localService.getItem("selectedOrgs")
          if (this.selectedOrgID) {
            this.selectedOrgID = JSON.parse(this.selectedOrgID);
          }
          this.isTripHistoryLoading = true;
          this.resetToLastState();
          this.filterApply();
        }
      }
    )


    this.localService.getdashboardData().pipe(debounceTime(500)).subscribe((val)=>{
      if(val && Object.keys(val).length && this.route.url == RouteConfig.dashboard.url){
        this.selectedOrgID = this.localService.getItem("selectedOrgs");
        if (this.selectedOrgID) {
          this.selectedOrgID = JSON.parse(this.selectedOrgID);
        }
        if('error' in val){
          this.isTripHistoryLoading = true;
          this.rightSide = false;
          this.leftSide = true;
          this.leftWidth = 100;
          this.leftCount = 5;
          this.dashBoardData.speed_score = 0;
          this.dashBoardData.idling_score = 0;
          this.dashBoardData.acceleration_score = 0;
          this.dashBoardData.breaking_score = 0;
          this.dashBoardData.cornering_score = 0;
          this.isTripHistoryLoading = false;
          this.getChartData();
        }
        else{
          this.resetToLastState();
          this.isTripHistoryLoading = true;
          this.leftWidth = 0;
          this.rightWidth = 0;
          this.leftCount = 0;
          this.leftSide = false;
          this.rightSide = false;
          this.dashBoardData = val;

          this.calcWidth()
          this.getChartData();
        }
        }
    })

    this.localService.getLang().subscribe((val) => {
      if (this.chartData && this.chartData.date) {
        setTimeout(() => {
          this.lineChart(this.chartData.date);
          this.lineChartScore(
            this.dayNightScore.date,
            this.dayNightScore.dayScore,
            this.dayNightScore.nightScore,
            "Day Night"
          );
        }, 200);
      }
    });

    this.selectedOrgID = this.localService.getItem("selectedOrgs");
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }

    if (this.selectedOrgID) {
      this.resetToLastState();
      this.updatePageData();
    }

    // this.localService.watchOrgData().subscribe((resp) => {
    //   if (resp && this.route.url == RouteConfig.dashboard.url) {
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
    //       this.updatePageData();
    //     }
    //   }
    // });
  }
  resetToLastState() {
    let date: any = this.localService.getItem("dateRange");
    if (date) {
      date = JSON.parse(date);
      this.selected = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate),
      };
      this.selectedShow = this.selected;
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
      this.selected = {
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
  }

  filterApply() {
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
    this.selected = this.selectedShow;
    this.updatePageData();
  }

  updatePageData() {
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
    this.polardata();
    this.getRoadTypeDistribution();
    // this.getFuelListing();
    this.getDayNightScore();
    // this.getDriverList(this.RULE_ID.RulePostedSpeedingId);
    // this.getDriverList(this.RULE_ID.RulePostedIdlingId);
    // this.worstDriver();
    this.getExceptionOnRule();
    this.getVehicleAnalytics();
  }
  dayNightScore = { dayScore: [], nightScore: [], date: [] };
  getDayNightScore() {
    this.dayNightScore = { dayScore: [], nightScore: [], date: [] };
    let querryParams = this.createQuerryparams();
    this.service
      .get(`dashboard/day-night-score?${querryParams}&is_day_trip=[true,false]`)
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

  speed_distribution: any = { label: [], data: [] };
  breaking_distribution: any = { label: [], data: [] };
  acceleration_distribution: any = { label: [], data: [] };
  cornering_distribution: any = { label: [], data: [] };

  getExceptionOnRule() {
    this.speed_distribution = { label: [], data: [] };
    this.breaking_distribution = { label: [], data: [] };
    this.acceleration_distribution = { label: [], data: [] };
    this.cornering_distribution = { label: [], data: [] };
    let querryParams = this.createQuerryparams();
    this.service
      .get(`dashboard/event-type-distribution?${querryParams}`)
      .pipe()
      .subscribe(
        (res: any) => {
          if (res && res.data) {
            let response = res.data;
            response["speed_distribution"].forEach((element) => {
              if (element.contribution_value > 0) {
                this.speed_distribution.label.push(element.road_factor_name);
                this.speed_distribution.data.push(element.contribution_value);
              }
            });

            response["breaking_distribution"].forEach((element) => {
              if (element.contribution_value > 0) {
                this.breaking_distribution.label.push(element.road_factor_name);
                this.breaking_distribution.data.push(
                  element.contribution_value
                );
              }
            });

            response["cornering_distribution"].forEach((element) => {
              if (element.contribution_value > 0) {
                this.cornering_distribution.label.push(
                  element.road_factor_name
                );
                this.cornering_distribution.data.push(
                  element.contribution_value
                );
              }
            });

            response["acceleration_distribution"].forEach((element) => {
              if (element.contribution_value > 0) {
                this.acceleration_distribution.label.push(
                  element.road_factor_name
                );
                this.acceleration_distribution.data.push(
                  element.contribution_value
                );
              }
            });
          }
        },
        (err) => {
          this.speed_distribution = { label: [], data: [] };
          this.breaking_distribution = { label: [], data: [] };
          this.acceleration_distribution = { label: [], data: [] };
          this.cornering_distribution = { label: [], data: [] };
        }
      );
  }

  worstScore: any = [];
  bestScore: any = [];
  probablyCrashed: any = [];
  mostTravelled: any = [];

  getVehicleAnalytics() {
    this.worstScore = [];
    this.bestScore = [];
    this.probablyCrashed = [];
    this.mostTravelled = [];

    let querryParams = this.createQuerryparams();
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

  totalCount = 0;
  getFuelListing() {
    this.isFuelListLoading = true;
    this.fuelChart = { licensePlate: [], mileage: [] };
    let querryParams = this.createQuerryparams();
    this.service
      .get(`fuel-list?${querryParams}&listFor=ice&page=1&limit=1000`)
      .pipe()
      .subscribe(
        (response) => {
          this.isFuelListLoading = false;
          if (response.data) {
            this.totalCount = response.data.count;
            if (this.totalCount) {
              response.data.rows.sort(function (a, b) {
                if (a.consumption100km > 200) a.consumption100km = 0;
                if (b.consumption100km > 200) b.consumption100km = 0;

                return b.consumption100km - a.consumption100km;
              });

              response.data.rows.forEach((element) => {
                if (
                  element.consumption100km &&
                  element.consumption100km <= 200
                ) {
                  element.consumption100km = parseFloat(
                    element.consumption100km
                  ).toFixed(1);
                } else {
                  element.consumption100km = "NA";
                }
                this.fuelChart.licensePlate.push(element.license_plate);
                this.fuelChart.mileage.push(
                  element.consumption100km == "NA"
                    ? 0
                    : element.consumption100km
                );
              });
              // this.dataSource = response.data.rows;
            }
            // this.createFuelChart();
          } else {
            this.fuelChart = { licensePlate: [], mileage: [] };
            this.totalCount = 0;
            // this.dataSource = [];
          }
        },
        (error) => {
          this.isFuelListLoading = false;
          // this.dataSource = [];
        }
      );
  }
  myChart: any;
  createFuelChart() {
    const labels = this.fuelChart.licensePlate;
    let background = Array(this.fuelChart.licensePlate.length).fill("#4DBFFF");
    let htmlRef = this.elementRef.nativeElement
      .querySelector(`#fuelChart`)
      .getContext("2d");

    // let htmlRef= document.getElementById('')
    if (this.myChart) this.myChart.destroy();
    this.myChart = new Chart(htmlRef, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Mileage (ltr/100km)",
            data: this.fuelChart.mileage,
            borderColor: background,
            backgroundColor: background,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: "top",
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
          title: {
            display: false,
            text: "Mileage",
          },
        },
        scales: {
          x: {
            display: false,
          },
        },
      },
    });

    var dataset = this.myChart.data.datasets[0];
    for (var i = 0; i < dataset.data.length; i++) {
      if (dataset.data[i] < 35) {
        dataset.backgroundColor[i] = "green";
      } else if (dataset.data[i] < 45) {
        dataset.backgroundColor[i] = "yellow";
      } else if (dataset.data[i] < 60) {
        dataset.backgroundColor[i] = "Orange";
      } else {
        dataset.backgroundColor[i] = "red";
      }
    }
    this.myChart.update();
  }

  roadTypeLabel = [];
  roadTypeData = [];

  getRoadTypeDistribution() {
    this.roadTypeLabel = [];
    this.roadTypeData = [];
    let querryParams = this.createQuerryparams("Distribution");
    this.service
      .get(`trips/road-type-distribution?${querryParams}`)
      .pipe()
      .subscribe(
        (response) => {
            let apiData =response;
          if (apiData.data && apiData.data.length) {
            for (let i = 0; i < apiData.data.length; i++) {
              if(apiData.data[i].road_factor_name.split(' ').length -1 > 1){
                // console.log((apiData.data[i].road_factor_name.split(' ')).join(''));
                 let k= apiData.data[i].road_factor_name.split(' ');
                 apiData.data[i].road_factor_name=k[0]+k[1]+k[2]+' kmph';
              }
              if (this.stackBar[i]) {
                this.stackBar[i].value =
                  apiData.data[i].contribution_value.toFixed(1);
                this.stackBar[i].speed = apiData.data[i].road_factor_name;
                this.stackBar[i].color = this.colorBox[i];
              }
            }
            this.stackBar.forEach((x) => {
              if (x.value > 0) {
                this.roadTypeLabel.push(x.speed);
                this.roadTypeData.push(x.value);
              }
            });
          } else {
            this.noRoadTypeData = true;
          }
        },
        (error) => {
          this.roadTypeLabel = [];
          this.roadTypeData = [];
          this.noRoadTypeData = true;
        }
      );
  }

  createQuerryparams(type?) {
    let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
    querryParams =
      querryParams +
      `&from_date=${moment(this.selected.startDate).format("YYYY-MM-DD")}`;
    querryParams =
      querryParams +
      `&to_date=${moment(this.selected.endDate).format("YYYY-MM-DD")}`;
    let val = this.service.checkCustomDate(
      moment(this.selected.startDate).format("YYYY-MM-DD"),
      moment(this.selected.endDate).format("YYYY-MM-DD")
    );

    if (type) {
      querryParams = querryParams + `&custom_filter=true&filter_value=''`;
    } else {
      if (val == undefined) {
        querryParams = querryParams + `&custom_filter=true&filter_value=''`;
      } else {
        querryParams =
          querryParams + `&custom_filter=false&filter_value=${val}`;
      }
    }
    return querryParams;
  }

  attentionValue: number = 5;
  calcWidth() {
    if (this.dashBoardData.speed_score < this.attentionValue) {
      this.leftCount += 1;
      this.leftWidth += 20;
    } else {
      this.rightWidth += 20;
    }
    if (this.dashBoardData.idling_score < this.attentionValue) {
      this.leftCount += 1;
      this.leftWidth += 20;
    } else {
      this.rightWidth += 20;
    }
    if (this.dashBoardData.acceleration_score < this.attentionValue) {
      this.leftCount += 1;
      this.leftWidth += 20;
    } else {
      this.rightWidth += 20;
    }
    if (this.dashBoardData.breaking_score < this.attentionValue) {
      this.leftCount += 1;
      this.leftWidth += 20;
    } else {
      this.rightWidth += 20;
    }
    if (this.dashBoardData.cornering_score < this.attentionValue) {
      this.leftCount += 1;
      this.leftWidth += 20;
    } else {
      this.rightWidth += 20;
    }
    if (this.leftCount != 0 && this.leftCount != 5) {
      this.rightSide = true;
      this.leftSide = true;
    }
    if (this.leftCount == 5) {
      this.rightSide = false;
      this.leftSide = true;
    }
    if (this.leftCount == 0) {
      this.rightSide = true;
      this.leftSide = false;
    }
    this.isTripHistoryLoading = false;
  }
  toggleChange(value) {
    this.tableView = value;
  }

  // routeToDriver() {
  //   let id = "";
  //   if (this.title == "Speed score") {
  //     id = this.RULE_ID.RulePostedSpeedingId;
  //   } else if (this.title == "Idiling score") {
  //     id = this.RULE_ID.RulePostedIdlingId;
  //   } else if (this.title == "Braking score") {
  //     id = this.RULE_ID.RulePostedBreakingId;
  //   } else if (this.title == "Cornering score") {
  //     id = this.RULE_ID.RulePostedCorneringId;
  //   } else if (this.title == "Acceleration score") {
  //     id = this.RULE_ID.RulePostedAccelerationId;
  //   } else {
  //     id = this.RULE_ID.RulePostedSpeedingId;
  //   }
  //   this.route.navigate([RouteConfig.driver.url], {
  //     queryParams: { rule: id },
  //   });
  // }
  //linechart for speeding

  linemyChart: any;
  lineChart(label) {
    if (this.linemyChart) {
      this.linemyChart.destroy();
    }
    var labels = label;

    this.translate.get("fleetscore").subscribe((text: string) => {
      this.fleetScore = text;
    });
    this.translate.get("speeding").subscribe((text: string) => {
      this.speed = text;
    });
    this.translate.get("idiling").subscribe((text: string) => {
      this.idling = text;
    });
    this.translate.get("hardAcceleration").subscribe((text: string) => {
      this.safeAcc = text;
    });
    this.translate.get("hardBraking").subscribe((text: string) => {
      this.deAcc = text;
    });
    this.translate.get("harshCorner").subscribe((text: string) => {
      this.corner = text;
    });
    let htmlRef = this.elementRef.nativeElement.querySelector(`#lineChart`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#lineChart`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
    gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
    const dataSet: any = [
      {
        data: this.chartData.safe_score,
        borderColor: "#371987",
        pointBackgroundColor: "#FA1464",
        borderWidth: 2.66,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: this.fleetScore,
        borderDash: [10, 5],
      },
      {
        data: this.chartData.speed,
        borderColor: "#FF9950",
        pointBackgroundColor: "#FA1464",
        borderWidth: 2.66,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: this.speed,
      },
      {
        data: this.chartData.idiling,
        borderColor: "#00CBA0",
        pointBackgroundColor: "#FA1464",
        borderWidth: 2.66,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: this.idling,
      },
      {
        data: this.chartData.acc,
        borderColor: "#4DBFFF",
        pointBackgroundColor: "#FA1464",
        borderWidth: 2.66,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: this.safeAcc,
      },
      {
        data: this.chartData.braking,
        borderColor: "#c5cdd4", //FF7070
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: this.deAcc,
      },
      {
        data: this.chartData.cornering,
        borderColor: "#FFEA6C",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: this.corner,
      },
    ];

    let data = [];
    if (this.safeScoreCheckbox) {
      data.push(dataSet[0]);
    }
    if (this.speedingCheckbox) {
      data.push(dataSet[1]);
    }
    if (this.idilingCheckbox) {
      data.push(dataSet[2]);
    }
    if (this.accCheckbox) {
      data.push(dataSet[3]);
    }
    if (this.brakingCheckbox) {
      data.push(dataSet[4]);
    }
    if (this.corneringCheckbox) {
      data.push(dataSet[5]);
    }

    this.linemyChart = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: data,
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

  // line chart for day vs night
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
        borderColor: "#001e50",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: nightDrive,
      },
      {
        data: point,
        borderColor: "#939EAA", // 45CBFC
        pointBackgroundColor: "#FA1464",
        borderWidth: 3,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: dayDrive,
      },
    ];
    if (!this.safeScoreCheckboxsecond) {
      dataSet.splice(1, 1);
    }
    if (!this.otherCheckboxsecond) {
      dataSet.splice(0, 1);
    }

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

  //polar graph
  // polarmyChart: any;
  // polarGraph(dataPoints, label) {
  //   if (this.polarmyChart) {
  //     this.polarmyChart.destroy();
  //   }
  //   const data = {
  //     labels: label,
  //     datasets: [
  //       {
  //         label: "My First Dataset",
  //         data: dataPoints,
  //         borderColor: [
  //           "	rgb(0, 203, 160)",
  //           "rgb(255, 234, 108)",
  //           "rgb(250, 20, 100)",
  //           "	rgb(255, 153, 80)",
  //           "	rgb(255, 112, 112)",
  //           "rgb(255, 205, 86)",
  //         ],
  //         backgroundColor: "white",
  //         hoverOffset: 30,
  //         // Option:{
  //         //   responsive:false,
  //         //   layout:{
  //         //     padding:{
  //         //       left:100,
  //         //     }
  //         //   }
  //         // }
  //       },
  //     ],
  //   };

  //   let htmlRef = this.elementRef.nativeElement.querySelector(`#ploarChart`);
  //   this.polarmyChart = new Chart(htmlRef, {
  //     type: "doughnut",
  //     data: data,
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       layout: {
  //         padding: {
  //           bottom: 15,
  //           top: 15,
  //         },
  //       },
  //       plugins: {
  //         legend: {
  //           display: true,
  //           position: "top",
  //           title: {
  //             padding: 20,
  //           },
  //           // labels: {
  //           //     fontColor: '#333',
  //           // }
  //         },
  //         datalabels: {
  //           color: "#474F5A",
  //           labels: {
  //             title: {
  //               font: {
  //                 weight: "bold",
  //               },
  //             },
  //           },
  //         },
  //         tooltip: {
  //           enabled: true,
  //           backgroundColor: "#ffffff",
  //           callbacks: {
  //             labelTextColor: (context) => {
  //               return "#1B194B";
  //             },
  //           },
  //         },
  //       },
  //     },
  //     plugins: [ChartDataLabels],
  //   });
  // }

  //line graph
  barChartmyChart: any;
  barChart() {
    // console.log(this.chartData);

    const dataSum: any = {
      speed: 0,
      acc: 0,
      braking: 0,
      idiling: 0,
      cornering: 0,
      safe_score: 0,
      tsp_speed: 0,
      tsp_acc: 0,
      tsp_braking: 0,
      tsp_idiling: 0,
      tsp_cornering: 0,
      tsp_safe_score: 0,
    };
    this.chartData.date.forEach((element, index) => {
      dataSum.speed = dataSum.speed + Number(this.chartData.speed[index]);
      dataSum.acc = dataSum.acc + Number(this.chartData.acc[index]);
      dataSum.braking = dataSum.braking + Number(this.chartData.braking[index]);
      dataSum.idiling = dataSum.idiling + Number(this.chartData.idiling[index]);
      dataSum.cornering =
        dataSum.cornering + Number(this.chartData.cornering[index]);
      dataSum.safe_score =
        dataSum.safe_score + Number(this.chartData.safe_score[index]);

      dataSum.tsp_speed =
        dataSum.tsp_speed + Number(this.chartData.tsp_speed[index]);
      dataSum.tsp_acc = dataSum.tsp_acc + Number(this.chartData.tsp_acc[index]);
      dataSum.tsp_braking =
        dataSum.tsp_braking + Number(this.chartData.tsp_braking[index]);
      dataSum.tsp_idiling =
        dataSum.tsp_idiling + Number(this.chartData.tsp_idiling[index]);
      dataSum.tsp_cornering =
        dataSum.tsp_cornering + Number(this.chartData.tsp_cornering[index]);
      dataSum.tsp_safe_score =
        dataSum.tsp_safe_score + Number(this.chartData.tsp_safe_score[index]);
    });
    dataSum.speed = this.formatToFixed(
      dataSum.speed / this.chartData.date.length,
      1
    );
    dataSum.acc = this.formatToFixed(
      dataSum.acc / this.chartData.date.length,
      1
    );
    dataSum.braking = this.formatToFixed(
      dataSum.braking / this.chartData.date.length,
      1
    );
    dataSum.idiling = this.formatToFixed(
      dataSum.idiling / this.chartData.date.length,
      1
    );
    dataSum.cornering = this.formatToFixed(
      dataSum.cornering / this.chartData.date.length,
      1
    );
    dataSum.safe_score = this.formatToFixed(
      dataSum.safe_score / this.chartData.date.length,
      1
    );

    dataSum.tsp_speed = this.formatToFixed(
      dataSum.tsp_speed / this.chartData.date.length,
      1
    );
    dataSum.tsp_acc = this.formatToFixed(
      dataSum.tsp_acc / this.chartData.date.length,
      1
    );
    dataSum.tsp_braking = this.formatToFixed(
      dataSum.tsp_braking / this.chartData.date.length,
      1
    );
    dataSum.tsp_idiling = this.formatToFixed(
      dataSum.tsp_idiling / this.chartData.date.length,
      1
    );
    dataSum.tsp_cornering = this.formatToFixed(
      dataSum.tsp_cornering / this.chartData.date.length,
      1
    );
    dataSum.tsp_safe_score = this.formatToFixed(
      dataSum.tsp_safe_score / this.chartData.date.length,
      1
    );
    // console.log(dataSum);

    if (this.barChartmyChart) {
      this.barChartmyChart.destroy();
    }
    var labels = [
      "Safe score",
      "Speeding",
      "Idiling",
      "Acceleration",
      "Braking",
      "Cornering",
    ];
    // for (let i = 0; i < 6; ++i) {
    //   labels.push(i.toString());
    // }
    const datapoints = [
      dataSum.safe_score,
      dataSum.speed,
      dataSum.idiling,
      dataSum.acc,
      dataSum.braking,
      dataSum.cornering,
    ];
    const datapoints1 = [
      dataSum.tsp_safe_score,
      dataSum.tsp_speed,
      dataSum.tsp_idiling,
      dataSum.tsp_acc,
      dataSum.tsp_braking,
      dataSum.tsp_cornering,
    ];

    let htmlRef = this.elementRef.nativeElement.querySelector(`#barChart`);
    // const gradient = this.elementRef.nativeElement.querySelector(`#barChart`).getContext('2d').createLinearGradient(0, 0, 0, 600);
    // gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    // gradient.addColorStop(0, 'rgba(0, 203, 160, 0.1)');
    this.barChartmyChart = new Chart(htmlRef, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Your score",
            data: datapoints,
            borderColor: "#0064FF",
            // fill: false,
            // cubicInterpolationMode: 'monotone',
            // tension: 0.4,
            // pointBackgroundColor: "#FA1464",
            backgroundColor: "#0064FF",
          },
          {
            label: "Fleets score",
            data: datapoints1,
            borderColor: "#0064FF",
            // fill: false,
            // cubicInterpolationMode: 'monotone',
            // tension: 0.4,
            // pointBackgroundColor: "#FA1464",
            backgroundColor: "#4DBFFF",
          },

          // backgroundColor: [
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(255, 159, 64, 0.2)',
          //   'rgba(255, 205, 86, 0.2)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          //   'rgba(201, 203, 207, 0.2)'
          // ],
        ],
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
            position: "bottom",
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#ffffff",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            titleColor: "#1B194B",
            callbacks: {
              labelTextColor: (context) => {
                return "#1B194B";
              },
            },
          },
          // title: {
          //   display: true,
          // },
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
            suggestedMin: 0,
            suggestedMax: 10,
          },
        },
      },
    });
  }

  //speedingChart
  changeBoxValue(num) {
    this.boxVal = num;
    // if (num == 1) {
    //   this.title = "Speed score";
    //   this.lineChart(this.chartData.date, this.chartData.speed, this.title);
    //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedSpeedingId)
    //   // this.worstDriver(this.RULE_ID.RulePostedSpeedingId)
    // } else if (num == 2) {
    //   this.title = "Acceleration score";
    //   this.lineChart(this.chartData.date, this.chartData.acc, this.title);
    //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedAccelerationId)
    //   // this.worstDriver(this.RULE_ID.RulePostedAccelerationId)
    // } else if (num == 3) {
    //   this.title = "Braking score";
    //   this.lineChart(this.chartData.date, this.chartData.braking, this.title);
    //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedBreakingId)
    //   // this.worstDriver(this.RULE_ID.RulePostedBreakingId)
    // } else if (num == 4) {
    //   this.title = "Cornering score";
    //   this.lineChart(this.chartData.date, this.chartData.cornering, this.title);
    //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedCorneringId)
    //   // this.worstDriver(this.RULE_ID.RulePostedCorneringId)
    // } else if (num == 6) {
    //   this.title = "Safe Score";
    //   this.lineChart(
    //     this.chartData.date,
    //     this.chartData.safe_score,
    //     this.title
    //   );
    // } else {
    //   this.title = "Idiling score";
    //   this.lineChart(this.chartData.date, this.chartData.idiling, this.title);
    //   // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedIdlingId)
    //   // this.worstDriver(this.RULE_ID.RulePostedIdlingId);
    // }
  }
  changecheckboxValue(num) {
    switch (num) {
      case 1:
        this.safeScoreCheckbox = !this.safeScoreCheckbox;
        break;
      case 2:
        this.speedingCheckbox = !this.speedingCheckbox;
        break;
      case 3:
        this.idilingCheckbox = !this.idilingCheckbox;
        break;
      case 4:
        this.accCheckbox = !this.accCheckbox;
        break;
      case 5:
        this.brakingCheckbox = !this.brakingCheckbox;
        break;
      case 6:
        this.corneringCheckbox = !this.corneringCheckbox;
        break;
    }
    this.lineChart(this.chartData.date);
    // // console.log(this.title);

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
  changecheckboxValuesecond(num) {
    // if (num == 1) {
    //   this.safeScoreCheckboxsecond = !this.safeScoreCheckboxsecond;
    // } else {
    //   this.otherCheckboxsecond = !this.otherCheckboxsecond;
    // }
    // // console.log(this.title);
    // this.lineChartScore(this.dayNightScore.date,this.dayNightScore.dayScore,this.dayNightScore.nightScore,'Day Night')
    // if (this.title == 'Speed score') {
    //   this.lineChart(this.chartData.date, this.chartData.speed, this.title)
    // }
    // else if (this.title == 'Acceleration score') {
    //   this.lineChart(this.chartData.date, this.chartData.acc, this.title)
    // }
    // else if (this.title == 'Braking score') {
    //   this.lineChart(this.chartData.date, this.chartData.braking, this.title)
    // }
    // else if (this.title == 'Cornering score') {
    //   this.lineChart(this.chartData.date, this.chartData.cornering, this.title)
    // }
    // else {
    //   this.lineChart(this.chartData.date, this.chartData.idiling, this.title)
    // }
  }
  getChartData() {
    let querryParams = this.createQuerryparams();
    this.chartData = {
      date: [],
      speed: [],
      acc: [],
      braking: [],
      idiling: [],
      cornering: [],
      safe_score: [],
      tsp_speed: [],
      tsp_acc: [],
      tsp_braking: [],
      tsp_idiling: [],
      tsp_cornering: [],
      tsp_safe_score: [],
    };
    this.service
      .get(`driving-analytics-graph?${querryParams}&score_type=safe_score`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.length) {
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
                    this.chartData.date.push(
                      moment(lastDate).add(j, "days").format("DD/MM")
                    );
                    this.chartData.speed.push(0);
                    this.chartData.acc.push(0);
                    this.chartData.braking.push(0);
                    this.chartData.idiling.push(0);
                    this.chartData.cornering.push(0);
                    this.chartData.safe_score.push(0);
                    this.chartData.tsp_speed.push(0);
                    this.chartData.tsp_acc.push(0);
                    this.chartData.tsp_braking.push(0);
                    this.chartData.tsp_idiling.push(0);
                    this.chartData.tsp_cornering.push(0);
                    this.chartData.tsp_safe_score.push(0);
                    j = j + 1;
                  }
                  this.pushChartData(response.data[i]);
                  lastDate = moment.utc(response.data[i].date);
                }
              }
            }
          }
          // console.log(this.chartData);
          this.miniChart(
            "speedingChart",
            this.dashBoardData.speed_score >= this.attentionValue
              ? "#00CBA0"
              : "#FF7070",
            this.chartData.date,
            this.chartData.speed
          );
          this.miniChart(
            "idilingChart",
            this.dashBoardData.idling_score >= this.attentionValue
              ? "#00CBA0"
              : "#FF7070",
            this.chartData.date,
            this.chartData.idiling
          );
          this.miniChart(
            "accelerationChart",
            this.dashBoardData.acceleration_score >= this.attentionValue
              ? "#00CBA0"
              : "#FF7070",
            this.chartData.date,
            this.chartData.acc
          );
          this.miniChart(
            "brakingChart",
            this.dashBoardData.breaking_score >= this.attentionValue
              ? "#00CBA0"
              : "#FF7070",
            this.chartData.date,
            this.chartData.braking
          );
          this.miniChart(
            "corneringChart",
            this.dashBoardData.cornering_score >= this.attentionValue
              ? "#00CBA0"
              : "#FF7070",
            this.chartData.date,
            this.chartData.cornering
          );
          this.boxVal = 1;
          this.title = "Speed score";
          // console.log(this.chartData);

          // this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedSpeedingId)
          this.lineChart(this.chartData.date);
          // this.barChart();
        },
        (error) => {}
      );
  }

  naValue = ["1001.0", 1001, "1001.0"];

  pushChartData(element) {
    this.chartData.date.push(moment.utc(element.date).format("DD/MM"));

    if (!this.naValue.includes(element.speed_score)) {
      this.chartData.speed.push(this.formatToFixed(element.speed_score, 1));
    } else {
      this.chartData.speed.push(null);
    }

    if (!this.naValue.includes(element.acceleration_score)) {
      this.chartData.acc.push(
        this.formatToFixed(element.acceleration_score, 1)
      );
    } else {
      this.chartData.acc.push(null);
    }

    if (!this.naValue.includes(element.breaking_score)) {
      this.chartData.braking.push(
        this.formatToFixed(element.breaking_score, 1)
      );
    } else {
      this.chartData.braking.push(null);
    }

    if (!this.naValue.includes(element.idling_score)) {
      this.chartData.idiling.push(this.formatToFixed(element.idling_score, 1));
    } else {
      this.chartData.idiling.push(null);
    }

    if (!this.naValue.includes(element.cornering_score)) {
      this.chartData.cornering.push(
        this.formatToFixed(element.cornering_score, 1)
      );
    } else {
      this.chartData.cornering.push(null);
    }

    if (!this.naValue.includes(element.safe_score)) {
      this.chartData.safe_score.push(this.formatToFixed(element.safe_score, 1));
    } else {
      this.chartData.safe_score.push(null);
    }

    if (!this.naValue.includes(element.tsp_speed_score)) {
      this.chartData.tsp_speed.push(
        this.formatToFixed(element.tsp_speed_score, 1)
      );
    } else {
      this.chartData.tsp_speed.push(null);
    }

    if (!this.naValue.includes(element.tsp_acceleration_score)) {
      this.chartData.tsp_acc.push(
        this.formatToFixed(element.tsp_acceleration_score, 1)
      );
    } else {
      this.chartData.tsp_acc.push(null);
    }

    if (!this.naValue.includes(element.tsp_breaking_score)) {
      this.chartData.tsp_braking.push(
        this.formatToFixed(element.tsp_breaking_score, 1)
      );
    } else {
      this.chartData.tsp_braking.push(null);
    }

    if (!this.naValue.includes(element.tsp_idling_score)) {
      this.chartData.tsp_idiling.push(
        this.formatToFixed(element.tsp_idling_score, 1)
      );
    } else {
      this.chartData.tsp_idiling.push(null);
    }

    if (!this.naValue.includes(element.tsp_cornering_score)) {
      this.chartData.tsp_cornering.push(
        this.formatToFixed(element.tsp_cornering_score, 1)
      );
    } else {
      this.chartData.tsp_cornering.push(null);
    }

    if (!this.naValue.includes(element.tsp_safe_score)) {
      this.chartData.tsp_safe_score.push(
        this.formatToFixed(element.tsp_safe_score, 1)
      );
    } else {
      this.chartData.tsp_safe_score.push(null);
    }
  }

  formatToFixed(val, precision) {
    if (val == null) {
      return null;
    }
    if (typeof val == "string") {
      val = parseFloat(val);
    }
    if (val) {
      return val.toFixed(precision);
    }
    return 0;
  }
  openChartPopup() {
    let chart: any = {
      speed: this.chartData.safe_score,
    };
    chart.chartdate = this.chartData.date;
    chart.name = this.title;
    chart.safeScore = true;
    chart.chartData = this.chartData;

    const dialogRef = this.dialog.open(DialogContentdashboardDialog, {
      disableClose: true,
      panelClass: "custom-dialog-container",
      height: "auto",
      width: "80%",
      data: chart,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  openChartPopupSecondChart() {
    let chart: any = {
      speed: this.dayNightScore.dayScore,
    };
    chart.chartdate = this.dayNightScore.date;
    chart.name = "Day vs Night Driving Score";
    chart.safeScore = false;
    chart.chartdata = this.dayNightScore.nightScore;
    const dialogRef = this.dialog.open(DialogContentdashboardDialog, {
      disableClose: true,
      panelClass: "custom-dialog-container",
      height: "auto",
      width: "80%",
      data: chart,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  exceptionData: any = [];
  exceptionLabel: any = [];
  totalException: number = 0;
  polardata() {
    this.exceptionData = [];
    this.exceptionLabel = [];
    let querryParams = this.createQuerryparams();
    this.service
      .get(`dashboard/exception-ratio?${querryParams}`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data) {
            this.exceptionRatio = response.data;
            let total = this.exceptionRatio.reduce(
              (previousValue, currentValue) =>
                previousValue + Number(currentValue.score_type_count),
              0
            );
            this.totalException = total;
            for (let i = 0; i < this.exceptionRatio.length; i++) {
              this.polarObject[this.exceptionRatio[i].score_type] = (
                (this.exceptionRatio[i].score_type_count / total) *
                100
              ).toFixed(1);
            }

            for (let keys in this.polarObject) {
              if (this.polarObject[keys] && this.polarObject[keys] !== "0.0") {
                this.exceptionData.push(this.polarObject[keys]);
                this.exceptionLabel.push(this.exceptionObject[keys]);
              }
            }
          }
          // this.polarGraph(data, label);
        },
        (error) => {
          this.exceptionData = [];
          this.exceptionLabel = [];
          this.totalException = 0;
        }
      );
  }
  miniChartObj: any = {};
  miniChart(id?, color?, label?, dataPoint?) {
    var labels = label;
    var datapoints = dataPoint;
    let ids = "#" + id;
    let htmlRef = this.elementRef.nativeElement.querySelector(ids);
    var gradient = htmlRef.getContext("2d").createLinearGradient(0, 0, 0, 600);

    if (color == "#00CBA0") {
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(0, "rgba(0, 203, 160, 0.1)");
    } else {
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.9)");
      gradient.addColorStop(0, "rgba(255, 112, 112, 0.25)");
    }
    if (this.miniChartObj[id]) this.miniChartObj[id].destroy();
    this.miniChartObj[id] = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            data: datapoints,
            borderColor: color,
            fill: true,
            cubicInterpolationMode: "monotone",
            tension: 0.4,
            pointBackgroundColor: "#FA1464",
            backgroundColor: "#fff",
          },
        ],
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
            enabled: false,
            backgroundColor: "#001E50",
            titleAlign: "center",
            footerAlign: "center",
            bodyAlign: "center",
            callbacks: {
              labelTextColor: (context) => {
                return "#fff";
              },
            },
          },
          title: {
            display: true,
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: false,
            title: {
              display: true,
            },
          },
          y: {
            display: false,
            title: {
              display: true,
            },
          },
        },
      },
    });
  }

  speedingDriver: any = [];
  idlingingDriver: any = [];

  getDriverList(ruleId) {
    if (ruleId == this.RULE_ID.RulePostedSpeedingId) {
      this.speedingDriver = [];
    } else if (ruleId == this.RULE_ID.RulePostedIdlingId) {
      this.idlingingDriver = [];
    }
    let querryParams = this.createQuerryparams();
    this.service
      .get(`drivers?${querryParams}&rule_id=${ruleId}&page=1&limit=5`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data) {
            if (ruleId == this.RULE_ID.RulePostedSpeedingId) {
              this.speedingDriver = response.data.rows;
            } else if (ruleId == this.RULE_ID.RulePostedIdlingId) {
              this.idlingingDriver = response.data.rows;
            }
          } else {
          }
        },
        (error) => {
          if (ruleId == this.RULE_ID.RulePostedSpeedingId) {
            this.speedingDriver = [];
          } else if (ruleId == this.RULE_ID.RulePostedIdlingId) {
            this.idlingingDriver = [];
          }
        }
      );
  }

  worstDriver() {
    this.worstDriverdetail = [];
    let querryParams = this.createQuerryparams();
    this.service
      .get(`dashboard/worst-driver?${querryParams}`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data) {
            this.worstDriverdetail = response.data;
          }
        },
        (error) => {
          this.worstDriverdetail = [];
        }
      );
  }
}

@Component({
  selector: "dialog-content-dashboard-dialog",
  templateUrl: "./chart-dashboard.html",
  styleUrls: ["./dashboard-home-v2.component.scss"],
})
export class DialogContentdashboardDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogContentdashboardDialog>,
    private elementRef: ElementRef,
    private translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    Chart.register(...registerables);
    Chart.register(zoomPlugin);
    setTimeout(() => {
      // console.log(data);
      let labelfirst;
      let labelsecond;
      if (data.safeScore) {
        this.lineChartAll(data.chartdate, data.chartData);
      } else {
        (labelfirst = "Day Score"), (labelsecond = "Night Score");
        this.lineChart(
          data.chartdate,
          data.chartdata,
          data.speed,
          data.name,
          labelfirst,
          labelsecond
        );
      }
    }, 200);
  }

  linemyChart: any;

  lineChartAll(label, chartData) {
    if (this.linemyChart) {
      this.linemyChart.destroy();
    }
    var labels = label;

    let htmlRef = this.elementRef.nativeElement.querySelector(`#lineChart`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#lineChart`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
    gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
    let fleetScore;
    this.translate.get("fleetscore").subscribe((text: string) => {
      fleetScore = text;
    });
    let speed;
    this.translate.get("speeding").subscribe((text: string) => {
      speed = text;
    });
    let idling;
    this.translate.get("idiling").subscribe((text: string) => {
      idling = text;
    });
    let safeAcc;
    this.translate.get("hardAcceleration").subscribe((text: string) => {
      safeAcc = text;
    });
    let deAcc;
    this.translate.get("hardBraking").subscribe((text: string) => {
      deAcc = text;
    });
    let corner;
    this.translate.get("harshCorner").subscribe((text: string) => {
      corner = text;
    });

    const dataSet: any = [
      {
        data: chartData.safe_score,
        borderColor: "#371987",
        pointBackgroundColor: "#FA1464",
        borderWidth: 2.66,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: fleetScore,
        borderDash: [10, 5],
      },
      {
        data: chartData.speed,
        borderColor: "#FF9950",
        pointBackgroundColor: "#FA1464",
        borderWidth: 2.66,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: speed,
      },
      {
        data: chartData.idiling,
        borderColor: "#00CBA0",
        pointBackgroundColor: "#FA1464",
        borderWidth: 2.66,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: idling,
      },
      {
        data: chartData.acc,
        borderColor: "#4DBFFF",
        pointBackgroundColor: "#FA1464",
        borderWidth: 2.66,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: safeAcc,
      },
      {
        data: chartData.braking,
        borderColor: "#C5CDD4",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: gradient,
        label: deAcc,
      },
      {
        data: chartData.cornering,
        borderColor: "#C5CDD4",
        pointBackgroundColor: "#FA1464",
        borderWidth: 3.84,
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        backgroundColor: "#000000",
        label: corner,
      },
    ];
    this.linemyChart = new Chart(htmlRef, {
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
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,

            max: AppConfig.gaugeMax,
            ticks: {
              precision: 0,
            },
          },
        },
      },
    });
  }

  lineChart(label, point, safe, name, labelfirst, labelsecond) {
    if (this.linemyChart) {
      this.linemyChart.destroy();
    }
    var labels = label;

    const datapoints = point;

    let htmlRef = this.elementRef.nativeElement.querySelector(`#lineChart`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#lineChart`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(255, 112, 112, 0.05)");
    gradient.addColorStop(1, "rgba(255, 112, 112, 0.11)");
    let dayDrive;
    this.translate.get("daydriving").subscribe((text: string) => {
      dayDrive = text;
    });
    let nightDrive;
    this.translate.get("nightdriving").subscribe((text: string) => {
      nightDrive = text;
    });
    this.linemyChart = new Chart(htmlRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            data: safe,
            borderColor: "#939EAA",
            pointBackgroundColor: "#FA1464",
            borderWidth: 3,
            fill: false,
            cubicInterpolationMode: "monotone",
            tension: 0.4,
            backgroundColor: "#001E50",
            label: dayDrive,
          },
          {
            data: datapoints,
            borderColor: "#001E50",
            pointBackgroundColor: "#FA1464",
            borderWidth: 3,
            fill: false,
            cubicInterpolationMode: "monotone",
            tension: 0.4,
            backgroundColor: "#939EAA",
            label: nightDrive,
          },
        ],
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
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,

            max: AppConfig.gaugeMax,
            ticks: {
              precision: 0,
            },
          },
        },
      },
    });
  }

  resetZoom() {
    this.linemyChart.resetZoom();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
