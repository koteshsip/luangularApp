import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlipbookComponent } from './add-flipbook.component';

describe('AddFlipbookComponent', () => {
  let component: AddFlipbookComponent;
  let fixture: ComponentFixture<AddFlipbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlipbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlipbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
