import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentAddressComponent } from './add-student-address.component';

describe('AddStudentAddressComponent', () => {
  let component: AddStudentAddressComponent;
  let fixture: ComponentFixture<AddStudentAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
