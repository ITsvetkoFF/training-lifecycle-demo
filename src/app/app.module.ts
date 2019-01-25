import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Level1Component } from './level1/level1.component';
import { Level21Component } from './level21/level21.component';
import { Level22Component } from './level22/level22.component';
import { Level31Component } from './level31/level31.component';
import { Level32Component } from './level32/level32.component';
import { Level33Component } from './level33/level33.component';
import { Level34Component } from './level34/level34.component';

@NgModule({
  declarations: [
    AppComponent,
    Level1Component,
    Level21Component,
    Level22Component,
    Level31Component,
    Level32Component,
    Level33Component,
    Level34Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
