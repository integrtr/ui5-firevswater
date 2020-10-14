sap.ui.define(['sap/ui/core/UIComponent', './Firebase', 'sap/ui/model/json/JSONModel'], function (
  UIComponent,
  Firebase,
  JSONModel
) {
  'use strict';

  return UIComponent.extend('integrtr.ui5firevswater.Component', {
    metadata: {
      manifest: 'json',
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function () {
      // Initialize UI component
      UIComponent.prototype.init.apply(this, arguments);

      // create the views based on the url/hash
      this.getRouter().initialize();

      // set firebase model
      this.setModel(Firebase.initializeFirebase(), 'firebase');

      // set UI model
      this.setModel(
        new JSONModel({
          fire: 0,
          water: 0,
        }),
        'UIModel'
      );
    },
  });
});
