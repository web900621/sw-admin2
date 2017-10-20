import {Component, OnInit, ElementRef, Input, ViewChild, EventEmitter, Output} from '@angular/core';
import * as echarts from 'echarts';
import {ChargemoneyService} from './chargemoney.service';

@Component({
    selector: 'jhi-chargemoney',
    templateUrl: './chargemoney.component.html',
    styleUrls: ['./chargemoney.component.css']
})
export class ChargemoneyComponent implements OnInit {
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
        color: ['#fec05e', '#f97878'],
        title: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: [{
            type: 'category',
            data: []
        }],
        yAxis: [{
            name: '/万元',
            min: 0,
            max: 10000,
            splitNumber: 10,
            axisLabel: {
                formatter: function (value) {
                    return (value / 10000);
                }
            },
        }],
        series: [{
            name: '收费',
            type: 'bar',
            barCategoryGap: '60%',
            data: [0, 0, 0, 0, 0, 0]
        }]
    };
    public editReportsIsShow = false;


    constructor(public chargemoneyService: ChargemoneyService) {
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
        this.selectedType = '10';
        this.selectedWidth = this.reportsWidth;
        this.echart = echarts.init(this.report.nativeElement);

        this.chargemoneyService.getdata().subscribe((res) => {
            console.log(res);
            this.opt.xAxis[0].data = res.xm;
            this.opt.series[0].data = res.je;
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
