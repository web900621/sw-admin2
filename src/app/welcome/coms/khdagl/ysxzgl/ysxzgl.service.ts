import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class YsxzglService {

    constructor(private http: Http) {
    }

    getYsxzgl() {
        return this.http.get('../../../../../../data/home/khdagl/ysxzgl.json')
    }
}
