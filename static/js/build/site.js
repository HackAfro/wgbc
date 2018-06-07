/**
 * Created by Afro on 1/17/2018.
 */
import jump from 'jump.js';

(function() {
  'use strict';

  const navItems = [...document.querySelectorAll('.nav-item')]; // Get all the nav items
  const downButton = [...document.querySelectorAll('.js-down-button')];
  const tabs = [...document.querySelectorAll('.tab')];
  const tabDetails = [...document.querySelectorAll('.tab-body')];
  const nav = document.querySelector('.dropdown-nav');
  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', toggleNav);

  // Expandable menu displayed on mobile. Function to toggle visibility
  function toggleNav() {
    if (nav.classList.contains('hide')) {
      nav.classList.remove('hide');
      nav.classList.add('reveal');
    } else {
      nav.classList.remove('reveal');
      nav.classList.add('hide');
    }
  }

  const smoothScroll = (e) => {
    const el = e.target;
    const scrollTarget = el.dataset.target;
    const offset = parseInt(el.dataset.offset);
    jump(scrollTarget, {
      duration: 1000,
      offset,
    });
  };

  // Scroll to target
  downButton.forEach((button) =>
    button.addEventListener('click', smoothScroll)
  );

  // Get the href string without the forward slashes
  const stripSlashes = (href) => {
    if (typeof href !== 'string') return; // if href isn't a string, return
    const hrefList = [...href]; // Spread the string to create a list
    return hrefList
      .filter((letter) => letter !== '/')
      .join('')
      .toLowerCase(); // filter all strings that isn't a forward slash then join the list and return
  };

  // Nav list active section
  try {
    const href = window.location.pathname; // Get the current relative url of the page;
    const pathStr = stripSlashes(href);
    const activeItem = navItems.find(
      (item) => stripSlashes(item.attributes.href.value) === pathStr
    ); // Iterate through navItems list and find navItem who's text matches pathStr
    activeItem.classList.add('active'); // if the element's href value matches path string, add the active class to it
  } catch (err) {
    console.log(err);
  }

  // Tab functionality
  function displayTabBody() {
    const { target } = this.dataset;
    tabs.forEach((tab) => tab.classList.remove('tab-active'));
    this.classList.add('tab-active');
    tabDetails.forEach((body) => {
      if (body.dataset.tab !== target) {
        body.classList.remove('body-active');
      } else {
        body.classList.add('body-active');
      }
    });
  }

  tabs.forEach((tab) => tab.addEventListener('click', displayTabBody));
})();
