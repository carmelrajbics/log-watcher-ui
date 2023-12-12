import { TestBed } from '@angular/core/testing';

import { LogAnalyserService } from './log-analyser.service';

describe('LogAnalyserService', () => {
  let service: LogAnalyserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogAnalyserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
