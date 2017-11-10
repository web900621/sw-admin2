import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule, Http} from '@angular/http';
import {
  DropdownModule,
  ButtonModule,
  DataTableModule,
  SharedModule,
  InputSwitchModule,
  DialogModule,
  GrowlModule,
  InputMaskModule,
  CalendarModule,
  TabViewModule,
  FileUploadModule,
  CheckboxModule,
  InputTextareaModule,
  SliderModule,
  OrderListModule,
  PickListModule,
  ConfirmDialogModule
} from 'primeng/primeng';
import {AngularDraggableModule} from 'angular2-draggable';

import {EventbusService} from './eventbus.service';

import {GrowlService} from '../shared/globalmsg.service';
import {ConfirmationService} from 'primeng/primeng';
import {welcomeRoutes} from './welcome.routes';
import {WelcomeComponent} from './welcome.component';
import {NavComponent} from './nav/nav.component';
import {HometplComponent} from './hometpl/hometpl.component';
import {TodolistComponent} from './todolist/todolist.component';
import {ApplicationsComponent} from './applications/applications.component';
import {NavTabComponent} from './nav/nav-tab/nav-tab.component';
import {WorkspaceComponent} from './workspace/workspace.component';
import {HometplmasterComponent} from './hometplmaster/hometplmaster.component';
import {HometplgeneralComponent} from './hometplgeneral/hometplgeneral.component';
import {EchartdetailsComponent} from './hometplmaster/echartdetails/echartdetails.component';
import {CygnComponent} from './hometplmaster/cygn/cygn.component';

import {importComs} from './comMgr';

@NgModule({
  declarations: [
    WelcomeComponent,
    NavComponent,
    HometplComponent,
    TodolistComponent,
    ApplicationsComponent,
    NavTabComponent,
    WorkspaceComponent,
    HometplmasterComponent,
    HometplgeneralComponent,
    EchartdetailsComponent,
    CygnComponent,
    ...importComs,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forChild(welcomeRoutes),
    AngularDraggableModule,
    DropdownModule,
    ButtonModule,
    InputSwitchModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    InputMaskModule,
    CalendarModule,
    TabViewModule,
    FileUploadModule,
    CheckboxModule,
    InputTextareaModule,
    SliderModule,
    OrderListModule,
    PickListModule,
    ConfirmDialogModule
  ],
  entryComponents: [
    ...importComs
  ],
  providers: [
    GrowlService,
    EventbusService,
    ConfirmationService
  ]
})
export class WelcomeModule {
}
