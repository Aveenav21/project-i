const products = [
  { id: 1, name: "Apple", price: "120.00", img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=" },
  { id: 2, name: "Banana", price: "250.50", img: "https://img.freepik.com/free-photo/single-banana-isolated-white-background_839833-17794.jpg?semt=ais_hybrid&w=740" },
  { id: 3, name: "Mango", price: "340.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlWu-mr5StK02NWqTwXjwC1ubzoL8e1rrQQ&s" },
  { id: 4, name: "Pomegranate", price: "410.00", img: "https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/files/wonderful-pomegranate-tree.jpg?v=1729715185" },
  { id: 5, name: "Avocado", price: "199.99", img: "https://farmfreshbangalore.com/cdn/shop/products/Avocado.jpg?v=1655876628" },
  { id: 6, name: "Orange", price: "560.00", img: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=" },
  { id: 7, name: "Grapes", price: "630.20", img: "https://static.vecteezy.com/system/resources/thumbnails/044/868/984/small_2x/fruits-purple-grape-with-leaves-isolated-on-a-transparent-background-png.png" },
  { id: 8, name: "Strawberry", price: "720.75", img: "https://thumbs.dreamstime.com/b/three-strawberries-strawberry-leaf-white-background-114284301.jpg" },
  { id: 9, name: "Pineapple", price: "840.60", img: "https://thumbs.dreamstime.com/b/ripe-pineapple-2646596.jpg" },
  { id: 10, name: "Watermelon", price: "900.10", img: "https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg" },
  { id: 11, name: "Blueberries", price: "110.00", img: "https://www.healthyfood.com/wp-content/uploads/2017/03/Why_we_like_blueberries.jpg" },
  { id: 12, name: "Carrots", price: "130.45", img: "https://cdn.mafrservices.com/sys-master-root/h41/h99/12453069160478/1514_Main.jpg" },
  { id: 13, name: "Cucumbers", price: "270.99", img: "https://media.istockphoto.com/id/91516166/photo/cucumber-slices-on-a-white-background.jpg?s=612x612&w=0&k=20&c=n4R8_HB2qEmTgOU3xlINv1Am2Z_Mt4CuJiITPta58vw=" },
  { id: 14, name: "Dragonfruits", price: "350.00", img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Pitaya_cross_section_ed2.jpg" },
  { id: 15, name: "Papaya", price: "145.65", img: "https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hJ5DpNTt0oKjZMIHYV6gUHTntB2zIs_78dPKiuDUXgE=" },
  { id: 16, name: "Peach", price: "210.00", img: "https://t3.ftcdn.net/jpg/00/71/26/82/360_F_71268262_C86VtwNTq9yPWxoA55JUImOS925dysL1.jpg" },
  { id: 17, name: "Cantaloupe", price: "399.99", img: "https://media.istockphoto.com/id/153787565/photo/cantaloupe-melon.jpg?s=612x612&w=0&k=20&c=7zt5YtEWW_4UIPkb1s-INkW92ZG5uSy4ubGg2sSaqyI=" },
  { id: 18, name: "Plum", price: "490.10", img: "https://media.istockphoto.com/id/687478414/photo/red-cherry-plum-with-green-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vje7nFHGnWl-cHDA8wP_UZHryRT5LkAFwn7_8qKtiyc=" },
  { id: 19, name: "Guava", price: "320.00", img: "https://media.istockphoto.com/id/1192869182/photo/fresh-guava-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=UH0v5vlCNNovYLqJXBJkKNMK8zAJA27d4LfEbGSzf_A=" },
  { id: 20, name: "Pear", price: "540.30", img: "https://media.istockphoto.com/id/1131349074/photo/green-yellow-pear-fruits-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Hg2yOVcczmNEyqQKfmnxJQNhQQ7MRc1X2FhOZBIGKz4=" },
  { id: 21, name: "Kiwi", price: "180.00", img: "https://media.istockphoto.com/id/834807852/photo/whole-kiwi-fruit-and-half-kiwi-fruit-on-white.jpg?s=612x612&w=0&k=20&c=zliUVnZlYPcOxEDYef7PMmOEEODFr8FUkTYqqFVaRG8=" },
  { id: 22, name: "Passion Fruit", price: "275.75", img: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41893-018-0107-z/MediaObjects/41893_2018_107_Figa_HTML.jpg" },
  { id: 23, name: "Persimmon", price: "315.25", img: "https://fruter.ca/cdn/shop/files/hachiya_persimmons.png?v=1732132463" },
  { id: 24, name: "Grapefruit", price: "650.00", img: "https://extension.usu.edu/nutrition/images/Grapefruit12.png" },
  { id: 25, name: "Lemon", price: "720.15", img: "https://5.imimg.com/data5/SELLER/Default/2024/3/404284604/AK/AS/XE/199669632/lemon-500x500.jpg" },
];

let cart = [];

const productsContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

function renderProducts() {
  products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>रु${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartCount();
  showSuccessMessage();
}

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function showSuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.innerText = "✅ Successfully added to cart!";
  successMessage.style.backgroundColor = "#d4edda";
  successMessage.style.color = "#155724";
  successMessage.style.padding = "10px";
  successMessage.style.marginTop = "10px";
  successMessage.style.border = "1px solid #c3e6cb";
  successMessage.style.borderRadius = "5px";
  successMessage.style.textAlign = "center";
  successMessage.style.position = "fixed";
  successMessage.style.top = "20px";
  successMessage.style.left = "50%";
  successMessage.style.transform = "translateX(-50%)";
  successMessage.style.zIndex = "1000";
  document.body.appendChild(successMessage);

  setTimeout(() => {
      successMessage.remove();
  }, 700);
}

document.getElementById("view-cart-btn").addEventListener("click", () => {
  renderCart();
  cartContainer.classList.remove("hidden");
});

document.getElementById("close-cart-btn").addEventListener("click", () => {
  cartContainer.classList.add("hidden");
});

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - रु${item.price}`;
      cartItems.appendChild(li);
      total += parseFloat(item.price);
  });
  cartTotal.textContent = total.toFixed(2);
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
      alert("Your cart is empty!");
  } else {
      alert("Thank you for your purchase!");
      cart = [];
      updateCartCount();
      renderCart();
      cartContainer.classList.add("hidden");
  }
});

renderProducts();
