angular.module('app').controller('homeCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.test = "HELLO WORLD";
  $scope.getMainService = mainService.getInfo();
  console.log("angular is setup");
});//closing
