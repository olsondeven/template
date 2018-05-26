angular.module('app').controller('homeCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.cmdResponse = [];
  $scope.loadingText = null;
  $scope.validateIp = function(ipAdd){
    //console.log("validateIp fired ip: ",ipAdd);
    //overstack credit for this validation
    $scope.loadingText = "LOADING";
    if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAdd)){
    mainService.getIpInformation(ipAdd).then(function(res){
      console.log(res);
      $scope.cmdResponse.push(res.data);
      getPing(ipAdd);
    });
  }else{
    swal("You have entered an invalid IP address!");
  }
  };
  let getPing = function(ipAdd){
    console.log("frontend ctrl getping fired", ipAdd);
    mainService(ipAdd).then(function(res){
      $scope.cmdResponse.push(res.data);
    });
  };
});//closing
