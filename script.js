const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repeatpass = document.getElementById('repeat-pass')
const form = document.getElementById('form')

form.addEventListener('submit', e =>{
    e.preventDefault();
    checkforinputs();

})

function checkforinputs(){

    const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    const password2Value = repeatpass.value.trim();
    
    if(usernameValue === ''){
        setErrorFor(username, 'Username is a required field');
    }
    else{
        setSuccessFor(username);
    }
  

    if(emailValue === ''){
        setErrorFor(email, 'Email is a required field');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Not Valid');
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password is a required field');
    }
    else{
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(repeatpass, 'Please, repeat the password!');
    }
    else if(password2Value !== passwordValue){
        setErrorFor(repeatpass, 'Passwords do not match!');
    }
    else{
        setSuccessFor(repeatpass);
    }


}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}