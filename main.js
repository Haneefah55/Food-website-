const navbar = document.querySelector('.nav');
const closed = document.querySelector('.close-icon');
const menu = document.querySelector('.menu-icon');


document.querySelector('.menu-icon').onclick = () => {

    navbar.style.display = 'flex';
    closed.style.display = 'block';


};

document.querySelector('.close-icon').onclick = () => {
    navbar.style.display = 'none';
    closed.style.display = 'none';
}


// get signup-box

const signUpBx = document.querySelector('.signup-box');

//get login-box

const loginBx = document.querySelector('.login-box');

//get signup btn
const signUpBtn = document.querySelector('.signup');

//get login btn

const loginBtn = document.querySelector('.login-btn');

// get close signup btn

const closeSignUpBtn = document.querySelector('#close-signup');

// get close login btn

const closeLoginBtn = document.querySelector('#close-login');


// show sign up box when sign up btn is clicked


// close sign up box when close btn is clicked


// show login box when login btn is clicke



const header = document.querySelector("header");
window.addEventListener ('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});


//set Date
const date = new Date();
const year = date.getFullYear();

const dateLable = document.getElementById("date");
dateLable.textContent = year - 1;