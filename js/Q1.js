"use strict";

var state = true;  // 變數名稱用 status 會有問題
function toggleLight() {
  var img = document.getElementById("image");
  state = !state;
  img.src = state ? "img/on.jpg" : "img/off.jpg";
}

function start() {
  var timeLeft = document.getElementById("input-num").value;
  if(isNaN(timeLeft)) {
    alert("請輸入數字!");
  }
  else {
    document.getElementById("timer").innerHTML = parseInt(timeLeft); // 不轉換好像沒差
    function countDownTimer() {
      timeLeft--;
      if (timeLeft <= 0) {
        var img = document.getElementById("image");
        img.src = "img/off.jpg";
        clearInterval(setting);
      }
      document.getElementById("timer").innerHTML = timeLeft;
    }
    var setting = setInterval(countDownTimer, 1000);
  }  
}