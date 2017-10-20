import {Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'jhi-counterchargeschild',
    templateUrl: './counterchargeschild.component.html',
    styleUrls: ['./counterchargeschild.component.css']
})
export class CounterchargeschildComponent implements OnInit {
    @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() userPayEnd: EventEmitter<any> = new EventEmitter<any>();
    @Input() counterchargesYSJE: any;
    @ViewChild('btnJZ') btnJZ: ElementRef;
    public counterchargesSSJE;
    public counterchargesZL;
    public selectedOptions: any = ['ChangeTheDeposit'];

    constructor() {
    }

    ngOnInit() {
        this.btnJZ.nativeElement.disabled = true;
    }

    UserPayPaidAmountChange() {
        this.counterchargesZL = this.counterchargesSSJE - this.counterchargesYSJE;
        if (this.counterchargesZL >= 0) {
            this.btnJZ.nativeElement.disabled = false;
        } else {
            this.btnJZ.nativeElement.disabled = true;
        }
    }

    closeme(msg) {
        this.closeModal.emit(msg);
    }

    UserPayEnd() {
        this.userPayEnd.emit('success');
        // this.userPayEnd.emit('error');
        this.closeModal.emit('close');
    }
}
