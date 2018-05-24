angular.module('app').controller('homeCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.cmdResponse = null;
  $scope.getIpInfo = function(ip){
    //logic to only except ip address
    console.log("button fired getIpInfo fn input: ", ip);
    mainService.getIpInformation(ip).then(function(res){
      $scope.cmdResponse = res.data;
      console.log("response from server ", res);
    });
  };
});//closing
