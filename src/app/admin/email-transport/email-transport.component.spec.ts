import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTransportComponent } from './email-transport.component';

describe('EmailTransportComponent', () => {
  let component: EmailTransportComponent;
  let fixture: ComponentFixture<EmailTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
