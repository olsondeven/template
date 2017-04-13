angular.module('app').controller('gameCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.game = mainService.getGame();
});//closing
