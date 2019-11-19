import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { DurationPipe } from './duration.pipe';
import { ShortUrlPipe } from './short-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FrontPageComponent,
    DurationPipe,
    ShortUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
