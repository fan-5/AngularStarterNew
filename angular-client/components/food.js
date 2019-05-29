let app = angular.module('food', [])

app.controller('SearchController' , function($scope) {

        this.handleClick = () => {
            this.service.search(this.input , (data) => {
                this.result(data);
            });
        };
    })

    .component('search' , {
        bindings : {
            service : '=',
            result : '=',
        },
            controller : 'SearchController' , 
            templateUrl : 'src/template/Food.html'
        
    })