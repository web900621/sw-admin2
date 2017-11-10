import {Component, OnInit} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {ManualinputService} from './manualinput.service';
import {ConfirmationService} from 'primeng/primeng';

@Component({
    selector: 'jhi-manualinput',
    templateUrl: './manualinput.component.html',
    styleUrls: ['./manualinput.component.css']
})
export class ManualinputComponent implements OnInit {
    public appid: string = 'manualinput';
    public wc: any = [];
    public ycwkz: any = [];
    public ykz: any = [];
    public totlecbs: number = 0;
    public ycbs: number = 0;

    public bookNums: any = [];
    public selectedBookNum: any;
    public meterReaders: any = [];
    public selectedmeterReader: any;
    public meterTime: any = [];
    public selectedMeterTime: any;

    constructor(public confirmationService: ConfirmationService, public navtabService: NavtabService, public manualinputService: ManualinputService) {
    }

    ngOnInit() {
        this.manualinputService.getManualinputBooks().subscribe((res) => {
            this.wc = res.json().data;
            // this.ycwkz = res.json().data.slice(2, -3);
            // this.ykz = res.json().data.slice(4, -8);
        });
        this.totlecbs = 300;
        this.ycbs = 144;

        this.bookNums = [
            {label: '101010', value: '101010'},
            {label: '101010', value: '101010'},
            {label: '101010', value: '101010'}
        ];
        this.meterReaders = [
            {label: '张三', value: '01'},
            {label: '李四', value: '02'},
            {label: '王五', value: '03'}
        ];
        this.meterTime = [
            {label: '12', value: '12'},
            {label: '11', value: '11'},
            {label: '10', value: '10'},
            {label: '9', value: '9'},
            {label: '8', value: '8'},
            {label: '7', value: '7'}
        ];
    }

    confirm() {
        this.confirmationService.confirm({
            message: '确定修改并保存么？',
            header: '确认保存',
            icon: 'fa fa-save',
            accept: () => {
            },
            reject: () => {
                console.log('取消了保存操作！');
            }
        });
    }

}
