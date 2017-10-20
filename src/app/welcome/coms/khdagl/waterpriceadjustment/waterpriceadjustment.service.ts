import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class WaterpriceadjustmentService {

    constructor(private http: Http) {
    }

    getWaterQuality() {
        return this.http.get('../../../../../../data/home/khdagl/WaterQuality.json')
    }

    getLadderPrice() {
        return this.http.get('../../../../../../data/home/khdagl/LadderPrice.json')
    }
}
