import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app-config';
import { RouteConfig } from 'src/app/config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-groupadd',
  templateUrl: './groupadd.component.html',
  styleUrls: ['./groupadd.component.scss']
})

export class GroupaddComponent implements OnInit {
  organization: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  addGroupForm: FormGroup;
  groupName:string='';
  groupId: number;
  isloading=false;
  selectedOrgID: any
  roleArray: any = [
    {key: 'Admin', value: "admin"},
    {key: 'Fleet Manager', value: "fleet_manager"}
  ]
  parentNodeId:any;
  details:any;

  rolePermission: any = AppConfig.roleBasedAccess;

  numberinvalid: boolean;
  public countryCode: string = '31';
  public countryCodeIso = 'nl';
  orgName: string = "";

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
    this.addGroupForm.patchValue({
      country_code: this.countryCode
    })
  }


  constructor(
    private fb: FormBuilder,
    private service: MainService,
    private _snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private localService: LocalService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.groupName = this.activeRoute.snapshot.queryParams.groupName || '';
    this.groupId = this.activeRoute.snapshot.queryParams.groupId || '';
    this.parentNodeId=this.activeRoute.snapshot.queryParams.selectedparentNodeId || '';
    this.details=JSON.parse(this.activeRoute.snapshot.queryParams.details || '')

    this.createGroupForm();
    this.organization = JSON.parse(this.localService.getItem("orgname"));

    if(this.details[0] && this.details[0].org_id.length > 1){
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
      if (this.selectedOrgID.length > 1) {
        this.orgName=''
        this.openSnackBar();
      }
      else if (this.selectedOrgID.length == 1) {
        this.organization.filter((data) => {
          if (data.id == this.selectedOrgID[0]) {
            this.orgName = data.name;
          }
        });
        this.addGroupForm.patchValue({
          org_id: this.selectedOrgID[0],
        });
      }
    });
    if (this.selectedOrgID.length > 1) {
      this.orgName=''
      this.openSnackBar();
    }
    else if (this.selectedOrgID.length == 1) {
      this.organization.filter((data) => {
        if (data.id == this.selectedOrgID[0]) {
          this.orgName = data.name;
        }
      });
      this.addGroupForm.patchValue({
        org_id: this.selectedOrgID[0],
      });
    }
    }
    else{
      this.organization.filter((data) => {
        if (data.id == this.details[0].org_id[0]) {
          this.orgName = data.name;
        }
      });
      this.addGroupForm.patchValue({
        org_id: this.details[0].org_id[0],
      });
    }
  }

  createGroupForm(){
    this.addGroupForm = this.fb.group({
      firstName: ["",Validators.required],
      lastName:['',Validators.required],
      email: ["",[Validators.required,Validators.email]],
      address: ["",Validators.required],
      phone: ["",Validators.required],
      group_title: ['',Validators.required],
      parent_node: [this.groupId,Validators.required],
      country_code: [this.countryCode],
      menu_list:[''],
      org_id:[''],
      status:[1],
      org_name:['']
    })
  }

  goToLastPage() {
    window.history.back();
  }

  openSnackBar() {
    if(this.route.url.includes(RouteConfig.addgroups.url))
    this.openSnackBarmodal("Please select only one organisation","Groups")
  }

  openSnackBarmodal(message, panelClass: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: {image: true, message: message},
      panelClass: panelClass,
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  submit(){
 
    
    const arr=[...this.permissionSet]
    
    this.addGroupForm.patchValue({
      menu_list:([...this.permissionSet]).join(','),
    })

    
    if(this.details[0] && this.details[0].org_id.length > 1){
      if(this.selectedOrgID.length > 1){
        this.openSnackBar();
      }
      else{
        this.organization.filter((data) => {
          if (data.id == this.selectedOrgID[0]) {
            this.addGroupForm.patchValue({
               org_name:data.name
        })
          }
        });
        this.addGroupForm.patchValue({
          org_id:this.selectedOrgID[0]
        })
      } 
    }
    this.addgroup();
  }
  addgroup(){
    if (this.addGroupForm.valid) {
      this.addGroupForm.patchValue({
        parent_node:Number(this.addGroupForm.value.parent_node),
        org_id:(this.addGroupForm.value.org_id).toString(),

      })
    
    
      
      this.isloading =true;
      this.service.post('group/create', this.addGroupForm.value).pipe().subscribe(res => {
        this.isloading = false;
        this.openSnackBarmodal('Group added successfully.', 'Groups')
        this.goToLastPage();
      },err=>{
        this.isloading=false;
        this.openSnackBarmodal(err.message, 'Groups')
      }
      )
    }
  }

  permissionSet = new Set();

  checkboxChecked($event,index){
    if($event.checked){
      this.permissionSet.add(this.rolePermission[index]['value'])
    }
    else{
     if(this.permissionSet.has(this.rolePermission[index]['value']))
     this.permissionSet.delete(this.rolePermission[index]['value'])
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
