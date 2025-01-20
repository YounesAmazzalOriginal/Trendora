document.addEventListener("DOMContentLoaded", () => {
  var cartItems = document.querySelector(".cart-items");
  var totalPrice = document.querySelector(".total-price");
  var totalQuantity = document.querySelector(".total-quantity");
  let productCheckedData = JSON.parse(
    localStorage.getItem("product Checked List")
  );
  const productCheckedQuantity = [];

  let checkedTotalPrice = [];

  productCheckedData.forEach((element) => {
    cartItems.innerHTML += `<div class="single-item">
        <button class="delete-from-cart" onclick="deleteProduct(this)">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <div class="img-container">
          <img src="${element.mainimage}" alt="" />
        </div>
        <div class="text-container">
          <h5>${element.title}</h5>
          <div>
            <p>quantity :</p>
            <p class="single-quantity">${element.quantity}</p>
          </div>
          <div>
            <p>price :</p>
            <p class="single-price">$ ${element.currentPrice}</p>
          </div>
        </div>
      </div>`;

    let itemTotalPrice =
      parseFloat(element.currentPrice) * parseInt(element.quantity, 10);
    checkedTotalPrice.push(itemTotalPrice);

    productCheckedQuantity.push(parseInt(element.quantity, 10));
  });

  let singleTotalQuantity = productCheckedQuantity.reduce((a, b) => a + b, 0);
  let grandTotalPrice = checkedTotalPrice.reduce((a, b) => a + b, 0);

  totalPrice.textContent = `$ ${grandTotalPrice.toFixed(2)}`;
  totalQuantity.textContent = singleTotalQuantity;

  localStorage.setItem("notifivation count", productCheckedData.length);
});

// Delete
function deleteProduct(target) {
  var targetedSingleItem = target.closest(".single-item");

  var productTitle = targetedSingleItem.querySelector("h5").textContent;

  let productCheckedData = JSON.parse(
    localStorage.getItem("product Checked List")
  );

  for (let i = 0; i < productCheckedData.length; i++) {
    if (productCheckedData[i].title === productTitle) {
      productCheckedData.splice(i, 1);
      break;
    }
  }

  localStorage.setItem(
    "product Checked List",
    JSON.stringify(productCheckedData)
  );

  targetedSingleItem.remove();

  window.location.reload();
}
