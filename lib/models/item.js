var app = app || {};
(function(M) {
  'use strict';
  app.Item = M.extend({
    defaults: {
      title: '',
      price: 0,
      qty: 1,
      active: true,
      time: new Date().getTime()
    }
  });
})(Backbone.Model);