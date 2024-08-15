function scrollToSectionOne() {
  const nextSection = document.getElementById('section-1');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

function checkHeaderHeight() {
  const header = document.getElementById('main-section');
  const downArrow = document.querySelector('.down-arrow');
  
  if (header.offsetHeight < window.innerHeight) {
    downArrow.classList.add('hidden');
  } else {
    downArrow.classList.remove('hidden');
  }
}

checkHeaderHeight();

window.addEventListener('scroll', checkHeaderHeight);

window.addEventListener('resize', checkHeaderHeight);
