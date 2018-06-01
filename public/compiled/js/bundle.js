'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  //default router
  //home page and landing page
  $stateProvider.state('home', {
    url: '/',
    templateUrl: './app/routes/home/homeTemp.html',
    controller: 'homeCtrl'
  });
  $urlRouterProvider.otherwise('/');
}); //closing
'use strict';

angular.module('app').service('mainService', function ($http, $state) {
  this.getIpInformation = function (ipAddress) {
    return $http({
      method: "GET",
      url: "/api/config/" + ipAddress
    }).then(function (res) {
      return res;
    });
  };
  this.getOpenPorts = function (ipAddress) {
    return $http({
      method: "GET",
      url: "/api/openP/" + ipAddress
    }).then(function (res) {
      return res;
    });
  };
  this.scanNet = function () {
    return $https({
      method: "GET",
      url: "/api/scanNet"
    }).then(function (res) {
      return res;
    });
  };
}); //closing
"use strict";
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.cmdResponse = null;
  $scope.anotherRequest = false;
  $scope.loadingText = "Push button to make call";
  $scope.validateIp = function (ipAdd) {
    //overstack credit for this validation
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAdd)) {
      $scope.loadingText = "Request: ipconfig\nLOADING";
      mainService.getIpInformation(ipAdd).then(function (res) {
        $scope.cmdResponse = [];
        $scope.cmdResponse.push(res.data);
        getOpenPorts(ipAdd);
      });
    } else {
      swal("You have entered an invalid IP address!");
    }
  };
  var getOpenPorts = function getOpenPorts(ipAdd) {
    console.log("frontend ctrl getping fired", ipAdd);
    $scope.anotherRequest = true;
    mainService.getOpenPorts(ipAdd).then(function (res) {
      console.log("get open ports response from server :", res);
      $scope.cmdResponse.push(res.data);
      $scope.anotherRequest = false;
    });
  };
  $scope.scanNet = function () {
    //call service api call
  };
}); //closing
"use strict";
//# sourceMappingURL=bundle.js.map
