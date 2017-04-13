angular.module("app").controller("matchStatsCtrl",function($scope, $stateParams, mainService, $rootScope){
  $scope.game = mainService.getGame();
  $scope.test = "help";
});//closing
