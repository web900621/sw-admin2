import {Component, OnInit} from '@angular/core';
import {NavtabService} from './navtab.service';
import {ToggleWorkSpaceService} from '../../toggle-work-space.service';
import {EventbusService} from  '../../eventbus.service';
@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit {

  constructor(public eventbusService:EventbusService,public navtabService: NavtabService, public toggleWorkSpaceService: ToggleWorkSpaceService) {
  }

  ngOnInit() {
  }

  showWorkSpace() {
    this.toggleWorkSpaceService.workSpaceIsShow = true;
  }
  destroyComInWorkspace(appId) {
    this.eventbusService.delComToWorkspace.emit(appId);
    console.log('发射删除组件事件！ appid ' + appId);
  }
}
