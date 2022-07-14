let menu_btn = document.querySelector('.menu_button');
let navigation_menu = document.querySelector('.navigation_menu');
let blur = document.getElementById('main_background');
let menu_clicked = false;

menu_btn.addEventListener('click', () => {
    if(!menu_clicked){
        menu_btn.classList.add('rotate');
        navigation_menu.classList.add('show');
        menu_clicked = true;
    }else{
        menu_btn.classList.remove('rotate');
        navigation_menu.classList.remove('show');
        menu_clicked = false;
    }
});

menu_btn.addEventListener('click', () => {
    blur.classList.toggle('blur_main');
})