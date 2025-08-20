let readingProgress = 0;
// let navBar = document.getElementsByTagName("nav");
// let navItem = document.getElementsByTagName("nav").getElementsByTagName("ul").getElementsByTagName("li");
// let navLink = navItem.getElementsByTagName("a");

var navButton = document.querySelectorAll(".navButton");
var navLi = document.querySelectorAll(".navLi");
// document.querySelectorAll("navLi");
navButton.addEventListener("onmouseover", changeNavButtonBg());

function changeProgress(readingProgress) {
    if (readingProgress < 100) {
        readingProgress += 25;
    }
}


// navButton.addEventListener(onmouseover, changeNavButtonBg());

function changeNavButtonBg () {
    if (navLi.style.background = "rgb(194, 194, 230)") {
        navLi.style.background = "white";
        navButton.style.color = "rgb(194, 194, 230)";
    } else {
        navLi.style.background = "rgb(194, 194, 230)";
        navButton.style.color = "white";
    }
}