import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class CygnService {

  constructor(public http: Http) {
  }

  // 获取常用功能
  getCygn() {
    return this.http.get('./data/home/cygn.json')
  }
}
