import {JtrksqComponent} from './coms/khdagl/jtrksq/jtrksq.component';
import {JtrksqchildComponent} from './coms/khdagl/jtrksq/jtrksqchild/jtrksqchild.component';
import {YsxzglComponent} from './coms/khdagl/ysxzgl/ysxzgl.component';
import {WaterpriceadjustmentComponent} from './coms/khdagl/waterpriceadjustment/waterpriceadjustment.component';
import {BookadjustmentComponent} from './coms/cbgl/bookadjustment/bookadjustment.component';
import {ManualinputComponent} from './coms/cbgl/manualinput/manualinput.component';
import {RemoteinputComponent} from './coms/cbgl/remoteinput/remoteinput.component';
import {CounterchargesComponent} from './coms/sfgl/countercharges/countercharges.component';
import {CounterchargeschildComponent} from './coms/sfgl/countercharges/counterchargeschild/counterchargeschild.component';
import {PrepaidwatermeterfeeComponent} from './coms/sfgl/prepaidwatermeterfee/prepaidwatermeterfee.component';
import {PrepaidwatermeterfeechildComponent} from './coms/sfgl/prepaidwatermeterfee/prepaidwatermeterfeechild/prepaidwatermeterfeechild.component';
import {SettlementComponent} from './coms/sfgl/settlement/settlement.component';
import {SettlementchildComponent} from './coms/sfgl/settlement/settlementchild/settlementchild.component';
import {WriteoffComponent} from './coms/sfgl/writeoff/writeoff.component';
import {LiquidateddamagesreductionComponent} from './coms/zwgl/liquidateddamagesreduction/liquidateddamagesreduction.component';
import {LiquidateddamagesreductionchildComponent} from './coms/zwgl/liquidateddamagesreduction/liquidateddamagesreductionchild/liquidateddamagesreductionchild.component';
import {NotsalesadjustmentComponent} from './coms/zwgl/notsalesadjustment/notsalesadjustment.component';
import {NotsalesadjustmentchildComponent} from './coms/zwgl/notsalesadjustment/notsalesadjustmentchild/notsalesadjustmentchild.component';
import {InvoicedumpedComponent} from './coms/fpgl/invoicedumped/invoicedumped.component';
import {DatastatisticsComponent} from './reports/datastatistics/datastatistics.component';
import {Datastatistics2Component} from './reports/datastatistics2/datastatistics2.component';
import {Datastatistics3Component} from './reports/datastatistics3/datastatistics3.component';
import {RecoveryComponent} from './reports/recovery/recovery.component';
import {CopyrateComponent} from './reports/copyrate/copyrate.component';
import {PaymentmethodComponent} from './reports/paymentmethod/paymentmethod.component';
import {WaterqualityComponent} from './reports/waterquality/waterquality.component';
import {ChargeComponent} from './reports/charge/charge.component';
import {ChargemoneyComponent} from './reports/chargemoney/chargemoney.component';
import {BlankreportsComponent} from './reports/blankreports/blankreports.component';
import {DiyreportsComponent} from './diyreports/diyreports.component';
import {PrintComponent} from './coms/fpgl/print/print.component';

let coms = {
    'jtrksq': JtrksqComponent,
    'ysxzgl': YsxzglComponent,
    'waterpriceadjustment': WaterpriceadjustmentComponent,
    'bookadjustment': BookadjustmentComponent,
    'manualinput': ManualinputComponent,
    'remoteinput': RemoteinputComponent,
    'countercharges': CounterchargesComponent,
    'prepaidwatermeterfee': PrepaidwatermeterfeeComponent,
    'settlement': SettlementComponent,
    'writeoff': WriteoffComponent,
    'liquidateddamagesreduction': LiquidateddamagesreductionComponent,
    'notsalesadjustment': NotsalesadjustmentComponent,
    'invoicedumped': InvoicedumpedComponent,
    'print': PrintComponent
  }
;

const importComs = [
  JtrksqchildComponent,
  JtrksqComponent,
  YsxzglComponent,
  WaterpriceadjustmentComponent,
  BookadjustmentComponent,
  ManualinputComponent,
  RemoteinputComponent,
  CounterchargesComponent,
  CounterchargeschildComponent,
  PrepaidwatermeterfeeComponent,
  PrepaidwatermeterfeechildComponent,
  SettlementComponent,
  SettlementchildComponent,
  WriteoffComponent,
  LiquidateddamagesreductionComponent,
  LiquidateddamagesreductionchildComponent,
  NotsalesadjustmentComponent,
  NotsalesadjustmentchildComponent,
  InvoicedumpedComponent,
  DatastatisticsComponent,
  Datastatistics2Component,
  Datastatistics3Component,
  RecoveryComponent,
  CopyrateComponent,
  PaymentmethodComponent,
  WaterqualityComponent,
  ChargeComponent,
  ChargemoneyComponent,
  BlankreportsComponent,
  DiyreportsComponent,
  PrintComponent
];

export {coms, importComs}
