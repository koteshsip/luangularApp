import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSubjectListComponent } from './class-subject-list.component';

describe('ClassSubjectListComponent', () => {
  let component: ClassSubjectListComponent;
  let fixture: ComponentFixture<ClassSubjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSubjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
