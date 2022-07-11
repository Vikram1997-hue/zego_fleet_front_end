import { Injectable } from '@angular/core';
import { environment as ENV } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import * as moment from 'moment';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(
    private http: HttpClient,
    private localService: LocalService
  ) {
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${ENV.apiUrl}${path}`, { params: params }).pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${ENV.apiUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(`${ENV.apiUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${ENV.apiUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(`${ENV.apiUrl}${path}`).pipe(catchError(this.formatErrors));
  }

  postFile(body: Object = {}, path: string): Observable<any> {
    return this.http.post(`${ENV.apiUrl}${path}`, body).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  // HELPER FUNCTION

  convertFormat(data) {
    let obj = {};
    data.forEach(element => {
      if (element.score_type_count)
        obj[element.score_type] = element.score_type_count;
    });
    return obj;
  }

  calcGeneral(obj) {
    if (obj) {
      let speed = obj.speed ? obj.speed : 0;
      let acceleration = obj.acceleration ? obj.acceleration : 0;
      let decelerate = obj.breaking ? obj.breaking : 0;
      let general = (speed + acceleration + decelerate) / 3
      if (general) return general.toFixed(1);
      else return 0;
    } else {
      return 0;
    }
  }

  formatDateAlert(date) {
    if (date) {
      return moment(date).utc().format("HH:mm:ss [•] DD/MM/yyyy")
    }
    else {
      return 'NA'
    }
  }

  formatToCeil(val) {
    if (val) {
      if (typeof val == 'string') {
        val = parseFloat(val)
      }
      return Math.ceil(val);
    }
    else {
      return 0;
    }
  }

  convertHMS(value) {
    if (!value) {
      return 0;
    }
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours: any = Math.floor(sec / 3600); // get hours
    let minutes: any = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds: any = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours && hours < 10) { hours = "0" + hours; }
    if (minutes && minutes < 10) { minutes = "0" + minutes; }
    if (seconds && seconds < 10) { seconds = "0" + seconds; }
    let str: any = hours + ':' + minutes + ':' + seconds;
    str = str.split(':').filter((val) => (val !== '00' && val !== '0'));
    return str.join(':'); // Return is HH : MM : SS
  }

  convertHMSupdate(value) {
    if (!value) {
      return 0;
    }
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours: any = Math.floor(sec / 3600); // get hours
    let minutes: any = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds: any = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    if(hours !== '00'){
      return hours + ':' + minutes + ':' + seconds;
    }
    else{
      return  minutes + ':' + seconds;
    }
  }

  formatTime(date) {
    if (date) {
      return moment(date).utc().format("HH:mm:ss")
    }
    else {
      return 'NA'
    }
  }

  convertToHoursMin(value) {
    if (value) {
      value = parseFloat(value) * 60;
      let seconds = Number(value);
      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor(seconds % (3600 * 24) / 3600);
      var m = Math.floor(seconds % 3600 / 60);
      var dDisplay = d > 0 ? d + 'd ' : "";
      var hDisplay = h > 0 ? h + 'h ' : "";
      var mDisplay = m > 0 ? m + 'm ' : "";
      return dDisplay + hDisplay + mDisplay;
    }
    else {
      return '0m'
    }
  }

  convertToDutch(val) {
    if (val == '1001' || val == 1001 || val == '1001.0') {
      return "N/A"
    }
    else {
      if (val) {
        val = parseFloat(val);
        val = parseFloat(val.toFixed(1));
        return val.toLocaleString('de-DE')
      }
      else
        return '0';
    }
  }

  checkCustomDate(startDate, endDate) {
    let dateArray = [
      [moment().subtract(1, 'days').format('YYYY-MM-DD'), moment().subtract(1, 'days').format('YYYY-MM-DD')],
      [moment().subtract(6, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')],
      [moment().subtract(29, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')],
      [moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'), moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')],
      [moment().subtract(3, 'month').startOf('month').format('YYYY-MM-DD'), moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')],
      [moment().subtract(12, 'month').startOf('month').format('YYYY-MM-DD'), moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')]
    ]

    for (let i = 0; i < dateArray.length; i++) {
      if (dateArray[i][0] == startDate && dateArray[i][1] == endDate) {
        return i + 1;
      }
    }
  }

  detectBrowserName() {

    const agent = window.navigator.userAgent.toLowerCase()

    switch (true) {

      case agent.indexOf('edge') > -1:

        return 'edge';

      case agent.indexOf('opr') > -1 && !!(<any>window).opr:

        return 'opera';

      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:

        return 'chrome';

      case agent.indexOf('trident') > -1:

        return 'ie';

      case agent.indexOf('firefox') > -1:

        return 'firefox';

      case agent.indexOf('safari') > -1:

        return 'safari';

      default:

        return 'other';

    }
  }
  
  calcLastDate() {
    let date: any = this.localService.getItem("dateRange");
    let returnDate;
    if (date) {
      date = JSON.parse(date);
      let startDate = moment(date.startDate).format('YYYY-MM-DD');
      let endDate = moment(date.endDate).format('YYYY-MM-DD');
      let val = this.checkCustomDate(startDate, endDate)
      if (val == 1) {
        returnDate = [moment().subtract(2, 'days').format('YYYY-MM-DD'), moment().subtract(2, 'days').format('YYYY-MM-DD')]
      }
      else if (val == 4) {
        returnDate = [moment().subtract(2, 'month').startOf('month').format('YYYY-MM-DD'), moment().subtract(2, 'month').endOf('month').format('YYYY-MM-DD')]
      }
      else if (val == 5) {
        returnDate = [moment().subtract(6, 'month').startOf('month').format('YYYY-MM-DD'), moment().subtract(4, 'month').endOf('month').format('YYYY-MM-DD')]
      }
      else if (val == 6) {
        returnDate = [moment().subtract(24, 'month').startOf('month').format('YYYY-MM-DD'), moment().subtract(13, 'month').endOf('month').format('YYYY-MM-DD')]
      }
      else {
        let diffDate = moment.utc(endDate).diff(startDate, "days") + 1;
        returnDate = [moment(startDate).subtract(diffDate, 'days').format('YYYY-MM-DD'), moment(startDate).subtract(1, 'days').format('YYYY-MM-DD')]
      }
      return returnDate;
    }
  }
}