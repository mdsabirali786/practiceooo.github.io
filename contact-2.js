var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messgeError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'Phone no Should be 10 digit';
        return false;
    }  

    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only Digits Please';
        return false;
    }
    
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {

    var email = document.getElementById('email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Indvalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0) {
        messgeError.innerHTML = left + 'more character is required';
        return false;
    }
    messgeError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display ='block';
        submitError.innerHTML = 'Please fix the error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}

 