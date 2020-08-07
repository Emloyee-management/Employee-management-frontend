import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityReportPageComponent } from './facility-report-page.component';

describe('FacilityReportPageComponent', () => {
  let component: FacilityReportPageComponent;
  let fixture: ComponentFixture<FacilityReportPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityReportPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
