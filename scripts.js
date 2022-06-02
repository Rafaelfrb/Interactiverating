const button = document.querySelector('.button');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const ratingButton = document.querySelectorAll('.rating');
const scoreresult = document.querySelector('.scoreresult');
let score = 3; //default starting score

button.addEventListener('click', onSubmit);

ratingButton.forEach( button => {
    button.addEventListener('click', ratingButtonClick)
});

function onSubmit() {
    container.classList.add('hide');
    scoreresult.textContent = score;
    container2.classList.remove('hide');
}

function ratingButtonClick(event) {
    ratingButton.forEach( button => {
        button.classList.remove('active')
    })
    event.target.classList.add('active');
    score = event.target.textContent;
};
