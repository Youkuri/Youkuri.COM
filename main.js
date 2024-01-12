function changeTab(tab) {
    tab = tab.toLowerCase()
    var frames = document.querySelectorAll('.tab-content');
    var currentFrame = document.querySelector('#home');

    frames.forEach(frame => {
        frame.style.display = 'none';
        frame.classList.remove('active');
        if ( tab.search( frame.id ) > 0 ) {
            currentFrame = frame;
        }
    });

    window.location.href = tab

    currentFrame.style.display = 'flex';
    currentFrame.classList.add('active');

    if ( tab.search('#play') >= 0 ) {
        var game = tab.split('=')[1]
        
        switch (game)
        {
            case 'snowman_on_track':
                changeGame('https://html-classic.itch.zone/html/4549124/Snowman%20On%20Track/index.html');
                console.log("this is supposed to be snowman on track", game)
                break;
            case 'remilias_halloween_prank':
                changeGame('https://html-classic.itch.zone/html/6705388/Jam%20Version/index.html');
                console.log("this is supposed to be remi's game", game)
                break;
            default:
                changeTab('#games');
        }
    } else {
        changeGame('');
    }
}

function checkUrl() {
    var url = window.location.href;

    changeTab(url);
}

function clicked(e) {
    var id = '#' + e.target.id.split('-')[0];

    changeTab(id);
}

function changeGame(url) {
    var gameFrame = document.getElementById('game-frame');
    gameFrame.src = url;
}

window.onload = checkUrl();

var btns = document.querySelectorAll('.nav-btn');

btns.forEach( btn => {
    btn.addEventListener('click', clicked);
})
