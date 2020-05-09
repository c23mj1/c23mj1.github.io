let balloonCount = 7;
let name = "Mama"

function changeDiv(n) {
    if (document.getElementById(n).className == "Balloon1") {
        document.getElementById(n).className = `Balloon2`;
        setTimeout(function(){pop(n)}, 3000);
    }
}
function pop(n){
    document.getElementById(n).style.transition = "0s";
    document.getElementById(n).src = "https://i.gifer.com/VZvx.gif"; /*this is the firework from balloon*/
    document.getElementById(n).style.paddingLeft = "9px";
    document.getElementById(n).style.paddingRight = "9px";
    balloonCount--;
    if(balloonCount === 0){
        text();
    }
}
function text(){
    document.getElementById("p").appendChild(document.createTextNode(`Happy Mother's Day ${name}!`))

}



