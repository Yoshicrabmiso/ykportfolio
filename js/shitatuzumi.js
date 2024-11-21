document.addEventListener('DOMContentLoaded', () => {
  const introImage = document.querySelector('.intro-image');
  const fadeSections = document.querySelectorAll('.fade-section');

  // Fade in the intro image
  setTimeout(() => {
      introImage.classList.add('fade-in');
  }, 100);

  // After 2 seconds, fade out the intro image
  setTimeout(() => {
      introImage.classList.remove('fade-in');
      introImage.classList.add('fade-out');
  }, 2000);

  // Intersection observer to fade in/out the sections
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const section = entry.target;

          if (entry.isIntersecting) {
              section.classList.add('in-view');
          } else {
              section.classList.remove('in-view');
          }
      });
  }, {
      root: null,
      threshold: 0.5, // Trigger when 50% of the section is in view
      rootMargin: '0px 0px -50px 0px' // Adjust for better detection
  });

  // Observe each fade_section
  fadeSections.forEach(section => {
      observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('.scroll-paragraph');

  // Set up the intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); // Add the in-view class when element is in view
      } else {
        entry.target.classList.remove('in-view'); // Optional: Remove when out of view
      }
    });
  }, {
    root: null, // Use the browser viewport as the container
    threshold: 0.2 // Trigger when 10% of the paragraph is visible
  });

  // Observe each paragraph
  paragraphs.forEach(paragraph => {
    observer.observe(paragraph);
  });
});
