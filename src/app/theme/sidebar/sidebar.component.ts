import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MainService } from 'src/app/services/main.service';
import { RouteConfig } from '../../config/route-config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('firstAccordion') firstAccordion: MatAccordion;

  displayMode: string = 'default';
  displayMode1: string = 'default';
  multi = true;
  hideToggle = false;
  hideToggle1 = false;
  disabled = false;
  showPanel3 = true;
  panel11 = false;
  expandedHeight: string;
  collapsedHeight: string;
  browsername:any;

  constructor( public service: MainService,) { 
    this.browsername=this.service.detectBrowserName();
  }

  ngOnInit(): void {
  }

  openAllFirst() {
    this.firstAccordion.openAll();
  }

  closeAllFirst() {
    this.firstAccordion.closeAll();
  }

}
