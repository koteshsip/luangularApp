import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDetailListComponent } from './exam-detail-list.component';

describe('ExamDetailListComponent', () => {
  let component: ExamDetailListComponent;
  let fixture: ComponentFixture<ExamDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
