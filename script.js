const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1 , nav2 , nav3 , nav4 , nav5];

//Control animation navigation
function navAnimation(offscreen , onscreen) {
    navItems.forEach((nav , i) => {
       nav.classList.replace(`slide-${offscreen}-${i+1}` , `slide-${onscreen}-${i+1}`)
       console.log(`slide-${offscreen}-${i+1}` , `slide-${onscreen}-${i+1}`)
    });
};

function toggleNav () {
    // Toogle menuBars open/closed
    menuBars.classList.toggle('change');
    // toggle menu active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        //animate in nav-items
        navAnimation('out' , 'in');
    }else {
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        //animate out nav-items
       
        navAnimation('in' , 'out');
    }
};

//Events Listeners
menuBars.addEventListener('click' , toggleNav);
navItems.forEach((item) => {
    item.addEventListener('click' , toggleNav)
});
