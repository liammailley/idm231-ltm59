function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove("blackScreen");
}

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

/* Modal Code */


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}