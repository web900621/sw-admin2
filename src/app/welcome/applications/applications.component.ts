import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApplicationsService} from './applications.service';
import {GrowlService} from '../../shared/globalmsg.service';
import {NavtabService} from '../nav/nav-tab/navtab.service';
import {ToggleWorkSpaceService} from '../toggle-work-space.service';
import {EventbusService} from '../eventbus.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  public yxdisplay: boolean = false;
  public allApps: any = [];
  public pxgz: boolean = true;
  private selectedApps: any = [];
  @Input() parentComponent: string;
  @Output() updateUserCygn = new EventEmitter();

  constructor(public eventbusService: EventbusService, public toggleWorkSpaceService: ToggleWorkSpaceService, public navtabService: NavtabService, public growlService: GrowlService, public applicationsService: ApplicationsService) {
  }

  ngOnInit() {
    this.applicationsService.getAllApps().subscribe((res) => {
      this.allApps = res.json().data;
    })
  }

  goApp(app, e) {
    if (this.parentComponent == 'cygnComponent') {
      let DIV;
      if (e.target.className == 'dttarget') {
        DIV = e.target.parentElement;
      } else if (e.target.className == 'imgtarget') {
        DIV = e.target.parentElement.parentElement;
      } else if (e.target.className == 'ddtarget') {
        DIV = e.target.parentElement;
      } else if (e.target.className == 'target') {
        DIV = e.target.parentElement;
      }
      if (DIV.className.indexOf('active') == '-1') {
        if (this.selectedApps.length == 9) {
          this.showWarn();
          return;
        }
        DIV.className = 'active';
        this.selectApp(app);
      } else {
        DIV.className = '';
        this.unSelectApp(app);
      }
    } else { // applications组件非cygn子组件 执行跳转功能
      this.toggleWorkSpaceService.workSpaceIsShow = true;
      if (this.navtabService.hasTag(app)) {
        this.navtabService.selectTag(app)
      } else {
        this.navtabService.addTag(app);
        this.eventbusService.addComToWorkspace.emit(app.id)
      }
    }
  }

  selectApp(app) {
    this.selectedApps.push(app);
  }

  unSelectApp(app) {
    for (let i = 0; i < this.selectedApps.length; i++) {
      if (this.selectedApps[i].name == app.name) {
        this.selectedApps.splice(i, 1);
        return;
      }
    }
  }

  showWarn() {
    this.growlService.showWarn('警告', '只能选择9个常用功能！')
  }

  commitCygnApps() {
    if (this.selectedApps.length < 9) {
      this.showWarn();
    } else {
      // 此处需要向服务器提交修改后的常用功能内容
      this.updateUserCygn.emit(this.selectedApps);
    }
  }

  handleChange(e) {
    if (!this.pxgz) {
      this.getAppsByAfrequency();
      this.yxdisplay = true;
    } else {
      this.selectedApps = [];
      this.yxdisplay = false;
    }
  }

  getAppsByAfrequency() {
    this.applicationsService.getAppsByFreq().subscribe((res) => {
      console.log(res.json().data);
      this.selectedApps = res.json().data;
    })
  }
}
