import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class JtrksqService {

  constructor(private http: Http) {
  }

  getJtrks() {
    return this.http.get('../../../../../../data/home/khdagl/jtrks.json')
  }

  getUserJtrks() {
    return this.http.get('../../../../../../data/home/khdagl/userJtrks.json')
  }

}
