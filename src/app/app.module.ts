import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FlightPage } from '../pages/flight/flight';
import { FlightsListPage } from '../pages/flights-list/flights-list';
import { FlightsService } from '../services/flightsService.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FlightPage,
    FlightsListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FlightPage,
    FlightsListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlightsService
  ]
})
export class AppModule {}
