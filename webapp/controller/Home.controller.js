sap.ui.define(
  ['integrtr/ui5firevswater/controller/Base.controller', 'sap/m/MessageToast'],
  function (BaseController, MessageToast) {
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

      /**
       * Event handler for water logo press
       */
      waterLogoPress: function () {
        // TODO: Implement business logic
        MessageToast.show('Hello Waterbender!');
      },

      /**
       * Event handler for fire logo press
       */
      fireLogoPress: function () {
        // TODO: Implement business logic
        MessageToast.show('Hello Firebender!');
      },
    });
  }
);
