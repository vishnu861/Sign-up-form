const form = document.getElementById('form');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const first = form['firstname'].value;
    const last = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(first===''){
        addErrTo('firstname','First Name is required');
    }
    else{
        removeErrorFrom('firstname');
    }

    if(last===''){
        addErrTo('lastname','Last Name is required');
    }
    else{
        removeErrorFrom('lastname');
    }
    if(email===''){
        addErrTo('email','Email is required');
    }
   
    else if(isValid(email)){
        addErrTo('email','email is not valid');
    }
    else{
        removeErrorFrom('email');
    }
    if(password===''){
        addErrTo('password','Password is required');
    }
    else{
        removeErrorFrom('password');
    }
})

function addErrTo(field,message){
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.style.opacity = 1;
}


function isValid(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function removeErrorFrom(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
    const small = formControl.querySelector('small');
    small.style.opacity = 0;
}