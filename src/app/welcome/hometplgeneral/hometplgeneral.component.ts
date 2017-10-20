import { Component, OnInit ,Input} from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-hometplgeneral',
  templateUrl: './hometplgeneral.component.html',
  styleUrls: ['./hometplgeneral.component.scss']
})
export class HometplgeneralComponent implements OnInit {
  @Input() portlets: any;
  public generalZwnyY: SelectItem[];
  public generalZwnyM: SelectItem[];
  public generalSelectedY: any;
  public generalSelectedM: any;
  constructor() {
    this.generalZwnyY = [
      {label: '2017', value: '2017'},
      {label: '2016', value: '2016'},
      {label: '2015', value: '2015'},
    ];
    this.generalZwnyM = [
      {label: '12', value: '12'},
      {label: '10', value: '10'},
      {label: '8', value: '8'},
      {label: '6', value: '6'},
    ];
  }

  ngOnInit() {
    console.log(this.portlets);
  }

}
