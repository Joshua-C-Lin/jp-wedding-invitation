function scrollToSectionOne() {
  const nextSection = document.getElementById('section-1');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

function checkHeaderHeight() {
  const header = document.getElementById('main-section');
  const downArrow = document.querySelector('.down-arrow');
  
  if (window.scrollY > 0) {
    header.classList.add('shrunk');
    downArrow.classList.add('hidden');
  } else {
    header.classList.remove('shrunk');
    downArrow.classList.remove('hidden');
  }
}

window.addEventListener('load', checkHeaderHeight);
window.addEventListener('scroll', checkHeaderHeight);