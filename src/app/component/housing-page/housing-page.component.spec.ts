import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingPageComponent } from './housing-page.component';

describe('HousingPageComponent', () => {
  let component: HousingPageComponent;
  let fixture: ComponentFixture<HousingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
