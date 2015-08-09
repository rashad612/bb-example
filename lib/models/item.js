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
    },
    toggle: function() {
      this.save({
        active: !this.get('active'),
        time: new Date().getTime()
      });
    },
    changeQty: function(qty) {
      this.save({
        qty: qty
      });
    }
  });
})(Backbone.Model);