import { TestBed } from '@angular/core/testing';

import { ExchRateService } from './exch-rate.service';

describe('ExchRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchRateService = TestBed.get(ExchRateService);
    expect(service).toBeTruthy();
  });
});
