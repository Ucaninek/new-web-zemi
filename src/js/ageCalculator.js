const birthday = new Date('19 February 2008');

function getAge(d1, d2) {
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Number(diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(3);
}

export function get() { return getAge(birthday); }