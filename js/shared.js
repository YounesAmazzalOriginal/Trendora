function product(
  image,
  title,
  descreption,
  stars,
  currentPrice,
  oldPrice,
  discount
) {
  return `
            <a onclick="card(this)" href="product-overview.html">
            <div class="card">
              <div class="card-image">
                <img src="Assets/Images/${image}" alt="" />
              </div>
              <h4>${title}</h4>
              <p class="descreption">${descreption}</p>
              <div class="card-reviews-stars">
                <div class="card-stars">
                  <!--
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  -->
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

function card(target) {
  let cardClicked = [];

  var currentPriceTargeted = target.querySelector(
    ".current-price span"
  ).textContent;
  var oldPriceTargeted = target.querySelector(".old-price span").textContent;
  var descreptionTargeted = target.querySelector(".descreption").textContent;
  var imgTargeted = target.querySelector("img").src;

  var titleTargeted = target.querySelector("h4").textContent;

  cardClicked.push({
    currentPriceTargeted: currentPriceTargeted,
    oldPriceTargeted: oldPriceTargeted,
    descreptionTargeted: descreptionTargeted,
    imgTargeted: imgTargeted,
    titleTargeted: titleTargeted,
    descreptionTargeted: descreptionTargeted,
  });

  localStorage.setItem("Clicked Card", JSON.stringify(cardClicked));
}

document.addEventListener("DOMContentLoaded", () => {
  var navCart = document.querySelector(".nav-cart-count");

  navCart.textContent = localStorage.getItem("notifivation count") || 0;
});

// Hide mobile nav if scroll bottom
//
// 768
//
window.addEventListener("scroll", () => {
  var navUl = document.querySelector("nav ul");
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    navUl.style.setProperty("display", "none");
  } else {
    navUl.style.removeProperty("display");
  }
});
