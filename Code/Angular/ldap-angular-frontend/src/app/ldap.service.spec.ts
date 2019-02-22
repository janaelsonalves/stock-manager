import { TestBed } from '@angular/core/testing';

import { LdapService } from './ldap.service';

describe('LdapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LdapService = TestBed.get(LdapService);
    expect(service).toBeTruthy();
  });
});
