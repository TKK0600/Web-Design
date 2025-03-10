const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

function loginfunction(){
    var validpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var validmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("psw").value;
    if(mail==""){
        alert("Please do not leave blank!")
    }
    else if(!validmail.test(mail)){
        alert("Please enter a valid email address!")
    }
    else if(pass==""){
        alert("Please do not leave blank")
    }
    else if(!validpass.test(pass)){
        alert("The password must be 6 to 20 characters and contain at least one numeric digit, one uppercase letter, and one lowercase letter!")
    }
    else{
        alert("You have logged in successfully!")
    }
}

function registerfunction(){
    var vpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var vmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail = document.getElementById("mailreg").value;
    var pass = document.getElementById("pswreg").value;
    var user = document.getElementById("username").value;
    if (user==""){
        alert("Please do not leave blank!")
    }
    else if(!vmail.test(mail)){
        alert("Please enter a valid email address!")
    }
    else if(mail==""){
        alert("Please do not leave blank!")
    }
    else if(!vpass.test(pass)){
        alert("The password must be 6 to 20 characters and contain at least one numeric digit, one uppercase letter, and one lowercase letter!")
    }
    else if(pass==""){
        alert("Please do not leave blank")
    }
    else{
        alert("Thank you for signing up...!")
}
}