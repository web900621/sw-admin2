import {Component, OnInit, ElementRef, Input, ViewChild,EventEmitter,Output} from '@angular/core';
import * as echarts from 'echarts';
import {WaterqualityService} from './waterquality.service';

@Component({
    selector: 'jhi-waterquality',
    templateUrl: './waterquality.component.html',
    styleUrls: ['./waterquality.component.css']
})
export class WaterqualityComponent implements OnInit {
    @Input() titleCase;
    @Input() reportsWidth: any = 0 ;
    @Input() index: any;
    @Output() widthChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() typeChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() delReport: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('report') report: ElementRef;
    public echart: any;
    public opt: any = {
        color: ['#2599ef', '#fec05e', '#f97878'],
        title: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            top: 25,
            right: 160,
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            top: -5,
            itemWidth: 35,
            data: [{
                name: '户数',
                icon: 'rect'
            }, {
                name: '销售水量',
                icon: 'rect'
            }, {
                name: '销售金额',
                icon: 'rect'
            }]
        },


        xAxis: [{
            type: 'category',
            data: ['居民用水', '经营用水', '工业用水', '基建用水', '特种行业用水', '行政事业单位用水']
        }],
        yAxis: [{
            name: '千/户',
            min: 0,
            max: 8000,
            splitNumber: 8,
            axisLine: {
                lineStyle: {
                    color: '#2599ef'
                }
            },
            axisLabel: {
                formatter: function (value) {
                    return (value / 1000);
                }
            },
        }, {
            name: '/万吨',
            min: 0,
            max: 800000,
            offset: 40,
            axisLine: {
                lineStyle: {
                    color: '#fec05e'
                }
            },
            axisLabel: {
                formatter: function (value) {
                    return (value / 10000);
                }
            },
        }, {
            name: '/万元',
            min: 0,
            max: 800000,
            axisLine: {
                lineStyle: {
                    color: '#f97878'
                }
            },
            axisLabel: {
                formatter: function (value) {
                    return (value / 10000);
                }
            },
        }],
        series: [{
            name: '户数',
            type: 'bar',
            barCategoryGap: '50%',
            data: [0, 0, 0, 0, 0, 0]
        }, {
            name: '销售水量',
            type: 'bar',
            yAxisIndex: 1,
            data: [0, 0, 0, 0, 0, 0]
        }, {
            name: '销售金额',
            type: 'bar',
            yAxisIndex: 2,
            data: [0, 0, 0, 0, 0, 0]
        }]
    };

    public chooseType: any = [];
    public selectedType: any;
    public chooseWidth: any = [];
    public selectedWidth: any;
    public editReportsIsShow = false;


    constructor(public waterqualityService: WaterqualityService) {
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
        this.selectedType = '8';
        this.selectedWidth = this.reportsWidth;

        this.echart = echarts.init(this.report.nativeElement);

        this.waterqualityService.getdata().subscribe((res) => {
            console.log(res);
            this.opt.series[0].data = res.hs;
            this.opt.series[1].data = res.xssl;
            this.opt.series[2].data = res.xsje;
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
