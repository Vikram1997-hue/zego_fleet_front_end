// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // apiUrl: 'https://devapi.hellomobility.nl/',
  // bucket: 'merlin-image-upload-dev',
  // socketUrl: 'wss://wsdev.hellomobility.nl',  

  // PREPROD SERVER URL
  // apiUrl: "https://ppapi.hellomobility.nl/",
  // bucket: 'merlin-image-upload-preprod',
  // socketUrl: 'wss://wspp.hellomobility.nl',  

  //TEST SERVER URL
  // apiUrl: 'https://q9qssyviwf.execute-api.eu-central-1.amazonaws.com/testing/',
  // bucket: 'merlin-image-upload-preprod',
  // socketUrl: ' wss://dhc3ecz0ea.execute-api.eu-central-1.amazonaws.com/testing',  

  //PROD URL
  apiUrl: 'https://api.hellomobility.nl/',
  bucket: 'merlin-image-upload-prod',
  socketUrl: 'wss://ws.hellomobility.nl',

  // image upload
  image: "U2FsdGVkX199t0MKI/+Ibv4Ewn8rngXJzDSglRf8dgpAYboGZxBkHUZHv0fDW/Kk",
  imageSecret: "U2FsdGVkX18AWYa0wbJVpMBNR0pmntN31ENwX/RQzd8LT+RtORPsMLl0MO9ifb8kQu7x5hme0KCGHxf+jnaySw==",
  region: "eu-central-1",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
