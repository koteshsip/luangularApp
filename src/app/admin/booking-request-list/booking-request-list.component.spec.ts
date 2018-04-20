import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestListComponent } from './booking-request-list.component';

describe('BookingRequestListComponent', () => {
  let component: BookingRequestListComponent;
  let fixture: ComponentFixture<BookingRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
