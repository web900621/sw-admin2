import {Component, OnInit} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {InvoicedumpedService} from './invoicedumped.service';
import {ConfirmationService} from 'primeng/primeng';

@Component({
  selector: 'jhi-invoicedumped',
  templateUrl: './invoicedumped.component.html',
  styleUrls: ['./invoicedumped.component.css']
})
export class InvoicedumpedComponent implements OnInit {
  public appid = 'invoicedumped';
  public invoiceDumpedResult: any = [];
  public invoiceDumpedyy: any;
  public selectedInvoiceDumpedyy: any;
  public invoiceDumpedDispaly: boolean = false;
  public invoiceDumpedrq: Date = new Date();
  public invoiceDumpeddyrq: Date;

  constructor(public confirmationService: ConfirmationService, public invoicedumpedService: InvoicedumpedService, public navtabService: NavtabService) {
  }

  ngOnInit() {
    this.invoiceDumpedyy = [
      {label: '作废原因1', value: '0101'},
      {label: '作废原因2', value: '0102'},
      {label: '作废原因3', value: '0103'}
    ];
  }

  confirm(i) {
    this.confirmationService.confirm({
      message: '确定作废此发票么？',
      header: '作废发票',
      icon: 'fa fa-trash',
      accept: () => {
        this.invoiceDumpedDispaly = false;
      },
      reject: () => {
        console.log('取消了作废操作！');
      }
    });
  }

  cxInvoicedDumped() {
    this.invoicedumpedService.getInvoiced().subscribe((res) => {
      this.invoiceDumpedResult = res.json().data;
    });
  }
}
