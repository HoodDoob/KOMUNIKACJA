let soundtrack1 = document.querySelector("#soundtrack1");
let soundtrack2 = document.querySelector("#soundtrack2");
let soundtrack3 = document.querySelector("#soundtrack3");
document.querySelector("#box1").addEventListener("animationiteration", play1);
document.querySelector("#box2").addEventListener("animationiteration", play2);
document.querySelector("#box3").addEventListener("animationiteration", play3);
document.querySelector("#box4").addEventListener("animationiteration", play4);
document.querySelector("#box5").addEventListener("animationiteration", play5);
document.querySelector("#box6").addEventListener("animationiteration", play6);
document.querySelector("#box7").addEventListener("animationiteration", play7);
document.querySelector("#box8").addEventListener("animationiteration", play8);

function play1() {
    console.log("muzyczka 1");
    soundtrack1.play();
}
function play2() {
    console.log("muzyczka 2");
    soundtrack2.play();
}
function play3() {
    console.log("muzyczka 3");
    soundtrack3.play();
}
function play4() {
    console.log("muzyczka 4");
    soundtrack4.play();
}
function play5() {
    console.log("muzyczka 5");
    soundtrack5.play();
}
function play6() {
    console.log("muzyczka 6");
    soundtrack6.play();
}
function play7() {
    console.log("muzyczka 7");
    soundtrack7.play();
}
function play8() {
    console.log("muzyczka 8");
    soundtrack8.play();
}

