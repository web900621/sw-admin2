import {Component, OnInit, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {SettlementService} from './settlement.service';
import {SettlementchildComponent} from './settlementchild/settlementchild.component';
import {GrowlService} from '../../../../shared/globalmsg.service';

@Component({
    selector: 'jhi-settlement',
    templateUrl: './settlement.component.html',
    styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {
    @ViewChild('JZDmroom', {read: ViewContainerRef}) JZDmroom: ViewContainerRef;

    public appid = 'settlement';
    public settlementSFRQ: Date;
    public isCheckout: any;
    public selectedIsCheckout: any;
    public SFXX: any = [];
    public childComponent: any;
    public summary: any = { // 模拟订单汇总消息
        revenue: {
            name: '实收',
            num: 1,
            value: 100
        },
        normal: {
            name: '正常',
            num: 2,
            value: 200
        },
        repeat: {
            name: '重笔',
            num: 3,
            value: 300
        },
        difficulties: {
            name: '疑难',
            num: 4,
            value: 40
        },
        prestored: {
            name: '预存',
            num: 5,
            value: 10
        },
        refunds: {
            name: '退款',
            num: 6,
            value: 10
        }
    };
    public JZXX: any = [];
    @ViewChild('btnSK')
    btnSK: ElementRef;

    constructor(private growlService: GrowlService, private settlementCfr: ComponentFactoryResolver, public navtabService: NavtabService, public settlementService: SettlementService) {
    }

    ngOnInit() {
        this.settlementSFRQ = new Date();
        this.isCheckout = [
            {label: '是', value: 'yes'},
            {label: '否', value: 'no'}
        ];
        this.selectedIsCheckout = 'no';
        this.btnSK.nativeElement.disabled = true;
    }

    cxSFXX() {
        this.settlementService.getSFXX().subscribe((res) => {
            this.SFXX = res.json().data;
            this.summaryJZXX();
            if (res.json().data) {
                this.btnSK.nativeElement.disabled = false;
            } else {
                this.btnSK.nativeElement.disabled = true;
            }
        });
    }

    summaryJZXX() {
        for (let i = 0; i < this.SFXX.length; i++) {
            // 这里根据订单信息汇总
        }
        this.JZXX = [];
        this.JZXX.push(this.summary.revenue);
        this.JZXX.push(this.summary.normal);
        this.JZXX.push(this.summary.repeat);
        this.JZXX.push(this.summary.difficulties);
        this.JZXX.push(this.summary.prestored);
        this.JZXX.push(this.summary.refunds);
    }

    addSettlementChildComponent() {
        let com = this.settlementCfr.resolveComponentFactory(SettlementchildComponent);
        this.childComponent = this.JZDmroom.createComponent(com);
        this.childComponent.instance.JZXX = this.JZXX;
        this.childComponent.instance.closeModal.subscribe((msg) => {
            if (msg === 'close') {
                this.clearJZDmroom();
            }
        });
        this.childComponent.instance.payEnd.subscribe((msg) => {
            if (msg == 'success') {
                this.growlService.showSuccess('成功', '收费成功！');
                this.clearJZDmroom();
                this.SFXX = [];
            } else if (msg == 'error') {
                this.growlService.showError('失败', '支付失败！');
                this.clearJZDmroom();
            }
        });

    }

    clearJZDmroom() {
        this.JZDmroom.clear();
    }
}
