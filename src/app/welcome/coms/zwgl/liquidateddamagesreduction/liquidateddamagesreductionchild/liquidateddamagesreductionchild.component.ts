import {Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef} from '@angular/core';
import {GrowlService} from '../../../../../shared/globalmsg.service';

@Component({
  selector: 'jhi-liquidateddamagesreductionchild',
  templateUrl: './liquidateddamagesreductionchild.component.html',
  styleUrls: ['./liquidateddamagesreductionchild.component.css']
})
export class LiquidateddamagesreductionchildComponent implements OnInit {
  @Input() LiquidatedDamagesValue: number;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() reductionEnd: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('btnJM') btnJM: ElementRef;
  public ReductionReason: any = [];
  public selectedReductionReason: any;
  public ReductionReasonOther: string;
  public LiquidatedDamagesReductionValue: any;

  constructor(private growlService: GrowlService) {
  }

  ngOnInit() {
    this.ReductionReason = [
      {label: '减免理由1', value: '001'},
      {label: '减免理由2', value: '002'},
      {label: '减免理由3', value: '003'},
      {label: '其他', value: '004'}
    ];
    this.btnJM.nativeElement.disabled = true;
  }

  closeme(msg) {
    this.closeModal.emit(msg);
  }

  ReductionValueChange() {
    this.checkAll();
  }

  ReductionReasonChange() {
    this.checkAll();
  }

  checkAll() {
    if (this.LiquidatedDamagesReductionValue < 0 || this.LiquidatedDamagesReductionValue > this.LiquidatedDamagesValue) {
      this.growlService.showWarn('警告', '请输入合法的减免金额!');
      this.btnJM.nativeElement.disabled = true;
    } else if (this.selectedReductionReason) {
      this.btnJM.nativeElement.disabled = false;
    } else {
      this.btnJM.nativeElement.disabled = true;
    }
  }

  ReductionEnd() {
    this.reductionEnd.emit('success');
  }
}
