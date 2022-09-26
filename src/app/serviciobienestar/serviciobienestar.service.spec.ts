import { TestBed } from '@angular/core/testing';

import { ServiciobienestarService } from './serviciobienestar.service';

describe('ServiciobienestarService', () => {
  let service: ServiciobienestarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciobienestarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
