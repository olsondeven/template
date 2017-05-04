angular.module("app").controller("team1settings",function($scope, $stateParams, mainService, $state, $rootScope){
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
      mainService.setGame('name',val, 'team1');
      mainService.setGame('color',color,'team1');
      $state.go('team2');
    }
  }
});//closing
