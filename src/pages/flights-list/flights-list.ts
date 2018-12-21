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

  sortBy(key: string) {
    switch (key) {
      case 'departure':
          this.flights.sort((a, b) => (a.departure.iataCode > b.departure.iataCode) ? 1 : ((b.departure.iataCode > a.departure.iataCode) ? -1 : 0)); 
        break;

      case 'arrival':
          this.flights.sort((a, b) => (a.arrival.iataCode > b.arrival.iataCode) ? 1 : ((b.arrival.iataCode > a.arrival.iataCode) ? -1 : 0)); 
        break;


      case 'departure.scheduledTime':
          this.flights.sort((a, b) => (a.departure.scheduledTime > b.departure.scheduledTime) ? 1 : ((b.departure.scheduledTime > a.departure.scheduledTime) ? -1 : 0)); 
        break;

      case 'arrival.scheduledTime':
          this.flights.sort((a, b) => (a.arrival.scheduledTime > b.arrival.scheduledTime) ? 1 : ((b.arrival.scheduledTime > a.arrival.scheduledTime) ? -1 : 0)); 
        break;

      case 'status':
          this.flights.sort((a, b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0)); 
        break;
    
      default:
        break;
    }
  }


}
