import $ from 'jquery';
import anime from 'animejs';
import nowPlaying from '../spotify/now-playing.js';
import * as ageCalculator from '../ageCalculator.js';

var interval;

class About {
    namespace = 'about';

    beforeEnter = _data => {
        $('#a-home').attr('href', '../');
        $('#a-about').attr('href', './about');
        $('#a-projects').attr('href', './projects');
        $('#nav-dir').text('~/About');
        $('#nav-dir').attr('href', $('#a-home').attr('href'));
        $('#age').text(ageCalculator.get());

        interval = setInterval(() => {
            spotify();
        }, 7500);
    };


    afterLeave = () => {
        clearInterval(interval);
    }
}

function spotify() {
    nowPlaying().then(res => {
        if (res.isPlaying == false) {
            anime({
                targets: ['#now-playing'],
                translateY: 100,
                easing: 'easeInBack',
                opacity: 0
            });
        }
        else {
            anime({
                targets: ['#now-playing'],
                translateY: 0,
                easing: 'easeOutBack',
                opacity: 1
            });
            $('#spotify-album-image').attr('src', res.albumImageUrl);
            $('#spotify-artist-name').text(res.artist);
            $('#spotify-track-name').text(res.title);
        }
    });
}


export default new About();