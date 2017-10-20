import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {WriteoffService} from './writeoff.service';
import {ConfirmationService} from 'primeng/primeng';
import {GrowlService} from '../../../../shared/globalmsg.service';

@Component({
  selector: 'jhi-writeoff',
  templateUrl: './writeoff.component.html',
  styleUrls: ['./writeoff.component.css']
})
export class WriteoffComponent implements OnInit {
  @ViewChild('btnWriteoff') btnWriteoff: ElementRef;
  public appid = 'writeoff';
  public JKD: any = [];
  public selectedJKD: any = [];
  public JZJE: any = [];
  public selectedJZJE: any = [];


  constructor(public growlService: GrowlService, public confirmationService: ConfirmationService, public writeoffService: WriteoffService, public navtabService: NavtabService) {
  }

  ngOnInit() {
    this.btnWriteoff.nativeElement.disabled = true;
    this.writeoffService.getJZJE().subscribe((res) => {
      this.JZJE = res.json().data;
    });
  }

  cxJkd() {
    this.writeoffService.getJKD().subscribe((res) => {
      this.JKD = res.json().data;
    });
  }

  onVlueChange() {
    setTimeout(() => {
      this.doCheckBoth();
    }, 0);
  }

  doCheckBoth() {
    console.log(this.selectedJKD);
    let value1 = this.selectedJKD.reduce((total, val, i, arr) => {
      return total + val.je * 1;
    }, 0);
    let value2 = this.selectedJZJE.reduce((total, val, i, arr) => {
      return total + val.ssje * 1;
    }, 0);
    if (value1 === value2) {
      this.btnWriteoff.nativeElement.disabled = false;
    } else {
      this.btnWriteoff.nativeElement.disabled = true;

    }
  }

  confirm() {
    this.confirmationService.confirm({
      message: '确定核销解款单和结账单吗？',
      header: '确认核销',
      icon: 'fa fa-arrows-h',
      accept: () => {
        this.doWriteoff();
      },
      reject: () => {
        console.log('取消了删除操作！');
      }
    });
  }

  doWriteoff() {
    for (let i = 0; i < this.selectedJKD.length; i++) {
      for (let j = 0; j < this.JKD.length; j++) {
        if (this.selectedJKD[i] == this.JKD[j]) {
          this.JKD.splice(j, 1);
        }
      }
    }
    this.JKD = this.JKD.slice();
    this.selectedJKD = [];

    for (let i = 0; i < this.selectedJZJE.length; i++) {
      for (let j = 0; j < this.JZJE.length; j++) {
        if (this.selectedJZJE[i] == this.JZJE[j]) {
          this.JZJE.splice(j, 1);
        }
      }
    }
    this.JZJE = this.JZJE.slice();
    this.selectedJZJE = [];
    this.btnWriteoff.nativeElement.disabled = true;
    // 此处应该同步后台。。。
    this.growlService.showSuccess('成功', '核销成功');
  }
}
