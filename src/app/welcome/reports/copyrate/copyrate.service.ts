import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CopyrateService {

    constructor(public http: Http) {
    }
    getdata() {
        return this.http.get('./data/reports/copyrate.json').map((response) => {
            return response.json().data;
        });
    }
}
