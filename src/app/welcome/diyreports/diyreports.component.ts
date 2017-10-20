import {Component, OnInit} from '@angular/core';
import {DiyreportsService} from './diyreports.service';
import {GrowlService} from "../../shared/globalmsg.service";
import {ConfirmationService} from 'primeng/primeng';

@Component({
    selector: 'jhi-diyreports',
    templateUrl: './diyreports.component.html',
    styleUrls: ['./diyreports.component.css']
})
export class DiyreportsComponent implements OnInit {
    public appid: string = 'zdygzt';
    public portlets: any = [];
    public display: boolean = true;
    public titleCase: string = '1';

    constructor(public diyreportsService: DiyreportsService, public growlService: GrowlService, public confirmationService: ConfirmationService) {
    }

    ngOnInit() {
        this.diyreportsService.getDefaultPortlets().subscribe((res) => {
            console.log(res);
            this.portlets = res;
        });
    }

    addReports() {
        this.portlets.push(
            {
                name: '空白报表',
                width: 2,
                height: 1,
                url: ' ',
                portletType: '0'
            }
        );
    }

    childComWidthChange(e) {
        if (e.changeWidth == '0') {
            e.changeWidth = 2;
        }
        ;
        this.portlets[e.index].width = e.changeWidth;
    }

    childComTypeChange(e) {
        console.log(e);
        this.portlets[e.index].name = e.label;
        this.portlets[e.index].portletType = e.value;
    }

    delChild(e) {
        this.portlets.splice(e, 1);
    }

    checkAll() {
        for (let i = 0; i < this.portlets.length; i++) {
            if (this.portlets[i].portletType == 0) {
                return 0;
            }
        }
        if (this.portlets.length >= 10) {
            return 1;
        }
        return 100;
    }

    saveChange() {
        this.confirmationService.confirm({
            message: '确定修改并保存么？',
            header: '确认保存',
            icon: 'fa fa-save',
            accept: () => {
                if (this.checkAll() == 100) {
                    //向服务发送发送请求  保存数据
                    this.growlService.showSuccess('成功', '修改门户首页成功！');

                } else if (this.checkAll() == 0) {
                    this.growlService.showError('失败', '所有报表必须指定类型后保存！');
                } else if (this.checkAll() == 1) {
                    this.growlService.showError('失败', '报表数量不能多余10个！');
                }
            },
            reject: () => {
            },
        });
    }

    initPortals() {
        this.confirmationService.confirm({
            message: '确定恢复默认设置么？',
            header: '恢复默认',
            icon: 'fa fa-refresh',
            accept: () => {
                this.diyreportsService.initPortlets().subscribe((res) => {
                    this.portlets = res.portlets;
                });
                this.growlService.showSuccess('成功', '恢复默认门户首页成功！');
            },
            reject: () => {
            },
        });
    }
}
