import {Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {LiquidateddamagesreductionService} from './liquidateddamagesreduction.service';
import {LiquidateddamagesreductionchildComponent} from './liquidateddamagesreductionchild/liquidateddamagesreductionchild.component';
import {GrowlService} from '../../../../shared/globalmsg.service';

@Component({
    selector: 'jhi-liquidateddamagesreduction',
    templateUrl: './liquidateddamagesreduction.component.html',
    styleUrls: ['./liquidateddamagesreduction.component.css']
})
export class LiquidateddamagesreductionComponent implements OnInit {
    @ViewChild('reductionDmroom', {read: ViewContainerRef}) reductionDmroom: ViewContainerRef;
    public appid = 'liquidateddamagesreduction';
    public accountingMonth: any = [];
    public accountingYear: any = [];
    public selectedAccountingYear: any;
    public selectedAccountingMonth: any;
    public LiquidatedDamagesData: any = [];
    public selectedLiquidatedDamagesData: any;
    public childComponent: any;

    constructor(private growlService: GrowlService, private reductionCfr: ComponentFactoryResolver, public navtabService: NavtabService, public liquidateddamagesreductionService: LiquidateddamagesreductionService) {
    }

    ngOnInit() {
        this.accountingMonth = [
            {label: '12', value: '12'},
            {label: '11', value: '11'},
            {label: '10', value: '10'},
            {label: '9', value: '9'},
            {label: '8', value: '8'},
            {label: '7', value: '7'},
            {label: '6', value: '6'}
        ];
        this.accountingYear = [
            {label: '2017', value: '2017'},
            {label: '2016', value: '2016'},
            {label: '2015', value: '2015'}
        ];
    }

    cxLiquidatedDamages() {
        this.liquidateddamagesreductionService.getWYJ().subscribe((res) => {
            this.LiquidatedDamagesData = res.json().data;
        });
    }

    onLiquidatedDamagesDataRowSelect() {
        this.addChildComponent();
    }

    addChildComponent() {
        let com = this.reductionCfr.resolveComponentFactory(LiquidateddamagesreductionchildComponent);
        this.childComponent = this.reductionDmroom.createComponent(com);
        this.childComponent.instance.LiquidatedDamagesValue = this.selectedLiquidatedDamagesData.dqwyj * 1;
        this.childComponent.instance.closeModal.subscribe((msg) => {
            if (msg === 'close') {
                this.clearReductionDmroom();
            }
        });
        this.childComponent.instance.reductionEnd.subscribe((msg) => {
            if (msg === 'success') {
                this.growlService.showSuccess('成功', '违约金减免成功！');
                this.clearReductionDmroom();
            }
        });
    }

    clearReductionDmroom() {
        this.reductionDmroom.clear();
    }
}
