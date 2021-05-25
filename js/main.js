//Criação do Canvas (Background e elementos)
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8*box,
    y: 8*box

}

let direcao = "right";

//Criação do Background
function criarBG() {
    context.fillStyle = "blue";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//Criação da cobrinha
function criarCobrinha() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "red";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//Função de iniciar o jogo
function iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Criação das direções da cobrinha
    if(direcao == "right") snakeX += box;
    if(direcao  == "left") snakeX -= box;
    if(direcao  == "up") snakeY -= box;
    if(direcao == "down") snakeY += box;

    snake.pop();

    let novaCabeca = {
        x: snakeX,
        y:snakeY
    }

    snake.unshift(novaCabeca);


}

//Função de intervalo para início e continuidade do jogo
let jogo = setInterval(iniciarJogo, 100);
