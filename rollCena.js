// The world needs this.

$(document).ready(function() {
  if (Math.random() < 0.05) {
    itsJohnCena();
  }
});

itsJohnCena = function() {
  document.getElementsByTagName("body")[0].innerHTML = "";
  var vid = document.createElement("video");
  var source1 = document.createElement("source");
  var source2 = document.createElement("source");
  vid.width = 1280 // $(window).width();
  vid.height = 720 // $(window).height();
  vid.autoplay = true; // Obviously
  vid.loop = true; // Nobody expects the second John Cena!
  vid.innerHTML = "You don't support the cena :(";

  // We tell the source object where to get the video from.
  source1.src = "https://github.com/winnie334/unexpectedCena/raw/master/bestVidEver.mp4";
  source1.type = "video/mp4";
  source2.src = "https://github.com/winnie334/unexpectedCena/raw/master/bestVidEver.webm";
  source2.type = "video/webm";

  // We add the video source to the video object.
  vid.appendChild(source1);
  vid.appendChild(source2);
  document.body.style.background = 'url(https://github.com/winnie334/unexpectedCena/raw/master/images/john-cena.png) right top'
  document.getElementsByTagName("body")[0].appendChild(vid);
}
