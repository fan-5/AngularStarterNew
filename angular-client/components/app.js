var app =  angular.module('demoapp' , ['ngRoute']);



// app.controller('myCtrl' , function($scope){

// } )

app.config(function($routeProvider){

  $routeProvider

  .when('/' , {
    
    templateUrl : '../index.html'
  })
  .when('/food' , {
    controller : 'foodcontroller',
    templateUrl : "../Food.html"
  })
})

    
   