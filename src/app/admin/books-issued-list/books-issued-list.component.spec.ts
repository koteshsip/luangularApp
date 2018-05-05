import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksIssuedListComponent } from './books-issued-list.component';

describe('BooksIssuedListComponent', () => {
  let component: BooksIssuedListComponent;
  let fixture: ComponentFixture<BooksIssuedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksIssuedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksIssuedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
