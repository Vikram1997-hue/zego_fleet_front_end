import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { AppConfig } from "src/app/config/app-config";
import { RouteConfig } from "src/app/config/route-config";
import { LocalService } from "src/app/services/local.service";
import { MainService } from "src/app/services/main.service";
import { SnackbarComponent } from "src/app/shared/components/snackbar/snackbar.component";
import * as moment from "moment";

@Component({
  selector: "app-add-rule-engine",
  templateUrl: "./add-rule-engine.component.html",
  styleUrls: ["./add-rule-engine.component.scss"],
})
export class AddRuleEngineComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  addRuleForm: FormGroup;
  orgName: string = "";
  isloading = false;
  selectedOrgID: any;
  disable_status = true;
  rangeValue = "";
  currentValue = "";
  minDate = moment();
  dateLimit = "5";
  selected: any = {
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

  ranges: any = AppConfig.momentRange;
  alwaysShowCalendars: boolean = true;
  showRangeLabelOnInput: boolean = true;
  keepCalendarOpeningWithRange: boolean = true;
  showRange = false;
  // selected: any;
  // selectedAgain: any;
  constructor(
    private fb: FormBuilder,
    private service: MainService,
    private localService: LocalService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createaddRuleForm();
    this.getAllOrganization();
    this.vechileCategory();
    this.organization = JSON.parse(this.localService.getItem("orgname"));

    this.selectedOrgID = this.localService.getItem("selectedOrgs");
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }
    this.localService.watchOrgData().subscribe((resp) => {
      if (resp) {
        let orgId: any = this.localService.getItem("selectedOrgs");
        if (orgId) {
          orgId = JSON.parse(orgId);
        }
        let isEqual = true;
        if (
          this.selectedOrgID &&
          this.selectedOrgID.length &&
          orgId &&
          orgId.length
        ) {
          isEqual =
            orgId.length === this.selectedOrgID.length &&
            orgId.every((val) => this.selectedOrgID.includes(val));
        } else {
          isEqual = false;
        }
        if (!isEqual) {
          this.selectedOrgID = [...orgId];
        }
      }
      const url = window.location;
      if (
        this.selectedOrgID.length > 1 &&
        url.hash == "#/main/ruleengine/addruleengine"
      ) {
        this.openSnackBar();
      } else if (this.selectedOrgID.length == 1) {
        this.organization.filter((data) => {
          if (data.id == this.selectedOrgID[0]) {
            this.orgName = data.name;
          }
        });
        this.addRuleForm.patchValue({
          org_id: this.selectedOrgID[0],
        });
      }
    });
    if (this.selectedOrgID.length > 1) {
      this.openSnackBar();
    }
    if (this.selectedOrgID.length == 1) {
      this.organization.filter((data) => {
        if (data.id == this.selectedOrgID[0]) {
          this.orgName = data.name;
        }
      });
      this.addRuleForm.patchValue({
        org_id: this.selectedOrgID[0],
      });
    }
    this.organization.filter((data) => {
      if (data.id == this.selectedOrgID[0]) {
        this.orgName = data.name;
      }
    });
  }
  organization: any;
  exception: any = [
    {
      name: "Speeding",
      id: "speed",
    },
    {
      name: "Breaking",
      id: "breaking",
    },
    {
      name: "Cornering",
      id: "cornering",
    },
    {
      name: "Acceleration",
      id: "acceleration",
    },
    {
      name: "Idling",
      id: "idling",
    },
  ];
  vechilecategory: any;

  createaddRuleForm() {
    this.addRuleForm = this.fb.group({
      org_id: ["", Validators.required],
      percentage_of_violation: ["", Validators.required],
      duration_of_violation: ["", Validators.required],
      score: ["", Validators.required],
      road_type: ["", Validators.required],
      road_factor: ["", Validators.required],
      vehicle_category_id: ["", Validators.required],
      weather: ["", Validators.required],
      exception_type: ["", Validators.required],
      day_night_driving: ["", Validators.required],
      day_night_score: ["", Validators.required],
      created_on: [moment().format("MM/DD/YYYY")],
      effective_from: ["", Validators.required],
    });
  }

  getAllOrganization() {
    // console.log(this.organization)
  }
  vechileCategory() {
    this.service
      .get("vehicles/category-by-organisation?organisation=[1,2,3,4,5,6,7]")
      .pipe()
      .subscribe((res) => {
        this.vechilecategory = res.data;
      }),
      (err) => {};
  }
  get f() {
    return this.addRuleForm.controls;
  }

  goToLastPage() {
    window.history.back();
  }
  updatetype() {
    if (this.addRuleForm.value.exception_type == "speed") {
      this.showRange=false;
      this.currentValue = "<span>(km/hr)</span>";
    } else if (this.addRuleForm.value.exception_type == "breaking") {
      this.showRange=true;
      this.currentValue = "<span>(m/s<sup>2</sup>)</span>";
    } else if (this.addRuleForm.value.exception_type == "cornering") {
      this.showRange=true;
      this.currentValue = "<span>(m/s<sup>2</sup>)</span>";
    } else if (this.addRuleForm.value.exception_type == "acceleration") {
      this.showRange=true;
      this.currentValue = "<span>(m/s<sup>2</sup>)</span>";
    } else if (this.addRuleForm.value.exception_type == "idling") {
      this.showRange=true;
      this.currentValue = "";
    }
  }
  update() {
    if (this.addRuleForm.value.exception_type == "speed") {
    }
    if (
      this.addRuleForm.value.road_type == 1 ||
      this.addRuleForm.value.road_type == 2
    ) {
      this.addRuleForm.patchValue({
        road_factor: "City",
      });
    }
    if (
      this.addRuleForm.value.road_type == 3 ||
      this.addRuleForm.value.road_type == 4
    ) {
      this.addRuleForm.patchValue({
        road_factor: "Outside City",
      });
    } else if (this.addRuleForm.value.road_type == 5) {
      this.addRuleForm.patchValue({
        road_factor: "Highway",
      });
    }
  }

  submit() {
    // console.log(this.addRuleForm.value.effective_from);

    // console.log(moment(this.addRuleForm.value.effective_from.startDate).format('YYYY-MM-DD'))
    if(this.addRuleForm.value.exception_type!= 'speed'){
      this.addRuleForm.patchValue({
        road_factor:'null'
      })
    }
    if (this.selectedOrgID.length == 1) {
      if (this.addRuleForm.valid) {
        this.isloading = true;
        let percentage_of_violation_min = 0;
        let percentage_of_violation_max = 5;
        let road_type_min = 0;
        let road_type_max = 30;

        if (this.addRuleForm.value.percentage_of_violation == 2) {
          percentage_of_violation_min = 5;
          percentage_of_violation_max = 10;
        } else if (this.addRuleForm.value.percentage_of_violation == 3) {
          percentage_of_violation_min = 10;
          percentage_of_violation_max = 100;
        }
        if (this.addRuleForm.value.road_type == 2) {
          road_type_min = 30;
          road_type_max = 50;
        } else if (this.addRuleForm.value.road_type == 3) {
          road_type_min = 50;
          road_type_max = 80;
        } else if (this.addRuleForm.value.road_type == 4) {
          road_type_min = 80;
          road_type_max = 100;
        } else if (this.addRuleForm.value.road_type == 5) {
          road_type_min = 100;
          road_type_max = 1000;
        }
        let data:any = {
          org_id: this.addRuleForm.value.org_id,
          percentage_of_violation_min: percentage_of_violation_min,
          percentage_of_violation_max: percentage_of_violation_max,
          duration_of_violation: Number(
            this.addRuleForm.value.duration_of_violation
          ),
          score: Number(this.addRuleForm.value.score),
          road_type_min: road_type_min,
          road_type_max: road_type_max,
          road_factor: this.addRuleForm.value.road_factor,
          vehicle_category_id: this.addRuleForm.value.vehicle_category_id,
          weather: this.addRuleForm.value.weather,
          exception_type: this.addRuleForm.value.exception_type,
          day_night_driving: this.addRuleForm.value.day_night_driving,
          day_night_score: Number(this.addRuleForm.value.day_night_score),
          effective_from: moment(
            this.addRuleForm.value.effective_from.startDate
          ).format("YYYY-MM-DD"),
          // created_on: moment(this.addRuleForm.value.created_on).format(
          //   "YYYY-MM-DD"
          // ),
        };
        if(data.exception_type!='speed'){
        data.road_factor="Highway";
        data.road_type_min=100;
        data.road_type_max=1000;
          data.gforce_limit=this.addRuleForm.value.road_type;
        }
        

        // console.log(data)
        this.service
          .post("rule-engine/create", data)
          .pipe()
          .subscribe((res) => {
            this.router.navigate([RouteConfig.ruleengine.url]);
          }),
          (err) => {
            this.isloading=false;
          };
      }
    } else {
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this.openSnackBarmodal(
      "Please select only one organisation",
      "rule_engine"
    );
  }
  openSnackBarmodal(message, panelClass: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { image: true, message: message },
      panelClass: panelClass,
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  fitlerorgname(id) {
    this.organization.filter((data) => {
      if (data.id == id) {
        this.orgName = data.name;
      }
    });
  }
}
