import {Component, OnInit, ElementRef, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import * as echarts from 'echarts';
import {RecoveryService} from './recovery.service';

@Component({
  selector: 'jhi-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  @Input() titleCase;
  @Input() reportsWidth: any = 0;
  @Input() index: any;
  @Output() widthChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() typeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() delReport: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('report') report: ElementRef;
  public echart: any;
  public opt: any = {

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [
        {
          name: '2017',
          icon: 'rect'
        },
        {
          name: '2016',
          icon: 'rect'
        }]
    },
    toolbox: {
      top: 28,
      right: 20,
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
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %'
      },
      min: 0,
      max: 100,
      splitNumber: 10,
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      }
    },
    series: [
      {
        name: '2017',
        type: 'line',
        data: [50, 40, 50, 60, 44, 65, 33, 66, 78, 82, 65, 50],
        itemStyle: {
          normal: {
            color: '#3ba4f1'
          }
        },
        markPoint: {
          data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'}
          ]
        }
      },
      {
        name: '2016',
        type: 'line',
        data: [40, 30, 40, 50, 34, 55, 23, 56, 68, 72, 55, 40],
        itemStyle: {
          normal: {
            color: '#fda313'
          }
        },
        markPoint: {
          data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'},
          ]
        }
      }
    ]
  };
  public chooseType: any = [];
  public selectedType: any;
  public chooseWidth: any = [];
  public selectedWidth: any;
  public editReportsIsShow = false;

  constructor(public recoveryService: RecoveryService) {
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
    this.selectedType = '5';
    this.selectedWidth = this.reportsWidth;

    this.echart = echarts.init(this.report.nativeElement);
    this.recoveryService.getdata().subscribe((res) => {
      console.log(res);
      this.opt.series[0].data = res['2017'];
      this.opt.series[1].data = res['2016'];
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

  ngOnDestroy() {
    echarts.dispose(this.report.nativeElement);
  }
}
