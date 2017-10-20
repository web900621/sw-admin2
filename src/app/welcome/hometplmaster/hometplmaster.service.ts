import {Injectable} from '@angular/core';
import {Http,} from '@angular/http';
@Injectable()
export class HometplmasterService {

  constructor(public http: Http) {
  }
  getTop10() {
    return this.http.get('./data/home/top10.json')
  }
  // 获取JXMapJson
  getMapJX() {
    return this.http.get('./data/home/MapJX.json')
  }
  // 获取Map数据 包括水司概况和水司详情
  getMapData(Y, M) {
    // return this.http.post('./data/home/ssgk.json', JSON.stringify({year: Y, month: M})).map((response) => {
    return this.http.get('./data/home/ssgk.json')
  }
}
