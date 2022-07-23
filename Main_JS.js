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

/*------------------------------- Lottie animation -------------------------------*/

/* Birth part */

/* Code */

/* Project part */
var project_animation = bodymovin.loadAnimation({
    container: document.querySelector('.project_span'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Project_anim.json'
});

let project_block = document.getElementById("block_3");
let project_updown = document.getElementById("project");

project_block.onmouseover = function(){
    project_updown.style.transform = "translateY(-30px)";
    project_animation.playSegments([0,69], true);
}
project_block.onmouseout = function(){
    project_updown.style.transform = "translateY(0)";
}

/* Academic background part */
var arcademic_background_animation = bodymovin.loadAnimation({
    container: document.querySelector('.academic_background_span'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Academic_background_anim.json'
});

let academic_background_block = document.getElementById("block_8");
let academic_background_updown = document.getElementById("academic_background");
var count = 0;

academic_background_block.onmouseover = function(){
    academic_background_updown.style.transform = "translateY(-30px)";
    arcademic_background_animation.playSegments([0,69], true);
    
    arcademic_background_animation.onComplete = function(){
        arcademic_background_animation.playSegments([30,68], true);
    }
}
academic_background_block.onmouseout = function(){
    academic_background_updown.style.transform = "translateY(0)";
    arcademic_background_animation.playSegments([10,0], true);
    arcademic_background_animation.onComplete = function(){
        arcademic_background_animation.stop();
    }
}