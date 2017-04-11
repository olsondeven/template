angular.module('app').controller('flipCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.game = mainService.getGame();
  $scope.random = function(){
    // let ranNum = Math.floor(Math.random()*2+1);
    if(Math.floor(Math.random()*2+1)===1){
        mainService.setGame('startSer','player1');
        mainService.setGame('curSer', 'player1');
        //date
    }else{
      mainService.setGame('startSer','player2');
      mainService.setGame('curSer', 'player2');
      //date
    }
  }
  $scope.selectService = function(val){
    console.log(val)
    mainService.setGame('startSer',val);
    mainService.setGame('curSer', val);
    //date
  }
})//closing
