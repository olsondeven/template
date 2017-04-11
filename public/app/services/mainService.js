angular.module('app').service('mainService',function($http){
  //info for singles games
 let game = {
   date: null,//date stamp
   selectPoint: null,//
   selectMatch: null,
   selectType: null,
   player1: {
     name: null,
     gameScore: null,
     matchScore: null,
     foul: null,
     let: null,
     hasAcct: false,
     color: null
   },
   player2: {
     name: null,
     gameScore: null,
     matchScore: null,
     foul: null,
     let: null,
     hasAcct: false,
     color: null
   },
   matchWinner: null,
   matchLoser: null,
   curSer: null,
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
 this.getGame = function(){
   return game;
 }
 //set game settings
 this.setGame = function(prop,val){
   if(prop === 'player1.name'){
     game.player1.name = val;
   }else if(prop === 'player1.color'){
     game.player1.color = val;
   }else if(prop === 'player2.name'){
     game.player2.name = val;
   }else if(prop === 'player2.color'){
     game.player2.color = val;
   }else{
     game[prop] = val;
   }
   //set PlayerScore
   this.setPlayerScore = function(){

   }
  console.log(game);
 }
});//closing
