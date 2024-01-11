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
    
    switch (tab) {
        case '#works':
            createMeta({'og:site_name': 'Youkuri (dot) com',
            'og:title': 'Works page',
            'og:description' : 'W.I.P Biting 97\'s',
            'og:url': 'https://www.youkuri.com/#works',
            'og:image': '/images/favicon.ico',
            'theme-color': '#ffb5b5'});
            break;

        case '#games':
            createMeta({'og:site_name': 'Youkuri (dot) com',
            'og:title': 'Games page',
            'og:description' : 'W.I.P Biting 97\'s',
            'og:url': 'https://www.youkuri.com/#games',
            'og:image': '/images/favicon.ico',
            'theme-color': '#ffb5b5'});
            break;

        
        case '#contact':
            createMeta({'og:site_name': 'Youkuri (dot) com',
            'og:title': 'Contact page',
            'og:description' : 'W.I.P Biting 97\'s',
            'og:url': 'https://www.youkuri.com/#works',
            'og:image': '/images/favicon.ico',
            'theme-color': '#ffb5b5'});
            break;
        
        default:
            createMeta({'og:site_name': 'Youkuri (dot) com',
                        'og:title': 'Home page',
                        'og:description' : 'W.I.P Biting 97\'s',
                        'og:url': 'https://www.youkuri.com/',
                        'og:image': '/images/favicon.ico',
                        'theme-color': '#ffb5b5'});
    }

    if ( tab.search('#play') > 0 ) {
        var game = tab.split('=')[1]
        
        switch (game)
        {
            case 'snowman-on-track':
                changeGame('https://html-classic.itch.zone/html/4549124/Snowman%20On%20Track/index.html');
                createMeta({'og:site_name': 'Youkuri (dot) com',
                'og:title': 'Snowman on track',
                'og:description' : 'A game',
                'og:url': 'https://www.youkuri.com/#play=snowman-on-track',
                'og:image': '/images/favicon.ico',
                'theme-color': '#ffb5b5'});
                break;

            case 'remilias-halloween-prank':
                changeGame('https://html-classic.itch.zone/html/6705388/Jam%20Version/index.html');
                createMeta({'og:site_name': 'Youkuri (dot) com',
                'og:title': 'Remilia\'s halloween prank',
                'og:description' : 'A game',
                'og:url': 'https://www.youkuri.com/#play=remilias-halloween-prank',
                'og:image': '/images/favicon.ico',
                'theme-color': '#ffb5b5'});
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

function createMeta(metas)
{
    for ( var key in metas ) {
        var meta = document.createElement('meta');
        var value = metas[key];

        meta.setAttribute('property', key);
        meta.setAttribute('content', value);
        document.getElementsByTagName('head')[0].appendChild(meta);
    }
}

window.onload = checkUrl();

var btns = document.querySelectorAll('.btn');

btns.forEach( btn => {
    btn.addEventListener('click', clicked);
})
