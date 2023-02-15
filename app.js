'use strict';

const guessBtn = document.querySelector('#guess-btn'),
      restartBtn = document.querySelector('#restart-btn'),
      guessMessage = document.querySelector('#guess-message'),
      guessNumberBox = document.querySelector('#guess-number-box');

let   pointsContent = 20,
      points = document.querySelector('#points'),
      best = document.querySelector('#best'),
      bestScore = 0,
      guessNumber = Math.floor(Math.random() * 101);

function guessNum() {
    let inputValue = document.querySelector('#guess-input').value;

    guessMessage.style.display = 'block';

    if (!inputValue) {
        guessMessage.textContent = 'Please, enter the number!';
    } else if (inputValue < 0 || inputValue > 100) {
        guessMessage.textContent = 'Please, enter the number between 0 and 100!';
    } else {
        pointsContent --;
        points.textContent = pointsContent;
        
        if (pointsContent == 0) {
            guessMessage.textContent = 'GAME OVER!';
            guessBtn.disabled = true;
        } else {
            if (inputValue < guessNumber) {
                guessMessage.textContent = 'Please, enter a greater number!';
            } else if (inputValue > guessNumber) {
                guessMessage.textContent = 'Please, enter a lower number!';
            } else {

                guessMessage.textContent = `Congratulation!!! It was ${guessNumber}`;
                guessNumberBox.textContent = guessNumber;
                guessBtn.disabled = true;
                
                if (pointsContent > bestScore) {
                    bestScore = pointsContent;
                    best.textContent = pointsContent;
                }
                
            }
        }
    }
}

function clear() {
    document.querySelector('#guess-input').value = '';
    guessMessage.textContent = '';
    guessMessage.style.display = 'none';
    guessNumberBox.textContent = '???';
    guessNumber = Math.floor(Math.random() * 101);
    points.textContent = '20';
    pointsContent = 20;
    guessBtn.disabled = false;
}

guessBtn.addEventListener('click', () => guessNum());
restartBtn.addEventListener('click', () => clear());

