

// ocument.addEventListener("DOMContentLoaded", function() {

document.addEventListener('DOMContentLoaded',function(){

var index=1;

setInterval(()=>{
    document.getElementById('radio'+index).checked=true;
    index++;
    if(index>4){
        index=1
    }
},5000)

})

