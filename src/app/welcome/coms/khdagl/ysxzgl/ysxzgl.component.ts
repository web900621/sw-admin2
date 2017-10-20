import {Component, OnInit} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {YsxzglService} from './ysxzgl.service';
import {ConfirmationService} from 'primeng/primeng';
@Component({
    selector: 'jhi-ysxzgl',
    templateUrl: './ysxzgl.component.html',
    styleUrls: ['./ysxzgl.component.css']
})
export class YsxzglComponent implements OnInit {
    public appid: string = 'ysxzgl';
    public ysxzgl: any;
    public xzYsxzDispaly: boolean = false;
    public xgYsxzDispaly: boolean = false;

    constructor(public navtabService: NavtabService, public ysxzglService: YsxzglService, private confirmationService: ConfirmationService) {
    }

    ngOnInit() {
        this.ysxzglService.getYsxzgl().subscribe((res) => {
            this.ysxzgl = res.json().data;
        });
    }

    confirm(i) {
        this.confirmationService.confirm({
            message: '确定删除此信息？',
            header: '确认删除',
            icon: 'fa fa-trash',
            accept: () => {
                this.ysxzgl.splice(i, 1);
                this.ysxzgl = this.ysxzgl.slice();
                // 这里省略了和后台通讯  将删除后 ysxzgl 同步都后台！
            },
            reject: () => {
                console.log('取消了删除操作！');
            }
        });
    }

    xgysxz() {
        this.xgYsxzDispaly = true;
    }

    xzysxz() {
        this.xzYsxzDispaly = true;
    }
}
