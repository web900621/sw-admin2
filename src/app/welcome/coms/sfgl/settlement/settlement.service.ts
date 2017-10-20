import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class SettlementService {

  constructor(private http: Http) {
  }

  getSFXX() {
    return this.http.get('../../../../../../data/home/sfgl/Settlement.json')
  }
}
