app.controller('mainCtrl', ['$scope', function($scope){

  // For the carousel on the landing page
  angular.element(document).ready( function() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  })
}])
