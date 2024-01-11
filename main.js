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

    currentFrame.style.display = 'flex';
    currentFrame.classList.add('active');

    if ( tab.search('#play') > 0 ) {
        var game = tab.split('=')[1]
        
        switch (game)
        {
            case 'snowman-on-track':
                changeGame('https://html-classic.itch.zone/html/4549124/Snowman%20On%20Track/index.html');
                break;
            case 'remilias-halloween-prank':
                changeGame('https://html-classic.itch.zone/html/6705388/Jam%20Version/index.html');
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
    document.getElementById('game-frame').src = url;
}

window.onload = checkUrl();

var btns = document.querySelectorAll('.btn');

btns.forEach( btn => {
    btn.addEventListener('click', clicked);
})
