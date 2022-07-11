import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

interface OrgNode {
  name: string;
  id?: number;
  selected?: boolean;
  indeterminate?: boolean;
  children?: OrgNode[];
  ok?: boolean;

}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  matDialogRef: MatDialogRef<ModalComponent>;
  namedetails:any;
  currentLang:string;
  search:string;
  
  showPopup: boolean = false;
  orgData: OrgNode[] = [];
  orgSelected: any = [];

  selectAllCheckbox: boolean = true;

  treeControl = new NestedTreeControl<OrgNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<OrgNode>();
  placeHolderValue: string;
  profileImage: any;
  selectedDateRange: any;
  showRange: string;

  constructor(
    private router: Router,
    private service: MainService,
    private matDialog: MatDialog,
    private localService: LocalService,
    private translate: TranslateService,) {
   }

  ngOnInit(): void {
    this.selectedDateRange =  this.localService.getItem('dateRange')
    this.formatDateRange(this.selectedDateRange)
    this.namedetails=JSON.parse(this.localService.getItem('data'));
    this.currentLang = this.localService.getItem('currentlang') || 'en';
    this.orgSelected = this.localService.getItem('selectedOrgs');
    this.profileImage = this.localService.getItem('profileImage') || 'assets/images/profile.png';
    this.localService.getImage().subscribe((val)=>{
      if(val){
        this.profileImage = this.localService.getItem('profileImage') || 'assets/images/profile.png';
      }
    })
    this.localService.getDateRange().subscribe((val)=>{
      if(val){
       this.selectedDateRange =  this.localService.getItem('dateRange')
       this.formatDateRange(this.selectedDateRange)
      }
    })

    if(this.orgSelected){
      this.orgSelected = JSON.parse(this.orgSelected);
    }
    this.getAllOrganization();
  }

  getAllOrganization(){
    this.service.get('organisations').pipe().subscribe(response => {
      if (response.data && response.data.length) {
        this.orgData = response.data;
        this.localService.setItem('orgname', JSON.stringify(this.orgData))
        this.dataSource.data = [...this.orgData];
        Object.keys(this.dataSource.data).forEach(x => {
          this.setParent(this.dataSource.data[x], null);
        });
        if(this.orgSelected && this.orgSelected.length){
          this.dataSource.data.forEach(node => {
            this.toggleSelection(true,node,this.orgSelected);
          });
        }
        else{
          this.selectAllFiscal();
          // this.todoItemSelectionToggle(true,this.dataSource.data[0]);
        }
        this.submit(true);
      }
    }, (error) => {
      
    })
  }

  logout() {
    this.service.get('logout').pipe().subscribe(response => {
      if (response.message) {
        this.localService.removeAllItem();
        this.router.navigate([RouteConfig.signin.path])
        this.localService.setdashboardData({})
      }
    }, (error) => {
      this.localService.removeAllItem();
      this.router.navigate([RouteConfig.signin.path])
      this.localService.setdashboardData({})
    })
  }

  useLanguage(language: string) {
    this.localService.setItem('currentlang', language);  
    this.currentLang=language;
    this.localService.setLang();
  }

  hasChild = (_: number, node: OrgNode) =>
    !!node.children && node.children.length > 0;

  setParent(data, parent) {
    data.parent = parent;
    if (data.children) {
      data.children.forEach(x => {
        this.setParent(x, data);
      });
    }
  }

  checkAllParents(node) {
    if (node.parent) {
      const descendants = this.treeControl.getDescendants(node.parent);
      node.parent.selected = descendants.every(child => child.selected);
      node.parent.indeterminate = descendants.some(child => child.selected);
      this.checkAllParents(node.parent);
    }
  }
  todoItemSelectionToggle(checked, node) {
    node.selected = checked;
    this.selectAllCheckbox = (checked == false)?checked:this.selectAllCheckbox;
    if (node.children) {
      node.children.forEach(x => {
        this.todoItemSelectionToggle(checked, x);
      });
    }
    this.checkAllParents(node);
  }

  setChildOk(text: string, node: any) {
    node.forEach(x => {
      x.ok = x.name.indexOf(text) >= 0;
      if (x.parent) this.setParentOk(text, x.parent, x.ok);
      if (x.children) this.setChildOk(text, x.children);
    });
  }
  setParentOk(text, node, ok) {
    node.ok = ok || node.ok || node.name.indexOf(text) >= 0;
    if (node.parent) this.setParentOk(text, node.parent, node.ok);
  }

  submit(openPopup?) {
    let result = [];
    this.dataSource.data.forEach(node => {
      result = result.concat(
        this.treeControl
          .getDescendants(node)
          .filter(x => x.selected && ( x.id || x.indeterminate ))
          .map(x => x.id)
      );
      if((node.selected || node.indeterminate) && node.id){
        result = result.concat(node.id)
      }
    });
    this.orgSelected = result;
    this.localService.setItem("selectedOrgs", JSON.stringify(result))
    this.selOrgName()
    if(!openPopup)    this.popupToggle();
  }
  //For check the values
  getList2(node: any, result: any = null) {
    result = result || {};
    node.forEach(x => {
      result[x.name] = {};
      result[x.name].ok = x.ok;
      if (x.children)
        result[x.name].children = this.getList2(x.children);
      
    });
    return result;
  }
  //Another way to check the values, we can not use {{datasource.node}}
  getList(node: any) {
    return node.map(x => {
      const r: any = {
        name: x.name + " - " + x.ok,
        children: x.children ? this.getList(x.children) : null
      };
      if (!r.children) delete r.children;
      return r;
    });
  }

  selectAllFiscal() {
    this.dataSource.data.forEach(node => {
      this.todoItemSelectionToggle(true,node);
    });
    this.selectAllCheckbox = true;
  }

  clearAllFiscal(){
    this.dataSource.data.forEach(node => {
      this.todoItemSelectionToggle(false,node);
    });
  }

  toggleSelection(checked, node,selectedOrg) {
    if(selectedOrg.includes(node.id)){
      node.selected = checked;
      if (node.children) {
        node.children.forEach(x => {
          this.todoItemSelectionToggle(checked, x);
        });
      }
      this.checkAllParents(node);
    }
  }

  popupToggle(){
    this.showPopup = !this.showPopup;
    if(this.showPopup){
      if(this.orgSelected.length){
        this.dataSource.data.forEach(node => {
          this.toggleSelection(true,node,this.orgSelected);
        });
      }
    }
    else{
      this.clearAllFiscal();
    }
  }

  countSelected(){
    let result = [];
    this.dataSource.data.forEach(node => {
      result = result.concat(
        this.treeControl
          .getDescendants(node)
          .filter(x => x.selected && ( x.id || x.indeterminate ))
          .map(x => x.id)
      );
      if((node.selected || node.indeterminate) && node.id){
        result = result.concat(node.id)
      }
    });
    return result.length;
  }

  selOrgName(){
    if(this.orgSelected.length){
     let data =  this.orgData.find((x)=>{
         return x.id  == this.orgSelected[0]
      })
      this.placeHolderValue =  data.name;
    }
    else{
      this.placeHolderValue =  ""
    }
  }

  routeToProfile(){
    this.router.navigate([RouteConfig.profile.url])
  }
  routeToSupport(){
    this.router.navigate([RouteConfig.support.url])
  }
  OpenModal() {
    var heading;
    var logout;
    this.translate.get("logoutmessage").subscribe( (text: string) => {
      heading=text
    });
    this.translate.get("logout").subscribe( (text: string) => {
      logout=text
    });
    let data ={
      heading:logout,
      content:heading
    }
    // let data ={
    //   heading:'Logout',
    //   content:'Are you sure you want to logout your ZEGO account?'
    // }
    this.matDialogRef = this.matDialog.open(ModalComponent, {
      data: data,
      disableClose: true
    });

    // this.matDialogRef.afterClosed().subscribe(res => {
    //   if ((res == true)) {
    //     // this.name = "";
    //   }
    // });
  }

  formatDateRange(dateRange){
    if(dateRange){
      dateRange = JSON.parse(dateRange)
      this.showRange =  moment(dateRange.startDate).format("DD-MM-YYYY") + ' - ' + moment(dateRange.endDate).format("DD-MM-YYYY");
    }
  }
}
