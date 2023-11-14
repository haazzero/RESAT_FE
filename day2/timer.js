let min, sec, hour;
let timer;

function startTimer() {
    document.getElementById("inputTimer").style.display ='none';		

    min = document.querySelector("#startMin").value; 
    if (min === "") min = 0;
    sec = document.querySelector("#startSec").value;
    if (sec === "") sec = 0;
    timer = setInterval(countTimer, 1000);
  }

function countTimer() {
if (sec != 0) {
    sec--;
    document.querySelector("#display").innerText =
    min + "분" + sec + "초 남았습니다.";
} else {
    if (min != 0) {
    min--;
    sec = 59;
    } else {
    clearTimer(timer, "타이머 종료");
    }
}
}

function stopTimer() {
  }

function resetTimer() { // 리셋 버튼 연결
clearTimer(timer, "리셋 종료");
}

function clearTimer(t, text) {
    document.getElementById("inputTimer").style.display ='block';	
    clearInterval(t);
    document.getElementById("display").innerText = text;
    document.getElementById("startMin").value = "";
    document.getElementById("startSec").value = "";
  }