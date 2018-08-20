import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentProfileComponent } from './add-student-profile.component';

describe('AddStudentProfileComponent', () => {
  let component: AddStudentProfileComponent;
  let fixture: ComponentFixture<AddStudentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
