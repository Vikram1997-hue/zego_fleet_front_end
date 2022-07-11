import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { TranslateService } from "@ngx-translate/core";
import { LocalService } from "src/app/services/local.service";
import { MainService } from "src/app/services/main.service";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"],
})
export class BarChartComponent implements OnInit {
  @Input() id;

  @Input() data = [];
  @Input() label = [];
  @Input() type;
  yLabel: string;
  text: string;
  browsername: string;

  constructor(
    private elementRef: ElementRef,
    private translate: TranslateService,
    private localService: LocalService,
    public service: MainService
  ) {
    Chart.register(...registerables);
    this.browsername = this.service.detectBrowserName();
  }

  ngOnInit(): void {
    if (this.label[0].includes("kmph")) {
      this.label.forEach((element, index) => {
        if(element.split(" ").length-1 > 1){
          let arr:any=element.split(' ');

        }
      });
    }
    this.localService.getLang().subscribe((val) => {
      if (this.data && this.label) {
        setTimeout(() => {
          this.newbarChart();
        }, 200);
      }
    });
    setTimeout(() => {
      this.newbarChart();
    }, 20);
  }

  barchartdata;
  newbarChart() {
    // console.log(this.id, this.data, this.label);
    let label: any = [...this.label];
    if (this.type == 1) {
      this.translate.get("harshEvent").subscribe((text: string) => {
        this.text = text;
      });
      this.translate.get("ratio").subscribe((text: string) => {
        this.yLabel = text + " %";
      });
      label.map((x, i) => {
        if (x == "Speeding") {
          this.translate.get("speeding").subscribe((text: string) => {
            label[i] = text;
          });
        } else if (x == "Idiling") {
          this.translate.get("idiling").subscribe((text: string) => {
            label[i] = text;
          });
        } else if (x == "Harsh Acceleration") {
          this.translate.get("hardAcceleration").subscribe((text: string) => {
            label[i] = text;
          });
        } else if (x == "Harsh Braking") {
          this.translate.get("hardBraking").subscribe((text: string) => {
            label[i] = text;
          });
        } else {
          this.translate.get("harshCorner").subscribe((text: string) => {
            label[i] = text;
          });
        }
      });
    } else if (this.type == 2) {
      this.translate.get("ratio").subscribe((text: string) => {
        this.yLabel = text + " %";
      });
      this.text = "";
    } else if (this.type == 3) {
      this.translate.get("speedEvent").subscribe((text: string) => {
        this.yLabel = text;
      });
      this.text = "";
    } else if (this.type == 4) {
      this.translate.get("brakingEvent").subscribe((text: string) => {
        this.yLabel = text;
      });
      this.text = "";
    } else if (this.type == 5) {
      this.translate.get("accEvent").subscribe((text: string) => {
        this.yLabel = text;
      });
      this.text = "";
    } else if (this.type == 6) {
      this.translate.get("cornerEvent").subscribe((text: string) => {
        this.yLabel = text;
      });
      this.text = "";
    }

    if(label[0].includes('kmph')){
      this.translate.get("kmph").subscribe((text: string) => {
        label = label.map((x)=>{
          x = x.split(' ')[0] + ' ' + text
          return x;
        })
      });
    }

    let fontFamily = "";
    let fontW = "";
    if (this.browsername == "safari") {
      fontFamily = "ModernEra";
      fontW = "600";
    } else {
      fontFamily = "ModernEra_Bold";
      fontW = "700";
    }

    let htmlRef = this.elementRef.nativeElement.querySelector(`#${this.id}`);
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
            data: this.data || [20, 30, 25, 54, 24],
            backgroundColor: [
              "#60269e",
              "#60269e",
              "#60269e",
              "#60269e",
              "#60269e",
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
              family: "ModernEra_Bold",
            },
            anchor: "end",
            align: "end",
            color: "#001E50",
            formatter: function (value, context) {
              return _this.service.convertToDutch(value);
            },
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              callback: function (index, labels) {
                if (/\s/.test(label[index])) {
                  return label[index].split(" ");
                } else {
                  return label[index];
                }
              },
              color: "#001E50",
              font: {
                size: 10,
                family: fontFamily,
                weight: fontW,
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#001E50",
              font: {
                size: 12,
                family: fontFamily,
                weight: fontW,
              },
              callback: function (value, index, values) {
                return Math.round(Number(value));
              },
            },
            title: {
              display: true,
              text: this.yLabel,
              color: "#667280",
              font: {
                size: 10,
                family: "ModernEra",
                weight: "700",
              },
            },
            grid: {
              drawOnChartArea: false,
            },
            max: Math.max(...this.data) * 1.1,
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  }
}
