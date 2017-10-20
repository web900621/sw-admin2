import {Injectable} from '@angular/core';
import {Http} from'@angular/http';
@Injectable()
export class CounterchargesService {

    constructor(public http: Http) {
    }
    getUserPay() {
        return this.http.get('../../../../../../data/home/sfgl/Countercharges.json')
    }
}
