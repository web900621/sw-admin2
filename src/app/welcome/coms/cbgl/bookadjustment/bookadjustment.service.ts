import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class BookadjustmentService {

    constructor(public http: Http) {
    }

    getCurrentBook() {
        return this.http.get('../../../../../../data/home/cbgl/bookadjustment/currentBook.json')
    }

    getaimsBook() {
        return this.http.get('../../../../../../data/home/cbgl/bookadjustment/aimsBook.json')
    }
}
