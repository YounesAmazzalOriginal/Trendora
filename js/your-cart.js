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
        <button class="delete-from-cart">
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

    checkedTotalPrice.push(parseFloat(element.currentPrice));
    productCheckedQuantity.push(parseFloat(element.quantity));
  });

  let singleTotalQuantity = productCheckedQuantity.reduce((a, b) => a + b);
  totalPrice.textContent = `$ ${
    checkedTotalPrice.reduce((a, b) => a + b) * singleTotalQuantity
  }`;
  totalQuantity.textContent = singleTotalQuantity;

  localStorage.setItem("notifivation count", productCheckedData.length);
});
