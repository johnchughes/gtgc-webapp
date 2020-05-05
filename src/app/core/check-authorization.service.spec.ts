import { TestBed } from '@angular/core/testing';

import { CheckAuthorizationService } from './check-authorization.service';

describe('CheckAuthorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckAuthorizationService = TestBed.get(CheckAuthorizationService);
    expect(service).toBeTruthy();
  });
});
