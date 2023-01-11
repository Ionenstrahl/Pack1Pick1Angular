import { TestBed } from '@angular/core/testing';

import { CardDataProviderService } from './card-data-provider.service';

describe('CardDataProviderService', () => {
  let service: CardDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
