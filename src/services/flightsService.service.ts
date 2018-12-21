import { Flight } from "../models/Flight";
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';


@Injectable()
export class FlightsService {


    dataApi: Flight[];

    apiKey: string = "700da2-030cc0";
    iataCode: string = "LYS";
    flightType: string = "departure";
    apiUrl: string = 'http://aviation-edge.com/v2/public/timetable?key='+this.apiKey+'&iataCode='+this.iataCode+'&type='+this.flightType;
    
    constructor(private http: Http) {}


    loadDataFromAPI() {
        if (this.dataApi) {
            // Si this.data existe, alors on a déjà une donnée
            return Promise.resolve(this.dataApi);
        }

        // La data n'existe pas encore
        return new Promise<Flight[]>(resolve => {

            // On utilise Angular HTTP provider pour traiter la requête,
            // puis (then) à la réponse, on mappe la donnée JSON à un objet JS.
            // Ensuite, on traite la donnée et on résoud la promesse avec la nouvelle donnée.
            this.http.get(this.apiUrl)
                .map(res => res.json())
                .subscribe(data => {
                    // On prend la donnée brute qu'on enregistre dans this.dataApi
                    this.dataApi = data;  
                    resolve(this.dataApi);
                });
        });
    }
}