angular.module('app').controller('pointCtrl',function($scope, $stateParams, mainService, $rootScope){
  var game = mainService.getGame();
  if(game.selectType === 'single'){
    $scope.singleDouble = true;
  }else{
    $scope.singleDouble = false;
  }
  $scope.selectPoint = function(val){
    mainService.setGame('selectPoint',val);
    if(val===11){
      mainService.setGame('switchSer', 2)
    }else{
      mainService.setGame('switchSer', 5)
    }
  }
})//closing
