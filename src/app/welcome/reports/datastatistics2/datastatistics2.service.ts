import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Datastatistics2Service {

    constructor(public http: Http) {
    }

    getdata() {
        return this.http.get('./data/reports/datastatistics2.json').map((response) => {
            return response.json().data;
        });
    }
}
