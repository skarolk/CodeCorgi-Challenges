let imageDiv = document.getElementById("carousel");
let number = 0;

let styleOptions = [
  "./images/hero-image-0.jpg",
  "./images/hero-image-1.jpg",
  "./images/hero-image-2.jpg",
  "./images/hero-image-3.jpg",
  "./images/not-found.jpg"
];

const renderNextImage = function() {
  //   console.log(styleOptions[0]);
  //   console.log(imageDiv.style.backgroundImage);
  //   console.log(number);

  if (number === 4) {
    number = 0;
    var op = 0.1; // initial opacity
    imageDiv.style.display = "block";
    var timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
      }
      imageDiv.style.opacity = op;
      imageDiv.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1;
    }, 20);
    imageDiv.style.backgroundImage = `url(${styleOptions[0]})`;
  } else {
    ++number;
    var op = 0.1; // initial opacity
    imageDiv.style.display = "block";
    var timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
      }
      imageDiv.style.opacity = op;
      imageDiv.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1;
    }, 20);
    imageDiv.style.backgroundImage = `url(${styleOptions[number]})`;
  }
  setTimeout(renderNextImage, 3000);
};

renderNextImage();
