import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartingPageComponent } from './component/starting-page/starting-page.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';

@NgModule({
  declarations: [AppComponent, StartingPageComponent, ErrorPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
