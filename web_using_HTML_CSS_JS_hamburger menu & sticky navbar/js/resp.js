burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');

// burger.addEventListener('click', () => {
//     navbar.classList.toggle('v-class-resp');
//     navList.classList.toggle('v-class-resp');
//     rightNav.classList.toggle('v-class-resp'); // Assuming you want to toggle the class on rightNav as well
//     navbar.classList.toggle('h-nav-resp');
// });


burger.addEventListener('click', () => {
    console.log('Burger clicked'); // Add this line for debugging
    navbar.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});
