angular.module('MyApp', ['ngMaterial'])

.component('WelcomePage1', {

  //https://www.freepik.com/free-photo/gold-cutlery-set-black-background_4506326.htm 
  //https://www.freepik.com/free-photo/various-mexican-food-dark-background_1565891.htm
  //https://www.freepik.com/free-photo/plate-ripe-vegetables-assortment_1443322.htm
  //https://www.freepik.com/free-photo/colorful-healthy-unhealthy-food-white-textured-background_2955602.htm

  bindings: {
    WelcomePageKeyBinded: '<'
  },
    templateUrl: '/templates/WelcomePage.html',
  

})

.controller('homepage', function() {
console.log('5ara')
})