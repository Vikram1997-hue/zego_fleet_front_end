import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-weightage-setting',
  templateUrl: './edit-weightage-setting.component.html',
  styleUrls: ['./edit-weightage-setting.component.scss']
})
export class EditWeightageSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLastPage() {
    window.history.back();
  }

}
