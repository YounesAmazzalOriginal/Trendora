let productData = [
  {
    image: "orange-tshirt-1.png",
    title: "Orange T-shirt with Details",
    stars: 4.5,
    currentPrice: 240,
    oldPrice: 260,
    color: "Orange",
    otherColors: ["Yellow", "Red", "White"],
    size: ["S", "M", "L", "XL"],
    type: "T-shirt",
    dressStyle: "Casual",
    description:
      "A comfortable orange T-shirt with detailed stitching and a soft fabric, perfect for casual outings.",
  },
  {
    image: "blue-jean-shorts.png",
    title: "Stylish Blue Jeans",
    stars: 4.8,
    currentPrice: 300,
    oldPrice: 350,
    color: "Blue",
    otherColors: ["Black", "Grey", "Light Blue"],
    size: ["M", "L", "XL"],
    type: "Shorts",
    dressStyle: "Casual",
    description:
      "These stylish blue jeans offer a relaxed fit and are designed for both comfort and style.",
  },
  {
    image: "blue-tshirt-1.png",
    title: "Classic Blue T-shirt",
    stars: 4.3,
    currentPrice: 200,
    oldPrice: 230,
    color: "Blue",
    otherColors: ["Green", "White", "Black"],
    size: ["S", "M", "L"],
    type: "T-shirt",
    dressStyle: "Casual",
    description:
      "A classic blue T-shirt made from soft cotton fabric, perfect for everyday wear.",
  },
  {
    image: "brown-tshirt-1.png",
    title: "Brown T-shirt with Pockets",
    stars: 4.6,
    currentPrice: 220,
    oldPrice: 250,
    color: "Brown",
    otherColors: ["Beige", "Dark Brown", "Black"],
    size: ["M", "L", "XL"],
    type: "T-shirt",
    dressStyle: "Casual",
    description:
      "This brown T-shirt features convenient pockets and a comfortable fit, ideal for casual wear.",
  },
  {
    image: "orange-tshirt-2.png",
    title: "Bright Orange T-shirt",
    stars: 4.2,
    currentPrice: 180,
    oldPrice: 200,
    color: "Orange",
    otherColors: ["Pink", "Red", "Yellow"],
    size: ["S", "M", "L"],
    type: "T-shirt",
    dressStyle: "Casual",
    description:
      "A bright orange T-shirt that adds a pop of color to your wardrobe, perfect for sunny days.",
  },
  {
    image: "pants-image-1.png",
    title: "Comfort Fit Pants",
    stars: 4.7,
    currentPrice: 400,
    oldPrice: 450,
    color: "Black",
    otherColors: ["Grey", "Navy Blue", "Brown"],
    size: ["M", "L", "XL"],
    type: "Pants",
    dressStyle: "Formal",
    description:
      "These black comfort fit pants offer a sleek look with a comfortable fit, great for formal occasions.",
  },
  {
    image: "pants-image-2-jean.png",
    title: "Regular Fit Jeans",
    stars: 4.4,
    currentPrice: 350,
    oldPrice: 380,
    color: "Blue",
    otherColors: ["Black", "Light Blue", "White"],
    size: ["M", "L", "XL"],
    type: "Pants",
    dressStyle: "Casual",
    description:
      "Regular fit blue jeans that provide comfort and a timeless style for any casual event.",
  },
  {
    image: "pink-tshirt-1.png",
    title: "Light Pink T-shirt",
    stars: 4.1,
    currentPrice: 190,
    oldPrice: 210,
    color: "Pink",
    otherColors: ["Peach", "Purple", "White"],
    size: ["S", "M", "L"],
    type: "T-shirt",
    dressStyle: "Casual",
    description:
      "A light pink T-shirt with a soft feel, perfect for a relaxed and feminine look.",
  },
  {
    image: "plaid-shirt-1.png",
    title: "Red Plaid Shirt",
    stars: 4.5,
    currentPrice: 280,
    oldPrice: 320,
    color: "Red",
    otherColors: ["Green", "Blue", "Black"],
    size: ["M", "L", "XL"],
    type: "Shirt",
    dressStyle: "Casual",
    description:
      "This red plaid shirt is the perfect addition to your casual wardrobe, offering a classic and trendy style.",
  },
  {
    image: "plaid-shirt-2.png",
    title: "Green Plaid Shirt",
    stars: 4.3,
    currentPrice: 260,
    oldPrice: 300,
    color: "Green",
    otherColors: ["Red", "Blue", "Yellow"],
    size: ["S", "M", "L"],
    type: "Shirt",
    dressStyle: "Casual",
    description:
      "A green plaid shirt that adds a bit of personality to your casual outfits, made from soft cotton.",
  },
  {
    image: "white-tshirt-1.png",
    title: "White Cotton T-shirt",
    stars: 4.6,
    currentPrice: 230,
    oldPrice: 260,
    color: "White",
    otherColors: ["Grey", "Black", "Beige"],
    size: ["S", "M", "L"],
    type: "T-shirt",
    dressStyle: "Casual",
    description:
      "A simple and timeless white cotton T-shirt that provides comfort and versatility.",
  },
  {
    image: "white-tshirt-2.png",
    title: "Plain White T-shirt",
    stars: 4.2,
    currentPrice: 220,
    oldPrice: 250,
    color: "White",
    otherColors: ["Blue", "Grey", "Pink"],
    size: ["M", "L", "XL"],
    type: "T-shirt",
    dressStyle: "Casual",
    description:
      "A plain white T-shirt with a clean design, perfect for layering or wearing on its own.",
  },
];

// let productData = [
//   {
//     image: "orange-tshirt-1.png",
//     title: "Orange T-shirt with Details",
//     stars: 4.5,
//     currentPrice: 240,
//     oldPrice: 260,
//     color: "Orange",
//     size: ["S", "M", "L", "XL"],
//     type: "T-shirt",
//     dressStyle: "Casual",
//     description:
//       "A comfortable orange T-shirt with detailed stitching and a soft fabric, perfect for casual outings.",
//   },
//   {
//     image: "blue-jean-shorts.png",
//     title: "Stylish Blue Jeans",
//     stars: 4.8,
//     currentPrice: 300,
//     oldPrice: 350,
//     color: "Blue",
//     size: ["M", "L", "XL"],
//     type: "Shorts",
//     dressStyle: "Casual",
//     description:
//       "These stylish blue jeans offer a relaxed fit and are designed for both comfort and style.",
//   },
//   {
//     image: "blue-tshirt-1.png",
//     title: "Classic Blue T-shirt",
//     stars: 4.3,
//     currentPrice: 200,
//     oldPrice: 230,
//     color: "Blue",
//     size: ["S", "M", "L"],
//     type: "T-shirt",
//     dressStyle: "Casual",
//     description:
//       "A classic blue T-shirt made from soft cotton fabric, perfect for everyday wear.",
//   },
//   {
//     image: "brown-tshirt-1.png",
//     title: "Brown T-shirt with Pockets",
//     stars: 4.6,
//     currentPrice: 220,
//     oldPrice: 250,
//     color: "Brown",
//     size: ["M", "L", "XL"],
//     type: "T-shirt",
//     dressStyle: "Casual",
//     description:
//       "This brown T-shirt features convenient pockets and a comfortable fit, ideal for casual wear.",
//   },
//   {
//     image: "orange-tshirt-2.png",
//     title: "Bright Orange T-shirt",
//     stars: 4.2,
//     currentPrice: 180,
//     oldPrice: 200,
//     color: "Orange",
//     size: ["S", "M", "L"],
//     type: "T-shirt",
//     dressStyle: "Casual",
//     description:
//       "A bright orange T-shirt that adds a pop of color to your wardrobe, perfect for sunny days.",
//   },
//   {
//     image: "pants-image-1.png",
//     title: "Comfort Fit Pants",
//     stars: 4.7,
//     currentPrice: 400,
//     oldPrice: 450,
//     color: "Black",
//     size: ["M", "L", "XL"],
//     type: "Pants",
//     dressStyle: "Formal",
//     description:
//       "These black comfort fit pants offer a sleek look with a comfortable fit, great for formal occasions.",
//   },
//   {
//     image: "pants-image-2-jean.png",
//     title: "Regular Fit Jeans",
//     stars: 4.4,
//     currentPrice: 350,
//     oldPrice: 380,
//     color: "Blue",
//     size: ["M", "L", "XL"],
//     type: "Pants",
//     dressStyle: "Casual",
//     description:
//       "Regular fit blue jeans that provide comfort and a timeless style for any casual event.",
//   },
//   {
//     image: "pink-tshirt-1.png",
//     title: "Light Pink T-shirt",
//     stars: 4.1,
//     currentPrice: 190,
//     oldPrice: 210,
//     color: "Pink",
//     size: ["S", "M", "L"],
//     type: "T-shirt",
//     dressStyle: "Casual",
//     description:
//       "A light pink T-shirt with a soft feel, perfect for a relaxed and feminine look.",
//   },
//   {
//     image: "plaid-shirt-1.png",
//     title: "Red Plaid Shirt",
//     stars: 4.5,
//     currentPrice: 280,
//     oldPrice: 320,
//     color: "Red",
//     size: ["M", "L", "XL"],
//     type: "Shirt",
//     dressStyle: "Casual",
//     description:
//       "This red plaid shirt is the perfect addition to your casual wardrobe, offering a classic and trendy style.",
//   },
//   {
//     image: "plaid-shirt-2.png",
//     title: "Green Plaid Shirt",
//     stars: 4.3,
//     currentPrice: 260,
//     oldPrice: 300,
//     color: "Green",
//     size: ["S", "M", "L"],
//     type: "Shirt",
//     dressStyle: "Casual",
//     description:
//       "A green plaid shirt that adds a bit of personality to your casual outfits, made from soft cotton.",
//   },
//   {
//     image: "white-tshirt-1.png",
//     title: "White Cotton T-shirt",
//     stars: 4.6,
//     currentPrice: 230,
//     oldPrice: 260,
//     color: "White",
//     size: ["S", "M", "L"],
//     type: "T-shirt",
//     dressStyle: "Casual",
//     description:
//       "A simple and timeless white cotton T-shirt that provides comfort and versatility.",
//   },
//   {
//     image: "white-tshirt-2.png",
//     title: "Plain White T-shirt",
//     stars: 4.2,
//     currentPrice: 220,
//     oldPrice: 250,
//     color: "White",
//     size: ["M", "L", "XL"],
//     type: "T-shirt",
//     dressStyle: "Casual",
//     description:
//       "A plain white T-shirt with a clean design, perfect for layering or wearing on its own.",
//   },
// ];

productData.forEach((product) => {
  product.discount = parseFloat(
    ((product.oldPrice - product.currentPrice) / product.oldPrice) * 100
  ).toFixed(0);
});

localStorage.setItem("productData", JSON.stringify(productData));

document.addEventListener("DOMContentLoaded", () => {
  var ArrivalCards = document.querySelector(".new-arrival .cards");
  var lowPriceCards = document.querySelector(".low-price .cards");

  for (let i = 0; i < 4; i++) {
    ArrivalCards.innerHTML += product(
      productData[i].image,
      productData[i].title,
      productData[i].description,
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
      productData[i].description,
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

// To Product Page
// document.querySelector("card").addEventListener("click", () => {
//   alert(this.innerHTML);
// });
