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
  this.getScanNet = ()=>{
    return $http({
      method: "GET",
      url: "/api/scanNet"
    }).then((res)=>{
      return res;
    });
  };
  this.destroy = ()=>{
    return $http({
      method: "DELETE",
      url: "/api/destroyScan"
    });
  };
}); //closing
