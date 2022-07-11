import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { Chart, registerables } from 'chart.js';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  boxVal: number = 1;
  public isCollapsed = true;
  public innerWidth: any;
  dashBoardData: any = {};
  worstDriverdetail: any;
  dashBoardScore: any = {};
  exceptionRatio: any;
  chartData: any = { date: [], speed: [], acc: [], braking: [], idiling: [], cornering: [] }
  exceptionData: any = {};

  RULE_ID = {
    RulePostedSpeedingId: 'SpeedViolation',
    RulePostedBreakingId: 'BreakingViolation',
    RulePostedAccelerationId: 'AccelerationViolation',
    RulePostedIdlingId: 'IdlingViolation',
    RulePostedCorneringId: 'CorneringViolation'
}

  //table
  displayedColumns: string[] = ['item', 'cost', 'score'];

  title: string = 'Speed score';

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

  polarObject: any = { speed: 0, idling: 0, acceleration: 0, breaking: 0, cornering: 0 };

  selectedOrgID: any;

  exceptionObject = {
 'speed': 'Speeding',
 'idling': 'Idiling',
 'acceleration': 'Harsh Acceleration',
 'cornering': 'Harsh Cornering',
 'breaking': 'Harsh Braking'
  }

  tooltips = [
    { date: moment(), text: 'Today is just unselectable' },
    { date: moment().add(2, 'days'), text: 'Yeeeees!!!' }
  ];
  constructor(private elementRef: ElementRef, public service: MainService,
    private localService: LocalService, private route:Router) { Chart.register(...registerables); }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.selectedOrgID = this.localService.getItem("selectedOrgs")
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }

    if (this.selectedOrgID) {
      this.resetToLastState();
      this.updatePageData()
    }

    this.localService.watchOrgData().subscribe((resp) => {
      if (resp) {
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
          this.updatePageData();
        }

      }
    });

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


  changeState() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.resetToLastState();
    }
  }

  //polar graph
  polarChart;
  polarGraph(dataPoints,label) {
    const data = {
      labels: label,
      datasets: [{
        label: 'My First Dataset',
        data: dataPoints,
        backgroundColor: [
          '	rgb(0, 203, 160)',
          'rgb(255, 234, 108)',
          'rgb(250, 20, 100)',
          '	rgb(255, 153, 80)',
          '	rgb(255, 112, 112)',
          'rgb(255, 205, 86)',
        ],
      }]

    };

    let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    if (this.polarChart) this.polarChart.destroy();
    this.polarChart = new Chart(htmlRef, {
      type: 'pie',
      data: data,
      options: {
        
        responsive: true,
        maintainAspectRatio: false,
        
        layout: {
          padding: {
            left: 0,
          }
        },
        plugins: {
          
          legend: {
          
            display: true,
            position: 'left',
          },
          tooltip: {
            enabled: true,
            backgroundColor: "white",
            callbacks: {
              labelTextColor: (context) => {
                return 'black'
              }
            }
          },
        }
      }
    });
  }

  //line graph
  mainLineChart;
  lineChart(labels, point, title) {
    var labels = labels

    const datapoints = point;

    let htmlRef = this.elementRef.nativeElement.querySelector(`#myLineChart`);
    if (this.mainLineChart) this.mainLineChart.destroy();
    this.mainLineChart = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            data: datapoints,
            borderColor: '#4DBFFF',
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointBackgroundColor: "#FA1464",
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#001E50",
            titleAlign: 'center',
            footerAlign: 'center',
            bodyAlign: 'center',
            callbacks: {
              labelTextColor: (context) => {
                return '#fff'
              }
            }

          }
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
              precision: 0
              // stepSize: 10,
              // callback: (value, index, values) => {
              //   return (index == (values.length-1)) ?  undefined :  value
              // }
            }
          }
        }

      },
    });

  }

  miniChartObj: any = {}
  miniChart(id?, color?, label?, dataPoint?) {
    var labels = label
    var datapoints = dataPoint;
    let ids = '#' + id
    let htmlRef = this.elementRef.nativeElement.querySelector(ids);
    var gradient = htmlRef.getContext('2d').createLinearGradient(0, 0, 0, 600);

    if (color == '#00CBA0') {
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0, 'rgba(0, 203, 160, 0.1)');
    }
    else {
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0, 'rgba(255, 112, 112, 0.25)');
    }
    if (this.miniChartObj[id]) this.miniChartObj[id].destroy();
    this.miniChartObj[id] = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            data: datapoints,
            borderColor: color,
            fill: true,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointBackgroundColor: "#FA1464",
            backgroundColor: gradient
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
            backgroundColor: '#001E50',
            titleAlign: 'center',
            footerAlign: 'center',
            bodyAlign: 'center',
            callbacks: {
              labelTextColor: (context) => {
                return '#fff'
              }
            }

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
              display: true
            }
          },
          y: {
            display: false,
            title: {
              display: true,
            }
          }
        }

      },
    });
  }

  changeBoxValue(num) {
    this.boxVal = num;
    if (num == 1) {
      this.title = 'Speed score';
      this.lineChart(this.chartData.date, this.chartData.speed, this.title)
      this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedSpeedingId)
      this.worstDriver(this.RULE_ID.RulePostedSpeedingId)
    }
    else if (num == 2) {
      this.title = 'Acceleration score';
      this.lineChart(this.chartData.date, this.chartData.acc, this.title)
      this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedAccelerationId)
      this.worstDriver(this.RULE_ID.RulePostedAccelerationId)
    }
    else if (num == 3) {
      this.title = 'Braking score';
      this.lineChart(this.chartData.date, this.chartData.braking, this.title)
      this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedBreakingId)
      this.worstDriver(this.RULE_ID.RulePostedBreakingId)
    }
    else if (num == 4) {
      this.title = 'Cornering score';
      this.lineChart(this.chartData.date, this.chartData.cornering, this.title)
      this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedCorneringId)
      this.worstDriver(this.RULE_ID.RulePostedCorneringId)
    }
    else {
      this.title = 'Idiling score';
      this.lineChart(this.chartData.date, this.chartData.idiling, this.title)
      this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedIdlingId)
      this.worstDriver(this.RULE_ID.RulePostedIdlingId)
    }
  }

  resetToLastState() {
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
  }

  resetFilter() {
    this.selectedShow = {
      startDate: moment().subtract(1, 'month').startOf('month').set('hours', 0).set('minutes', 0),
      endDate: moment().subtract(1, 'month').endOf('month').set('hours', 23).set('minutes', 59)
    };
    this.filterApply();
  }


  filterApply() {
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow))
    this.selected = this.selectedShow;
    this.updatePageData();
    this.changeState();
  }


  updatePageData() {
    this.getDashboardData();
    this.worstDriver(this.RULE_ID.RulePostedSpeedingId);
    this.polardata();

  }
  polardata() {
    let querryParams = this.createQuerryparams()
    this.service.get(`dashboard/exception-ratio?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.exceptionRatio = response.data;
        let total = this.exceptionRatio.reduce(
          (previousValue, currentValue) => previousValue + Number(currentValue.score_type_count),
          0
        )
        for (let i = 0; i < this.exceptionRatio.length; i++) {
          this.polarObject[this.exceptionRatio[i].score_type] = ((this.exceptionRatio[i].score_type_count /total)*100).toFixed(1) ;
        }
        let data = [];
        let label = [];
        for(let keys in this.polarObject){
           if(this.polarObject[keys] && this.polarObject[keys]!=='0.0'){
             data.push(this.polarObject[keys])
             label.push(this.exceptionObject[keys])
           }
        }
        // console.log(data,label)
        this.polarGraph(data,label);
      }
    }, (error) => {
      this.dashBoardData = {};
    })
  }
  worstDriver(id) {
    let querryParams = this.createQuerryparams()
    this.service.get(`dashboard/worst-driver?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.worstDriverdetail = response.data;
      }
    }, (error) => {
      this.dashBoardData = {};
    })
  }
  getDashboardData() {
    let querryParams = this.createQuerryparams()
    this.service.get(`zego/dashboard/activity-count-v2?${querryParams}`).pipe().subscribe(response => {
      if (response.data) {
        this.dashBoardData = response.data;
        this.dashBoardData['safeScoreChange'] =  parseFloat(this.dashBoardData.pre_safe_score)? ((parseFloat(this.dashBoardData.safe_score) - parseFloat(this.dashBoardData.pre_safe_score))/parseFloat(this.dashBoardData.pre_safe_score))*100 : 0;
       
        this.dashBoardData['driverChange'] =  parseFloat(this.dashBoardData.pre_total_drivers)? ((parseFloat(this.dashBoardData.total_drivers) - parseFloat(this.dashBoardData.pre_total_drivers))/parseFloat(this.dashBoardData.pre_total_drivers))*100 : 0;
       
        this.dashBoardData['tripChange'] =  parseFloat(this.dashBoardData.pre_total_trips)? ((parseFloat(this.dashBoardData.total_trips) - parseFloat(this.dashBoardData.pre_total_trips))/parseFloat(this.dashBoardData.pre_total_trips))*100 : 0;

        this.dashBoardData['vehicleChange'] =  parseFloat(this.dashBoardData.pre_total_vehicles)? ((parseFloat(this.dashBoardData.total_vehicles) - parseFloat(this.dashBoardData.pre_total_vehicles))/parseFloat(this.dashBoardData.pre_total_vehicles))*100 : 0;
        
        this.dashBoardData['speedChange'] =  parseFloat(this.dashBoardData.pre_speed_score)? ((parseFloat(this.dashBoardData.speed_score) - parseFloat(this.dashBoardData.pre_speed_score))/parseFloat(this.dashBoardData.pre_speed_score))*100 : 0;

        this.dashBoardData['idilingChange'] =  parseFloat(this.dashBoardData.pre_idling_score)? ((parseFloat(this.dashBoardData.idling_score) - parseFloat(this.dashBoardData.pre_idling_score))/parseFloat(this.dashBoardData.pre_idling_score))*100 : 0;
       
        this.dashBoardData['accChange'] =  parseFloat(this.dashBoardData.pre_acceleration_score)? ((parseFloat(this.dashBoardData.acceleration_score) - parseFloat(this.dashBoardData.pre_acceleration_score))/parseFloat(this.dashBoardData.pre_acceleration_score))*100 : 0;
       
        this.dashBoardData['brakingChange'] =  parseFloat(this.dashBoardData.pre_breaking_score)? ((parseFloat(this.dashBoardData.breaking_score) - parseFloat(this.dashBoardData.pre_breaking_score))/parseFloat(this.dashBoardData.pre_breaking_score))*100 : 0;
       
        this.dashBoardData['cornerChange'] =  parseFloat(this.dashBoardData.pre_cornering_score)? ((parseFloat(this.dashBoardData.cornering_score) - parseFloat(this.dashBoardData.pre_cornering_score))/parseFloat(this.dashBoardData.pre_cornering_score))*100 : 0;
        this.getChartData();
      }
    }, (error) => {
      this.dashBoardData = {};
    })
  }


  getChartData() {
    let querryParams = this.createQuerryparams()
    this.chartData = { date: [], speed: [], acc: [], braking: [], idiling: [], cornering: [] }
    this.service.get(`driving-analytics-graph?${querryParams}&score_type=safe_score`).pipe().subscribe(response => {
      if (response.data && response.data.length) {
        response.data.forEach(element => {
          this.chartData.date.push(moment.utc(element.date).format('DD/MM'))
          this.chartData.speed.push(this.formatToFixed(element.speed_score,1))
          this.chartData.acc.push(this.formatToFixed(element.acceleration_score,1))
          this.chartData.braking.push(this.formatToFixed(element.breaking_score,1))
          this.chartData.idiling.push(this.formatToFixed(element.idling_score,1))
          this.chartData.cornering.push(this.formatToFixed(element.cornering_score,1))
        });
      }
      this.miniChart('speedingChart', this.dashBoardData['speedChange'] >= 0? '#00CBA0': '#FF7070', this.chartData.date, this.chartData.speed);
      this.miniChart('idilingChart',  this.dashBoardData['idilingChange'] >= 0? '#00CBA0': '#FF7070', this.chartData.date, this.chartData.idiling);
      this.miniChart('accelerationChart',  this.dashBoardData['accChange'] >= 0? '#00CBA0': '#FF7070', this.chartData.date, this.chartData.acc);
      this.miniChart('brakingChart', this.dashBoardData['brakingChange'] >= 0? '#00CBA0': '#FF7070', this.chartData.date, this.chartData.braking);
      this.miniChart('corneringChart',  this.dashBoardData['cornerChange'] >= 0? '#00CBA0': '#FF7070', this.chartData.date, this.chartData.cornering);
      this.boxVal = 1;
      this.title = 'Speed score';
      this.getExceptionCategoryWiseData(this.RULE_ID.RulePostedSpeedingId)
      this.lineChart(this.chartData.date, this.chartData.speed, this.title)
    }, (error) => {
    })
  }

  getExceptionCategoryWiseData(id){
    let querryParams = this.createQuerryparams()
    this.service.get(`dashboard/exception-type-ratio?${querryParams}&rule_id=${id}`).pipe().subscribe(response => {
      if (response.data) {
        this.exceptionData = response.data;
        this.exceptionData.violated_drivers = Number(this.exceptionData.violated_drivers)
        if(this.exceptionData.violated_drivers)
        this.exceptionData['ratio'] = ((this.exceptionData.violated_drivers/ this.dashBoardData.total_drivers)*100).toFixed(1);
        else
        this.exceptionData['ratio'] = 0;
      }
    }, (error) => {
      this.dashBoardScore = {};
    })
  }

  createQuerryparams() {
    let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
    querryParams = querryParams + `&from_date=${moment(this.selected.startDate).format('YYYY-MM-DD')}`
    querryParams = querryParams + `&to_date=${moment(this.selected.endDate).format('YYYY-MM-DD')}`
    // querryParams = querryParams + `&custom_filter=true`
    // console.log(this.selected.startDate,this.selected.enddate)
    // console.log(this.service.checkCustomDate(moment(this.selected.startDate).format('YYYY-MM-DD'),moment(this.selected.endDate).format('YYYY-MM-DD')))
    let val = this.service.checkCustomDate(moment(this.selected.startDate).format('YYYY-MM-DD'),moment(this.selected.endDate).format('YYYY-MM-DD'))
       if(val == undefined){
      querryParams = querryParams + `&custom_filter=true&filter_value=''`
    }
    else{
      querryParams = querryParams + `&custom_filter=false&filter_value=${val}`
    }
    return querryParams;
    
  }

  routeToDriver(id){
    this.route.navigate([RouteConfig.driver.url], { queryParams: { rule: id } })
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
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    if(this.innerWidth<=992){
      
    }
  }
}
