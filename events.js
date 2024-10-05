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
