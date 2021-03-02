function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove("blackScreen");
}

const modal = document.getElementById('modal');

const btnModal = document.querySelectorAll('.toggle-modal');
btnModal.forEach(button => {button.addEventListener('click', function () { modal.hidden = !modal.hidden; }, false);}
  );

function original() {
  console.log('Original');
}

function lsalted() {
  console.log('Lightly Salted');
}

function sandv() {
  console.log('Salt and Vinegar');
}

function bbq() {
  console.log('BBQ');
}

function scando() {
  console.log('Sour Cream and Onion');
}

function dillpickle() {
  console.log('Dill Pickle');
}

function candsc() {
  console.log('Cheddar and Sour Cream');
}

function flaminhot() {
  console.log('Flamin Hot');
}

function chilelimon() {
  console.log('Chile Limon');
}

function sandp() {
  console.log('Salt and Pepper');
}

function baked() {
  console.log('Baked');
}

function kettlecooked() {
  console.log('Kettle Cooked');
}