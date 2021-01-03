import { TestBed } from '@angular/core/testing';

import { MockCollegeService } from './mock-college.service';

describe('MockCollegeService', () => {
  let service: MockCollegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCollegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
