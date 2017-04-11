angular.module('app').controller('flipCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.game = mainService.getGame();
  $scope.random = function(){}
  $scope.selectService = function(val){

  }
})//closing
