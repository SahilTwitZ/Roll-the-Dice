function rollDice() {
    var randValue1 = Math.floor(Math.random() * 6) + 1;
    var randValue2 = Math.floor(Math.random() * 6) + 1;

    document.getElementsByClassName("img1")[0].setAttribute("src", `./images/dice${randValue1}.png`);
    document.getElementsByClassName("img2")[0].setAttribute("src", `./images/dice${randValue2}.png`);

    var resultText;
    if (randValue1 > randValue2) {
        resultText = "🚩 Player 1 Wins!";
    } else if (randValue1 < randValue2) {
        resultText = "Player 2 Wins! 🚩";
    } else {
        resultText = "🚩 It's a Draw! Roll again 🚩";
    }
    document.querySelector("h2").textContent = resultText;
}
