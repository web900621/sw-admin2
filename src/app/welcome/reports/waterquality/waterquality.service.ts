import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WaterqualityService {

    constructor(public http: Http) {
    }
    getdata() {
        return this.http.get('./data/reports/waterquality.json').map((response) => {
            return response.json().data;
        });
    }
}
