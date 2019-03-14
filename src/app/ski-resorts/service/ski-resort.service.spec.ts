import { TestBed } from '@angular/core/testing';

import { SkiResortService } from './ski-resort.service';

describe('SkiResortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkiResortService = TestBed.get(SkiResortService);
    expect(service).toBeTruthy();
  });
});
