angular.module('app').service('mainService', function($http, $state) {
  this.getIpInformation = function(ipAddress){
    console.log("ipAddress on service before call ", ipAddress);
    return $http({
      method: "GET",
      url: "/api/iI",
      data: {
        test: "test",
        helloworld: "helloworld",
        ip: "12.10.21.114"
      }
    }).then(function(res){
      return res;
    });
  };
}); //closing
