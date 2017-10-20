import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ToggleWorkSpaceService} from './toggle-work-space.service';
import {GrowlService} from '../shared/globalmsg.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(public growlService:GrowlService,public toggleWorkSpaceService: ToggleWorkSpaceService, public router: Router) {
  }

  ngOnInit() {
  }
}
