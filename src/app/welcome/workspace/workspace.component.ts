import {
  Component,
  OnInit,
  OnChanges,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  HostListener,
  ElementRef,
} from '@angular/core';
import {coms} from '../comMgr';
import {Router, ActivatedRoute} from '@angular/router';
import {EventbusService} from '../eventbus.service';
import {ToggleWorkSpaceService} from '../toggle-work-space.service';
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  @ViewChild('box') box: ElementRef;
  @ViewChild('dmroom', {read: ViewContainerRef}) dmRoom: ViewContainerRef;
  private comContainer: any = {};

  constructor(public eventbusService: EventbusService, private cfr: ComponentFactoryResolver,public toggleWorkSpaceService:ToggleWorkSpaceService) {
    this.eventbusService.addComToWorkspace.subscribe((res) => {
      if (res) {
        this.workspaceappIdponent(res);
      }
    });
    this.eventbusService.delComToWorkspace.subscribe((appId) => {
      console.log('接收到订阅消息appid 动态删除组件 ' + appId);
      if (appId) {
        this.delcom(appId);
      }
    });
  }

  ngOnInit() {
    this.setMinHeight();
  }

  workspaceappIdponent(appId) {
    let com = this.cfr.resolveComponentFactory(coms[appId]);
    let comref = this.dmRoom.createComponent(com);
    this.comContainer[appId] = comref;
  }
  delcom(appId) {
    this.comContainer[appId].destroy();
    delete this.comContainer[appId];
    console.log(this.comContainer);
    // 每次删除完一个标签 默认回到功能大全并且切换workspace的状态为隐藏
    this.toggleWorkSpaceService.workSpaceIsShow = false;
  }

  setMinHeight() {
    const Height = window.innerHeight;
    this.box.nativeElement.style.minHeight = (Height - 70 - 30) + 'px';
  }
}
