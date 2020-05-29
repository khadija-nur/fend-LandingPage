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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section onnavlinknk click

// Set sections as active

// add navbar dynamically
(function () {
const navbarList = document.getElementById("navbar__list");
const sections = (document.querySelectorAll("section"));
let navlink;
    for (var i = 1; i<=sections.length; i++){
        navlink= document.createElement("li");
        const a = document.createElement("a");
        const navlinkText = "section "+i;
        a.append(navlinkText)
        a.setAttribute("href", `#${"section"+i}`);
        navlink.append(a);
        navbarList.append(navlink);
        navlink.classList.add("menu__link")
    }

navlink.classList.add("menu__link")
})();


// use intersection observer to add active-class to sections when they are in view 

(function active_nav (){
    let mainNavLinks = Array.from(document.querySelectorAll("nav ul li a"));

    window.addEventListener("scroll", event =>{
    // find the distance of the scroll bar from top of page 
    
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        // let section = Array.from(document.querySelectorAll("section"))
        let section = document.querySelector(link.hash);
        console.log(link)
        console.log("fromtop = " + fromTop)
        console.log("section.offsetTop = " + section.offsetTop);
        console.log("section.offsetTop  + section.offsettHeight = " + (section.offsetTop  + section.offsetHeight));
        if(section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop){
            link.classList.add("your-active-class");
        }
        else{
            link.classList.remove("your-active-class");
        }
    });
})
})();



