import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @ViewChild('box') box: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.setMinHeight()
  }

  setMinHeight() {
    const Height = window.innerHeight;
    this.box.nativeElement.style.minHeight = (Height - 70 - 30) + 'px';
  }
}
