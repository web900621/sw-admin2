import {Component, OnInit, ElementRef, Input, ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import {SelectItem} from 'primeng/primeng';
import {Datastatistics2Service} from './datastatistics2.service';

@Component({
  selector: 'jhi-datastatistics2',
  templateUrl: './datastatistics2.component.html',
  styleUrls: ['./datastatistics2.component.css']
})
export class Datastatistics2Component implements OnInit {
  @ViewChild('report') report: ElementRef;
  public generalZwnyY: SelectItem[];
  public generalZwnyM: SelectItem[];
  public generalSelectedY: any;
  public generalSelectedM: any;
  public echart: any;
  public opt: any = {
    series: [
      {
        name: '抄见水量',
        type: 'pie',
        radius: ['58%', '68%'],
        center: ['15%', '52%'],    // 默认全局居中
        label: {
          normal: {
            position: 'center'
          }
        },
        hoverAnimation: false,
        data: [{
          value: 12541,
          name: '抄见水量',
          itemStyle: {
            normal: {
              color: '#0cbbd8',
              borderWidth: 1,
              borderColor: '#fff'
            }
          },
          label: {
            normal: {
              formatter: '{c} 吨',
              textStyle: {
                fontSize: 20,
                color: '#555',
              }
            }
          }
        }, {
          value: 6000,
          name: '占位',
          label: {
            normal: {
              formatter: '\n销售水量',
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
      },
      {
        name: '抄表客户数',
        type: 'pie',
        radius: ['58%', '68%'],
        center: ['38.5%', '52%'],    // 默认全局居中
        label: {
          normal: {
            position: 'center'
          }
        },
        hoverAnimation: false,
        data: [{
          value: 3212,
          name: '人',
          itemStyle: {
            normal: {
              color: '#fda211',
              borderWidth: 1,
              borderColor: '#fff'
            }
          },
          label: {
            normal: {
              formatter: '{c} 人',
              textStyle: {
                fontSize: 20,
                color: '#555'
              }
            }
          }
        }, {
          value: 600,
          name: '占位',
          label: {
            normal: {
              formatter: '\n客户数',
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
      },
      {
        name: '回收金额',
        type: 'pie',
        radius: ['58%', '68%'],
        center: ['62%', '52%'],    // 默认全局居中
        label: {
          normal: {
            position: 'center'
          }
        },
        hoverAnimation: false,
        data: [{
          value: 122212,
          name: '元',
          itemStyle: {
            normal: {
              color: '#11c8a8',
              borderWidth: 1,
              borderColor: '#fff'
            }
          },
          label: {
            normal: {
              formatter: '{c} 元',
              textStyle: {
                fontSize: 20,
                color: '#555'
              }
            }
          }
        }, {
          value: 10000,
          name: '占位',
          label: {
            normal: {
              formatter: '\n回收金额',
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
      },
      {
        name: '回收率统计',
        type: 'pie',
        radius: ['58%', '68%'],
        center: ['85%', '52%'],    // 默认全局居中
        label: {
          normal: {
            position: 'center'
          }
        },
        hoverAnimation: false,
        data: [{
          value: 89,
          name: '%',
          itemStyle: {
            normal: {
              color: '#7374ef',
              borderWidth: 1,
              borderColor: '#fff'
            }
          },
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 20,
                color: '#555'
              }
            }
          }
        }, {
          value: 11,
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

  constructor(public datastatistics2Service: Datastatistics2Service) {
    this.generalZwnyY = [
      {label: '2017', value: '2017'},
      {label: '2016', value: '2016'},
      {label: '2015', value: '2015'},
    ];
    this.generalZwnyM = [
      {label: '12', value: '12'},
      {label: '10', value: '10'},
      {label: '8', value: '8'},
      {label: '6', value: '6'},
    ];
  }

  ngOnInit() {
    this.echart = echarts.init(this.report.nativeElement);
    console.log(this.echart);
    this.echart.setOption(this.opt);
  }

  cxData() {
    this.datastatistics2Service.getdata().subscribe((res) => {
      console.log(res);
      this.opt.series[0].data[0].value = res.cjsl;
      this.opt.series[1].data[0].value = res.cbkhs;
      this.opt.series[2].data[0].value = res.hsje;
      this.opt.series[3].data[0].value = res.hsl;
      this.opt.series[3].data[1].value = 100 - res.hsl;
      this.echart.setOption(this.opt);
    });
  }

  ngOnDestroy() {
    echarts.dispose(this.report.nativeElement);
  }
}
