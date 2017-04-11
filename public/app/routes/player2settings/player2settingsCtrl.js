angular.module('app').controller("player2settingsCtrl",function($scope, $stateParams, mainService, $rootScope){
  let color = null;
  $scope.colorArray = ['red','blue','green','purple','yellow'];
  $scope.selectColor = function(val){
    color = val;
    console.log(color);
  };
  $scope.selectName = function(val){
    console.log('fired',color,val);
    if(!color || !val){
      return swal('Please select color and choose name');
    }else{
      mainService.setGame('player2.name',val);
      mainService.setGame('player2.color',color);
    }
  }
});//closing
