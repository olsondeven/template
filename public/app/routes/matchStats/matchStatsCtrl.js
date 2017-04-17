angular.module("app").controller("matchStatsCtrl", function($scope, $stateParams, mainService, $rootScope) {
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
    var canvas = d3.select(".match-graph-cont")
        .append("svg")
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
    var dataArray = [20,40,50];
    var bars = canvas.selectAll("rect")
        .data(dataArray)
        .enter()//this method returns placeholders for each data elements
          .append("rect")
          .attr("width", function(element){return element;})

    console.log(d3);
}); //closing
