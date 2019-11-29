alert("Welcome to Scorekeeper");
alert("Please set the winning Score Before playing!")
let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let resetButton = document.querySelector("#reset");
let inputButton = document.querySelector("input");
let winningScoreDisplay = document.querySelector("#winningScore")
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;
p1Button.addEventListener("click",function(){
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click",function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver =true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function() {
    reset();
   /* p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;*/
});

inputButton.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}