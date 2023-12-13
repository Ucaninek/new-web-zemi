import $ from 'jquery';
import * as loco from '../choochoo.js';
class About {
    namespace = 'projects';
    beforeEnter = async _data => {
        $('#a-home').attr('href', './');
        $('#a-about').attr('href', './about');
        $('#a-projects').attr('href', './projects');
        $('#nav-dir').text('~/Projects');
        $('#nav-dir').attr('href', $('#a-home').attr('href'));
        await waitForLoader();
        loco.init();
    };
}

function waitForLoader() {
    return new Promise((resolve) => {
        if (document.querySelector('#loader') == null) resolve('sa');
        else setTimeout(waitForLoader, 50);
    });
}

export default new About();