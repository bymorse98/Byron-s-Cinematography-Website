var reel = document.getElementById("reel");
var reelStill = document.getElementById("reelStill");

reel.onplay = () => {
  reelStill.style.opacity = "0";
};