const accordion = document.querySelector('.faq-accordion-container');
const items     = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.faq-question');

function toggleFaqAccordion() {
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('default-faq-open');
      return;
    }

    item.classList.remove('default-faq-open');
  });
}

questions.forEach(question => question.addEventListener('click', toggleFaqAccordion));
