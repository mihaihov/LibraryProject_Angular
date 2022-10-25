import { TestBed } from '@angular/core/testing';

import { ProtectDetailsGuard } from './protect-details.guard';

describe('ProtectDetailsGuard', () => {
  let guard: ProtectDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
