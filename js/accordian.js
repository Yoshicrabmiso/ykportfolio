document.querySelectorAll('.faq-accordion-container').forEach(accordion => {
  const items = accordion.querySelectorAll('li');
  const questions = accordion.querySelectorAll('.faq-question');

  // Ensure all FAQ items are initially closed
  items.forEach(item => item.classList.remove('default-faq-open'));

  function toggleFaqAccordion() {
    const thisItem = this.parentNode;

    items.forEach(item => {
      if (thisItem === item) {
        // Toggle the clicked FAQ item
        thisItem.classList.toggle('default-faq-open');
      } else {
        // Close any other open FAQ items
        item.classList.remove('default-faq-open');
      }
    });
  }

  // Add click event listeners to all questions
  questions.forEach(question => question.addEventListener('click', toggleFaqAccordion));
});
