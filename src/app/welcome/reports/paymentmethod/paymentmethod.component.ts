import {Component, OnInit, ElementRef, Input, ViewChild, EventEmitter, Output} from '@angular/core';
import * as echarts from 'echarts';
import {PaymentmethodService} from './paymentmethod.service';

@Component({
    selector: 'jhi-paymentmethod',
    templateUrl: './paymentmethod.component.html',
    styleUrls: ['./paymentmethod.component.css']
})
export class PaymentmethodComponent implements OnInit {
    @ViewChild('report') report: ElementRef;
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
    public echart: any;
    public opt: any = {
        color: ['#fd9e9e', '#1cb394', '#76c6fc'],// 调色盘颜色列表。
        textStyle: {// 全局字体样式
            color: '#555',
            fontSize: 14
        },
        legend: {
            bottom: 0,
            right: 0,
            orient: 'vertical',
            itemWidth: 30,
            itemHeight: 10,
            borderRadius: 0,
            textStyle: {
                color: "#999",
                fontSize: 12
            },
            data: [
                {name: '微信', icon: 'rect'},
                {name: '支付宝', icon: 'rect'},
                {name: '现金', icon: 'rect'}]
        },

        tooltip: {
            trigger: 'item',
        },
        series: [
            {
                name: '缴费方式统计',
                type: 'pie',
                startAngle: 60,
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: function (param) {
                            return param.name + Math.round(param.percent) + '%' + '\n' + param.value + '万元';
                        },
                        color: '#999',
                        fontSize: 10
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 10,
                        length2: 10,
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                data: [
                    {value: 335, name: '微信'},
                    {value: 310, name: '支付宝'},
                    {value: 234, name: '现金'}
                ]
            }
        ]
    };
    public editReportsIsShow = false;


    constructor(public paymentmethodService: PaymentmethodService) {
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
        this.selectedType = '7';
        this.selectedWidth = this.reportsWidth;

        this.echart = echarts.init(this.report.nativeElement);

        this.paymentmethodService.getdata().subscribe((res) => {
            console.log(res);
            this.opt.series[0].data = res;
            this.echart.setOption(this.opt);
        });
    }

    resetEchatrWidth() {
        this.echart.resize();
    }

    onWidthChange() {
        let msg = {'index': this.index, 'changeWidth': this.selectedWidth};
        this.widthChange.emit(msg);
        setTimeout(() => {
            this.resetEchatrWidth();
        }, 300);
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
