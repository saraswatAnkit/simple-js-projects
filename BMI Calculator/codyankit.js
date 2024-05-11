const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
 e.preventDefault();
const height = parseInt(document.querySelector('.input-height').value);
const weight = parseInt(document.querySelector('.input-height').value);
const result = document.querySelector('.result');

if(height === '' || height <= 0 || isNaN(height)){
    result.style.color = 'red';
    result.innerText = `please give a valid height ${height}`;
}
else if(weight === '' || weight <= 0 || isNaN(weight)){
    result.style.color = 'red';
    result.innerText = `please give a valid weight ${weight}`;
}
else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    result.style.color = 'green';
    result.style.fontSize = '2.5rem'
    result.innerHTML = `${bmi}`
}
})
document.getElementById('clear').addEventListener('click', ()=>{
    location.reload()
})