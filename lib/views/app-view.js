var views = views || {};
(function(V, $) {
  'use strict';
  
  views.AppView = V.extend({
    el: '#cart-app',
    events: {
      'submit #form': 'addItem'
    },
    addItem: function(e) {
      e.preventDefault();
      var form = this.$el.find('#form');
      console.log(e);
    }
  });
})(Backbone.View, jQuery);