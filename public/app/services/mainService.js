angular.module('app').service('mainService', function($http, $state) {
  this.getIpInformation = function(ipAddress){
    return $http({
      method: "GET",
      url: "/api/config/"+ipAddress
    }).then(function(res){
      return res;
    });
  };
  this.getOpenPorts = function(ipAddress){
    return $http({
      method: "GET",
      url: "/api/openP/"+ipAddress
    }).then(function(res){
      return res;
    });
  };
  this.scanNet = ()=>{
    return $https({
      method: "GET",
      url: "/api/scanNet"
    }).then((res)=>{
      return res;
    });
  };
}); //closing
