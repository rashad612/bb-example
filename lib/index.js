var app = app || {};
(function() {
  'use strict';
  
  app.run = function() {
    console.log('App is running!');
    new app.AppView();
  };

  // Document ready!
  document.addEventListener('DOMContentLoaded', function() {
    app.run();
  });
  
})();