let productData = [
  {
    image: "orange-tshirt-1.png",
    title: "Orange T-shirt with Details",
    stars: 4.5,
    currentPrice: 240,
    oldPrice: 260,
    // discount: "20%",
    color: "Orange",
    size: ["S", "M", "L", "XL"],
  },
  {
    image: "blue-jean-shorts.png",
    title: "Stylish Blue Jeans",
    stars: 4.8,
    currentPrice: 300,
    oldPrice: 350,
    // discount: "15%",
    color: "Blue",
    size: ["M", "L", "XL"],
  },
  {
    image: "blue-tshirt-1.png",
    title: "Classic Blue T-shirt",
    stars: 4.3,
    currentPrice: 200,
    oldPrice: 230,
    // discount: "13%",
    color: "Blue",
    size: ["S", "M", "L"],
  },
  {
    image: "brown-tshirt-1.png",
    title: "Brown T-shirt with Pockets",
    stars: 4.6,
    currentPrice: 220,
    oldPrice: 250,
    // discount: "12%",
    color: "Brown",
    size: ["M", "L", "XL"],
  },
  {
    image: "orange-tshirt-2.png",
    title: "Bright Orange T-shirt",
    stars: 4.2,
    currentPrice: 180,
    oldPrice: 200,
    // discount: "10%",
    color: "Orange",
    size: ["S", "M", "L"],
  },
  {
    image: "pants-image-1.png",
    title: "Comfort Fit Pants",
    stars: 4.7,
    currentPrice: 400,
    oldPrice: 450,
    // discount: "11%",
    color: "Black",
    size: ["M", "L", "XL"],
  },
  {
    image: "pants-image-2-jean.png",
    title: "Regular Fit Jeans",
    stars: 4.4,
    currentPrice: 350,
    oldPrice: 380,
    // discount: "8%",
    color: "Blue",
    size: ["M", "L", "XL"],
  },
  {
    image: "pink-tshirt-1.png",
    title: "Light Pink T-shirt",
    stars: 4.1,
    currentPrice: 190,
    oldPrice: 210,
    // discount: "9%",
    color: "Pink",
    size: ["S", "M", "L"],
  },
  {
    image: "plaid-shirt-1.png",
    title: "Red Plaid Shirt",
    stars: 4.5,
    currentPrice: 280,
    oldPrice: 320,
    // discount: "13%",
    color: "Red",
    size: ["M", "L", "XL"],
  },
  {
    image: "plaid-shirt-2.png",
    title: "Green Plaid Shirt",
    stars: 4.3,
    currentPrice: 260,
    oldPrice: 300,
    // discount: "13%",
    color: "Green",
    size: ["S", "M", "L"],
  },
  {
    image: "white-tshirt-1.png",
    title: "White Cotton T-shirt",
    stars: 4.6,
    currentPrice: 230,
    oldPrice: 260,
    // discount: "12%",
    color: "White",
    size: ["S", "M", "L"],
  },
  {
    image: "white-tshirt-2.png",
    title: "Plain White T-shirt",
    stars: 4.2,
    currentPrice: 220,
    oldPrice: 250,
    // discount: "12%",
    color: "White",
    size: ["M", "L", "XL"],
  },
];

localStorage.setItem("productData", JSON.stringify(productData));

function product(image, title, stars, currentPrice, oldPrice, calculDiscount) {
  var calculDiscount = parseFloat(
    ((oldPrice - currentPrice) / oldPrice) * 100
  ).toFixed(0);

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
            <h2 class="discount">-<span>${calculDiscount}</span>%</h2>
          </div>
        </div>
        </a>`;
}
document.addEventListener("DOMContentLoaded", () => {
  var ArrivalCards = document.querySelector(".new-arrival .cards");
  var lowPriceCards = document.querySelector(".low-price .cards");

  for (let i = 0; i < 4; i++) {
    ArrivalCards.innerHTML += product(
      productData[i].image,
      productData[i].title,
      productData[i].stars,
      productData[i].currentPrice,
      productData[i].oldPrice,
      productData[i].discount
    );
  }
  for (let i = 4; i < 8; i++) {
    lowPriceCards.innerHTML += product(
      productData[i].image,
      productData[i].title,
      productData[i].stars,
      productData[i].currentPrice,
      productData[i].oldPrice,
      productData[i].discount
    );
  }

  JSON.parse(localStorage.getItem("productData"));
});

// Comments

// Customers Comments
let commentsData = [
  {
    customerName: "John Doe",
    customerComment:
      "I have been looking for something like this for months, and I must say, this product exceeded my expectations. The quality is outstanding, and the attention to detail is spot on.\n\nI would recommend it to anyone who is considering making a purchase. It's perfect for both casual wear and formal occasions. A must-have in your wardrobe.",
  },
  {
    customerName: "Mark Johnson",
    customerComment:
      "At first, I was hesitant because of the price, but once I received it, I could immediately tell that it was worth every penny. The fabric feels premium, and the fit is perfect.\n\nIt’s become my go-to outfit for every event. I’ve received so many compliments, and I feel confident whenever I wear it. Totally happy with my purchase!",
  },
  {
    customerName: "Michael Brown",
    customerComment:
      "Honestly, when I first tried it on, I wasn't completely sold on the design, but after wearing it for a few days, I grew to love it. The comfort level is on another level.\n\nI’ve worn it during both work and weekend outings, and it holds up perfectly. Highly recommend it, though it could be a bit cheaper.",
  },
  {
    customerName: "David Smith",
    customerComment:
      "This item is exactly what I needed! I’ve been on the hunt for something similar for a long time, and I am so glad I found this.\n\nIt’s not only stylish but also durable. I’ve worn it for a couple of months now, and it still looks like new. The stitching and craftsmanship are top-notch. Definitely worth buying!",
  },
  {
    customerName: "James Williams",
    customerComment:
      "To be honest, I wasn’t sure about the fit at first, but after trying it on, I was really impressed. The material feels really soft, and the design is sleek and modern.\n\nI’ve worn it on several occasions, and it’s held up well. It’s versatile and can easily be dressed up or down. I will definitely consider purchasing more from this brand.",
  },
  {
    customerName: "Ryan Davis",
    customerComment:
      "I’ve tried a lot of similar products in the past, but this one really stands out. The attention to detail is incredible, from the stitching to the overall design.\n\nI’ve been getting a lot of positive feedback from friends and family. It’s definitely a conversation starter. I’ve already recommended it to a few people, and I’ll keep coming back for more.",
  },
  {
    customerName: "William Taylor",
    customerComment:
      "At first, I didn’t know if I would be able to pull off the look, but once I wore it, I realized it was exactly what I needed.\n\nThe product feels very premium and well-made. It fits true to size and is very comfortable to wear all day long. Whether you’re heading to a business meeting or just hanging out with friends, it’s a great option. I highly suggest it.",
  },
];
function customerComment(customerName, customerComment) {
  return `<div class="comment">
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <h1>${customerName} <i class="fa-solid fa-circle-check"></i></h1>
          <p>
            "${customerComment}"
          </p>
        </div>`;
}
function SwipComments(swipDirection) {
  var commentsContainer = document.querySelector(".comments-container");
  var commentWidth = parseFloat(
    window.getComputedStyle(commentsContainer.querySelector(".comment")).width
  );
  var gap = parseFloat(window.getComputedStyle(commentsContainer).gap);

  commentsContainer.scrollBy({
    left: swipDirection * (commentWidth + gap),
    behavior: "smooth",
  });
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".left-swip").addEventListener("click", function () {
    SwipComments(-1);
  });
  document.querySelector(".right-swip").addEventListener("click", function () {
    SwipComments(1);
  });

  var commentsContainer = document.querySelector(".comments-container");
  for (let i = 0; i <= commentsData.length; i++) {
    commentsContainer.innerHTML += customerComment(
      commentsData[i].customerName,
      commentsData[i].customerComment
    );
  }
});
