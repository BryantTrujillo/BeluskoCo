let nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 177) {
        nav.classList.add('bg-light', 'shadow');
    } else {
        nav.classList.remove('bg-light', 'shadow');
    }
});