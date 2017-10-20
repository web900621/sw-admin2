import {Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {NotsalesadjustmentService} from './notsalesadjustment.service';
import {NotsalesadjustmentchildComponent} from './notsalesadjustmentchild/notsalesadjustmentchild.component';
import {GrowlService} from '../../../../shared/globalmsg.service';

@Component({
  selector: 'jhi-notsalesadjustment',
  templateUrl: './notsalesadjustment.component.html',
  styleUrls: ['./notsalesadjustment.component.css']
})
export class NotsalesadjustmentComponent implements OnInit {
  @ViewChild('adjustmentDmroom', {read: ViewContainerRef}) adjustmentDmroom: ViewContainerRef;
  public appid = 'notsalesadjustment';
  public accountingMonth: any = [];
  public accountingYear: any = [];
  public selectedAccountingYear: any;
  public selectedAccountingMonth: any;
  public notsalesadjustmentData: any = [];
  public selectedNotsalesadjustmentData: any;
  public loading: boolean;
  public childComponent: any;

  constructor(private growlService: GrowlService, private adjustmentCfr: ComponentFactoryResolver, public notsalesadjustmentService: NotsalesadjustmentService, public navtabService: NavtabService) {
  }

  ngOnInit() {
    this.accountingMonth = [
      {label: '12', value: '12'},
      {label: '11', value: '11'},
      {label: '10', value: '10'},
      {label: '9', value: '9'},
      {label: '8', value: '8'},
      {label: '7', value: '7'},
      {label: '6', value: '6'}
    ];
    this.accountingYear = [
      {label: '2017', value: '2017'},
      {label: '2016', value: '2016'},
      {label: '2015', value: '2015'}
    ];
  }

  cxNotsales() {
    this.loading = true;
    this.notsalesadjustmentService.getAccount().subscribe((res) => {
      this.notsalesadjustmentData = res.json().data;
      this.loading = false;
    });
  }

  onNotsalesadjustmentDataRowSelect(data) {
    this.addChildComponent(data);
  }

  addChildComponent(data) {
    let com = this.adjustmentCfr.resolveComponentFactory(NotsalesadjustmentchildComponent);
    this.childComponent = this.adjustmentDmroom.createComponent(com);
    this.childComponent.instance.billData = data;
    this.childComponent.instance.closeModal.subscribe((msg) => {
      if (msg === 'close') {
        this.clearReductionDmroom();
      }
    });
    this.childComponent.instance.adjustmentEnd.subscribe((msg) => {
      if (msg === 'success') {
        this.clearReductionDmroom();
        this.growlService.showSuccess('成功', '调整成功！');
      }
    });
  }

  clearReductionDmroom() {
    this.adjustmentDmroom.clear();
  }

}
