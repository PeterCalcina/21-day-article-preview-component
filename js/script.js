let share_btn = document.querySelector('.share');

share_btn.addEventListener('click', function() {
    let share_menu = document.querySelector('.share_options');

    if (share_menu.classList.contains('active')) {
        share_menu.classList.remove('active');
        share_menu.classList.add('inactive');
    } else {
        share_menu.classList.add('active');
        share_menu.classList.remove('inactive');
    }
});

let share_btn_mobile = document.querySelector('.share_mobile');

share_btn_mobile.addEventListener('click', function() {
    let share_menu = document.querySelector('.share_options_mobile');

    if (share_menu.classList.contains('active')) {
        share_menu.classList.remove('active');
        share_menu.classList.add('inactive');
        share_btn_mobile.classList.remove('active');
    } else {
        share_menu.classList.add('active');
        share_menu.classList.remove('inactive');
        share_btn_mobile.classList.add('active');
    }
});

window.addEventListener('click', function(e) {
    let share_menu = document.querySelector('.share_options');
    let share_menu_mobile = document.querySelector('.share_options_mobile');

    if (e.target != share_menu && e.target != share_btn && e.target != share_menu_mobile && e.target != share_btn_mobile) {
        if (share_menu.classList.contains('active')) {
            share_menu.classList.remove('active');
            share_menu.classList.add('inactive');
        }
        if (share_menu_mobile.classList.contains('active')) {
            share_menu_mobile.classList.remove('active');
            share_menu_mobile.classList.add('inactive');
            share_btn_mobile.classList.remove('active');
        }
    }
});