import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimetableScheduleComponent } from './add-timetable-schedule.component';

describe('AddTimetableScheduleComponent', () => {
  let component: AddTimetableScheduleComponent;
  let fixture: ComponentFixture<AddTimetableScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTimetableScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimetableScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
