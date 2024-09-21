/*
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            document.body.style.backgroundColor = button.id;
        });
    });
});
*/


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//buttons.forEach(function (button) {
buttons.forEach((button) => {
    console.log(button);
    // button.addEventListener('click', function (e) {
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'gray') { // Use '===' for comparison
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
    });
});

