const form = document.querySelector('form');

const name = document.getElementById('name');
const nameInput = form.querySelector('input[name=name]');
nameInput.addEventListener('input', () => {
const nameValue = nameInput.value;
nameInput.textContent = nameValue;
});

const surname = document.getElementById('surname');
const surnameInput = form.querySelector('input[surname=surname]');
surnameInput.addEventListener('input', () => {
const surnameValue = surnameInput.value;
surname.textContent = surnameValue;
});
       
const email = document.getElementById('email');
const emailInput = form.querySelector('input[email=email]');
surnameInput.addEventListener('input', () => {
const emailValue = emailInput.value;
email.textContent = emailValue;
});

const dyscyplina_sportowa = form.querySelector('#dyscyplina_sporotwa');
const showHideSportInput = form.querySelector('#showHideSport');
showHideSportInput.addEventListener('change', function() {
dyscyplina_sportowa.hidden = showHideSportInput.checked;
});
