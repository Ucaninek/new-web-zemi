import $ from 'jquery';

export function init(delay = 250) {
    $(window).on('load', () => {
        setTimeout(() => {
            $('#loader').fadeOut(500, () => {
                $('#loader').remove();
                console.log("Hi there :)");
            });
        }, delay);
    });
}