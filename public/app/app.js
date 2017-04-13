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
  .state('player1', {
    url: '/player1',
    templateUrl: './app/routes/player1settings/player1settingsTemp.html',
    controller: 'player1settingsCtrl'
  })
  .state('player2', {
    url: '/player2',
    templateUrl: './app/routes/player2settings/player2settingsTemp.html',
    controller: 'player2settingsCtrl'
  })
  .state('game', {
    url: '/game',
    templateUrl: './app/routes/game/gameTemp.html',
    controller: 'gameCtrl'
  })
  .state('matchStats', {
    url: '/matchStats',
    templateUrl: './app/routes/matchStats/matchStatsTemp.html',
    controller: 'matchStatsCtrl'
  })
  .state('type', {
    url: '/type',
    templateUrl: './app/routes/type/typeTemp.html',
    controller: 'typeCtrl'
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
