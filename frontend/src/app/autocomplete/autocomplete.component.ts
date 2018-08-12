import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlaceAutocompleteService } from '../place-autocomplete.service';
import { Location } from '../model/location';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Output() public locationEmitter = new EventEmitter<Location>();

  public location = new Location(36.4072574, 10.6224706, '', false);
  public predictions = [];

  constructor(
    private _placeAutocompleteService: PlaceAutocompleteService
  ) { }

  ngOnInit() {
    this.locationEmitter.emit(this.location);
  }

  public setPredictions = (): void => {
    this.location.visible = false;
    if (this.location.name.length < 4) { return }
    const _subscription = this._placeAutocompleteService.getPredictions(this.location.name)
      .subscribe((data: any[]) => {
        this.predictions = data;
        _subscription.unsubscribe();
      })
  }

  public onSelect = (prediction): void => {
    this.location.name = prediction.description;
    this.predictions = [];
    const _subscription = this._placeAutocompleteService.getPlaceDetails(prediction.place_id)
      .subscribe((data: Location) => {
        this.location.lat = data.lat;
        this.location.lng= data.lng;
        this.location.visible = true;
        _subscription.unsubscribe();
      })
  }

  public removePlace = (): void => {
    this.location.name = '';
    this.location.visible = false;
  }
}
