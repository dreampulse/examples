/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

var app = angular.module('app', []);

class Addr {
  strasse : string;
  nummer : number;
}

class User {
    name : string;
    addr : Addr;
    save() {

    }
}

app.controller('MainCtrl', function($scope, $http) {
  $scope.vm = new User();
  $scope.vm.name


  $http({
    method : 'POST',
    url    : 'http://localhost:8888/list',
    headers: {'Content-Type':'application/json'}
  }).then(function(res){
    $scope.vm.list = res.data.list;
  });

  $scope.listLength = function() {
    return $scope.vm.list.length;
  }
});
