import {Component, OnInit} from '@angular/core';
import {HometplService} from './hometpl.service';
@Component({
  selector: 'app-hometpl',
  templateUrl: './hometpl.component.html',
  styleUrls: ['./hometpl.component.scss']
})
export class HometplComponent implements OnInit {
  public portlets:any;
  public userType: any = '';

  constructor(public hometplService:HometplService) {
  }

  ngOnInit() {
    this.hometplService.getdata().subscribe((res)=>{
      this.portlets = res.json().portlets;
      this.userType = res.json().type;
    });

  }

}
