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
"use strict";
"use strict";
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.cmdResponse = null;
  $scope.validateIp = function (ipAdd) {
    //console.log("validateIp fired ip: ",ipAdd);
    //overstack credit for this validation
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAdd)) {
      mainService.getIpInformation(ipAdd).then(function (res) {
        console.log(res);
        $scope.cmdResponse = res.data;
      });
    } else {
      swal("You have entered an invalid IP address!");
    }
  };
}); //closing
'use strict';

angular.module('app').service('mainService', function ($http, $state) {
  this.getIpInformation = function (ipAddress) {
    console.log("main service ip: ", ipAddress);
    return $http({
      method: "GET",
      url: "/api/iI/" + ipAddress,
      data: {
        // test: "test",
        // helloworld: "helloworld",
        // ip: "12.10.21.114"
      }
    }).then(function (res) {
      return res;
    });
  };
}); //closing
//# sourceMappingURL=bundle.js.map
