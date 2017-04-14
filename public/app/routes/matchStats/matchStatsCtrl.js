angular.module("app").controller("matchStatsCtrl",function($scope, $stateParams, mainService, $rootScope){
  $scope.game = mainService.getGame();
  if($scope.game.matchWinner === "player1"){
    $scope.winner = $scope.game.player1.name;
    $scope.loser = $scope.game.player2.name;
  }else{
    $scope.winner = $scope.game.player2.name;
    $scope.loser = $scope.game.player1.name;
  }
  //Charts D3.js
  //d3.select(#) select by ref. to class, element/tag, or id ex("p"),(".hello-world"),("#red-box")
  d3.select("p").text("helloWorld");
  //d3 append adds to element
  //text will write text into that element
  d3.select(".match-graph-cont").append("p").text("is this working");
});//closing
