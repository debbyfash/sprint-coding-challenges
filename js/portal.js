const btn = document.querySelector("#btn");
const date = document.querySelector("#date");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const pass = document.querySelector("#pass");
const Confirm = document.querySelector("#Confirm");

date.addEventListener("blur", validateDate);
function validateDate(){
    let dob = date.value;
    let pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[01])[/](0[1-9]|1[0-2])[/][12][90][0-9]{1}[0-9]{1}$/;
    if (pattern.test(dob)){
        displayDate.innerHTML ="valid";
    }else{
        displayDate.innerHTML= "Invalid date of birth";
    }
}

email.addEventListener("blur", validateEmail);
function validateEmail(){
    let mail = email.value;
    let pattern = /^[a-z0-9_.]+@[a-z0-9-]+\.[a-z]{2,6}$/;
    if (pattern.test(mail)){
        displayEmail.innerHTML = "valid";
    }else{
        displayEmail.innerHTML = "Invalid Email";
    }
}

tel.addEventListener("blur", validateTel);
function validateTel(){
    let phoneNo = tel.value;
    let pattern = /^0[789][01][0-9]{8}$/;
    
    if (pattern.test(phoneNo)) {
        let formattedPhoneNo = phoneNo.replace("0", "+234");
        tel.value = formattedPhoneNo;
    } else {
         console.log("no")
    }
}

pass.addEventListener("blur", validatePass);
function validatePass(){
    let Password = pass.value;
    let pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
    if (pattern.test(Password)){
        displayPass.innerHTML = "valid";
    }else{
        displayPass.innerHTML = "Invalid Password";
    }
}

Confirm.addEventListener("blur", validateConfirm);
function validateConfirm(){
    let confirm = pass.value;
    let pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
    if (pattern.test(confirm)){
        displayPass.innerHTML = "valid";
    }else{
        displayPass.innerHTML = "Invalid Password";
    }
}