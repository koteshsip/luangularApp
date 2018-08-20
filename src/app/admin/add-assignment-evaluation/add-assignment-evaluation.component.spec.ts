import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignmentEvaluationComponent } from './add-assignment-evaluation.component';

describe('AddAssignmentEvaluationComponent', () => {
  let component: AddAssignmentEvaluationComponent;
  let fixture: ComponentFixture<AddAssignmentEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
