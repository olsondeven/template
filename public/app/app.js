angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  //default router
  //home page and landing page
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/routes/home/homeTemp.html',
    controller: 'homeCtrl'
  })
  .state('flip', {
    url: '/flip',
    templateUrl: './app/routes/flip/flipTemp.html',
    controller: 'flipCtrl'
  })
  .state('game', {
    url: '/game',
    templateUrl: './app/routes/game/gameTemp.html',
    controller: 'gameCtrl'
  })
  .state('match', {
    url: '/match',
    templateUrl: './app/routes/match/matchTemp.html',
    controller: 'matchCtrl'
  })
  .state('point', {
    url: '/point',
    templateUrl: './app/routes/point/pointTemp.html',
    controller: 'pointCtrl'
  });

  $urlRouterProvider.otherwise('/');
});//closing
