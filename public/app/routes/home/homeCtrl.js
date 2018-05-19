angular.module('app').controller('homeCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.test = "HELLO WORLD";
  $scope.cmdResponse = null;
  $scope.getIpInfo = function(ip){
    //logic to only except ip address
    console.log("button fired getIpInfo fn input: ", ip);
    return mainService.getIpInformation();
  };
});//closing
