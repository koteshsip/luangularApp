import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceBankComponent } from './add-resource-bank.component';

describe('AddResourceBankComponent', () => {
  let component: AddResourceBankComponent;
  let fixture: ComponentFixture<AddResourceBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResourceBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResourceBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
