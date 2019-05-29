let app = angular.module('food', [])

app.controller('SearchController' , function($scope) {

    $http({
        method:'post',
        url:'/login',
        data:JSON.stringify({
            username:$scope.username,
            password:$scope.password
        }),
    headers: {'Content-Type': "application/json; charset = utf-8"}
    }).then(function(response){
        $rootScope.data = response.data[0]
        $location.path("/profile")
        
    }).catch(function(){
        console.log('big error')
    })
}




    .component('search' , {
        bindings : {
            service : '=',
            result : '=',
        },
            controller : 'SearchController' , 
            templateUrl : 'src/template/Food.html'
        
    })