function scrollToSectionOne() {
  const nextSection = document.getElementById('section-1');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('#main-section, #section-1, #section-2');

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
