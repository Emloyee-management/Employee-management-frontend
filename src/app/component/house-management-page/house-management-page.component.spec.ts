import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseManagementPageComponent } from './house-management-page.component';

describe('HouseManagementPageComponent', () => {
  let component: HouseManagementPageComponent;
  let fixture: ComponentFixture<HouseManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
