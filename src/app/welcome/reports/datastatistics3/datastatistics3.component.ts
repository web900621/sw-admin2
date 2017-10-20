import {Component, OnInit, ElementRef, Input, ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import {SelectItem} from 'primeng/primeng';
import {Datastatistics3Service} from './datastatistics3.service';

@Component({
    selector: 'jhi-datastatistics3',
    templateUrl: './datastatistics3.component.html',
    styleUrls: ['./datastatistics3.component.css']
})
export class Datastatistics3Component implements OnInit {
    @ViewChild('report') report: ElementRef;
    public generalZwnyY: SelectItem[];
    public generalZwnyM: SelectItem[];
    public generalSelectedY: any;
    public generalSelectedM: any;
    public echart: any;
    public opt: any = {
        series: [
            {
                name: '当日实收金额',
                type: 'pie',
                radius: ['58%', '68%'],
                center: ['15%', '52%'],    // 默认全局居中
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                hoverAnimation: false,
                data: [
                    {
                        value: 12541,
                        name: '实收金额',
                        itemStyle: {
                            normal: {
                                color: '#0cbbd8',
                                borderWidth: 1,
                                borderColor: '#fff'
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{c} 元',
                                textStyle: {
                                    fontSize: 20,
                                    color: '#555',
                                }
                            }
                        }
                    }, {
                        value: 3000,
                        name: '占位',
                        label: {
                            normal: {
                                formatter: '\n实收金额',
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
                name: '退款金额',
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
                    name: '退款金额',
                    itemStyle: {
                        normal: {
                            color: '#fda211',
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
                    value: 600,
                    name: '占位',
                    label: {
                        normal: {
                            formatter: '\n退款金额',
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
                name: '预存款金额',
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
                    value: 12212,
                    name: '预存款金额',
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
                    value: 1000,
                    name: '占位',
                    label: {
                        normal: {
                            formatter: '\n预存款金额',
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
                name: '发票剩余数',
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
                    name: '发票剩余数',
                    itemStyle: {
                        normal: {
                            color: '#7374ef',
                            borderWidth: 1,
                            borderColor: '#fff'
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d} 张',
                            textStyle: {
                                fontSize: 20,
                                color: '#555'
                            }
                        }
                    }
                }, {
                    value: 20,
                    name: '占位',
                    label: {
                        normal: {
                            formatter: '\n发票剩余数',
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

    constructor(public datastatistics3Service: Datastatistics3Service) {
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

    upData() {
        this.datastatistics3Service.getdata().subscribe((res) => {
            console.log(res);
            this.opt.series[0].data[0].value = res.drssje;
            this.opt.series[1].data[0].value = res.tkje;
            this.opt.series[2].data[0].value = res.yckje;
            this.opt.series[3].data[0].value = res.fpsys;
            this.echart.setOption(this.opt);
        });
    }
}
