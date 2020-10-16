sap.ui.define(['./Base.controller', 'sap/m/MessageToast'], function (BaseController, MessageToast) {
  'use strict';

  return BaseController.extend('integrtr.ui5firevswater.controller.Home', {
    onInit: function () {
      if (localStorage.getItem('firevswaterpoll') === 'fire') {
        this.getRouter().getTargets().display('fire');
      } else if (localStorage.getItem('firevswaterpoll') === 'water') {
        this.getRouter().getTargets().display('water');
      }

      this.loadVotings()
        .then((data) => {
          let fire = 0,
            water = 0;

          data.forEach(function (doc) {
            if (doc.get('is_fire')) {
              fire++;
            }

            if (doc.get('is_water')) {
              water++;
            }
          });

          this.getModel(this.UIModel).setProperty('/', {
            fire: fire,
            water: water,
            total: fire + water,
          });
        })
        .catch(() => {});
    },
    /**
     * load votings data
     */
    loadVotings: function () {
      return new Promise((resolve, reject) => {
        const collection = this.getModel(this.FIREBASE).getProperty('/collection');
        collection
          .get()
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      });
    },
    /**
     * formater for vote percentage calculation
     * @param {Number} value
     */
    getPercentageValue: function (value) {
      const total =
        this.getModel(this.UIModel).getProperty('/fire') +
        this.getModel(this.UIModel).getProperty('/water');
      const parcentage = (value / total) * 100 || 0;

      return parcentage.toFixed(0);
    },

    /**
     * handle twitter share
     */
    onTwitterShare: function () {
      const twitterShareUrl =
        'https://twitter.com/intent/tweet?text=Which%20side%20are%20you%20on%3F%0A%23Fire%20or%20%23Water%20%21%0A%0A&url=https%3A%2F%2Ffirevswater.integrtr.com%20%0A%0A%40OpenUI5%20%40INTEGRTR';
      window.open(twitterShareUrl, 'twitterShare', 'width=600,height=400');
    },

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
      window.open('https://github.com/integrtr/ui5-firevswater', '_blank');
    },
  });
});
