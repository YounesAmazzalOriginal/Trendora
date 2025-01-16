document.addEventListener("DOMContentLoaded", () => {
  let retrievedData = JSON.parse(localStorage.getItem("productData"));

  // Arrays
  let typesAr = [];
  let colorsAr = [];
  let sizesAr = [];
  let dressStyleAr = [];
  let pricesAr = [];

  // Container
  var filterLinks = document.querySelector(".link-1");
  var colorsLinks = document.querySelector(".link-3 .colors");
  var sizeLinks = document.querySelector(".link-4 .sizes");
  var dressStyleLinks = document.querySelector(".link-5");

  // Created Elements
  for (let i = 0; i < retrievedData.length; i++) {
    // Push Data To Array
    typesAr.push(retrievedData[i].type);
    colorsAr.push(retrievedData[i].color);
    retrievedData[i].size.forEach((size) => {
      sizesAr.push(size);
    });
    dressStyleAr.push(retrievedData[i].dressStyle);
    pricesAr.push(retrievedData[i].currentPrice);
  }

  // Create a button for each unique type
  [...new Set(typesAr)].forEach((type) => {
    var singleFilterLinkButton = document.createElement("button");
    singleFilterLinkButton.textContent = type;
    filterLinks.appendChild(singleFilterLinkButton);
  });

  // Create a button for each unique color
  var ResetColorRadio = document.createElement("input");
  ResetColorRadio.classList.add("reset");
  [...new Set(colorsAr)].forEach((color) => {
    ResetColorRadio.type = "radio";
    ResetColorRadio.title = "Reset";
    var singleColorRadio = document.createElement("input");
    singleColorRadio.type = "radio";
    singleColorRadio.name = "color";
    singleColorRadio.title = color;
    singleColorRadio.style.setProperty("background-color", color);
    colorsLinks.appendChild(singleColorRadio);
  });
  colorsLinks.appendChild(ResetColorRadio);

  // Create a button for each unique size
  var resetSizeLinkButton = document.createElement("button");
  resetSizeLinkButton.classList.add("reset");
  [...new Set(sizesAr)].forEach((size) => {
    var singleSizeLinkButton = document.createElement("button");
    singleSizeLinkButton.textContent = size;
    sizeLinks.appendChild(singleSizeLinkButton);
  });
  sizeLinks.appendChild(resetSizeLinkButton);

  // Create a button for each unique dressStyle

  [...new Set(dressStyleAr)].forEach((dressStyle) => {
    var singledressStyleLinkButton = document.createElement("button");
    singledressStyleLinkButton.textContent = dressStyle;
    dressStyleLinks.appendChild(singledressStyleLinkButton);
  });

  // Range
  var minRange = document.querySelector(".minRange");
  var maxRange = document.querySelector(".maxRange");
  var minSpan = document.querySelector(".minSpan");
  var maxSpan = document.querySelector(".maxSpan");
  var minprice = pricesAr.sort()[0];
  var maxprice = pricesAr.sort()[pricesAr.length - 1];

  minRange.min = minprice;
  minRange.max = maxprice;
  maxRange.min = minprice;
  maxRange.max = maxprice;
  minRange.value = minprice;
  maxRange.value = maxprice;
  minSpan.textContent = minRange.value;
  maxSpan.textContent = maxRange.value;

  function priceRange() {
    minSpan.textContent = minRange.value;
    maxSpan.textContent = maxRange.value;
  }
  document.querySelectorAll(".priceRange").forEach((range) => {
    range.addEventListener("input", priceRange);
  });

  // Test
  console.log([...new Set(typesAr)]);
  console.log([...new Set(colorsAr)]);
  console.log([...new Set(sizesAr)]);
  console.log([...new Set(dressStyleAr)]);
  console.log([...new Set(pricesAr)]);

  // Add Products
  // function product(image, title, stars, currentPrice, oldPrice, discount) {
  //   return `
  //       <a>
  //         <div class="card">
  //           <div class="card-image">
  //             <img src="Assets/Images/${image}" alt="" />
  //           </div>
  //           <h4>${title}</h4>
  //           <div class="card-reviews-stars">
  //             <div class="card-stars">
  //               <i class="fa-solid fa-star"></i>
  //               <i class="fa-solid fa-star"></i>
  //               <i class="fa-solid fa-star"></i>
  //               <i class="fa-solid fa-star"></i>
  //               <i class="fa-solid fa-star-half-stroke"></i>
  //             </div>
  //             <p><span class="card-point">${stars}</span>/5</p>
  //           </div>
  //           <div class="price-container">
  //             <h2 class="current-price">$<span>${currentPrice}</span></h2>
  //             <h2 class="old-price">$<span>${oldPrice}</span></h2>
  //             <h2 class="discount">-<span>${discount}</span>%</h2>
  //           </div>
  //         </div>
  //         </a>`;
  // }
  var main = document.querySelector("main");
  for (let i = 0; i < retrievedData.length; i++) {
    main.innerHTML += product(
      retrievedData[i].image,
      retrievedData[i].title,
      retrievedData[i].description,
      retrievedData[i].stars,
      retrievedData[i].currentPrice,
      retrievedData[i].oldPrice,
      retrievedData[i].discount
    );
  }

  // active Links
  document.querySelectorAll("section aside .links button").forEach((link) => {
    link.addEventListener("click", () => {
      link.classList.add("active");
    });
  });

  function apply() {
    let filteredData = retrievedData;

    // Get selected filters
    const selectedType = document.querySelector(".link-1 .active")?.textContent;
    const selectedColor = document.querySelector(".link-3 input:checked")?.style
      .backgroundColor;
    const selectedSize = document.querySelector(".link-4 .active")?.textContent;
    const selectedDressStyle =
      document.querySelector(".link-5 .active")?.textContent;
    const minPrice = minRange.value;
    const maxPrice = -maxRange.value;

    // Filter based on selected filters
    if (selectedType) {
      filteredData = filteredData.filter((item) => item.type === selectedType);
    }
    if (selectedColor) {
      filteredData = filteredData.filter(
        (item) => item.color === selectedColor
      );
    }
    if (selectedSize) {
      filteredData = filteredData.filter((item) =>
        item.size.includes(selectedSize)
      );
    }
    if (selectedDressStyle) {
      filteredData = filteredData.filter(
        (item) => item.dressStyle === selectedDressStyle
      );
    }
    filteredData = filteredData.filter(
      (item) => item.currentPrice >= minPrice && item.currentPrice <= maxPrice
    );

    // Clear the displayed products
    main.innerHTML = "";

    // Display filtered products
    for (let i = 0; i < filteredData.length; i++) {
      main.innerHTML += product(
        filteredData[i].image,
        filteredData[i].title,
        filteredData[i].description,
        filteredData[i].stars,
        filteredData[i].currentPrice,
        filteredData[i].oldPrice,
        filteredData[i].discount
      );
    }
  }
  document.querySelector(".apply").addEventListener("click", apply);
});
