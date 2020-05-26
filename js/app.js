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

// Scroll to section on link click

// Set sections as active


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
