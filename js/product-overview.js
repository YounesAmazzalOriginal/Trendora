document.addEventListener("DOMContentLoaded", () => {
  let retrievedData = JSON.parse(localStorage.getItem("productData"));

  //   Array
  // let productColors = [];

  // for (let i = 0; i < retrievedData.length; i++) {
  //   productColors.push(retrievedData[i].color);
  // }
  // console.log(productColors);

  // var colorsProductLinks = document.querySelector(".product-colors .colors");

  // [...new Set(productColors)].forEach((color) => {
  //   var singleColorRadio = document.createElement("input");
  //   singleColorRadio.type = "radio";
  //   singleColorRadio.name = "color";
  //   singleColorRadio.title = color;
  //   singleColorRadio.style.setProperty("background-color", color);
  //   colorsProductLinks.appendChild(singleColorRadio);
  // });

  // set Images
  var savedClickedObject = JSON.parse(localStorage.getItem("Clicked Card"));

  var mainImage = document.querySelector(".main-image img");
  var sidesImage = document.querySelectorAll(".all-side-images div img");

  var title = document.querySelector(".right-side .title");
  var descreption = document.querySelector(".right-side .descreption");


  sidesImage.forEach((sideImage) => {
    sideImage.src = savedClickedObject[0].imgTargeted;
  });
  mainImage.src = savedClickedObject[0].imgTargeted;
  title.textContent = savedClickedObject[0].titleTargeted;
  descreption.textContent = savedClickedObject[0].descreptionTargeted;
});
