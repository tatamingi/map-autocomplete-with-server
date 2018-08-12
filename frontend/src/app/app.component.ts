import { Component } from '@angular/core';
import { Location } from './model/location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public location: Location;
  public zoom = 9;

  public setLocation = (location: Location): void => {
    debugger
    this.location = location;
    this.zoom = 12;
  }
}
