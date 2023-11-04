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
function setScrollTo(){
  window.scrollTo(0, 50);
  const windowScrollTop = window.pageYOffset;
  console.log(windowScrollTop);  
}  
function setScrollToOptions(){
    window.scrollTo({
        top: 500,
        left:0,
        behavior:"smooth"
    })
}
function setScrollIntoView (top) {
    const lessonSelected = document.querySelector('.lesson');
    lessonSelected.scrollIntoView(top);
}
function setScrollIntoViewOptions (top) {
    const lessonSelected = document.getElementById
    lessonSelected.scrollIntoView({
    block:"center",
    inline:"nearest",
    behavior:"smooth"
    });
}
const block = document.querySelector('.lesson_item_sub-list1');
const elementOffsetParent = block.OffsetParent;
console.log(elementOffsetParent);
const elementOffsetLeft = block.OffsetLeft;
const elementOffsetTop  = block.offsetTop;
console.log(elementOffsetLeft);
console.log(elementOffsetTop);
const elementOffsetWidh = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;
console.log(elementOffsetWidh);
console.log(elementOffsetHeight);
const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;
console.log(elementClientTop);
console.log(elementClientLeft);
const elementClientWidh = block.clientWidth;
const elementClientHeight = block.clientHeight;
console.log(elementClientWidh);
console.log(elementClientHeight);
const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;
console.log(elementScrollWidth);
console.log(elementScrollHeight);
block.scrollTop = 150;
const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;
console.log(elementScrollLeft);
console.log(elementScrollHeight);
function setElementScrollBy() {
    block.ScrollBy({
        top:20,
        left:0,
        behavior:"smooth"
    })
}
const item = document.querySelector('.lesson_item_sub-list2');
const itemCoords = item.getBoundingClientRect();
console.log(itemCoords);
const getItemCoords = item.getBoundingClientRect().left;
console.log(getItemCoords);
const getItemTopCoords = item.getBoundingClientRect().top;
const getItemTopDocumentCoords = getItemTopCoords + window.pageYOffset;
console.log(getItemTopCoords);
console.log(getItemTopDocumentCoords);
const elem = document.elementFromPoint(100,100);
console.log(elem);