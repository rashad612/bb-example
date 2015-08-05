(function() {
  var app = {};

  app.run = function() {
    console.log('App is running!');
    new views.AppView();
  };

  // Document ready!
  document.addEventListener('DOMContentLoaded', function() {
    app.run(); 
  });
  
})();