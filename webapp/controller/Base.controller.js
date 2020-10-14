sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('integrtr.ui5firevswater.controller.BaseController', {
    FIREBASE: 'firebase',
    UIModel: 'UIModel',

    onInit: function () {},

    getRouter: function () {
      return this.getOwnerComponent().getRouter();
    },

    getModel: function (name) {
      return this.getOwnerComponent().getModel(name);
    },
  });
});
