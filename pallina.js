/*dichiarazione globale posizione iniziale personaggio*/
let x=250;
let y=250;
    /* dichiarazione/inizializzazione della tela*/
    

function start(){

    var randomX2;
    var randomY2;

    randomX2 = randomX();
    randomY2 = randomY();
    

    /* inizializzazione tela*/
    const tela = document.getElementById("tela");
    const ctx = tela.getContext("2d");
    ctx.clearRect(0,0,500,500);


    drawCharacter(ctx);


    /* inserimento coin*/
    
    let coinHeight = 50
    let coinWidth = coinHeight/1.5
    let coinSprite = document.createElement('img');
    coinSprite.src = 'coin.png';
    coinSprite.onload = function() {
        ctx.save();
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(coinSprite, randomX2, randomY2, coinWidth, coinHeight);    
    }
    


    if ((randomX2 + 10) >= x >= (randomX2 - 10) && (randomY2 + 10) >= y >= (randomY2 - 10)){
        
    }


}

function drawCharacter(ctx2)
{
    /* inserimento personaggio*/
    let characterHeight = 65
    let characterWidth = characterHeight/1.5
    let characterSprite = document.createElement('img');
    characterSprite.src = 'CharacterSprite.png';
    characterSprite.onload = function() {
        ctx2.save();
        ctx2.beginPath();
        ctx2.arc(x, y, 500, 0, Math.PI * 2, true);
        
        ctx2.clip();

        ctx2.drawImage(characterSprite, x, y, characterWidth, characterHeight);    
    }
}


 document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 32:
            console.log("spazio");
            start();
            break;
        case 37:
            console.log("sx");
            left();
            break;
        case 38:
            console.log("su");
            up();
            break;
        case 39:
            console.log("dx");
            right();
            break;
        case 40:
            console.log("giu");
            down();
            break;
        }
    }



function up(){
    let up = document.getElementById("up");
    document.getElementById("up").style.backgroundColor = "white";
    setTimeout(function(){
        document.getElementById("up").style.backgroundColor = "rgb(68, 151, 228)";
    },150); 
    y-=2;
    }

function right(){
    let right = document.getElementById("right");
    document.getElementById("right").style.backgroundColor = "white";
    setTimeout(function(){
        document.getElementById("right").style.backgroundColor = "rgb(68, 151, 228)";
    },150);
    x+=2;
}
function left(){
    let left = document.getElementById("left");
    document.getElementById("left").style.backgroundColor = "white";
    setTimeout(function(){
        document.getElementById("left").style.backgroundColor = "rgb(68, 151, 228)";
    },150);
    x-=2;
}
function down(){
    let down = document.getElementById("down");
    document.getElementById("down").style.backgroundColor = "white";
    setTimeout(function(){
        document.getElementById("down").style.backgroundColor = "rgb(68, 151, 228)";
    },150);
    y+=2;
}




function randomX() {
    var randomX;
    do{
        randomX = parseInt(Math.random() * (450 - 1) + 1);
        console.log("x:");
        console.log(randomX);
    }while(200<=randomX && randomX<=300);
    
    
    return randomX;
}

function randomY() {
    var randomY;
    do{
    randomY = parseInt(Math.random() * (450 - 1) + 1);
    console.log("y:");
    console.log(randomY);
    }while(200<=randomY && randomY<=300);
    return randomY;
}