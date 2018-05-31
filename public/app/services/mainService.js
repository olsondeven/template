angular.module('app').service('mainService', function($http, $state) {
  this.getIpInformation = function(ipAddress){
    return $http({
      method: "GET",
      url: "/api/config/"+ipAddress,
      data: {}
    }).then(function(res){
      return res;
    });
  };
  this.getOpenPorts = function(ipAddress){
    return $http({
      method: "GET",
      url: "/api/openP/"+ipAddress,
      data: {}
    }).then(function(res){
      return res;
    });
  };
}); //closing
