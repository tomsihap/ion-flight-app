import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FlightsService } from '../../services/flightsService.service';
import { Flight } from '../../models/Flight';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FlightsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-flights-list',
  templateUrl: 'flights-list.html',
})
export class FlightsListPage {

  flights: Flight[];
  
  /**
   * Ce que je dois faire pour construire la page 
   */
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public flightsService: FlightsService) {

      this.loadFlights();
  }

  /**
   * Ce que je dois faire lorsque la page s'affiche
   */
  loadFlights() {

    //this.flights = this.flightsService.flights;

    this.flightsService.loadDataFromAPI()
      .then(data => {
        this.flights = data;
        console.log(data)
      });

  }


}
