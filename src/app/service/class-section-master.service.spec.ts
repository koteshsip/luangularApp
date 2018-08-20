import { TestBed, inject } from '@angular/core/testing';

import { ClassSectionMasterService } from './class-section-master.service';

describe('ClassSectionMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassSectionMasterService]
    });
  });

  it('should be created', inject([ClassSectionMasterService], (service: ClassSectionMasterService) => {
    expect(service).toBeTruthy();
  }));
});
