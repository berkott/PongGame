var canvas;
var canvasContext;

window.onload = function start() {
    canvas = document.getElementById("mainCanvas");
    canvasContext = canvas.getContext("2d");
    setInterval(function(){main()}, 25);
}

function main(){
    canvasContext.fillStyle = "#ff1134";
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
}


console.log("Hello World");