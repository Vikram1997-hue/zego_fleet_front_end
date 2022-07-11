import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { environment as ENV } from '../../../../../environments/environment';
import * as moment from 'moment';
import { RouteConfig } from 'src/app/config/route-config';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

declare var google;

@Component({
  selector: 'app-mapview-dashboard',
  templateUrl: './mapview-dashboard.component.html',
  styleUrls: ['./mapview-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapviewDashboardComponent implements OnInit {
  public isCollapsed = true;

  map;
  selectedOrgID: any;
  searchString: string;

  searchCategory: string;
  searchVehicle: string;

  vehicleCategoryData: any = [];
  vehicleList: any = [];

  selectedVehicleCategory: any = 'all';
  selectedVehicle: any = 'all';
  bounds = new google.maps.LatLngBounds();

  vehicleMarkerList: any = {};
  socket;
  colorsVariable: any;
  customeRange='Custom';
  setDate='Set Date';
  cancelDate='Cancel';
  filterCalledMap = new Subject();

  constructor(private cd: ChangeDetectorRef,
    public service: MainService,
    private router: Router,
    private localService: LocalService) { }
  ngOnInit(): void {
    this.filterCalledMap = new Subject();

    setTimeout(() => {
      this.initMap()
    }, 20)

    this.filterCalledMap.pipe(
      debounceTime(500),
    ).subscribe(
      value => {
        if(value){
          this.selectedOrgID = this.localService.getItem("selectedOrgs")
          if (this.selectedOrgID) {
            this.selectedOrgID = JSON.parse(this.selectedOrgID);
          }
          this.resetToLastState();
          this.filterApply();
        }
      }
    )


    this.getSocketToken()

    this.localService.getFilter().subscribe((val)=>{
      if(val  && this.router.url.split('?')[0] == RouteConfig.mapview.url){
        this.filterCalledMap.next(true)
      }
    })

    this.selectedOrgID = this.localService.getItem("selectedOrgs")
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }
    if (this.selectedOrgID) {
      this.resetToLastState();
      this.updatePageData()
    }
  }

  getSocketToken() {
    this.service.get(`validateSocket`).pipe().subscribe(response => {
      if (response.access_token) {
        let url = ENV.socketUrl + '?token=' + response.access_token
        this.socket = new WebSocket(url);

        let _this = this;
        this.socket.addEventListener('message', function (event) {
          
          _this.dataParse(event.data)
        });
        this.socket.addEventListener('close', function (event) {
          // console.log('The connection has been closed');
        });
      }
    }, (error) => {

    })

  }


  getVehicleCategory() {
    this.searchCategory = '';
    this.service.get(`vehicles/category-by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
      if (response.data && response.data.length) {
        this.vehicleCategoryData = response.data;
        this.selectedVehicleCategory = 'all';
      }
    }, (error) => {

    })
  }

  getVehicles(categoryId?) {
    if ((categoryId && categoryId == 'all') || categoryId == undefined) {
      categoryId = ''
    }
    this.searchVehicle = '';
    this.service.get(`vehicles/by-organisation?organisation=${JSON.stringify(this.selectedOrgID)}`).pipe().subscribe(response => {
      if (response.data && response.data.length) {
        this.vehicleList = response.data;
        this.selectedVehicle = 'all';
      }
    }, (error) => {

    })
  }

  initMap() {
    var neitherLandCordi = new google.maps.LatLng(AppConfig.netherlandLat, AppConfig.netherlandLong);
    this.map = new google.maps.Map(document.getElementById('map'), {
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
    this.map.setOptions({ styles: AppConfig.mapStyle });
  }

  createMarker(data) {
    var infowindow = new google.maps.InfoWindow({
      content: ''
    });
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    if (!data.license_plate || data.license_plate == 'null') {
      data.license_plate = 'NA'
    }
    data.driver_name = data.driver_name ? data.driver_name : "NA";
    data.road_type = data.road_type ? data.road_type : "NA";
    let html = `
    <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
    <div style="padding:10px; width:145px; text-align:center; background: rgba(71, 79, 90, 0.05);
    border-radius: 8px; font: 600 12px/18px ModernEra; color:#474F5A; margin-right:10px">
        License: <span style="color:#474F5A; font: 600 14px/18px ModernEra; margin-left:6px">${data.license_plate}</span>
    </div>
    `
    let extendedHtml = `
    <div>
        <div style="padding:10px; width:185px; text-align:center; background: rgba(71, 79, 90, 0.05);
    border-radius: 8px; font: 600 12px/18px ModernEra; color:#474F5A">
        Speed: <span style="color:#474F5A; font: 600 14px/18px ModernEra; margin-left:6px">${this.service.convertToDutch(data.current_speed)} kmph</span>
    </div>
    </div>`
    var latLng = new google.maps.LatLng(data.current_lat, data.current_long);
    if (data.pre_lat == data.current_lat && data.pre_long == data.current_long || data.idle_time > 120) {
      html = html + `</div>`;
      this.vehicleMarkerList[data.vehicle_id] = new google.maps.Marker({
        position: latLng,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: color,
          fillOpacity: 1,
          strokeColor: color,
          scale: 6
        },
        map: this.map,
      });
    }
    else {
      html = html + extendedHtml + `</div>`;
      this.vehicleMarkerList[data.vehicle_id] = new google.maps.Marker({
        position: latLng,
        icon: {
          path: 'M21.134 4.5C21.5189 3.83333 22.4811 3.83333 22.866 4.5L31.134 18.8205C31.5189 19.4872 31.0378 20.3205 30.268 20.3205H13.7321C12.9622 20.3205 12.4811 19.4872 12.866 18.8205L21.134 4.5Z',
          fillColor: color,
          fillOpacity: 1,
          strokeColor: color,
          scale: 1
        },
        map: this.map,
      });
    }

    this.bindInfoWindow(this.vehicleMarkerList[data.vehicle_id], this.map, infowindow, html, data.vehicle_id);
    this.bounds.extend(latLng);
    this.map.fitBounds(this.bounds);

  }


  updateMarker(data) {
    var latlng = new google.maps.LatLng(data.current_lat, data.current_long);
    let color = this.vehicleMarkerList[data.vehicle_id].icon.fillColor;

    var infowindow = new google.maps.InfoWindow({
      content: ''
    });
    if (!data.license_plate || data.license_plate == 'null') {
      data.license_plate = 'NA'
    }
    data.driver_name = data.driver_name ? data.driver_name : "NA";
    data.road_type = data.road_type ? data.road_type : "NA";

    let html = `
    <div style="display:flex; flex-wrap:wrap; justify-content: space-between; align-items:center; padding:5px 0;">
    <div style="padding:10px; width:145px; text-align:center; background: rgba(71, 79, 90, 0.05);
    border-radius: 8px; font: 600 12px/18px ModernEra; color:#474F5A; margin-right:10px">
        License: <span style="color:#474F5A; font: 600 14px/18px ModernEra; margin-left:6px">${data.license_plate}</span>
    </div>
    `
    let extendedHtml = `
    <div>
        <div style="padding:10px; width:185px; text-align:center; background: rgba(71, 79, 90, 0.05);
    border-radius: 8px; font: 600 12px/18px ModernEra; color:#474F5A">
    Speed: <span style="color:#474F5A; font: 600 14px/18px ModernEra; margin-left:6px">${this.service.convertToDutch(data.current_speed)} kmph</span>
    </div>
    </div>`
    if ((data.pre_lat == data.current_lat && data.pre_long == data.current_long || data.idle_time > 120)) {
      html = html + `</div>`;
      this.vehicleMarkerList[data.vehicle_id].setIcon({
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: color,
        fillOpacity: 1,
        strokeColor: color,
        scale: 6
      })
      this.vehicleMarkerList[data.vehicle_id].setPosition(latlng);
    }
    else {
      html = html + extendedHtml + `</div>`;
      this.vehicleMarkerList[data.vehicle_id].setIcon({
        path: 'M21.134 4.5C21.5189 3.83333 22.4811 3.83333 22.866 4.5L31.134 18.8205C31.5189 19.4872 31.0378 20.3205 30.268 20.3205H13.7321C12.9622 20.3205 12.4811 19.4872 12.866 18.8205L21.134 4.5Z',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: color,
        scale: 1
      })
      this.animatedMove(this.vehicleMarkerList[data.vehicle_id], .5, this.vehicleMarkerList[data.vehicle_id].position, latlng);
    }
    this.bindInfoWindow(this.vehicleMarkerList[data.vehicle_id], this.map, infowindow, html, data.vehicle_id);
    // this.bounds.extend(latlng);
    // this.map.fitBounds(this.bounds);
  }


  listernerArray: any = {};
  bindInfoWindow(marker, map, infowindow, html, vehicleId) {
    if (this.listernerArray[vehicleId]) {
      google.maps.event.removeListener(this.listernerArray[vehicleId]);
    }

    this.listernerArray[vehicleId] = google.maps.event.addListener(marker, 'mouseover', function () {
      infowindow.setContent(html);
      infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
      infowindow.close();
    });

    google.maps.event.addListener(marker, 'dblclick', function () {
      map.setZoom(12);
      map.setCenter(marker.getPosition());
    });
  }


  resetToLastState() {
    let category = this.localService.getItem("category")
    let vehicle = this.localService.getItem("vehicle")
    category && category !== 'all' ? this.selectedVehicleCategory = JSON.parse(category) : this.selectedVehicleCategory = 'all';
    vehicle && vehicle !== 'all' ? this.selectedVehicle = vehicle : this.selectedVehicle = 'all';
  }

  filterApply() {
    this.localService.setItem("category", this.selectedVehicleCategory)
    this.localService.setItem("vehicle", this.selectedVehicle)
    this.clearOverlays();
    this.updatePageData();
  }

  clearOverlays() {
    let key = Object.keys(this.vehicleMarkerList)
    for (var i = 0; i < key.length; i++) {
      this.vehicleMarkerList[key[i]].setMap(null);
    }
    this.vehicleMarkerList = {};
  }

  waitForSocketConnection(socket, callback) {
    let _this = this;
    setTimeout(
      function () {
        if (socket && socket.readyState === 1) {
          // console.log("Connection is made")
          if (callback != null) {
            callback();
          }
        } else {
          // console.log("wait for connection...")
          _this.waitForSocketConnection(socket, callback);
        }

      }, 5); // wait 5 milisecond for the connection...
  }
  interval;
  updatePageData() {
    let _this = this;
    let category = [];
    let vehicle = [];
    if ((this.selectedVehicle && this.selectedVehicle !== 'all')) {
      vehicle = [this.selectedVehicle]
    }
    else {
      if ((this.selectedVehicleCategory && this.selectedVehicleCategory !== 'all')) {
        category = [this.selectedVehicleCategory]
      }
    }

    // this.getDashboardData();
    let timestamp = '';

    if (this.map) {
      this.map.setCenter(new google.maps.LatLng(AppConfig.netherlandLat, AppConfig.netherlandLong))
      this.map.setZoom(8)
    }

    clearInterval(this.interval)
    let val = 0;
    // this.listernerArray = {};
    if (this.selectedOrgID.length) {
      // Wait until the state of the socket is not ready and send the message when it is...
      this.interval = setInterval(() => {
        this.waitForSocketConnection(this.socket, function () {
          let data = {
            "action": "liveFeed",
            "orgId": _this.selectedOrgID,
            "vehicleCategory": category,
            "licensePlate": vehicle,
            "message": "testing",
            "timestamp": timestamp
          }
          if (val == 0) {
            _this.clearOverlays();
          }
          val = val + 1;
          // console.log("message sent!!!", data);
          timestamp = moment().utc().format("yyyy-M-D hh:mm:ss");
          _this.socket.send(JSON.stringify(data))

        });
      }, 2000)
    }

  }

  // dashBoardData: any = {}
  // isLoadingshimmer = false;
  // getDashboardData() {
  //   this.isLoadingshimmer = true;
  //   let querryParams = this.createQuerryparams()
  //   this.service.get(`zego/dashboard/activity-count-v2?${querryParams}`).pipe().subscribe(response => {
  //     if (response.data) {
  //       this.dashBoardData = response.data;
  //       this.dashBoardData["safeScoreChange"] = parseFloat(
  //         this.dashBoardData.pre_safe_score
  //       ) !== 1001 && parseFloat(
  //         this.dashBoardData.pre_safe_score
  //       ) !== 0 && parseFloat(
  //         this.dashBoardData.safe_score
  //       ) !== 1001
  //         ? ((parseFloat(this.dashBoardData.safe_score) -
  //           parseFloat(this.dashBoardData.pre_safe_score)) /
  //           parseFloat(this.dashBoardData.pre_safe_score)) *
  //         100
  //         : 0;

  //       this.dashBoardData["driverChange"] = parseFloat(
  //         this.dashBoardData.pre_total_drivers
  //       ) !== 1001 && parseFloat(
  //         this.dashBoardData.pre_total_drivers
  //       ) !== 0 && parseFloat(
  //         this.dashBoardData.total_drivers
  //       ) !== 1001
  //         ? ((parseFloat(this.dashBoardData.total_drivers) -
  //           parseFloat(this.dashBoardData.pre_total_drivers)) /
  //           parseFloat(this.dashBoardData.pre_total_drivers)) *
  //         100
  //         : 0;

  //       this.dashBoardData["tripChange"] = parseFloat(
  //         this.dashBoardData.pre_total_trips
  //       ) !== 1001 && parseFloat(
  //         this.dashBoardData.pre_total_trips
  //       ) !== 0 && parseFloat(
  //         this.dashBoardData.total_trips
  //       ) !== 1001
  //         ? ((parseFloat(this.dashBoardData.total_trips) -
  //           parseFloat(this.dashBoardData.pre_total_trips)) /
  //           parseFloat(this.dashBoardData.pre_total_trips)) *
  //         100
  //         : 0;

  //       this.dashBoardData["vehicleChange"] = parseFloat(
  //         this.dashBoardData.pre_total_drivers
  //       ) !== 1001 && parseFloat(
  //         this.dashBoardData.pre_total_drivers
  //       ) !== 0 && parseFloat(
  //         this.dashBoardData.total_vehicles
  //       ) !== 1001
  //         ? ((parseFloat(this.dashBoardData.total_vehicles) -
  //           parseFloat(this.dashBoardData.pre_total_vehicles)) /
  //           parseFloat(this.dashBoardData.pre_total_vehicles)) *
  //         100
  //         : 0;

  //       this.dashBoardData["exceptionChange"] = parseFloat(
  //         this.dashBoardData.pre_exception
  //       ) !== 1001 && parseFloat(
  //         this.dashBoardData.pre_exception
  //       ) !== 0 && parseFloat(
  //         this.dashBoardData.exception
  //       ) !== 1001
  //         ? ((parseFloat(this.dashBoardData.exception) -
  //           parseFloat(this.dashBoardData.pre_exception)) /
  //           parseFloat(this.dashBoardData.pre_exception)) *
  //         100
  //         : 0;

  //       this.dashBoardData["distanceChange"] = parseFloat(
  //         this.dashBoardData.pre_total_distance
  //       ) !== 1001 && parseFloat(
  //         this.dashBoardData.pre_total_distance
  //       ) !== 0 && parseFloat(
  //         this.dashBoardData.total_distance
  //       ) !== 1001
  //         ? ((parseFloat(this.dashBoardData.total_distance) -
  //           parseFloat(this.dashBoardData.pre_total_distance)) /
  //           parseFloat(this.dashBoardData.pre_total_distance)) *
  //         100
  //         : 0;
  //     }
  //     this.isLoadingshimmer = false;
  //     this.cd.detectChanges();
  //   }, (error) => {
  //     this.dashBoardData = {};
  //     this.isLoadingshimmer = false;
  //     this.cd.detectChanges();
  //   })
  // }

  // createQuerryparams() {
  //   let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;
  //   querryParams = querryParams + `&from_date=${moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD')}`
  //   querryParams = querryParams + `&to_date=${moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')}`
  //   querryParams = querryParams + `&custom_filter=false&filter_value=4`
  //   return querryParams;
  // }


  dataParse(event) {
    event = JSON.parse(event)
    if (event.action && event.action == 'liveFeed' && event.data) {
      let data = event.data;
      for (let i = 0; i < data.length; i++) {
        if (this.interval) {
          let key = Object.keys(this.vehicleMarkerList)
          // if(data[i]['license_plate']=='VBB-92-F')
          // console.log(data[i])
          if (key.includes(String(data[i]['vehicle_id']))) {
            this.updateMarker(data[i])
            // console.log(data[i]);
            
          }
          else {
            this.createMarker(data[i]);
            // console.log(data[i]);
          }
        }
        else {
          break;
        }
      }
    }
  }

  resetFilter() {
    this.selectedVehicleCategory = 'all';
    this.selectedVehicle = 'all';
    this.filterApply();
  }

  animatedMove(marker, t, current, moveto) {
    var deltalat = (moveto.lat() - current.lat()) / 100;
    var deltalng = (moveto.lng() - current.lng()) / 100;

    var delay = 10 * t;
    for (var i = 0; i < 100; i++) {
      (function (ind) {
        setTimeout(
          function () {
            var lat = marker.position.lat();
            var lng = marker.position.lng();
            lat += deltalat;
            lng += deltalng;
            let latlng = new google.maps.LatLng(lat, lng);
            marker.setPosition(latlng);
          }, delay * ind
        );
      })(i)
    }

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.webSocket.removeListener();
    clearInterval(this.interval);
    if (this.socket)
      this.socket.removeEventListener('message', function (event) {
        console.log('removed')
      });
  }

}