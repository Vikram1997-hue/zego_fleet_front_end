import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-exception-setting',
  templateUrl: './exception-setting.component.html',
  styleUrls: ['./exception-setting.component.scss']
})
export class ExceptionSettingComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  list =[
    {
      name: '<span>Harsh <br> Acceleration</span>',
      message: 'This rule will trigger when a harsh braking event causes a g-force greater than the configured value to be exerted on the vehicle.',
      value:45,
      firstValue : '00',
      secondValue: '00',
      thirdValue: '00',
      fourthValue: '0(m/s)'
    },
    {
      name: '<span>Harsh <br> Braking</span>',
      message: 'This rule will trigger when a hard acceleration event causes a g-force greater than the configured value to be exerted on the vehicle.',
      value:65,
      firstValue : '00',
      secondValue: '00',
      thirdValue: '00',
      fourthValue: '0(m/s)'
    },
    {
      name: '<span>Harsh <br> Cornering</span>',
      message: 'This rule will trigger when a hard or aggressive turn causes a g-force greater than the configured value to be exerted on the vehicle.',
      value:35,
      firstValue : '00',
      secondValue: '00',
      thirdValue: '00',
      fourthValue: '0(m/s)'
    },
    {
      name: '<span>Speeding</span>',
      message: 'Speed is monitored against the posted road speed. Posted road speed information is not always accurate, so a threshold of at least 10 km/h (6 mi/h) over the posted speed is suggested. If there is no posted road speed information for a section of a trip then no violation will be logged. If the rule is configured to use truck speed limits, speed is monitored against truck road speeds.',
      value:75,
      firstValue : '50',
      secondValue: '100',
      thirdValue: '150',
      fourthValue: '0(m/s)'
    },
    {
      name: '<span>Idiling</span>',
      message: 'BThis rule identifies preventable idling. In addition to wasting fuel and increasing greenhouse emissions, idling is often associated with unproductive drivers. The default allowed idle duration is 5 minutes.',
      value:55,
      firstValue : '00',
      secondValue: '00',
      thirdValue: '00',
      fourthValue: '0(m/s)'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  changeValue(e,i){
    // console.log(e,i)
  }

}
