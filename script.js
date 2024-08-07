document.querySelectorAll('.gift-card').forEach(card => {
    card.addEventListener('click', function() {
        const code = this.getAttribute('data-code');
        const redirectUrl = this.getAttribute('data-url');
        window.location.href = `generate.html?code=${encodeURIComponent(code)}&url=${encodeURIComponent(redirectUrl)}`;
    });
});