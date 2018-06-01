angular.module('app').controller('homeCtrl',function($scope, $stateParams, mainService, $rootScope){
  $scope.cmdResponse = null;
  $scope.scanProgress = false;
  $scope.anotherRequest = false;
  let c = 0;
  $scope.loadingText = "Push button to make call";
  function myCounter(){
    $scope.requestCount = ++c;
    console.log("mycounter fired",$scope.requestCount);
  }
  $scope.validateIp = function(ipAdd){
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
  $scope.scanNet = ()=>{
    $scope.scanProgress = "SCAN IN PROGRESS....";
    let myTimer = setInterval(myCounter,1000);
    //call service api call
    mainService.getScanNet().then((res)=>{
      if(res.status == 200){
        $scope.scanProgress = false;
        clearInterval(myTimer);
        console.log("SCAN NET PROMISE RETURN", res);
        $scope.cmdResponse = res.data;
      }else{
        $scope.scanProgress = res.data;
        clearInterval(myTimer);
      }
    });
  };
  //change background if port is flagged
  $scope.portFlag = (port)=>{
    if(port==80){
      return {
        "background-color":"#D4524E"
      }
    }
  }
});//closing
