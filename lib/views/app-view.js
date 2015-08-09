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

      this.$summary = $('#cart-summary');
      this.$activeArea = $('#cart-active');
      this.$activeList = $('#active-list');
      this.$inactiveArea = $('#cart-inactive');
      this.$inactiveList = $('#inactive-list');

      this.listenTo(app.items, 'add', this.addOne);
      this.listenTo(app.items, 'reset', this.addAll);
      // this.listenTo(app.todos, 'change:completed', this.filterOne);
      this.listenTo(app.todos, 'change:active', this.changeState);
      this.listenTo(app.items, 'all',  _.debounce(this.render, 0));
      // Fetch
      app.items.fetch({ reset: true });
    },
    addAll: function() {
      // this.render();
      app.items.each(this.addOne, this);
    },
    addOne: function(item) {
      var view = new app.ItemView({ model: item });
      var area = item.get('active') === true ? '$activeArea' : '$inactiveArea';
      var list = item.get('active') === true ? '$activeList' : '$inactiveList';

      console.log(item.get('active'));
      this[list].append(view.render().el);

    },
    render: function() {
      console.log('rendering..');
      var _this = this,
          activeCount = app.items.active().length,
          inactiveCount = app.items.inactive().length;

      if (activeCount > 0) {
        _this.$activeArea.show();
      } else {
        _this.$activeArea.hide();
      }

      if (inactiveCount > 0) {
        _this.$inactiveArea.show();
      } else {
        _this.$inactiveArea.hide();
      }

      engine.renderSource(this.templates.summary, { counter: activeCount }, function(err, out) {
        if (err) {
          // throw err;
        }
        _this.$summary.html(out);
      });
    },
    clearForm: function() {
      this.$el.find('#form').find('input[type=text]').val('');
    },
    addItem: function(e) {
      e.preventDefault();
      $('#basicModal').modal('hide');
      var data = {
        title: this.$title.val(),
        price: this.$price.val()
      };
      app.items.create(data);
    },
    changeState: function(item) {
      item.trigger('state');
      console.log('state change...');
      this.addOne(item);
    }
  });
})(Backbone.View, dust, jQuery);
