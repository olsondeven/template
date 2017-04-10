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
     hasAcct: false
   },
   player2: {
     name: null,
     gameScore: null,
     matchScore: null,
     foul: null,
     let: null,
     hasAcct: false
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
     selectedSErvice: null,
     mate1: null,
     mate2: null
   }
 }
 //get/set/update/delete from controllers and views
 this.getGame = function(){
   return game;
 }
 this.setGame = function(target){
   
 }
});//closing
