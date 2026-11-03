* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #87ceeb;

    font-family: Arial, sans-serif;
}

.game-wrapper {
    text-align: center;
}

h1 {
    margin: 10px;
    color: #ffffff;
    text-shadow: 2px 2px 3px #555;
}

.score {
    margin-bottom: 8px;

    color: white;
    font-size: 24px;
    font-weight: bold;

    text-shadow: 2px 2px 3px #555;
}

canvas {
    display: block;

    width: 400px;
    max-width: 95vw;
    height: 600px;
    max-height: 75vh;

    background: #70c5ce;

    border: 4px solid #333;
    border-radius: 8px;

    margin: auto;
}

button {
    margin-top: 15px;

    padding: 12px 30px;

    border: none;
    border-radius: 10px;

    background: #f5a623;
    color: white;

    font-size: 18px;
    font-weight: bold;

    cursor: pointer;
}

button:hover {
    background: #d88900;
}

p {
    color: white;
    font-size: 15px;

    text-shadow: 1px 1px 2px #555;
}
