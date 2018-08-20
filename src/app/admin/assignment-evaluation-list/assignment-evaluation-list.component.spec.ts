import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentEvaluationListComponent } from './assignment-evaluation-list.component';

describe('AssignmentEvaluationListComponent', () => {
  let component: AssignmentEvaluationListComponent;
  let fixture: ComponentFixture<AssignmentEvaluationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentEvaluationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentEvaluationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
