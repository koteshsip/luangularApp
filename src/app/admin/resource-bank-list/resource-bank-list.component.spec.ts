import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceBankListComponent } from './resource-bank-list.component';

describe('ResourceBankListComponent', () => {
  let component: ResourceBankListComponent;
  let fixture: ComponentFixture<ResourceBankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceBankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceBankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
