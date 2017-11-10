import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HometplService {

  constructor(public http: Http) {
  }
  getdata() {
    return this.http.get('./data/portal/toll.json')
    // return this.http.get('./data/portal/master.json')
  }
}
