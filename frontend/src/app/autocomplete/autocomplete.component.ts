import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PlaceAutocompleteService } from '../place-autocomplete.service';
import { Subscription } from "rxjs/index";
import { Location } from '../model/location';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Output() public location = new EventEmitter<Location>();

  public name: string;
  public predictions = [];
  private _subscription: Subscription;

  constructor(
    private _placeAutocompleteService: PlaceAutocompleteService
  ) { }

  ngOnInit() {
  }

  public setPredictions = () => {
    if (this.name.length < 4) { return }
    const _subscription = this._placeAutocompleteService.getPredictions(this.name)
      .subscribe((data: any[]) => {
        this.predictions = data;
        _subscription.unsubscribe();
      })
  }

  public onSelect = (prediction) => {
    this.name = prediction.description;
    this.predictions = [];
    const _subscription = this._placeAutocompleteService.getPlaceDetails(prediction.place_id)
      .subscribe((data: Location) => {
        this.location.emit(data);
        _subscription.unsubscribe();
      })
  }
}
