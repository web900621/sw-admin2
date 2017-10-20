import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ChargeService {

    constructor(public http: Http) {
    }

    getdata() {
        return this.http.get('./data/reports/charge.json').map((response) => {
            return response.json().data;
        });
    }

}
