const likeButtons = document.querySelectorAll('.post-actions button:first-of-type');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.color = button.style.color === 'blue' ? 'initial' : 'blue';
  });
});
