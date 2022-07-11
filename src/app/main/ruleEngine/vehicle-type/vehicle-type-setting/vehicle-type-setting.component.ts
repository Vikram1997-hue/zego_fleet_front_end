import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

//table
interface Transaction {
  item: string;
  cost: string;
}

@Component({
  selector: 'app-vehicle-type-setting',
  templateUrl: './vehicle-type-setting.component.html',
  styleUrls: ['./vehicle-type-setting.component.scss']
})
export class VehicleTypeSettingComponent implements OnInit {

  public isCollapsed = true;
  searchString:string;
  
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

//table
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Sedan', cost: 'ICE'},
    {item: 'SUV', cost: 'ICE'},
    {item: 'Truck', cost: 'ICE'},
    {item: 'Mini Truck', cost: 'ICE'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeState() {
    this.isCollapsed = !this.isCollapsed;
    // if (!this.isCollapsed) {
    //   this.resetToLastState();
    // }
  }


    /** Gets the total cost of all transactions. */
    //table
    // getTotalCost() {
    //   return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    // }
    
}
