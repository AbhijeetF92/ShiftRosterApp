import { TestBed } from '@angular/core/testing';

import { FortnightService } from './fortnight.service';

describe('FortnightService', () => {
  let service: FortnightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortnightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
