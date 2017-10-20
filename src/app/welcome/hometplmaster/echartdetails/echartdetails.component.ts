import {Component, OnInit, Input, Output, EventEmitter, OnChanges, ElementRef, ViewChild} from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-echartdetails',
  templateUrl: './echartdetails.component.html',
  styleUrls: ['./echartdetails.component.scss']
})
export class EchartdetailsComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Output() pleaseClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('echartDetailsBox') echartDetailsBox: ElementRef;
  public echart: any;
  public opt: any = {
    tooltip: {
      formatter: "{a} <br/>{c} {b}"
    },
    series: [
      {
        name: '销售水量',
        type: 'gauge',
        z: 3,
        min: 0,
        max: 400,
        splitNumber: 8,
        radius: '100%',
        endAngle: 45,
        center: ['30%', '53%'],    // 默认全局居中
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 6
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 10,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          length: 15,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {
          backgroundColor: 'auto',
          borderRadius: 2,
          color: '#eee',
          padding: 1,
          textShadowBlur: 0,
          textShadowOffsetX: 1,
          textShadowOffsetY: 1,
        },
        pointer: {
          width: 4,
          length: '80%',
        },
        title: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: 'bolder',
          fontSize: 12,
          fontStyle: 'italic',
        },
        detail: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: 'bolder',
          borderRadius: 3,
          textShadowOffsetX: 0,
          textShadowOffsetY: 0,
          fontFamily: 'Arial',
          fontSize: 12,
          color: '#666',
          rich: {}
        },
        data: [{value: 40, name: '万吨'}]
      },
      {
        name: '回收率饼图',
        type: 'pie',
        radius: ['78%', '88%'],
        center: ['75%', '48%'],    // 默认全局居中
        label: {
          normal: {
            position: 'center'
          }
        },
        hoverAnimation: false,
        data: [{
          value: 80,
          name: '回收率',
          itemStyle: {
            normal: {
              color: '#0097ED',
              borderWidth: 1,
              borderColor: '#fff'
            }
          },
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 20
              }
            }
          }
        }, {
          value: 20,
          name: '占位',
          label: {
            normal: {
              formatter: '\n回收率',
              textStyle: {
                color: '#555',
                fontSize: 20
              }
            }
          },
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#aaa'
            },
            emphasis: {
              color: '#aaa'
            }
          },
          hoverAnimation: false
        }]
      }
    ]
  };
  private changNum = 0;

  constructor() {
  }

  ngOnInit() {
  }

  initEchart() {
    console.log("init0 " + this.echart);
    this.echart = echarts.init(this.echartDetailsBox.nativeElement);
    console.log("init1 " + this.echart);
  }

  ngOnChanges() {
    if (this.changNum == 0) {
      this.initEchart();
      this.changNum++;
    }
    this.opt.series[0].data[0].value = this.data.sl;
    this.opt.series[1].data[0].value = this.data.recovery;
    this.opt.series[1].data[1].value = (100 - this.data.recovery);
    this.echart.setOption(this.opt);
  }

  closeDetails() {
    this.pleaseClose.emit(false);
  }
}
