import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule, Http} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {appRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

import {NavtabService} from './welcome/nav/nav-tab/navtab.service';
import {ToggleWorkSpaceService} from './welcome/toggle-work-space.service';
import {ApplicationsService} from './welcome/applications/applications.service';
import {HometplmasterService} from './welcome/hometplmaster/hometplmaster.service';
import {CygnService} from './welcome/hometplmaster/cygn/cygn.service';
import {HometplService} from './welcome/hometpl/hometpl.service';

import {JtrksqService} from './welcome/coms/khdagl/jtrksq/jtrksq.service';
import {YsxzglService} from './welcome/coms/khdagl/ysxzgl/ysxzgl.service';
import {WaterpriceadjustmentService} from './welcome/coms/khdagl/waterpriceadjustment/waterpriceadjustment.service';
import {BookadjustmentService} from './welcome/coms/cbgl/bookadjustment/bookadjustment.service';
import {ManualinputService} from './welcome/coms/cbgl/manualinput/manualinput.service';
import {RemoteinputService} from './welcome/coms/cbgl/remoteinput/remoteinput.service';
import {CounterchargesService} from './welcome/coms/sfgl/countercharges/countercharges.service';
import {PrepaidwatermeterfeeService} from './welcome/coms/sfgl/prepaidwatermeterfee/prepaidwatermeterfee.service';
import {SettlementService} from './welcome/coms/sfgl/settlement/settlement.service';
import {WriteoffService} from './welcome/coms/sfgl/writeoff/writeoff.service';
import {LiquidateddamagesreductionService} from './welcome/coms/zwgl/liquidateddamagesreduction/liquidateddamagesreduction.service';
import {NotsalesadjustmentService} from './welcome/coms/zwgl/notsalesadjustment/notsalesadjustment.service';
import {InvoicedumpedService} from './welcome/coms/fpgl/invoicedumped/invoicedumped.service';

import {DatastatisticsService} from './welcome/reports/datastatistics/datastatistics.service';
import {Datastatistics2Service} from './welcome/reports/datastatistics2/datastatistics2.service';
import {Datastatistics3Service} from './welcome/reports/datastatistics3/datastatistics3.service';
import {RecoveryService} from './welcome/reports/recovery/recovery.service';
import {CopyrateService} from './welcome/reports/copyrate/copyrate.service';
import {PaymentmethodService} from './welcome/reports/paymentmethod/paymentmethod.service';
import {WaterqualityService} from './welcome/reports/waterquality/waterquality.service';
import {ChargeService} from './welcome/reports/charge/charge.service';
import {ChargemoneyService} from './welcome/reports/chargemoney/chargemoney.service';
import {DiyreportsService} from './welcome/diyreports/diyreports.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    NavtabService,
    ToggleWorkSpaceService,
    HometplService,
    ApplicationsService,
    HometplmasterService,
    CygnService,
    JtrksqService,
    YsxzglService,
    WaterpriceadjustmentService,
    BookadjustmentService,
    ManualinputService,
    RemoteinputService,
    CounterchargesService,
    PrepaidwatermeterfeeService,
    SettlementService,
    WriteoffService,
    LiquidateddamagesreductionService,
    NotsalesadjustmentService,
    InvoicedumpedService,
    DatastatisticsService,
    Datastatistics2Service,
    Datastatistics3Service,
    RecoveryService,
    CopyrateService,
    PaymentmethodService,
    WaterqualityService,
    ChargeService,
    ChargemoneyService,
    DiyreportsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
