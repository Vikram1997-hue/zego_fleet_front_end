import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { AppConfig } from 'src/app/config/app-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';

declare var google;
declare var OverlappingMarkerSpiderfier;
declare var MarkerClusterer;
@Component({
  selector: 'app-exception-map',
  templateUrl: './exception-map.component.html',
  styleUrls: ['./exception-map.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ExceptionMapComponent implements OnInit {


  @Input("tableData") tableData: any = [];
  @Input("singleMarker") singleMarker: any = {};
  exceptionColors: any = {
    "speed": '#FF9950',
    "breaking": '#FFEA6C',
    "acceleration": '#4DBFFF',
    "cornering": '#FF7070',
    "idling": '#00CBA0'
  };
  alertExceptionWise: any = {
    'speed': [],
    'idling': [],
    'acceleration': [],
    'cornering': [],
    'breaking': []
  }

  constructor(private service: MainService, private local: LocalService) {
    this.exceptionColors = JSON.parse(this.local.getItem('colors'));
  }

  ngOnInit(): void {
  }
  alertMarkers: any = [];
  ngOnChanges(changes: SimpleChanges) {
    if (changes.tableData) {
      this.initMap(changes.tableData.currentValue)
    }
  }

  initMap(routes?) {
    var routes = routes;
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
        position: google.maps.ControlPosition.BOTTOM_RIGHT
      },
    });

    map.setOptions({ styles: AppConfig.mapStyle });

    var infowindow = new google.maps.InfoWindow({
      content: ''
    });
    var bounds = new google.maps.LatLngBounds();

    var oms = new OverlappingMarkerSpiderfier(map, {
      markersWontMove: true,   // we promise not to move any markers, allowing optimizations
      markersWontHide: true,   // we promise not to change visibility of any markers, allowing optimizations
      basicFormatEvents: true  // allow the library to skip calculating advanced formatting information
    });
    if (routes && routes.length > 0) {
      // Plot Points        
      for (var i = 0; i < routes.length; i++) {
        let alerts = routes[i];
        if (alerts && alerts.points) {
          this.alertMarkers[i] = new google.maps.Marker({
            position: new google.maps.LatLng(alerts.points[0].latitude, alerts.points[0].longitude),
            map: map,
            icon: {
              path: 'M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z',
              fillColor: this.exceptionColors[alerts.score_type],
              fillOpacity: 1,
              strokeColor: '#fff',
              scale: 1
            }
          });

          this.alertExceptionWise[alerts.score_type].push(this.alertMarkers[i])
          bounds.extend(this.alertMarkers[i].position);

          // alerts[this.singleMarker.index].changedDate = this.convertDateFormat(alerts[this.singleMarker.index].alerts[0].date)
          if (routes) {
            var extendedHtml = '';
            var unit = '';
            if (alerts.score_type == 'idling') {
              if (!alerts.duration_seconds.includes(":"))
                alerts.duration_seconds = this.service.convertHMS(alerts.duration_seconds)
              unit = `s`
              extendedHtml =
                `<div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; ">
                <svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
            </svg>Idiling</div>
                <div>
                    <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
            border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                        Violation: <span style="color:#FA1464">${alerts.duration_seconds} </span>
                    </div>
                </div>
              </div>`
            }
            else if (alerts.score_type == 'speed') {
              unit = 'km/h'
              extendedHtml = `
                <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
                    <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; padding:16px 0;"><svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
                  </svg>Speeding</div>
                    <div>
                        <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
                border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                            Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} km/h</span>
                        </div>
                    </div>
                </div>`

            }
            else if (alerts.score_type == 'cornering') {
              unit = `G`
              extendedHtml = `
              <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
              <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; padding:16px 0;"><svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
            </svg>Harsh cornering</div>
              <div>
                  <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
          border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                      Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
                  </div>
              </div>
          </div>
                `
            }
            else if (alerts.score_type == 'acceleration') {
              unit = `G`
              extendedHtml = `
              <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
              <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; padding:16px 0;"><svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
            </svg>Harsh acceleration</div>
              <div>
                  <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
          border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                      Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
                  </div>
              </div>
          </div>
                `
            }
            else {
              unit = `G`
              extendedHtml = `
              <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
              <div style="font: 600 14px/20px ModernEra_Bold; color:#FA1464; padding:16px 0;"><svg  style="margin-right:10px" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.134 12.267L11.8007 2.66699C11.084 1.37533 10.0924 0.666992 9.00071 0.666992C7.90905 0.666992 6.91738 1.37533 6.20071 2.66699L0.86738 12.267C0.19238 13.492 0.11738 14.667 0.659047 15.592C1.20071 16.517 2.26738 17.0253 3.66738 17.0253H14.334C15.734 17.0253 16.8007 16.517 17.3424 15.592C17.884 14.667 17.809 13.4837 17.134 12.267ZM8.37571 6.50033C8.37571 6.15866 8.65905 5.87533 9.00071 5.87533C9.34238 5.87533 9.62571 6.15866 9.62571 6.50033V10.667C9.62571 11.0087 9.34238 11.292 9.00071 11.292C8.65905 11.292 8.37571 11.0087 8.37571 10.667V6.50033ZM9.59238 13.7587C9.55071 13.792 9.50905 13.8253 9.46738 13.8587C9.41738 13.892 9.36738 13.917 9.31738 13.9337C9.26738 13.9587 9.21738 13.9753 9.15905 13.9837C9.10905 13.992 9.05071 14.0003 9.00071 14.0003C8.95071 14.0003 8.89238 13.992 8.83405 13.9837C8.78405 13.9753 8.73405 13.9587 8.68405 13.9337C8.63405 13.917 8.58405 13.892 8.53405 13.8587C8.49238 13.8253 8.45071 13.792 8.40905 13.7587C8.25905 13.6003 8.16738 13.3837 8.16738 13.167C8.16738 12.9503 8.25905 12.7337 8.40905 12.5753C8.45071 12.542 8.49238 12.5087 8.53405 12.4753C8.58405 12.442 8.63405 12.417 8.68405 12.4003C8.73405 12.3753 8.78405 12.3587 8.83405 12.3503C8.94238 12.3253 9.05905 12.3253 9.15905 12.3503C9.21738 12.3587 9.26738 12.3753 9.31738 12.4003C9.36738 12.417 9.41738 12.442 9.46738 12.4753C9.50905 12.5087 9.55071 12.542 9.59238 12.5753C9.74238 12.7337 9.83405 12.9503 9.83405 13.167C9.83405 13.3837 9.74238 13.6003 9.59238 13.7587Z" fill="${this.exceptionColors[alerts.score_type]}"/>
            </svg>Harsh braking</div>
              <div>
                  <div style="min-width:145px;text-align:center;padding:10px 18px; background: rgba(250,20,100, 0.05);
          border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50;">
                      Violation: <span style="color:#FA1464"> ${this.service.convertToDutch(alerts.violation_rate)} G</span>
                  </div>
              </div>
          </div>
                `
            }
            var html =
              `<div>
                        <div style="display:flex">
                            <div style=" flex-basis: calc(50% - 10px);
                                  max-width: calc(50% - 10px); margin-right:20px;">
                                <div style="display:flex; align-items: center; padding-bottom:16px;">
                                    <div style="margin-right:10px"><img src="../../../../assets/images/mapgroup.svg"> </div>
                                    <div style="width:135px">
                                        <div style="font: 700 12px/18px ModernEra_Bold; color:#001E50"> ${alerts.vehicle.license_plate}</div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex-basis: calc(50% - 10px);
                            max-width: calc(50% - 10px);">
                                <div style="  padding:10px 9px; 
                            border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50; text-align:center">
                                    <div style="width:135px">
                                        <div style="font: 600 11px/18px ModernEra_Bold; color:#001E50;   white-space: nowrap;
                                      overflow: hidden;
                                      text-overflow: ellipsis;">
                                            </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div style="display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        align-items: center;
                        padding: 5px 0; padding-top:10px;">
                            <div style="margin-right:20px;">
                                <div style="display:flex; align-items: center;">
                                    <div style="margin-right:10px; width:17px; height:20px;"><img src="../../../../assets/images/location-tick.svg"> </div>
                                    <div style="width:135px">
                                        <div style="font: 700 12px/18px ModernEra_Bold; color:#001E50">${this.convertDateFormat(alerts.start_time)}</div>
                                        <div style="font: 600 11px/18px ModernEra_Bold; color:#001E50;   white-space: nowrap;
                                      overflow: hidden;
                                      text-overflow: ellipsis;"></div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div style="min-width:145px;text-align:center;  padding:10px 4px; background: rgba(0,240,156, 0.05);
                            border-radius: 8px; font: 600 12px/18px ModernEra_Bold; color:#001E50; text-align:center">
                                    Limit: <span style="color:#00F09C">${this.service.convertToDutch(alerts.limit)} ${unit} </span>
                                </div>
                            </div>
                        </div>
                    </div>
              ` + extendedHtml
            this.bindInfoWindow(this.alertMarkers[i], map, infowindow, html, oms);
          }
        }
      }

      var speedCluster = new MarkerClusterer(map, this.alertExceptionWise['speed'],
        {
          styles: [{
            height: 60,
            url: this.getGoogleClusterInlineSvg(this.exceptionColors['speed']),
            textColor: 'black',
             width: 60,
            textSize: 12
          }]
        });

      speedCluster.setMaxZoom(14);

      var idlingCluster = new MarkerClusterer(map, this.alertExceptionWise['idling'],
        {
          styles: [{
            height: 60,
            url: this.getGoogleClusterInlineSvg(this.exceptionColors['idling']),
            textColor: 'black',
             width: 60,
            textSize: 12
          }]
        });

      idlingCluster.setMaxZoom(14);


      var accCluster = new MarkerClusterer(map, this.alertExceptionWise['acceleration'],
        {
          styles: [{
            height: 60,
            url: this.getGoogleClusterInlineSvg(this.exceptionColors['acceleration']),
            textColor: 'black',
             width: 60,
            textSize: 12
          }]
        });

      accCluster.setMaxZoom(14);


      var corneringCluster = new MarkerClusterer(map, this.alertExceptionWise['cornering'],
        {
          styles: [{
            height: 60,
            url: this.getGoogleClusterInlineSvg(this.exceptionColors['cornering']),
            textColor: 'black',
             width: 60,
            textSize: 12
          }]
        });

      corneringCluster.setMaxZoom(14);


      var brakingCluster = new MarkerClusterer(map, this.alertExceptionWise['breaking'],
        {
          styles: [{
            height: 60,
            url: this.getGoogleClusterInlineSvg(this.exceptionColors['breaking']),
            textColor: 'black',
             width: 60,
            textSize: 12
          }]
        });

      brakingCluster.setMaxZoom(14);

      map.fitBounds(bounds);

      // google.maps.event.addDomListener(window, "resize", function () {
      //   google.maps.event.trigger(map, "resize");
      //   map.fitBounds(bounds);
      // });
    }
  }

   getGoogleClusterInlineSvg = function (color?) {
    var encoded = window.btoa(`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="${color}" stroke="white" stroke-width="4"/>
    </svg>
    `);

    return ('data:image/svg+xml;base64,' + encoded);
};

  bindInfoWindow(marker, map, infowindow, html, oms) {
    google.maps.event.addListener(marker, 'spider_click', function (e) {  // 'spider_click', not plain 'click'
      infowindow.setContent(html);
      infowindow.open(map, marker);
    });
    oms.addMarker(marker);

    google.maps.event.addListener(marker, 'mouseover', function () {
      infowindow.setContent(html);
      infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
      infowindow.close();
    });
  }

  convertToFixed(val) {
    val = String(val);
    return val.split('.')[0] + '.' + val.split('.')[1].substring(0, 3)
  }

  convertDateFormat(date) {
    if (date) {
      return moment(date).utc().format("hh:mm [-] DD/MM/yyyy")
    }
    else {
      return 'NA'
    }
  }
}