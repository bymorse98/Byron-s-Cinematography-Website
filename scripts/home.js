var reel = document.getElementById("reel");
var reelStill = document.getElementById("reelStill");

reel.onplay = () => {
  reelStill.style.visibility = "hidden";
};

// Animation intro First time each session only
if (sessionStorage.getItem('firstTimeThisSession') === null) {
  sessionStorage.setItem('firstTimeThisSession', 'true');
} else {
  var introContainer = document.getElementById("introContainer");
  introContainer.style.visibility = "hidden";
  introContainer.style.transform = "translateY(-100%)"
}
