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
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.cmdResponse = [];
  $scope.loadingText = null;
  $scope.validateIp = function (ipAdd) {
    //console.log("validateIp fired ip: ",ipAdd);
    //overstack credit for this validation
    $scope.loadingText = "LOADING";
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAdd)) {
      mainService.getIpInformation(ipAdd).then(function (res) {
        console.log(res);
        $scope.cmdResponse.push(res.data);
        getPing(ipAdd);
      });
    } else {
      swal("You have entered an invalid IP address!");
    }
  };
  var getPing = function getPing(ipAdd) {
    console.log("frontend ctrl getping fired", ipAdd);
    mainService(ipAdd).then(function (res) {
      $scope.cmdResponse.push(res.data);
    });
  };
}); //closing
"use strict";
"use strict";
//# sourceMappingURL=bundle.js.map
