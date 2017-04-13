angular.module('app').controller('gameCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.game = mainService.getGame();
  $scope.setPlayerScore = function(prop){
    mainService.addPlayerScore(prop);
    $scope.game = mainService.getGame();
  }
});//closing
