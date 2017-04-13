angular.module('app').controller('flipCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.game = mainService.getGame();
  $scope.random = function(){
    // let ranNum = Math.floor(Math.random()*2+1);
    if(Math.floor(Math.random()*2+1)===1){
      mainService.setStartServe('player1');
      swal($scope.game.player1.name+" serves first");
        //date
    }else{
      mainService.setStartServe('player2');
      swal($scope.game.player2.name+" serves first");
      //date
    }
  }
  $scope.selectService = function(val){
    console.log(val)
    mainService.setStartServe(val);
    if(val === 'player1'){
      swal($scope.game.player1.name+" serves first");
    }else{
      swal($scope.game.player2.name+" serves first");
    }
    //date
  }
})//closing
