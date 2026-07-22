// Mobile Menu Toggle
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Current Year for Footer
const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// FAQ Accordion Interaction
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    const answer = faqItem.querySelector('.faq-answer');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach((item) => {
      item.classList.remove('active');
      item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      const itemAnswer = item.querySelector('.faq-answer');
      if (itemAnswer) {
        itemAnswer.style.maxHeight = null;
      }
    });

    // Toggle current FAQ item
    if (!isActive) {
      faqItem.classList.add('active');
      question.setAttribute('aria-expanded', 'true');
      if (answer) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    }
  });
});
