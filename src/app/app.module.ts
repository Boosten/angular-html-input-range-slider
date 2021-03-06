import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgSliderComponent } from './ng-slider/ng-slider.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NgSliderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
