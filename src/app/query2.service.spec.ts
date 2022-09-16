import { TestBed } from '@angular/core/testing';

import { Query2Service } from './query2.service';

describe('Query2Service', () => {
  let service: Query2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Query2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
