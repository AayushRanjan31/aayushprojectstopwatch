var sstop = true;
var sec = 0;
var min = 0;
var hr = 0;

function start() {
    if(sstop == true) {
        sstop = false;
        timer();
    } 
}
function timer() {
   
    if(sstop == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec++;
        if(sec == 60) {
            sec = 0;
            min++;
        }
        if(min == 60) {
            min = 0;
            hr++;
        }
        if(hr == 24) {
            hr = 0;
        }
        if(sec < 10) {
            sec = "0" + sec;
        }
        if(min < 10) {
            min = "0" + min;
        }
        if(hr < 10) {
            hr = "0" + hr;
        }
        stow.innerHTML = hr + " : " + min + " : " + sec;
        setTimeout("timer()", 1000);
    }
   
}
function stop() {
        sstop = true;  
}
function resert() {
    sstop = true;
    sec = 0;
    min = 0;
    hr = 0;
    stow.innerHTML = "00 : 00 : 00";
}