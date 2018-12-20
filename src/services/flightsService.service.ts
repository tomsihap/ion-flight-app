import { Flight } from "../models/Flight";

export class FlightsService {

    flights: Flight[] = {} as any;
    
    constructor() {
        
    this.flights = [
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Jet Airways (India)",
                "iataCode": "9W",
                "icaoCode": "JAI"
            },
            "flight": {
                "number": "6719",
                "iataNumber": "9W6719",
                "icaoNumber": "JAI6719"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Aeromexico",
                "iataCode": "AM",
                "icaoCode": "AMX"
            },
            "flight": {
                "number": "6153",
                "iataNumber": "AM6153",
                "icaoNumber": "AMX6153"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Finnair",
                "iataCode": "AY",
                "icaoCode": "FIN"
            },
            "flight": {
                "number": "6342",
                "iataNumber": "AY6342",
                "icaoNumber": "FIN6342"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Flybe",
                "iataCode": "BE",
                "icaoCode": "BEE"
            },
            "flight": {
                "number": "4093",
                "iataNumber": "BE4093",
                "icaoNumber": "BEE4093"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "China Southern Airlines",
                "iataCode": "CZ",
                "icaoCode": "CSN"
            },
            "flight": {
                "number": "7096",
                "iataNumber": "CZ7096",
                "icaoNumber": "CSN7096"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Delta Air Lines",
                "iataCode": "DL",
                "icaoCode": "DAL"
            },
            "flight": {
                "number": "8611",
                "iataNumber": "DL8611",
                "icaoNumber": "DAL8611"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Gol",
                "iataCode": "G3",
                "icaoCode": "GLO"
            },
            "flight": {
                "number": "5026",
                "iataNumber": "G35026",
                "icaoNumber": "GLO5026"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Kenya Airways",
                "iataCode": "KQ",
                "icaoCode": "KQA"
            },
            "flight": {
                "number": "3007",
                "iataNumber": "KQ3007",
                "icaoNumber": "KQA3007"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "TAROM",
                "iataCode": "RO",
                "icaoCode": "ROT"
            },
            "flight": {
                "number": "9540",
                "iataNumber": "RO9540",
                "icaoNumber": "ROT9540"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Singapore Airlines",
                "iataCode": "SQ",
                "icaoCode": "SIA"
            },
            "flight": {
                "number": "1879",
                "iataNumber": "SQ1879",
                "icaoNumber": "SIA1879"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Aeroflot",
                "iataCode": "SU",
                "icaoCode": "AFL"
            },
            "flight": {
                "number": "3032",
                "iataNumber": "SU3032",
                "icaoNumber": "AFL3032"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Vietnam Airlines",
                "iataCode": "VN",
                "icaoCode": "HVN"
            },
            "flight": {
                "number": "3120",
                "iataNumber": "VN3120",
                "icaoNumber": "HVN3120"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7651",
                    "iataNumber": "AF7651",
                    "icaoNumber": "AFR7651"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedTime": "2018-12-20T06:00:00.000",
                "actualTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:11:00.000",
                "actualRunway": "2018-12-20T06:11:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "baggage": "23",
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:07:00.000",
                "actualTime": "2018-12-20T07:07:00.000",
                "estimatedRunway": "2018-12-20T06:59:00.000",
                "actualRunway": "2018-12-20T06:59:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "7651",
                "iataNumber": "AF7651",
                "icaoNumber": "AFR7651"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:54:00.000",
                "actualRunway": "2018-12-20T06:54:00.000"
            },
            "arrival": {
                "iataCode": "TUN",
                "icaoCode": "DTTA",
                "terminal": "M",
                "scheduledTime": "2018-12-20T07:55:00.000",
                "estimatedRunway": "2018-12-20T08:28:00.000",
                "actualRunway": "2018-12-20T08:28:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "3358",
                "iataNumber": "AF3358",
                "icaoNumber": "AFR3358"
            },
            "codeshared": {
                "airline": {
                    "name": "Transavia France",
                    "iataCode": "TO",
                    "icaoCode": "TVF"
                },
                "flight": {
                    "number": "4764",
                    "iataNumber": "TO4764",
                    "icaoNumber": "TVF4764"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T06:00:00.000",
                "estimatedRunway": "2018-12-20T06:54:00.000",
                "actualRunway": "2018-12-20T06:54:00.000"
            },
            "arrival": {
                "iataCode": "TUN",
                "icaoCode": "DTTA",
                "terminal": "M",
                "scheduledTime": "2018-12-20T07:55:00.000",
                "estimatedRunway": "2018-12-20T08:28:00.000",
                "actualRunway": "2018-12-20T08:28:00.000"
            },
            "airline": {
                "name": "Transavia France",
                "iataCode": "TO",
                "icaoCode": "TVF"
            },
            "flight": {
                "number": "4764",
                "iataNumber": "TO4764",
                "icaoNumber": "TVF4764"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T06:15:00.000",
                "estimatedTime": "2018-12-20T06:15:00.000",
                "actualTime": "2018-12-20T06:15:00.000",
                "estimatedRunway": "2018-12-20T06:20:00.000",
                "actualRunway": "2018-12-20T06:20:00.000"
            },
            "arrival": {
                "iataCode": "STR",
                "icaoCode": "EDDS",
                "terminal": "1",
                "scheduledTime": "2018-12-20T07:35:00.000",
                "estimatedTime": "2018-12-20T07:27:00.000",
                "actualTime": "2018-12-20T07:27:00.000",
                "estimatedRunway": "2018-12-20T07:22:00.000"
            },
            "airline": {
                "name": "Twin Jet",
                "iataCode": "T7",
                "icaoCode": "TJT"
            },
            "flight": {
                "number": "41",
                "iataNumber": "T741",
                "icaoNumber": "TJT41"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T06:20:00.000",
                "estimatedRunway": "2018-12-20T07:21:00.000",
                "actualRunway": "2018-12-20T07:21:00.000"
            },
            "arrival": {
                "iataCode": "MIR",
                "icaoCode": "DTMB",
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedRunway": "2018-12-20T08:58:00.000",
                "actualRunway": "2018-12-20T08:58:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "4050",
                "iataNumber": "AF4050",
                "icaoNumber": "AFR4050"
            },
            "codeshared": {
                "airline": {
                    "name": "Transavia France",
                    "iataCode": "TO",
                    "icaoCode": "TVF"
                },
                "flight": {
                    "number": "4990",
                    "iataNumber": "TO4990",
                    "icaoNumber": "TVF4990"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T06:20:00.000",
                "estimatedRunway": "2018-12-20T07:21:00.000",
                "actualRunway": "2018-12-20T07:21:00.000"
            },
            "arrival": {
                "iataCode": "MIR",
                "icaoCode": "DTMB",
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedRunway": "2018-12-20T08:58:00.000",
                "actualRunway": "2018-12-20T08:58:00.000"
            },
            "airline": {
                "name": "Transavia France",
                "iataCode": "TO",
                "icaoCode": "TVF"
            },
            "flight": {
                "number": "4990",
                "iataNumber": "TO4990",
                "icaoNumber": "TVF4990"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T06:30:00.000",
                "estimatedTime": "2018-12-20T06:25:00.000",
                "actualTime": "2018-12-20T06:25:00.000",
                "estimatedRunway": "2018-12-20T06:33:00.000",
                "actualRunway": "2018-12-20T06:33:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 4",
                "scheduledTime": "2018-12-20T07:45:00.000",
                "estimatedTime": "2018-12-20T07:44:00.000",
                "actualTime": "2018-12-20T07:44:00.000",
                "estimatedRunway": "2018-12-20T07:39:00.000",
                "actualRunway": "2018-12-20T07:39:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5447",
                "iataNumber": "AF5447",
                "icaoNumber": "AFR5447"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4100",
                    "iataNumber": "A54100",
                    "icaoNumber": "HOP4100"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T06:30:00.000",
                "estimatedTime": "2018-12-20T06:25:00.000",
                "actualTime": "2018-12-20T06:25:00.000",
                "estimatedRunway": "2018-12-20T06:33:00.000",
                "actualRunway": "2018-12-20T06:33:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 4",
                "scheduledTime": "2018-12-20T07:45:00.000",
                "estimatedTime": "2018-12-20T07:44:00.000",
                "actualTime": "2018-12-20T07:44:00.000",
                "estimatedRunway": "2018-12-20T07:39:00.000",
                "actualRunway": "2018-12-20T07:39:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4100",
                "iataNumber": "A54100",
                "icaoNumber": "HOP4100"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T06:40:00.000",
                "estimatedTime": "2018-12-20T06:30:00.000",
                "actualTime": "2018-12-20T06:30:00.000",
                "estimatedRunway": "2018-12-20T06:43:00.000",
                "actualRunway": "2018-12-20T06:43:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 1",
                "scheduledTime": "2018-12-20T08:00:00.000",
                "estimatedTime": "2018-12-20T07:53:00.000",
                "estimatedRunway": "2018-12-20T07:47:00.000",
                "actualRunway": "2018-12-20T07:47:00.000"
            },
            "airline": {
                "name": "Aigle Azur",
                "iataCode": "ZI",
                "icaoCode": "AAF"
            },
            "flight": {
                "number": "663",
                "iataNumber": "ZI663",
                "icaoNumber": "AAF663"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T06:35:00.000",
                "estimatedTime": "2018-12-20T06:35:00.000",
                "actualTime": "2018-12-20T06:35:00.000",
                "estimatedRunway": "2018-12-20T06:47:00.000",
                "actualRunway": "2018-12-20T06:47:00.000"
            },
            "arrival": {
                "iataCode": "LHR",
                "icaoCode": "EGLL",
                "terminal": "3",
                "baggage": "10",
                "delay": 1,
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:16:00.000",
                "actualTime": "2018-12-20T07:16:00.000",
                "estimatedRunway": "2018-12-20T07:08:00.000",
                "actualRunway": "2018-12-20T07:08:00.000"
            },
            "airline": {
                "name": "American Airlines",
                "iataCode": "AA",
                "icaoCode": "AAL"
            },
            "flight": {
                "number": "6633",
                "iataNumber": "AA6633",
                "icaoNumber": "AAL6633"
            },
            "codeshared": {
                "airline": {
                    "name": "British Airways",
                    "iataCode": "BA",
                    "icaoCode": "BAW"
                },
                "flight": {
                    "number": "365",
                    "iataNumber": "BA365",
                    "icaoNumber": "BAW365"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T06:35:00.000",
                "estimatedTime": "2018-12-20T06:35:00.000",
                "actualTime": "2018-12-20T06:35:00.000",
                "estimatedRunway": "2018-12-20T06:47:00.000",
                "actualRunway": "2018-12-20T06:47:00.000"
            },
            "arrival": {
                "iataCode": "LHR",
                "icaoCode": "EGLL",
                "terminal": "3",
                "baggage": "10",
                "delay": 1,
                "scheduledTime": "2018-12-20T07:15:00.000",
                "estimatedTime": "2018-12-20T07:16:00.000",
                "actualTime": "2018-12-20T07:16:00.000",
                "estimatedRunway": "2018-12-20T07:08:00.000",
                "actualRunway": "2018-12-20T07:08:00.000"
            },
            "airline": {
                "name": "British Airways",
                "iataCode": "BA",
                "icaoCode": "BAW"
            },
            "flight": {
                "number": "365",
                "iataNumber": "BA365",
                "icaoNumber": "BAW365"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T06:45:00.000",
                "estimatedTime": "2018-12-20T06:35:00.000",
                "actualTime": "2018-12-20T06:35:00.000",
                "estimatedRunway": "2018-12-20T06:40:00.000",
                "actualRunway": "2018-12-20T06:40:00.000"
            },
            "arrival": {
                "iataCode": "ZRH",
                "icaoCode": "LSZH",
                "terminal": "2",
                "baggage": "25",
                "scheduledTime": "2018-12-20T07:50:00.000",
                "estimatedTime": "2018-12-20T07:35:00.000",
                "actualTime": "2018-12-20T07:35:00.000",
                "estimatedRunway": "2018-12-20T07:29:00.000",
                "actualRunway": "2018-12-20T07:29:00.000"
            },
            "airline": {
                "name": "Twin Jet",
                "iataCode": "T7",
                "icaoCode": "TJT"
            },
            "flight": {
                "number": "1271",
                "iataNumber": "T71271",
                "icaoNumber": "TJT1271"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T06:55:00.000",
                "estimatedTime": "2018-12-20T06:55:00.000",
                "actualTime": "2018-12-20T06:55:00.000",
                "estimatedRunway": "2018-12-20T07:10:00.000",
                "actualRunway": "2018-12-20T07:10:00.000"
            },
            "arrival": {
                "iataCode": "TLS",
                "icaoCode": "LFBO",
                "gate": "02",
                "baggage": "1",
                "delay": 5,
                "scheduledTime": "2018-12-20T07:55:00.000",
                "estimatedTime": "2018-12-20T08:00:00.000",
                "actualTime": "2018-12-20T08:00:00.000",
                "estimatedRunway": "2018-12-20T07:56:00.000",
                "actualRunway": "2018-12-20T07:56:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5399",
                "iataNumber": "AF5399",
                "icaoNumber": "AFR5399"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4110",
                    "iataNumber": "A54110",
                    "icaoNumber": "HOP4110"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T06:55:00.000",
                "estimatedTime": "2018-12-20T06:55:00.000",
                "actualTime": "2018-12-20T06:55:00.000",
                "estimatedRunway": "2018-12-20T07:10:00.000",
                "actualRunway": "2018-12-20T07:10:00.000"
            },
            "arrival": {
                "iataCode": "TLS",
                "icaoCode": "LFBO",
                "gate": "02",
                "baggage": "1",
                "delay": 5,
                "scheduledTime": "2018-12-20T07:55:00.000",
                "estimatedTime": "2018-12-20T08:00:00.000",
                "actualTime": "2018-12-20T08:00:00.000",
                "estimatedRunway": "2018-12-20T07:56:00.000",
                "actualRunway": "2018-12-20T07:56:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4110",
                "iataNumber": "A54110",
                "icaoNumber": "HOP4110"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B06",
                "scheduledTime": "2018-12-20T06:55:00.000",
                "estimatedTime": "2018-12-20T06:55:00.000",
                "actualTime": "2018-12-20T06:55:00.000",
                "estimatedRunway": "2018-12-20T07:13:00.000",
                "actualRunway": "2018-12-20T07:13:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "delay": 8,
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:28:00.000",
                "actualTime": "2018-12-20T08:28:00.000",
                "estimatedRunway": "2018-12-20T08:22:00.000",
                "actualRunway": "2018-12-20T08:22:00.000"
            },
            "airline": {
                "name": "Air Canada",
                "iataCode": "AC",
                "icaoCode": "ACA"
            },
            "flight": {
                "number": "9405",
                "iataNumber": "AC9405",
                "icaoNumber": "ACA9405"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1083",
                    "iataNumber": "LH1083",
                    "icaoNumber": "DLH1083"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B06",
                "scheduledTime": "2018-12-20T06:55:00.000",
                "estimatedTime": "2018-12-20T06:55:00.000",
                "actualTime": "2018-12-20T06:55:00.000",
                "estimatedRunway": "2018-12-20T07:13:00.000",
                "actualRunway": "2018-12-20T07:13:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "delay": 8,
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:28:00.000",
                "actualTime": "2018-12-20T08:28:00.000",
                "estimatedRunway": "2018-12-20T08:22:00.000",
                "actualRunway": "2018-12-20T08:22:00.000"
            },
            "airline": {
                "name": "LOT - Polish Airlines",
                "iataCode": "LO",
                "icaoCode": "LOT"
            },
            "flight": {
                "number": "4734",
                "iataNumber": "LO4734",
                "icaoNumber": "LOT4734"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1083",
                    "iataNumber": "LH1083",
                    "icaoNumber": "DLH1083"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B06",
                "scheduledTime": "2018-12-20T06:55:00.000",
                "estimatedTime": "2018-12-20T06:55:00.000",
                "actualTime": "2018-12-20T06:55:00.000",
                "estimatedRunway": "2018-12-20T07:13:00.000",
                "actualRunway": "2018-12-20T07:13:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "delay": 8,
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:28:00.000",
                "actualTime": "2018-12-20T08:28:00.000",
                "estimatedRunway": "2018-12-20T08:22:00.000",
                "actualRunway": "2018-12-20T08:22:00.000"
            },
            "airline": {
                "name": "ANA",
                "iataCode": "NH",
                "icaoCode": "ANA"
            },
            "flight": {
                "number": "5415",
                "iataNumber": "NH5415",
                "icaoNumber": "ANA5415"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1083",
                    "iataNumber": "LH1083",
                    "icaoNumber": "DLH1083"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B06",
                "scheduledTime": "2018-12-20T06:55:00.000",
                "estimatedTime": "2018-12-20T06:55:00.000",
                "actualTime": "2018-12-20T06:55:00.000",
                "estimatedRunway": "2018-12-20T07:13:00.000",
                "actualRunway": "2018-12-20T07:13:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "delay": 8,
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:28:00.000",
                "actualTime": "2018-12-20T08:28:00.000",
                "estimatedRunway": "2018-12-20T08:22:00.000",
                "actualRunway": "2018-12-20T08:22:00.000"
            },
            "airline": {
                "name": "SAS",
                "iataCode": "SK",
                "icaoCode": "SAS"
            },
            "flight": {
                "number": "3340",
                "iataNumber": "SK3340",
                "icaoNumber": "SAS3340"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1083",
                    "iataNumber": "LH1083",
                    "icaoNumber": "DLH1083"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B06",
                "scheduledTime": "2018-12-20T06:55:00.000",
                "estimatedTime": "2018-12-20T06:55:00.000",
                "actualTime": "2018-12-20T06:55:00.000",
                "estimatedRunway": "2018-12-20T07:13:00.000",
                "actualRunway": "2018-12-20T07:13:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "delay": 8,
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:28:00.000",
                "actualTime": "2018-12-20T08:28:00.000",
                "estimatedRunway": "2018-12-20T08:22:00.000",
                "actualRunway": "2018-12-20T08:22:00.000"
            },
            "airline": {
                "name": "Singapore Airlines",
                "iataCode": "SQ",
                "icaoCode": "SIA"
            },
            "flight": {
                "number": "2005",
                "iataNumber": "SQ2005",
                "icaoNumber": "SIA2005"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1083",
                    "iataNumber": "LH1083",
                    "icaoNumber": "DLH1083"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B06",
                "scheduledTime": "2018-12-20T06:55:00.000",
                "estimatedTime": "2018-12-20T06:55:00.000",
                "actualTime": "2018-12-20T06:55:00.000",
                "estimatedRunway": "2018-12-20T07:13:00.000",
                "actualRunway": "2018-12-20T07:13:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "delay": 8,
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:28:00.000",
                "actualTime": "2018-12-20T08:28:00.000",
                "estimatedRunway": "2018-12-20T08:22:00.000",
                "actualRunway": "2018-12-20T08:22:00.000"
            },
            "airline": {
                "name": "United Airlines",
                "iataCode": "UA",
                "icaoCode": "UAL"
            },
            "flight": {
                "number": "8881",
                "iataNumber": "UA8881",
                "icaoNumber": "UAL8881"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1083",
                    "iataNumber": "LH1083",
                    "icaoNumber": "DLH1083"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B06",
                "scheduledTime": "2018-12-20T06:55:00.000",
                "estimatedTime": "2018-12-20T06:55:00.000",
                "actualTime": "2018-12-20T06:55:00.000",
                "estimatedRunway": "2018-12-20T07:13:00.000",
                "actualRunway": "2018-12-20T07:13:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "delay": 8,
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:28:00.000",
                "actualTime": "2018-12-20T08:28:00.000",
                "estimatedRunway": "2018-12-20T08:22:00.000",
                "actualRunway": "2018-12-20T08:22:00.000"
            },
            "airline": {
                "name": "Lufthansa",
                "iataCode": "LH",
                "icaoCode": "DLH"
            },
            "flight": {
                "number": "1083",
                "iataNumber": "LH1083",
                "icaoNumber": "DLH1083"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:00:00.000",
                "actualTime": "2018-12-20T07:00:00.000",
                "estimatedRunway": "2018-12-20T07:12:00.000",
                "actualRunway": "2018-12-20T07:12:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "terminal": "2",
                "gate": "C6",
                "baggage": "010",
                "scheduledTime": "2018-12-20T08:50:00.000",
                "estimatedTime": "2018-12-20T08:50:00.000",
                "actualTime": "2018-12-20T08:50:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "airline": {
                "name": "Jet Airways (India)",
                "iataCode": "9W",
                "icaoCode": "JAI"
            },
            "flight": {
                "number": "8919",
                "iataNumber": "9W8919",
                "icaoNumber": "JAI8919"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM",
                    "iataCode": "KL",
                    "icaoCode": "KLM"
                },
                "flight": {
                    "number": "1412",
                    "iataNumber": "KL1412",
                    "icaoNumber": "KLM1412"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:00:00.000",
                "actualTime": "2018-12-20T07:00:00.000",
                "estimatedRunway": "2018-12-20T07:12:00.000",
                "actualRunway": "2018-12-20T07:12:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "terminal": "2",
                "gate": "C6",
                "baggage": "010",
                "scheduledTime": "2018-12-20T08:50:00.000",
                "estimatedTime": "2018-12-20T08:50:00.000",
                "actualTime": "2018-12-20T08:50:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "8320",
                "iataNumber": "AF8320",
                "icaoNumber": "AFR8320"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM",
                    "iataCode": "KL",
                    "icaoCode": "KLM"
                },
                "flight": {
                    "number": "1412",
                    "iataNumber": "KL1412",
                    "icaoNumber": "KLM1412"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:00:00.000",
                "actualTime": "2018-12-20T07:00:00.000",
                "estimatedRunway": "2018-12-20T07:12:00.000",
                "actualRunway": "2018-12-20T07:12:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "terminal": "2",
                "gate": "C6",
                "baggage": "010",
                "scheduledTime": "2018-12-20T08:50:00.000",
                "estimatedTime": "2018-12-20T08:50:00.000",
                "actualTime": "2018-12-20T08:50:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "airline": {
                "name": "Delta Air Lines",
                "iataCode": "DL",
                "icaoCode": "DAL"
            },
            "flight": {
                "number": "9521",
                "iataNumber": "DL9521",
                "icaoNumber": "DAL9521"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM",
                    "iataCode": "KL",
                    "icaoCode": "KLM"
                },
                "flight": {
                    "number": "1412",
                    "iataNumber": "KL1412",
                    "icaoNumber": "KLM1412"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:00:00.000",
                "actualTime": "2018-12-20T07:00:00.000",
                "estimatedRunway": "2018-12-20T07:12:00.000",
                "actualRunway": "2018-12-20T07:12:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "terminal": "2",
                "gate": "C6",
                "baggage": "010",
                "scheduledTime": "2018-12-20T08:50:00.000",
                "estimatedTime": "2018-12-20T08:50:00.000",
                "actualTime": "2018-12-20T08:50:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "airline": {
                "name": "Gol",
                "iataCode": "G3",
                "icaoCode": "GLO"
            },
            "flight": {
                "number": "5513",
                "iataNumber": "G35513",
                "icaoNumber": "GLO5513"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM",
                    "iataCode": "KL",
                    "icaoCode": "KLM"
                },
                "flight": {
                    "number": "1412",
                    "iataNumber": "KL1412",
                    "icaoNumber": "KLM1412"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:00:00.000",
                "actualTime": "2018-12-20T07:00:00.000",
                "estimatedRunway": "2018-12-20T07:12:00.000",
                "actualRunway": "2018-12-20T07:12:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "terminal": "2",
                "gate": "C6",
                "baggage": "010",
                "scheduledTime": "2018-12-20T08:50:00.000",
                "estimatedTime": "2018-12-20T08:50:00.000",
                "actualTime": "2018-12-20T08:50:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "airline": {
                "name": "Kenya Airways",
                "iataCode": "KQ",
                "icaoCode": "KQA"
            },
            "flight": {
                "number": "1412",
                "iataNumber": "KQ1412",
                "icaoNumber": "KQA1412"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM",
                    "iataCode": "KL",
                    "icaoCode": "KLM"
                },
                "flight": {
                    "number": "1412",
                    "iataNumber": "KL1412",
                    "icaoNumber": "KLM1412"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:00:00.000",
                "actualTime": "2018-12-20T07:00:00.000",
                "estimatedRunway": "2018-12-20T07:12:00.000",
                "actualRunway": "2018-12-20T07:12:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "terminal": "2",
                "gate": "C6",
                "baggage": "010",
                "scheduledTime": "2018-12-20T08:50:00.000",
                "estimatedTime": "2018-12-20T08:50:00.000",
                "actualTime": "2018-12-20T08:50:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "airline": {
                "name": "Xiamen Airlines",
                "iataCode": "MF",
                "icaoCode": "CXA"
            },
            "flight": {
                "number": "9672",
                "iataNumber": "MF9672",
                "icaoNumber": "CXA9672"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM",
                    "iataCode": "KL",
                    "icaoCode": "KLM"
                },
                "flight": {
                    "number": "1412",
                    "iataNumber": "KL1412",
                    "icaoNumber": "KLM1412"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:00:00.000",
                "actualTime": "2018-12-20T07:00:00.000",
                "estimatedRunway": "2018-12-20T07:12:00.000",
                "actualRunway": "2018-12-20T07:12:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "terminal": "2",
                "gate": "C6",
                "baggage": "010",
                "scheduledTime": "2018-12-20T08:50:00.000",
                "estimatedTime": "2018-12-20T08:50:00.000",
                "actualTime": "2018-12-20T08:50:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "airline": {
                "name": "KLM",
                "iataCode": "KL",
                "icaoCode": "KLM"
            },
            "flight": {
                "number": "1412",
                "iataNumber": "KL1412",
                "icaoNumber": "KLM1412"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "delay": 1,
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:01:00.000",
                "actualTime": "2018-12-20T07:01:00.000",
                "estimatedRunway": "2018-12-20T07:15:00.000",
                "actualRunway": "2018-12-20T07:15:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 1",
                "delay": 1,
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:21:00.000",
                "actualTime": "2018-12-20T08:21:00.000",
                "estimatedRunway": "2018-12-20T08:17:00.000",
                "actualRunway": "2018-12-20T08:17:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4351",
                "iataNumber": "U24351",
                "icaoNumber": "EZY4351"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 4,
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:04:00.000",
                "actualTime": "2018-12-20T07:04:00.000",
                "estimatedRunway": "2018-12-20T07:16:00.000",
                "actualRunway": "2018-12-20T07:16:00.000"
            },
            "arrival": {
                "iataCode": "BOD",
                "icaoCode": "LFBD",
                "terminal": "B",
                "delay": 7,
                "scheduledTime": "2018-12-20T08:05:00.000",
                "estimatedTime": "2018-12-20T08:12:00.000",
                "actualTime": "2018-12-20T08:12:00.000",
                "estimatedRunway": "2018-12-20T08:09:00.000",
                "actualRunway": "2018-12-20T08:09:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5455",
                "iataNumber": "AF5455",
                "icaoNumber": "AFR5455"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4120",
                    "iataNumber": "A54120",
                    "icaoNumber": "HOP4120"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 4,
                "scheduledTime": "2018-12-20T07:00:00.000",
                "estimatedTime": "2018-12-20T07:04:00.000",
                "actualTime": "2018-12-20T07:04:00.000",
                "estimatedRunway": "2018-12-20T07:16:00.000",
                "actualRunway": "2018-12-20T07:16:00.000"
            },
            "arrival": {
                "iataCode": "BOD",
                "icaoCode": "LFBD",
                "terminal": "B",
                "delay": 7,
                "scheduledTime": "2018-12-20T08:05:00.000",
                "estimatedTime": "2018-12-20T08:12:00.000",
                "actualTime": "2018-12-20T08:12:00.000",
                "estimatedRunway": "2018-12-20T08:09:00.000",
                "actualRunway": "2018-12-20T08:09:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4120",
                "iataNumber": "A54120",
                "icaoNumber": "HOP4120"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedTime": "2018-12-20T07:04:00.000",
                "actualTime": "2018-12-20T07:04:00.000",
                "estimatedRunway": "2018-12-20T07:10:00.000",
                "actualRunway": "2018-12-20T07:10:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "baggage": "3",
                "scheduledTime": "2018-12-20T08:30:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:24:00.000",
                "actualRunway": "2018-12-20T08:24:00.000"
            },
            "airline": {
                "name": "Air Canada",
                "iataCode": "AC",
                "icaoCode": "ACA"
            },
            "flight": {
                "number": "6355",
                "iataNumber": "AC6355",
                "icaoNumber": "ACA6355"
            },
            "codeshared": {
                "airline": {
                    "name": "Brussels Airlines",
                    "iataCode": "SN",
                    "icaoCode": "BEL"
                },
                "flight": {
                    "number": "3594",
                    "iataNumber": "SN3594",
                    "icaoNumber": "BEL3594"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedTime": "2018-12-20T07:04:00.000",
                "actualTime": "2018-12-20T07:04:00.000",
                "estimatedRunway": "2018-12-20T07:10:00.000",
                "actualRunway": "2018-12-20T07:10:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "baggage": "3",
                "scheduledTime": "2018-12-20T08:30:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:24:00.000",
                "actualRunway": "2018-12-20T08:24:00.000"
            },
            "airline": {
                "name": "Cathay Pacific",
                "iataCode": "CX",
                "icaoCode": "CPA"
            },
            "flight": {
                "number": "6552",
                "iataNumber": "CX6552",
                "icaoNumber": "CPA6552"
            },
            "codeshared": {
                "airline": {
                    "name": "Brussels Airlines",
                    "iataCode": "SN",
                    "icaoCode": "BEL"
                },
                "flight": {
                    "number": "3594",
                    "iataNumber": "SN3594",
                    "icaoNumber": "BEL3594"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedTime": "2018-12-20T07:04:00.000",
                "actualTime": "2018-12-20T07:04:00.000",
                "estimatedRunway": "2018-12-20T07:10:00.000",
                "actualRunway": "2018-12-20T07:10:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "baggage": "3",
                "scheduledTime": "2018-12-20T08:30:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:24:00.000",
                "actualRunway": "2018-12-20T08:24:00.000"
            },
            "airline": {
                "name": "Etihad Airways",
                "iataCode": "EY",
                "icaoCode": "ETD"
            },
            "flight": {
                "number": "7244",
                "iataNumber": "EY7244",
                "icaoNumber": "ETD7244"
            },
            "codeshared": {
                "airline": {
                    "name": "Brussels Airlines",
                    "iataCode": "SN",
                    "icaoCode": "BEL"
                },
                "flight": {
                    "number": "3594",
                    "iataNumber": "SN3594",
                    "icaoNumber": "BEL3594"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedTime": "2018-12-20T07:04:00.000",
                "actualTime": "2018-12-20T07:04:00.000",
                "estimatedRunway": "2018-12-20T07:10:00.000",
                "actualRunway": "2018-12-20T07:10:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "baggage": "3",
                "scheduledTime": "2018-12-20T08:30:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:24:00.000",
                "actualRunway": "2018-12-20T08:24:00.000"
            },
            "airline": {
                "name": "UIA",
                "iataCode": "PS",
                "icaoCode": "AUI"
            },
            "flight": {
                "number": "9294",
                "iataNumber": "PS9294",
                "icaoNumber": "AUI9294"
            },
            "codeshared": {
                "airline": {
                    "name": "Brussels Airlines",
                    "iataCode": "SN",
                    "icaoCode": "BEL"
                },
                "flight": {
                    "number": "3594",
                    "iataNumber": "SN3594",
                    "icaoNumber": "BEL3594"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedTime": "2018-12-20T07:04:00.000",
                "actualTime": "2018-12-20T07:04:00.000",
                "estimatedRunway": "2018-12-20T07:10:00.000",
                "actualRunway": "2018-12-20T07:10:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "baggage": "3",
                "scheduledTime": "2018-12-20T08:30:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:24:00.000",
                "actualRunway": "2018-12-20T08:24:00.000"
            },
            "airline": {
                "name": "Thai Airways International",
                "iataCode": "TG",
                "icaoCode": "THA"
            },
            "flight": {
                "number": "6527",
                "iataNumber": "TG6527",
                "icaoNumber": "THA6527"
            },
            "codeshared": {
                "airline": {
                    "name": "Brussels Airlines",
                    "iataCode": "SN",
                    "icaoCode": "BEL"
                },
                "flight": {
                    "number": "3594",
                    "iataNumber": "SN3594",
                    "icaoNumber": "BEL3594"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedTime": "2018-12-20T07:04:00.000",
                "actualTime": "2018-12-20T07:04:00.000",
                "estimatedRunway": "2018-12-20T07:10:00.000",
                "actualRunway": "2018-12-20T07:10:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "baggage": "3",
                "scheduledTime": "2018-12-20T08:30:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:24:00.000",
                "actualRunway": "2018-12-20T08:24:00.000"
            },
            "airline": {
                "name": "United Airlines",
                "iataCode": "UA",
                "icaoCode": "UAL"
            },
            "flight": {
                "number": "9944",
                "iataNumber": "UA9944",
                "icaoNumber": "UAL9944"
            },
            "codeshared": {
                "airline": {
                    "name": "Brussels Airlines",
                    "iataCode": "SN",
                    "icaoCode": "BEL"
                },
                "flight": {
                    "number": "3594",
                    "iataNumber": "SN3594",
                    "icaoNumber": "BEL3594"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedTime": "2018-12-20T07:04:00.000",
                "actualTime": "2018-12-20T07:04:00.000",
                "estimatedRunway": "2018-12-20T07:10:00.000",
                "actualRunway": "2018-12-20T07:10:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "baggage": "3",
                "scheduledTime": "2018-12-20T08:30:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:24:00.000",
                "actualRunway": "2018-12-20T08:24:00.000"
            },
            "airline": {
                "name": "Brussels Airlines",
                "iataCode": "SN",
                "icaoCode": "BEL"
            },
            "flight": {
                "number": "3594",
                "iataNumber": "SN3594",
                "icaoNumber": "BEL3594"
            }
        },
        {
            "type": "departure",
            "status": "cancelled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedTime": "2018-12-20T07:05:00.000"
            },
            "arrival": {
                "iataCode": "LGW",
                "icaoCode": "EGKK",
                "terminal": "N",
                "delay": 135,
                "scheduledTime": "2018-12-20T07:45:00.000",
                "estimatedTime": "2018-12-20T10:00:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "8414",
                "iataNumber": "U28414",
                "icaoNumber": "EZY8414"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedRunway": "2018-12-20T07:42:00.000",
                "actualRunway": "2018-12-20T07:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "19",
                "delay": 22,
                "scheduledTime": "2018-12-20T09:00:00.000",
                "estimatedTime": "2018-12-20T09:22:00.000",
                "actualTime": "2018-12-20T09:22:00.000",
                "estimatedRunway": "2018-12-20T09:14:00.000",
                "actualRunway": "2018-12-20T09:14:00.000"
            },
            "airline": {
                "name": "American Airlines",
                "iataCode": "AA",
                "icaoCode": "AAL"
            },
            "flight": {
                "number": "8602",
                "iataNumber": "AA8602",
                "icaoNumber": "AAL8602"
            },
            "codeshared": {
                "airline": {
                    "name": "Air Nostrum",
                    "iataCode": "YW",
                    "icaoCode": "ANE"
                },
                "flight": {
                    "number": "8709",
                    "iataNumber": "YW8709",
                    "icaoNumber": "ANE8709"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedRunway": "2018-12-20T07:42:00.000",
                "actualRunway": "2018-12-20T07:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "19",
                "delay": 22,
                "scheduledTime": "2018-12-20T09:00:00.000",
                "estimatedTime": "2018-12-20T09:22:00.000",
                "actualTime": "2018-12-20T09:22:00.000",
                "estimatedRunway": "2018-12-20T09:14:00.000",
                "actualRunway": "2018-12-20T09:14:00.000"
            },
            "airline": {
                "name": "Iberia",
                "iataCode": "IB",
                "icaoCode": "IBE"
            },
            "flight": {
                "number": "8709",
                "iataNumber": "IB8709",
                "icaoNumber": "IBE8709"
            },
            "codeshared": {
                "airline": {
                    "name": "Air Nostrum",
                    "iataCode": "YW",
                    "icaoCode": "ANE"
                },
                "flight": {
                    "number": "8709",
                    "iataNumber": "YW8709",
                    "icaoNumber": "ANE8709"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T07:05:00.000",
                "estimatedRunway": "2018-12-20T07:42:00.000",
                "actualRunway": "2018-12-20T07:42:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "19",
                "delay": 22,
                "scheduledTime": "2018-12-20T09:00:00.000",
                "estimatedTime": "2018-12-20T09:22:00.000",
                "actualTime": "2018-12-20T09:22:00.000",
                "estimatedRunway": "2018-12-20T09:14:00.000",
                "actualRunway": "2018-12-20T09:14:00.000"
            },
            "airline": {
                "name": "Air Nostrum",
                "iataCode": "YW",
                "icaoCode": "ANE"
            },
            "flight": {
                "number": "8709",
                "iataNumber": "YW8709",
                "icaoNumber": "ANE8709"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T07:20:00.000",
                "estimatedTime": "2018-12-20T07:14:00.000",
                "actualTime": "2018-12-20T07:14:00.000",
                "estimatedRunway": "2018-12-20T07:23:00.000",
                "actualRunway": "2018-12-20T07:23:00.000"
            },
            "arrival": {
                "iataCode": "TLS",
                "icaoCode": "LFBO",
                "gate": "02",
                "baggage": "1",
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:12:00.000",
                "actualTime": "2018-12-20T08:12:00.000",
                "estimatedRunway": "2018-12-20T08:06:00.000",
                "actualRunway": "2018-12-20T08:06:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4333",
                "iataNumber": "U24333",
                "icaoNumber": "EZY4333"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 6,
                "scheduledTime": "2018-12-20T07:10:00.000",
                "estimatedTime": "2018-12-20T07:16:00.000",
                "actualTime": "2018-12-20T07:16:00.000",
                "estimatedRunway": "2018-12-20T07:25:00.000",
                "actualRunway": "2018-12-20T07:25:00.000"
            },
            "arrival": {
                "iataCode": "ORY",
                "icaoCode": "LFPO",
                "terminal": "W",
                "baggage": "02",
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:18:00.000",
                "actualTime": "2018-12-20T08:18:00.000",
                "estimatedRunway": "2018-12-20T08:11:00.000",
                "actualRunway": "2018-12-20T08:11:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "5401",
                "iataNumber": "A55401",
                "icaoNumber": "HOP5401"
            },
            "codeshared": {
                "airline": {
                    "name": "Cityjet",
                    "iataCode": "WX",
                    "icaoCode": "BCY"
                },
                "flight": {
                    "number": "7401",
                    "iataNumber": "WX7401",
                    "icaoNumber": "BCY7401"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 6,
                "scheduledTime": "2018-12-20T07:10:00.000",
                "estimatedTime": "2018-12-20T07:16:00.000",
                "actualTime": "2018-12-20T07:16:00.000",
                "estimatedRunway": "2018-12-20T07:25:00.000",
                "actualRunway": "2018-12-20T07:25:00.000"
            },
            "arrival": {
                "iataCode": "ORY",
                "icaoCode": "LFPO",
                "terminal": "W",
                "baggage": "02",
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:18:00.000",
                "actualTime": "2018-12-20T08:18:00.000",
                "estimatedRunway": "2018-12-20T08:11:00.000",
                "actualRunway": "2018-12-20T08:11:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "7401",
                "iataNumber": "AF7401",
                "icaoNumber": "AFR7401"
            },
            "codeshared": {
                "airline": {
                    "name": "Cityjet",
                    "iataCode": "WX",
                    "icaoCode": "BCY"
                },
                "flight": {
                    "number": "7401",
                    "iataNumber": "WX7401",
                    "icaoNumber": "BCY7401"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 6,
                "scheduledTime": "2018-12-20T07:10:00.000",
                "estimatedTime": "2018-12-20T07:16:00.000",
                "actualTime": "2018-12-20T07:16:00.000",
                "estimatedRunway": "2018-12-20T07:25:00.000",
                "actualRunway": "2018-12-20T07:25:00.000"
            },
            "arrival": {
                "iataCode": "ORY",
                "icaoCode": "LFPO",
                "terminal": "W",
                "baggage": "02",
                "scheduledTime": "2018-12-20T08:20:00.000",
                "estimatedTime": "2018-12-20T08:18:00.000",
                "actualTime": "2018-12-20T08:18:00.000",
                "estimatedRunway": "2018-12-20T08:11:00.000",
                "actualRunway": "2018-12-20T08:11:00.000"
            },
            "airline": {
                "name": "Cityjet",
                "iataCode": "WX",
                "icaoCode": "BCY"
            },
            "flight": {
                "number": "7401",
                "iataNumber": "WX7401",
                "icaoNumber": "BCY7401"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "delay": 19,
                "scheduledTime": "2018-12-20T07:10:00.000",
                "estimatedTime": "2018-12-20T07:29:00.000",
                "actualTime": "2018-12-20T07:29:00.000",
                "estimatedRunway": "2018-12-20T07:44:00.000",
                "actualRunway": "2018-12-20T07:44:00.000"
            },
            "arrival": {
                "iataCode": "BCN",
                "icaoCode": "LEBL",
                "terminal": "2",
                "baggage": "14C",
                "delay": 22,
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:47:00.000",
                "actualTime": "2018-12-20T08:47:00.000",
                "estimatedRunway": "2018-12-20T08:44:00.000",
                "actualRunway": "2018-12-20T08:44:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4415",
                "iataNumber": "U24415",
                "icaoNumber": "EZY4415"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "delay": 7,
                "scheduledTime": "2018-12-20T07:45:00.000",
                "estimatedTime": "2018-12-20T07:52:00.000",
                "actualTime": "2018-12-20T07:52:00.000",
                "estimatedRunway": "2018-12-20T08:04:00.000",
                "actualRunway": "2018-12-20T08:04:00.000"
            },
            "arrival": {
                "iataCode": "LIS",
                "icaoCode": "LPPT",
                "terminal": "1",
                "delay": 8,
                "scheduledTime": "2018-12-20T09:15:00.000",
                "estimatedTime": "2018-12-20T09:23:00.000",
                "actualTime": "2018-12-20T09:23:00.000",
                "estimatedRunway": "2018-12-20T09:16:00.000",
                "actualRunway": "2018-12-20T09:16:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4433",
                "iataNumber": "U24433",
                "icaoNumber": "EZY4433"
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T08:15:00.000",
                "estimatedTime": "2018-12-20T08:13:00.000",
                "actualTime": "2018-12-20T08:13:00.000",
                "estimatedRunway": "2018-12-20T08:25:00.000",
                "actualRunway": "2018-12-20T08:25:00.000"
            },
            "arrival": {
                "iataCode": "RAK",
                "icaoCode": "GMMX",
                "terminal": "1",
                "scheduledTime": "2018-12-20T11:10:00.000"
            },
            "airline": {
                "name": "Royal Air Maroc",
                "iataCode": "AT",
                "icaoCode": "RAM"
            },
            "flight": {
                "number": "605",
                "iataNumber": "AT605",
                "icaoNumber": "RAM605"
            },
            "codeshared": {
                "airline": {
                    "name": "Nouvelair Tunisie",
                    "iataCode": "BJ",
                    "icaoCode": "LBT"
                },
                "flight": {
                    "number": "605",
                    "iataNumber": "BJ605",
                    "icaoNumber": "LBT605"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T08:15:00.000",
                "estimatedTime": "2018-12-20T08:13:00.000",
                "actualTime": "2018-12-20T08:13:00.000",
                "estimatedRunway": "2018-12-20T08:25:00.000",
                "actualRunway": "2018-12-20T08:25:00.000"
            },
            "arrival": {
                "iataCode": "RAK",
                "icaoCode": "GMMX",
                "terminal": "1",
                "scheduledTime": "2018-12-20T11:10:00.000"
            },
            "airline": {
                "name": "Nouvelair Tunisie",
                "iataCode": "BJ",
                "icaoCode": "LBT"
            },
            "flight": {
                "number": "605",
                "iataNumber": "BJ605",
                "icaoNumber": "LBT605"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:21:00.000",
                "actualTime": "2018-12-20T08:21:00.000",
                "estimatedRunway": "2018-12-20T08:29:00.000",
                "actualRunway": "2018-12-20T08:29:00.000"
            },
            "arrival": {
                "iataCode": "BOD",
                "icaoCode": "LFBD",
                "terminal": "B",
                "scheduledTime": "2018-12-20T09:30:00.000",
                "estimatedTime": "2018-12-20T09:22:00.000",
                "actualTime": "2018-12-20T09:22:00.000",
                "estimatedRunway": "2018-12-20T09:18:00.000",
                "actualRunway": "2018-12-20T09:18:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5369",
                "iataNumber": "AF5369",
                "icaoNumber": "AFR5369"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4022",
                    "iataNumber": "A54022",
                    "icaoNumber": "HOP4022"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:21:00.000",
                "actualTime": "2018-12-20T08:21:00.000",
                "estimatedRunway": "2018-12-20T08:29:00.000",
                "actualRunway": "2018-12-20T08:29:00.000"
            },
            "arrival": {
                "iataCode": "BOD",
                "icaoCode": "LFBD",
                "terminal": "B",
                "scheduledTime": "2018-12-20T09:30:00.000",
                "estimatedTime": "2018-12-20T09:22:00.000",
                "actualTime": "2018-12-20T09:22:00.000",
                "estimatedRunway": "2018-12-20T09:18:00.000",
                "actualRunway": "2018-12-20T09:18:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4022",
                "iataNumber": "A54022",
                "icaoNumber": "HOP4022"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:25:00.000",
                "actualTime": "2018-12-20T08:25:00.000",
                "estimatedRunway": "2018-12-20T08:35:00.000",
                "actualRunway": "2018-12-20T08:35:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 1",
                "delay": 12,
                "scheduledTime": "2018-12-20T09:40:00.000",
                "estimatedTime": "2018-12-20T09:52:00.000",
                "actualTime": "2018-12-20T09:52:00.000",
                "estimatedRunway": "2018-12-20T09:49:00.000",
                "actualRunway": "2018-12-20T09:49:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5311",
                "iataNumber": "AF5311",
                "icaoNumber": "AFR5311"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4002",
                    "iataNumber": "A54002",
                    "icaoNumber": "HOP4002"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:25:00.000",
                "actualTime": "2018-12-20T08:25:00.000",
                "estimatedRunway": "2018-12-20T08:35:00.000",
                "actualRunway": "2018-12-20T08:35:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 1",
                "delay": 12,
                "scheduledTime": "2018-12-20T09:40:00.000",
                "estimatedTime": "2018-12-20T09:52:00.000",
                "actualTime": "2018-12-20T09:52:00.000",
                "estimatedRunway": "2018-12-20T09:49:00.000",
                "actualRunway": "2018-12-20T09:49:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4002",
                "iataNumber": "A54002",
                "icaoNumber": "HOP4002"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 1,
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:26:00.000",
                "actualTime": "2018-12-20T08:26:00.000",
                "estimatedRunway": "2018-12-20T08:41:00.000",
                "actualRunway": "2018-12-20T08:41:00.000"
            },
            "arrival": {
                "iataCode": "RNS",
                "icaoCode": "LFRN",
                "delay": 4,
                "scheduledTime": "2018-12-20T09:50:00.000",
                "estimatedTime": "2018-12-20T09:54:00.000",
                "actualTime": "2018-12-20T09:54:00.000",
                "estimatedRunway": "2018-12-20T09:49:00.000",
                "actualRunway": "2018-12-20T09:49:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5468",
                "iataNumber": "AF5468",
                "icaoNumber": "AFR5468"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4152",
                    "iataNumber": "A54152",
                    "icaoNumber": "HOP4152"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 1,
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:26:00.000",
                "actualTime": "2018-12-20T08:26:00.000",
                "estimatedRunway": "2018-12-20T08:41:00.000",
                "actualRunway": "2018-12-20T08:41:00.000"
            },
            "arrival": {
                "iataCode": "RNS",
                "icaoCode": "LFRN",
                "delay": 4,
                "scheduledTime": "2018-12-20T09:50:00.000",
                "estimatedTime": "2018-12-20T09:54:00.000",
                "actualTime": "2018-12-20T09:54:00.000",
                "estimatedRunway": "2018-12-20T09:49:00.000",
                "actualRunway": "2018-12-20T09:49:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4152",
                "iataNumber": "A54152",
                "icaoNumber": "HOP4152"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 2,
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "arrival": {
                "iataCode": "LRT",
                "icaoCode": "LFRH",
                "delay": 20,
                "scheduledTime": "2018-12-20T09:50:00.000",
                "estimatedTime": "2018-12-20T10:10:00.000",
                "actualTime": "2018-12-20T10:10:00.000",
                "estimatedRunway": "2018-12-20T10:04:00.000",
                "actualRunway": "2018-12-20T10:04:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "4285",
                "iataNumber": "AF4285",
                "icaoNumber": "AFR4285"
            },
            "codeshared": {
                "airline": {
                    "name": "Aero4M",
                    "iataCode": "AEH",
                    "icaoCode": "AEH"
                },
                "flight": {
                    "number": "4142",
                    "iataNumber": "AEH4142",
                    "icaoNumber": "AEH4142"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 2,
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "arrival": {
                "iataCode": "LRT",
                "icaoCode": "LFRH",
                "delay": 20,
                "scheduledTime": "2018-12-20T09:50:00.000",
                "estimatedTime": "2018-12-20T10:10:00.000",
                "actualTime": "2018-12-20T10:10:00.000",
                "estimatedRunway": "2018-12-20T10:04:00.000",
                "actualRunway": "2018-12-20T10:04:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4142",
                "iataNumber": "A54142",
                "icaoNumber": "HOP4142"
            },
            "codeshared": {
                "airline": {
                    "name": "Aero4M",
                    "iataCode": "AEH",
                    "icaoCode": "AEH"
                },
                "flight": {
                    "number": "4142",
                    "iataNumber": "AEH4142",
                    "icaoNumber": "AEH4142"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 2,
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:27:00.000",
                "actualTime": "2018-12-20T08:27:00.000",
                "estimatedRunway": "2018-12-20T08:37:00.000",
                "actualRunway": "2018-12-20T08:37:00.000"
            },
            "arrival": {
                "iataCode": "LRT",
                "icaoCode": "LFRH",
                "delay": 20,
                "scheduledTime": "2018-12-20T09:50:00.000",
                "estimatedTime": "2018-12-20T10:10:00.000",
                "actualTime": "2018-12-20T10:10:00.000",
                "estimatedRunway": "2018-12-20T10:04:00.000",
                "actualRunway": "2018-12-20T10:04:00.000"
            },
            "airline": {
                "name": "Aero4M",
                "iataCode": "AEH",
                "icaoCode": "AEH"
            },
            "flight": {
                "number": "4142",
                "iataNumber": "AEH4142",
                "icaoNumber": "AEH4142"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:30:00.000",
                "estimatedTime": "2018-12-20T08:30:00.000",
                "actualTime": "2018-12-20T08:30:00.000",
                "estimatedRunway": "2018-12-20T08:46:00.000",
                "actualRunway": "2018-12-20T08:46:00.000"
            },
            "arrival": {
                "iataCode": "LIL",
                "icaoCode": "LFQQ",
                "delay": 6,
                "scheduledTime": "2018-12-20T09:45:00.000",
                "estimatedTime": "2018-12-20T09:51:00.000",
                "actualTime": "2018-12-20T09:51:00.000",
                "estimatedRunway": "2018-12-20T09:45:00.000",
                "actualRunway": "2018-12-20T09:45:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5408",
                "iataNumber": "AF5408",
                "icaoNumber": "AFR5408"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4062",
                    "iataNumber": "A54062",
                    "icaoNumber": "HOP4062"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:30:00.000",
                "estimatedTime": "2018-12-20T08:30:00.000",
                "actualTime": "2018-12-20T08:30:00.000",
                "estimatedRunway": "2018-12-20T08:46:00.000",
                "actualRunway": "2018-12-20T08:46:00.000"
            },
            "arrival": {
                "iataCode": "LIL",
                "icaoCode": "LFQQ",
                "delay": 6,
                "scheduledTime": "2018-12-20T09:45:00.000",
                "estimatedTime": "2018-12-20T09:51:00.000",
                "actualTime": "2018-12-20T09:51:00.000",
                "estimatedRunway": "2018-12-20T09:45:00.000",
                "actualRunway": "2018-12-20T09:45:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4062",
                "iataNumber": "A54062",
                "icaoNumber": "HOP4062"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:30:00.000",
                "actualTime": "2018-12-20T08:30:00.000",
                "estimatedRunway": "2018-12-20T08:38:00.000",
                "actualRunway": "2018-12-20T08:38:00.000"
            },
            "arrival": {
                "iataCode": "NCE",
                "icaoCode": "LFMN",
                "terminal": "2",
                "scheduledTime": "2018-12-20T09:30:00.000",
                "estimatedTime": "2018-12-20T09:17:00.000",
                "actualTime": "2018-12-20T09:17:00.000",
                "estimatedRunway": "2018-12-20T09:13:00.000",
                "actualRunway": "2018-12-20T09:13:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "7026",
                "iataNumber": "AF7026",
                "icaoNumber": "AFR7026"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4202",
                    "iataNumber": "A54202",
                    "icaoNumber": "HOP4202"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:30:00.000",
                "actualTime": "2018-12-20T08:30:00.000",
                "estimatedRunway": "2018-12-20T08:38:00.000",
                "actualRunway": "2018-12-20T08:38:00.000"
            },
            "arrival": {
                "iataCode": "NCE",
                "icaoCode": "LFMN",
                "terminal": "2",
                "scheduledTime": "2018-12-20T09:30:00.000",
                "estimatedTime": "2018-12-20T09:17:00.000",
                "actualTime": "2018-12-20T09:17:00.000",
                "estimatedRunway": "2018-12-20T09:13:00.000",
                "actualRunway": "2018-12-20T09:13:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4202",
                "iataNumber": "A54202",
                "icaoNumber": "HOP4202"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 7,
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:32:00.000",
                "actualTime": "2018-12-20T08:32:00.000",
                "estimatedRunway": "2018-12-20T08:40:00.000",
                "actualRunway": "2018-12-20T08:40:00.000"
            },
            "arrival": {
                "iataCode": "CFR",
                "icaoCode": "LFRK",
                "delay": 5,
                "scheduledTime": "2018-12-20T09:40:00.000",
                "estimatedTime": "2018-12-20T09:45:00.000",
                "actualTime": "2018-12-20T09:45:00.000",
                "estimatedRunway": "2018-12-20T09:41:00.000",
                "actualRunway": "2018-12-20T09:41:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5462",
                "iataNumber": "AF5462",
                "icaoNumber": "AFR5462"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4132",
                    "iataNumber": "A54132",
                    "icaoNumber": "HOP4132"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 7,
                "scheduledTime": "2018-12-20T08:25:00.000",
                "estimatedTime": "2018-12-20T08:32:00.000",
                "actualTime": "2018-12-20T08:32:00.000",
                "estimatedRunway": "2018-12-20T08:40:00.000",
                "actualRunway": "2018-12-20T08:40:00.000"
            },
            "arrival": {
                "iataCode": "CFR",
                "icaoCode": "LFRK",
                "delay": 5,
                "scheduledTime": "2018-12-20T09:40:00.000",
                "estimatedTime": "2018-12-20T09:45:00.000",
                "actualTime": "2018-12-20T09:45:00.000",
                "estimatedRunway": "2018-12-20T09:41:00.000",
                "actualRunway": "2018-12-20T09:41:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4132",
                "iataNumber": "A54132",
                "icaoNumber": "HOP4132"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:34:00.000",
                "actualTime": "2018-12-20T08:34:00.000",
                "estimatedRunway": "2018-12-20T08:43:00.000",
                "actualRunway": "2018-12-20T08:43:00.000"
            },
            "arrival": {
                "iataCode": "MRS",
                "icaoCode": "LFML",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T09:30:00.000",
                "estimatedTime": "2018-12-20T09:19:00.000",
                "actualTime": "2018-12-20T09:19:00.000",
                "estimatedRunway": "2018-12-20T09:14:00.000",
                "actualRunway": "2018-12-20T09:14:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5392",
                "iataNumber": "AF5392",
                "icaoNumber": "AFR5392"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4052",
                    "iataNumber": "A54052",
                    "icaoNumber": "HOP4052"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:34:00.000",
                "actualTime": "2018-12-20T08:34:00.000",
                "estimatedRunway": "2018-12-20T08:43:00.000",
                "actualRunway": "2018-12-20T08:43:00.000"
            },
            "arrival": {
                "iataCode": "MRS",
                "icaoCode": "LFML",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T09:30:00.000",
                "estimatedTime": "2018-12-20T09:19:00.000",
                "actualTime": "2018-12-20T09:19:00.000",
                "estimatedRunway": "2018-12-20T09:14:00.000",
                "actualRunway": "2018-12-20T09:14:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4052",
                "iataNumber": "A54052",
                "icaoNumber": "HOP4052"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:35:00.000",
                "actualTime": "2018-12-20T08:35:00.000",
                "estimatedRunway": "2018-12-20T08:44:00.000",
                "actualRunway": "2018-12-20T08:44:00.000"
            },
            "arrival": {
                "iataCode": "BLQ",
                "icaoCode": "LIPE",
                "scheduledTime": "2018-12-20T09:45:00.000",
                "estimatedTime": "2018-12-20T09:39:00.000",
                "estimatedRunway": "2018-12-20T09:37:00.000",
                "actualRunway": "2018-12-20T09:37:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5308",
                "iataNumber": "AF5308",
                "icaoNumber": "AFR5308"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4512",
                    "iataNumber": "A54512",
                    "icaoNumber": "HOP4512"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:35:00.000",
                "actualTime": "2018-12-20T08:35:00.000",
                "estimatedRunway": "2018-12-20T08:44:00.000",
                "actualRunway": "2018-12-20T08:44:00.000"
            },
            "arrival": {
                "iataCode": "BLQ",
                "icaoCode": "LIPE",
                "scheduledTime": "2018-12-20T09:45:00.000",
                "estimatedTime": "2018-12-20T09:39:00.000",
                "estimatedRunway": "2018-12-20T09:37:00.000",
                "actualRunway": "2018-12-20T09:37:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4512",
                "iataNumber": "A54512",
                "icaoNumber": "HOP4512"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:35:00.000",
                "actualTime": "2018-12-20T08:35:00.000",
                "estimatedRunway": "2018-12-20T08:52:00.000",
                "actualRunway": "2018-12-20T08:52:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "delay": 11,
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T10:06:00.000",
                "actualTime": "2018-12-20T10:06:00.000",
                "estimatedRunway": "2018-12-20T09:56:00.000",
                "actualRunway": "2018-12-20T09:56:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5355",
                "iataNumber": "AF5355",
                "icaoNumber": "AFR5355"
            },
            "codeshared": {
                "airline": {
                    "name": "Aero4M",
                    "iataCode": "AEH",
                    "icaoCode": "AEH"
                },
                "flight": {
                    "number": "4312",
                    "iataNumber": "AEH4312",
                    "icaoNumber": "AEH4312"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:35:00.000",
                "actualTime": "2018-12-20T08:35:00.000",
                "estimatedRunway": "2018-12-20T08:52:00.000",
                "actualRunway": "2018-12-20T08:52:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "delay": 11,
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T10:06:00.000",
                "actualTime": "2018-12-20T10:06:00.000",
                "estimatedRunway": "2018-12-20T09:56:00.000",
                "actualRunway": "2018-12-20T09:56:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4312",
                "iataNumber": "A54312",
                "icaoNumber": "HOP4312"
            },
            "codeshared": {
                "airline": {
                    "name": "Aero4M",
                    "iataCode": "AEH",
                    "icaoCode": "AEH"
                },
                "flight": {
                    "number": "4312",
                    "iataNumber": "AEH4312",
                    "icaoNumber": "AEH4312"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:35:00.000",
                "actualTime": "2018-12-20T08:35:00.000",
                "estimatedRunway": "2018-12-20T08:52:00.000",
                "actualRunway": "2018-12-20T08:52:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "delay": 11,
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T10:06:00.000",
                "actualTime": "2018-12-20T10:06:00.000",
                "estimatedRunway": "2018-12-20T09:56:00.000",
                "actualRunway": "2018-12-20T09:56:00.000"
            },
            "airline": {
                "name": "Aero4M",
                "iataCode": "AEH",
                "icaoCode": "AEH"
            },
            "flight": {
                "number": "4312",
                "iataNumber": "AEH4312",
                "icaoNumber": "AEH4312"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:40:00.000",
                "estimatedTime": "2018-12-20T08:35:00.000",
                "actualTime": "2018-12-20T08:35:00.000",
                "estimatedRunway": "2018-12-20T08:47:00.000",
                "actualRunway": "2018-12-20T08:47:00.000"
            },
            "arrival": {
                "iataCode": "TLS",
                "icaoCode": "LFBO",
                "gate": "02",
                "baggage": "3",
                "scheduledTime": "2018-12-20T09:40:00.000",
                "estimatedTime": "2018-12-20T09:32:00.000",
                "actualTime": "2018-12-20T09:32:00.000",
                "estimatedRunway": "2018-12-20T09:27:00.000",
                "actualRunway": "2018-12-20T09:27:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "7038",
                "iataNumber": "AF7038",
                "icaoNumber": "AFR7038"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4212",
                    "iataNumber": "A54212",
                    "icaoNumber": "HOP4212"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:40:00.000",
                "estimatedTime": "2018-12-20T08:35:00.000",
                "actualTime": "2018-12-20T08:35:00.000",
                "estimatedRunway": "2018-12-20T08:47:00.000",
                "actualRunway": "2018-12-20T08:47:00.000"
            },
            "arrival": {
                "iataCode": "TLS",
                "icaoCode": "LFBO",
                "gate": "02",
                "baggage": "3",
                "scheduledTime": "2018-12-20T09:40:00.000",
                "estimatedTime": "2018-12-20T09:32:00.000",
                "actualTime": "2018-12-20T09:32:00.000",
                "estimatedRunway": "2018-12-20T09:27:00.000",
                "actualRunway": "2018-12-20T09:27:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4212",
                "iataNumber": "A54212",
                "icaoNumber": "HOP4212"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:40:00.000",
                "estimatedTime": "2018-12-20T08:38:00.000",
                "actualTime": "2018-12-20T08:38:00.000",
                "estimatedRunway": "2018-12-20T08:49:00.000",
                "actualRunway": "2018-12-20T08:49:00.000"
            },
            "arrival": {
                "iataCode": "SXB",
                "icaoCode": "LFST",
                "scheduledTime": "2018-12-20T09:45:00.000",
                "estimatedTime": "2018-12-20T09:38:00.000",
                "actualTime": "2018-12-20T09:38:00.000",
                "estimatedRunway": "2018-12-20T09:34:00.000",
                "actualRunway": "2018-12-20T09:34:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5483",
                "iataNumber": "AF5483",
                "icaoNumber": "AFR5483"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4182",
                    "iataNumber": "A54182",
                    "icaoNumber": "HOP4182"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T08:40:00.000",
                "estimatedTime": "2018-12-20T08:38:00.000",
                "actualTime": "2018-12-20T08:38:00.000",
                "estimatedRunway": "2018-12-20T08:49:00.000",
                "actualRunway": "2018-12-20T08:49:00.000"
            },
            "arrival": {
                "iataCode": "SXB",
                "icaoCode": "LFST",
                "scheduledTime": "2018-12-20T09:45:00.000",
                "estimatedTime": "2018-12-20T09:38:00.000",
                "actualTime": "2018-12-20T09:38:00.000",
                "estimatedRunway": "2018-12-20T09:34:00.000",
                "actualRunway": "2018-12-20T09:34:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4182",
                "iataNumber": "A54182",
                "icaoNumber": "HOP4182"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:40:00.000",
                "actualTime": "2018-12-20T08:40:00.000",
                "estimatedRunway": "2018-12-20T08:53:00.000",
                "actualRunway": "2018-12-20T08:53:00.000"
            },
            "arrival": {
                "iataCode": "BOD",
                "icaoCode": "LFBD",
                "terminal": "BILLI",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:48:00.000",
                "actualTime": "2018-12-20T09:48:00.000",
                "estimatedRunway": "2018-12-20T09:43:00.000",
                "actualRunway": "2018-12-20T09:43:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4302",
                "iataNumber": "U24302",
                "icaoNumber": "EZY4302"
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "delay": 71,
                "scheduledTime": "2018-12-20T07:30:00.000",
                "estimatedTime": "2018-12-20T08:41:00.000",
                "actualTime": "2018-12-20T08:41:00.000",
                "estimatedRunway": "2018-12-20T08:55:00.000",
                "actualRunway": "2018-12-20T08:55:00.000"
            },
            "arrival": {
                "iataCode": "TLV",
                "icaoCode": "LLBG",
                "terminal": "3",
                "delay": 65,
                "scheduledTime": "2018-12-20T12:35:00.000",
                "estimatedTime": "2018-12-20T13:40:00.000",
                "estimatedRunway": "2018-12-20T13:33:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4463",
                "iataNumber": "U24463",
                "icaoNumber": "EZY4463"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 6,
                "scheduledTime": "2018-12-20T08:40:00.000",
                "estimatedTime": "2018-12-20T08:46:00.000",
                "actualTime": "2018-12-20T08:46:00.000",
                "estimatedRunway": "2018-12-20T08:59:00.000",
                "actualRunway": "2018-12-20T08:59:00.000"
            },
            "arrival": {
                "iataCode": "BIQ",
                "icaoCode": "LFBZ",
                "delay": 9,
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T10:04:00.000",
                "actualTime": "2018-12-20T10:04:00.000",
                "estimatedRunway": "2018-12-20T10:00:00.000",
                "actualRunway": "2018-12-20T10:00:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5435",
                "iataNumber": "AF5435",
                "icaoNumber": "AFR5435"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4082",
                    "iataNumber": "A54082",
                    "icaoNumber": "HOP4082"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 6,
                "scheduledTime": "2018-12-20T08:40:00.000",
                "estimatedTime": "2018-12-20T08:46:00.000",
                "actualTime": "2018-12-20T08:46:00.000",
                "estimatedRunway": "2018-12-20T08:59:00.000",
                "actualRunway": "2018-12-20T08:59:00.000"
            },
            "arrival": {
                "iataCode": "BIQ",
                "icaoCode": "LFBZ",
                "delay": 9,
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T10:04:00.000",
                "actualTime": "2018-12-20T10:04:00.000",
                "estimatedRunway": "2018-12-20T10:00:00.000",
                "actualRunway": "2018-12-20T10:00:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4082",
                "iataNumber": "A54082",
                "icaoNumber": "HOP4082"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 1,
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:46:00.000",
                "actualTime": "2018-12-20T08:46:00.000",
                "estimatedRunway": "2018-12-20T09:02:00.000",
                "actualRunway": "2018-12-20T09:02:00.000"
            },
            "arrival": {
                "iataCode": "BES",
                "icaoCode": "LFRB",
                "delay": 6,
                "scheduledTime": "2018-12-20T10:20:00.000",
                "estimatedTime": "2018-12-20T10:26:00.000",
                "actualTime": "2018-12-20T10:26:00.000",
                "estimatedRunway": "2018-12-20T10:24:00.000",
                "actualRunway": "2018-12-20T10:24:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5442",
                "iataNumber": "AF5442",
                "icaoNumber": "AFR5442"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4092",
                    "iataNumber": "A54092",
                    "icaoNumber": "HOP4092"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 1,
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:46:00.000",
                "actualTime": "2018-12-20T08:46:00.000",
                "estimatedRunway": "2018-12-20T09:02:00.000",
                "actualRunway": "2018-12-20T09:02:00.000"
            },
            "arrival": {
                "iataCode": "BES",
                "icaoCode": "LFRB",
                "delay": 6,
                "scheduledTime": "2018-12-20T10:20:00.000",
                "estimatedTime": "2018-12-20T10:26:00.000",
                "actualTime": "2018-12-20T10:26:00.000",
                "estimatedRunway": "2018-12-20T10:24:00.000",
                "actualRunway": "2018-12-20T10:24:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4092",
                "iataNumber": "A54092",
                "icaoNumber": "HOP4092"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 2,
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:47:00.000",
                "actualTime": "2018-12-20T08:47:00.000",
                "estimatedRunway": "2018-12-20T08:56:00.000",
                "actualRunway": "2018-12-20T08:56:00.000"
            },
            "arrival": {
                "iataCode": "MXP",
                "icaoCode": "LIMC",
                "terminal": "1",
                "baggage": "02",
                "scheduledTime": "2018-12-20T09:45:00.000",
                "estimatedTime": "2018-12-20T09:40:00.000",
                "actualTime": "2018-12-20T09:40:00.000",
                "estimatedRunway": "2018-12-20T09:31:00.000",
                "actualRunway": "2018-12-20T09:31:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5302",
                "iataNumber": "AF5302",
                "icaoNumber": "AFR5302"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4502",
                    "iataNumber": "A54502",
                    "icaoNumber": "HOP4502"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 2,
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:47:00.000",
                "actualTime": "2018-12-20T08:47:00.000",
                "estimatedRunway": "2018-12-20T08:56:00.000",
                "actualRunway": "2018-12-20T08:56:00.000"
            },
            "arrival": {
                "iataCode": "MXP",
                "icaoCode": "LIMC",
                "terminal": "1",
                "baggage": "02",
                "scheduledTime": "2018-12-20T09:45:00.000",
                "estimatedTime": "2018-12-20T09:40:00.000",
                "actualTime": "2018-12-20T09:40:00.000",
                "estimatedRunway": "2018-12-20T09:31:00.000",
                "actualRunway": "2018-12-20T09:31:00.000"
            },
            "airline": {
                "name": "Alitalia",
                "iataCode": "AZ",
                "icaoCode": "AZA"
            },
            "flight": {
                "number": "7277",
                "iataNumber": "AZ7277",
                "icaoNumber": "AZA7277"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4502",
                    "iataNumber": "A54502",
                    "icaoNumber": "HOP4502"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 2,
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:47:00.000",
                "actualTime": "2018-12-20T08:47:00.000",
                "estimatedRunway": "2018-12-20T08:56:00.000",
                "actualRunway": "2018-12-20T08:56:00.000"
            },
            "arrival": {
                "iataCode": "MXP",
                "icaoCode": "LIMC",
                "terminal": "1",
                "baggage": "02",
                "scheduledTime": "2018-12-20T09:45:00.000",
                "estimatedTime": "2018-12-20T09:40:00.000",
                "actualTime": "2018-12-20T09:40:00.000",
                "estimatedRunway": "2018-12-20T09:31:00.000",
                "actualRunway": "2018-12-20T09:31:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4502",
                "iataNumber": "A54502",
                "icaoNumber": "HOP4502"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 14,
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:49:00.000",
                "actualTime": "2018-12-20T08:49:00.000",
                "estimatedRunway": "2018-12-20T08:58:00.000",
                "actualRunway": "2018-12-20T08:58:00.000"
            },
            "arrival": {
                "iataCode": "ETZ",
                "icaoCode": "LFJL",
                "delay": 10,
                "scheduledTime": "2018-12-20T09:40:00.000",
                "estimatedTime": "2018-12-20T09:50:00.000",
                "actualTime": "2018-12-20T09:50:00.000",
                "estimatedRunway": "2018-12-20T09:46:00.000",
                "actualRunway": "2018-12-20T09:46:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5385",
                "iataNumber": "AF5385",
                "icaoNumber": "AFR5385"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4042",
                    "iataNumber": "A54042",
                    "icaoNumber": "HOP4042"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 14,
                "scheduledTime": "2018-12-20T08:35:00.000",
                "estimatedTime": "2018-12-20T08:49:00.000",
                "actualTime": "2018-12-20T08:49:00.000",
                "estimatedRunway": "2018-12-20T08:58:00.000",
                "actualRunway": "2018-12-20T08:58:00.000"
            },
            "arrival": {
                "iataCode": "ETZ",
                "icaoCode": "LFJL",
                "delay": 10,
                "scheduledTime": "2018-12-20T09:40:00.000",
                "estimatedTime": "2018-12-20T09:50:00.000",
                "actualTime": "2018-12-20T09:50:00.000",
                "estimatedRunway": "2018-12-20T09:46:00.000",
                "actualRunway": "2018-12-20T09:46:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4042",
                "iataNumber": "A54042",
                "icaoNumber": "HOP4042"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 4,
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:49:00.000",
                "actualTime": "2018-12-20T08:49:00.000",
                "estimatedRunway": "2018-12-20T09:03:00.000",
                "actualRunway": "2018-12-20T09:03:00.000"
            },
            "arrival": {
                "iataCode": "PIS",
                "icaoCode": "LFBI",
                "delay": 12,
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T10:07:00.000",
                "actualTime": "2018-12-20T10:07:00.000",
                "estimatedRunway": "2018-12-20T10:05:00.000",
                "actualRunway": "2018-12-20T10:05:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5332",
                "iataNumber": "AF5332",
                "icaoNumber": "AFR5332"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4012",
                    "iataNumber": "A54012",
                    "icaoNumber": "HOP4012"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 4,
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:49:00.000",
                "actualTime": "2018-12-20T08:49:00.000",
                "estimatedRunway": "2018-12-20T09:03:00.000",
                "actualRunway": "2018-12-20T09:03:00.000"
            },
            "arrival": {
                "iataCode": "PIS",
                "icaoCode": "LFBI",
                "delay": 12,
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T10:07:00.000",
                "actualTime": "2018-12-20T10:07:00.000",
                "estimatedRunway": "2018-12-20T10:05:00.000",
                "actualRunway": "2018-12-20T10:05:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4012",
                "iataNumber": "A54012",
                "icaoNumber": "HOP4012"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 5,
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:50:00.000",
                "actualTime": "2018-12-20T08:50:00.000",
                "estimatedRunway": "2018-12-20T09:00:00.000",
                "actualRunway": "2018-12-20T09:00:00.000"
            },
            "arrival": {
                "iataCode": "PUF",
                "icaoCode": "LFBP",
                "scheduledTime": "2018-12-20T10:20:00.000",
                "estimatedTime": "2018-12-20T10:20:00.000",
                "actualTime": "2018-12-20T10:20:00.000",
                "estimatedRunway": "2018-12-20T10:17:00.000",
                "actualRunway": "2018-12-20T10:17:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5427",
                "iataNumber": "AF5427",
                "icaoNumber": "AFR5427"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4072",
                    "iataNumber": "A54072",
                    "icaoNumber": "HOP4072"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 5,
                "scheduledTime": "2018-12-20T08:45:00.000",
                "estimatedTime": "2018-12-20T08:50:00.000",
                "actualTime": "2018-12-20T08:50:00.000",
                "estimatedRunway": "2018-12-20T09:00:00.000",
                "actualRunway": "2018-12-20T09:00:00.000"
            },
            "arrival": {
                "iataCode": "PUF",
                "icaoCode": "LFBP",
                "scheduledTime": "2018-12-20T10:20:00.000",
                "estimatedTime": "2018-12-20T10:20:00.000",
                "actualTime": "2018-12-20T10:20:00.000",
                "estimatedRunway": "2018-12-20T10:17:00.000",
                "actualRunway": "2018-12-20T10:17:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4072",
                "iataNumber": "A54072",
                "icaoNumber": "HOP4072"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B04",
                "scheduledTime": "2018-12-20T08:55:00.000",
                "estimatedTime": "2018-12-20T08:55:00.000",
                "actualTime": "2018-12-20T08:55:00.000",
                "estimatedRunway": "2018-12-20T09:05:00.000",
                "actualRunway": "2018-12-20T09:05:00.000"
            },
            "arrival": {
                "iataCode": "MUC",
                "icaoCode": "EDDM",
                "terminal": "2",
                "scheduledTime": "2018-12-20T10:15:00.000",
                "estimatedTime": "2018-12-20T10:11:00.000",
                "actualTime": "2018-12-20T10:11:00.000"
            },
            "airline": {
                "name": "Air Canada",
                "iataCode": "AC",
                "icaoCode": "ACA"
            },
            "flight": {
                "number": "9407",
                "iataNumber": "AC9407",
                "icaoNumber": "ACA9407"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa CityLine",
                    "iataCode": "CL",
                    "icaoCode": "CLH"
                },
                "flight": {
                    "number": "2247",
                    "iataNumber": "CL2247",
                    "icaoNumber": "CLH2247"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B04",
                "scheduledTime": "2018-12-20T08:55:00.000",
                "estimatedTime": "2018-12-20T08:55:00.000",
                "actualTime": "2018-12-20T08:55:00.000",
                "estimatedRunway": "2018-12-20T09:05:00.000",
                "actualRunway": "2018-12-20T09:05:00.000"
            },
            "arrival": {
                "iataCode": "MUC",
                "icaoCode": "EDDM",
                "terminal": "2",
                "scheduledTime": "2018-12-20T10:15:00.000",
                "estimatedTime": "2018-12-20T10:11:00.000",
                "actualTime": "2018-12-20T10:11:00.000"
            },
            "airline": {
                "name": "SAS",
                "iataCode": "SK",
                "icaoCode": "SAS"
            },
            "flight": {
                "number": "3322",
                "iataNumber": "SK3322",
                "icaoNumber": "SAS3322"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa CityLine",
                    "iataCode": "CL",
                    "icaoCode": "CLH"
                },
                "flight": {
                    "number": "2247",
                    "iataNumber": "CL2247",
                    "icaoNumber": "CLH2247"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B04",
                "scheduledTime": "2018-12-20T08:55:00.000",
                "estimatedTime": "2018-12-20T08:55:00.000",
                "actualTime": "2018-12-20T08:55:00.000",
                "estimatedRunway": "2018-12-20T09:05:00.000",
                "actualRunway": "2018-12-20T09:05:00.000"
            },
            "arrival": {
                "iataCode": "MUC",
                "icaoCode": "EDDM",
                "terminal": "2",
                "scheduledTime": "2018-12-20T10:15:00.000",
                "estimatedTime": "2018-12-20T10:11:00.000",
                "actualTime": "2018-12-20T10:11:00.000"
            },
            "airline": {
                "name": "United Airlines",
                "iataCode": "UA",
                "icaoCode": "UAL"
            },
            "flight": {
                "number": "9486",
                "iataNumber": "UA9486",
                "icaoNumber": "UAL9486"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa CityLine",
                    "iataCode": "CL",
                    "icaoCode": "CLH"
                },
                "flight": {
                    "number": "2247",
                    "iataNumber": "CL2247",
                    "icaoNumber": "CLH2247"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B04",
                "scheduledTime": "2018-12-20T08:55:00.000",
                "estimatedTime": "2018-12-20T08:55:00.000",
                "actualTime": "2018-12-20T08:55:00.000",
                "estimatedRunway": "2018-12-20T09:05:00.000",
                "actualRunway": "2018-12-20T09:05:00.000"
            },
            "arrival": {
                "iataCode": "MUC",
                "icaoCode": "EDDM",
                "terminal": "2",
                "scheduledTime": "2018-12-20T10:15:00.000",
                "estimatedTime": "2018-12-20T10:11:00.000",
                "actualTime": "2018-12-20T10:11:00.000"
            },
            "airline": {
                "name": "Lufthansa",
                "iataCode": "LH",
                "icaoCode": "DLH"
            },
            "flight": {
                "number": "2247",
                "iataNumber": "LH2247",
                "icaoNumber": "DLH2247"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa CityLine",
                    "iataCode": "CL",
                    "icaoCode": "CLH"
                },
                "flight": {
                    "number": "2247",
                    "iataNumber": "CL2247",
                    "icaoNumber": "CLH2247"
                }
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B04",
                "scheduledTime": "2018-12-20T08:55:00.000",
                "estimatedTime": "2018-12-20T08:55:00.000",
                "actualTime": "2018-12-20T08:55:00.000",
                "estimatedRunway": "2018-12-20T09:05:00.000",
                "actualRunway": "2018-12-20T09:05:00.000"
            },
            "arrival": {
                "iataCode": "MUC",
                "icaoCode": "EDDM",
                "terminal": "2",
                "scheduledTime": "2018-12-20T10:15:00.000",
                "estimatedTime": "2018-12-20T10:11:00.000",
                "actualTime": "2018-12-20T10:11:00.000"
            },
            "airline": {
                "name": "Lufthansa CityLine",
                "iataCode": "CL",
                "icaoCode": "CLH"
            },
            "flight": {
                "number": "2247",
                "iataNumber": "CL2247",
                "icaoNumber": "CLH2247"
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T09:00:00.000",
                "estimatedRunway": "2018-12-20T09:45:00.000",
                "actualRunway": "2018-12-20T09:45:00.000"
            },
            "arrival": {
                "iataCode": "LIG",
                "icaoCode": "LFBL",
                "scheduledTime": "2018-12-20T10:05:00.000"
            },
            "airline": {
                "name": "Chalair",
                "iataCode": "CE",
                "icaoCode": "CLG"
            },
            "flight": {
                "number": "72",
                "iataNumber": "CE72",
                "icaoNumber": "CLG72"
            }
        },
        {
            "type": "departure",
            "status": "landed",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T09:00:00.000",
                "estimatedTime": "2018-12-20T09:00:00.000",
                "estimatedRunway": "2018-12-20T09:10:00.000",
                "actualRunway": "2018-12-20T09:10:00.000"
            },
            "arrival": {
                "iataCode": "NAP",
                "icaoCode": "LIRN",
                "gate": "A7",
                "scheduledTime": "2018-12-20T10:40:00.000",
                "estimatedTime": "2018-12-20T10:31:00.000",
                "actualTime": "2018-12-20T10:31:00.000",
                "estimatedRunway": "2018-12-20T10:26:00.000",
                "actualRunway": "2018-12-20T10:26:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4828",
                "iataNumber": "U24828",
                "icaoNumber": "EZY4828"
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T09:35:00.000",
                "estimatedTime": "2018-12-20T09:31:00.000",
                "actualTime": "2018-12-20T09:31:00.000",
                "estimatedRunway": "2018-12-20T09:37:00.000",
                "actualRunway": "2018-12-20T09:37:00.000"
            },
            "arrival": {
                "iataCode": "DUS",
                "icaoCode": "EDDL",
                "gate": "B91",
                "scheduledTime": "2018-12-20T11:30:00.000",
                "estimatedTime": "2018-12-20T10:50:00.000",
                "estimatedRunway": "2018-12-20T10:45:00.000"
            },
            "airline": {
                "name": "Lufthansa",
                "iataCode": "LH",
                "icaoCode": "DLH"
            },
            "flight": {
                "number": "5349",
                "iataNumber": "LH5349",
                "icaoNumber": "DLH5349"
            },
            "codeshared": {
                "airline": {
                    "name": "LGW",
                    "iataCode": "HE",
                    "icaoCode": "LGW"
                },
                "flight": {
                    "number": "9413",
                    "iataNumber": "HE9413",
                    "icaoNumber": "LGW9413"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T09:35:00.000",
                "estimatedTime": "2018-12-20T09:31:00.000",
                "actualTime": "2018-12-20T09:31:00.000",
                "estimatedRunway": "2018-12-20T09:37:00.000",
                "actualRunway": "2018-12-20T09:37:00.000"
            },
            "arrival": {
                "iataCode": "DUS",
                "icaoCode": "EDDL",
                "gate": "B91",
                "scheduledTime": "2018-12-20T11:30:00.000",
                "estimatedTime": "2018-12-20T10:50:00.000",
                "estimatedRunway": "2018-12-20T10:45:00.000"
            },
            "airline": {
                "name": "Eurowings",
                "iataCode": "EW",
                "icaoCode": "EWG"
            },
            "flight": {
                "number": "9413",
                "iataNumber": "EW9413",
                "icaoNumber": "EWG9413"
            },
            "codeshared": {
                "airline": {
                    "name": "LGW",
                    "iataCode": "HE",
                    "icaoCode": "LGW"
                },
                "flight": {
                    "number": "9413",
                    "iataNumber": "HE9413",
                    "icaoNumber": "LGW9413"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T09:35:00.000",
                "estimatedTime": "2018-12-20T09:31:00.000",
                "actualTime": "2018-12-20T09:31:00.000",
                "estimatedRunway": "2018-12-20T09:37:00.000",
                "actualRunway": "2018-12-20T09:37:00.000"
            },
            "arrival": {
                "iataCode": "DUS",
                "icaoCode": "EDDL",
                "gate": "B91",
                "scheduledTime": "2018-12-20T11:30:00.000",
                "estimatedTime": "2018-12-20T10:50:00.000",
                "estimatedRunway": "2018-12-20T10:45:00.000"
            },
            "airline": {
                "name": "LGW",
                "iataCode": "HE",
                "icaoCode": "LGW"
            },
            "flight": {
                "number": "9413",
                "iataNumber": "HE9413",
                "icaoNumber": "LGW9413"
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:47:00.000",
                "actualTime": "2018-12-20T09:47:00.000",
                "estimatedRunway": "2018-12-20T09:57:00.000",
                "actualRunway": "2018-12-20T09:57:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "baggage": "008",
                "scheduledTime": "2018-12-20T11:35:00.000",
                "estimatedTime": "2018-12-20T11:32:00.000",
                "estimatedRunway": "2018-12-20T11:16:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "8316",
                "iataNumber": "AF8316",
                "icaoNumber": "AFR8316"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM Cityhopper",
                    "iataCode": "WA",
                    "icaoCode": "KLC"
                },
                "flight": {
                    "number": "1414",
                    "iataNumber": "WA1414",
                    "icaoNumber": "KLC1414"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:47:00.000",
                "actualTime": "2018-12-20T09:47:00.000",
                "estimatedRunway": "2018-12-20T09:57:00.000",
                "actualRunway": "2018-12-20T09:57:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "baggage": "008",
                "scheduledTime": "2018-12-20T11:35:00.000",
                "estimatedTime": "2018-12-20T11:32:00.000",
                "estimatedRunway": "2018-12-20T11:16:00.000"
            },
            "airline": {
                "name": "Delta Air Lines",
                "iataCode": "DL",
                "icaoCode": "DAL"
            },
            "flight": {
                "number": "9499",
                "iataNumber": "DL9499",
                "icaoNumber": "DAL9499"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM Cityhopper",
                    "iataCode": "WA",
                    "icaoCode": "KLC"
                },
                "flight": {
                    "number": "1414",
                    "iataNumber": "WA1414",
                    "icaoNumber": "KLC1414"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:47:00.000",
                "actualTime": "2018-12-20T09:47:00.000",
                "estimatedRunway": "2018-12-20T09:57:00.000",
                "actualRunway": "2018-12-20T09:57:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "baggage": "008",
                "scheduledTime": "2018-12-20T11:35:00.000",
                "estimatedTime": "2018-12-20T11:32:00.000",
                "estimatedRunway": "2018-12-20T11:16:00.000"
            },
            "airline": {
                "name": "Kenya Airways",
                "iataCode": "KQ",
                "icaoCode": "KQA"
            },
            "flight": {
                "number": "1414",
                "iataNumber": "KQ1414",
                "icaoNumber": "KQA1414"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM Cityhopper",
                    "iataCode": "WA",
                    "icaoCode": "KLC"
                },
                "flight": {
                    "number": "1414",
                    "iataNumber": "WA1414",
                    "icaoNumber": "KLC1414"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:47:00.000",
                "actualTime": "2018-12-20T09:47:00.000",
                "estimatedRunway": "2018-12-20T09:57:00.000",
                "actualRunway": "2018-12-20T09:57:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "baggage": "008",
                "scheduledTime": "2018-12-20T11:35:00.000",
                "estimatedTime": "2018-12-20T11:32:00.000",
                "estimatedRunway": "2018-12-20T11:16:00.000"
            },
            "airline": {
                "name": "Xiamen Airlines",
                "iataCode": "MF",
                "icaoCode": "CXA"
            },
            "flight": {
                "number": "9788",
                "iataNumber": "MF9788",
                "icaoNumber": "CXA9788"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM Cityhopper",
                    "iataCode": "WA",
                    "icaoCode": "KLC"
                },
                "flight": {
                    "number": "1414",
                    "iataNumber": "WA1414",
                    "icaoNumber": "KLC1414"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:47:00.000",
                "actualTime": "2018-12-20T09:47:00.000",
                "estimatedRunway": "2018-12-20T09:57:00.000",
                "actualRunway": "2018-12-20T09:57:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "baggage": "008",
                "scheduledTime": "2018-12-20T11:35:00.000",
                "estimatedTime": "2018-12-20T11:32:00.000",
                "estimatedRunway": "2018-12-20T11:16:00.000"
            },
            "airline": {
                "name": "Air Mauritius",
                "iataCode": "MK",
                "icaoCode": "MAU"
            },
            "flight": {
                "number": "7371",
                "iataNumber": "MK7371",
                "icaoNumber": "MAU7371"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM Cityhopper",
                    "iataCode": "WA",
                    "icaoCode": "KLC"
                },
                "flight": {
                    "number": "1414",
                    "iataNumber": "WA1414",
                    "icaoNumber": "KLC1414"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:47:00.000",
                "actualTime": "2018-12-20T09:47:00.000",
                "estimatedRunway": "2018-12-20T09:57:00.000",
                "actualRunway": "2018-12-20T09:57:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "baggage": "008",
                "scheduledTime": "2018-12-20T11:35:00.000",
                "estimatedTime": "2018-12-20T11:32:00.000",
                "estimatedRunway": "2018-12-20T11:16:00.000"
            },
            "airline": {
                "name": "KLM",
                "iataCode": "KL",
                "icaoCode": "KLM"
            },
            "flight": {
                "number": "1414",
                "iataNumber": "KL1414",
                "icaoNumber": "KLM1414"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM Cityhopper",
                    "iataCode": "WA",
                    "icaoCode": "KLC"
                },
                "flight": {
                    "number": "1414",
                    "iataNumber": "WA1414",
                    "icaoNumber": "KLC1414"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q02",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:47:00.000",
                "actualTime": "2018-12-20T09:47:00.000",
                "estimatedRunway": "2018-12-20T09:57:00.000",
                "actualRunway": "2018-12-20T09:57:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "baggage": "008",
                "scheduledTime": "2018-12-20T11:35:00.000",
                "estimatedTime": "2018-12-20T11:32:00.000",
                "estimatedRunway": "2018-12-20T11:16:00.000"
            },
            "airline": {
                "name": "KLM Cityhopper",
                "iataCode": "WA",
                "icaoCode": "KLC"
            },
            "flight": {
                "number": "1414",
                "iataNumber": "WA1414",
                "icaoNumber": "KLC1414"
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B03",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:52:00.000",
                "actualTime": "2018-12-20T09:52:00.000",
                "estimatedRunway": "2018-12-20T10:06:00.000",
                "actualRunway": "2018-12-20T10:06:00.000"
            },
            "arrival": {
                "iataCode": "VIE",
                "icaoCode": "LOWW",
                "scheduledTime": "2018-12-20T12:00:00.000",
                "estimatedTime": "2018-12-20T11:45:00.000",
                "estimatedRunway": "2018-12-20T11:35:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5038",
                "iataNumber": "AF5038",
                "icaoNumber": "AFR5038"
            },
            "codeshared": {
                "airline": {
                    "name": "Austrian",
                    "iataCode": "OS",
                    "icaoCode": "AUA"
                },
                "flight": {
                    "number": "404",
                    "iataNumber": "OS404",
                    "icaoNumber": "AUA404"
                }
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B03",
                "scheduledTime": "2018-12-20T09:55:00.000",
                "estimatedTime": "2018-12-20T09:52:00.000",
                "actualTime": "2018-12-20T09:52:00.000",
                "estimatedRunway": "2018-12-20T10:06:00.000",
                "actualRunway": "2018-12-20T10:06:00.000"
            },
            "arrival": {
                "iataCode": "VIE",
                "icaoCode": "LOWW",
                "scheduledTime": "2018-12-20T12:00:00.000",
                "estimatedTime": "2018-12-20T11:45:00.000",
                "estimatedRunway": "2018-12-20T11:35:00.000"
            },
            "airline": {
                "name": "Austrian",
                "iataCode": "OS",
                "icaoCode": "AUA"
            },
            "flight": {
                "number": "404",
                "iataNumber": "OS404",
                "icaoNumber": "AUA404"
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T10:20:00.000",
                "estimatedTime": "2018-12-20T10:20:00.000",
                "actualTime": "2018-12-20T10:20:00.000",
                "estimatedRunway": "2018-12-20T10:35:00.000",
                "actualRunway": "2018-12-20T10:35:00.000"
            },
            "arrival": {
                "iataCode": "FCO",
                "icaoCode": "LIRF",
                "terminal": "3",
                "baggage": "9",
                "scheduledTime": "2018-12-20T11:55:00.000",
                "estimatedTime": "2018-12-20T11:51:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4471",
                "iataNumber": "U24471",
                "icaoNumber": "EZY4471"
            }
        },
        {
            "type": "departure",
            "status": "active",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T10:35:00.000",
                "estimatedTime": "2018-12-20T10:35:00.000",
                "estimatedRunway": "2018-12-20T10:47:00.000",
                "actualRunway": "2018-12-20T10:47:00.000"
            },
            "arrival": {
                "iataCode": "FAO",
                "icaoCode": "LPFR",
                "scheduledTime": "2018-12-20T12:05:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4485",
                "iataNumber": "U24485",
                "icaoNumber": "EZY4485"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T10:45:00.000"
            },
            "arrival": {
                "iataCode": "VCE",
                "icaoCode": "LIPZ",
                "scheduledTime": "2018-12-20T12:05:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5334",
                "iataNumber": "AF5334",
                "icaoNumber": "AFR5334"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4522",
                    "iataNumber": "A54522",
                    "icaoNumber": "HOP4522"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T10:45:00.000"
            },
            "arrival": {
                "iataCode": "VCE",
                "icaoCode": "LIPZ",
                "scheduledTime": "2018-12-20T12:05:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4522",
                "iataNumber": "A54522",
                "icaoNumber": "HOP4522"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B04",
                "scheduledTime": "2018-12-20T10:55:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A13",
                "scheduledTime": "2018-12-20T12:20:00.000"
            },
            "airline": {
                "name": "Air Canada",
                "iataCode": "AC",
                "icaoCode": "ACA"
            },
            "flight": {
                "number": "9403",
                "iataNumber": "AC9403",
                "icaoNumber": "ACA9403"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1075",
                    "iataNumber": "LH1075",
                    "icaoNumber": "DLH1075"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B04",
                "scheduledTime": "2018-12-20T10:55:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A13",
                "scheduledTime": "2018-12-20T12:20:00.000"
            },
            "airline": {
                "name": "SAS",
                "iataCode": "SK",
                "icaoCode": "SAS"
            },
            "flight": {
                "number": "3338",
                "iataNumber": "SK3338",
                "icaoNumber": "SAS3338"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1075",
                    "iataNumber": "LH1075",
                    "icaoNumber": "DLH1075"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B04",
                "scheduledTime": "2018-12-20T10:55:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A13",
                "scheduledTime": "2018-12-20T12:20:00.000"
            },
            "airline": {
                "name": "United Airlines",
                "iataCode": "UA",
                "icaoCode": "UAL"
            },
            "flight": {
                "number": "8891",
                "iataNumber": "UA8891",
                "icaoNumber": "UAL8891"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1075",
                    "iataNumber": "LH1075",
                    "icaoNumber": "DLH1075"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "gate": "B04",
                "scheduledTime": "2018-12-20T10:55:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A13",
                "scheduledTime": "2018-12-20T12:20:00.000"
            },
            "airline": {
                "name": "Lufthansa",
                "iataCode": "LH",
                "icaoCode": "DLH"
            },
            "flight": {
                "number": "1075",
                "iataNumber": "LH1075",
                "icaoNumber": "DLH1075"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Jet Airways (India)",
                "iataCode": "9W",
                "icaoCode": "JAI"
            },
            "flight": {
                "number": "6720",
                "iataNumber": "9W6720",
                "icaoNumber": "JAI6720"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Aeromexico",
                "iataCode": "AM",
                "icaoCode": "AMX"
            },
            "flight": {
                "number": "6152",
                "iataNumber": "AM6152",
                "icaoNumber": "AMX6152"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Finnair",
                "iataCode": "AY",
                "icaoCode": "FIN"
            },
            "flight": {
                "number": "6346",
                "iataNumber": "AY6346",
                "icaoNumber": "FIN6346"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Delta Air Lines",
                "iataCode": "DL",
                "icaoCode": "DAL"
            },
            "flight": {
                "number": "8341",
                "iataNumber": "DL8341",
                "icaoNumber": "DAL8341"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Korean Air",
                "iataCode": "KE",
                "icaoCode": "KAL"
            },
            "flight": {
                "number": "6352",
                "iataNumber": "KE6352",
                "icaoNumber": "KAL6352"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Atlasglobal",
                "iataCode": "KK",
                "icaoCode": "KKK"
            },
            "flight": {
                "number": "7341",
                "iataNumber": "KK7341",
                "icaoNumber": "KKK7341"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Air Mauritius",
                "iataCode": "MK",
                "icaoCode": "MAU"
            },
            "flight": {
                "number": "9051",
                "iataNumber": "MK9051",
                "icaoNumber": "MAU9051"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "China Eastern Airlines",
                "iataCode": "MU",
                "icaoCode": "CES"
            },
            "flight": {
                "number": "8630",
                "iataNumber": "MU8630",
                "icaoNumber": "CES8630"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "TAROM",
                "iataCode": "RO",
                "icaoCode": "ROT"
            },
            "flight": {
                "number": "9558",
                "iataNumber": "RO9558",
                "icaoNumber": "ROT9558"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Aeroflot",
                "iataCode": "SU",
                "icaoCode": "AFL"
            },
            "flight": {
                "number": "3024",
                "iataNumber": "SU3024",
                "icaoNumber": "AFL3024"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Vietnam Airlines",
                "iataCode": "VN",
                "icaoCode": "HVN"
            },
            "flight": {
                "number": "3122",
                "iataNumber": "VN3122",
                "icaoNumber": "HVN3122"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7641",
                    "iataNumber": "AF7641",
                    "icaoNumber": "AFR7641"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "7641",
                "iataNumber": "AF7641",
                "icaoNumber": "AFR7641"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T11:00:00.000"
            },
            "arrival": {
                "iataCode": "ALG",
                "icaoCode": "DAAG",
                "terminal": "I",
                "scheduledTime": "2018-12-20T12:45:00.000"
            },
            "airline": {
                "name": "Aigle Azur",
                "iataCode": "ZI",
                "icaoCode": "AAF"
            },
            "flight": {
                "number": "749",
                "iataNumber": "ZI749",
                "icaoNumber": "AAF749"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 27,
                "scheduledTime": "2018-12-20T10:35:00.000",
                "estimatedTime": "2018-12-20T11:02:00.000"
            },
            "arrival": {
                "iataCode": "PRG",
                "icaoCode": "LKPR",
                "terminal": "2",
                "baggage": "24",
                "scheduledTime": "2018-12-20T12:20:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5470",
                "iataNumber": "AF5470",
                "icaoNumber": "AFR5470"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4412",
                    "iataNumber": "A54412",
                    "icaoNumber": "HOP4412"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 27,
                "scheduledTime": "2018-12-20T10:35:00.000",
                "estimatedTime": "2018-12-20T11:02:00.000"
            },
            "arrival": {
                "iataCode": "PRG",
                "icaoCode": "LKPR",
                "terminal": "2",
                "baggage": "24",
                "scheduledTime": "2018-12-20T12:20:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4412",
                "iataNumber": "A54412",
                "icaoNumber": "HOP4412"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T11:15:00.000"
            },
            "arrival": {
                "iataCode": "ORN",
                "icaoCode": "DAOO",
                "scheduledTime": "2018-12-20T13:20:00.000"
            },
            "airline": {
                "name": "Air Algerie",
                "iataCode": "AH",
                "icaoCode": "DAH"
            },
            "flight": {
                "number": "1081",
                "iataNumber": "AH1081",
                "icaoNumber": "DAH1081"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "delay": 18,
                "scheduledTime": "2018-12-20T11:00:00.000",
                "estimatedTime": "2018-12-20T11:18:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 1",
                "delay": 18,
                "scheduledTime": "2018-12-20T12:20:00.000",
                "estimatedTime": "2018-12-20T12:38:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4359",
                "iataNumber": "U24359",
                "icaoNumber": "EZY4359"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "delay": 105,
                "scheduledTime": "2018-12-20T09:35:00.000",
                "estimatedTime": "2018-12-20T11:20:00.000"
            },
            "arrival": {
                "iataCode": "MIR",
                "icaoCode": "DTMB",
                "scheduledTime": "2018-12-20T11:40:00.000"
            },
            "airline": {
                "name": "Tunisair",
                "iataCode": "TU",
                "icaoCode": "TAR"
            },
            "flight": {
                "number": "463",
                "iataNumber": "TU463",
                "icaoNumber": "TAR463"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T11:25:00.000",
                "estimatedTime": "2018-12-20T11:25:00.000"
            },
            "arrival": {
                "iataCode": "LHR",
                "icaoCode": "EGLL",
                "terminal": "3",
                "scheduledTime": "2018-12-20T12:15:00.000",
                "estimatedTime": "2018-12-20T12:01:00.000"
            },
            "airline": {
                "name": "American Airlines",
                "iataCode": "AA",
                "icaoCode": "AAL"
            },
            "flight": {
                "number": "6698",
                "iataNumber": "AA6698",
                "icaoNumber": "AAL6698"
            },
            "codeshared": {
                "airline": {
                    "name": "British Airways",
                    "iataCode": "BA",
                    "icaoCode": "BAW"
                },
                "flight": {
                    "number": "361",
                    "iataNumber": "BA361",
                    "icaoNumber": "BAW361"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T11:25:00.000",
                "estimatedTime": "2018-12-20T11:25:00.000"
            },
            "arrival": {
                "iataCode": "LHR",
                "icaoCode": "EGLL",
                "terminal": "3",
                "scheduledTime": "2018-12-20T12:15:00.000",
                "estimatedTime": "2018-12-20T12:01:00.000"
            },
            "airline": {
                "name": "Cathay Pacific",
                "iataCode": "CX",
                "icaoCode": "CPA"
            },
            "flight": {
                "number": "7114",
                "iataNumber": "CX7114",
                "icaoNumber": "CPA7114"
            },
            "codeshared": {
                "airline": {
                    "name": "British Airways",
                    "iataCode": "BA",
                    "icaoCode": "BAW"
                },
                "flight": {
                    "number": "361",
                    "iataNumber": "BA361",
                    "icaoNumber": "BAW361"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T11:25:00.000",
                "estimatedTime": "2018-12-20T11:25:00.000"
            },
            "arrival": {
                "iataCode": "LHR",
                "icaoCode": "EGLL",
                "terminal": "3",
                "scheduledTime": "2018-12-20T12:15:00.000",
                "estimatedTime": "2018-12-20T12:01:00.000"
            },
            "airline": {
                "name": "British Airways",
                "iataCode": "BA",
                "icaoCode": "BAW"
            },
            "flight": {
                "number": "361",
                "iataNumber": "BA361",
                "icaoNumber": "BAW361"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T11:35:00.000",
                "estimatedTime": "2018-12-20T11:35:00.000"
            },
            "arrival": {
                "iataCode": "SVO",
                "icaoCode": "UUEE",
                "terminal": "D",
                "gate": "18",
                "baggage": "5",
                "scheduledTime": "2018-12-20T17:30:00.000",
                "estimatedTime": "2018-12-20T17:17:00.000"
            },
            "airline": {
                "name": "Aeroflot",
                "iataCode": "SU",
                "icaoCode": "AFL"
            },
            "flight": {
                "number": "2375",
                "iataNumber": "SU2375",
                "icaoNumber": "AFL2375"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T11:40:00.000",
                "estimatedTime": "2018-12-20T11:40:00.000"
            },
            "arrival": {
                "iataCode": "TUN",
                "icaoCode": "DTTA",
                "terminal": "M",
                "scheduledTime": "2018-12-20T13:35:00.000",
                "estimatedTime": "2018-12-20T13:35:00.000"
            },
            "airline": {
                "name": "Tunisair",
                "iataCode": "TU",
                "icaoCode": "TAR"
            },
            "flight": {
                "number": "751",
                "iataNumber": "TU751",
                "icaoNumber": "TAR751"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T11:45:00.000"
            },
            "arrival": {
                "iataCode": "QSF",
                "icaoCode": "DAAS",
                "scheduledTime": "2018-12-20T13:30:00.000"
            },
            "airline": {
                "name": "Air Algerie",
                "iataCode": "AH",
                "icaoCode": "DAH"
            },
            "flight": {
                "number": "1155",
                "iataNumber": "AH1155",
                "icaoNumber": "DAH1155"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T11:50:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "scheduledTime": "2018-12-20T13:10:00.000"
            },
            "airline": {
                "name": "Brussels Airlines",
                "iataCode": "SN",
                "icaoCode": "BEL"
            },
            "flight": {
                "number": "3588",
                "iataNumber": "SN3588",
                "icaoNumber": "BEL3588"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T11:55:00.000"
            },
            "arrival": {
                "iataCode": "DJE",
                "icaoCode": "DTTJ",
                "scheduledTime": "2018-12-20T14:10:00.000"
            },
            "airline": {
                "name": "Nouvelair Tunisie",
                "iataCode": "BJ",
                "icaoCode": "LBT"
            },
            "flight": {
                "number": "535",
                "iataNumber": "BJ535",
                "icaoNumber": "LBT535"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T12:00:00.000"
            },
            "arrival": {
                "iataCode": "TLV",
                "icaoCode": "LLBG",
                "terminal": "3",
                "scheduledTime": "2018-12-20T17:10:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "3364",
                "iataNumber": "AF3364",
                "icaoNumber": "AFR3364"
            },
            "codeshared": {
                "airline": {
                    "name": "Transavia France",
                    "iataCode": "TO",
                    "icaoCode": "TVF"
                },
                "flight": {
                    "number": "4898",
                    "iataNumber": "TO4898",
                    "icaoNumber": "TVF4898"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T12:00:00.000"
            },
            "arrival": {
                "iataCode": "TLV",
                "icaoCode": "LLBG",
                "terminal": "3",
                "scheduledTime": "2018-12-20T17:10:00.000"
            },
            "airline": {
                "name": "Transavia France",
                "iataCode": "TO",
                "icaoCode": "TVF"
            },
            "flight": {
                "number": "4898",
                "iataNumber": "TO4898",
                "icaoNumber": "TVF4898"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T12:00:00.000"
            },
            "arrival": {
                "iataCode": "YUL",
                "icaoCode": "CYUL",
                "scheduledTime": "2018-12-20T14:15:00.000"
            },
            "airline": {
                "name": "Lufthansa",
                "iataCode": "LH",
                "icaoCode": "DLH"
            },
            "flight": {
                "number": "6738",
                "iataNumber": "LH6738",
                "icaoNumber": "DLH6738"
            },
            "codeshared": {
                "airline": {
                    "name": "Air Canada",
                    "iataCode": "AC",
                    "icaoCode": "ACA"
                },
                "flight": {
                    "number": "829",
                    "iataNumber": "AC829",
                    "icaoNumber": "ACA829"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T12:00:00.000"
            },
            "arrival": {
                "iataCode": "YUL",
                "icaoCode": "CYUL",
                "scheduledTime": "2018-12-20T14:15:00.000"
            },
            "airline": {
                "name": "Brussels Airlines",
                "iataCode": "SN",
                "icaoCode": "BEL"
            },
            "flight": {
                "number": "9625",
                "iataNumber": "SN9625",
                "icaoNumber": "BEL9625"
            },
            "codeshared": {
                "airline": {
                    "name": "Air Canada",
                    "iataCode": "AC",
                    "icaoCode": "ACA"
                },
                "flight": {
                    "number": "829",
                    "iataNumber": "AC829",
                    "icaoNumber": "ACA829"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T12:00:00.000"
            },
            "arrival": {
                "iataCode": "YUL",
                "icaoCode": "CYUL",
                "scheduledTime": "2018-12-20T14:15:00.000"
            },
            "airline": {
                "name": "United Airlines",
                "iataCode": "UA",
                "icaoCode": "UAL"
            },
            "flight": {
                "number": "8067",
                "iataNumber": "UA8067",
                "icaoNumber": "UAL8067"
            },
            "codeshared": {
                "airline": {
                    "name": "Air Canada",
                    "iataCode": "AC",
                    "icaoCode": "ACA"
                },
                "flight": {
                    "number": "829",
                    "iataNumber": "AC829",
                    "icaoNumber": "ACA829"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T12:00:00.000"
            },
            "arrival": {
                "iataCode": "YUL",
                "icaoCode": "CYUL",
                "scheduledTime": "2018-12-20T14:15:00.000"
            },
            "airline": {
                "name": "Air Canada",
                "iataCode": "AC",
                "icaoCode": "ACA"
            },
            "flight": {
                "number": "829",
                "iataNumber": "AC829",
                "icaoNumber": "ACA829"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "delay": 15,
                "scheduledTime": "2018-12-20T11:50:00.000",
                "estimatedTime": "2018-12-20T12:05:00.000"
            },
            "arrival": {
                "iataCode": "IST",
                "icaoCode": "LTBA",
                "terminal": "I",
                "delay": 24,
                "scheduledTime": "2018-12-20T16:55:00.000",
                "estimatedTime": "2018-12-20T17:19:00.000"
            },
            "airline": {
                "name": "Turkish Airlines",
                "iataCode": "TK",
                "icaoCode": "THY"
            },
            "flight": {
                "number": "1808",
                "iataNumber": "TK1808",
                "icaoNumber": "THY1808"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:05:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "19",
                "scheduledTime": "2018-12-20T14:00:00.000",
                "estimatedTime": "2018-12-20T14:00:00.000"
            },
            "airline": {
                "name": "Iberia",
                "iataCode": "IB",
                "icaoCode": "IBE"
            },
            "flight": {
                "number": "8711",
                "iataNumber": "IB8711",
                "icaoNumber": "IBE8711"
            },
            "codeshared": {
                "airline": {
                    "name": "Air Nostrum",
                    "iataCode": "YW",
                    "icaoCode": "ANE"
                },
                "flight": {
                    "number": "8711",
                    "iataNumber": "YW8711",
                    "icaoNumber": "ANE8711"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:05:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "4",
                "baggage": "19",
                "scheduledTime": "2018-12-20T14:00:00.000",
                "estimatedTime": "2018-12-20T14:00:00.000"
            },
            "airline": {
                "name": "Air Nostrum",
                "iataCode": "YW",
                "icaoCode": "ANE"
            },
            "flight": {
                "number": "8711",
                "iataNumber": "YW8711",
                "icaoNumber": "ANE8711"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 58,
                "scheduledTime": "2018-12-20T11:10:00.000",
                "estimatedTime": "2018-12-20T12:08:00.000"
            },
            "arrival": {
                "iataCode": "ORY",
                "icaoCode": "LFPO",
                "terminal": "W",
                "baggage": "01",
                "delay": 55,
                "scheduledTime": "2018-12-20T12:15:00.000",
                "estimatedTime": "2018-12-20T13:10:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "5417",
                "iataNumber": "A55417",
                "icaoNumber": "HOP5417"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7417",
                    "iataNumber": "AF7417",
                    "icaoNumber": "AFR7417"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "delay": 58,
                "scheduledTime": "2018-12-20T11:10:00.000",
                "estimatedTime": "2018-12-20T12:08:00.000"
            },
            "arrival": {
                "iataCode": "ORY",
                "icaoCode": "LFPO",
                "terminal": "W",
                "baggage": "01",
                "delay": 55,
                "scheduledTime": "2018-12-20T12:15:00.000",
                "estimatedTime": "2018-12-20T13:10:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "7417",
                "iataNumber": "AF7417",
                "icaoNumber": "AFR7417"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "delay": 3,
                "scheduledTime": "2018-12-20T12:05:00.000",
                "estimatedTime": "2018-12-20T12:08:00.000"
            },
            "arrival": {
                "iataCode": "LTN",
                "icaoCode": "EGGW",
                "scheduledTime": "2018-12-20T12:45:00.000",
                "estimatedTime": "2018-12-20T12:38:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "2434",
                "iataNumber": "U22434",
                "icaoNumber": "EZY2434"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "arrival": {
                "iataCode": "OPO",
                "icaoCode": "LPPR",
                "scheduledTime": "2018-12-20T13:25:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "3362",
                "iataNumber": "AF3362",
                "icaoNumber": "AFR3362"
            },
            "codeshared": {
                "airline": {
                    "name": "Transavia France",
                    "iataCode": "TO",
                    "icaoCode": "TVF"
                },
                "flight": {
                    "number": "4844",
                    "iataNumber": "TO4844",
                    "icaoNumber": "TVF4844"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T12:10:00.000"
            },
            "arrival": {
                "iataCode": "OPO",
                "icaoCode": "LPPR",
                "scheduledTime": "2018-12-20T13:25:00.000"
            },
            "airline": {
                "name": "Transavia France",
                "iataCode": "TO",
                "icaoCode": "TVF"
            },
            "flight": {
                "number": "4844",
                "iataNumber": "TO4844",
                "icaoNumber": "TVF4844"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T12:20:00.000",
                "estimatedTime": "2018-12-20T12:20:00.000"
            },
            "arrival": {
                "iataCode": "MAD",
                "icaoCode": "LEMD",
                "terminal": "1",
                "baggage": "10",
                "scheduledTime": "2018-12-20T14:10:00.000",
                "estimatedTime": "2018-12-20T14:10:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4421",
                "iataNumber": "U24421",
                "icaoNumber": "EZY4421"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T12:25:00.000"
            },
            "arrival": {
                "iataCode": "SAW",
                "icaoCode": "LTFJ",
                "scheduledTime": "2018-12-20T17:40:00.000"
            },
            "airline": {
                "name": "Pegasus",
                "iataCode": "PC",
                "icaoCode": "PGT"
            },
            "flight": {
                "number": "1142",
                "iataNumber": "PC1142",
                "icaoNumber": "PGT1142"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "Jet Airways (India)",
                "iataCode": "9W",
                "icaoCode": "JAI"
            },
            "flight": {
                "number": "6721",
                "iataNumber": "9W6721",
                "icaoNumber": "JAI6721"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7643",
                    "iataNumber": "AF7643",
                    "icaoNumber": "AFR7643"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "Aerolineas Argentinas",
                "iataCode": "AR",
                "icaoCode": "ARG"
            },
            "flight": {
                "number": "7827",
                "iataNumber": "AR7827",
                "icaoNumber": "ARG7827"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7643",
                    "iataNumber": "AF7643",
                    "icaoNumber": "AFR7643"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "Finnair",
                "iataCode": "AY",
                "icaoCode": "FIN"
            },
            "flight": {
                "number": "6310",
                "iataNumber": "AY6310",
                "icaoNumber": "FIN6310"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7643",
                    "iataNumber": "AF7643",
                    "icaoNumber": "AFR7643"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "Delta Air Lines",
                "iataCode": "DL",
                "icaoCode": "DAL"
            },
            "flight": {
                "number": "8709",
                "iataNumber": "DL8709",
                "icaoNumber": "DAL8709"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7643",
                    "iataNumber": "AF7643",
                    "icaoNumber": "AFR7643"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "Atlasglobal",
                "iataCode": "KK",
                "icaoCode": "KKK"
            },
            "flight": {
                "number": "7343",
                "iataNumber": "KK7343",
                "icaoNumber": "KKK7343"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7643",
                    "iataNumber": "AF7643",
                    "icaoNumber": "AFR7643"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "Air Mauritius",
                "iataCode": "MK",
                "icaoCode": "MAU"
            },
            "flight": {
                "number": "9053",
                "iataNumber": "MK9053",
                "icaoNumber": "MAU9053"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7643",
                    "iataNumber": "AF7643",
                    "icaoNumber": "AFR7643"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "China Eastern Airlines",
                "iataCode": "MU",
                "icaoCode": "CES"
            },
            "flight": {
                "number": "8626",
                "iataNumber": "MU8626",
                "icaoNumber": "CES8626"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7643",
                    "iataNumber": "AF7643",
                    "icaoNumber": "AFR7643"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "TAROM",
                "iataCode": "RO",
                "icaoCode": "ROT"
            },
            "flight": {
                "number": "9544",
                "iataNumber": "RO9544",
                "icaoNumber": "ROT9544"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7643",
                    "iataNumber": "AF7643",
                    "icaoNumber": "AFR7643"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "Aeroflot",
                "iataCode": "SU",
                "icaoCode": "AFL"
            },
            "flight": {
                "number": "3026",
                "iataNumber": "SU3026",
                "icaoNumber": "AFL3026"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7643",
                    "iataNumber": "AF7643",
                    "icaoNumber": "AFR7643"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T13:40:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "7643",
                "iataNumber": "AF7643",
                "icaoNumber": "AFR7643"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T12:35:00.000"
            },
            "arrival": {
                "iataCode": "ALG",
                "icaoCode": "DAAG",
                "terminal": "I",
                "scheduledTime": "2018-12-20T14:25:00.000"
            },
            "airline": {
                "name": "Air Algerie",
                "iataCode": "AH",
                "icaoCode": "DAH"
            },
            "flight": {
                "number": "1037",
                "iataNumber": "AH1037",
                "icaoNumber": "DAH1037"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:45:00.000"
            },
            "arrival": {
                "iataCode": "LIS",
                "icaoCode": "LPPT",
                "terminal": "1",
                "scheduledTime": "2018-12-20T14:10:00.000"
            },
            "airline": {
                "name": "TAP Portugal",
                "iataCode": "TP",
                "icaoCode": "TAP"
            },
            "flight": {
                "number": "471",
                "iataNumber": "TP471",
                "icaoNumber": "TAP471"
            },
            "codeshared": {
                "airline": {
                    "name": "Portugalia Airlines",
                    "iataCode": "NI",
                    "icaoCode": "PGA"
                },
                "flight": {
                    "number": "471",
                    "iataNumber": "NI471",
                    "icaoNumber": "PGA471"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T12:45:00.000"
            },
            "arrival": {
                "iataCode": "LIS",
                "icaoCode": "LPPT",
                "terminal": "1",
                "scheduledTime": "2018-12-20T14:10:00.000"
            },
            "airline": {
                "name": "Portugalia Airlines",
                "iataCode": "NI",
                "icaoCode": "PGA"
            },
            "flight": {
                "number": "471",
                "iataNumber": "NI471",
                "icaoNumber": "PGA471"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T13:00:00.000",
                "estimatedTime": "2018-12-20T13:00:00.000"
            },
            "arrival": {
                "iataCode": "BCN",
                "icaoCode": "LEBL",
                "terminal": "1",
                "baggage": "10",
                "scheduledTime": "2018-12-20T14:15:00.000",
                "estimatedTime": "2018-12-20T14:15:00.000"
            },
            "airline": {
                "name": "Iberia",
                "iataCode": "IB",
                "icaoCode": "IBE"
            },
            "flight": {
                "number": "5341",
                "iataNumber": "IB5341",
                "icaoNumber": "IBE5341"
            },
            "codeshared": {
                "airline": {
                    "name": "Vueling",
                    "iataCode": "VY",
                    "icaoCode": "VLG"
                },
                "flight": {
                    "number": "1221",
                    "iataNumber": "VY1221",
                    "icaoNumber": "VLG1221"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T13:00:00.000",
                "estimatedTime": "2018-12-20T13:00:00.000"
            },
            "arrival": {
                "iataCode": "BCN",
                "icaoCode": "LEBL",
                "terminal": "1",
                "baggage": "10",
                "scheduledTime": "2018-12-20T14:15:00.000",
                "estimatedTime": "2018-12-20T14:15:00.000"
            },
            "airline": {
                "name": "Vueling",
                "iataCode": "VY",
                "icaoCode": "VLG"
            },
            "flight": {
                "number": "1221",
                "iataNumber": "VY1221",
                "icaoNumber": "VLG1221"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T13:20:00.000"
            },
            "arrival": {
                "iataCode": "MUC",
                "icaoCode": "EDDM",
                "terminal": "2",
                "gate": "G34",
                "scheduledTime": "2018-12-20T14:40:00.000"
            },
            "airline": {
                "name": "SAS",
                "iataCode": "SK",
                "icaoCode": "SAS"
            },
            "flight": {
                "number": "3332",
                "iataNumber": "SK3332",
                "icaoNumber": "SAS3332"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "2249",
                    "iataNumber": "LH2249",
                    "icaoNumber": "DLH2249"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T13:20:00.000"
            },
            "arrival": {
                "iataCode": "MUC",
                "icaoCode": "EDDM",
                "terminal": "2",
                "gate": "G34",
                "scheduledTime": "2018-12-20T14:40:00.000"
            },
            "airline": {
                "name": "United Airlines",
                "iataCode": "UA",
                "icaoCode": "UAL"
            },
            "flight": {
                "number": "9488",
                "iataNumber": "UA9488",
                "icaoNumber": "UAL9488"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "2249",
                    "iataNumber": "LH2249",
                    "icaoNumber": "DLH2249"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T13:20:00.000"
            },
            "arrival": {
                "iataCode": "MUC",
                "icaoCode": "EDDM",
                "terminal": "2",
                "gate": "G34",
                "scheduledTime": "2018-12-20T14:40:00.000"
            },
            "airline": {
                "name": "Lufthansa",
                "iataCode": "LH",
                "icaoCode": "DLH"
            },
            "flight": {
                "number": "2249",
                "iataNumber": "LH2249",
                "icaoNumber": "DLH2249"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T13:50:00.000",
                "estimatedTime": "2018-12-20T13:50:00.000"
            },
            "arrival": {
                "iataCode": "KRK",
                "icaoCode": "EPKK",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4479",
                "iataNumber": "U24479",
                "icaoNumber": "EZY4479"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q05",
                "scheduledTime": "2018-12-20T14:10:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "gate": "C11",
                "scheduledTime": "2018-12-20T15:55:00.000",
                "estimatedTime": "2018-12-20T15:55:00.000",
                "estimatedRunway": "2018-12-20T15:55:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "8318",
                "iataNumber": "AF8318",
                "icaoNumber": "AFR8318"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM",
                    "iataCode": "KL",
                    "icaoCode": "KLM"
                },
                "flight": {
                    "number": "1416",
                    "iataNumber": "KL1416",
                    "icaoNumber": "KLM1416"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q05",
                "scheduledTime": "2018-12-20T14:10:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "gate": "C11",
                "scheduledTime": "2018-12-20T15:55:00.000",
                "estimatedTime": "2018-12-20T15:55:00.000",
                "estimatedRunway": "2018-12-20T15:55:00.000"
            },
            "airline": {
                "name": "Kenya Airways",
                "iataCode": "KQ",
                "icaoCode": "KQA"
            },
            "flight": {
                "number": "1416",
                "iataNumber": "KQ1416",
                "icaoNumber": "KQA1416"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM",
                    "iataCode": "KL",
                    "icaoCode": "KLM"
                },
                "flight": {
                    "number": "1416",
                    "iataNumber": "KL1416",
                    "icaoNumber": "KLM1416"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q05",
                "scheduledTime": "2018-12-20T14:10:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "gate": "C11",
                "scheduledTime": "2018-12-20T15:55:00.000",
                "estimatedTime": "2018-12-20T15:55:00.000",
                "estimatedRunway": "2018-12-20T15:55:00.000"
            },
            "airline": {
                "name": "Xiamen Airlines",
                "iataCode": "MF",
                "icaoCode": "CXA"
            },
            "flight": {
                "number": "9792",
                "iataNumber": "MF9792",
                "icaoNumber": "CXA9792"
            },
            "codeshared": {
                "airline": {
                    "name": "KLM",
                    "iataCode": "KL",
                    "icaoCode": "KLM"
                },
                "flight": {
                    "number": "1416",
                    "iataNumber": "KL1416",
                    "icaoNumber": "KLM1416"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "gate": "Q05",
                "scheduledTime": "2018-12-20T14:10:00.000"
            },
            "arrival": {
                "iataCode": "AMS",
                "icaoCode": "EHAM",
                "gate": "C11",
                "scheduledTime": "2018-12-20T15:55:00.000",
                "estimatedTime": "2018-12-20T15:55:00.000",
                "estimatedRunway": "2018-12-20T15:55:00.000"
            },
            "airline": {
                "name": "KLM",
                "iataCode": "KL",
                "icaoCode": "KLM"
            },
            "flight": {
                "number": "1416",
                "iataNumber": "KL1416",
                "icaoNumber": "KLM1416"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "Jet Airways (India)",
                "iataCode": "9W",
                "icaoCode": "JAI"
            },
            "flight": {
                "number": "6722",
                "iataNumber": "9W6722",
                "icaoNumber": "JAI6722"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7645",
                    "iataNumber": "AF7645",
                    "icaoNumber": "AFR7645"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "Aeromexico",
                "iataCode": "AM",
                "icaoCode": "AMX"
            },
            "flight": {
                "number": "6149",
                "iataNumber": "AM6149",
                "icaoNumber": "AMX6149"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7645",
                    "iataNumber": "AF7645",
                    "icaoNumber": "AFR7645"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "Finnair",
                "iataCode": "AY",
                "icaoCode": "FIN"
            },
            "flight": {
                "number": "6344",
                "iataNumber": "AY6344",
                "icaoNumber": "FIN6344"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7645",
                    "iataNumber": "AF7645",
                    "icaoNumber": "AFR7645"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "Flybe",
                "iataCode": "BE",
                "icaoCode": "BEE"
            },
            "flight": {
                "number": "4091",
                "iataNumber": "BE4091",
                "icaoNumber": "BEE4091"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7645",
                    "iataNumber": "AF7645",
                    "icaoNumber": "AFR7645"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "China Southern Airlines",
                "iataCode": "CZ",
                "icaoCode": "CSN"
            },
            "flight": {
                "number": "7459",
                "iataNumber": "CZ7459",
                "icaoNumber": "CSN7459"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7645",
                    "iataNumber": "AF7645",
                    "icaoNumber": "AFR7645"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "Gol",
                "iataCode": "G3",
                "icaoCode": "GLO"
            },
            "flight": {
                "number": "5022",
                "iataNumber": "G35022",
                "icaoNumber": "GLO5022"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7645",
                    "iataNumber": "AF7645",
                    "icaoNumber": "AFR7645"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "JAL",
                "iataCode": "JL",
                "icaoCode": "JAL"
            },
            "flight": {
                "number": "5344",
                "iataNumber": "JL5344",
                "icaoNumber": "JAL5344"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7645",
                    "iataNumber": "AF7645",
                    "icaoNumber": "AFR7645"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "Atlasglobal",
                "iataCode": "KK",
                "icaoCode": "KKK"
            },
            "flight": {
                "number": "7345",
                "iataNumber": "KK7345",
                "icaoNumber": "KKK7345"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7645",
                    "iataNumber": "AF7645",
                    "icaoNumber": "AFR7645"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "Aeroflot",
                "iataCode": "SU",
                "icaoCode": "AFL"
            },
            "flight": {
                "number": "3028",
                "iataNumber": "SU3028",
                "icaoNumber": "AFL3028"
            },
            "codeshared": {
                "airline": {
                    "name": "Air France",
                    "iataCode": "AF",
                    "icaoCode": "AFR"
                },
                "flight": {
                    "number": "7645",
                    "iataNumber": "AF7645",
                    "icaoNumber": "AFR7645"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "CDG",
                "icaoCode": "LFPG",
                "terminal": "2F",
                "scheduledTime": "2018-12-20T15:40:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "7645",
                "iataNumber": "AF7645",
                "icaoNumber": "AFR7645"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T14:30:00.000",
                "estimatedTime": "2018-12-20T14:30:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 1",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4353",
                "iataNumber": "U24353",
                "icaoNumber": "EZY4353"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T14:35:00.000"
            },
            "arrival": {
                "iataCode": "WAW",
                "icaoCode": "EPWA",
                "baggage": "8",
                "scheduledTime": "2018-12-20T16:55:00.000"
            },
            "airline": {
                "name": "Wizz Air",
                "iataCode": "W6",
                "icaoCode": "WZZ"
            },
            "flight": {
                "number": "1356",
                "iataNumber": "W61356",
                "icaoNumber": "WZZ1356"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T14:40:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A40",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "airline": {
                "name": "Air Canada",
                "iataCode": "AC",
                "icaoCode": "ACA"
            },
            "flight": {
                "number": "9061",
                "iataNumber": "AC9061",
                "icaoNumber": "ACA9061"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1077",
                    "iataNumber": "LH1077",
                    "icaoNumber": "DLH1077"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T14:40:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A40",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "airline": {
                "name": "LOT - Polish Airlines",
                "iataCode": "LO",
                "icaoCode": "LOT"
            },
            "flight": {
                "number": "4746",
                "iataNumber": "LO4746",
                "icaoNumber": "LOT4746"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1077",
                    "iataNumber": "LH1077",
                    "icaoNumber": "DLH1077"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T14:40:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A40",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "airline": {
                "name": "ANA",
                "iataCode": "NH",
                "icaoCode": "ANA"
            },
            "flight": {
                "number": "6130",
                "iataNumber": "NH6130",
                "icaoNumber": "ANA6130"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1077",
                    "iataNumber": "LH1077",
                    "icaoNumber": "DLH1077"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T14:40:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A40",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "airline": {
                "name": "SAS",
                "iataCode": "SK",
                "icaoCode": "SAS"
            },
            "flight": {
                "number": "3718",
                "iataNumber": "SK3718",
                "icaoNumber": "SAS3718"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1077",
                    "iataNumber": "LH1077",
                    "icaoNumber": "DLH1077"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T14:40:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A40",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "airline": {
                "name": "United Airlines",
                "iataCode": "UA",
                "icaoCode": "UAL"
            },
            "flight": {
                "number": "9026",
                "iataNumber": "UA9026",
                "icaoNumber": "UAL9026"
            },
            "codeshared": {
                "airline": {
                    "name": "Lufthansa",
                    "iataCode": "LH",
                    "icaoCode": "DLH"
                },
                "flight": {
                    "number": "1077",
                    "iataNumber": "LH1077",
                    "icaoNumber": "DLH1077"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "scheduledTime": "2018-12-20T14:40:00.000"
            },
            "arrival": {
                "iataCode": "FRA",
                "icaoCode": "EDDF",
                "terminal": "1",
                "gate": "A40",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "airline": {
                "name": "Lufthansa",
                "iataCode": "LH",
                "icaoCode": "DLH"
            },
            "flight": {
                "number": "1077",
                "iataNumber": "LH1077",
                "icaoNumber": "DLH1077"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T14:50:00.000",
                "estimatedTime": "2018-12-20T14:50:00.000"
            },
            "arrival": {
                "iataCode": "VCE",
                "icaoCode": "LIPZ",
                "scheduledTime": "2018-12-20T16:10:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "4465",
                "iataNumber": "U24465",
                "icaoNumber": "EZY4465"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T2",
                "scheduledTime": "2018-12-20T15:15:00.000"
            },
            "arrival": {
                "iataCode": "PMI",
                "icaoCode": "LEPA",
                "baggage": "01",
                "scheduledTime": "2018-12-20T16:55:00.000"
            },
            "airline": {
                "name": "Volotea",
                "iataCode": "V7",
                "icaoCode": "VOE"
            },
            "flight": {
                "number": "2622",
                "iataNumber": "V72622",
                "icaoNumber": "VOE2622"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T15:30:00.000"
            },
            "arrival": {
                "iataCode": "DUB",
                "icaoCode": "EIDW",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:50:00.000"
            },
            "airline": {
                "name": "British Airways",
                "iataCode": "BA",
                "icaoCode": "BAW"
            },
            "flight": {
                "number": "8947",
                "iataNumber": "BA8947",
                "icaoNumber": "BAW8947"
            },
            "codeshared": {
                "airline": {
                    "name": "Aer Lingus",
                    "iataCode": "EI",
                    "icaoCode": "EIN"
                },
                "flight": {
                    "number": "553",
                    "iataNumber": "EI553",
                    "icaoNumber": "EIN553"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T15:30:00.000"
            },
            "arrival": {
                "iataCode": "DUB",
                "icaoCode": "EIDW",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:50:00.000"
            },
            "airline": {
                "name": "Aer Lingus",
                "iataCode": "EI",
                "icaoCode": "EIN"
            },
            "flight": {
                "number": "553",
                "iataNumber": "EI553",
                "icaoNumber": "EIN553"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "T1",
                "scheduledTime": "2018-12-20T15:35:00.000"
            },
            "arrival": {
                "iataCode": "BHX",
                "icaoCode": "EGBB",
                "scheduledTime": "2018-12-20T16:25:00.000"
            },
            "airline": {
                "name": "Flybe",
                "iataCode": "BE",
                "icaoCode": "BEE"
            },
            "flight": {
                "number": "3204",
                "iataNumber": "BE3204",
                "icaoNumber": "BEE3204"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T15:45:00.000"
            },
            "arrival": {
                "iataCode": "DUS",
                "icaoCode": "EDDL",
                "gate": "B93",
                "scheduledTime": "2018-12-20T17:35:00.000"
            },
            "airline": {
                "name": "ANA",
                "iataCode": "NH",
                "icaoCode": "ANA"
            },
            "flight": {
                "number": "5074",
                "iataNumber": "NH5074",
                "icaoNumber": "ANA5074"
            },
            "codeshared": {
                "airline": {
                    "name": "LGW",
                    "iataCode": "HE",
                    "icaoCode": "LGW"
                },
                "flight": {
                    "number": "9415",
                    "iataNumber": "HE9415",
                    "icaoNumber": "LGW9415"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T15:45:00.000"
            },
            "arrival": {
                "iataCode": "DUS",
                "icaoCode": "EDDL",
                "gate": "B93",
                "scheduledTime": "2018-12-20T17:35:00.000"
            },
            "airline": {
                "name": "Eurowings",
                "iataCode": "EW",
                "icaoCode": "EWG"
            },
            "flight": {
                "number": "9415",
                "iataNumber": "EW9415",
                "icaoNumber": "EWG9415"
            },
            "codeshared": {
                "airline": {
                    "name": "LGW",
                    "iataCode": "HE",
                    "icaoCode": "LGW"
                },
                "flight": {
                    "number": "9415",
                    "iataNumber": "HE9415",
                    "icaoNumber": "LGW9415"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T15:45:00.000"
            },
            "arrival": {
                "iataCode": "DUS",
                "icaoCode": "EDDL",
                "gate": "B93",
                "scheduledTime": "2018-12-20T17:35:00.000"
            },
            "airline": {
                "name": "LGW",
                "iataCode": "HE",
                "icaoCode": "LGW"
            },
            "flight": {
                "number": "9415",
                "iataNumber": "HE9415",
                "icaoNumber": "LGW9415"
            }
        },
        {
            "type": "departure",
            "status": "cancelled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T15:45:00.000",
                "estimatedTime": "2018-12-20T15:45:00.000"
            },
            "arrival": {
                "iataCode": "LGW",
                "icaoCode": "EGKK",
                "terminal": "N",
                "scheduledTime": "2018-12-20T16:20:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "8417",
                "iataNumber": "U28417",
                "icaoNumber": "EZY8417"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "NUE",
                "icaoCode": "EDDN",
                "scheduledTime": "2018-12-20T17:10:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5489",
                "iataNumber": "AF5489",
                "icaoNumber": "AFR5489"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4456",
                    "iataNumber": "A54456",
                    "icaoNumber": "HOP4456"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "NUE",
                "icaoCode": "EDDN",
                "scheduledTime": "2018-12-20T17:10:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4456",
                "iataNumber": "A54456",
                "icaoNumber": "HOP4456"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "BES",
                "icaoCode": "LFRB",
                "scheduledTime": "2018-12-20T17:25:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5444",
                "iataNumber": "AF5444",
                "icaoNumber": "AFR5444"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4096",
                    "iataNumber": "A54096",
                    "icaoNumber": "HOP4096"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "BES",
                "icaoCode": "LFRB",
                "scheduledTime": "2018-12-20T17:25:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4096",
                "iataNumber": "A54096",
                "icaoNumber": "HOP4096"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "BOD",
                "icaoCode": "LFBD",
                "terminal": "B",
                "scheduledTime": "2018-12-20T16:55:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5401",
                "iataNumber": "AF5401",
                "icaoNumber": "AFR5401"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4026",
                    "iataNumber": "A54026",
                    "icaoNumber": "HOP4026"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "BOD",
                "icaoCode": "LFBD",
                "terminal": "B",
                "scheduledTime": "2018-12-20T16:55:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4026",
                "iataNumber": "A54026",
                "icaoNumber": "HOP4026"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "NCE",
                "icaoCode": "LFMN",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:45:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "7028",
                "iataNumber": "AF7028",
                "icaoNumber": "AFR7028"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4206",
                    "iataNumber": "A54206",
                    "icaoNumber": "HOP4206"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "NCE",
                "icaoCode": "LFMN",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:45:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4206",
                "iataNumber": "A54206",
                "icaoNumber": "HOP4206"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 1",
                "scheduledTime": "2018-12-20T17:05:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5313",
                "iataNumber": "AF5313",
                "icaoNumber": "AFR5313"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4006",
                    "iataNumber": "A54006",
                    "icaoNumber": "HOP4006"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "NTE",
                "icaoCode": "LFRS",
                "terminal": "Hall 1",
                "scheduledTime": "2018-12-20T17:05:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4006",
                "iataNumber": "A54006",
                "icaoNumber": "HOP4006"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "PUF",
                "icaoCode": "LFBP",
                "scheduledTime": "2018-12-20T17:25:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5431",
                "iataNumber": "AF5431",
                "icaoNumber": "AFR5431"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4076",
                    "iataNumber": "A54076",
                    "icaoNumber": "HOP4076"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T15:50:00.000"
            },
            "arrival": {
                "iataCode": "PUF",
                "icaoCode": "LFBP",
                "scheduledTime": "2018-12-20T17:25:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4076",
                "iataNumber": "A54076",
                "icaoNumber": "HOP4076"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "TLS",
                "icaoCode": "LFBO",
                "gate": "03",
                "baggage": "4",
                "scheduledTime": "2018-12-20T17:00:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5394",
                "iataNumber": "AF5394",
                "icaoNumber": "AFR5394"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4216",
                    "iataNumber": "A54216",
                    "icaoNumber": "HOP4216"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "TLS",
                "icaoCode": "LFBO",
                "gate": "03",
                "baggage": "4",
                "scheduledTime": "2018-12-20T17:00:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4216",
                "iataNumber": "A54216",
                "icaoNumber": "HOP4216"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "scheduledTime": "2018-12-20T17:25:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5357",
                "iataNumber": "AF5357",
                "icaoNumber": "AFR5357"
            },
            "codeshared": {
                "airline": {
                    "name": "Aero4M",
                    "iataCode": "AEH",
                    "icaoCode": "AEH"
                },
                "flight": {
                    "number": "4316",
                    "iataNumber": "AEH4316",
                    "icaoNumber": "AEH4316"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "scheduledTime": "2018-12-20T17:25:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4316",
                "iataNumber": "A54316",
                "icaoNumber": "HOP4316"
            },
            "codeshared": {
                "airline": {
                    "name": "Aero4M",
                    "iataCode": "AEH",
                    "icaoCode": "AEH"
                },
                "flight": {
                    "number": "4316",
                    "iataNumber": "AEH4316",
                    "icaoNumber": "AEH4316"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "BRU",
                "icaoCode": "EBBR",
                "scheduledTime": "2018-12-20T17:25:00.000"
            },
            "airline": {
                "name": "Aero4M",
                "iataCode": "AEH",
                "icaoCode": "AEH"
            },
            "flight": {
                "number": "4316",
                "iataNumber": "AEH4316",
                "icaoNumber": "AEH4316"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "RNS",
                "icaoCode": "LFRN",
                "scheduledTime": "2018-12-20T17:25:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5471",
                "iataNumber": "AF5471",
                "icaoNumber": "AFR5471"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4156",
                    "iataNumber": "A54156",
                    "icaoNumber": "HOP4156"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "RNS",
                "icaoCode": "LFRN",
                "scheduledTime": "2018-12-20T17:25:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4156",
                "iataNumber": "A54156",
                "icaoNumber": "HOP4156"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "BLQ",
                "icaoCode": "LIPE",
                "scheduledTime": "2018-12-20T17:10:00.000"
            },
            "airline": {
                "name": "Air France",
                "iataCode": "AF",
                "icaoCode": "AFR"
            },
            "flight": {
                "number": "5327",
                "iataNumber": "AF5327",
                "icaoNumber": "AFR5327"
            },
            "codeshared": {
                "airline": {
                    "name": "HOP!",
                    "iataCode": "A5",
                    "icaoCode": "HOP"
                },
                "flight": {
                    "number": "4516",
                    "iataNumber": "A54516",
                    "icaoNumber": "HOP4516"
                }
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "2",
                "scheduledTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "BLQ",
                "icaoCode": "LIPE",
                "scheduledTime": "2018-12-20T17:10:00.000"
            },
            "airline": {
                "name": "HOP!",
                "iataCode": "A5",
                "icaoCode": "HOP"
            },
            "flight": {
                "number": "4516",
                "iataNumber": "A54516",
                "icaoNumber": "HOP4516"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1B",
                "scheduledTime": "2018-12-20T16:00:00.000",
                "estimatedTime": "2018-12-20T16:00:00.000"
            },
            "arrival": {
                "iataCode": "LTN",
                "icaoCode": "EGGW",
                "scheduledTime": "2018-12-20T16:40:00.000"
            },
            "airline": {
                "name": "easyJet",
                "iataCode": "U2",
                "icaoCode": "EZY"
            },
            "flight": {
                "number": "2426",
                "iataNumber": "U22426",
                "icaoNumber": "EZY2426"
            }
        },
        {
            "type": "departure",
            "status": "scheduled",
            "departure": {
                "iataCode": "LYS",
                "icaoCode": "LFLL",
                "terminal": "1",
                "delay": 45,
                "scheduledTime": "2018-12-20T16:00:00.000",
                "estimatedTime": "2018-12-20T16:45:00.000"
            },
            "arrival": {
                "iataCode": "DJE",
                "icaoCode": "DTTJ",
                "scheduledTime": "2018-12-20T18:20:00.000",
                "estimatedTime": "2018-12-20T18:20:00.000"
            },
            "airline": {
                "name": "Tunisair",
                "iataCode": "TU",
                "icaoCode": "TAR"
            },
            "flight": {
                "number": "589",
                "iataNumber": "TU589",
                "icaoNumber": "TAR589"
            }
        }
    ];

    }
}