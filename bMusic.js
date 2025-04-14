// I feel like Dinesh for doing this
// document.addEventListener("DOMContentLoaded", function () {
//   // Select the image and div
//   var img = document.getElementById("frontPageImage");
//   var div = document.getElementByID("popUp");

//   // Add click event listener
//   img.addEventListener("click", function () {
//     div.style.display = "flex"; // Hide the div
//   });
// });
const theBread = document.getElementById("theBread");
const popUp = document.getElementById("popUp");
const popUpBack = document.getElementById("popUpBack");
const popUpCoffeeCake = document.getElementById("popUpCoffeeCake");
const coffeeCake = document.getElementById("coffeeCake");
const popUpLemonCheeseCake = document.getElementById("popUpLemonCheeseCake");
const LemonCheesecake = document.getElementById("lemonCheesecake");

theBread.onmousedown = () => {
  popUp.style.display = "flex";
};

popUpBack.onmousedown = () => {
  popUp.style.display = "none";
};

coffeeCake.onmousedown = () => {
  popUpCoffeeCake.style.display = "flex";
};

popUpBackCoffeeCake.onmousedown = () => {
  popUpCoffeeCake.style.display = "none";
};

coffeeCake.onmousedown = () => {
  popUpCoffeeCake.style.display = "flex";
};

popUpBackCoffeeCake.onmousedown = () => {
  popUpCoffeeCake.style.display = "none";
};

window.onload = function () {
  document.getElementById("mainPage").style.display = "block";
  document.getElementById("my_audio").play();
  document.getElementById("recipesContent").style.display = "block";
};
