import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlightsListPage } from '../flights-list/flights-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToFlights() {
    this.navCtrl.push(FlightsListPage);
  }

}
