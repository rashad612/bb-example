var app = app || {};
(function(C) {
  'use strict';
  var Items = C.extend({
    model: app.Item,
    localStorage: new Backbone.LocalStorage('cart-items'),
    active: function() {
      return this.where({ active: true });
    },
    inactive: function() {
      return this.where({ active: false });
    }
  });
  app.items = new Items();
})(Backbone.Collection)