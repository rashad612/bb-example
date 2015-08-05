var app = app || {};
(function(V, engine, $) {
  'use strict';
  
  app.AppView = V.extend({
    el: '#cart-app',
    templates: {
      summary: $('#tmpl-summary').html()
    },
    events: {
      'click #add-item': 'clearForm',
      'submit #form': 'addItem'
    },
    initialize: function() {
      this.$title = this.$el.find('#form').find('#item-title');
      this.$price = this.$el.find('#form').find('#item-price');

      this.listenTo(app.items, 'reset', this.addAll);
      // Fetch
      app.items.fetch({ reset: true });
    },
    addAll: function() {
      this.render();
    },
    render: function() {
      var _this = this;
      engine.renderSource(this.templates.summary, { counter: app.items.active().length }, function(err, out) {
        if (err) {
          // throw err;
        }
        console.log(out);
        _this.$('#cart-summary').html(out);
      });
    },
    clearForm: function() {
      this.$el.find('#form').find('input[type=text]').val('');
    },
    addItem: function(e) {
      e.preventDefault();
      var data = {
        title: this.$title.val(),
        price: this.$price.val()
      };
    }
  });
})(Backbone.View, dust, jQuery);