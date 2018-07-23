import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassSubjectComponent } from './add-class-subject.component';

describe('AddClassSubjectComponent', () => {
  let component: AddClassSubjectComponent;
  let fixture: ComponentFixture<AddClassSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
