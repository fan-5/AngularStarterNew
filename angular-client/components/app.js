angular.module('app')

  .component('app1', {
    bindings: {},
    controller: 'AppCtrl1',
    templateUrl: '/templates/app.html'
  })
.controller('AppCtrl1', function (itemsService) {
    // itemsService.getAll((data) => {
      this.items = "data";
    // });
  })