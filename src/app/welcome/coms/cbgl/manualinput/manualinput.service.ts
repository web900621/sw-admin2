import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ManualinputService {

    constructor(private http: Http) {
    }

    getManualinputBooks() {
        return this.http.get('../../../../../../data/home/cbgl/ManualinputBooks.json')
    }
}
