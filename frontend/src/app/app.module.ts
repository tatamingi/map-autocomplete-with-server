import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCU6bsx-PLT5fW02T5GeiwA8cOOY7l2rU4",
      libraries: ["places"]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
