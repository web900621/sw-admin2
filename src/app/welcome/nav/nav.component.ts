import {Component, OnInit} from '@angular/core';
import {ToggleWorkSpaceService} from '../toggle-work-space.service';
import {NavtabService} from './nav-tab/navtab.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public toggleWorkSpaceService: ToggleWorkSpaceService, public navtabService: NavtabService) {
  }

  ngOnInit() {
  }

  workspacehidden() {
    this.toggleWorkSpaceService.workSpaceIsShow = false;
    this.navtabService.selectId = '';
  }
}
