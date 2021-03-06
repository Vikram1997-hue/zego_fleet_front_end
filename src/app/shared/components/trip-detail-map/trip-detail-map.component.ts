import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';

declare var google;

@Component({
  selector: 'app-trip-detail-map',
  templateUrl: './trip-detail-map.component.html',
  styleUrls: ['./trip-detail-map.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TripDetailMapComponent implements OnInit {

  @Input("tripDetail") tripDetail: any = {};
  @Input("alerts") alerts: any = [];
  @Input("hideShowAlerts") hideShowAlerts: boolean = true;
  @Input("singleId") singleId: any;

  exceptionColors: any = {
    "speed": '#FF9950',
    "breaking": '#FFEA6C',
    "acceleration": '#4DBFFF',
    "cornering": '#FF7070',
    "idling": '#00CBA0'
  };  
  
  constructor(private service : MainService,  private local:LocalService, private cd: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout(()=>{
      this.exceptionColors= JSON.parse(this.local.getItem('colors'));
      if (changes.tripDetail) {
        this.initMap(changes.tripDetail.currentValue, this.alerts)
      }
      if (changes.alerts) {
        this.initMap(this.tripDetail, changes.alerts.currentValue)
      }
      if (changes.hideShowAlerts) {
        this.toggleGroup(changes.hideShowAlerts.currentValue)
      }
      if(changes.singleId){
        this.toggleSingleGroup(changes.singleId.currentValue)
      }
    },200)
  }

  ngOnInit(): void {
  }
  polylines = [];
  alertMarkers = [];

  exceptionStartArray: any = []

  polylineOptions = {
    strokeColor: '#C83939',
    strokeOpacity: 1,
    strokeWeight: 3
  };

  renderDirectionsPolylines(response, map) {
    var colors = "#FF0000";
    var bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < this.polylines.length; i++) {
      this.polylines[i].setMap(null);
    }
    var legs = response.routes[0].legs;
    for (let i = 0; i < legs.length; i++) {
      let str = this.convertToFixed(legs[i].start_location.lat()) + ', ' + this.convertToFixed(legs[i].start_location.lng())
      if (this.exceptionStartArray.includes(str)) {
        colors = "#FF0000";
      }
      else {
        colors = "#604EFF"
      }
      var steps = legs[i].steps;
      for (let j = 0; j < steps.length; j++) {
        var nextSegment = steps[j].path;
        var stepPolyline = new google.maps.Polyline(this.polylineOptions);
        stepPolyline.setOptions({
          strokeColor: colors,
          icons: [
            {
              icon: {
                path: "M -2,0 0,-2 2,0 0,0 z",
                strokeColor:'black',
                fillColor: 'black',
                fillOpacity: 1,
                scale: 2
              },
              offset: '30px',
              repeat: '500px',
              
            }
          ]
        })
        for (let k = 0; k < nextSegment.length; k++) {
          stepPolyline.getPath().push(nextSegment[k]);
          bounds.extend(nextSegment[k]);
        }
        this.polylines.push(stepPolyline);
        stepPolyline.setMap(map);
        this.cd.detectChanges();
        // route click listeners, different one on each step
        // google.maps.event.addListener(stepPolyline, 'click', function(evt) {
        //   infowindow.setContent("you clicked on the route<br>" + evt.latLng.toUrlValue(6));
        //   infowindow.setPosition(evt.latLng);
        //   infowindow.open(map);
        // })
      }
    }
    map.fitBounds(bounds);
  }

  initMap(routes?, alerts?) {
    var routes = routes;
    var waypoints = [];
    this.alertMarkers = [];
    var neitherLandCordi = new google.maps.LatLng(AppConfig.netherlandLat, AppConfig.netherlandLong);
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: neitherLandCordi,
      disableDefaultUI: true,
      draggable: true,
      scaleControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      fullscreenControl: true,
      fullscreenControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_LEFT
      },
    });

    // map.setOptions({ styles: AppConfig.mapStyle });
    var infowindow = new google.maps.InfoWindow({
      content: '',
      minWidth: 333,
    });

    var infowindowMarker = new google.maps.InfoWindow({
      content: '',
    });

    var bounds = new google.maps.LatLngBounds();
    // Plot Points
    if (routes) {
      let _this = this;
      this.exceptionStartArray = [];
      if (alerts && alerts.length) {
        alerts.forEach((element, i) => {
          // console.log(element)
          if(element && element.points){
            let obj = {
              location: element.points[0].latitude + ', ' + element.points[0].longitude,
              stopover: true
            }
            if(waypoints.length < 25)
            waypoints.push(obj);
            if(element.score_type=='speed'){
            obj = {
              location: element.points[1].latitude + ', ' + element.points[1].longitude,
              stopover: true
            }
            if(waypoints.length < 25)
            waypoints.push(obj);
          }
  
          if(element.score_type=='speed'){
            this.exceptionStartArray.push(this.convertToFixed(element.points[0].latitude) + ', ' + this.convertToFixed(element.points[0].longitude));
          }
            this.alertMarkers[i] = new google.maps.Marker({
              position: new google.maps.LatLng(element.points[0].latitude, element.points[0].longitude),
              map: map,
              icon: {
                path: 'M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z',
                fillColor: this.exceptionColors[element.score_type],
                fillOpacity: 1,
                strokeColor: '#fff',
                scale: 1
              }
            });
            this.alertMarkers[i].set("id", element.id);
            bounds.extend(this.alertMarkers[i].position);
            element.changedDate = this.convertDateFormat(element.start_time)
            if (routes) {
              var extendedHtml ='';
              var unit = '';
              if(element.score_type=='idling'){
                if(!element.duration_seconds.includes(":"))
                element.duration_seconds = this.service.convertHMS(element.duration_seconds)
                unit = 's';
                extendedHtml=
                `<div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                <div style="font: 600 14px/20px ModernEra; color:#FA1464; ">
                <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[element.score_type]}"/>
              </svg>Idiling</div>
                <div>
                    <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                        Violation: <span style="color:#FA1464"> ${element.duration_seconds}</span>
                    </div>
                </div>
              </div>`
              }
              else if(element.score_type=='speed'){
                unit = 'km/h'
                extendedHtml = `
                <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                    <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">  <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[element.score_type]}"/>
                  </svg>Speeding</div>
                    <div>
                        <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
                border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                            Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(element.violation_rate)} km/h</span>
                        </div>
                    </div>
                </div>`
                
              }
              else if(element.score_type=='cornering'){
                unit = `G`
                extendedHtml=`
                <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">  <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[element.score_type]}"/>
              </svg>Harsh cornering</div>
                <div>
                    <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                        Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(element.violation_rate)} G</span>
                    </div>
                </div>
            </div>
                `
              }
              else if(element.score_type=='acceleration'){
                unit = `G`
                extendedHtml=`
                <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">  <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[element.score_type]}"/>
              </svg>Harsh acceleration</div>
                <div>
                    <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                        Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(element.violation_rate)} G</span>
                    </div>
                </div>
            </div>
                `
              }
              else{
                unit = `G`
                extendedHtml=`
                <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                <div style="font: 600 14px/20px ModernEra; color:#FA1464; padding:16px 0;">  <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[element.score_type]}"/>
              </svg>Harsh braking</div>
                <div>
                    <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
            border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50;">
                        Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(element.violation_rate)} G</span>
                    </div>
                </div>
            </div>
                `
              }
              
              var html = 
            `<div style="display:flex">
                  <div style=" flex-basis: calc(50% - 10px);
                        max-width: calc(50% - 10px); margin-right:20px;">
                      <div style="display:flex; align-items: center; padding-bottom:16px;">
                          <div style="margin-right:10px"><img src="../../../../assets/images/location-tick.svg"> </div>
                          <div style="width:135px">
                              <div style="font: 700 12px/18px ModernEra; color:#604EFF"> ${element.changedDate}</div>
                              <div style="font: 600 11px/18px ModernEra; color:#001E50;   white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;"></div>
                          </div>
                      </div>
                  </div>
                  <div style="flex-basis: calc(50% - 10px);
                  max-width: calc(50% - 10px);">
                      <div style="  padding:10px 9px; background: rgba(0,240,156, 0.05);
                  border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50; text-align:center">
                          Limit: <span style="color:#00F09C"> ${this.service.convertToDutch(element.limit)} ${unit}</span>
                      </div>
                  </div>
              </div>
              ` + extendedHtml
              this.bindInfoWindow(this.alertMarkers[i], map, infowindow, html);
            }
            
            var html = 
          `<div style="display:flex">
                <div style=" flex-basis: calc(50% - 10px);
                      max-width: calc(50% - 10px); margin-right:20px;">
                    <div style="display:flex; align-items: center; padding-bottom:16px;">
                        <div style="margin-right:10px"><img src="../../../../assets/images/location-tick.svg"> </div>
                        <div style="width:135px">
                            <div style="font: 700 12px/18px ModernEra; color:#EFA952"> ${element.changedDate}</div>
                            <div style="font: 600 11px/18px ModernEra; color:#001E50;   white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;">
                                 </div>
                        </div>
                    </div>
                </div>
                <div style="flex-basis: calc(50% - 10px);
                max-width: calc(50% - 10px);">
                    <div style="  padding:10px 9px; background: rgba(0,240,156, 0.05);
                border-radius: 8px; font: 600 12px/18px ModernEra; color:#001E50; text-align:center">
                        Limit: <span style="color:#00F09C"> ${this.service.convertToDutch(element.limit)} ${unit}</span>
                    </div>
                </div>
            </div>
            ` + extendedHtml
            this.bindInfoWindow(this.alertMarkers[i], map, infowindow, html);
          }
        });
      }

      if(routes.start_latitude){
        // this.toggleGroup(false)
        var startPoint = new google.maps.LatLng(routes.start_latitude, routes.start_longitude);
        var endPoint = new google.maps.LatLng(routes.finish_latitude, routes.finish_longitude);
        // Each route
        var startAdd = routes['start_location_address']
        var startMarker = new google.maps.Marker({
          position: startPoint,
          map: map,
          title: startAdd,
          icon: {
            url: '../../../assets/images/location.svg', // url
            scaledSize: new google.maps.Size(30, 30), // scaled size
          }
        });
        bounds.extend(startMarker.position);
        this.bindInfoWindow(startMarker, map, infowindowMarker, "<p>" + startAdd + "</p>");
  
        var endAdd = routes['stop_location_address']
  
        var endMarker = new google.maps.Marker({
          position: endPoint,
          map: map,
          title: endAdd,
          icon: {
            url: '../../../assets/images/destination.svg', // url
            scaledSize: new google.maps.Size(30, 30), // scaled size
          }
        });
        bounds.extend(endMarker.position);
        this.bindInfoWindow(endMarker, map, infowindowMarker, "<p>" + endAdd + "</p>");
        var request = {
          origin: startPoint,
          destination: endPoint,
          waypoints: waypoints,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        };
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            // Display the route on the map.
            _this.renderDirectionsPolylines(response, map);
          }
        });
        map.fitBounds(bounds);
        google.maps.event.addDomListener(window, "resize", function () {
          google.maps.event.trigger(map, "resize");
          map.fitBounds(bounds);
        });
      }
     
    }
  }

  bindInfoWindow(marker, map, infowindow, html) {
    google.maps.event.addListener(marker, 'mouseover', function () {
      infowindow.setContent(html);
      infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
      infowindow.close();
    });
  }

  convertDateFormat(date) {
    if (date) {
      return moment(date).utc().format("HH:mm [???] DD/MM/yyyy")
    }
    else {
      return 'NA'
    }
  }

  toggleGroup(val) {
    for (var i = 0; i < this.alertMarkers.length; i++) {
      var marker = this.alertMarkers[i];
      marker.setVisible(val);
    }
  }

  toggleSingleGroup(val){
    for (var i = 0; i < this.alertMarkers.length; i++) {
      var marker = this.alertMarkers[i];
      if(marker.get("id") == val){
        marker.setVisible(true);
      }
      else{
        marker.setVisible(false);
      }
    }
  }

  convertToFixed(val) {
    val = String(val);
    return val.split('.')[0] + '.' + val.split('.')[1].substring(0, 3)
  }
}
