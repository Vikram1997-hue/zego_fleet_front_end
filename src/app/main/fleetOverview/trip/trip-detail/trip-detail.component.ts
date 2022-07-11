import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AppConfig } from 'src/app/config/app-config';
import { TranslateService } from '@ngx-translate/core';
import ChartDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: "app-trip-detail",
  templateUrl: "./trip-detail.component.html",
  styleUrls: ["./trip-detail.component.scss"],
})
export class TripDetailComponent implements OnInit {
  @ViewChild("firstAccordion") firstAccordion: MatAccordion;

  tableView: string = "table";

  tripId: string;
  tripDetail: any = [];
  singleAlertId: string;
  // GUAGE CHART VARIABLES

  hideToggle = false;
  gaugeType = "semi";
  thresholdConfig = AppConfig.gaugeThreshold;
  //Ng Accordian
  hideToggle1 = false;
  displayMode: string = "default";
  multi = true;
  disabled = false;
  mapAlerts: any = [];

  // stacked bar variable

  colorBox: any = ["#ed502e", "#604EFF", "#FFEA6C", "#4dbfff", "#2A1E91"];

  stackBar = [
    { value: 0, class: "ridOfmax1", speed: 0, color: "" },
    { value: 0, class: "busyRoad1", speed: 0, color: "" },
    { value: 0, class: "quietRoad1", speed: 0, color: "" },
    { value: 0, class: "buildUp1", speed: 0, color: "" },
    { value: 0, class: "ridOfHighSpeed1", speed: 0, color: "" },
  ];

  gaugeMin = AppConfig.gaugeMin;
  gaugeMax = AppConfig.gaugeMax;

  showStackBar: any = [];
  noRoadTypeData: boolean = false;
  selectedOrgID: any;
  idling: any;
  acceleration: any;
  braking: any;
  cornering: any;
  speed: any;
  speedProfile: any = { speed: [], limit: [], time: [] };
  accProfile: any = { acc: [], deacc: [], time: [] };
  alerts: any = {};

  exceptionTypeObj = {
    speed: "Speeding",
    breaking: "Braking",
    acceleration: "Acceleration",
    cornering: "Cornering",
    idling: "Idiling",
  };
  exceptionArray: any = {};
  exceptionCount: number = 0;
  exceptionKeys: any = [];
  exceptionShowOnMap: boolean = true;

  constructor(
    public service: MainService,
    private localService: LocalService,
    private activeRoute: ActivatedRoute,
    private elementRef: ElementRef,
    public dialog: MatDialog,
    private translate: TranslateService,
  ) {
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.localService.getLang().subscribe((val) => {
      if (this.accProfile && this.accProfile.time) {
        setTimeout(() => {
          this.createAccProfileChart();
        }, 200)
      }
      if (this.speedProfile && this.speedProfile.time) {
        setTimeout(() => {
          this.createSpeedProfileChart();
        }, 200)
      }
      if (this.roadTypeData) {
        this.newbarChart(this.roadTypeData, this.roadTypeLabel)
      }
    })
    this.tripId = this.activeRoute.snapshot.queryParams.tripId;
    this.selectedOrgID = this.localService.getItem("selectedOrgs");
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }
    this.getAllAlerts();
    this.getTripDetails();
    this.getRoadTypeDistribution();
    this.getTripException();
    // this.getDayNightScore();
  }

  ngAfterContentInit() { }
  dayNightScore = { dayScore: [], nightScore: [], date: [] };
  getDayNightScore() {
    this.dayNightScore = { dayScore: [], nightScore: [], date: [] };
    const date = [
      "01/03",
      "02/03",
      "03/03",
      "04/03",
      "05/03",
      "06/03",
      "07/03",
      "08/03",
      "09/03",
      "10/03",
      "11/03",
      "12/03",
      "13/03",
      "14/03",
      "15/03",
      "16/03",
      "17/03",
      "18/03",
      "19/03",
      "20/03",
      "21/03",
      "22/03",
      "23/03",
      "24/03",
      "25/03",
      "26/03",
      "27/03",
      "28/03",
      "29/03",
      "30/03",
      "31/03"
    ];
    const dayScore = [
      "6.7",
      "6.0",
      "6.9",
      "6.5",
      "4.5",
      "4.5",
      "3.8",
      "5.0",
      "4.9",
      "5.7",
      "4.4",
      "4.9",
      "5.3",
      "5.6",
      "5.5",
      "4.9",
      "3.8",
      "6.0",
      "4.6",
      "6.8",
      "5.0",
      "4.0",
      "5.5",
      "4.3",
      "5.4",
      "4.2",
      "5.4",
      "5.3",
      "5.5",
      "4.3",
      "5.6"
    ];
    const nightScore = [
      "5.6",
      "5.6",
      "6.5",
      "6.4",
      "2.1",
      "3.5",
      "4.7",
      "3.1",
      "4.5",
      "5.3",
      "3.3",
      "3.3",
      "2.8",
      "6.4",
      "6.1",
      "3.6",
      "6.1",
      "4.1",
      "6.2",
      "3.3",
      "6.4",
      "7.2",
      "3.4",
      "6.1",
      "7.9",
      "5.5",
      "5.0",
      "4.4"
    ]
    this.lineChartScore(
      date,
      dayScore,
      nightScore,
      "Day Night"
    );
    // let querryParams = this.createQuerryparams();
    // this.service
    //   .get(`dashboard/day-night-score?${querryParams}&is_day_trip=[true,false]`)
    //   .pipe()
    //   .subscribe(
    //     (res: any) => {
    //       res.data.forEach((element: any) => {
    //         if (element.is_day_trip) {
    //           this.dayNightScore.date.push(
    //             moment.utc(element.start_date_time).format("DD/MM")
    //           );
    //           if (!this.naValue.includes(element?.safe_score)) {
    //             this.dayNightScore.dayScore.push(element?.safe_score);
    //           } else {
    //             this.dayNightScore.dayScore.push(null);
    //           }
    //         } else {
    //           if (!this.naValue.includes(element?.safe_score)) {
    //             this.dayNightScore.nightScore.push(element?.safe_score);
    //           } else {
    //             this.dayNightScore.nightScore.push(null);
    //           }
    //         }
    //       });
    //       this.dayNightScore.date.reverse();
    //       this.dayNightScore.dayScore.reverse();
    //       this.dayNightScore.nightScore.reverse();
    //       // console.log(this.dayNightScore);
    //       this.lineChartScore(
    //         this.dayNightScore.date,
    //         this.dayNightScore.dayScore,
    //         this.dayNightScore.nightScore,
    //         "Day Night"
    //       );
    //     },
    //     (err) => { }
    //   );
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
    // if (!this.safeScoreCheckboxsecond) {
    //   dataSet.splice(1, 1);
    // }
    // if (!this.otherCheckboxsecond) {
    //   dataSet.splice(0, 1);
    // }

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

  getTripDetails() {
    this.service.get(`trips/${this.tripId}`).pipe().subscribe(response => {
      if (response && response.data) {
        this.tripDetail = response.data;
        this.getSpeedProfileData();
        this.getAccelerationProfileData();
        if (this.tripDetail) {
          this.idling = this.tripDetail.idling_score;
          this.acceleration = this.tripDetail.acceleration_score;
          this.braking = this.tripDetail.breaking_score;
          this.cornering = this.tripDetail.cornering_score;
          this.speed = this.tripDetail.speed_score;
          document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, (error) => {
      document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
    })
  }
  roadTypeLabel = []
  roadTypeData = []
  id;

  data = []
  label = []
  type;
  yLabel: string;
  text: string;

  getRoadTypeDistribution() {

    this.service
      .get(
        `trips/road-type-distribution?organisation=${JSON.stringify(
          this.selectedOrgID
        )}&trip=[${this.tripId}]&custom_filter=true&filter_value=false`
      )
      .pipe()
      .subscribe(
        (response) => {
          this.roadTypeLabel = []
          this.roadTypeData = []
          if (response.data && response.data.length) {
            for (let i = 0; i < response.data.length; i++) {
              if (this.stackBar[i]) {
                this.stackBar[i].value =
                  response.data[i].contribution_value.toFixed(1);
                this.stackBar[i].speed = response.data[i].road_factor_name;
                this.stackBar[i].color = this.colorBox[i];
              }
            }
            this.stackBar.forEach((x) => {
              if (x.value > 0) {
                this.roadTypeLabel.push((x.speed))
                this.roadTypeData.push(x.value)
              }
            });
            this.newbarChart(this.roadTypeData, this.roadTypeLabel)
          } else {
            this.noRoadTypeData = true;
          }
        },
        (error) => {
          this.roadTypeLabel = []
          this.roadTypeData = []
          this.noRoadTypeData = true;
        }
      );
  }
  barchartdata;
  newbarChart(data, label) {

    this.translate.get("ratio").subscribe((text: string) => {
      this.yLabel = text + ' %';
    });
    this.text = '';
    
    this.translate.get("kmph").subscribe((text: string) => {
      label = label.map((x) => {
        x = x.split(' ')[0] + ' ' + text
        return x;
      })
    });


    let htmlRef = this.elementRef.nativeElement.querySelector(`#roadType`);
    if (this.barchartdata) this.barchartdata.destroy();

    let _this = this;
    this.barchartdata = new Chart(htmlRef, {
      type: "bar",
      data: {
        labels: label || [
          "81 - 100+ kmph",
          "71 - 80 kmph",
          "50 - 70 kmph",
          "00 - 30 kmph",
        ],
        datasets: [
          {
            label: this.text,
            data: data || [20, 30, 25, 54, 24],
            backgroundColor: [
              "#46E18C",
              "#46E18C",
              "#46E18C",
              "#46E18C",
              "#46E18C",
            ],

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
          title: {
            display: false,
          },
          datalabels: {
            font: {
              size: 10,
              family: 'ModernEra_Bold',
            },
            anchor: 'end',
            align: 'end',
            color: '#001E50',
            formatter: function (value, context) {
              return _this.service.convertToDutch(value);
            }
          }
        },
        scales: {
          x: {
            display: true,
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              color: '#001E50',
              font: {
                size: 10,
                family: 'ModernEra_Bold',
                weight: '700'
              }
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return Math.round(Number(value));
              },
              color: '#001E50',
              font: {
                size: 10,
                family: 'ModernEra_Bold',
                weight: '700'
              }
            },
            title: {
              display: true,
              text: this.yLabel,
              color: '#667280',
              font: {
                size: 10,
                family: 'ModernEra',
                weight: '700'
              }
            },
            grid: {
              drawOnChartArea: false
            },
            max: Math.max(...data) * 1.1,
          }

        },
      },
      plugins: [ChartDataLabels],
    });
  }

  dateTimeFormat(dateTime) {
    if (dateTime) return moment(dateTime).utc().format("HH:mm D/MM/yyyy");
    else return "NA";
  }

  getSpeedProfileData() {
    // let isCustom = true;
    // if ((this.tripDetail.provider).trim() == "GEOTAB") {
    //   isCustom = false;
    // &isCustom=${isCustom}
    // }
    this.service
      .get(`trips/trip-telematic-record/${this.tripId}?type=1`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.length) {
            response.data.forEach((element) => {
              this.speedProfile["speed"].push(+element.property_value);
              this.speedProfile["limit"].push(+element.waypoint.road_speed);
              this.speedProfile["time"].push(
                moment(element.timestamp).utc().format("D/MM, HH:mm:ss")
              );
            });
          } else {
            this.speedProfile = { speed: [], limit: [], time: [] };
          }
          this.createSpeedProfileChart();
        },
        (error) => {
          this.speedProfile = { speed: [], limit: [], time: [] };
        }
      );
  }

  getAccelerationProfileData() {
    let isCustom = true;
    if ((this.tripDetail.provider).trim() == "GEOTAB") {
      isCustom = false;
    }
    this.service
      .get(`trips/trip-telematic-record/${this.tripId}?type=2&isCustom=${isCustom}`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.length) {
            response.data.forEach((element) => {
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
          } else {
            this.accProfile = { acc: [], deacc: [], time: [] };
          }
          this.createAccProfileChart();
        },
        (error) => {
          this.accProfile = { acc: [], deacc: [], time: [] };
        }
      );
  }

  speedChart;
  createSpeedProfileChart() {
    if (this.speedChart) {
      this.speedChart.destroy();
    }
    const labels = this.speedProfile['time'];
    var speed;
    var limit;

    this.translate.get("speed").subscribe((text: string) => {
      speed = text
    });
    this.translate.get("limit").subscribe((text: string) => {
      limit = text
    });
    let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    const gradient = this.elementRef.nativeElement
      .querySelector(`#myChart`)
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0, "rgba(0, 122, 255, 0.33)");
    var dataset1 = this.speedProfile["speed"];
    var dataset2 = this.speedProfile["limit"];
    const up = (ctx, value) => {
      if (dataset1[ctx.p0DataIndex] > dataset2[ctx.p0DataIndex]) {
        return "#FA1464" //4f7ee8
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
            data: this.speedProfile['speed'],
            borderColor: '#4f7ee8',
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            fill: 'start',
            backgroundColor: gradient
          },
          {
            label: limit,
            data: this.speedProfile['limit'],
            borderColor: "#fa1464", //939EAA
            stepped: true
          }
        ]
      },
      options: {
        responsive: true,
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
    if (this.accChart) {
      this.accChart.destroy();
    }
    var labels = this.accProfile['time'];
    var breakingprofile;
    var accelerationprofile;

    this.translate.get("breakingprofile").subscribe((text: string) => {
      breakingprofile = text
    });
    this.translate.get("accelerationprofile").subscribe((text: string) => {
      accelerationprofile = text
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
            borderColor: '#4f7ee8', //'#001E50',
            // stepped: true
          },
          {
            label: `${breakingprofile}`,
            data: this.accProfile['deacc'],
            borderColor: "#fa1464", //"#939EAA",
            // stepped: true,
          }
        ]
      },
      options: {
        responsive: true,
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

  getTripException() {
    this.exceptionCount = 0;
    this.exceptionArray = {};
    this.exceptionKeys = [];
    this.service
      .get(`trips/${this.tripId}/exceptions`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data) {
            for (let key in response.data) {
              if (response.data[key] && response.data[key].length > 0) {
                this.exceptionKeys.push(key);
                this.exceptionArray[key] = response.data[key];
                this.exceptionArray[key].total_time = 0;
                this.exceptionArray[key].distance = 0;
                this.exceptionCount =
                  this.exceptionCount + response.data[key].length;
                response.data[key].forEach((element) => {
                  this.exceptionArray[key].total_time =
                    this.exceptionArray[key].total_time +
                    Number(element.duration_seconds);
                  this.exceptionArray[key].distance =
                    this.exceptionArray[key].distance +
                    parseFloat(element.distance);
                });
              }
            }
          } else {
            this.exceptionArray = {};
          }
        },
        (error) => {
          this.exceptionArray = {};
        }
      );
  }

  toggleChange(value) {
    this.tableView = value;
    if (this.tableView == "map") {
      this.exceptionShowOnMap = true;
    } else {
      this.exceptionShowOnMap = false;
    }
  }

  goToLastPage() {
    window.history.back();
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

  getAllAlerts() {
    const arr = [];
    arr.push(this.tripId);
    const data = {
      tripId: arr,
    };
    this.service
      .post(`trips/alerts`, data)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data) {
            for (const k in response.data) {
              this.mapAlerts = response.data[k];
            }
          }
        },
        (error) => { }
      );
  }

  calcTime(stopTime, startTime) {
    if (startTime && stopTime) {
      let duration = moment.duration(moment(stopTime).diff(moment(startTime)));
      return moment.utc(duration.as("milliseconds")).format("HH[h] mm[m]");
    }
  }

  singleExceptionShow(obj) {
    this.exceptionShowOnMap = false;
    this.singleAlertId = obj.id;
  }
}

@Component({
  selector: "dialog-content-example-dialog",
  templateUrl: "./chart-data.html",
  styleUrls: ["./trip-detail.component.scss"],
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
      } else {
        this.createAccProfileChart(this.data.chartData);
      }
    }, 200);
  }
  myChart;
  createSpeedProfileChart(data) {
    const labels = data['time'];
    var speed;
    var limit;

    this.translate.get("speed").subscribe((text: string) => {
      speed = text
    });
    this.translate.get("limit").subscribe((text: string) => {
      limit = text
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
        borderColor: "#fa1464", //"#939EAA",
        stepped: true,
      },
      {
        label: "Speed km/h",
        data: data["speed"],
        borderColor: "#516ae8", //'#001E50',
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
            borderColor: '#516ae8', //001E50
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            fill: 'start',
            backgroundColor: gradient
          },
          {
            label: limit,
            data: data['limit'],
            borderColor: "#939EAA",
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
    this.translate.get("breakingprofile").subscribe((text: string) => {
      breakingprofile = text
    });
    this.translate.get("accelerationprofile").subscribe((text: string) => {
      accelerationprofile = text
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
        borderColor: "#fa1464", //"#939EAA", 
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
      {
        label: "Acceleration profile",
        data: data["acc"],
        borderColor: "516ae8", //"#001E50",
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
            borderColor: "#516ae8", //001E50
            // stepped: true
          },
          {
            label: breakingprofile,
            data: data['deacc'],
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
