import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooksIssuedComponent } from './add-books-issued.component';

describe('AddBooksIssuedComponent', () => {
  let component: AddBooksIssuedComponent;
  let fixture: ComponentFixture<AddBooksIssuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBooksIssuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBooksIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
