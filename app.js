/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

var mediaQuery = window.matchMedia('(min-width:600px)');
var pElement = document.getElementById('paragraph');
var imgElement = document.getElementById('imgTitle');


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */





/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */




// build the nav

function creatNav() {
    const navElement = document.createElement("nav");
    navElement.setAttribute('id', 'main-list');
    const ulElement = document.createElement("ul");
    const liContent = ["Web development", "Best cities in the world", "Dubai", "VR"];
    document.getElementById("navBar").appendChild(navElement);
    navElement.appendChild(ulElement);
    for (let i = 0; i < 4; i++) {
        const liElement = document.createElement("li");
        liElement.setAttribute('class', 'links');
        liElement.textContent = liContent[i];
        ulElement.appendChild(liElement);
    }
}


// Add class 'active' to section when near top of viewport

function active() {
    const boxElement = document.querySelectorAll('.box');
    const liElements = document.getElementById('navBar').querySelectorAll('li');
    const img = document.querySelectorAll('#imgTitle');
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };
    let callback = (changes, observer) => {
        changes.forEach(change => {
            if (change.isIntersecting){
                if (change.target.id === 'box1') {
                    liElements[0].classList.add('active');
                    img[0].style.opacity = 1;
                } else {
                    liElements[0].classList.remove('active');
                    img[0].style.opacity = 0.4;
                }
                if (change.target.id === 'box2') {
                    liElements[1].classList.add('active');
                    img[1].style.opacity = 1;
                } else {
                    liElements[1].classList.remove('active');
                    img[1].style.opacity = 0.4;
                }
                if (change.target.id === 'box3') {
                    liElements[2].classList.add('active');
                    img[2].style.opacity = 1;
                } else {
                    liElements[2].classList.remove('active');
                    img[2].style.opacity = 0.4;
                }

                if (change.target.id === 'box4') {
                    liElements[3].classList.add('active');
                    img[3].style.opacity = 1;
                } else {
                    liElements[3].classList.remove('active');
                    img[3].style.opacity = 0.4;
                }
            } else {
                liElements[0].classList.remove('active');
                img[0].style.opacity = 0.4;
            }
        });
    }

    let observer = new IntersectionObserver(callback, options);
    boxElement.forEach(box => {
        observer.observe(box);
    });

}

// Scroll to anchor ID using scrollTO event

function scrolTo() {
    const liElement = document.getElementById('navBar').querySelectorAll('li');
    if (mediaQuery.matches) {
        liElement[0].addEventListener('click', function scrolTo() {
            window.scrollTo(0, liElement[0].offsetTop + 720);
        });
        liElement[1].addEventListener('click', function scrolToo() {
            window.scrollTo(0, liElement[1].offsetTop + 1330);
        });
        liElement[2].addEventListener('click', function scrolToo() {
            window.scrollTo(0, liElement[2].offsetTop + 1950);
        });
        liElement[3].addEventListener('click', function scrolToo() {
            window.scrollTo(0, liElement[3].offsetTop + 2570);
        });
    } else {
        liElement[0].addEventListener('click', function scrolTo() {
            window.scrollTo(0, liElement[0].offsetTop + 720);
        });
        liElement[1].addEventListener('click', function scrolToo() {
            window.scrollTo(0, liElement[1].offsetTop + 1440);
        });
        liElement[2].addEventListener('click', function scrolToo() {
            window.scrollTo(0, liElement[2].offsetTop + 2160);
        });
        liElement[3].addEventListener('click', function scrolToo() {
            window.scrollTo(0, liElement[3].offsetTop + 2880);
        });
    }
}




/**
 * End Main Functions
 * Begin Events
 * 
 */
mediaQuery.addListener(scrolTo);
// Build menu 
creatNav();
// Scroll to section on link click
scrolTo();
// Set sections as active
active();