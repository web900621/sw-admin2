import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class PrepaidwatermeterfeeService {

  constructor(private http: Http) {
  }

  getPrepaidwatermeter() {
    return this.http.get('../../../../../../data/home/sfgl/Prepaidwatermeterfee.json')
  }
}
