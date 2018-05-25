angular.module('app').service('mainService', function($http, $state) {
  this.getIpInformation = function(ipAddress){
    console.log("main service ip: ", ipAddress);
    return $http({
      method: "GET",
      url: "/api/iI/"+ipAddress,
      data: {}
    }).then(function(res){
      return res;
    });
  };
}); //closing
