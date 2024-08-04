var score = 0;
var rn = 0;

function bubble() {
    var clutter = "";
    for (i = 1; i <= 160; i++) {
        var ran = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${ran}</div>`;
    }
    document.querySelector("#panbtm").innerHTML = clutter;
}

function runTimer(timer) {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector("#panbtm").innerHTML = `<h1>Game Over!</h1> <button class="resBtn">Restart</button>`;
            document.querySelector(".resBtn").addEventListener("click", function () {
                document.querySelector("#timerval").textContent="60";
                bubble();
                runTimer(60);
                newHit();
                resetScore();
            })
        }
    }, 1000);
}
function resetScore (){
    score = 0;
    document.querySelector("#scoreval").textContent = score;
}
function newHit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}

function newScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

bubble();
runTimer(60);
newHit();

document.querySelector("#panbtm").addEventListener("click", function (details) {
    var hitnum = Number(details.target.textContent);
    if (hitnum === rn) {
        newScore();
        bubble();
        newHit();
    }
})
