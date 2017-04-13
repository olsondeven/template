angular.module("app").controller("matchStatsCtrl",function($scope, $stateParams, mainService, $rootScope){
  $scope.game = mainService.getGame();
  if($scope.game.matchWinner === "player1"){
    $scope.winner = $scope.game.player1.name;
    $scope.loser = $scope.game.player2.name;
  }else{
    $scope.winner = $scope.game.player2.name;
    $scope.loser = $scope.game.player1.name;
  }
});//closing
