import { Component, OnInit } from '@angular/core';


//table
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];


@Component({
  selector: 'app-weightage-dashboard',
  templateUrl: './weightage-dashboard.component.html',
  styleUrls: ['./weightage-dashboard.component.scss']
})
export class WeightageDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['trigger', 'time', 'weightage', 'speed', 'road', 'vehicle', 'daynight', 'weather', 'symbol'];
  dataSource = ELEMENT_DATA;
  
}
