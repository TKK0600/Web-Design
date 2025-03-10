function purchasefunction(){
  var vmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var fname = document.getElementById("fname").value;
  var mail = document.getElementById("mail").value;
  var address = document.getElementById("add").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zipcode").value;
  var card = document.getElementById("card").value;
  var cardholder = document.getElementById("chold").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var cvv = document.getElementById("cvv-input").value;
  if (fname ===""||mail===""||address===""||city===""||state===""||zip===""||card===""||cardholder===""||month===""||year===""||cvv===""){
    alert("Do not leave blank!!")
  } if(!vmail.test(mail)){
    alert("Please enter the correct form of email")
  }
  else if(!cardno.test(card)){
    alert("Please enter the correct form of visa card.The visa card must be start with 4 and the length should be in 13-16.")
  }
  else{
    alert("Thank You For Purchasing !!!")
    Redirect();
  }
}

function Redirect() {
  location.href="home.html";
}