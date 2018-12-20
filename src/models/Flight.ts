export class Flight {

    type: string;
    status: string;
    departure: { 
        iataCode?: string,
        icaoCode?: string,
        terminal?: string,
        gate?: string,
        delay?: number,
        scheduledTime?: string,
        estimatedTime?: string,
        actualTime?: string,
        estimatedRunway?: string,
        actualRunway?: string,
    };

    arrival: {
        iataCode?: string,
        icaoCode?: string,
        terminal?: string,
        gate?: string,
        baggage?: string,
        delay?: number,
        scheduledTime?: string,
        estimatedTime?: string,
        actualTime?: string,
        estimatedRunway?: string,
        actualRunway?: string,
    };

    airline: {
        name: string,
        iataCode: string,
        icaoCode: string,
    };

    flight: {
        number: string;
        iataNumber: string;
        icaoNumber: string;
    };

    codeshared?:
    {
        airline:
        {
            name: string;
            iataCode: string;
            icaoCode: string;
        },
        flight:
        {
            number: string;
            iataNumber: string;
            icaoNumber: string;
        }
    } = null;

    constructor() {
        
    }
}
    