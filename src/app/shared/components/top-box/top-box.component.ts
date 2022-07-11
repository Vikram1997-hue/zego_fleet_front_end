import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { LocalService } from "src/app/services/local.service";
import { MainService } from "src/app/services/main.service";
import { RouteConfig } from "src/app/config/route-config";
import { NavigationEnd, Router } from "@angular/router";
import { AppConfig } from "src/app/config/app-config";
import { debounceTime } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";

console.log("LONG LIVE THE KNOT" + window.location)

@Component({
  selector: "app-top-box",
  templateUrl: "./top-box.component.html",
  styleUrls: ["./top-box.component.scss"],
})
export class TopBoxComponent implements OnInit {
  dashBoardData: any = {};
  isCollapsed: boolean = true;
  selectedOrgID: any;
  isLoadingshimmer: boolean = false;
  selectedDriver: any = "all";
  selectedException: any = "all";

  customeRange = "Custom";
  setDate = "Set Date";
  cancelDate = "Cancel";

  exceptions: any = [
    { name: "Speeding", value: "speed" },
    { name: "Harsh braking", value: "breaking" },
    { name: "Harsh Acceleration", value: "acceleration" },
    { name: "Harsh Cornering", value: "cornering" },
    { name: "Idiling", value: "idling" },
  ];

  selected: any = {
    startDate: moment().subtract(6, "days").set("hours", 0).set("minutes", 0),
    endDate: moment().set("hours", 23).set("minutes", 59),
  };
  selectedShow: any = {
    startDate: moment().subtract(6, "days").set("hours", 0).set("minutes", 0),
    endDate: moment().set("hours", 23).set("minutes", 59),
  };
  eyeIconMessage = {
    fleetScore: "",
    trips: "",
    kilometers: "",
    vehicles: "",
    harshevent: "",
  };

  ranges: any = AppConfig.momentRange;
  dayWeek;
  month;

  alwaysShowCalendars: boolean = true;
  showRangeLabelOnInput: boolean = true;
  keepCalendarOpeningWithRange: boolean = true;
  invalidDates = [];

  tooltips = [
    { date: moment(), text: "Today is just unselectable" },
    { date: moment().add(2, "days"), text: "Yeeeees!!!" },
  ];

  maxDate: any = moment();

  constructor(
    private translate: TranslateService,
    private localService: LocalService,
    private service: MainService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const lang = this.localService.getItem("currentlang") || "en";
    this.ranges = AppConfig.changelang(lang).range;
    this.customeRange = AppConfig.changelang(lang).customLabel;
    this.setDate = AppConfig.changelang(lang).apply;
    this.cancelDate = AppConfig.changelang(lang).cancel;
    this.dayWeek = AppConfig.changelang(lang).dayWeek;
    this.month = AppConfig.changelang(lang).month;
    this.changeIconlang(lang);

    if (lang == "en") {
      this.exceptions = [
        { name: "Speeding", value: "speed" },
        { name: "Harsh braking", value: "breaking" },
        { name: "Harsh Acceleration", value: "acceleration" },
        { name: "Harsh Cornering", value: "cornering" },
        { name: "Idiling", value: "idling" },
      ];
    } else {
      this.exceptions = [
        { name: "Te hard rijden", value: "speed" },
        { name: "Te Hard remmen", value: "breaking" },
        { name: "Te hard optrekken", value: "acceleration" },
        { name: "Te hard door de bocht", value: "cornering" },
        { name: "Stationair draaien", value: "idling" },
      ];
    }
    this.localService.getLang().subscribe((val) => {
      this.resetToLastState();
      const lang = this.localService.getItem("currentlang") || "en";
      // console.log(lang)
      this.ranges = AppConfig.changelang(lang).range;
      this.customeRange = AppConfig.changelang(lang).customLabel;
      this.setDate = AppConfig.changelang(lang).apply;
      this.cancelDate = AppConfig.changelang(lang).cancel;
      this.dayWeek = AppConfig.changelang(lang).dayWeek;
      this.month = AppConfig.changelang(lang).month;
      if (lang == "en") {
        this.exceptions = [
          { name: "Speeding", value: "speed" },
          { name: "Harsh braking", value: "breaking" },
          { name: "Harsh Acceleration", value: "acceleration" },
          { name: "Harsh Cornering", value: "cornering" },
          { name: "Idiling", value: "idling" },
        ];
      } else {
        this.exceptions = [
          { name: "Te hard rijden", value: "speed" },
          { name: "Te Hard remmen", value: "breaking" },
          { name: "Te hard optrekken", value: "acceleration" },
          { name: "Te hard door de bocht", value: "cornering" },
          { name: "Stationair draaien", value: "idling" },
        ];
      }
      this.changeIconlang(lang);
    });
    this.checkRouteChange();

    this.selectedOrgID = this.localService.getItem("selectedOrgs");
    if (this.selectedOrgID) {
      this.selectedOrgID = JSON.parse(this.selectedOrgID);
    }

    if (this.selectedOrgID) {
      this.getVehicleCategory();
      this.getVehicles();
      this.updatePageData();
    }
    this.localService
      .watchOrgData()
      .pipe(debounceTime(200))
      .subscribe((resp) => {
        if (resp) {
          // console.log('')
          let orgId: any = this.localService.getItem("selectedOrgs");
          if (orgId) {
            orgId = JSON.parse(orgId);
          }
          let isEqual = true;
          if (
            this.selectedOrgID &&
            this.selectedOrgID.length &&
            orgId &&
            orgId.length
          ) {
            isEqual =
              orgId.length === this.selectedOrgID.length &&
              orgId.every((val) => this.selectedOrgID.includes(val));
          } else {
            isEqual = false;
          }
          if (!isEqual) {
            this.selectedOrgID = [...orgId];
            this.getVehicleCategory();
            this.getVehicles();
            this.updatePageData();
            // this.resetToLastState();
            // this.updatePageData();
          }
        }
      });
  }
  changeIconlang(lang){
    // this.translate.get("iconFleetScore").subscribe((text: string) => {
    //   this.eyeIconMessage.fleetScore = text;
    // });
    // this.translate.get("iconVehciles").subscribe((text: string) => {
    //   this.eyeIconMessage.vehicles = text;
    // });
    // this.translate.get("iconKilometers").subscribe((text: string) => {
    //   this.eyeIconMessage.kilometers = text;
    // });
    // this.translate.get("iconTrips").subscribe((text: string) => {
    //   this.eyeIconMessage.trips = text;
    // });
    // this.translate.get("iconException").subscribe((text: string) => {
    //   this.eyeIconMessage.harshevent = text;
    // });
    if(lang =='en'){
      
      this.eyeIconMessage.fleetScore = 'This card show the overall fleet score in the date range you have set from filter, or of 30 days by default.';
      this.eyeIconMessage.vehicles = 'This card show the total number of vehicles in the fleet you have selected.';
      this.eyeIconMessage.kilometers = 'This card show the total kilometres driven by the fleet you have selected in the date range you have set from filter, or of 30 days by default.';
      this.eyeIconMessage.trips = 'This card show the total number of trips of the fleet you have selected in the date range you have set from filter, or of 30 days by default.';
      this.eyeIconMessage.harshevent = 'This card show the total number of exceptions/harsh events done by the fleet you have selected in the date range you have set from filter, or of 30 days by default.';
    }
    else if(lang =='nl'){
      this.eyeIconMessage.fleetScore = 'De totale wagenparkscore in de geselecteerde periode. Geen periode geselecteerd? Dan pakken we standaard 30 dagen.';
      this.eyeIconMessage.vehicles = 'Het totaal aantal voertuigen in het door jou geselecteerde wagenpark.';
      this.eyeIconMessage.kilometers = 'Het totaal aantal gereden kilometers van het door jou geselecteerde wagenpark binnen de geselecteerde periode. Geen periode geselecteerd? Dan pakken we standaard 30 dagen.';
      this.eyeIconMessage.trips = 'Het totaal aantal ritten van het door jou geselecteerde wagenpark binnen de geselecteerde periode. Geen periode geselecteerd? Dan pakken we standaard 30 dagen.';
      this.eyeIconMessage.harshevent = 'Het totaal aantal situaties met onveilig rijgedag van het door jou geselecteerde wagenpark binnen de geselecteerde periode. Geen periode geselecteerd? Dan pakken we standaard 30 dagen.';
    }
 
  }

  vehicleCategoryData: any = [];
  vehicleList: any = [];
  searchCategory: string = "";
  searchVehicle: string = "";

  getVehicleCategory() {
    this.searchCategory = "";
    this.service
      .get(
        `vehicles/category-by-organisation?organisation=${JSON.stringify(
          this.selectedOrgID
        )}`
      )
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.length) {
            this.vehicleCategoryData = response.data;
          }
        },
        (error) => {}
      );
  }

  getVehicles(categoryId?) {
    if ((categoryId && categoryId == "all") || categoryId == undefined) {
      categoryId = "";
    }
    this.searchVehicle = "";
    this.service
      .get(
        `vehicles/by-organisation?organisation=${JSON.stringify(
          this.selectedOrgID
        )}`
      )
      .pipe()
      .subscribe(
        (response) => {
          if (response.data && response.data.length) {
            this.vehicleList = response.data;
          }
          // this.getUpdatedStats()
        },
        (error) => {}
      );
  }

  routeList: any = [
    "/main/dashboard",
    "/main/vehicle",
    "/main/trip",
    "/main/exceptions",
    "/main/mapview",
  ];
  showFilter: number = 0;
  checkRouteChange() {
    for (let i = 0; i < this.routeList.length; i++) {
      if (this.route.url.includes(this.routeList[i])) {
        this.showFilter = i;
        break;
      }
    }

    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCollapsed = true;
        let url = event.url.split("?")[0];
        for (let i = 0; i < this.routeList.length; i++) {
          if (url.includes(this.routeList[i])) {
            this.showFilter = i;
            let categoryId = this.localService.getItem("category");
            let vehicleId = this.localService.getItem("vehicle");
            let driverId = this.localService.getItem("driver");
            let exception = this.localService.getItem("exception");
            if (
              (categoryId && categoryId !== "all") ||
              (vehicleId && vehicleId !== "all") ||
              (driverId && driverId !== "all") ||
              (exception && exception !== "all") ||
              this.dashBoardData["error"] == true
            ) {
              this.updatePageData();
            }
            break;
          }
        }
      }
    });
  }

  isInvalidDate = (m) => {
    return this.invalidDates.some((d) => d.isSame(m, "day"));
  };

  isTooltipDate = (m) => {
    const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, "day"));
    if (tooltip) {
      return tooltip.text;
    } else {
      return false;
    }
  };

  rangeClicked(label) {
    // console.log('[rangeClicked] range is : ', label);
  }

  datesUpdated(range) {
    //  console.log('[datesUpdated] range is : ', range);
  }

  updatePageData() {
    this.localService.setFilter();
    if (this.showFilter == 0) {
      this.resetToLastStateDashboard();
      this.getDashboardData(false);
    } else if (this.showFilter == 1) {
      this.resetToLastStateVehicle();
      this.getDashboardData(
        false,
        this.selectedVehicleCategory,
        this.selectedVehicle
      );
    } else if (this.showFilter == 2) {
      this.resetToLastStateTrip();
      this.getDashboardData(
        false,
        this.selectedVehicleCategory,
        this.selectedVehicle,
        this.selectedDriver
      );
    } else if (this.showFilter == 3) {
      this.resetToLastStateException();
      this.getDashboardData(
        false,
        this.selectedVehicleCategory,
        this.selectedVehicle,
        this.selectedDriver,
        this.selectedException
      );
    } else if (this.showFilter == 4) {
      this.resetToLastStateMap();
      this.getDashboardData(false);
    }
  }

  dashBoardPre: any = {};
  getDashboardData(
    secondCall?,
    categoryId?,
    vehicleId?,
    driverId?,
    exception?
  ) {
    if (!secondCall) {
      this.isLoadingshimmer = true;
      this.dashBoardData = {};
      this.dashBoardPre = {};
    }

    let querryParams = this.createQuerryparams(
      categoryId,
      vehicleId,
      driverId,
      exception,
      secondCall
    );
    this.service
      .get(`zego/dashboard/activity-count-v2?${querryParams}`)
      .pipe()
      .subscribe(
        (response) => {
          if (response.data) {
            if (!secondCall) {
              this.dashBoardData = response.data;
              this.getDashboardData(
                true,
                categoryId,
                vehicleId,
                driverId,
                exception
              );
            } else {
              this.dashBoardPre = response.data;
              this.calcChange();
            }
          }
        },
        (error) => {
          this.totalBoxes=0;
          if (!secondCall) {
            this.dashBoardData = {};
            this.isLoadingshimmer = false;
            this.dashBoardData["error"] = true;
          } else {
            this.dashBoardPre = {};
            this.localService.setdashboardData(this.dashBoardData);
          }
        }
      );
  }

  calcChange() {
    this.dashBoardData["safeScoreChange"] =
      parseFloat(this.dashBoardPre.safe_score) !== 1001 &&
      parseFloat(this.dashBoardPre.safe_score) !== 0 &&
      parseFloat(this.dashBoardData.safe_score) !== 1001
        ? ((parseFloat(this.dashBoardData.safe_score) -
            parseFloat(this.dashBoardPre.safe_score)) /
            parseFloat(this.dashBoardPre.safe_score)) *
          100
        : 0;

    // this.dashBoardData["driverChange"] = parseFloat(
    //   this.dashBoardPre.total_drivers
    // ) !== 1001 && parseFloat(
    //   this.dashBoardPre.total_drivers
    // ) !== 0 && parseFloat(
    //   this.dashBoardData.total_drivers
    // ) !== 1001
    //   ? ((parseFloat(this.dashBoardData.total_drivers) -
    //     parseFloat(this.dashBoardPre.total_drivers)) /
    //     parseFloat(this.dashBoardPre.total_drivers)) *
    //   100
    //   : 0;

    this.dashBoardData["tripChange"] =
      parseFloat(this.dashBoardPre.total_trips) !== 1001 &&
      parseFloat(this.dashBoardPre.total_trips) !== 0 &&
      parseFloat(this.dashBoardData.total_trips) !== 1001
        ? ((parseFloat(this.dashBoardData.total_trips) -
            parseFloat(this.dashBoardPre.total_trips)) /
            parseFloat(this.dashBoardPre.total_trips)) *
          100
        : 0;

    this.dashBoardData["vehicleChange"] =
      parseFloat(this.dashBoardPre.total_vehicles) !== 1001 &&
      parseFloat(this.dashBoardPre.total_vehicles) !== 0 &&
      parseFloat(this.dashBoardData.total_vehicles) !== 1001
        ? ((parseFloat(this.dashBoardData.total_vehicles) -
            parseFloat(this.dashBoardPre.total_vehicles)) /
            parseFloat(this.dashBoardPre.total_vehicles)) *
          100
        : 0;

    this.dashBoardData["exceptionChange"] =
      parseFloat(this.dashBoardPre.exception) !== 1001 &&
      parseFloat(this.dashBoardPre.exception) !== 0 &&
      parseFloat(this.dashBoardData.exception) !== 1001
        ? ((parseFloat(this.dashBoardData.exception) -
            parseFloat(this.dashBoardPre.exception)) /
            parseFloat(this.dashBoardPre.exception)) *
          100
        : 0;

    this.dashBoardData["speedChange"] =
      parseFloat(this.dashBoardPre.speed_score) !== 1001 &&
      parseFloat(this.dashBoardPre.speed_score) !== 0 &&
      parseFloat(this.dashBoardData.speed_score) !== 1001
        ? ((parseFloat(this.dashBoardData.speed_score) -
            parseFloat(this.dashBoardPre.speed_score)) /
            parseFloat(this.dashBoardPre.speed_score)) *
          100
        : 0;

    this.dashBoardData["idilingChange"] =
      parseFloat(this.dashBoardPre.idling_score) !== 1001 &&
      parseFloat(this.dashBoardPre.idling_score) !== 0 &&
      parseFloat(this.dashBoardData.idling_score) !== 1001
        ? ((parseFloat(this.dashBoardData.idling_score) -
            parseFloat(this.dashBoardPre.idling_score)) /
            parseFloat(this.dashBoardPre.idling_score)) *
          100
        : 0;

    this.dashBoardData["accChange"] =
      parseFloat(this.dashBoardPre.acceleration_score) !== 1001 &&
      parseFloat(this.dashBoardPre.acceleration_score) !== 0 &&
      parseFloat(this.dashBoardData.acceleration_score) !== 1001
        ? ((parseFloat(this.dashBoardData.acceleration_score) -
            parseFloat(this.dashBoardPre.acceleration_score)) /
            parseFloat(this.dashBoardPre.acceleration_score)) *
          100
        : 0;

    this.dashBoardData["brakingChange"] =
      parseFloat(this.dashBoardPre.breaking_score) !== 1001 &&
      parseFloat(this.dashBoardPre.breaking_score) !== 0 &&
      parseFloat(this.dashBoardData.breaking_score) !== 1001
        ? ((parseFloat(this.dashBoardData.breaking_score) -
            parseFloat(this.dashBoardPre.breaking_score)) /
            parseFloat(this.dashBoardPre.breaking_score)) *
          100
        : 0;

    this.dashBoardData["cornerChange"] =
      parseFloat(this.dashBoardPre.cornering_score) !== 1001 &&
      parseFloat(this.dashBoardPre.cornering_score) !== 0 &&
      parseFloat(this.dashBoardData.cornering_score) !== 1001
        ? ((parseFloat(this.dashBoardData.cornering_score) -
            parseFloat(this.dashBoardPre.cornering_score)) /
            parseFloat(this.dashBoardPre.cornering_score)) *
          100
        : 0;
    this.dashBoardData["distanceChange"] =
      parseFloat(this.dashBoardPre.total_distance) !== 1001 &&
      parseFloat(this.dashBoardPre.total_distance) !== 0 &&
      parseFloat(this.dashBoardData.total_distance) !== 1001
        ? ((parseFloat(this.dashBoardData.total_distance) -
            parseFloat(this.dashBoardPre.total_distance)) /
            parseFloat(this.dashBoardPre.total_distance)) *
          100
        : 0;
    this.localService.setdashboardData(this.dashBoardData);
    this.totalBoxes = 5;
    if (Number(this.dashBoardData["safe_score"]) == 0) {
      this.totalBoxes -= 1;
    }
    if (Number(this.dashBoardData["total_trips"]) == 0) {
      this.totalBoxes -= 1;
    }

    if (Number(this.dashBoardData["total_distance"]) == 0) {
      this.totalBoxes -= 1;
    }
    if (Number(this.dashBoardData["total_vehicles"]) == 0) {
      this.totalBoxes -= 1;
    }
    if (Number(this.dashBoardData["exception"]) == 0) {
      this.totalBoxes -= 1;
    }
    this.isLoadingshimmer = false;
    // console.log(this.totalBoxes);
  }
  totalBoxes = 5;
  compareBoxes = 0;

  createQuerryparams(
    categoryId?,
    vehicleId?,
    driverId?,
    exception?,
    secondCall?
  ) {
    let querryParams = `organisation=${JSON.stringify(this.selectedOrgID)}`;

    if (!secondCall) {
      let val = this.service.checkCustomDate(
        moment(this.selected.startDate).format("YYYY-MM-DD"),
        moment(this.selected.endDate).format("YYYY-MM-DD")
      );
      if (val == undefined) {
        querryParams = querryParams + `&custom_filter=true&filter_value=''`;
      } else {
        if (
          (categoryId && categoryId !== "all") ||
          (vehicleId && vehicleId !== "all") ||
          (driverId && driverId !== "all") ||
          (exception && exception !== "all")
        ) {
          querryParams = querryParams + `&custom_filter=true&filter_value=''`;
        } else {
          querryParams =
            querryParams + `&custom_filter=false&filter_value=${val}`;
        }
      }
    }

    if (categoryId && categoryId !== "all") {
      let arr = [categoryId];
      querryParams = querryParams + `&vehicle_category=${JSON.stringify(arr)}`;
    }
    if (vehicleId && vehicleId !== "all") {
      let arr = [vehicleId];
      querryParams = querryParams + `&vehicle=${JSON.stringify(arr)}`;
    }
    if (driverId && driverId !== "all") {
      let arr = [driverId];
      querryParams = querryParams + `&driver=${JSON.stringify(arr)}`;
    }
    if (exception && exception !== "all") {
      let arr = [exception];
      querryParams = querryParams + `&exception_type=${exception}`;
    }

    if (!secondCall) {
      querryParams =
        querryParams +
        `&from_date=${moment(this.selected.startDate).format("YYYY-MM-DD")}`;
      querryParams =
        querryParams +
        `&to_date=${moment(this.selected.endDate).format("YYYY-MM-DD")}`;
    } else {
      let date = this.service.calcLastDate();
      querryParams = querryParams + `&from_date=${date[0]}`;
      querryParams = querryParams + `&to_date=${date[1]}`;
    }

    return querryParams;
  }

  changeState() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      if (this.showFilter == 0) {
        this.resetToLastStateDashboard();
      } else if (this.showFilter == 1) {
        this.resetToLastStateVehicle();
      } else if (this.showFilter == 2) {
        this.resetToLastStateTrip();
      } else if (this.showFilter == 3) {
        this.resetToLastStateException();
      } else if (this.showFilter == 4) {
        this.resetToLastStateMap();
      }
    }
  }

  // Dashboard data
  resetToLastStateDashboard() {
    let date: any = this.localService.getItem("dateRange");
    if (date) {
      date = JSON.parse(date);
      this.selected = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate),
      };
      this.selectedShow = this.selected;
    } else {
      this.selectedShow = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
      this.selected = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
    }
  }

  resetFilter() {
    this.selectedShow = {
      startDate: moment()
        .subtract(1, "month")
        .startOf("month")
        .set("hours", 0)
        .set("minutes", 0),
      endDate: moment()
        .subtract(1, "month")
        .endOf("month")
        .set("hours", 23)
        .set("minutes", 59),
    };
    this.filterApply();
  }

  resetToLastState() {
    let date: any = this.localService.getItem("dateRange");
    if (date) {
      date = JSON.parse(date);
      this.selected = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate),
      };
      this.selectedShow = this.selected;
    } else {
      this.selectedShow = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
      this.selected = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
    }
  }

  // vehicle data
  selectedVehicleCategory: any = "all";
  selectedVehicle: any = "all";
  resetToLastStateVehicle() {
    let category = this.localService.getItem("category");
    let vehicle = this.localService.getItem("vehicle");
    let date: any = this.localService.getItem("dateRange");
    if (date) {
      date = JSON.parse(date);
      this.selected = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate),
      };
      this.selectedShow = this.selected;
    } else {
      this.selectedShow = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
      this.selected = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
    }
    category && category !== "all"
      ? (this.selectedVehicleCategory = JSON.parse(category))
      : (this.selectedVehicleCategory = "all");
    vehicle && vehicle !== "all"
      ? (this.selectedVehicle = JSON.parse(vehicle))
      : (this.selectedVehicle = "all");
  }

  resetFilterVehicle() {
    this.selectedVehicleCategory = "all";
    this.selectedVehicle = "all";
    this.selectedShow = {
      startDate: moment()
        .subtract(1, "month")
        .startOf("month")
        .set("hours", 0)
        .set("minutes", 0),
      endDate: moment()
        .subtract(1, "month")
        .endOf("month")
        .set("hours", 23)
        .set("minutes", 59),
    };
    this.filterApply();
  }

  // trip data

  resetToLastStateTrip() {
    let category = this.localService.getItem("category");
    let vehicle = this.localService.getItem("vehicle");
    let driver = this.localService.getItem("driver");
    let date: any = this.localService.getItem("dateRange");
    if (date) {
      date = JSON.parse(date);
      this.selected = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate),
      };
      this.selectedShow = this.selected;
    } else {
      this.selectedShow = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
      this.selected = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
    }
    category && category !== "all"
      ? (this.selectedVehicleCategory = JSON.parse(category))
      : (this.selectedVehicleCategory = "all");
    vehicle && vehicle !== "all"
      ? (this.selectedVehicle = JSON.parse(vehicle))
      : (this.selectedVehicle = "all");
    driver && driver !== "all"
      ? (this.selectedDriver = JSON.parse(driver))
      : (this.selectedDriver = "all");
  }

  resetFilterTrip() {
    this.selectedVehicleCategory = "all";
    this.selectedDriver = "all";
    this.selectedVehicle = "all";
    this.selectedShow = {
      startDate: moment()
        .subtract(1, "month")
        .startOf("month")
        .set("hours", 0)
        .set("minutes", 0),
      endDate: moment()
        .subtract(1, "month")
        .endOf("month")
        .set("hours", 23)
        .set("minutes", 59),
    };
    this.filterApply();
  }

  // exception data

  resetToLastStateException() {
    let category = this.localService.getItem("category");
    let vehicle = this.localService.getItem("vehicle");
    let driver = this.localService.getItem("driver");
    let date: any = this.localService.getItem("dateRange");
    let exception = this.localService.getItem("exception");
    if (date) {
      date = JSON.parse(date);
      this.selected = {
        startDate: moment(date.startDate),
        endDate: moment(date.endDate),
      };
      this.selectedShow = this.selected;
    } else {
      this.selectedShow = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
      this.selected = {
        startDate: moment()
          .subtract(1, "month")
          .startOf("month")
          .set("hours", 0)
          .set("minutes", 0),
        endDate: moment()
          .subtract(1, "month")
          .endOf("month")
          .set("hours", 23)
          .set("minutes", 59),
      };
    }
    category && category !== "all"
      ? (this.selectedVehicleCategory = JSON.parse(category))
      : (this.selectedVehicleCategory = "all");
    vehicle && vehicle !== "all"
      ? (this.selectedVehicle = JSON.parse(vehicle))
      : (this.selectedVehicle = "all");
    driver && driver !== "all"
      ? (this.selectedDriver = JSON.parse(driver))
      : (this.selectedDriver = "all");
    exception && exception !== "all"
      ? (this.selectedException = exception)
      : (this.selectedException = "all");
  }

  resetFilterException() {
    this.selectedVehicleCategory = "all";
    this.selectedDriver = "all";
    this.selectedVehicle = "all";
    this.selectedException = "all";
    this.selectedShow = {
      startDate: moment()
        .subtract(1, "month")
        .startOf("month")
        .set("hours", 0)
        .set("minutes", 0),
      endDate: moment()
        .subtract(1, "month")
        .endOf("month")
        .set("hours", 23)
        .set("minutes", 59),
    };
    this.filterApply();
  }

  // Map data

  resetToLastStateMap() {
    let category = this.localService.getItem("mapCategory");
    let vehicle = this.localService.getItem("mapVehicle");
    category && category !== "all"
      ? (this.selectedVehicleCategory = JSON.parse(category))
      : (this.selectedVehicleCategory = "all");
    vehicle && vehicle !== "all"
      ? (this.selectedVehicle = vehicle)
      : (this.selectedVehicle = "all");
  }

  resetFilterMap() {
    this.selectedVehicleCategory = "all";
    this.selectedVehicle = "all";
    this.filterApply();
  }

  filterApply() {
    if (this.showFilter == 4) {
      this.localService.setItem("mapCategory", this.selectedVehicleCategory);
      this.localService.setItem("mapVehicle", this.selectedVehicle);
    } else {
      this.localService.setItem("category", this.selectedVehicleCategory);
      this.localService.setItem("vehicle", this.selectedVehicle);
    }
    this.localService.setItem("driver", this.selectedDriver);
    this.localService.setItem("exception", this.selectedException);
    this.localService.setItem("dateRange", JSON.stringify(this.selectedShow));
    this.selected = this.selectedShow;
    this.changeState();
    this.updatePageData();
  }
}
