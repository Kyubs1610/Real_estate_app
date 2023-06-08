import { TestBed } from '@angular/core/testing';

import { TenantsService } from './tenant.service';

describe('TenantsService', () => {
  let service: TenantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
