import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
@Input() border='red';
@Input() type:any;
@Input() data:any;
 background=''
 browsername='';
  constructor(public service: MainService, private cd: ChangeDetectorRef) { 
    this.browsername=this.service.detectBrowserName();
  }

  ngOnInit(): void {
    if(this.border == '#F3543F'){
      this.background='#FDDBD7'
    }
    else if(this.border== '#46E18C'){
      this.background='#DDF8E9'
    }
    else{
      this.background='#fff'
    }
    if((this.data && this.data.length < 5) || !this.data){
      while(this.data.length < 5){
        this.data.push({})
      }
    }
  }

  checkItem(obj){
    let key = Object.keys(obj);
    if(key.length) return true;
    else return false;
  }

}
