import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import {
  BED3OrgchartComponent,
  D3NodeBasicParser,
  ID3Node,
  INodesJson,
} from "be-d3-orgchart";
import { element } from "protractor";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { RouteConfig } from "src/app/config/route-config";
import { LocalService } from "src/app/services/local.service";
import { MainService } from "src/app/services/main.service";
import { SnackbarComponent } from "src/app/shared/components/snackbar/snackbar.component";

var configObservable;

function emitConfig(val) {
  configObservable.next(val);
}

@Component({
  selector: "app-groupdata",
  templateUrl: "./groupdata.component.html",
  styleUrls: ["./groupdata.component.scss"],
})
export class GroupdataComponent implements OnInit {
  @ViewChild(BED3OrgchartComponent, { static: true })
  chart: BED3OrgchartComponent;

  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";

  nodes: ID3Node[] = []; // you can fill it here
  organization: any;
  selectedOrgID: any;
  selectedId: any;
  orgName: string;
  isTreeLoading: boolean = false;
  details: any;
  selectedGroup: string;
  selectedGroupId: string;
  selectedNode:any;
  editObj: any = {};
  userName: string;
  userId: any;
  selectedparentNodeId: any;
  constructor(
    protected http: HttpClient,
    private localService: LocalService,
    private _snackBar: MatSnackBar,
    private service: MainService,
    private route: Router
  ) {}

  ngOnInit() {
    const userdetails = JSON.parse(this.localService.getItem("data"));
    this.userId = userdetails.id;

    configObservable = new Subject();
    configObservable.pipe(debounceTime(100)).subscribe((value) => {
      // console.log(value);
      this.selectedGroupId = value.id;
      this.selectedGroup = value.node.title;
      this.selectedparentNodeId = value.node.parentNodeId;
      this.editObj = value.node;
      this.selectedId = value.node.selfId;
    });
    let name = JSON.parse(this.localService.getItem("name"));
    this.userName = name.firstName + " " + name.lastName;
    this.getTreeStructure();
  }

  treeData: any = [];
  getTreeStructure() {
    // this.isTreeLoading = true
    this.chart.init();
    const me = this;

    this.service
      .get(`group/${this.userId}`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data) {
            this.details = [];
            this.details = response.data;
          this.details = this.details.filter((thing, index, self) =>
            index === self.findIndex((t) => (
              t.id === thing.id && t.id === thing.id
            ))
          )
          // console.log(this.details);
          
            this.treeData = JSON.parse(JSON.stringify(response.data));
            const arr: any = this.details.map((element, index) => {
              let obj: any = {};
              if (index == 0) {
                element.parent_node = null;
              }
              if (element.parent_node) {
                obj.nodeId = element.group_id;
                obj.title = element.group_title;
                obj.parentNodeId = element.parent_node;
                obj.selfId = element.id;
              } else {
                obj.nodeId = element.group_id;
                obj.title = element.group_title;
                obj.parentNodeId = element.parent_node;
                obj.selfId = element.id;
              }
              return obj;
            });

            let nodes = arr;
            me.nodes = nodes;
            this.selectedGroupId = nodes[0].nodeId;
            this.selectedGroup = nodes[0].title;
            this.selectedparentNodeId = nodes[0].parentNodeId;
            this.selectedId = nodes[0].selfId;
         }
        },
        (error) => {}
      );
  }

  // openSnackBar() {
  //   this.openSnackBarmodal(
  //     "Please select only one organisation",
  //     "rule_engine"
  //   );
  // }

  ngOnDestroy(): void {
    configObservable.unsubscribe();
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

  addGroup() {
    const arr = this.details.filter((res) => {
      if (res.group_id == this.selectedGroupId) {
        return res;
      }
    });
    // console.log(arr);

    this.route.navigate([RouteConfig.addgroups.url], {
      queryParams: {
        groupId: this.selectedGroupId,
        groupName: this.selectedGroup,
        selectedparentNodeId: this.selectedparentNodeId
          ? this.selectedparentNodeId
          : -1,
        details: JSON.stringify(arr),
      },
    });
  }

  editGroup() {
    this.editObj = this.treeData.find((x) => {
      return x.group_id == this.selectedGroupId;
    });
    this.route.navigate([RouteConfig.editgroups.url], {
      queryParams: {
        groupId: this.selectedGroupId,
        groupName: this.selectedGroup,
        edit: JSON.stringify(this.editObj),
      },
    });
  }
}

BED3OrgchartComponent.prototype.init = function () {
  var me = this;
  // init the canvas
  var chart = me.chart; // Must be like this to ensure chart init
  me.chart.onNodeClick.subscribe(function (data) {
    emitConfig(data);
  });
};
