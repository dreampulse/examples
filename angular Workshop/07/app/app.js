/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
var app = angular.module('app', []);

var Addr = (function () {
    function Addr() {
    }
    return Addr;
})();

var User = (function () {
    function User() {
    }
    User.prototype.save = function () {
    };
    return User;
})();

app.controller('MainCtrl', function ($scope, $http) {
    $scope.vm = new User();
    $scope.vm.name;

    $http({
        method: 'POST',
        url: 'http://localhost:8888/list',
        headers: { 'Content-Type': 'application/json' }
    }).then(function (res) {
        $scope.vm.list = res.data.list;
    });

    $scope.listLength = function () {
        return $scope.vm.list.length;
    };
});
//# sourceMappingURL=app.js.map
