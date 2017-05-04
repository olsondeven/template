angular.module("app").controller("team2settings",function($scope, $state, $stateParams, mainService, $rootScope){
  console.log('is this working');
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
      mainService.setGame('name',val, 'team2');
      mainService.setGame('color',color,'team2');
      $state.go('flip');
    }
  }
});//closing
