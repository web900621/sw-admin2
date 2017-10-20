import {Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {CounterchargesService} from './countercharges.service';
import {CounterchargeschildComponent} from './counterchargeschild/counterchargeschild.component';
import {GrowlService} from '../../../../shared/globalmsg.service';

@Component({
    selector: 'jhi-countercharges',
    templateUrl: './countercharges.component.html',
    styleUrls: ['./countercharges.component.css']
})
export class CounterchargesComponent implements OnInit {
    @ViewChild('userPayDmroom', {read: ViewContainerRef}) userPayDmroom: ViewContainerRef;
    public childComponent: any;
    public appid = 'countercharges';
    public UserPay: any = [];
    public selectedUserPay: any;

    constructor(public growlService: GrowlService, private counterchargesCfr: ComponentFactoryResolver, public navtabService: NavtabService, public counterchargesService: CounterchargesService) {
    }

    ngOnInit() {
    }

    cxUserPay() {
        this.counterchargesService.getUserPay().subscribe((res) => {
            this.UserPay = res.json().data;
        });
    }

    onUserPayRowSelect() {
        let money = this.selectedUserPay.qfje * 1 + this.selectedUserPay.yswyj * 1;
        this.addCounterchargesChildComponent(money);
    }

    addCounterchargesChildComponent(money) {
        let com = this.counterchargesCfr.resolveComponentFactory(CounterchargeschildComponent);
        this.childComponent = this.userPayDmroom.createComponent(com);
        this.childComponent.instance.counterchargesYSJE = money;
        this.childComponent.instance.closeModal.subscribe((msg) => {
            if (msg === 'close') {
                this.clearUserPayDmroom();
            }
        });
        this.childComponent.instance.userPayEnd.subscribe((msg) => {
            if (msg == 'success') {
                for (let i = 0; i < this.UserPay.length; i++) {
                    if (this.UserPay[i].yyhbm == this.selectedUserPay.yyhbm && this.UserPay[i].lcdbm == this.selectedUserPay.lcdbm) {
                        this.UserPay.splice(i, 1);
                    }
                }
                this.growlService.showSuccess('成功', '收费成功！');
                this.UserPay = this.UserPay.slice();
            } else if (msg == 'error') {
                console.log('pay error');
            }
        });
    }

    clearUserPayDmroom() {
        this.userPayDmroom.clear();
    }
}
