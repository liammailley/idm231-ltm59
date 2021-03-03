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

// Sound Control



// userPicked, be sure to include modal.hidden = !modal.hidden

function userPicked(whichOne);
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'original':
      zDisplayObj.src = 'images/original.png';
      zTitleObj.innerHTML = 'ORIGINAL';
      zDateRangeObj.innerHTML = '##-Month to ##-Month';
      zMoreInfoObj.innerHTML = '<p>Original is cool I guess.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      bulletObj.play(); //CHANGE THIS TO UR AUDIO
      break;
    case 'lightlysalted':

  }


// Modal Controls

const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');

closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
  stopAllAudio();
});

// Link modal element/objects from DOM tree to JS

const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');