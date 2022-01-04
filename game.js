let character = document.getElementById('character');
let block = document.getElementById('block');
let game= document.querySelector('#game');
let score = 0;
let gameover = document.querySelector('#gameover');
let btn = document.querySelector('#btn');
let fechar = document.querySelector('.closed');


function jump(){

    if(character.classList != 'animate'){
       character.classList.add('animate');
     }

    setTimeout(()=> {
         character.classList.remove('animate');
    },500);

}


let checkdDeath = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

    if( blockLeft < 20 && blockLeft > 0 && characterTop >= 115 ){
         block.style.animation = "none";
         gameover.style.display = 'block';
      }
    
    else if( characterTop == 100 && blockLeft == 8) {
        score++
        document.querySelector('#score').innerHTML = score;
      }}, 10)


    
    game.addEventListener('click', jump);

    btn.addEventListener('click', () => {
      window.location.reload();
    });

    fechar.addEventListener('click', () => {
       gameover.style.display = 'none';
    });