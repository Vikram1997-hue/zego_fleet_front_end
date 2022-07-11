import { Component, ElementRef, Inject, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProgressBarMode } from "@angular/material/progress-bar";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MainService } from 'src/app/services/main.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: "app-goal-setting",
  templateUrl: "./goal-setting.component.html",
  styleUrls: ["./goal-setting.component.scss"],
})
export class GoalSettingComponent implements OnInit {
  
  color: ThemePalette = "primary";
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  mode: ProgressBarMode = "determinate";
  value = 50;
  bufferValue = 75;
  list = [
    {
      name: "<span>Speeding</span>",
      // message:
      //   "This rule will trigger when a harsh braking event causes a g-force greater than the configured value to be exerted on the vehicle.",
      value: 5,
    },
    {
      name: "<span>Idiling</span>",
      // message:
      //   "This rule will trigger when a hard acceleration event causes a g-force greater than the configured value to be exerted on the vehicle.",
      value: 5,
    },
    {
      name: "<span>Traffic insight<br>Braking</span>",
      // message:
      //   "This rule will trigger when a hard or aggressive turn causes a g-force greater than the configured value to be exerted on the vehicle.",
      value: 5
    },
    {
      name: "<span>Extra wear in <br>corners</span>",
      // message:
      //   "Speed is monitored against the posted road speed. Posted road speed information is not always accurate, so a threshold of at least 10 km/h (6 mi/h) over the posted speed is suggested. If there is no posted road speed information for a section of a trip then no violation will be logged. If the rule is configured to use truck speed limits, speed is monitored against truck road speeds.",
      value: 5,
    }, 
    
    {
      name: "<span>Safe<br>acceleration</span>",
      // message:
      //   "This rule identifies preventable idling. In addition to wasting fuel and increasing greenhouse emissions, idling is often associated with unproductive drivers. The default allowed idle duration is 5 minutes.",
      value: 5,
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<GoalSettingComponent>,
    private service: MainService,  
    private _snackBar: MatSnackBar,  
    @Inject(MAT_DIALOG_DATA) public data
  ) {
  }

  ngOnInit(): void {
    this.getDefaultValue();
    this.setValue()
  }

  setValue(){
    this.list[0].value = this.data.speeding_goal || 5;
    this.list[1].value = this.data.idiling_goal || 5;
    this.list[2].value = this.data.traffic_goal || 5;
    this.list[3].value = this.data.extra_wear_goal || 5;
    this.list[4].value = this.data.safe_acceleration_goal || 5;
  }

  defaultValue: any = {};
  getDefaultValue(){
    this.service.get(`dafault-goal`).pipe().subscribe(response => {
      if (response.data) {
        this.defaultValue = response.data;
      }
    }, (error) => {

    })
  }

  updateValue(){
    let goalForm = {
      "driver_id": this.data.id,
      "speeding_goal": this.list[0].value,
      "idiling_goal": this.list[1].value,
      "traffic_goal": this.list[2].value,
      "extra_wear_goal": this.list[3].value,
      "safe_acceleration_goal": this.list[4].value
    }
    this.service.post(`driver-goal`,goalForm).pipe().subscribe(response => {
      if (response.message && response.message.includes('Driver goal updated successfully.')) {
        this.openSnackBarmodal(response.message, 'update_profile')
        this.dialogRef.close(true);
      }
    }, (error) => {
      this.dialogRef.close(false);
    })
  }


  changeValue(e, i) {
    // console.log(e,i)
    this.list[i].value = e.value;
  }

  CloseDialog() {
    this.dialogRef.close(false);
  }

  setToDefault(){
    this.list[0].value = this.defaultValue.speeding_goal || 5;
    this.list[1].value = this.defaultValue.idiling_goal || 5;
    this.list[2].value = this.defaultValue.traffic_goal || 5;
    this.list[3].value = this.defaultValue.extra_wear_goal || 5;
    this.list[4].value = this.defaultValue.safe_acceleration_goal || 5;
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

}
