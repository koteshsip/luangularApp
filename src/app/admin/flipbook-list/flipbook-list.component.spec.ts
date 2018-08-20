import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipbookListComponent } from './flipbook-list.component';

describe('FlipbookListComponent', () => {
  let component: FlipbookListComponent;
  let fixture: ComponentFixture<FlipbookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipbookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
