import * as moment from 'moment';

// Define application level configuration
export const AppConfig = {
    dayTimeStart: "6:00",
    dayTimeEnd: "17:00",
    momentRange:{
        Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'Last 1 Month': [ moment()
          .subtract(1, 'month')
          .startOf('month'),
        moment()
          .subtract(1, 'month')
          .endOf('month')],
        'Last 3 Months': [
          moment()
            .subtract(3, 'month')
            .startOf('month'),
          moment()
            .subtract(1, 'month')
            .endOf('month')
        ],
        'Last 12 Months': [
          moment()
            .subtract(12, 'month')
            .startOf('month'),
          moment()
            .subtract(1, 'month')
            .endOf('month')
        ]},
   
    
    netherlandLat: 52.1326,
    netherlandLong: 5.2913,
    mapStyle: [
            {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            },
            {
            "featureType": "poi",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            },
            {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            },
            {
            "featureType": "transit",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            }
        ],
    gaugeMin: 0,
    gaugeMax: 10,
    gaugeThreshold: {
      '0': { color: 'red' },
      '2.5': { color: 'orange' },
      '5': { color: '#FFEA6C' },
      '7.5': { color: '#00CBA0' }
    },
    roleBasedAccess: [
      {tab: "Analytics", value: '1'},
      {tab: "Dashboard", value: '2'},
      {tab: "Vehicle", value: '3'},
      {tab: "Trips", value: '4'},
      {tab: "Drivers", value: '5'},
      {tab: "Exceptions", value: '6'},
      {tab: "Map View", value: '7'},
      {tab: "Mileage", value: '8'},
      {tab: "Score Settings", value: '9'},
      {tab: "Score Comparision", value: '10'},
      {tab: "Groups", value: '11'},
      {tab: "Export", value: '12'},
      {tab: "Driver Queries", value: '13'},
      {tab: "Set Exception Color", value: '14'}
    ],
    changelang(lang){
      if(lang== 'en'){
        return {
          customLabel:'Custom',
          apply:'Set Date',
          cancel:'Cancel',
          range:{
            Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'Last 1 Month': [ moment()
              .subtract(1, 'month')
              .startOf('month'),
            moment()
              .subtract(1, 'month')
              .endOf('month')],
            'Last 3 Months': [
              moment()
                .subtract(3, 'month')
                .startOf('month'),
              moment()
                .subtract(1, 'month')
                .endOf('month')
            ],
            'Last 12 Months': [
              moment()
                .subtract(12, 'month')
                .startOf('month'),
              moment()
                .subtract(1, 'month')
                .endOf('month')
            ]},
          dayWeek: [
            'Su',
            'Mo',
            'Tu',
            'We',
            'Th',
            'Fr',
            'Sa',
          ],
          month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      }
      else{
        return {
          customLabel:'Zelf een periode selecteren',
          apply:'Selecteer periode',
          cancel:'Annuleer',
          range:{
            Gisteren: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Afgelopen 7 dagen': [moment().subtract(6, 'days'), moment()],
            'Afgelopen 30 dagen ': [moment().subtract(29, 'days'), moment()],
            'Afgelopen maand': [ moment()
              .subtract(1, 'month')
              .startOf('month'),
            moment()
              .subtract(1, 'month')
              .endOf('month')],
            'Afgelopen 3 maanden': [
              moment()
                .subtract(3, 'month')
                .startOf('month'),
              moment()
                .subtract(1, 'month')
                .endOf('month')
            ],
            'Afgelopen 12 maanden': [
              moment()
                .subtract(12, 'month')
                .startOf('month'),
              moment()
                .subtract(1, 'month')
                .endOf('month')
            ]
          },
          dayWeek: [
            'Zo',
            'Ma',
            'Di',
            'Wo',
            'Do',
            'Vr',
            'Za',
          ],
          month: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
        }
      }
    },
    
    
}