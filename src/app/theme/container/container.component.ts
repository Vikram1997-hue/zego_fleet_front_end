import { Component, OnInit } from '@angular/core';
import { NavigationStart, NavigationError, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkRouteChange()
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          //do something on start activity
      }

      if (event instanceof NavigationError) {
          // Handle error
          // console.error(event.error);
      }

      if (event instanceof NavigationEnd) {
        if(document.getElementById('head'))
        document.getElementById('head').scrollIntoView();
          //do something on end activity
      }
  });
  }

  routeList: any = ['/main/dashboard', '/main/vehicle', '/main/trip', '/main/exceptions', '/main/mapview']
  showFilter: boolean = false;
  checkRouteChange() {
    if (this.routeList.includes(this.router.url.split('?')[0])) {
      this.showFilter = true;
    }
    else{
      this.showFilter = false;
    } 

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.routeList.includes(event.url.split('?')[0])) {
          this.showFilter = true;
        }
        else{
          this.showFilter = false;
        } 
      }
    });
  }

  



}
