// Example of randomizer with numbers 1-6

// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);

//------------------------------------------------------------------------------------------------------------------------------------------------------------

/*

Love Calculator Version 1.0.0

Written By: Qien A. Ybarra

Name: LoveCalculator_V1.0.0

*/

function calculateLove() {
    var firstLover = prompt("Your Full Name (First and Last name)");
    var secondLover = prompt("Your Crush's name (First and Last name)");

    var love = Math.random();
    love = love * 100;
    love = Math.floor(love) + 1;
    love = love + "%";

    alert("The relationship between " + firstLover + " and " + secondLover + " has a " + love + " chance of working out.");
    console.log("The relationship between " + firstLover + " and " + secondLover + " has a " + love + " chance of working out.");

    if (love <= 30 + "%"){
        alert("Your relationship won't work out very well. But always remember that you can try to make it work. The percent isn't 0!");
        console.log("Your relationship won't work out very well. But always remember that you can try to make it work. The percent isn't 0!");
    }

    else if (love <= 55 + "%"){
        alert("You and your crush have a somewhat good chance of having a good relationship. Good luck to " + firstLover + " and " + secondLover + "!");
        console.log("You and your crush have a pretty good chance of having a good relationship. Good luck to " + firstLover + " and " + secondLover + "!");
    }

    else if (love <= 85 + "%"){
        alert("You, " + firstLover + ", and your crush, " + secondLover + ", are going to have a very good relationship. You will have many well lit memories with him/her");
        console.log("You, " + firstLover + ", and your crush, " + secondLover + ", are going to have a very good relationship. You will have many well lit memories with him/her");
    }

    else if (love <= 99 + "%"){
        alert("There is a super high chance that the relationship between " + firstLover + " and " + secondLover + " will work out! You two will share very nice and well lit memories with him/her and your relationship should last a long time.");
        console.log("There is a super high chance that the relationship between " + firstLover + " and " + secondLover + " will work out! You two will share very nice and well lit memories with him/her and your relationship should last a long time.");
    }

    else if (love == 100 + "%"){
        alert("You, " + firstLover + " and your beloved crush, " + secondLover + " were born to be together. You will get married and will stay married until death. You will both share very heart warming and loving memories and will agree on a lot of conversations.");
        console.log("You, " + firstLover + " and your beloved crush, " + secondLover + " were born to be together. You will get married and will stay married until death. You will both share very heart warming and loving memories and will agree on a lot of conversations.");
    }

    else {
        alert("Error: could not calculate. Please try again.")
        console.log("Error: could not calculate. Please try again.")
    }
}

function clickedHeart() {
    alert("You clicked on the peaceful heart picture! XOXO")
}
