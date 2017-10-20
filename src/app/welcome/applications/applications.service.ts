import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ApplicationsService {

  constructor(public http: Http) {
  }

  // 获取所有App信息
  getAllApps() {
    return this.http.get('./data/home/allApps.json')
  }
  // 获取用户apps 根据使用频率
  getAppsByFreq() {
    return this.http.get('./data/home/freqApps.json')
  }
}
