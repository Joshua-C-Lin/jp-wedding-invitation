function scrollToSectionOne() {
  const nextSection = document.getElementById('section-1');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

function checkHeaderHeight() {
  const header = document.getElementById('main-section');
  const downArrow = document.querySelector('.down-arrow');
  
  // 检查 header 的高度是否小于 100vh
  if (header.offsetHeight < window.innerHeight) {
    downArrow.classList.add('hidden');
  } else {
    downArrow.classList.remove('hidden');
  }
}

function adjustHeaderHeight() {
  const mainSection = document.getElementById('main-section');
  const viewportHeight = window.innerHeight;

  mainSection.style.height = `${viewportHeight}px`;
  
  checkHeaderHeight();
}

window.addEventListener('load', adjustHeaderHeight);

window.addEventListener('scroll', checkHeaderHeight);

window.addEventListener('resize', adjustHeaderHeight);
