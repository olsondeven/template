angular.module('app').controller('gameCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.setPlayerScore = function(prop){
    mainService.addPlayerScore(prop);
    $scope.game = mainService.getGame();
  }
  $scope.game = mainService.getGame();
});//closing
