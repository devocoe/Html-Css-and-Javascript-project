let randomNumber1 = Math.floor(Math.random()*6+1);
let randomNumber2 = Math.floor(Math.random()*6+1);


const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const result = document.querySelector('.result');

img1.src = `images/${randomNumber1}.png`
img2.src = `images/${randomNumber2}.png`

if(randomNumber1>randomNumber2){
    result.innerHTML = "Player 1 wins"
}
else{
    result.innerHTML = "Player 2 wins"
}