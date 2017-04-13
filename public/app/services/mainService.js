angular.module('app').service('mainService', function($http) {
    //info for singles games
    let game = {
            date: null, //date stamp
            selectPoint: null, //
            selectMatch: null,
            selectType: null,
            player1: {
                name: "Player1",
                curSer: false,
                matchScore: 0,
                foul: null,
                let: null,
                hasAcct: false,
                gameScore: 0,
                color: null
            },
            player2: {
                name: "Player2",
                curSer: false,
                matchScore: 0,
                foul: null,
                let: null,
                hasAcct: false,
                gameScore: 0,
                color: null
            },
            matchWinner: null,
            matchLoser: null,
            totalPoint: 0,
            startSer: null,
            save: false,
            login: {
                currentUser: null
            },
            switchSer: null,
            tiebreaker: null,
            team1: {
                teamName: null,
                foul: null,
                let: null,
                gameScore: null,
                matchScore: null,
                hasAcct: false,
                selectedSErvice: null,
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
                selectedService: null,
                mate1: null,
                mate2: null
            }
        }
        //get/set/update/delete from controllers and views
    this.getGame = function() {
            return game;
        }
        //set game settings
    this.setGame = function(prop, val) {
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
            //set PlayerScore
            console.log(game);
        }
        //set service
    this.setStartServe = function(prop) {
            if (prop === "player1") {
                game.startSer = "player1";
                game.player1.curSer = true;
            } else {
                game.startSer = "player2";
                game.player2.curSer = true;
            }
            console.log(game);
        }
        //add to personal score
    this.addPlayerScore = function(player) {
            if (player === 'player1') {
                game.player1.gameScore++;
                if(game.player1.gameScore >= 11 && game.player1.gameScore === (game.player2.gameScore + 2)){
                  addMatch("player1");
                }
            } else {
                game.player2.gameScore++;
                if(game.player2.gameScore >= 11 && game.player2.gameScore === (game.player1.gameScore + 2)){
                  addMatch("player2");
                }
            }
            game.totalPoint = game.player1.gameScore + game.player2.gameScore;

            serviceSwitch();
            console.log(game.totalPoint);
        }
        //add match if won game
    function addMatch(player) {
        if (player === 'player1') {
            game.player1.matchScore++;
        } else {
            game.player2.matchScore++;
        }
        resetGame();
    }

    //switch service
    function serviceSwitch() {
        if (game.selectPoint === 11 && game.totalPoint >= 20) {
          game.player1.curSer = !game.player1.curSer;
          game.player2.curSer = !game.player2.curSer;
          console.log('server change', game);
        }else if (game.selectPoint === 11 && game.totalPoint % 2 === 0) {
          game.player1.curSer = !game.player1.curSer;
          game.player2.curSer = !game.player2.curSer;
          console.log('server change', game);
        }
//if game point is set to 21
        if (game.selectPoint === 11 && game.totalPoint >= 40) {
          game.player1.curSer = !game.player1.curSer;
          game.player2.curSer = !game.player2.curSer;
          console.log('server change', game);
        }else if (game.selectPoint === 21 && game.totalPoint % 5 === 0) {
          game.player1.curSer = !game.player1.curSer;
          game.player2.curSer = !game.player2.curSer;
          console.log('server change', game);
        }
    }
    //reset for new game
    function resetGame(){
      game.player1.gameScore = 0;
      game.player2.gameScore = 0;
      if(game.startSer === 'player1'){
        game.startSer = 'player2';
        game.player1.curSer = false;
        game.player2.curSer = true;
      }else{
        game.startSer = 'player1';
        game.player1.curSer = true;
        game.player2.curSer = false;
      }
    }
}); //closing
