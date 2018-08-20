import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoomsComponent } from './class-rooms.component';

describe('ClassRoomsComponent', () => {
  let component: ClassRoomsComponent;
  let fixture: ComponentFixture<ClassRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
