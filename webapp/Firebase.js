sap.ui.define(['sap/ui/model/json/JSONModel'], function (JSONModel) {
  'use strict';

  var firebaseConfig = {
    apiKey: 'AIzaSyDkFv9W4dVZFoDqnXFbTDe0J7DmHMlY3uc',
    authDomain: 'ui5-firevswater.firebaseapp.com',
    databaseURL: 'https://ui5-firevswater.firebaseio.com',
    projectId: 'ui5-firevswater',
    storageBucket: 'ui5-firevswater.appspot.com',
    messagingSenderId: '234668796481',
    appId: '1:234668796481:web:61c1a457927c9e8d84b4c0',
    measurementId: 'G-1VEHSLMEM3',
  };

  return {
    initializeFirebase: function () {
      // Initialize Firebase with the Firebase-config
      firebase.initializeApp(firebaseConfig);

      // Create a Firestore reference
      const firestore = firebase.firestore();

      // Firebase services object
      const oFirebase = {
        firestore: firestore,
        collection: firestore.collection('logometrics'),
      };

      // Create a Firebase model out of the oFirebase service object which contains all required Firebase services
      var fbModel = new JSONModel(oFirebase);

      // Return the Firebase Model
      return fbModel;
    },
  };
});
