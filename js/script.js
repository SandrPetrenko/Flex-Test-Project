const burger = document.querySelector('.nav-burger');

if (burger) {
    const menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', function (e) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
    });
}

