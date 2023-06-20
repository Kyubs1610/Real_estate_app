import { TestBed } from '@angular/core/testing';

import { ContractmailService } from './contractmail.service';

describe('ContractmailService', () => {
  let service: ContractmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
