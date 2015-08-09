var app = app || {};
(function(V, engine, $) {
  'use strict';
  app.ItemView = V.extend({
    tagName: 'li',
    className: 'list-group-item row',
    template: $('#tmpl-unit').html(),
    events: {
      'click .toggle': 'toggleItem'
    },
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'state', this.toggleState);
    },
    render: function() {
      var _this = this;
      if (_this.model.changed.id !== undefined)
        return;

      engine.renderSource(_this.template, _this.model.toJSON(), function(err, out) {
        if (err) {
          // throw err;
        }
        
        _this.$el.html(out);
      });
      
      return this;
    },
    toggleItem: function(e) {
      e.preventDefault();
      this.model.toggle();
    },
    toggleState: function() {
      this.$el.remove();
    }
  });
})(Backbone.View, dust, jQuery);