import { TestBed, inject } from '@angular/core/testing';

import { AddplayerService } from './addplayer.service';

describe('AddplayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddplayerService]
    });
  });

  it('should be created', inject([AddplayerService], (service: AddplayerService) => {
    expect(service).toBeTruthy();
  }));
});
