import { TestBed } from '@angular/core/testing';

import { ForminvestService } from './forminvest.service';

describe('ForminvestService', () => {
  let service: ForminvestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForminvestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
