import { TestBed, inject } from '@angular/core/testing';

import { PlaceAutocompleteService } from './place-autocomplete.service';

describe('PlaceAutocompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceAutocompleteService]
    });
  });

  it('should be created', inject([PlaceAutocompleteService], (service: PlaceAutocompleteService) => {
    expect(service).toBeTruthy();
  }));
});
