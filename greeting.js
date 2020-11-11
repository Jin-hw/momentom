const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currnetUser",
SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currnetUser = localStorage.getItem(USER_LS);
    if(currnetUser === null){

    }else{
        paintGreeting(currnetUser);
    }
}

function init(){
    loadName();
}

init();