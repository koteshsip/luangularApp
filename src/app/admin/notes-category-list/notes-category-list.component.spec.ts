import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCategoryListComponent } from './notes-category-list.component';

describe('NotesCategoryListComponent', () => {
  let component: NotesCategoryListComponent;
  let fixture: ComponentFixture<NotesCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
