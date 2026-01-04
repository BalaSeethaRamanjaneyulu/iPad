/* 
   iPad 2 Smart Home Hub - Core Logic
   Compatible with ES5 (iOS 9.3.5)
*/

var currentApp = 'clock';
var viewport = document.getElementById('app-viewport');

/**
 * Loads a micro-app into the main viewport
 * @param {string} appName - The name of the app to load
 * @param {HTMLElement} navElement - The clicked navigation element
 */
function loadApp(appName, navElement) {
    if (currentApp === appName) return;

    // Update active class in sidebar
    var navItems = document.getElementsByClassName('nav-item');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].className = 'nav-item';
    }
    navElement.className = 'nav-item active';

    // Update viewport
    var appPath = 'apps/' + appName + '.html';
    
    // Special case for browser (we'll implement this later)
    if (appName === 'browser') {
        appPath = 'apps/browser.html';
    }

    viewport.src = appPath;
    currentApp = appName;

    // Add fade-in effect to the content area
    var content = document.getElementById('content');
    content.style.opacity = '0';
    setTimeout(function() {
        content.style.opacity = '1';
    }, 50);
}

// Ensure the iframe fits perfectly
window.addEventListener('resize', function() {
    // iPad 2 is fixed 1024x768, but this helps during local dev testing
    console.log('Viewport resized: ' + window.innerWidth + 'x' + window.innerHeight);
});

console.log('Premium Hub Shell Initialized');
