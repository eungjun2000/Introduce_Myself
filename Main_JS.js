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

/*----------------------------- Lottie animation -----------------------------*/

/*------------------- Start part -------------------*/
var start_animation = bodymovin.loadAnimation({
    container: document.querySelector('.start_span'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'Start_anim.json'
})

let start_block = document.getElementById("block_5");
let start_updown = document.getElementById("start");

start_block.onmouseover = function(){
    start_updown.style.transform = "translateY(-30px)";
}
start_block.onmouseout = function(){
    start_updown.style.transform = "translateY(0)";
}

/*------------------- Birth part -------------------*/
var birth_animation = bodymovin.loadAnimation({
    container: document.querySelector('.birth_span'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Birth_anim.json'
});

let birth_block = document.getElementById("block_6");
let birth_updown = document.getElementById("birth");

birth_block.onmouseover = function(){
    birth_updown.style.transform = "translateY(-30px)";
    birth_animation.playSegments([0,90], true);
}
birth_block.onmouseout = function(){
    birth_updown.style.transform = "translateY(0)";
    birth_animation.playSegments([20,0], true);
}

/*------------------ Academic background part ------------------*/
var arcademic_background_animation = bodymovin.loadAnimation({
    container: document.querySelector('.academic_background_span'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Academic_background_anim.json'
});

let academic_background_block = document.getElementById("block_8");
let academic_background_updown = document.getElementById("academic_background");

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

/*------------------ Introducing myself part ------------------*/
/*
var introducing_myself_animation = bodymovin.loadAnimation({
    container: document.querySelector('.introducing_myself_span'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    //path: 'Introducing_anim.json'
})

let introducing_myself_block = document.getElementById("block_7");
let introducing_myself_updown = document.getElementById("introducing_myself");

introducing_myself_block.onmouseover = function(){
    introducing_myself_updown.transform = "translate(-30px)";
    introducing_myself_animation.playSegments([0,0], true);
}
introducing_myself_animation.onmouseout = function(){
    introducing_myself_updown.transform = "translate(0)";
    introducing_myself_animation.playSegments([0,0], true);
}*/

/*------------------- License part -------------------*/
var license_animation = bodymovin.loadAnimation({
    container: document.querySelector('.license_span'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'License_anim.json'
});

let license_block = document.getElementById("block_4");
let license_updown = document.getElementById("license");

license_block.onmouseover = function(){
    license_updown.style.transform = "translateY(-30px)";
    license_animation.playSegments([0,160], true);
}
license_block.onmouseout = function(){
    license_updown.style.transform = "translateY(0)";
    license_animation.playSegments([25,0], true);
}

/*------------------- Project part -------------------*/
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

/*------------------- Career part --------------------*/
var career_animation = bodymovin.loadAnimation({
    container: document.querySelector('.career_span'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path : 'Career_anim.json'
})

let career_block = document.getElementById("block");
let career_updown = document.getElementById("career");

career_block.onmouseover = function(){
    career_updown.style.transform = "translateY(-30px)";
    career_animation.playSegments([0,130], true);
}
career_block.onmouseout = function(){
    career_updown.style.transform = "translateY(0)";
    career_animation.playSegments([20,0], true);
}

/*------------------- Etc part -------------------*/
var etc_animation = bodymovin.loadAnimation({
    container: document.querySelector('.etc_span'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Etc_anim.json'
})

let etc_block = document.getElementById("block_2");
let etc_updown = document.getElementById("etc");

etc_block.onmouseover = function(){
    etc_updown.style.transform = "translateY(-30px)";
    etc_animation.playSegments([0,270], true);
}
etc_block.onmouseout = function(){
    etc_updown.style.transform = "translateY(0)";
    etc_animation.playSegments([100,20], true);
}