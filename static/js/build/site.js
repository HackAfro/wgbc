/**
 * Created by Afro on 1/17/2018.
 */
import jump from 'jump.js';

(function () {
    'use strict';

    const navItems = [...document.querySelectorAll('.nav-item')]; // Get all the nav items
    const downButton = [... document.querySelectorAll('.js-down-button')];

    
    const smoothScroll = (e) => {
        const el = e.target;
        const scrollTarget = el.dataset.target;
        const offset = parseInt(el.dataset.offset);
        jump(scrollTarget, {
            duration: 1000,
            offset
        })
    }
    
    downButton.forEach(button => button.addEventListener('click', smoothScroll))


    // Get the href string without the forward slashes
    const stripSlashes = href => {
        if (typeof href !== "string") return;  // if href isn't a string, return
        const hrefList = [...href]; // Spread the string to create a list
        return hrefList.filter(letter => letter !== '/').join('').toLowerCase(); // filter all string that isn't a forward slash then join the list and return
    };

    try {
        const href = window.location.pathname; // Get the current relative url of the page;
        const pathStr = stripSlashes(href);
        const activeItem = navItems.find(item => stripSlashes(item.attributes.href.value) === pathStr); // Iterate through navItems list and find navItem who's text matches pathStr
        activeItem.classList.add('active');  // if the element's href value matches path string, add the active class to it
        
    } catch (err) {
        console.log(err)
    }


})();
