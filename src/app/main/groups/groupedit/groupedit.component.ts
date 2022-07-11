import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { AppConfig } from "src/app/config/app-config";
import { LocalService } from "src/app/services/local.service";
import { MainService } from "src/app/services/main.service";
import { SnackbarComponent } from "src/app/shared/components/snackbar/snackbar.component";

@Component({
  selector: "app-groupedit",
  templateUrl: "./groupedit.component.html",
  styleUrls: ["./groupedit.component.scss"],
})
export class GroupeditComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  editGroupForm: FormGroup;
  groupName: string = "";
  groupId: number;
  isloading = false;
  editObj: any;
  permissionSet = new Set();
  userId:any;

  roleArray: any = [
    { key: "Active", value: 1 },
    { key: "Inactive", value: 0 },
  ];

  rolePermission: any = AppConfig.roleBasedAccess;

  numberinvalid: boolean;
  public countryCode: string = "31";
  public countryCodeIso = "nl";
  orgName: string;
  defObj;
  telInputObject(obj, selectedcountry) {
    this.defObj = obj;
    this.setCountry(selectedcountry);
  }
  setCountry(selectedcountry) {
    this.defObj.setCountry(selectedcountry);
  }

  getNumber(obj) {
    // console.log(obj);
  }
  hasError(noerror) {
    if (noerror == false) {
      this.numberinvalid = true;
    } else {
      this.numberinvalid = false;
    }
  }

  onCountryChange(event) {
    this.countryCode = event.dialCode;
    this.editGroupForm.patchValue({
      country_code: this.countryCode,
    });
  }

  constructor(
    private fb: FormBuilder,
    private service: MainService,
    private _snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private localService:LocalService
  ) {}

  ngOnInit(): void {
    const userdetails = JSON.parse(this.localService.getItem("data"));
    this.userId = userdetails.id;
    this.groupName = this.activeRoute.snapshot.queryParams.groupName || "";
    this.groupId = this.activeRoute.snapshot.queryParams.groupId || "";
    this.editObj = this.activeRoute.snapshot.queryParams.edit || {};
    this.createGroupForm();
  }

  createGroupForm() {
    this.editGroupForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      address: ["", Validators.required],
      phone: ["", Validators.required],
      group_title: ["", Validators.required],
      status: ["", Validators.required],
      parent_node: [this.groupId, Validators.required],
      country_code: [this.countryCode],
      menu_list: [],
      org_id:[''],
      group_id:['']
    });
    this.getEditInfo();
  }

  getEditInfo() {
    this.editObj = JSON.parse(this.editObj);

    if (this.editObj.contact_number) {
      setTimeout(() => {
        this.defObj.setNumber(
          "+" + this.editObj.country_code + this.editObj.contact_number
        );
      }, 500);
    }

    
 
    let organization = JSON.parse(this.localService.getItem("orgname"));



    this.editGroupForm.patchValue({
      firstName: this.editObj.firstName || "",
      lastName: this.editObj.lastName || "",
      email: this.editObj.email,
      address: this.editObj.address,
      group_title: this.editObj.group_title,
      status: this.editObj.status || true,
      parent_node: this.editObj.parent_node,
      country_code: this.editObj.country_code,
      phone: this.editObj.phone,
      menu_list: [this.editObj.menu_list],
      org_id:this.editObj.org_id,
      group_id:this.editObj.group_id
    });

    let obj = organization.filter((data) => {
      if (data.id == this.editObj.org_id) {
        this.editGroupForm.patchValue({
           org_name:data.name
         })
        this.orgName = data.name;
      }
    });


    const menu = this.editObj.menu_list.split(",");
    const event = {
      checked: true,
    };
    for (var i = 0; i < menu.length; i++) {
      this.permissionSet.add(menu[i]);
    }    
    
  }

  goToLastPage() {
    window.history.back();
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

  submit() {
    this.editGroupForm.patchValue({
      menu_list: [...this.permissionSet],
    });
    if (this.editGroupForm.valid) {
      this.isloading =true;
      // return
      this.service.put(`profile/${this.editObj.id}`, this.editGroupForm.value).pipe().subscribe(res => {
        this.isloading = false;
        this.openSnackBarmodal('Group added successfully.', 'Groups')
        this.goToLastPage();
      },err=>{
        this.isloading=false;
        this.openSnackBarmodal(err.message, 'Groups')
      })
    }
  }

  checkboxChecked($event, index) {
    if ($event.checked) {
      this.permissionSet.add(this.rolePermission[index]["value"]);
    } else {
      if (this.permissionSet.has(this.rolePermission[index]["value"]))
        this.permissionSet.delete(this.rolePermission[index]["value"]);
    }
  }

  checkForItem(value) {
    return this.permissionSet.has((value));
  }
}
