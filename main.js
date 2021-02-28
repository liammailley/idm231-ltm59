function fade2Content() {
    console.log('fade2Content called');
    document.body.classList.remove("blackScreen");
  }

const modal = document.getElementById('modal');

const btnModal = document.querySelectorAll('.toggle-modal');
btnModal.forEach(button => {
  button.addEventListener(
    'click',
    () => {
      modal.hidden = !modal.hidden;
    },
    false
  );
});