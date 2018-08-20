import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotesCategoryComponent } from './add-notes-category.component';

describe('AddNotesCategoryComponent', () => {
  let component: AddNotesCategoryComponent;
  let fixture: ComponentFixture<AddNotesCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotesCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
