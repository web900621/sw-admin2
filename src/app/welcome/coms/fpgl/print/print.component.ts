import { Component, OnInit } from '@angular/core';
import {NavtabService} from '../../../nav/nav-tab/navtab.service';
declare var getLodop: any;
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  public appid = 'print';

  constructor(public navtabService: NavtabService) { }
  ngOnInit() {
  }
  print(){
    let LODOP=getLodop(document.getElementById('LODOP2'),document.getElementById('LODOP_EM2'));
    console.log(LODOP)
  }
}
