document.addEventListener("DOMContentLoaded", () => {
  var ProductColors = document.querySelector(".links .colors");

  let retrievedData = JSON.parse(localStorage.getItem("productData"));

  for (let i = 0; i < retrievedData.length; i++) {
    // Add Colors
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "color";

    let colorsOption = retrievedData[i].color;
    input.style.setProperty("background-color", colorsOption);

    ProductColors.appendChild(input);
  }

  // Price Range
  var minRange = document.querySelector(".range-container .minRange");
  var maxRange = document.querySelector(".range-container .maxRange");
  function rangePrice() {
    var minSpan = document.querySelector(".minSpan");
    var maxSpan = document.querySelector(".maxSpan");

    minSpan.textContent = minRange.value;
    maxSpan.textContent = maxRange.value;
  }

  minRange.addEventListener("input", () => {
    rangePrice();
  });
  maxRange.addEventListener("input", () => {
    rangePrice();
  });

  // Add Products

  function product(image, title, stars, currentPrice, oldPrice, discount) {
    return `
        <a href="">
          <div class="card">
            <div class="card-image">
              <img src="Assets/Images/${image}" alt="" />
            </div>
            <h4>${title}</h4>
            <div class="card-reviews-stars">
              <div class="card-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <p><span class="card-point">${stars}</span>/5</p>
            </div>
            <div class="price-container">
              <h2 class="current-price">$<span>${currentPrice}</span></h2>
              <h2 class="old-price">$<span>${oldPrice}</span></h2>
              <h2 class="discount">-<span>${discount}</span>%</h2>
            </div>
          </div>
          </a>`;
  }

  var main = document.querySelector("main");
  for (let i = 0; i < retrievedData.length; i++) {
    main.innerHTML += product(
      retrievedData[i].image,
      retrievedData[i].title,
      retrievedData[i].stars,
      retrievedData[i].currentPrice,
      retrievedData[i].oldPrice,
      retrievedData[i].discount
    );
  }

  console.log(retrievedData[0].discount);
});
