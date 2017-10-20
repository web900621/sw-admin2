import {Component, OnInit, Input} from '@angular/core';
import {CygnService} from './cygn.service';
import {ToggleWorkSpaceService} from '../../toggle-work-space.service';
import {NavtabService} from '../../nav/nav-tab/navtab.service';
import {EventbusService} from '../../eventbus.service';
@Component({
  selector: 'app-cygn',
  templateUrl: './cygn.component.html',
  styleUrls: ['./cygn.component.scss']
})
export class CygnComponent implements OnInit {
  @Input() parentComponent: string;
  public userCygn: any;
  public showDialog: boolean = false;

  constructor(public eventbusService: EventbusService, public navtabService: NavtabService, public cygnService: CygnService, public toggleWorkSpaceService: ToggleWorkSpaceService) {
  }

  ngOnInit() {
    this.cygnService.getCygn().subscribe((res) => {
      this.userCygn = res.json().data;
      console.log(this.userCygn);
    });
  }

  toggleDialogShow() {
    if (this.showDialog) {
      this.showDialog = false;
    } else {
      this.showDialog = true;
    }
    console.log(this.showDialog);
  }

  doUpdateUserCygn(e) {
    //接收到applications组件传递的事件 执行更新常用组件 关闭对话框
    this.userCygn = e;
    this.showDialog = false;
  }

  goApp(app) {
    this.toggleWorkSpaceService.workSpaceIsShow = true;
    if (this.navtabService.hasTag(app)) {
      this.navtabService.selectTag(app);
    } else {
      this.navtabService.addTag(app);
      this.eventbusService.addComToWorkspace.emit(app.id);
    }
  }
}
