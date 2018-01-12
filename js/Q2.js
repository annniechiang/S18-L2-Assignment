"use strict";

function validate() {
  var code = document.getElementById("nric").value;
  if(code == "") {
    alert("內容是空的，發出警告!");
  } else if (!isNaN(code)) {
    alert("內容不能是數字，發出警告!");
  } else if (code.length != 10) {
    alert("內容的長度不正確，發出警告!");
  } else {
    if(code[1] == "2") 
      document.getElementById("result").innerHTML = "某女通過驗證";
    else if(code[1] == "1")
      document.getElementById("result").innerHTML = "某男通過驗證";
    else
      document.getElementById("result").innerHTML = "身分字號錯誤!";
  }
}