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
  this.getScanNet = function () {
    return $http({
      method: "GET",
      url: "/api/scanNet"
    }).then(function (res) {
      return res;
    });
  };
  this.destroy = function () {
    return $http({
      method: "DELETE",
      url: "/api/destroyScan"
    });
  };
}); //closing
"use strict";
"use strict";
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope, $interval, $timeout) {
  $scope.cmdResponse = null;
  $scope.scanProgress = false;
  $scope.anotherRequest = false;
  $scope.requestCount = 0;
  $scope.loadingText = "Push button to make call";
  function myCounter() {
    console.log("mycounter fired ", $scope.requestCount);
    ++$scope.requestCount;
  }
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
    $scope.scanProgress = "SCAN IN PROGRESS....";
    // let myInterCounter = setInterval(myCounter,1000);
    var myInterCounter = $interval(myCounter, 1000);
    //call service api call
    mainService.getScanNet().then(function (res) {
      if (res.status == 200) {
        $scope.scanProgress = false;
        $interval.cancel(myInterCounter);
        console.log("SCAN NET PROMISE RETURN", res);
        $scope.cmdResponse = res.data;
      } else {
        $scope.scanProgress = res.data;
        $interval.cancel(myInterCounter);
      }
    });
  };
  $scope.cancelScan = function () {
    console.log("Cancel front ctrl fired");
    //main service call
    mainService.destroy().then(function (res) {
      console.log("Cancel return ", res);
      $scope.scanCancelled = res.data;
    });
    $timeout(function () {
      $scope.scanCancelled = null;
    }, 5000);
  };

  //change background if port is flagged
  $scope.portFlag = function (port) {
    if (port == 80) {
      return {
        "background-color": "#D4524E"
      };
    }
  };
}); //closing
//# sourceMappingURL=bundle.js.map
