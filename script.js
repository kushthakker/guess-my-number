/* 'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

// Value : This property is used the find the value of an element
document.querySelector('.guess').value = 22;

// to get the value of the input field or fetch the written thing in input field
console.log(document.querySelector('.guess').value);

 */

//                              Guess my number project

// creating a random number from 1 to 20
let number = Math.trunc(Math.random() * 20) + 1; // math.random() will genrate number from 0 to 1. so if we need till 20 then we do this 'math.random() * 20' to achive from 0-20.
// Now that number will have decimal value so to remove it we use math.trunc but it will be from 0 - 19 so we need to add one to make it from 1-20.

// document.querySelector('.number').textContent = number;

// creatinga a score

let score = 20; // it's better practice to inclue this type of things inside our js application rather then calling it from html using querry selector becuase changing html is easy on user end.
let originalScore = 20;
// HAndling CLick events

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // by default the value is stored in terms of string so we need to convert it
  if (!guess) {
    // it means if guess has a falsy value then it will run
    document.querySelector('.message').textContent = '❌ No Number';

    // when player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = number;

    //manipulating css using dom
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when guess iis not equal to number
  } else if (guess !== number) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > number ? '📈 To high' : '📉 To low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost';
    }
  }
});

// Reseting whole game on pressing again button
let previousscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  // console.log(previousscore, score);
  if (score >= previousscore) {
    document.querySelector('.highscore').textContent = score;
    previousscore = score;
  }
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = originalScore;
  score = originalScore;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  // console.log(previousscore, score);
});
