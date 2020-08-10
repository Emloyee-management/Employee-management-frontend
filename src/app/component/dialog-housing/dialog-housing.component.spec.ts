import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHousingComponent } from './dialog-housing.component';

describe('DialogHousingComponent', () => {
  let component: DialogHousingComponent;
  let fixture: ComponentFixture<DialogHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
