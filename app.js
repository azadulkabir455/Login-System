window.addEventListener('load', () => {
    this.sessionStorage.setItem("username", 'akash');
    this.sessionStorage.setItem("password", 'akash455');
})

let input = document.querySelectorAll('input');
let login = document.querySelector('#login');
let form = document.querySelector('form');

form.onsubmit = ()=> { 
    return false;
}

login.addEventListener("click", ()=> {
    if((input[0].value != "") && (input[1].value != "")){
        if((input[0].value == sessionStorage.getItem("username")) && (input[1].value == sessionStorage.getItem('password'))) {
            form.onsubmit = ()=> {
                return true;
            }
            document.cookie = "username"+input[0].value;
            document.cookie = "password"+input[1].value;
        }else {
            if(input[0].value != sessionStorage.getItem("username")) {
                input[0].nextElementSibling.innerHTML = "User name not match";
                setTimeout(()=> {
                    input[0].nextElementSibling.innerHTML = "";
                }, 2000);
            }
            if(input[1].value != sessionStorage.getItem("password")) {
                input[1].nextElementSibling.innerHTML = "Password not match";
                setTimeout(()=> {
                    input[1].nextElementSibling.innerHTML = "";
                }, 2000);
            }
        }
    }else {
        if(input[0].value == ''){
            input[0].nextElementSibling.innerHTML = "User name is emty";
            setTimeout(()=> {
                input[0].nextElementSibling.innerHTML = "";
            }, 2000);
        }
        if(input[1].value == ''){
            input[1].nextElementSibling.innerHTML = "Password name is emty";
            setTimeout(()=> {
                input[1].nextElementSibling.innerHTML = "";
            }, 2000);
        }
    }
})