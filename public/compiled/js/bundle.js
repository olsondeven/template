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

angular.module('app').controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.cmdResponse = null;
  $scope.anotherRequest = false;
  $scope.loadingText = "Push button to make call";
  $scope.validateIp = function (ipAdd) {
    //console.log("validateIp fired ip: ",ipAdd);
    //overstack credit for this validation
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAdd)) {
      $scope.loadingText = "Request: ipconfig\nLOADING";
      mainService.getIpInformation(ipAdd).then(function (res) {
        $scope.cmdResponse = [];
        $scope.cmdResponse.push(res.data);
        getPing(ipAdd);
      });
    } else {
      swal("You have entered an invalid IP address!");
    }
  };
  var getPing = function getPing(ipAdd) {
    console.log("frontend ctrl getping fired", ipAdd);
    $scope.anotherRequest = true;
    mainService.getPing(ipAdd).then(function (res) {
      $scope.cmdResponse.push(res.data);
      $scope.anotherRequest = false;
    });
  };
}); //closing
"use strict";
"use strict";
'use strict';

angular.module('app').service('mainService', function ($http, $state) {
  this.getIpInformation = function (ipAddress) {
    console.log("main service ip: ", ipAddress);
    return $http({
      method: "GET",
      url: "/api/iI/" + ipAddress,
      data: {}
    }).then(function (res) {
      return res;
    });
  };
  this.getPing = function (ipAddress) {
    console.log("main service PING: ", ipAddress);
    return $http({
      method: "GET",
      url: "/api/ping/" + ipAddress,
      data: {}
    }).then(function (res) {
      return res;
    });
  };
}); //closing
//# sourceMappingURL=bundle.js.map
