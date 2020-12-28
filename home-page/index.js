// Show/Hide teammates
const showTeammates = document.querySelector('#show_teammates');
const hiddenTeammates = document.querySelectorAll('div.hidden');

let counter = 0;
showTeammates.addEventListener('click', function () {
    if (counter == 0) {
        hiddenTeammates.forEach((hiddenTeammate) => {
            hiddenTeammate.classList.remove('hidden');
            showTeammates.textContent = 'Hide teammates';
        });
        counter++;
    } else if (counter == 1) {
        hiddenTeammates.forEach((hiddenTeammate) => {
            hiddenTeammate.classList.add('hidden');
            showTeammates.textContent = 'Show teammates';
            counter = 0;
        });
    }

});

// Show/Hide Q&A
const firstQuestion = document.querySelectorAll('a.question')[0];
const secondQuestion = document.querySelectorAll('a.question')[1];
const thirdQuestion = document.querySelectorAll('a.question')[2];
const fourthQuestion = document.querySelectorAll('a.question')[3];

let firstCounter = 0;
let secondCounter = 0;
let thirdCounter = 0;
let fourthCounter = 0;

firstQuestion.addEventListener('click', (e) => {
    const answer = e.target.nextElementSibling;
    if (firstCounter == 0) {
        answer.classList.remove('hidden');
    } else {
        answer.classList.add('hidden');
        firstCounter = 0;
    }

    firstCounter++;
});

secondQuestion.addEventListener('click', (e) => {
    const answer = e.target.nextElementSibling;
    if (secondCounter == 0) {
        answer.classList.remove('hidden');
    } else {
        answer.classList.add('hidden');
        secondCounter = 0;
    }

    secondCounter++;
});

thirdQuestion.addEventListener('click', (e) => {
    const answer = e.target.nextElementSibling;
    if (thirdCounter == 0) {
        answer.classList.remove('hidden');
    } else {
        answer.classList.add('hidden');
        thirdCounter = 0;
    }

    thirdCounter++;
});

fourthQuestion.addEventListener('click', (e) => {
    const answer = e.target.nextElementSibling;
    if (fourthCounter == 0) {
        answer.classList.remove('hidden');
    } else {
        answer.classList.add('hidden');
        fourthCounter = 0;
    }

    fourthCounter++;
});
