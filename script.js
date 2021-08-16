// Photon / wpvip image argument wizard
// An Automattic sorcery by Tallulahhh

var baseImage =
  "https://transrites.files.wordpress.com/2021/08/pride-of-wapuus.png";

var wharg = "";
var widthw = 100;
var heighth = 100;

var croparg = "";
var cropx = 0;
var cropy = 0;
var cropw = 100;
var croph = 100;

var resizearg = "";
var resizex = "";
var resizey = "";

var fitarg = "";
var fitx = "";
var fity = "";

var letterarg = "";
var lbx = "";
var lby = "";
var ulb = "";

var filter = "";

var brightness = 0;
var brightarg = "";

var contrast = 0;
var contarg = "";

var rgbarg = "";
var red = 0;
var green = 0;
var blue = 0;

var smooth = "";

var zoomarg = "";
var zoom = 1;

var quality = 75;
var qualarg = "";

var strip = "";

var myImage = document.getElementById("theImage");
var myLinky = document.getElementById("theLink");
var theArgument = "";
var updateImageFrequently = true;

//image plus args equals results
function updateImage() {
  checkDimensions();
  updateWords();
  myImage.setAttribute("src", baseImage + theArgument);
  //myLinky.setAttribute("href", baseImage + theArgument);
}

//let us now build a string of url arguments
function updateWords() {
  theArgument =
    wharg +
    croparg +
    resizearg +
    fitarg +
    letterarg +
    filter +
    brightarg +
    contarg +
    rgbarg +
    smooth +
    zoomarg +
    qualarg +
    strip;
  theArgument = "?" + theArgument.substring(1);
  mediaUrl.setAttribute("value", baseImage);
  mediaArg.setAttribute("value", theArgument);
}

//get base image dimensions
function checkBaseDimensions() {
  baseimg = new Image();
  baseimg.onload = function () {
    var baseheight = baseimg.height;
    var basewidth = baseimg.width;
    basewidthfield.setAttribute("value", basewidth);
    baseheightfield.setAttribute("value", baseheight);
  };
  baseimg.src = baseImage;
}

//get transformed image dimensions
function checkDimensions() {
  img = new Image();
  img.onload = function () {
    var height = img.height;
    var width = img.width;
    widthfield.setAttribute("value", width);
    heightfield.setAttribute("value", height);
  };
  img.src = baseImage + theArgument;
}

//in case this gets greedy and needs throttling
function maybeUpdateImage() {
  if (updateImageFrequently == true) {
    updateImage();
  }
}

//Runtime!!!
checkBaseDimensions();
updateImage();

// setup buttons & radios

//careful with big things via this
load.onclick = function () {
  baseImage = document.getElementById("mediaUrl").value;
  updateImage();
  checkBaseDimensions();
};

// filter radios
filters.onclick = function () {
  if (nofilter.checked == true) {
    filter = "";
  }
  if (greyscale.checked == true) {
    filter = "&filter=greyscale";
  }
  if (negate.checked == true) {
    filter = "&filter=negate";
  }
  if (sepia.checked == true) {
    filter = "&filter=sepia";
  }
  if (edgedetect.checked == true) {
    filter = "&filter=edgedetect";
  }
  if (emboss.checked == true) {
    filter = "&filter=emboss";
  }
  if (blurgaussian.checked == true) {
    filter = "&filter=blurgaussian";
  }
  if (blurselective.checked == true) {
    filter = "&filter=blurselective";
  }
  if (meanremoval.checked == true) {
    filter = "&filter=meanremoval";
  }
};

// w/h numbers and radios
widthheight.onclick = function () {
  if (nowh.checked == true) {
    wharg = "";
  }
  if (addw.checked == true) {
    wharg = "&w=" + document.getElementById("widthw").value;
  }
  if (addh.checked == true) {
    wharg = "&h=" + document.getElementById("heighth").value;
  }
  widthheightstring.setAttribute("value", wharg);
};

// lb/ulb numbers and radios
unletterbox.onclick = function () {
  if (noulb.checked == true) {
    letterarg = "";
  }
  if (yesulb.checked == true) {
    letterarg = "&ulb=true";
  }
  if (addlb.checked == true) {
    letterarg =
      "&lb=" +
      document.getElementById("lbx").value +
      "," +
      document.getElementById("lby").value;
  }
  lbstring.setAttribute("value", letterarg);
};

// crop numbers and radios
crop.onclick = function () {
  if (nocrop.checked == true) {
    croparg = "";
  }
  if (addcrop.checked == true) {
    croparg =
      "&crop=" +
      document.getElementById("cropx").value +
      "," +
      document.getElementById("cropy").value +
      "," +
      document.getElementById("cropw").value +
      "," +
      document.getElementById("croph").value;
  }
  cropstring.setAttribute("value", croparg);
};

// fit numbers and radios
fit.onclick = function () {
  if (nofit.checked == true) {
    fitarg = "";
  }
  if (addfit.checked == true) {
    fitarg =
      "&fit=" +
      document.getElementById("fitx").value +
      "," +
      document.getElementById("fity").value;
  }
  fitstring.setAttribute("value", fitarg);
};

// resize numbers and radios
resize.onclick = function () {
  if (noresize.checked == true) {
    resizearg = "";
  }
  if (addresize.checked == true) {
    resizearg =
      "&resize=" +
      document.getElementById("resizex").value +
      "," +
      document.getElementById("resizey").value;
  }
  resizestring.setAttribute("value", resizearg);
};

// bright numbers and radios
bright.onclick = function () {
  if (nobright.checked == true) {
    brightarg = "";
  }
  if (addbright.checked == true) {
    brightarg = "&brightness=" + document.getElementById("brightvalue").value;
  }
  brightstring.setAttribute("value", brightarg);
};

// cont numbers and radios
cont.onclick = function () {
  if (nocont.checked == true) {
    contarg = "";
  }
  if (addcont.checked == true) {
    contarg = "&contrast=" + document.getElementById("contvalue").value;
  }
  contstring.setAttribute("value", contarg);
};

// colorize numbers and radios
tint.onclick = function () {
  if (notint.checked == true) {
    rgbarg = "";
  }
  if (addtint.checked == true) {
    rgbarg =
      "&colorize=" +
      document.getElementById("redtint").value +
      "," +
      document.getElementById("greentint").value +
      "," +
      document.getElementById("bluetint").value;
  }
  tintstring.setAttribute("value", rgbarg);
};

// zoom numbers and radios
zoomr.onclick = function () {
  if (nozoom.checked == true) {
    zoomarg = "";
  }
  if (addzoom.checked == true) {
    zoomarg = "&zoom=" + document.getElementById("zoomvalue").value;
  }
  zoomstring.setAttribute("value", zoomarg);
};

// qual numbers and radios
qual.onclick = function () {
  if (noqual.checked == true) {
    qualarg = "";
  }
  if (addqual.checked == true) {
    qualarg = "&quality=" + document.getElementById("qualvalue").value;
  }
  qualstring.setAttribute("value", qualarg);
};

//strip radios
strips.onclick = function () {
  if (no.checked == true) {
    strip = "";
  }
  if (all.checked == true) {
    strip = "&strip=all";
  }
  if (info.checked == true) {
    strip = "&strip=info";
  }
  if (color.checked == true) {
    strip = "&strip=color";
  }
};

//smooth radios
smooths.onclick = function () {
  if (nosmooth.checked == true) {
    smooth = "";
  }
  if (addsmooth.checked == true) {
    smooth = "&smooth=1";
  }
};

//update image url and load fresh instance on interaction
controls.onclick = function () {
  maybeUpdateImage();
};

//Tal made this