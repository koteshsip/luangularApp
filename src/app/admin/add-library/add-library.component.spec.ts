import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibraryComponent } from './add-library.component';

describe('AddLibraryComponent', () => {
  let component: AddLibraryComponent;
  let fixture: ComponentFixture<AddLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
