import { TestBed } from '@angular/core/testing';

import { DeleteRoomService } from './delete-room.service';

describe('DeleteRoomService', () => {
  let service: DeleteRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
