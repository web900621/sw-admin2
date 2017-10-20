import {Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'jhi-prepaidwatermeterfeechild',
    templateUrl: './prepaidwatermeterfeechild.component.html',
    styleUrls: ['./prepaidwatermeterfeechild.component.css']
})
export class PrepaidwatermeterfeechildComponent implements OnInit {
    @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() userPayEnd: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('btnJZ') btnJZ: ElementRef;
    @Input() prepaidwatermeterfeeSJ;
    public prepaidwatermeterfeeSSJE;
    public prepaidwatermeterfeeYSSL;
    public selectedOptions: any = ['ChangeTheDeposit'];
    constructor() {
    }

    ngOnInit() {
        this.btnJZ.nativeElement.disabled = true;
    }

    PaidAmountChange() {
        this.prepaidwatermeterfeeYSSL = (this.prepaidwatermeterfeeSSJE * 1 / this.prepaidwatermeterfeeSJ * 1).toFixed(2);
        if (this.prepaidwatermeterfeeYSSL > 0 && this.prepaidwatermeterfeeSSJE > 0) {
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
