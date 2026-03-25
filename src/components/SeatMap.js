import React, { useState } from 'react';
import { 
  MapPin, 
  Plane, 
  Wifi, 
  Utensils, 
  Coffee, 
  Zap, 
  Users,
  ArrowRight,
  Check,
  X,
  Info,
  DollarSign,
  Eye
} from 'lucide-react';

const SeatMap = ({ selectedSeats, onSeatsUpdate }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showInstructions, setShowInstructions] = useState(true);

  // Your existing seatmapData remains here...
  const seatmapData = {
  "meta": {
        "count": 2
    },
    "data": [
        {
            "id": "1",
            "type": "seatmap",
            "departure": {
                "iataCode": "DFW",
                "terminal": "E",
                "at": "2025-10-03T11:27:00"
            },
            "arrival": {
                "iataCode": "EWR",
                "at": "2025-10-03T15:56:00"
            },
            "carrierCode": "UA",
            "number": "1407",
            "operating": {
                "carrierCode": "UA"
            },
            "aircraft": {
                "code": "7M8"
            },
            "class": "T",
            "flightOfferId": "2",
            "segmentId": "46",
            "decks": [
                {
                    "deckType": "MAIN",
                    "deckConfiguration": {
                        "width": 7,
                        "length": 25,
                        "startSeatRow": 7,
                        "endSeatRow": 38,
                        "startWingsX": 4,
                        "endWingsX": 12,
                        "startWingsRow": 12,
                        "endWingsRow": 25,
                        "exitRowsX": [
                            7,
                            8
                        ]
                    },
                    "seats": [
                        {
                            "cabin": "ECONOMY",
                            "number": "7A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7D",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7E",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20A",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20B",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20C",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20D",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20E",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20F",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21A",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21B",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21C",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21D",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21E",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21F",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23B",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23C",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25B",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25C",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29F",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30F",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31F",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32F",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34F",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35F",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "36A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "36B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "36C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "36D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "36E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "36F",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "37A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "37B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "37C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "37D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "37E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "37F",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "38A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "38B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "38C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "38D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "38E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "38F",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 6
                            }
                        }
                    ]
                }
            ],
            "aircraftCabinAmenities": {
                "power": {
                    "isChargeable": false,
                    "powerType": "PLUG_OR_USB_PORT",
                    "usbType": "USB_A"
                },
                "seat": {
                    "legSpace": 30,
                    "spaceUnit": "INCHES",
                    "tilt": "NORMAL",
                    "medias": [
                        {
                            "title": "United Economy",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=RP39D9P2LT%2441V7DWF34X5T6C0%2B23065%2B0&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2Ff0f494b6%2Dda99%2D44d8%2D9c4c%2Dc761ec313c0f%2Flarge%2Finflight%2Dserv%2Dbasic%2Deconomy%2D368x207%2D2x%2Epng",
                            "description": {
                                "text": "Leather seats with adjustable headrests provide a comfortable flight. United Economy seats are located towards the rear of the cabin.",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        },
                        {
                            "title": "United Economy",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=RP39D9P2LT%2441V7DWF34X5T6C0%2B23065%2B1&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2Ff0f494b6%2Dda99%2D44d8%2D9c4c%2Dc761ec313c0f%2Fsquare%5Fthumb%2Finflight%2Dserv%2Dbasic%2Deconomy%2D368x207%2D2x%2Epng",
                            "description": {
                                "text": "Leather seats with adjustable headrests provide a comfortable flight. United Economy seats are located towards the rear of the cabin.",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        },
                        {
                            "title": "United Economy",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=RP39D9P2LT%2441V7DWF34X5T6C0%2B23065%2B2&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2Ff0f494b6%2Dda99%2D44d8%2D9c4c%2Dc761ec313c0f%2Flarge%5Fsquare%5Fthumb%2Finflight%2Dserv%2Dbasic%2Deconomy%2D368x207%2D2x%2Epng",
                            "description": {
                                "text": "Leather seats with adjustable headrests provide a comfortable flight. United Economy seats are located towards the rear of the cabin.",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        }
                    ]
                },
                "wifi": {
                    "isChargeable": true,
                    "wifiCoverage": "FULL"
                },
                "food": {
                    "isChargeable": true,
                    "foodType": "MEAL"
                },
                "beverage": {
                    "isChargeable": true,
                    "beverageType": "ALCOHOLIC_AND_NON_ALCOHOLIC"
                }
            },
            "availableSeatsCounters": [
                {
                    "travelerId": "1",
                    "value": 4
                }
            ]
        },
        {
            "id": "2",
            "type": "seatmap",
            "departure": {
                "iataCode": "EWR",
                "terminal": "C",
                "at": "2025-10-03T21:20:00"
            },
            "arrival": {
                "iataCode": "DEL",
                "at": "2025-10-04T21:30:00"
            },
            "carrierCode": "UA",
            "number": "82",
            "operating": {
                "carrierCode": "UA"
            },
            "aircraft": {
                "code": "789"
            },
            "class": "T",
            "flightOfferId": "2",
            "segmentId": "47",
            "decks": [
                {
                    "deckType": "MAIN",
                    "deckConfiguration": {
                        "width": 11,
                        "length": 22,
                        "startSeatRow": 30,
                        "endSeatRow": 57,
                        "startWingsX": 0,
                        "endWingsX": 5,
                        "startWingsRow": 30,
                        "endWingsRow": 35,
                        "exitRowsX": [
                            6
                        ]
                    },
                    "seats": [
                        {
                            "cabin": "ECONOMY",
                            "number": "30A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "32L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "33A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "33B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "33C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "33D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "33E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "33F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "33J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "33K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "33L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "34L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "35L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "42A",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "42B",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "42C",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "42J",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "42K",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "42L",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "43A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "43B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "43C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "43J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "43K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "43L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "44A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "44B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "44C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "44D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "44E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "44F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "44J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "44K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "44L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "45A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "45B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "45C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "45D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "45E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "45F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "45J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "45K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "45L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "46A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "46B",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "46C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "46D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "46E",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "46F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "46J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "46K",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "46L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "47A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "47B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "47C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "47D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "47E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "47F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "47J",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "47K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "47L",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "48A",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "48B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "48C",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "48D",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "48E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "48F",
                            "characteristicsCodes": [
                                "CH"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "48J",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "48K",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "48L",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "49A",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "49B",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "49C",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "49D",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "49E",
                            "characteristicsCodes": [
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "49F",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "49J",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "49K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "49L",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "50A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "50B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "50C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "50D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "50E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "50F",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "50J",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "50K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "50L",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "51A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "51B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "51C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "51D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "51E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "51F",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "51J",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "51K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "51L",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "52A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "52B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "52C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "52D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "52E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "52F",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "52J",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "52K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "52L",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "53A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "53B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "53C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "53D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "53E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "53F",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "53J",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "53K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "53L",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "54A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "54B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "54C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "54D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "54E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "54F",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "54J",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "54K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "54L",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "55A",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "55B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "55C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "55D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "55E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "55F",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "55J",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "55K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "55L",
                            "characteristicsCodes": [
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "OCCUPIED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 10
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "56B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "56C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "56D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "56E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "56F",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "56J",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "56K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 9
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "57B",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "57C",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "57D",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "57E",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "57F",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "57J",
                            "characteristicsCodes": [
                                "A"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 8
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "57K",
                            "characteristicsCodes": [
                                "9"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 9
                            }
                        }
                    ]
                }
            ],
            "aircraftCabinAmenities": {
                "power": {
                    "isChargeable": false,
                    "powerType": "PLUG_OR_USB_PORT",
                    "usbType": "USB_A"
                },
                "seat": {
                    "legSpace": 31,
                    "spaceUnit": "INCHES",
                    "tilt": "NORMAL",
                    "medias": [
                        {
                            "title": "United Economy",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=RP39D9P2LT%2441V7DWF34X5T6C0%2B21955%2B11&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F75de7ba3%2Db302%2D49f4%2Da5d6%2D028204c2723f%2Flarge%2Fhappy%2Dpassengers%2Don%2Dboard%2Din%2Deconomy%2Dclass%2Ejpg",
                            "description": {
                                "text": "See more of the world below with the industry’s largest windows, while you kickback in your leather seat with an adjustable headrest.",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        },
                        {
                            "title": "United Economy",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=RP39D9P2LT%2441V7DWF34X5T6C0%2B21955%2B12&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F75de7ba3%2Db302%2D49f4%2Da5d6%2D028204c2723f%2Fsquare%5Fthumb%2Fhappy%2Dpassengers%2Don%2Dboard%2Din%2Deconomy%2Dclass%2Ejpg",
                            "description": {
                                "text": "See more of the world below with the industry’s largest windows, while you kickback in your leather seat with an adjustable headrest.",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        },
                        {
                            "title": "United Economy",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=RP39D9P2LT%2441V7DWF34X5T6C0%2B21955%2B13&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F75de7ba3%2Db302%2D49f4%2Da5d6%2D028204c2723f%2Flarge%5Fsquare%5Fthumb%2Fhappy%2Dpassengers%2Don%2Dboard%2Din%2Deconomy%2Dclass%2Ejpg",
                            "description": {
                                "text": "See more of the world below with the industry’s largest windows, while you kickback in your leather seat with an adjustable headrest.",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        }
                    ]
                },
                "wifi": {
                    "isChargeable": true,
                    "wifiCoverage": "FULL"
                },
                "food": {
                    "isChargeable": false,
                    "foodType": "MEAL"
                },
                "beverage": {
                    "isChargeable": false,
                    "beverageType": "ALCOHOLIC_AND_NON_ALCOHOLIC"
                }
            },
            "availableSeatsCounters": [
                {
                    "travelerId": "1",
                    "value": 62
                }
            ]
        }
    ],
    "dictionaries": {
        "locations": {
            "EWR": {
                "cityCode": "NYC",
                "countryCode": "US"
            },
            "DFW": {
                "cityCode": "DFW",
                "countryCode": "US"
            },
            "DEL": {
                "cityCode": "DEL",
                "countryCode": "IN"
            }
        },
        "seatCharacteristics": {
            "1": "Restricted seat - General",
            "A": "Aisle seat",
            "CH": "Chargeable seats",
            "W": "Window seat",
            "9": "Center seat (not window, not aisle)"
        }
    }  };

  if (!seatmapData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading flight information...</p>
        </div>
      </div>
    );
  }

  const { data, dictionaries } = seatmapData;
  const seatCharacteristics = dictionaries?.seatCharacteristics || {};

  // Function to get seat status and characteristics
  const getSeatInfo = (seat) => {
    const status = seat.travelerPricing?.[0]?.seatAvailabilityStatus || 'UNKNOWN';
    const characteristics = seat.characteristicsCodes?.map(code => 
      seatCharacteristics[code] || code
    ) || [];
    
    return { status, characteristics };
  };

  // Function to get seat status color and display
  const getSeatDisplay = (status, characteristics) => {
    const isChargeable = characteristics.includes('Chargeable seats');
    const isWindow = characteristics.includes('Window seat');
    const isAisle = characteristics.includes('Aisle seat');
    const isCenter = characteristics.includes('Center seat');

    switch (status) {
      case 'AVAILABLE':
        return {
          bgColor: 'bg-green-500 hover:bg-green-600',
          borderColor: 'border-green-600',
          cursor: 'cursor-pointer',
          icon: isWindow ? 'W' : isAisle ? 'A' : isCenter ? 'C' : 'S',
          tooltip: `Available${isWindow ? ' - Window' : isAisle ? ' - Aisle' : isCenter ? ' - Center' : ''}${isChargeable ? ' - Extra Charge' : ''}`
        };
      case 'OCCUPIED':
        return {
          bgColor: 'bg-red-400',
          borderColor: 'border-red-500',
          cursor: 'cursor-not-allowed',
          icon: 'X',
          tooltip: 'Occupied - Already taken'
        };
      case 'BLOCKED':
        return {
          bgColor: 'bg-gray-400',
          borderColor: 'border-gray-500',
          cursor: 'cursor-not-allowed',
          icon: 'B',
          tooltip: 'Blocked - Not available'
        };
      default:
        return {
          bgColor: 'bg-gray-300',
          borderColor: 'border-gray-400',
          cursor: 'cursor-not-allowed',
          icon: '?',
          tooltip: 'Unknown status'
        };
    }
  };

  // Handle seat selection - now uses the external handler
  const handleSeatSelect = (seat, flightId) => {
    const { status } = getSeatInfo(seat);
    
    if (status !== 'AVAILABLE') return;

    const updatedSeats = selectedSeats.filter(s => 
      s.seatNumber === seat.number && s.flightId === flightId
    ).length > 0
      ? selectedSeats.filter(s => !(s.seatNumber === seat.number && s.flightId === flightId))
      : [...selectedSeats, { 
          seatNumber: seat.number, 
          flightId,
          characteristics: seat.characteristicsCodes?.map(code => 
            seatCharacteristics[code] || code
          ) || []
        }];

    onSeatsUpdate(updatedSeats);
  };

  // Format time and date functions
  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getFlightDuration = (departure, arrival) => {
    const dep = new Date(departure);
    const arr = new Date(arrival);
    const duration = arr - dep;
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  // Render aircraft cabin - Clean and responsive
  const renderAircraftCabin = (deck, flightId) => {
    const rows = {};
    
    // Group seats by row number
    deck.seats.forEach(seat => {
      const rowNumber = seat.number.replace(/[A-Z]/g, '');
      if (!rows[rowNumber]) {
        rows[rowNumber] = [];
      }
      rows[rowNumber].push(seat);
    });

    // Sort rows numerically
    const sortedRows = Object.keys(rows).sort((a, b) => parseInt(a) - parseInt(b));

    return (
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200">
        {/* Cabin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-3 text-sm md:text-base">MAIN CABIN</span>
            <span className="text-sm md:text-base">Economy Class</span>
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{deck.seats.length} seats • {sortedRows.length} rows</span>
          </div>
        </div>

        {/* Clean Cabin Layout */}
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-300">
          {/* Wings Area Indicator */}
          {/* {deck.deckConfiguration.startWingsRow && (
            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg py-2 px-4 mb-6 text-center">
              <span className="text-yellow-700 text-sm font-semibold"> WINGS AREA</span>
            </div>
          )} */}

          {/* Exit Rows */}
          {deck.deckConfiguration.exitRowsX && deck.deckConfiguration.exitRowsX.length > 0 && (
            <div className="flex justify-center space-x-4 mb-6 flex-wrap gap-2">
              {deck.deckConfiguration.exitRowsX.map((exitRow, index) => (
                <div key={index} className="bg-red-500 border-2 border-red-600 px-3 py-1 rounded-lg">
                  <span className="text-white text-xs md:text-sm font-bold"> EXIT</span>
                </div>
              ))}
            </div>
          )}

          {/* Responsive Seat Layout */}
          <div className="space-y-3 md:space-y-4 overflow-x-auto">
            {sortedRows.map((rowNumber) => (
              <div key={rowNumber} className="flex items-center justify-center space-x-2 md:space-x-4 lg:space-x-6 min-w-max">
                {/* Row Number */}
                <div className="w-10 md:w-12 text-center">
                  <div className="bg-blue-600 text-white rounded-lg py-1 md:py-2 px-1 text-xs md:text-sm font-bold shadow-lg">
                    {rowNumber}
                  </div>
                </div>
                
                {/* Left Side Seats */}
                <div className="flex space-x-1 md:space-x-2 lg:space-x-3 bg-white rounded-lg p-2 shadow-md border border-gray-200">
                  {rows[rowNumber]
                    .filter(seat => ['A', 'B', 'C'].includes(seat.number.slice(-1)))
                    .sort((a, b) => a.number.slice(-1).localeCompare(b.number.slice(-1)))
                    .map((seat) => {
                      const { status, characteristics } = getSeatInfo(seat);
                      const display = getSeatDisplay(status, characteristics);
                      const isSelected = selectedSeats.some(s => 
                        s.seatNumber === seat.number && s.flightId === flightId
                      );
                      const isChargeable = characteristics.includes('Chargeable seats');

                      return (
                        <button
                          key={seat.number}
                          onClick={() => handleSeatSelect(seat, flightId)}
                          className={`
                            w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg border-2 flex items-center justify-center text-white font-bold text-xs md:text-sm
                            transition-all duration-200 transform hover:scale-105
                            ${display.bgColor} ${display.borderColor} ${display.cursor}
                            ${isSelected ? 'ring-2 md:ring-4 ring-blue-400 ring-offset-1 md:ring-offset-2' : ''}
                            ${isChargeable ? 'shadow-lg' : 'shadow-md'}
                            relative group
                          `}
                          title={`Seat ${seat.number}\n${display.tooltip}`}
                        >
                          {display.icon}
                          {isChargeable && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full border border-white shadow flex items-center justify-center">
                                <span className="text-white text-[8px] md:text-[10px] font-bold">₹</span>
                            </div>
                            )}
                          
                          {/* Seat number tooltip */}
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            {seat.number}
                          </div>
                        </button>
                      );
                    })}
                </div>

                {/* Aisle */}
                <div className="w-6 md:w-8 lg:w-12 bg-gray-200 rounded h-8 md:h-10 lg:h-12 flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-semibold hidden sm:block">AISLE</span>
                  <span className="text-gray-600 text-xs font-semibold sm:hidden">|</span>
                </div>

                {/* Right Side Seats */}
                <div className="flex space-x-1 md:space-x-2 lg:space-x-3 bg-white rounded-lg p-2 shadow-md border border-gray-200">
                  {rows[rowNumber]
                    .filter(seat => !['A', 'B', 'C'].includes(seat.number.slice(-1)))
                    .sort((a, b) => a.number.slice(-1).localeCompare(b.number.slice(-1)))
                    .map((seat) => {
                      const { status, characteristics } = getSeatInfo(seat);
                      const display = getSeatDisplay(status, characteristics);
                      const isSelected = selectedSeats.some(s => 
                        s.seatNumber === seat.number && s.flightId === flightId
                      );
                      const isChargeable = characteristics.includes('Chargeable seats');

                      return (
                        <button
                          key={seat.number}
                          onClick={() => handleSeatSelect(seat, flightId)}
                          className={`
                            w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg border-2 flex items-center justify-center text-white font-bold text-xs md:text-sm
                            transition-all duration-200 transform hover:scale-105
                            ${display.bgColor} ${display.borderColor} ${display.cursor}
                            ${isSelected ? 'ring-2 md:ring-4 ring-blue-400 ring-offset-1 md:ring-offset-2' : ''}
                            ${isChargeable ? 'shadow-lg' : 'shadow-md'}
                            relative group
                          `}
                          title={`Seat ${seat.number}\n${display.tooltip}`}
                        >
                          {display.icon}
                         {isChargeable && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full border border-white shadow flex items-center justify-center">
                        <span className="text-white text-[8px] md:text-[10px] font-bold">₹</span>
                    </div>
                    )}
                          
                          {/* Seat number tooltip */}
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            {seat.number}
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>

          {/* Aircraft Direction - Responsive */}
          <div className="flex justify-between items-center mt-6 px-2 md:px-8">
            <div className="flex items-center space-x-1 md:space-x-2 text-blue-700">
              <Plane className="w-4 h-4 md:w-5 md:h-5 transform -rotate-45" />
              <span className="font-bold text-sm md:text-base">FRONT</span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2 text-blue-700">
              <span className="font-bold text-sm md:text-base">REAR</span>
              <Plane className="w-4 h-4 md:w-5 md:h-5 transform rotate-135" />
            </div>
          </div>
        </div>

        {/* Responsive Seat Legend */}
        <div className="mt-6 bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center text-sm md:text-base">
            <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-600" />
            Seat Legend
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-xs md:text-sm">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg border-2 border-green-600 flex items-center justify-center text-white font-bold shadow-md text-xs md:text-sm">W</div>
              <div>
                <div className="font-semibold text-gray-800">Available - Window</div>
                <div className="text-gray-600 text-xs">Click to select</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg border-2 border-green-600 flex items-center justify-center text-white font-bold shadow-md text-xs md:text-sm">A</div>
              <div>
                <div className="font-semibold text-gray-800">Available - Aisle</div>
                <div className="text-gray-600 text-xs">Click to select</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg border-2 border-green-600 flex items-center justify-center text-white font-bold shadow-md text-xs md:text-sm relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full border border-white"></div>
                C
              </div>
              <div>
                <div className="font-semibold text-gray-800">Available - Center</div>
                <div className="text-gray-600 text-xs">Extra charge</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-red-400 rounded-lg border-2 border-red-500 flex items-center justify-center text-white font-bold shadow-md text-xs md:text-sm">X</div>
              <div>
                <div className="font-semibold text-gray-800">Occupied</div>
                <div className="text-gray-600 text-xs">Already taken</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-1150 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plane className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Flight Seat Selection</h1>
                <p className="text-gray-600 text-sm md:text-base">Choose your perfect seat</p>
              </div>
            </div>
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-blue-200 transition-colors self-start sm:self-auto"
            >
              <Info className="w-4 h-4" />
              <span className="text-sm md:text-base">{showInstructions ? 'Hide Help' : 'Show Help'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Instructions */}
      {showInstructions && (
        <div className="bg-blue-50 border-b border-blue-200">
          <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
            <div className="flex items-start space-x-3">
              <Info className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">How to Select Your Seat</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs md:text-sm text-blue-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">W</div>
                    <span>Green seats are available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-red-400 rounded-lg flex items-center justify-center text-white font-bold text-xs">X</div>
                    <span>Red seats are occupied</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xs relative">
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      C
                    </div>
                    <span>Yellow dot = extra charge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-8">
        {/* Flight Selection */}
        {!selectedFlight && (
          <div className="mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Select Your Flight</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {data.map((flight) => (
                <div
                  key={flight.id}
                  className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedFlight(flight.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Plane className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-base md:text-lg">
                          {flight.carrierCode} {flight.number}
                        </h3>
                        <p className="text-gray-600 text-sm">{flight.aircraft?.code} Aircraft</p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl md:text-2xl font-bold text-blue-600">
                        {flight.class}
                      </div>
                      <div className="text-gray-500 text-sm">Class</div>
                    </div>
                  </div>

                  {/* Route */}
                  <div className="flex items-center justify-between mb-4 p-3 md:p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="font-bold text-gray-800 text-base md:text-lg">{flight.departure.iataCode}</div>
                      <div className="text-gray-600 text-sm">{formatTime(flight.departure.at)}</div>
                    </div>
                    <div className="flex-1 px-2 md:px-4 text-center">
                      <div className="text-gray-500 text-xs md:text-sm">{getFlightDuration(flight.departure.at, flight.arrival.at)}</div>
                      <div className="flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="flex-1 h-0.5 bg-blue-200"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-800 text-base md:text-lg">{flight.arrival.iataCode}</div>
                      <div className="text-gray-600 text-sm">{formatTime(flight.arrival.at)}</div>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 text-center">
                    <div>
                      <div className="font-bold text-green-600 text-base md:text-lg">
                        {flight.availableSeatsCounters?.[0]?.value || 0}
                      </div>
                      <div className="text-gray-500 text-xs">Available</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-base md:text-lg">
                        {flight.decks?.[0]?.seats?.length || 0}
                      </div>
                      <div className="text-gray-500 text-xs">Total Seats</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600 text-base md:text-lg">
                        MAIN
                      </div>
                      <div className="text-gray-500 text-xs">Cabin</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Flight Details */}
        {selectedFlight && data.filter(f => f.id === selectedFlight).map((flight) => (
          <div key={flight.id} className="space-y-6 md:space-y-8">
            {/* Flight Header */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-4">
                <button
                  onClick={() => setSelectedFlight(null)}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold self-start"
                >
                  <ArrowRight className="w-4 h-4 transform rotate-180" />
                  <span className="text-sm md:text-base">Back to Flights</span>
                </button>
                <div className="text-left sm:text-right">
                  <div className="text-xl md:text-2xl font-bold text-gray-800">
                    {flight.carrierCode} {flight.number}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">{flight.aircraft?.code} • {flight.class}</div>
                </div>
              </div>

              {/* Flight Route Card */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-4 md:p-6 text-white mb-4 md:mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold">{flight.departure.iataCode}</div>
                    <div className="text-blue-100 text-sm">{flight.departure.terminal ? `Terminal ${flight.departure.terminal}` : ''}</div>
                    <div className="text-base md:text-lg font-semibold mt-1">{formatTime(flight.departure.at)}</div>
                    <div className="text-xs md:text-sm">{formatDate(flight.departure.at)}</div>
                  </div>
                  
                  <div className="flex-1 px-2 md:px-6 text-center">
                    <div className="text-base md:text-lg font-semibold">{getFlightDuration(flight.departure.at, flight.arrival.at)}</div>
                    <div className="flex items-center justify-center mt-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                      <div className="flex-1 h-0.5 md:h-1 bg-white bg-opacity-50"></div>
                      <Plane className="w-4 h-4 md:w-5 md:h-5 text-white mx-1 md:mx-2" />
                      <div className="flex-1 h-0.5 md:h-1 bg-white bg-opacity-50"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold">{flight.arrival.iataCode}</div>
                    <div className="text-blue-100 text-sm">{flight.arrival.terminal ? `Terminal ${flight.arrival.terminal}` : ''}</div>
                    <div className="text-base md:text-lg font-semibold mt-1">{formatTime(flight.arrival.at)}</div>
                    <div className="text-xs md:text-sm">{formatDate(flight.arrival.at)}</div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <div className="bg-green-50 rounded-lg p-3 md:p-4 text-center border border-green-200">
                  <div className="text-xl md:text-2xl font-bold text-green-600">{flight.availableSeatsCounters?.[0]?.value || 0}</div>
                  <div className="text-green-700 font-semibold text-sm md:text-base">Available Seats</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 md:p-4 text-center border border-blue-200">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">{flight.decks?.[0]?.seats?.length || 0}</div>
                  <div className="text-blue-700 font-semibold text-sm md:text-base">Total Seats</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 md:p-4 text-center border border-purple-200">
                  <div className="text-xl md:text-2xl font-bold text-purple-600">MAIN</div>
                  <div className="text-purple-700 font-semibold text-sm md:text-base">Cabin Type</div>
                </div>
              </div>
            </div>

            {/* Seat Map */}
            {flight.decks.map((deck, index) => (
              <div key={index}>
                {renderAircraftCabin(deck, flight.id)}
              </div>
            ))}
          </div>
        ))}

        {/* Selected Seats Summary - Responsive */}
        {/* {selectedSeats.length > 0 && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-200 p-4 md:p-6 w-[90vw] max-w-96 md:max-w-md z-50">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h3 className="font-bold text-gray-800 text-base md:text-lg">Selected Seats</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs md:text-sm font-bold">
                  {selectedSeats.length}
                </span>
                <button
                  // onClick={() => setSelectedSeats([])}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3 mb-3 md:mb-4 max-h-32 md:max-h-40 overflow-y-auto">
              {selectedSeats.map((seat, index) => (
                <div key={index} className="flex items-center justify-between bg-blue-50 rounded-lg p-2 md:p-3 border border-blue-200">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-md">
                      {seat.seatNumber.slice(-1)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-lg">{seat.seatNumber}</div>
                      <div className="text-gray-600 text-xs">
                        {seat.characteristics.join(' • ')}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSeats(prev => prev.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-700 p-1 rounded"
                  >
                    <X className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 md:py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg text-sm md:text-base">
              <Check className="w-4 h-4 md:w-5 md:h-5" />
              <span>Confirm {selectedSeats.length} Seat{selectedSeats.length > 1 ? 's' : ''}</span>
            </button>
          </div>
        )} */}
      </main>
    </div>
  );
};

export default SeatMap;