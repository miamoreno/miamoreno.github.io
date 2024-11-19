let board;
let boardWidth=  360;
let boardHeight = 576;
let context;

//jumper
let jumperWidth = 46;
let jumperHeight = 46;
let jumperX = boardWidth/2 - jumperY/2;
let jumperY = boardWidth*

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d") //for drawing//
}