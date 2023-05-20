const buttonContainer = document.getElementById("Sec-1-Btn");
const button = buttonContainer.getElementsByClassName("sec1Btn");
button[0].classList.toggle("active");
let previousbtn = null;
for(let i = 0 ; i<button.length;i++){
    button[i].addEventListener('click',function(){
        button[0].classList.remove("active");
        if(previousbtn){
            previousbtn.classList.remove("active");
        }
        this.classList.toggle("active");
        previousbtn=this;
    })
}