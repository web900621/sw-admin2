import {Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import {HometplmasterService} from './hometplmaster.service';
import {SelectItem} from 'primeng/primeng';
import * as echarts from 'echarts';

@Component({
  selector: 'app-hometplmaster',
  templateUrl: './hometplmaster.component.html',
  styleUrls: ['./hometplmaster.component.scss'],
})
export class HometplmasterComponent implements OnInit {
  @ViewChild('child1') echart_ref: ElementRef;
  @ViewChild('child2') apps_ref: ElementRef;
  @ViewChild('child3') notic_ref: ElementRef;
  @ViewChild('homeEchart') homeEchart: ElementRef;
  public innerHeight = (window.innerHeight - 70 - 15);
  /*仅适用首页*/
  private mapJson: any;
  private echart: any;
  private ssgk:any;

  public top10: any = [];

  public zwnyY: SelectItem[];
  public zwnyM: SelectItem[];
  public selectedY: any;
  public selectedM: any;

  public isShowDetails: boolean = false;
  public detailData: any;

  constructor(public el: ElementRef, public hometplmasterService: HometplmasterService) {
  }

  ngOnInit() {
    this.zwnyY = [
      {label: '2017', value: '2017'},
      {label: '2016', value: '2016'},
      {label: '2015', value: '2015'},
    ];
    this.zwnyM = [
      {label: '12', value: '12'},
      {label: '10', value: '10'},
      {label: '8', value: '8'},
      {label: '6', value: '6'},
    ];
    this.helperRender();
    this.hometplmasterService.getTop10().subscribe((res) => {
      this.top10 = res.json().data;
    });

    this.hometplmasterService.getMapJX().subscribe((res) => {
      this.mapJson = res.json();
      this.hometplmasterService.getMapData(this.selectedM,this.selectedY).subscribe((res)=>{
        this.ssgk = res.json().data;
        this.initEchart();
      })
    });
  }
  initEchart() {
    this.echart = echarts.init(this.homeEchart.nativeElement);
    this.echart.showLoading();
    this.echartSetOpt();
    console.log(this.echart)
  }
  echartSetOpt(){
    this.echart.hideLoading();
    echarts.registerMap('JX', this.mapJson);
    this.echart.setOption({
      backgroundColor: '#ffffff',
      geo: {
        map: 'JX',
        roam: 'false',
        zoom: 1.2,
        scaleLimit: {
          min: 0.8,
          max: 1.8
        },
        label: {
          emphasis: {
            show: false,
            textStyle: {
              color: '#000',
              fontSize: 16
            }
          },
          normal: {
            show: false,
            textStyle: {
              color: '#000',
              fontSize: 16
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#0184BD',
            // borderWidth: 2
          },
          emphasis: {
            areaColor: '#0184BD',
            shadowBlur: 2,
            shadowColor: '#5d5d5d',
            shadowOffsetX: 5,
            shadowOffsetY: 5
          }
        },
        regions: [
          {
            name: '南昌市',
            itemStyle: {
              normal: {
                areaColor: '#FFF6AD',
                color: '#111'
              }
            }
          }, {
            name: '上饶市',
            itemStyle: {
              normal: {
                areaColor: '#D9EAB7',
                color: '#111'
              }
            }
          }, {
            name: '景德镇市',
            itemStyle: {
              normal: {
                areaColor: '#B9DBEE',
                color: '#111'
              }
            }
          }, {
            name: '九江市',
            itemStyle: {
              normal: {
                areaColor: '#FFD7E2',
                color: '#111'
              }
            }
          }, {
            name: '宜春市',
            itemStyle: {
              normal: {
                areaColor: '#B9DBEE',
                color: '#111'
              }
            }
          }, {
            name: '新余市',
            itemStyle: {
              normal: {
                areaColor: '#FFF6AD',
                color: '#111'
              }
            }
          }, {
            name: '萍乡市',
            itemStyle: {
              normal: {
                areaColor: '#FFF6AD',
                color: '#111'
              }
            }
          }, {
            name: '吉安市',
            itemStyle: {
              normal: {
                areaColor: '#D9EAB7',
                color: '#111'
              }
            }
          }, {
            name: '抚州市',
            itemStyle: {
              normal: {
                areaColor: '#F7D5E5',
                color: '#111'
              }
            }
          }, {
            name: '鹰潭市',
            itemStyle: {
              normal: {
                areaColor: '#FFF9B1',
                color: '#111'
              }
            }
          }, {
            name: '赣州市',
            itemStyle: {
              normal: {
                areaColor: '#B9DBEE',
                color: '#111'
              }
            }
          }]
      },
      series: [
        {
          name: '江西省资产分布',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: this.ssgk,
          symbolSize: 10,
          showEffectOn: 'render',
          symbolOffset: [0, '150%'],
          rippleEffect: {
            period: 6,
            brushType: 'fill',
            scale: 4
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            emphasis: {
              show: true
            }
          }, itemStyle: {
          normal: {
            color: '#FE7F01'
          }
        }
        }]
    });
    this.echart.on('mousemove', (params) => {
      if (params.componentType === 'series') {
        this.isShowDetails = true;
        this.detailData = this.ssgk[params.dataIndex].detaildata;
      }
    });
  }
  // 监听子组件关闭details窗口
  closeDetails(msg) {
    this.isShowDetails = msg;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.helperRender();
  }

  // 辅助渲染 动态计算工作区高度
  helperRender() {
    this.echart_ref.nativeElement.style.height = (this.innerHeight) + 'px';
    this.apps_ref.nativeElement.style.height = Math.floor(this.innerHeight / 3 * 1.65) + 'px';
    this.notic_ref.nativeElement.style.height = Math.floor(this.innerHeight / 3 * 1.35) + 'px';
  }
  ngOnDestroy() {
    echarts.dispose(this.homeEchart.nativeElement);
    console.log(this.echart)
  }
}
