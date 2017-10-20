import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DiyreportsService {

    constructor(public http: Http) {
    }

    getDefaultPortlets() {
        return this.http.get('./data/diyreports/defaultportlets.json').map((response) => {
            return response.json().data;
        });
    }

    initPortlets() {
        return this.http.get('./data/portal/finance.json').map((response) => {
            return response.json();
        });
    }
}
