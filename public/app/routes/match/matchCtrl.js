angular.module('app').controller('matchCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.selectMatch = function(val){
    mainService.setGame('selectMatch',val);
  }
})//closing
