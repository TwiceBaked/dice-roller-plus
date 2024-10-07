const webSiteType = process.env.WEBSITE_TYPE

function showWebType() {
    const type = document.getElementById("my-header");
    type.textContent = webSiteType
}

document.getElementById("web-type").addEventListener("click", showWebType);

document.addEventListener("DOMContentLoaded", function() {

    displaySecondResult(rollDice(), rollSecondDice())
});

document.getElementById("rollBothButton").addEventListener('click', function() {

    displaySecondResult(rollDice(), rollSecondDice())
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollSecondDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function displaySecondResult(result, resultTwo) {
    var totalResult = result + resultTwo;
    if (totalResult == 7) {
        totalResult = totalResult + ". If you have 8 or more cards, discard half your hand."
    }
    var imageSrc = result + "-" + "Di" + ".png";
    var imageSrcSecond = resultTwo + "-" + "Di" + ".png";

    document.getElementById('diceImage').src = imageSrc;
    document.getElementById('diceImageTwo').src = imageSrcSecond;
    document.getElementById('result').innerText = "You rolled a " + totalResult;
}