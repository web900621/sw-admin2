import {Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef} from '@angular/core';
import {ConfirmationService} from 'primeng/primeng';

@Component({
    selector: 'jhi-notsalesadjustmentchild',
    templateUrl: './notsalesadjustmentchild.component.html',
    styleUrls: ['./notsalesadjustmentchild.component.css']
})
export class NotsalesadjustmentchildComponent implements OnInit {
    @Input() billData: any = {};
    @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() adjustmentEnd: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('btnZX') btnZX: ElementRef;
    private price: any = {};
    private ladder = {
        step1: 0,
        step2: 0
    };
    private tableValue = [];
    private rawData = [];
    private changeData = [];
    private afterData = [];
    private rawWater: number = 0;
    private changeWater: number = 0;

    private rawDataSummary = {
        water: 0,
        pri: 0
    };
    private afterDataSummary = {
        water: 0,
        pri: 0
    };
    private changeDataSummary = {
        water: 0,
        pri: 0
    };
    private adjustmentReason: any = [];
    private selectedAdjustmentReason: any;

    constructor(private confirmationService: ConfirmationService) {
    }

    ngOnInit() {

        this.tableValue.push(this.billData);
        this.rawWater = this.billData.kzsl * 1;
        console.log(this.rawWater);
        // 获取水价信息 阶梯信息
        this.price.basic1 = 1.61;
        this.price.basic2 = 2.11;
        this.price.basic3 = 4.21;
        this.price.sewage = 0.8;
        this.price.resouse = 0.02;
        this.price.cityplus = 0.01;
        this.ladder.step1 = 30;
        this.ladder.step2 = 60;

        this.rawData = this.generateData(this.rawWater, this.ladder.step1, this.ladder.step2);
        this.afterData = this.generateData(this.rawWater - this.changeWater, this.ladder.step1, this.ladder.step2);
        this.changeData = this.generateChangeData(this.changeWater);
        this.doSummary();

        this.adjustmentReason = [
            {label: '调整理由1', value: '01'},
            {label: '调整理由2', value: '02'},
            {label: '调整理由3', value: '03'},
            {label: '其它', value: '04'}
        ];
        this.btnZX.nativeElement.disabled = true;
    }

    generateData(w, s1, s2) {
        return [
            {name: '基本水费1阶梯', pri: this.price.basic1, water: w <= s1 ? w : s1},
            {name: '基本水费2阶梯', pri: this.price.basic2, water: w <= s1 ? 0 : w >= s2 ? s2 - s1 : w - s1},
            {name: '基本水费3阶梯', pri: this.price.basic3, water: w <= s2 ? 0 : w - s2},
            {name: '污水处理费', pri: this.price.sewage, water: w},
            {name: '水资源费', pri: this.price.resouse, water: w},
            {name: '城市附加费', pri: this.price.cityplus, water: w}
        ];
    }

    generateChangeData(w) {
        return [
            {name: '基本水费1阶梯', pri: this.price.basic1, water: this.rawData[0].water - this.afterData[0].water},
            {name: '基本水费2阶梯', pri: this.price.basic2, water: this.rawData[1].water - this.afterData[1].water},
            {name: '基本水费3阶梯', pri: this.price.basic3, water: this.rawData[2].water - this.afterData[2].water},
            {name: '污水处理费', pri: this.price.sewage, water: w},
            {name: '水资源费', pri: this.price.resouse, water: w},
            {name: '城市附加费', pri: this.price.cityplus, water: w}
        ];
    }

    closeme(msg) {
        this.closeModal.emit(msg);
    }

    sliderChange() {
        this.rawData = this.generateData(this.rawWater, this.ladder.step1, this.ladder.step2);
        this.afterData = this.generateData(this.rawWater - this.changeWater, this.ladder.step1, this.ladder.step2);
        this.changeData = this.generateChangeData(this.changeWater);
        this.doSummary();
        this.btnZX.nativeElement.disabled = false;
    }

    doSummary() {
        this.rawDataSummary.water = this.rawWater;
        this.rawDataSummary.pri = this.rawData.reduce((total, val, i, arr) => {
            return total + val.pri * val.water;
        }, 0);
        this.changeDataSummary.water = this.changeWater;
        this.changeDataSummary.pri = this.changeData.reduce((total, val, i, arr) => {
            return total + val.pri * val.water;
        }, 0);
        this.afterDataSummary.water = this.rawWater - this.changeWater;
        this.afterDataSummary.pri = this.afterData.reduce((total, val, i, arr) => {
            return total + val.pri * val.water;
        }, 0);
    }

    confirm() {
        this.confirmationService.confirm({
            message: '确定执行此次调整吗？',
            header: '确认调整',
            icon: 'fa fa-edit',
            accept: () => {
                this.adjustmentEnd.emit('success');
            },
            reject: () => {
                console.log('取消了执行操作！');
            }
        });
    }
}
