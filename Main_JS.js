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

/* Lottie animation */
var project_file_image_anim = bodymovin.loadAnimation({
    container: document.querySelector('.project_file'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Project_file_image.json'
});

let project_block = document.getElementById("block_3");
let project_file_updown = document.getElementById("project");

project_block.addEventListener('mouseover', () => {
    project_block.onmouseover = function(){
        project_file_updown.style.transform = "translateY(-30px)";
    }
    project_file_image_anim.playSegments([0,69], true);
})
project_block.addEventListener('mouseout', () => {
    project_block.onmouseout = function(){
        project_file_updown.style.transform = "translateY(0)";
    }
})