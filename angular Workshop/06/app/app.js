var app = angular.module('app', []);

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

//app.directive('myDirective', function() {
//  return {
//    restrict : 'E',
//    template : "<h1>hello <i>Directive</i></h1>"
//  }
//});
//
//angular.module('app').directive('myView1', function() {
//  return {
//    restrict : 'E',
//    templateUrl : 'view/view1_template.html'
//  }
//});

//angular.module('app').directive('myView2', function() {
//  return {
//    restrict : 'A',
//    scope: {
//      stuff: '=stuff'
//    },
//    templateUrl : 'view/view2_template.html'
//  }
//});


angular.module('app').directive('myView3', function() {
  return {
    restrict : 'E',
    controller: function($scope){
      $scope.stuff= "huhu :-)"
    },
    templateUrl : 'view/view2_template.html'
  }
});