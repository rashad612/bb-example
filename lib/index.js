var app = app || {};
(function() {
 
  app.run = function() {
    console.log('App is running!');
    new app.AppView();
  };

  // Document ready!
  document.addEventListener('DOMContentLoaded', function() {
    app.run();
  });
  
})();