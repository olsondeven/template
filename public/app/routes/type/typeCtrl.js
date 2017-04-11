angular.module('app').controller('typeCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.setType = function(val){
    // console.log(val, "fired");
    mainService.setGame("selectType",val);
  }
})//closing
