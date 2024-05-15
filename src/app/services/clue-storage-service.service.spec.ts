import { TestBed } from '@angular/core/testing';

import { ClueStorageServiceService } from './clue-storage.service';

describe('ClueStorageServiceService', () => {
  let service: ClueStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClueStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
