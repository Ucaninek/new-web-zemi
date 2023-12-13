import LocomotiveScroll from 'locomotive-scroll';
import $ from 'jquery';
var scroll;

export function init() {
    //alert("Choo Choo!");
    if (document.querySelector('[data-scroll-container]') == undefined) console.error("loco scroll element not found!!");
    $('#projects-container').children().each((i) => {
        $(this).attr('data-scroll', true);
        $(this).attr('data-scroll-speed', i % 2 == 0 ? '0.5' : '0.8');
    });
    scroll = new LocomotiveScroll();
    scroll.init();
}