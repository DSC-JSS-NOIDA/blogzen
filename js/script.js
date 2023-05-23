let navBar = document.querySelector('.navbar');
let darkMode = document.querySelector('#dark-mode-icon');
let body = document.body;

darkMode.addEventListener('click', () =>{
    navBar.classList.toggle('dark-nav');
    body.classList.toggle('dark-mode');
});
