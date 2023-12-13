import twemoji from 'twemoji';
import * as loader from './js/loader.js';
import anime from "animejs";
import barba from '@barba/core';
import Home from './js/pages/Home.js';
import About from './js/pages/About.js';
import Projects from './js/pages/Projects.js';
import $ from 'jquery';


loader.init();
twemoji.parse(document.body);

const springConfig = "spring(1, 100, 25, 0)";
const cover = document.getElementById('cover');

barba.init({
    views: [Home, About, Projects],
    transitions: [
        {
            name: 'cover',
            leave({ current }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig
                });

                tl.add({
                    targets: cover,
                    translateY: ['-100%', 0]
                });

                tl.add(
                    {
                        targets: current.container,
                        opacity: 0
                    },
                    0
                );

                return tl.finished;
            },
            enter({ next }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig
                });

                tl.add({
                    targets: cover,
                    translateY: [0, '100%']
                });

                tl.add(
                    {
                        targets: next.container,
                        opacity: [0, 1]
                    },
                    0
                );

                return tl.finished;
            }
        }
    ],
    preventRunning: true
});

barba.hooks.beforeLeave((data) => {
    var namespace = $(data.trigger).text();
    if (namespace.startsWith('~')) namespace = 'Home';
    $('#cover-text').text(namespace.charAt(0).toUpperCase() + namespace.slice(1));
});

barba.hooks.beforeEnter(() => {
    twemoji.parse(document.body);
});