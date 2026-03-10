document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.menu-toggle');
    var sidebar = document.querySelector('.sidebar');
    if (toggle && sidebar) {
        toggle.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
        document.querySelector('.main').addEventListener('click', function () {
            sidebar.classList.remove('open');
        });
    }

    var current = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.sidebar nav a');
    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        if (href === current || (current === 'index.html' && href === 'index.html')) {
            links[i].classList.add('active');
        }
    }
});
