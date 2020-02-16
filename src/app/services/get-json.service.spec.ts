import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GetJsonService } from './get-json.service';

describe('GetJsonService', () => {
  let service: GetJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GetJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
