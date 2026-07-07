import { TestBed } from '@angular/core/testing';

import { Gpec } from './gpec';

describe('Gpec', () => {
  let service: Gpec;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gpec);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
