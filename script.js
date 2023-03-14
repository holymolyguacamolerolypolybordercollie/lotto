const startBtn = document.querySelector(".start");
const div_numbers = document.querySelectorAll(".numbers");
const div_header = document.querySelector(".header");
const div_main = document.querySelector(".main-numbers");
const colors = ["red","orange","#d0b336","green","blue","purple","magenta"]

const num1to45 = [];
const luckyNumbers = [];

for (i = 0; i<45; i++){
    num1to45.push(i+1)
}

for(j=0; j<7; j++){
    const randomInt = parseInt(Math.floor(Math.random() * num1to45.length));
    
    luckyNumbers.push(num1to45[randomInt]);
    num1to45.splice(num1to45[randomInt],1);

}


startBtn.addEventListener("click",printNumbers);

function printNumbers(){
    div_header.classList.add("hidden");
    div_main.classList.remove("hidden");
    for(i=0;i<7;i++){
        div_numbers[i].innerText = luckyNumbers[i];
        div_numbers[i].style.backgroundColor = colors[i];
    }

}

