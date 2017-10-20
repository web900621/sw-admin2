import {Component, OnInit} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {WaterpriceadjustmentService} from './waterpriceadjustment.service';
import {ConfirmationService} from 'primeng/primeng';

@Component({
    selector: 'jhi-waterpriceadjustment',
    templateUrl: './waterpriceadjustment.component.html',
    styleUrls: ['./waterpriceadjustment.component.css']
})
export class WaterpriceadjustmentComponent implements OnInit {
    public appid: string = 'waterpriceadjustment';
    private waterPriceadJustmentData: Date;
    private waterPriceAdjustmentNum: any;
    private minDate: Date;
    private waterpriceadjustmentRes: any;
    private waterQualities: any = [];
    private selectedWaterQuality: any = null;
    private rateItems: any = [];
    private showRateItem: boolean = false;
    private showLadderWaterPrice: boolean = false;

    public RateItems: any = [];
    public selectedRateItem: any;
    public RateItemName: any = [];
    public selectedRateItemName: any;

    public ladderPrice: any = [];
    public selectedLadderPrice: any;

    constructor(public confirmationService: ConfirmationService, public navtabService: NavtabService, public waterpriceadjustmentService: WaterpriceadjustmentService) {
    }

    ngOnInit() {
        this.waterPriceAdjustmentNum = Math.floor(Math.random() * 100000000000);
        this.waterpriceadjustmentService.getWaterQuality().subscribe((res) => {
            console.log(res);
            this.waterpriceadjustmentRes = res.json().data;
            for (let i = 0; i < res.json().data.length; i++) {
                this.waterQualities.push(
                    {label: this.waterpriceadjustmentRes[i].name, value: this.waterpriceadjustmentRes[i].id}
                );
            }
        });
        this.minDate = new Date();
        // 模拟获取数据
        this.RateItems.push({label: '居民用水', value: '01'});
        this.RateItems.push({label: '工业用水', value: '02'});
        this.RateItems.push({label: '特殊用水', value: '03'});

        this.RateItemName = [
            {label: '固定计费', value: '001'},
            {label: '阶梯单价', value: '002'}
        ];
        this.waterpriceadjustmentService.getLadderPrice().subscribe((data) => {
            this.ladderPrice = data.json().data;
        });
    }

    WaterQualityChange() {
        if (this.selectedWaterQuality) {
            this.showRateItem = true;


            if (this.selectedWaterQuality == '00001') {
                this.rateItems = this.waterpriceadjustmentRes[0].details;
            } else if (this.selectedWaterQuality == '00002') {
                this.rateItems = this.waterpriceadjustmentRes[1].details;
            }
        } else {
            this.showRateItem = false;
        }
    }

    confirm() {
        this.confirmationService.confirm({
            message: '确定删除此信息？',
            header: '确认删除',
            icon: 'fa fa-trash',
            accept: () => {
            },
            reject: () => {
                console.log('取消了删除操作！');
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: '确定删除此信息？',
            header: '确认删除',
            icon: 'fa fa-trash',
            accept: () => {
            },
            reject: () => {
                console.log('取消了删除操作！');
            }
        });
    }

}
