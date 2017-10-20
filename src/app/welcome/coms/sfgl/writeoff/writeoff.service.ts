import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class WriteoffService {

    constructor(public http: Http) {
    }

    getJKD() {
        return this.http.get('../../../../../../data/home/sfgl/Writeoff.json')
    }
    getJZJE() {
        return this.http.get('../../../../../../data/home/sfgl/Writeoffjzje.json')
    }
}
