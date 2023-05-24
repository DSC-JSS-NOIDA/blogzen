const buttonContainer = document.getElementById("Sec-1-Btn");
const button = buttonContainer.getElementsByClassName("sec1Btn");
const Word = buttonContainer.getElementsByTagName("a");
button[0].classList.toggle("active");
Word[0].classList.toggle("WordActive");
let previousbtn = null;
let previousWord = null;
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        Word[0].classList.remove("WordActive");
        button[0].classList.remove("active");
        if (previousbtn) {
            previousbtn.classList.remove("active");
            previousWord.classList.remove("WordActive");
        }
        this.classList.toggle("active");
        Word[i].classList.toggle("WordActive");
        previousWord=Word[i];
        previousbtn = this;
    })
}


