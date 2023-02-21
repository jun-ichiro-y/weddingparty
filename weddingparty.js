'use strict'

// const h1 = document.getElementsByTagName("h2");
// console.log(h1);

function buttonClick(){
    const textbox = document.getElementById("textbox");
    const h2s = document.getElementsByTagName("h2");
    h2s[0].innerText = "";
    console.log(h2s[0].innerText);
    for (let i=0;i< textbox.value;i++){
        h2s[0].innerText = h2s[0].innerText + "🍔"

    }
}

const button = document.getElementsByClassName("gator-button");
console.log(button);

button[0].addEventListener("click",buttonClick);
