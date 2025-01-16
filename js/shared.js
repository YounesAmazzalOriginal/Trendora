// function product(image, title, stars, currentPrice, oldPrice, discount) {
//   // <a href="product-overview.html">
//   return `
//         <a onclick="card(this)">
//           <div class="card">
//             <div class="card-image">
//               <img src="Assets/Images/${image}" alt="" />
//             </div>
//             <h4>${title}</h4>
//             <div class="card-reviews-stars">
//               <div class="card-stars">
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star-half-stroke"></i>
//               </div>
//               <p><span class="card-point">${stars}</span>/5</p>
//             </div>
//             <div class="price-container">
//               <h2 class="current-price">$<span>${currentPrice}</span></h2>
//               <h2 class="old-price">$<span>${oldPrice}</span></h2>
//               <h2 class="discount">-<span>${discount}</span>%</h2>
//             </div>
//           </div>
//           </a>`;
// }

// Card Click

function product(
  image,
  title,
  descreption,
  stars,
  currentPrice,
  oldPrice,
  discount
) {
  // <a onclick="card(this)">
  //   <a onclick="card(this)" href="product-overview.html">
  return `
            <a onclick="card(this)" >
            <div class="card">
              <div class="card-image">
                <img src="Assets/Images/${image}" alt="" />
              </div>
              <h4>${title}</h4>
              <p class="descreption">${descreption}</p>
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

function card(target) {
  let cardClicked = [];
  //   let cardClicked = JSON.parse(localStorage.getItem("Clicked Card")) || [];

  var currentPriceTargeted = target.querySelector(
    ".current-price span"
  ).textContent;
  var descreptionTargeted = target.querySelector(".descreption").textContent;
  var imgTargeted = target.querySelector("img").src;

  var titleTargeted = target.querySelector("h4").textContent;

  //   alert("Current Price  :  " + currentPriceTargeted);
  //   alert("descreption  :  " + descreptionTargeted);
  cardClicked.push({
    currentPriceTargeted: currentPriceTargeted,
    descreptionTargeted: descreptionTargeted,
    imgTargeted: imgTargeted,
    titleTargeted: titleTargeted,
    descreptionTargeted: descreptionTargeted,
  });

  localStorage.setItem("Clicked Card", JSON.stringify(cardClicked));
}

// let productClicked = [];
