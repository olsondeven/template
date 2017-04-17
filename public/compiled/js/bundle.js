'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  //default router
  //home page and landing page
  $stateProvider.state('home', {
    url: '/',
    templateUrl: './app/routes/home/homeTemp.html',
    controller: 'homeCtrl'
  }).state('flip', {
    url: '/flip',
    templateUrl: './app/routes/flip/flipTemp.html',
    controller: 'flipCtrl'
  }).state('player1', {
    url: '/player1',
    templateUrl: './app/routes/player1settings/player1settingsTemp.html',
    controller: 'player1settingsCtrl'
  }).state('player2', {
    url: '/player2',
    templateUrl: './app/routes/player2settings/player2settingsTemp.html',
    controller: 'player2settingsCtrl'
  }).state('game', {
    url: '/game',
    templateUrl: './app/routes/game/gameTemp.html',
    controller: 'gameCtrl'
  }).state('matchStats', {
    url: '/matchStats',
    templateUrl: './app/routes/matchStats/matchStatsTemp.html',
    controller: 'matchStatsCtrl'
  }).state('type', {
    url: '/type',
    templateUrl: './app/routes/type/typeTemp.html',
    controller: 'typeCtrl'
  }).state('match', {
    url: '/match',
    templateUrl: './app/routes/match/matchTemp.html',
    controller: 'matchCtrl'
  }).state('point', {
    url: '/point',
    templateUrl: './app/routes/point/pointTemp.html',
    controller: 'pointCtrl'
  });

  $urlRouterProvider.otherwise('/');
}); //closing
'use strict';

angular.module('app').service('mainService', function ($http, $state) {
    //info for singles games
    var pointScoreIndex = 0;
    var gameScoreIndex = 0;
    var matchScoreIndex = 0;
    var game = {
        startDate: null, //date stamp
        endDate: null,
        selectPoint: 11, //
        selectMatch: 3,
        selectType: null,
        matchWinner: null,
        matchLoser: null,
        totalPoint: 0,
        startSer: null,
        save: false,
        //game name of winner/loser, points, time
        //let setupPlayerGameStats = {winner:null, winScore:0, loser:null, lossScore:0, tracker:[]};
        //{winnner:null, loser:null, winnerScore:0, loserScore: 0, tracker:[{pointWinner:null, pointDate:null, winSer:false}]}
        gameScoreCollection: [{ winner: null, winScore: 0, loser: null, lossScore: 0, tracker: [] }],
        //{winnerName:null, winnerScore:0, loserName:null, loserScore:0, tracker:[{gameWinner:null,gameDate:null}]}
        // matchScoreCollection: [{winnerName:null, winnerScore:0, loserName:null, loserScore:0, tracker:[]}],
        login: {
            currentUser: null
        },
        player1: {
            name: "Player1",
            curSer: false,
            matchScore: 0,
            gameScore: 0,
            foul: null,
            let: null,
            hasAcct: false,
            color: null //,
            // gamesWon: [[]],
            // gamesLose: [[]]
        },
        player2: {
            name: "Player2",
            curSer: false,
            matchScore: 0,
            gameScore: 0,
            foul: null,
            let: null,
            hasAcct: false,
            color: null //,
            // gamesWon: [[]],
            // gamesLose: [[]]
        },
        team1: {
            teamName: null,
            foul: null,
            let: null,
            gameScore: null,
            matchScore: null,
            hasAcct: false,
            mate1: null,
            mate2: null
        },
        team2: {
            teamName: null,
            foul: null,
            let: null,
            gameScore: null,
            matchScore: null,
            hasAcct: false,
            mate1: null,
            mate2: null
        }
    };
    //get/set/update/delete from controllers and views
    this.getGame = function () {
        return game;
    };
    //set game settings
    this.setGame = function (prop, val) {
        if (prop === 'player1.name') {
            game.player1.name = val;
        } else if (prop === 'player1.color') {
            game.player1.color = val;
        } else if (prop === 'player2.name') {
            game.player2.name = val;
        } else if (prop === 'player2.color') {
            game.player2.color = val;
        } else {
            game[prop] = val;
        }
    };
    //set service
    this.setStartServe = function (prop) {
        game.startDate = new Date();
        console.log(game.startDate);
        if (prop === "player1") {
            game.startSer = "player1";
            game.player1.curSer = true;
        } else {
            game.startSer = "player2";
            game.player2.curSer = true;
        }
    };
    //add to personal score
    //counter for index placement
    this.addPlayerScore = function (player) {
        //adding up points
        var pushArr = { pointWin: null, pointDate: null, winSer: false };

        if (player === 'player1') {
            pushArr.pointWin = game.player1.name;
            pushArr.pointDate = new Date();
            game.gameScoreCollection[gameScoreIndex].tracker.push(pushArr);
            if (game.player1.curSer) {
                // console.log('point Index', pointScoreIndex);
                // console.log('game Index', gameScoreIndex);
                // console.log(game.gameScoreCollection);
                game.gameScoreCollection[gameScoreIndex].tracker[pointScoreIndex].winSer = true;
            }
            game.player1.gameScore++;
            game.totalPoint = game.player1.gameScore + game.player2.gameScore;
            // console.log("Point made by player1",game.gameScoreCollection[gameScoreIndex]);
            serviceSwitch();
        }
        if (player === 'player2') {
            pushArr.pointWin = game.player2.name;
            pushArr.pointDate = new Date();
            //{winner:null, winScore:0, loser:null, lossScore:0, tracker:[]}
            game.gameScoreCollection[gameScoreIndex].tracker.push(pushArr);
            if (game.player2.curSer) {
                // console.log('point Index', pointScoreIndex);
                // console.log('game Index',gameScoreIndex);
                // console.log(game.gameScoreCollection);
                game.gameScoreCollection[gameScoreIndex].tracker[pointScoreIndex].winSer = true;
            }
            game.player2.gameScore++;
            game.totalPoint = game.player1.gameScore + game.player2.gameScore;
            // console.log("Point made by player2",game.gameScoreCollection[gameScoreIndex]);
            serviceSwitch();
        }

        if (game.player1.gameScore > game.player2.gameScore + 1 && game.player1.gameScore > game.selectPoint - 1) {
            return addMatch("player1");
        }
        if (game.player2.gameScore > game.player1.gameScore + 1 && game.player2.gameScore > game.selectPoint - 1) {
            return addMatch("player2");
        }
        pointScoreIndex++;
    };
    //add match if won game
    function addMatch(player) {
        if (player === 'player1') {
            game.player1.matchScore++;
            game.gameScoreCollection[gameScoreIndex].winner = game.player1.name;
            game.gameScoreCollection[gameScoreIndex].winScore = game.player1.gameScore;
            game.gameScoreCollection[gameScoreIndex].loser = game.player2.name;
            game.gameScoreCollection[gameScoreIndex].lossScore = game.player2.gameScore;
            // game.gameScoreCollection.push(pushArr);
            console.log("match made by player1", game.gameScoreCollection[gameScoreIndex]);
        } else if (player === "player2") {
            game.player2.matchScore++;
            game.gameScoreCollection[gameScoreIndex].winner = game.player2.name;
            game.gameScoreCollection[gameScoreIndex].winScore = game.player2.gameScore;
            game.gameScoreCollection[gameScoreIndex].loser = game.player1.name;
            game.gameScoreCollection[gameScoreIndex].lossScore = game.player1.gameScore;
            // game.gameScoreCollection.push(pushArr);
            console.log("match made by player2", game.gameScoreCollection[gameScoreIndex]);
        }

        //decide on match winner
        if (game.player1.matchScore > game.selectMatch - game.selectMatch % 2 - 1) {
            game.matchWinner = "player1";
            game.matchLoser = "player2";
            return matchFinished();
        }

        if (game.player2.matchScore > game.selectMatch - game.selectMatch % 2 - 1) {
            game.matchWinner = "player2";
            game.matchLoser = "player1";
            return matchFinished();
        }
        resetGame();
        var pushArr = { winner: null, winScore: 0, loser: null, lossScore: 0, tracker: [] };
        game.gameScoreCollection.push(pushArr);
    }

    //switch service
    function serviceSwitch(index) {
        if (game.selectPoint === 11 && game.totalPoint >= 20) {
            game.player1.curSer = !game.player1.curSer;
            game.player2.curSer = !game.player2.curSer;
        } else if (game.selectPoint === 11 && game.totalPoint % 2 === 0) {
            game.player1.curSer = !game.player1.curSer;
            game.player2.curSer = !game.player2.curSer;
        }
        //if game point is set to 21
        if (game.selectPoint === 11 && game.totalPoint >= 40) {
            game.player1.curSer = !game.player1.curSer;
            game.player2.curSer = !game.player2.curSer;
        } else if (game.selectPoint === 21 && game.totalPoint % 5 === 0) {
            game.player1.curSer = !game.player1.curSer;
            game.player2.curSer = !game.player2.curSer;
        }
    }
    //reset for new game
    function resetGame() {
        game.player1.gameScore = 0;
        game.player2.gameScore = 0;
        gameScoreIndex++;
        pointScoreIndex = 0; //for after looking at matchStats
        // gameScoreIndex = 0;
        // game.gameScoreCollection.push(pushArr);
        if (game.startSer === 'player1') {
            swal(game.player2.name + " serves first");
            game.startSer = 'player2';
            game.player1.curSer = false;
            game.player2.curSer = true;
        } else {
            swal(game.player1.name + " serves first");
            game.startSer = 'player1';
            game.player1.curSer = true;
            game.player2.curSer = false;
        }
    }
    //finish match
    function matchFinished() {
        swal(game.matchWinner + " Won the match");
        game.endDate = new Date();
        // console.log(game.endDate);
        console.log(game);
        $state.go('matchStats');
    }
}); //closing
"use strict";
"use strict";
"use strict";
'use strict';

angular.module('app').controller('flipCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.game = mainService.getGame();
  $scope.random = function () {
    // let ranNum = Math.floor(Math.random()*2+1);
    if (Math.floor(Math.random() * 2 + 1) === 1) {
      mainService.setStartServe('player1');
      swal($scope.game.player1.name + " serves first");
      //date
    } else {
      mainService.setStartServe('player2');
      swal($scope.game.player2.name + " serves first");
      //date
    }
  };
  $scope.selectService = function (val) {
    console.log(val);
    mainService.setStartServe(val);
    if (val === 'player1') {
      swal($scope.game.player1.name + " serves first");
    } else {
      swal($scope.game.player2.name + " serves first");
    }
    //date
  };
}); //closing
'use strict';

angular.module('app').controller('gameCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.setPlayerScore = function (prop) {
    mainService.addPlayerScore(prop);
    $scope.game = mainService.getGame();
  };
  $scope.game = mainService.getGame();
}); //closing
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.test = "HELLO WORLD";
  $scope.login = function (user, pass) {};
}); //closing
'use strict';

angular.module('app').controller('matchCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.selectMatch = function (val) {
    mainService.setGame('selectMatch', val);
  };
}); //closing
"use strict";

angular.module("app").controller("matchStatsCtrl", function ($scope, $stateParams, mainService, $rootScope) {
    $scope.game = mainService.getGame();
    if ($scope.game.matchWinner === "player1") {
        $scope.winner = $scope.game.player1.name;
        $scope.loser = $scope.game.player2.name;
    } else {
        $scope.winner = $scope.game.player2.name;
        $scope.loser = $scope.game.player1.name;
    }
    //Charts D3.js
    //d3.select(#) select by ref. to class, element/tag, or id ex("p"),(".hello-world"),("#red-box")

    // d3.select("p").text("helloWorld");

    //d3 append adds to element
    //text will write text into that element

    // d3.select(".match-graph-cont")
    //   .append("p")
    //   // .style("background-color","red")
    //   .attr("style","color: blue; background-color: red;")
    //   .text("is this working");


    //to create svg you have to append to the document
    var canvas = d3.select(".match-graph-cont").append("svg")
    // .style("background-color","red")
    // .attr("style","width: 100%; height: 100%; color: blue; background-color: red;");
    .attr("style", "width: 100%; height: 100%;background-color:blue;");
    //cx,cy is center x-axis and y-axis
    //r is for radius
    //fill is background color for svg
    // var circle = canvas.append("circle")
    //     .attr("cx", 250)
    //     .attr("cy", 250)
    //     .attr("r", 50)
    //     .attr("fill", "red");
    //
    // var line = canvas.append("line")
    //     .attr("x1", 0)
    //     .attr("y1", 100)
    //     .attr("x2", 400)
    //     .attr("y2", 400)
    //     .attr("stroke", "green")
    //     .attr("stroke-width", 10);
    var dataArray = [20, 40, 50];
    var bars = canvas.selectAll("rect").data(dataArray).enter() //this method returns placeholders for each data elements
    .append("rect").attr("width", function (element) {
        return element;
    });

    console.log(d3);
}); //closing
'use strict';

angular.module('app').controller("player1settingsCtrl", function ($scope, $state, $stateParams, mainService, $rootScope) {
  var color = null;
  $scope.colorArray = ['red', 'blue', 'green', 'purple', 'yellow'];
  $scope.selectColor = function (val) {
    color = val;
    console.log(color);
  };
  $scope.selectName = function (val) {
    console.log('fired', color, val);
    if (!color || !val) {
      return swal('Please select color and choose name');
    } else {
      mainService.setGame('player1.name', val);
      mainService.setGame('player1.color', color);
      $state.go('player2');
    }
  };
}); //closing
'use strict';

angular.module('app').controller("player2settingsCtrl", function ($scope, $state, $stateParams, mainService, $rootScope) {
  var color = null;
  $scope.colorArray = ['red', 'blue', 'green', 'purple', 'yellow'];
  $scope.selectColor = function (val) {
    color = val;
    console.log(color);
  };
  $scope.selectName = function (val) {
    console.log('fired', color, val);
    if (!color || !val) {
      return swal('Please select color and choose name');
    } else {
      mainService.setGame('player2.name', val);
      mainService.setGame('player2.color', color);
      $state.go('flip');
    }
  };
}); //closing
'use strict';

angular.module('app').controller('pointCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.selectPoint = function (val) {
    mainService.setGame('selectPoint', val);
    if (val === 11) {
      mainService.setGame('switchSer', 2);
    } else {
      mainService.setGame('switchSer', 5);
    }
  };
}); //closing
'use strict';

angular.module('app').controller('typeCtrl', function ($scope, $stateParams, mainService, $rootScope) {
  $scope.setType = function (val) {
    // console.log(val, "fired");
    mainService.setGame("selectType", val);
  };
}); //closing
//# sourceMappingURL=bundle.js.map
