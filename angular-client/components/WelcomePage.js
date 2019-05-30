// angular.module('myApp', ['ngMaterial'])

// .component('welcomepage', {


//   bindings: {
//     WelcomePageKeyBinded: '='
//   },
//     templateUrl: '/templates/WelcomePage.html',
  

// })

// .controller('homepage', function() {
// console.log('5ara')
// })

angular.module('myApp')

.controller('homepage', function() {

  console.log('5ara')
  
})
.component('welcomepage', {

  controller: 'homepage',
  templateUrl: '/templates/WelcomePage.html'
  });

  //https://www.freepik.com/free-photo/gold-cutlery-set-black-background_4506326.htm -- https://image.freepik.com/free-photo/gold-cutlery-set-black-background_1220-4104.jpg
  //https://www.freepik.com/free-photo/various-mexican-food-dark-background_1565891.htm -- https://image.freepik.com/free-photo/various-mexican-food-dark-background_23-2147740705.jpg
  //https://www.freepik.com/free-photo/plate-ripe-vegetables-assortment_1443322.htm  -- https://image.freepik.com/free-photo/plate-ripe-vegetables-assortment_23-2147694064.jpg
  //https://www.freepik.com/free-photo/colorful-healthy-unhealthy-food-white-textured-background_2955602.htm -- https://image.freepik.com/free-photo/colorful-healthy-unhealthy-food-white-textured-background_23-2147885658.jpg
