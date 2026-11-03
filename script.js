const gameArea = document.getElementById("gameArea");
const player = document.getElementById("player");
const coin = document.getElementById("coin");

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const startButton = document.getElementById("startButton");

let playerX = 0;
let playerY = 0;

let score = 0;
let time = 30;

let gameRunning = false;
let timer;

const speed = 6;

function startGame() {
    score = 0;
    time = 30;

    scoreText.textContent = score;
    timeText.textContent = time;

    gameRunning = true;

    playerX = gameArea.clientWidth / 2 - player.offsetWidth / 2;
    playerY = gameArea.clientHeight / 2 - player.offsetHeight / 2;

    updatePlayer();

    moveCoin();

    startButton.textContent = "Game Berjalan...";

    clearInterval(timer);

    timer = setInterval(() => {
        time--;

        timeText.textContent = time;

        if (time <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameRunning = false;

    clearInterval(timer);

    coin.style.display = "none";

    startButton.textContent = "Main Lagi";

    alert("Game selesai!\nSkor kamu: " + score);
}

function updatePlayer() {
    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
}

function moveCoin() {
    const maxX = gameArea.clientWidth - coin.offsetWidth;
    const maxY = gameArea.clientHeight - coin.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    coin.style.left = x + "px";
    coin.style.top = y + "px";
    coin.style.display = "block";
}

function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const coinRect = coin.getBoundingClientRect();

    if (
        playerRect.left < coinRect.right &&
        playerRect.right > coinRect.left &&
        playerRect.top < coinRect.bottom &&
        playerRect.bottom > coinRect.top
    ) {
        score++;

        scoreText.textContent = score;

        moveCoin();
    }
}

document.addEventListener("keydown", (event) => {
    if (!gameRunning) return;

    const key = event.key.toLowerCase();

    if (
        key === "arrowup" ||
        key === "w"
    ) {
        playerY -= speed;
    }

    if (
        key === "arrowdown" ||
        key === "s"
    ) {
        playerY += speed;
    }

    if (
        key === "arrowleft" ||
        key === "a"
    ) {
        playerX -= speed;
    }

    if (
        key === "arrowright" ||
        key === "d"
    ) {
        playerX += speed;
    }

    const maxX = gameArea.clientWidth - player.offsetWidth;
    const maxY = gameArea.clientHeight - player.offsetHeight;

    playerX = Math.max(0, Math.min(playerX, maxX));
    playerY = Math.max(0, Math.min(playerY, maxY));

    updatePlayer();
    checkCollision();
});

startButton.addEventListener("click", startGame);
