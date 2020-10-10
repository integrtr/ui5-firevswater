sap.ui.define(['integrtr/ui5firevswater/controller/Base.controller'], function (BaseController) {
  'use strict';

  return BaseController.extend('integrtr.ui5firevswater.controller.Home', {
    onInit: function () {},

    /**
     * Press event handler for INTEGRTR logo
     */
    integrtrLogoPress: function () {
      window.open('https://www.integrtr.com', '_blank');
    },

    /**
     * Press event handler for GitHub logo
     */
    githubLogoPress: function () {
      window.open('https://github.com/integrtr/ui5-boilerplate', '_blank');
    },
  });
});
