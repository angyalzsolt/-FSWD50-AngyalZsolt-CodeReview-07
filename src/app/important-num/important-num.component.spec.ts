import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantNumComponent } from './important-num.component';

describe('ImportantNumComponent', () => {
  let component: ImportantNumComponent;
  let fixture: ComponentFixture<ImportantNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
