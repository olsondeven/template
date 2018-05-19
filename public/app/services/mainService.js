angular.module('app').service('mainService', function($http,$state) {
  this.getInfo = function(){
    return "mainService is working";
  };
}); //closing
