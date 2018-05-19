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
      url: "/api/iI/${ipAddress}" //example /api/products/${subcategory}
    }).then(function (res) {
      if (res) {
        console.log("getIpInformation: ", res);
        return res.data;
      } else {
        return "Error during API request";
      }
    });
  };
}); //closing
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.test = "HELLO WORLD";
  $scope.cmdResponse = null;
  $scope.getIpInfo = function (ip) {
    //logic to only except ip address
    console.log("button fired getIpInfo fn input: ", ip);
    return mainService.getIpInformation();
  };
}); //closing
"use strict";
"use strict";
//# sourceMappingURL=bundle.js.map
