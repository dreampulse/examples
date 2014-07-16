var app = angular.module('app', [])

app.controller('MainCtrl', function($scope) {
  $scope.vm = {};
  $scope.vm.list = [{
    job : "admin",
    name : "max"
  }, {
    job : "consultant",
    name : "steve"
  }, {
    job : "developer",
    name : "caroline"
  }];

  $scope.listLength = function() {
    return $scope.vm.list.length;
  }
});
