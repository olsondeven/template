angular.module('app').controller('homeCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.cmdResponse = null;
  $scope.anotherRequest = false;
  $scope.loadingText = "Push button to make call";
  $scope.validateIp = function(ipAdd){
    //console.log("validateIp fired ip: ",ipAdd);
    //overstack credit for this validation
    if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAdd)){
      $scope.loadingText = "Request: ipconfig\nLOADING";
      mainService.getIpInformation(ipAdd).then(function(res){
      $scope.cmdResponse = [];
      $scope.cmdResponse.push(res.data);
      getOpenPorts(ipAdd);
    });
  }else{
    swal("You have entered an invalid IP address!");
  }
  };
  let getOpenPorts = function(ipAdd){
    console.log("frontend ctrl getping fired", ipAdd);
    $scope.anotherRequest = true;
    mainService.getOpenPorts(ipAdd).then(function(res){
      console.log("get open ports response from server :",res);
      $scope.cmdResponse.push(res.data);
      $scope.anotherRequest = false;
    });
  };
});//closing
