const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function submitformfunction(){
var vmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var vphone = /^(\+?6?01)[02-46-9][-][0-9]{7}$|^(\+?6?01)[1][-][0-9]{8}$/;
var username=document.getElementById("name").value;
var mail=document.getElementById("mail").value;
var phone=document.getElementById("phone").value;
var message =document.getElementById("message").value;
if (username==""||mail==""||phone==""||message==""){
  alert("Please do not leave blank")
}
else if(!vmail.test(mail)){
  alert("Please enter the correct form of email")
}
else if(!vphone.test(phone)){
  alert("Please enter the phone number start with +60")
}
}