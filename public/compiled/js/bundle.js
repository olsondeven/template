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
    console.log("ipAddress on service before call ", ipAddress);
    return $http({
      method: "GET",
      url: "/api/iI/" + ipAddress,
      data: {
        test: "test",
        helloworld: "helloworld",
        ip: "12.10.21.114"
      }
    }).then(function (res) {
      return res;
    });
  };
}); //closing
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.cmdResponse = null;
  $scope.getIpInfo = function (ip) {
    //logic to only except ip address
    console.log("button fired getIpInfo fn input: ", ip);
    mainService.getIpInformation(ip).then(function (res) {
      $scope.cmdResponse = res.data;
      console.log("response from server ", res);
    });
  };
}); //closing
"use strict";
"use strict";
//# sourceMappingURL=bundle.js.map
