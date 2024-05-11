const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e)=> {
        console.log(e);
        console.log(e.target);
        body.style.backgroundColor = e.target.id;
    });
});