import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = "right";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  constructor(private _snackBar: MatSnackBar,private service: MainService, private local:LocalService, private router: Router) { }

  ngOnInit(): void {
    this.getColors();
  }
  
  edit=true;
  speedingcolorvalue='';
  idilingcolorvalue='';
  acccolorvalue='';
  corneringcolorvalue='';
  brakingcolorvalue='';
  selectedColorPicker: number = 6;

  getColors(){
   var col:any= JSON.parse(this.local.getItem('colors'));
   
   if(col){
     this.speedingcolorvalue=col.speed;
     this.idilingcolorvalue=col.idling;
     this.acccolorvalue=col.acceleration;
     this.brakingcolorvalue=col.cornering;
     this.corneringcolorvalue=col.breaking;
   }
  }
  speedingColor(e){
    // console.log(e);
    this.speedingcolorvalue=e;
  }
  idilingColor(e){
    this.idilingcolorvalue=e;
  }
  accColor(e){
    this.acccolorvalue=e;
  }
  cornenringColor(e){
    this.corneringcolorvalue=e;
  }
  brakingColor(e){
    this.brakingcolorvalue=e;
  }

  excepClick($event){
    this.selectedColorPicker = $event;
  }

  closeColorPicker(){
    this.selectedColorPicker = 6;
  }

  submit(){
    let colors = {
      'speed': this.speedingcolorvalue,
      'idling': this.idilingcolorvalue,
      'acceleration': this.acccolorvalue,
      'cornering': this.corneringcolorvalue,
      'breaking': this.brakingcolorvalue,
    }

    this.edit=!this.edit;
    let data = {
      "color_code": [
        {
        "key": "Speeding",
        "value": this.speedingcolorvalue.slice(1)
        },
        {
        "key": "Idiling",
        "value": this.idilingcolorvalue.slice(1)
        },
        {
        "key": "Harsh Acceleration",
        "value": this.acccolorvalue.slice(1)
        },
        {
        "key": "Harsh Cornering",
        "value": this.corneringcolorvalue.slice(1)
        },
        {
        "key": "Harsh Braking",
        "value": this.brakingcolorvalue.slice(1)
        }
      ]
    }
    

     this.service.put('profile/color-code',data).pipe().subscribe(res=>{
        this.local.setItem('colors', JSON.stringify(colors))
        this.openSnackBar(res.message)
        // this.router.navigate([RouteConfig.dashboard.url]);
     })
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

  openSnackBar(msg) {    
    this.openSnackBarmodal(
      msg,
      "change_exception_color"
    );
  }
}
