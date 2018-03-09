// The world needs this.

$(document).ready(function() {
  if (Math.random() < 1) {
    itsJohnCena();
  }
});

itsJohnCena = function() {
  var vid = document.createElement("video");
  var source = document.createElement("source");
  vid.width = 1280 // $(window).width();
  vid.height = 720 // $(window).height();
  vid.autoplay = true; // Obviously

  // We tell the source object where to get the video from.
  source.src = "https://github.com/winnie334/unexpectedCena/raw/master/bestVidEver.mp4";
  source.type = "video/mp4";

  // We add the video source to the video object.
  vid.appendChild(source);
  document.getElementsByTagName("body")[0].appendChild(vid);
}