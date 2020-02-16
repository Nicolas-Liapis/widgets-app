import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BackButtonComponent } from './components/buttons/back-button/back-button.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DateP} from './pipes/date-pipe.pipe';
import { PercentPipe, CurrencyPipe } from '@angular/common';
import { BeautyPipe } from './pipes/beauty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    BackButtonComponent,
    ResultPageComponent,
    DateP,
    BeautyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PercentPipe, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
