import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogValidationComponentComponent } from './dialog-validation-component.component';

describe('DialogValidationComponentComponent', () => {
  let component: DialogValidationComponentComponent;
  let fixture: ComponentFixture<DialogValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogValidationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
