$(document).ready(function() {
    // select random number to be shown at the start of the game (between 19 -120)
    var randomNum = Math.floor(Math.random() * 102 + 19);

    // adding random number to display on html
    $("#targetNum").text("Target: " + randomNum);

    // set up random numbers for each jewel; 1-12
    var jewel1 = Math.floor(Math.random() * 11 + 1);
    var jewel2 = Math.floor(Math.random() * 11 + 1);
    var jewel3 = Math.floor(Math.random() * 11 + 1);
    var jewel4 = Math.floor(Math.random() * 11 + 1);

    // set variables for counter, wins, losses
    // update variables
    var wins = 0;
    var losses = 0;
    var userScore = 0;

    // function for restting game
    function resettingStuff() {
        userScore = 0;
        $(".your_total").text("Your total score is: " + userScore);
        randomNum = Math.floor(Math.random() * 102 + 19);
        $("#targetNum").text("Target: " + randomNum);
        jewel1 = Math.floor(Math.random() * 11 + 1);
        jewel2 = Math.floor(Math.random() * 11 + 1);
        jewel3 = Math.floor(Math.random() * 11 + 1);
        jewel4 = Math.floor(Math.random() * 11 + 1);
    }

    // function for updating wins to the userScore
    function updateWin() {
        wins++;
        $("#wins").text("Wins: " + wins);
        resettingStuff();
    }
    
    // function for updating losses
    function updateLoss() {
        losses++;
        $("#losses").text("Losses: " + losses);
        resettingStuff();
    }

    // sets up click for jewels
    $("#red").on("click", function() {
        userScore = userScore + jewel1;
        $(".your_total").text("Your total score is: " + userScore);
        if (userScore == randomNum) {
            updateWin();
        }
        else if (userScore > randomNum) {
            updateLoss();
        }
    })

    $("#black").on("click", function() {
        userScore = userScore + jewel2;
        $(".your_total").text("Your total score is: " + userScore);
        if (userScore == randomNum) {
            updateWin();
        }
        else if (userScore > randomNum) {
            updateLoss();
        }
    })

    $("#purple").on("click", function() {
        userScore = userScore + jewel3;
        $(".your_total").text("Your total score is: " + userScore);
        if (userScore == randomNum) {
            updateWin();
        }
        else if (userScore > randomNum) {
            updateLoss();
        }
    })

    $("#diamond").on("click", function() {
        userScore = userScore + jewel4;
        $(".your_total").text("Your total score is: " + userScore);
        if (userScore == randomNum) {
            updateWin();
        }
        else if (userScore > randomNum) {
            updateLoss();
        }
    })







})