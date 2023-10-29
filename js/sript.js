'use strict';
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;
console.log(mainElementWidth);
console.log(mainElementHeight);
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowWidth);
let scrolWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientlWidth, document.documentElement.clientWidthllWidth,
);
let scrolHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
);
console.log(scrolWidth);
console.log(scrolHeight);
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;
console.log(windowScrollTop);
console.log(windowScrollLeft);
function setScrollBy() {
    window.scrollBy(0, 50);
    console.log(windowScrollTop);
}
function setScrollToOptions() {
    window.scrollTo({
        top: 500,
        left: 0,
        behavior:"smooth"
    });
}