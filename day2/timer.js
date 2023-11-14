let min, sec, hour;
let timer;

function startTimer() {
    //START 버튼 클릭 시 입력 영역 사라짐
    document.getElementById("inputTimer").style.display ='none';
    hour = document.querySelector("#startHour").value; 
    if (hour === "") hour = 0;		
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
            resetTimer();
            clearInterval(timer);
            alert("타이머 종료");
        }
    }
}

function stopTimer() {
    //STOP 버튼 클릭 시 카운트 다운 정지
    clearInterval(timer);
  }

function resetTimer() {
     //RESET 버튼 클릭 시 입력 영역 나타남
    document.getElementById("inputTimer").style.display ='block';	

    document.querySelector("#display").innerText =
    hour + ":" min + ":" + sec

    document.getElementById("startHour").value = "";
    document.getElementById("startMin").value = "";
    document.getElementById("startSec").value = "";
}