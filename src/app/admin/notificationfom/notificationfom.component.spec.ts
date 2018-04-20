import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationfomComponent } from './notificationfom.component';

describe('LoginComponent', () => {
  let component: NotificationfomComponent;
  let fixture: ComponentFixture<NotificationfomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationfomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationfomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
