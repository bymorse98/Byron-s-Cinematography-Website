var body = document.getElementById("body")
var navButton = document.getElementById("navButton");
var closeButton = document.getElementById("closeButton");
var pageNav = document.getElementById("pageNav");
var navBg = document.getElementById("navBg");
var navShow = false;

var navHome = document.getElementById("navHome");
var navAbout = document.getElementById("navAbout");
var navStills = document.getElementById("navStills");
var navReel = document.getElementById("navReel");
var navContact = document.getElementById("navContact");

const checkWindowSize = () => {
  if (window.innerWidth > 800) {
      closeButton.style.opacity = "0";
      navButton.style.opacity  = "0";
      pageNav.style.visibility = "visible";
      pageNav.style.opacity  = "1";
      pageNav.style.height = "40px";
      closeButton.style.visibility = "hidden";
      navButton.style.visibility = "hidden";
      navBg.style.opacity = 0;
      navBg.style.visibility = "hidden";
      navShow = false;
      body.style.overflowY = "scroll";

  }
  else if (navShow) {
    closeButton.style.visibility = "visible";
    pageNav.style.visibility = "visible";
    navBg.style.visibility = "visible";
    closeButton.style.opacity = "1";
    pageNav.style.opacity = "1";
    pageNav.style.height = "75vh";
    navButton.style.opacity = "0";
    closeButton.style.transform = "translate(0, -5px)";
    navBg.style.opacity = "0.9";
    if (window.innerHeight > 200) {
      body.style.overflowY= "hidden";
    } else {
      body.style.overflowY = "scroll";
    }

    setTimeout(() => {
      navButton.style.visibility = "hidden";
    }, 500);
  }
  else { 
    navButton.style.visibility = "visible";
    navButton.style.opacity = "1";
    pageNav.style.opacity = "0";
    pageNav.style.height = "40px";
    closeButton.style.opacity = "0";
    closeButton.style.transform = "translate(0, 5px)";
    navBg.style.opacity = "0";
    pageNav.style.visibility = "hidden";
    body.style.overflowY = "scroll";
    

    setTimeout(() => {
      navBg.style.visibility = "hidden";
      closeButton.style.visibility = "hidden";
    }, 500);
  }
}

const openNav = () => {
  navShow = true;
  checkWindowSize();
}

const closeNav = () => {
  navShow = false;
  checkWindowSize();
}

window.onresize = function() {
  checkWindowSize();
}

checkWindowSize();