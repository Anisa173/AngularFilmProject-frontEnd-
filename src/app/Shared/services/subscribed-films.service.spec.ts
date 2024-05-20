import { TestBed } from '@angular/core/testing';

import { SubscribedFilmsService } from './subscribed-films.service';

describe('SubscribedFilmsService', () => {
  let service: SubscribedFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribedFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
