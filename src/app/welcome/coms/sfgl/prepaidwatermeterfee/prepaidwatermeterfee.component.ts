import {Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ElementRef} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {PrepaidwatermeterfeeService} from './prepaidwatermeterfee.service';
import {PrepaidwatermeterfeechildComponent} from './prepaidwatermeterfeechild/prepaidwatermeterfeechild.component';
import {GrowlService} from '../../../../shared/globalmsg.service';

@Component({
  selector: 'jhi-prepaidwatermeterfee',
  templateUrl: './prepaidwatermeterfee.component.html',
  styleUrls: ['./prepaidwatermeterfee.component.css']
})
export class PrepaidwatermeterfeeComponent implements OnInit {
  @ViewChild('YFFSBDmroom', {read: ViewContainerRef}) YFFSBDmroom: ViewContainerRef;

  public appid = 'prepaidwatermeterfee';
  public YFFSB: any = [];
  public selectedYFFSB: any;
  public childComponent: any;

  constructor(private growlService: GrowlService, private prepaidwatermeterfeeCfr: ComponentFactoryResolver, public navtabService: NavtabService, public prepaidwatermeterfeeService: PrepaidwatermeterfeeService) {
  }

  ngOnInit() {
  }

  cxPrepaidWaterMeterFee() {
    this.prepaidwatermeterfeeService.getPrepaidwatermeter().subscribe((res) => {
      this.YFFSB = res.json().data;
    });
  }

  onYFFSBSelect() {
    console.log(this.selectedYFFSB);
    this.addPrepaidWaterMeterChildComponent();
  }

  addPrepaidWaterMeterChildComponent() {
    let com = this.prepaidwatermeterfeeCfr.resolveComponentFactory(PrepaidwatermeterfeechildComponent);
    this.childComponent = this.YFFSBDmroom.createComponent(com);
    // 此处应该查询到对应水价(或者表数据中有水价的隐藏字段)将水价传入给子组件
    this.childComponent.instance.prepaidwatermeterfeeSJ = 5.0; // 模拟 传入 5元水价
    this.childComponent.instance.closeModal.subscribe((msg) => {
      if (msg === 'close') {
        this.clearYFFSBDmroom();
      }
    });
    this.childComponent.instance.userPayEnd.subscribe((msg) => {
      if (msg == 'success') {
        this.growlService.showSuccess('成功', '收费成功！');
      } else if (msg == 'error') {
        this.growlService.showError('失败', '支付失败！');
      }
    });
  }

  clearYFFSBDmroom() {
    this.YFFSBDmroom.clear();
  }
}
