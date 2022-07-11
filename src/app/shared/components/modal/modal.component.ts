import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { RouteConfig } from "src/app/config/route-config";
import { LocalService } from "src/app/services/local.service";
import { MainService } from "src/app/services/main.service";
import { SnackbarComponent } from "../snackbar/snackbar.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  data: any;
  apiLogout: boolean = true;
  isApiLoading: boolean = false;
  isUpdate=false;
  category_name=1;

  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";

  constructor(
    private _mdr: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private router: Router,
    private service: MainService,
    private localService: LocalService,
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    this.data = data;
    if (this.data.heading.includes("Contact support")) {
      this.apiLogout = false;
      this.translate.get("contactSupport").subscribe((text: string) => {
        this.data.heading = text;
      });
      this.translate.get("areYouSure").subscribe((text: string) => {
        this.data.content = text;
      });
    }
    else if(this.data.heading.includes("Update Category Name")){
      // console.log('aaa');
      this.category_name=data.categoryData[0].id;
      this.apiLogout = false;
      this.isUpdate=true;
    }
    else if(this.data.heading.includes("Logout")){
      this.translate.get("logout").subscribe((text: string) => {
        this.data.heading = text;
      });
      this.translate.get("logoutmessage").subscribe((text: string) => {
        this.data.content = text;
      });
    }
  }
  getCategory(){

  }
  ngOnInit(): void {
    // console.log(this.data);
    
  }

  CloseDialog() {
    this._mdr.close(false);
  }
  logout() {
    this.isApiLoading = true;
    if (this.apiLogout) {
      this.service
        .get("logout")
        .pipe()
        .subscribe(
          (response) => {
            this.isApiLoading = false;
            if (response.message) {
              this.localService.setdashboardData({})
              const currentlng=this.localService.getItem('currentlang') || 'en'
              this.localService.removeAllItem();
              this.localService.setItem('currentlang',currentlng)
              this.CloseDialog();
              this.router.navigate([RouteConfig.signin.path]);
            }
          },
          (error) => {
            this.isApiLoading = false;
            this.localService.setdashboardData({})
            const currentlng=this.localService.getItem('currentlang') || 'en'
            this.localService.removeAllItem();
            this.localService.setItem('currentlang',currentlng)
            this.CloseDialog();
            this.router.navigate([RouteConfig.signin.path]);
          }
        );
    }
    else if(this.isUpdate){
      // console.log(this.category_name);
      let body={
        category_id: (this.category_name).toString()
      }
      // console.log(JSON.stringify(body));
      
      this.service.patch(`vehicles/${this.data.data.id}/update-category`,body).pipe().subscribe(res=>{
        this.isApiLoading=false;
        this._mdr.close(true);
      },
      err=>{
        this._mdr.close(false);
      }
      )
    }
    else {
      let images = JSON.parse(this.data.body.screenshot);
      let imagesFinal = images.join(' , ');
      let des;
      des = "Name: " + this.data.body.name;
      des = des + "\\n Phone: " + this.data.body.phone;
      des = des + "\\n Email: " + this.data.body.email;
      des = des + "\\n Designation: " + this.data.body.designation;
      des = des + "\\n Portal Url: " + this.data.body.urlPortal;
      des = des + "\\n Operating System: " + this.data.body.os;
      des = des + "\\n Browser: " + this.data.body.browser;
      des = des + "\\n Browser Version: " + this.data.body.browserVersion;
      des = des + "\\n feedback: " + this.data.body.feedback;
      if (images.length > 0) {
        des = des + "\\n file_url: " +  imagesFinal;
      }
      // console.log(des)
      let data = {
        summary: this.data.body.subject,
        description: des || "",
        issue_type: "Task",
      };

      this.service
        .post("jira-ticket", data)
        .pipe()
        .subscribe(
          (res) => {
            this.isApiLoading = false;
            this.CloseDialog();
            if (res.data) {
              this.openSnackBarmodal("Successfully submitted", "contact_support");
              window.history.back();
            }
          },
          (error) => {
            this.isApiLoading = false;
            this.CloseDialog();
          }
        );
    }
    
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
}
