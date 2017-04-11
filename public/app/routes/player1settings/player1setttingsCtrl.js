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
      mainService.setGame('player1.name',val);
      mainService.setGame('player1.color',color);
      $state.go('player2')
    }
  }
});//closing
