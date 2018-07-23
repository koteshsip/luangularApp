import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPurchaseListComponent } from './books-purchase-list.component';

describe('BooksPurchaseListComponent', () => {
  let component: BooksPurchaseListComponent;
  let fixture: ComponentFixture<BooksPurchaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksPurchaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPurchaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
