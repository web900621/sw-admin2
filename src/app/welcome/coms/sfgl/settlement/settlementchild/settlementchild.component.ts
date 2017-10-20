import {Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'jhi-settlementchild',
    templateUrl: './settlementchild.component.html',
    styleUrls: ['./settlementchild.component.css']
})
export class SettlementchildComponent implements OnInit {
    @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() payEnd: EventEmitter<any> = new EventEmitter<any>();
    @Input() JZXX: any = [];

    constructor() {
    }

    ngOnInit() {
    }

    closeme(msg) {
        this.closeModal.emit(msg);
    }

    payDone() {
        this.payEnd.emit('success');
    }
}
