angular.module('starter.controllers', [])

.controller("HomeCtrl", function($scope, $rootScope, $localStorage) {
  if( $localStorage.items == undefined )
    $localStorage.items = new Array();

  $scope.items = $localStorage.items;
})

.controller("AddCtrl", function($scope, $rootScope, $state, $localStorage) {
  $scope.obj = new Object();

  $scope.print = function() {
    console.log($localStorage.items);
    $localStorage.items.push({name: $scope.obj.name, date: $scope.obj.date, loc: $scope.obj.loc});
    $scope.obj = new Object();
    $state.go("home");
  }
})

.controller("ItemCtrl", function($scope, $stateParams){
  $scope.obj = $stateParams;
});