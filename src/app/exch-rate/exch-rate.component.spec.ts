import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchRateComponent } from './exch-rate.component';

describe('ExchRateComponent', () => {
  let component: ExchRateComponent;
  let fixture: ComponentFixture<ExchRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
