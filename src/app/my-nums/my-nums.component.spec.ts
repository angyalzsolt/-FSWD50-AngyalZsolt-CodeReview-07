import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNumsComponent } from './my-nums.component';

describe('MyNumsComponent', () => {
  let component: MyNumsComponent;
  let fixture: ComponentFixture<MyNumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
