import { TestBed } from '@angular/core/testing';

import { ObserverwidthService } from './observerwidth.service';

describe('ObserverwidthService', () => {
  let service: ObserverwidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserverwidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
