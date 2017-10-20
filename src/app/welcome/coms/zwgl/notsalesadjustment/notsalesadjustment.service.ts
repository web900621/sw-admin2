import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class NotsalesadjustmentService {

    constructor(private http: Http) {
    }

    getAccount() {
        return this.http.get('../../../../../../data/home/zwgl/Notsalesadjustment.json')
    }

}
