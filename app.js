/**
 * iPad Hub "Continuity" Controller
 * Fully responsive logic for adaptive layouts
 */

function updateClock() {
    var clock = document.getElementById('clock');
    var now = new Date();
    clock.innerText = now.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

function openApp(slug, name) {
    var winSystem = document.getElementById('window-system');
    var iframe = document.getElementById('iframe');
    var title = document.getElementById('win-title');

    title.innerText = name;
    iframe.src = 'apps/' + slug + '.html';

    winSystem.style.display = 'flex';
    setTimeout(function () {
        winSystem.classList.add('active');
    }, 10);
}

function closeApp() {
    var winSystem = document.getElementById('window-system');
    winSystem.classList.remove('active');
    setTimeout(function () {
        winSystem.style.display = 'none';
        document.getElementById('iframe').src = '';
    }, 400);
}

// Global Handlers
setInterval(updateClock, 1000);
updateClock();

// Prevent iPad browser drag/bounce behaviors
document.addEventListener('touchmove', function (e) {
    if (e.target.id === 'desktop' || e.target.id === 'dock') {
        e.preventDefault();
    }
}, { passive: false });
