angular.module('app').controller("player1settingsCtrl",function($scope, $stateParams, mainService, $rootScope){
  let color = null;
  $scope.colorArray = ['red','blue','green','purple','yellow'];
  $scope.selectColor = function(val){
    color = val;
    console.log(color);
  };
  $scope.selectName = function(val){
    mainService.setGame('player1.name',val);
    mainService.setGame('player1.color',color);
  }
});//closing
