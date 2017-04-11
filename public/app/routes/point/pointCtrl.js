angular.module('app').controller('pointCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.selectPoint = function(val){
    mainService.setGame('selectPoint',val);
    if(val===11){
      mainService.setGame('switchSer', 2)
    }else{
      mainService.setGame('switchSer', 5)
    }
  }
})//closing
