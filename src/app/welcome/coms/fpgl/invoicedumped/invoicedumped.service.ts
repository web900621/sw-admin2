import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class InvoicedumpedService {

  constructor(public http: Http) {
  }

  getInvoiced() {
    return this.http.get('../../../../../../data/home/fpgl/Invoicedumped.json')
  }
}
