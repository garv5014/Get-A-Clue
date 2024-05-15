import { TestBed } from '@angular/core/testing';

import { ClueStorageService } from './clue-storage.service';

describe('ClueStorageServiceService', () => {
  let service: ClueStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClueStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
