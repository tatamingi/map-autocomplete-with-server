import { Component } from '@angular/core';
import { Location } from './model/location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public location = new Location(36.4072574, 10.6224706);
  public zoom = 9;

  public setLocation = (location: Location): void => {
    this.location = location;
    this.zoom = 12;
  }
}
