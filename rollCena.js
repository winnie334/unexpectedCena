// The world needs this.

$(document).ready(function() {
  if (Math.random() < 0.05) {
    itsJohnCena();
  }
});

itsJohnCena = function() {
  document.getElementsByTagName("body")[0].innerHTML = "";
  var vid = document.createElement("video");
  var source = document.createElement("source");
  vid.width = 1280 // $(window).width();
  vid.height = 720 // $(window).height();
  vid.autoplay = true; // Obviously
  vid.loop = true; // Nobody expects the second John Cena!

  // We tell the source object where to get the video from.
  source.src = "https://github.com/winnie334/unexpectedCena/raw/master/bestVidEver.mp4";
  source.type = "video/mp4";

  // We add the video source to the video object.
  vid.appendChild(source);
  document.getElementsByTagName("body")[0].appendChild(vid);
}