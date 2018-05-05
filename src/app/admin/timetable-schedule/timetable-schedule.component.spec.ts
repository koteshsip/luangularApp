import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableScheduleComponent } from './timetable-schedule.component';

describe('TimetableScheduleComponent', () => {
  let component: TimetableScheduleComponent;
  let fixture: ComponentFixture<TimetableScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
