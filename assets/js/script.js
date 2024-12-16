document.addEventListener('DOMContentLoaded', () => {
  const navTrigger = document.querySelector('.nav-trigger');
  const triggerDiv = document.querySelector('.trigger');

  navTrigger.addEventListener('click', () => {
    const isHidden = triggerDiv.style.display === 'none';

    // Toggle the visibility of the trigger
    if (isHidden) {
      triggerDiv.style.display = 'block';
    } else {
      triggerDiv.style.display = 'none';
    }
  });
});
