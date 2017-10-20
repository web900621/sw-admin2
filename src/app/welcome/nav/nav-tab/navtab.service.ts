import {Injectable} from '@angular/core';

@Injectable()
export class NavtabService {
  public selectId: string = '';
  public tags: any = [
    // {
    //   name: "阶梯人口申请",
    //   id: "ladderPeopleNum",
    //   imgNavSrc: "../../../../assets/imgs/nav/jtrksq.png"
    // }, {
    //   name: "水价调整",
    //   id: "waterPriceAdjustment",
    //   imgNavSrc: "../../../../assets/imgs/nav/sjtz.png"
    // }
  ];

  constructor() {
  }
  hasTag(app) {
    for (let i = 0; i < this.tags.length; i++) {
      if (app.id === this.tags[i].id) {
        return true;
      }
    }
    return false;
  }
  selectTag(app) {
    this.selectId = app.id;
  }
  addTag(app) {
    this.tags.push(app);
    this.selectId = app.id;
  }
  delTag(i) {
    this.tags.splice(i, 1);
    this.selectId = ' ';
  }
}
