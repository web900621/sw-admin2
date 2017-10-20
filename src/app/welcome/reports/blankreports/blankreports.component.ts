import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'jhi-blankreports',
    templateUrl: './blankreports.component.html',
    styleUrls: ['./blankreports.component.css']
})
export class BlankreportsComponent implements OnInit {
    @Input() titleCase;
    @Input() reportsWidth: any = 0;
    @Input() index: any;
    @Output() widthChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() typeChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() delReport: EventEmitter<any> = new EventEmitter<any>();
    public chooseType: any = [];
    public selectedType: any;
    public chooseWidth: any = [];
    public selectedWidth: any;
    public editReportsIsShow = false;

    constructor() {
    }

    ngOnInit() {
        this.chooseType = [
            {label: '报表类型', value: '0'},
            {label: '回收率', value: '5'},
            {label: '全年抄表率', value: '6'},
            {label: '缴费方式统计', value: '7'},
            {label: '用水性质分类', value: '8'},
            {label: '收费统计', value: '9'},
            {label: '收费项目金额统计', value: '10'}
        ];
        this.chooseWidth = [
            {label: '宽度', value: '0'},
            {label: '25%', value: '1'},
            {label: '50%', value: '2'},
            {label: '75%', value: '3'},
            {label: '100%', value: '4'}
        ];
        this.selectedType = '0';
        this.selectedWidth = 0;
    }

    onWidthChange() {
        let msg = {'index': this.index, 'changeWidth': this.selectedWidth};
        this.widthChange.emit(msg);
    }

    onTypeChange() {
        let msg;
        for (let i = 0; i < this.chooseType.length; i++) {
            if (this.selectedType == this.chooseType[i].value) {
                msg = this.chooseType[i];
                msg.index = this.index;
            }
        }
        this.typeChange.emit(msg);
    }
    confirmReports() {
        this.titleCase = 0;
        this.editReportsIsShow = true;
    }

    editReports() {
        this.editReportsIsShow = false;
        this.titleCase = 1;
    }

    delMe() {
        this.delReport.emit(this.index);
    }
}
