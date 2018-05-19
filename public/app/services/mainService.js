angular.module('app').service('mainService', function($http,$state) {
  this.getIpInformation = function(ipAddress){
    console.log("ipAddress on service before call ", ipAddress);
    return $http({
      method: "GET",
      url: "/api/iI",//id or params
      data: {
        ip: ipAddress
      }//example /api/products/${subcategory}
    }).then(function(res){
      if(res){
        console.log("getIpInformation: ", res);
        return res.data;
      }else{
        return "Error during API request";
      }
    });
  };
}); //closing
