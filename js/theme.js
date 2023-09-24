let body = document.getElementsByTagName("BODY")[0];
let themeBtn = document.getElementById("themeImg");
themeBtn.addEventListener('click',function(){
    body.classList.toggle("darktheme");
    if(body.classList.contains("darktheme")){
        themeBtn.src ="assests/sunblack.png"
    }
    else{
        themeBtn.src ="assests/moon.png"
        document.body.style.transition="1s"
    }

})

function click() {
    const overlay = document.getElementById('overlay');
    console.log("Baby");
    overlay.style.display = overlay.style.display == "flex" ? "none": "flex";
  }
const loginButton = document.getElementById('loginButton');
const overlay = document.getElementById('overlay');

loginButton.addEventListener('click', () => {
  overlay.style.display = 'flex';
  console.log("Hello");
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});