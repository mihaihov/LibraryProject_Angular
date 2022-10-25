import { TestBed } from '@angular/core/testing';

import { MyaccountGuard } from './myaccount.guard';

describe('MyaccountGuard', () => {
  let guard: MyaccountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyaccountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
