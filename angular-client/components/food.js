

  app.controller('foodcontroller', function ($scope, $http) {
    $scope.meals,  
    $scope.restuantName,
      $scope.resNumber;

      $scope.handleClick =function(){
    $http({
      method: 'post',
      url: '/getMealsByPrice',
      data: JSON.stringify({
       price : $scope.input
      }),
      headers: { 'Content-Type': "application/json; charset = utf-8" }
    }).then(function (response) {
      // console.log(response.data);
      $scope.meals = response.data
     

    }).catch(function () {
      console.log('big error')
    })
  }

  })