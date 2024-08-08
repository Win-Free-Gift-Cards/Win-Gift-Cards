document.querySelectorAll('.gift-card').forEach(card => {
    card.addEventListener('click', function() {
        const code = this.getAttribute('data-code');
        const redirectUrl = this.getAttribute('data-url');
        window.open(`generate.html?code=${encodeURIComponent(code)}&url=${encodeURIComponent(redirectUrl)}`, '_blank');
    });
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
  const giftCards = document.querySelectorAll('.gift-card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: remove observer after element is visible
      }
    });
  }, {
    threshold: 0.1 // Adjust the threshold as needed
  });

  giftCards.forEach(card => {
    observer.observe(card);
  });
});