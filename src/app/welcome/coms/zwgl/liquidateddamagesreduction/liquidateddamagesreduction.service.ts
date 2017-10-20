import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class LiquidateddamagesreductionService {

  constructor(private http: Http) {
  }

  getWYJ() {
    return this.http.get('../../../../../../data/home/zwgl/Liquidateddamagesreduction.json')
  }
}
