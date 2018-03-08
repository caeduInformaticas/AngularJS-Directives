
var DirApp = angular.module("DirApp", []);
DirApp.controller('DirApCntrl', ['$scope', function($scope) {
    $scope.result = "AngularJS Directives with template attribute.";
    $scope.response = "AngularJS Directives with templateURL attribute.";
}]);

DirApp.directive('myCustomDir', function() {
    return {
        // restrict: 'AE',
        template: '<h3>{{result}}</h3>'
    }
});

DirApp.directive('myCustomDirA', function() {
    return {
        restrict: 'A',
        template: '<h2>Angular JS Framework</h2>'
    }
});

DirApp.directive('myCustomDirE', function() {
    return {
        restrict: 'E',
        template: '<h3>Node JS Framework</h3>'
    }
});

DirApp.directive('myCustomDirC', function() {
    return {
        restrict: 'C',
        template: '<h4>React JS Framework</h4>'
    }
});

DirApp.directive('yourCustomDir', function() {
    return {
        templateUrl: "your-custom-dir"
    }
});