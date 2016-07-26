'use strict';

angular.module('checkIssues', ['ngRoute','checkIssues.view','checkIssues.service']).
config(['$routeProvider', function($routeProvider) {
 
    $routeProvider.when('/getIssues', {
        templateUrl: 'partials/checkIssuesTable.html',
        controller: 'checkIssuesController'
      }).
      otherwise({
        redirectTo: '/getIssues'
      });
 
}]);