let body = document.getElementsByTagName("BODY")[0];
let themeBtn = document.getElementById("themeImg");
themeBtn.addEventListener('click',function(){
    body.classList.toggle("darktheme");
    if(body.classList.contains("darktheme")){

        themeBtn.src ="assests/sun.png"
        document.getElementById("navbar").style.backgroundColor="black";
    }
    else{
        themeBtn.src ="assests/moon.png"
        document.getElementById("navbar").style.backgroundColor="white";
        document.body.style.transition="1s"
    }

})
