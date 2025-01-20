document.addEventListener("DOMContentLoaded", () => {
  let retrievedData = JSON.parse(localStorage.getItem("productData"));

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

  //
  //
  //
  //
  //
  //

  var showColors = document.querySelector(".product-colors .colors");
  var showSizes = document.querySelector(".product-sizes .sizes");

  console.log(showColors.innerHTML);

  console.log(showColors);

  let matchingProduct = retrievedData.find(
    (product) => product.title === savedClickedObject[0].titleTargeted
  );
  if (matchingProduct) {
    // Other Colors
    matchingProduct.otherColors.forEach((othercolor) => {
      var otherColorInput = document.createElement("input");
      otherColorInput.type = "radio";
      otherColorInput.name = "product-other-color";
      otherColorInput.value = othercolor;
      otherColorInput.style.setProperty("background-color", othercolor);

      showColors.appendChild(otherColorInput);
    });

    // Other Sizes
    matchingProduct.size.forEach((otherSize) => {
      var otherSizeBtn = document.createElement("button");
      otherSizeBtn.name = "product-other-color";
      otherSizeBtn.textContent = otherSize;
      otherSizeBtn.style.setProperty("background-color", otherSize);

      showSizes.appendChild(otherSizeBtn);
    });
  }

  // Control Quantity
  let Quantity = 1;
  function add1(target) {
    Quantity++;

    var productQuantity = target.previousElementSibling;
    productQuantity.textContent = Quantity;
  }
  function remove1(target) {
    Quantity--;

    if (Quantity <= 1) {
      Quantity = 1;
    }
    var productQuantity = target.nextElementSibling;
    productQuantity.textContent = Quantity;
  }

  document.querySelector(".add1").addEventListener("click", function () {
    add1(this);
  });
  document.querySelector(".remove1").addEventListener("click", function () {
    remove1(this);
  });

  //

  let productCheckedList =
    JSON.parse(localStorage.getItem("product Checked List")) || [];

  function addToCart(target) {
    var targetedProductOverview = target.closest(".product-overview");
    var title = targetedProductOverview.querySelector(".title");
    var mainimage = targetedProductOverview.querySelector(".main-image img");
    var addedProduct = {
      title: title.textContent,
      mainimage: mainimage.src,
      currentPrice: JSON.parse(localStorage.getItem("Clicked Card"))[0]
        .currentPriceTargeted,
      oldPrice: JSON.parse(localStorage.getItem("Clicked Card"))[0]
        .oldPriceTargeted,
      quantity: Quantity,
    };

    console.log(JSON.parse(localStorage.getItem("Clicked Card")));

    productCheckedList.push(addedProduct);

    localStorage.setItem(
      "product Checked List",
      JSON.stringify(productCheckedList)
    );

    alert("The product has been added!");
    window.location.href = "your-cart.html";
  }
  document.querySelector(".buy-btn").addEventListener("click", function () {
    addToCart(this);
  });
});
