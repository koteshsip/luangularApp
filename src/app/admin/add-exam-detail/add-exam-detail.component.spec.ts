import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamDetailComponent } from './add-exam-detail.component';

describe('AddExamDetailComponent', () => {
  let component: AddExamDetailComponent;
  let fixture: ComponentFixture<AddExamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
