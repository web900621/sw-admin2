import {Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
import {JtrksqService} from './jtrksq.service';
import {JtrksqchildComponent} from './jtrksqchild/jtrksqchild.component';
@Component({
    selector: 'jhi-jtrksq',
    templateUrl: './jtrksq.component.html',
    styleUrls: ['./jtrksq.component.css']
})
export class JtrksqComponent implements OnInit {
    public appid: string = 'jtrksq';
    @ViewChild('jtrkglDmroom', {read: ViewContainerRef}) jtrkglDmroom: ViewContainerRef;
    public jtrkglDispaly: boolean = false;
    public resultAll: any = [];
    public result: any = [];
    public TotalRecords: number;
    private childComponent: any;

    constructor(public navtabService: NavtabService,
                public jtrksqService: JtrksqService,
                private jtrksqCfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.jtrksqService.getJtrks().subscribe((data) => {
            this.resultAll = data.json().data;
            this.TotalRecords = this.resultAll.length;
            this.result = this.resultAll.slice(0, 10);
            console.log(this.result);
        });
    }

    loadJtrkcxLazy(event) {
        console.log(event);
        // 实际项目用http请求 此处使用定时模拟
        setTimeout(() => {
            if (this.resultAll) {
                this.result = this.resultAll.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    }

    xzjtrkxx() {
        this.jtrkglDispaly = true;
    }

    addJtrksqChildComponent(obj, isDisabled) {
        let com = this.jtrksqCfr.resolveComponentFactory(JtrksqchildComponent);
        this.childComponent = this.jtrkglDmroom.createComponent(com);
        if (obj) {
            this.childComponent.instance.jtrkUserCode = obj.khbm;
            this.childComponent.instance.jtrkApplicantName = obj.name;
            this.childComponent.instance.jtrkUserName = obj.khmc;
            this.childComponent.instance.selectedYyhCode = Number(obj.khbm);
            this.childComponent.instance.jtrkYyhAdr = obj.yyhmc;
            this.childComponent.instance.jtrkUserState = obj.sqzt;
        }
        if (isDisabled) {
            this.childComponent.instance.isDisabled = true;
        } else {
            this.childComponent.instance.isDisabled = false;
        }
        this.childComponent.instance.closeModal.subscribe((msg) => {
            if (msg === 'close') {
                this.clearJtrkglDmroom();
            }
        });
    }

    clearJtrkglDmroom() {
        this.jtrkglDmroom.clear();
    }
}
