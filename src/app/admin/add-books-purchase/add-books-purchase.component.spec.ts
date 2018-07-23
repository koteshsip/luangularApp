import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooksPurchaseComponent } from './add-books-purchase.component';

describe('AddBooksPurchaseComponent', () => {
  let component: AddBooksPurchaseComponent;
  let fixture: ComponentFixture<AddBooksPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBooksPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBooksPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
