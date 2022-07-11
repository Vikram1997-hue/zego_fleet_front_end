import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { MainService } from 'src/app/services/main.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  eyeShow=false;
  eyeShow_pass=false;
  eyeShow_confirm=false;
  changePasswordForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  constructor(private _snackBar: MatSnackBar,private fb: FormBuilder,private service:MainService,private router: Router) { }

  ngOnInit(): void {
    this.createchangepasswordForm();
  }
  createchangepasswordForm() {
    this.changePasswordForm = this.fb.group({
      current_password: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    }
    )
  }
 

  goToLastPage() {
    window.history.back();
  }
  submit(){
    // console.log(this.changePasswordForm.valid);
    if(this.changePasswordForm.valid){
      this.service.post(`change-password`,this.changePasswordForm.value).pipe().subscribe(res => {
        this.openSnackBar(res.message)
        this.router.navigate([RouteConfig.profile.url]);
      }, (err) => {
        this.openSnackBar(err.message)
      })
    }
  }
  openSnackBar(msg) {
    // console.log("aaa");
    
    this.openSnackBarmodal(
      msg,
      "change_password"
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
  get f(){
    return this.changePasswordForm.controls;
  }
}
