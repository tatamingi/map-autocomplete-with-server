import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Location } from './model/location';
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class PlaceAutocompleteService {

  constructor(private _http: HttpClient) { }

  public getPredictions(searchParam: string) {
    return this._http.get('/predictions/' + searchParam);
  }

  public getPlaceDetails(placeId: string): Observable<Location> {
    return this._http.get<Location>('/details/' + placeId);
  }
}
