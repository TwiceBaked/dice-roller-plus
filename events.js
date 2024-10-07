const webSiteType = process.env.WEBSITE_TYPE

function showWebType() {
    const type = document.getElementById("my-header");
    type.textContent = webSiteType
}

document.getElementById("web-type").addEventListener("click", showWebType);

document.addEventListener("DOMContentLoaded", function() {
    displayResult(rollDice());
});
document.getElementById('rollButton').addEventListener('click', function() {
    displayResult(rollDice());
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function displayResult(result) {
    var imageSrc = result + "-" + "Di" + ".png";
    document.getElementById('diceImage').src = imageSrc;
    document.getElementById('result').innerText = 'You rolled a ' + result;
}
