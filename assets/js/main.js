
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Navbar toggle animation
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        this.classList.toggle('active');
        this.classList.contains('active') ? this.setAttribute('aria-expanded', 'true') : this.setAttribute('aria-expanded', 'false');
    });
});

// Scroll animations
window.addEventListener('scroll', function() {
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight * 0.8) {
            element.classList.add('animated');
        }
    });
});
        // Scroll to Top
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
