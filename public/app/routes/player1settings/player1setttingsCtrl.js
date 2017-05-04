angular.module('app').controller("player1settingsCtrl",function($scope, $state, $stateParams, mainService, $rootScope){
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
      mainService.setGame('name',val, 'player1');
      mainService.setGame('color',color,'player1');
      $state.go('player2');
    }
  }
});//closing
