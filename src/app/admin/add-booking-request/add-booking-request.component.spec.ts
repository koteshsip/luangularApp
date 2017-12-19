import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingRequestComponent } from './add-booking-request.component';

describe('AddBookingRequestComponent', () => {
  let component: AddBookingRequestComponent;
  let fixture: ComponentFixture<AddBookingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
