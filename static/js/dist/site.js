'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by Afro on 1/17/2018.
 */
// import jump from 'jump.js';

(function () {
    'use strict';

    var navItems = [].concat(_toConsumableArray(document.querySelectorAll('.nav-item'))); // Get all the nav items


    // Get the href string without the forward slashes
    var stripSlashes = function stripSlashes(href) {
        if (typeof href !== "string") return; // if href isn't a string, return
        var hrefList = [].concat(_toConsumableArray(href)); // Spread the string to create a list
        return hrefList.filter(function (letter) {
            return letter !== '/';
        }).join('').toLowerCase(); // filter all string that isn't a forward slash then join the list and return
    };

    try {
        var href = window.location.pathname; // Get the current relative url of the page;
        var pathStr = stripSlashes(href);
        var activeItem = navItems.find(function (item) {
            return stripSlashes(item.attributes.href.value) === pathStr;
        }); // Iterate through navItems list and find navItem who's text matches pathStr
        activeItem.classList.add('active'); // if the element's href value matches path string, add the active class to it
    } catch (err) {
        console.log(err);
    }
})();
//# sourceMappingURL=site.js.map
