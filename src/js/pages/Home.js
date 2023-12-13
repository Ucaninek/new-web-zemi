import * as duck from '../duck.js';
import $ from 'jquery';

class Home {
    namespace = 'home';

    beforeEnter = _data => {
        duck.init();
        $('#a-home').attr('href', './');
        $('#a-projects').attr('href', './projects');
        $('#a-about').attr('href', './about');
        $('#nav-dir').text('~/');
        $('#nav-dir').attr('href', $('#a-home').attr('href'));
    };

}

export default new Home();