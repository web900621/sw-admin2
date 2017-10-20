import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometplgeneralComponent } from './hometplgeneral.component';

describe('HometplgeneralComponent', () => {
  let component: HometplgeneralComponent;
  let fixture: ComponentFixture<HometplgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometplgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometplgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
