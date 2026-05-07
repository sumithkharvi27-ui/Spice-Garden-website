const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

const restaurantPhone = "917483276127";
const displayPhone = "+91 74832 76127";

const fallbackImage =
  "https://placehold.co/800x500/21160f/ffcc70?text=Spice+Garden+Food";

const menuItems = [
  {
    category: "Starters",
    items: [
      {
        name: "Paneer Tikka",
        price: "₹220",
        tag: "Veg",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
        desc: "Soft paneer cubes grilled with spicy tandoori masala."
      },
      {
        name: "Chicken Tikka",
        price: "₹280",
        tag: "Non-Veg",
        img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
        desc: "Juicy chicken pieces grilled with rich Indian spices."
      },
      {
        name: "Veg Manchurian",
        price: "₹180",
        tag: "Veg",
        img: "/images/veg-manchurian.jpg",
        desc: "Crispy vegetable balls tossed in Indo-Chinese sauce."
      },
      {
        name: "Chicken Lollipop",
        price: "₹290",
        tag: "Spicy",
        img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
        desc: "Crunchy chicken wings served with spicy dip."
      },
      {
        name: "Gobi Manchurian",
        price: "₹160",
        tag: "Popular",
        img: "/images/gobi-manchurian.jpg",
        desc: "Golden fried cauliflower tossed in garlic sauce."
      },
      {
        name: "Fish Fingers",
        price: "₹320",
        tag: "Seafood",
        img: "/images/fish-fingers.jpg",
        desc: "Crispy fish strips served with mayo and lemon."
      }
    ]
  },
  {
    category: "Biryani & Rice",
    items: [
      {
        name: "Hyderabadi Chicken Biryani",
        price: "₹260",
        tag: "Best Seller",
        img: "/images/hyderabadi-chicken-biryani.jpg",
        desc: "Dum cooked biryani with spicy chicken and basmati rice."
      },
      {
        name: "Mutton Biryani",
        price: "₹360",
        tag: "Premium",
        img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
        desc: "Royal mutton biryani cooked with premium spices."
      },
      {
        name: "Veg Biryani",
        price: "₹190",
        tag: "Veg",
        img: "/images/veg-biryani.jpg",
        desc: "Mixed vegetables cooked with aromatic basmati rice."
      },
      {
        name: "Egg Biryani",
        price: "₹210",
        tag: "Classic",
        img: "/images/egg-biryani.jpg",
        desc: "Flavorful biryani served with boiled egg and raita."
      },
      {
        name: "Jeera Rice",
        price: "₹130",
        tag: "Simple",
        img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
        desc: "Basmati rice tossed with cumin and mild spices."
      },
      {
        name: "Veg Fried Rice",
        price: "₹160",
        tag: "Chinese",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        desc: "Fresh vegetables tossed with rice and sauces."
      }
    ]
  },
  {
    category: "Indian Curries",
    items: [
      {
        name: "Paneer Butter Masala",
        price: "₹230",
        tag: "Veg",
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
        desc: "Creamy tomato curry with soft paneer cubes."
      },
      {
        name: "Kadai Paneer",
        price: "₹240",
        tag: "Spicy",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
        desc: "Paneer cooked with capsicum, onion and kadai masala."
      },
      {
        name: "Dal Makhani",
        price: "₹210",
        tag: "Creamy",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
        desc: "Slow cooked black dal with butter and cream."
      },
      {
        name: "Butter Chicken",
        price: "₹310",
        tag: "Premium",
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
        desc: "Chicken cooked in rich buttery tomato gravy."
      },
      {
        name: "Chicken Chettinad",
        price: "₹300",
        tag: "Hot",
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
        desc: "South Indian spicy chicken curry with bold masala."
      },
      {
        name: "Mutton Rogan Josh",
        price: "₹390",
        tag: "Royal",
        img: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
        desc: "Royal mutton curry cooked with Kashmiri spices."
      }
    ]
  },
  {
    category: "Breads",
    items: [
      {
        name: "Butter Naan",
        price: "₹50",
        tag: "Classic",
        img: "/images/butter-naan.jpg",
        desc: "Soft naan brushed with melted butter."
      },
      {
        name: "Garlic Naan",
        price: "₹70",
        tag: "Popular",
        img: "/images/garlic-naan.jpg",
        desc: "Naan topped with garlic, butter and coriander."
      },
      {
        name: "Tandoori Roti",
        price: "₹35",
        tag: "Healthy",
        img: "/images/tandoori-roti.jpg",
        desc: "Healthy wheat roti cooked in tandoor."
      },
      {
        name: "Cheese Naan",
        price: "₹110",
        tag: "Premium",
        img: "/images/cheese-naan.jpg",
        desc: "Premium naan stuffed with melted cheese."
      },
      {
        name: "Lachha Paratha",
        price: "₹80",
        tag: "Crispy",
        img: "/images/lachha-paratha.jpg",
        desc: "Layered paratha served hot and crispy."
      }
    ]
  },
  {
    category: "Chinese & Noodles",
    items: [
      {
        name: "Chicken Fried Rice",
        price: "₹210",
        tag: "Chinese",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        desc: "Rice tossed with chicken, egg and sauces."
      },
      {
        name: "Schezwan Fried Rice",
        price: "₹190",
        tag: "Spicy",
        img: "/images/schezwan-fried-rice.jpg",
        desc: "Spicy rice cooked with Schezwan sauce."
      },
      {
        name: "Veg Hakka Noodles",
        price: "₹170",
        tag: "Veg",
        img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80",
        desc: "Noodles tossed with fresh vegetables."
      },
      {
        name: "Chicken Noodles",
        price: "₹220",
        tag: "Non-Veg",
        img: "/images/chicken-noodles.jpg",
        desc: "Soft noodles tossed with chicken and sauces."
      },
      {
        name: "Chilli Chicken",
        price: "₹260",
        tag: "Hot",
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        desc: "Chicken tossed with onion, capsicum and chilli sauce."
      },
      {
        name: "Dragon Paneer",
        price: "₹230",
        tag: "Fusion",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        desc: "Crispy paneer tossed in spicy dragon sauce."
      }
    ]
  },
  {
    category: "South Indian",
    items: [
      {
        name: "Masala Dosa",
        price: "₹120",
        tag: "Classic",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
        desc: "Crispy dosa filled with potato masala."
      },
      {
        name: "Idli Vada Combo",
        price: "₹90",
        tag: "Breakfast",
        img: "/images/idli-vada-combo.jpg",
        desc: "Soft idli, crispy vada, sambar and chutney."
      },
      {
        name: "Ghee Podi Dosa",
        price: "₹150",
        tag: "Special",
        img: "https://images.unsplash.com/photo-1630409351217-bc4fa6422075?auto=format&fit=crop&w=800&q=80",
        desc: "Dosa roasted with ghee and spicy podi."
      },
      {
        name: "Poori Bhaji",
        price: "₹110",
        tag: "Veg",
        img: "/images/poori-bhaji.jpg",
        desc: "Fluffy pooris served with potato bhaji."
      },
      {
        name: "Curd Rice",
        price: "₹100",
        tag: "Comfort",
        img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
        desc: "Cool curd rice with mild seasoning."
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Gulab Jamun",
        price: "₹80",
        tag: "Sweet",
        img: "/images/gulab-jamun.jpg",
        desc: "Soft warm dessert soaked in sugar syrup."
      },
      {
        name: "Chocolate Brownie",
        price: "₹150",
        tag: "Premium",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        desc: "Rich chocolate brownie served warm."
      },
      {
        name: "Ice Cream Sundae",
        price: "₹140",
        tag: "Cold",
        img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=800&q=80",
        desc: "Ice cream with chocolate syrup and nuts."
      },
      {
        name: "Rasmalai",
        price: "₹120",
        tag: "Indian",
        img: "/images/rasmalai.jpg",
        desc: "Soft milk dessert with saffron flavour."
      },
      {
        name: "Cheesecake",
        price: "₹190",
        tag: "Luxury",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
        desc: "Creamy cheesecake with smooth texture."
      },
      {
        name: "Chocolate Lava Cake",
        price: "₹180",
        tag: "Hot",
        img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
        desc: "Warm chocolate cake with melted chocolate center."
      }
    ]
  },
  {
    category: "Mocktails & Drinks",
    items: [
      {
        name: "Cold Coffee",
        price: "₹110",
        tag: "Chilled",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
        desc: "Creamy cold coffee with chocolate topping."
      },
      {
        name: "Virgin Mojito",
        price: "₹130",
        tag: "Fresh",
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
        desc: "Mint, lemon and soda based refreshing drink."
      },
      {
        name: "Mango Shake",
        price: "₹120",
        tag: "Seasonal",
        img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80",
        desc: "Thick mango shake with creamy texture."
      },
      {
        name: "Blue Lagoon",
        price: "₹150",
        tag: "Premium",
        img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
        desc: "Blue mocktail with lemon and soda."
      },
      {
        name: "Fresh Lime Soda",
        price: "₹90",
        tag: "Classic",
        img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80",
        desc: "Sweet or salted lime soda served chilled."
      },
      {
        name: "Watermelon Cooler",
        price: "₹140",
        tag: "Summer",
        img: "/images/watermelon-cooler.jpg",
        desc: "Refreshing watermelon drink served cold."
      }
    ]
  }
];

const categories = ["All", ...menuItems.map(section => section.category)];

const categoryButtons = categories
  .map(category => {
    const activeClass = category === "All" ? "active" : "";
    return `<button class="filter-btn ${activeClass}" onclick='filterMenu(${JSON.stringify(category)}, this)'>${category}</button>`;
  })
  .join("");

const menuHTML = menuItems
  .map(section => `
    <div class="category-block" data-category="${section.category}">
      <h2 class="category-title">${section.category}</h2>
      <div class="menu-grid">
        ${section.items
          .map(item => `
            <div class="menu-card">
              <div class="menu-img-box">
                <img
                  src="${item.img}"
                  alt="${item.name}"
                  class="menu-img"
                  loading="lazy"
                  onerror="this.onerror=null;this.src='${fallbackImage}';"
                >
                <span class="menu-tag">${item.tag}</span>
              </div>

              <div class="menu-content">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>

                <div class="price-row">
                  <span class="price">${item.price}</span>
                  <button
                    class="cart-btn"
                    data-name="${item.name}"
                    data-price="${item.price}"
                    onclick="addToCartFromButton(this)"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          `)
          .join("")}
      </div>
    </div>
  `)
  .join("");

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Spice Garden Premium Restaurant</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Segoe UI", Arial, sans-serif;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: #090604;
      color: white;
    }

    header {
      min-height: 100vh;
      background:
        linear-gradient(rgba(0,0,0,0.76), rgba(0,0,0,0.76)),
        url("https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80");
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
    }

    nav {
      width: 100%;
      padding: 20px 8%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0,0,0,0.48);
      backdrop-filter: blur(14px);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      border-bottom: 1px solid rgba(255, 204, 112, 0.22);
    }

    .logo {
      font-size: 30px;
      font-weight: 900;
      color: #ffcc70;
      letter-spacing: 1px;
    }

    .logo span {
      color: white;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin-left: 24px;
      font-weight: 700;
      font-size: 15px;
      transition: 0.3s;
    }

    nav a:hover {
      color: #ffcc70;
    }

    .hero {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 130px 8% 50px;
    }

    .hero h1 {
      font-size: 72px;
      line-height: 1.1;
      margin-bottom: 20px;
    }

    .hero h1 span {
      color: #ffcc70;
    }

    .hero p {
      font-size: 22px;
      color: #f1dfc2;
      margin-bottom: 35px;
    }

    .hero-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 15px 34px;
      border-radius: 40px;
      text-decoration: none;
      font-weight: 900;
      display: inline-block;
      transition: 0.3s;
    }

    .btn-primary {
      background: #ffcc70;
      color: #120803;
      box-shadow: 0 12px 35px rgba(255,204,112,0.3);
    }

    .btn-outline {
      color: #ffcc70;
      border: 1px solid #ffcc70;
    }

    .btn:hover {
      transform: translateY(-4px);
      background: white;
      color: #120803;
    }

    section {
      padding: 90px 8%;
    }

    .section-title {
      text-align: center;
      margin-bottom: 50px;
    }

    .section-title h2 {
      font-size: 46px;
      color: #ffcc70;
      margin-bottom: 12px;
    }

    .section-title p {
      color: #d8c3a5;
      font-size: 18px;
    }

    .about {
      background: #140d08;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 45px;
      align-items: center;
    }

    .about-text h3 {
      font-size: 35px;
      color: white;
      margin-bottom: 20px;
    }

    .about-text p {
      color: #d8c3a5;
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 18px;
    }

    .about img {
      width: 100%;
      height: 430px;
      object-fit: cover;
      border-radius: 30px;
      border: 1px solid rgba(255,204,112,0.25);
      box-shadow: 0 25px 65px rgba(0,0,0,0.6);
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 22px;
      margin-top: 45px;
    }

    .stat-card {
      background: linear-gradient(145deg, #21160f, #100a06);
      border: 1px solid rgba(255,204,112,0.18);
      border-radius: 24px;
      padding: 28px;
      text-align: center;
      box-shadow: 0 18px 45px rgba(0,0,0,0.35);
    }

    .stat-card h3 {
      color: #ffcc70;
      font-size: 34px;
      margin-bottom: 8px;
    }

    .stat-card p {
      color: #d8c3a5;
    }

    .menu-section {
      background:
        radial-gradient(circle at top, rgba(255,204,112,0.13), transparent 35%),
        #090604;
    }

    .filter-bar {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 45px;
    }

    .filter-btn {
      border: 1px solid rgba(255,204,112,0.32);
      background: rgba(255,204,112,0.08);
      color: #ffcc70;
      padding: 11px 18px;
      border-radius: 30px;
      font-weight: 900;
      cursor: pointer;
      transition: 0.3s;
    }

    .filter-btn:hover,
    .filter-btn.active {
      background: #ffcc70;
      color: #120803;
      transform: translateY(-2px);
    }

    .category-block {
      margin-bottom: 75px;
    }

    .category-title {
      font-size: 32px;
      color: white;
      margin-bottom: 25px;
      padding-left: 16px;
      border-left: 5px solid #ffcc70;
    }

    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 28px;
    }

    .menu-card {
      background: linear-gradient(145deg, #21160f, #100a06);
      border-radius: 28px;
      overflow: hidden;
      border: 1px solid rgba(255,204,112,0.17);
      box-shadow: 0 18px 45px rgba(0,0,0,0.45);
      transition: 0.35s;
    }

    .menu-card:hover {
      transform: translateY(-10px);
      border-color: rgba(255,204,112,0.55);
      box-shadow: 0 25px 70px rgba(255,159,28,0.15);
    }

    .menu-img-box {
      position: relative;
      height: 215px;
      overflow: hidden;
      background: linear-gradient(135deg, #21160f, #3b2614);
    }

    .menu-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.45s;
      display: block;
    }

    .menu-card:hover .menu-img {
      transform: scale(1.12);
    }

    .menu-tag {
      position: absolute;
      top: 15px;
      right: 15px;
      background: rgba(0,0,0,0.72);
      color: #ffcc70;
      padding: 8px 14px;
      border-radius: 30px;
      font-size: 12px;
      font-weight: 900;
      border: 1px solid rgba(255,204,112,0.35);
      backdrop-filter: blur(8px);
    }

    .menu-content {
      padding: 22px;
    }

    .menu-content h3 {
      font-size: 22px;
      color: #ffcc70;
      margin-bottom: 10px;
    }

    .menu-content p {
      color: #cdb99a;
      line-height: 1.6;
      font-size: 15px;
      min-height: 50px;
    }

    .price-row {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .price {
      font-size: 24px;
      font-weight: 900;
      color: white;
    }

    .cart-btn {
      border: none;
      text-decoration: none;
      padding: 10px 18px;
      border-radius: 30px;
      background: #ffcc70;
      color: #120803;
      font-weight: 900;
      cursor: pointer;
      transition: 0.3s;
      font-size: 14px;
      white-space: nowrap;
    }

    .cart-btn:hover {
      background: white;
      transform: scale(1.05);
    }

    .specials {
      background: #140d08;
    }

    .special-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 28px;
    }

    .special-card {
      min-height: 300px;
      border-radius: 30px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      border: 1px solid rgba(255,204,112,0.25);
      box-shadow: 0 25px 65px rgba(0,0,0,0.5);
      overflow: hidden;
      position: relative;
      background: #21160f;
    }

    .special-card img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }

    .special-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.88));
      z-index: 1;
    }

    .special-card div {
      position: relative;
      z-index: 2;
    }

    .special-card h3 {
      color: #ffcc70;
      font-size: 28px;
      margin-bottom: 10px;
    }

    .special-card p {
      color: #f7e6c7;
      margin-bottom: 12px;
      line-height: 1.6;
    }

    .special-card h2 {
      font-size: 34px;
      color: white;
    }

    .contact {
      background:
        linear-gradient(rgba(0,0,0,0.86), rgba(0,0,0,0.86)),
        url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80");
      background-size: cover;
      background-position: center;
    }

    .contact-box {
      max-width: 1100px;
      margin: auto;
      background: rgba(20, 13, 8, 0.88);
      border: 1px solid rgba(255,204,112,0.25);
      border-radius: 30px;
      padding: 45px;
      backdrop-filter: blur(10px);
      box-shadow: 0 25px 70px rgba(0,0,0,0.55);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      align-items: stretch;
      margin-top: 25px;
    }

    .contact-info {
      background: rgba(255, 204, 112, 0.06);
      border: 1px solid rgba(255, 204, 112, 0.18);
      border-radius: 24px;
      padding: 28px;
      text-align: left;
    }

    .contact-info h3 {
      color: #ffcc70;
      font-size: 26px;
      margin-bottom: 18px;
    }

    .contact-info p {
      font-size: 18px;
      color: #e7d4b5;
      margin: 14px 0;
    }

    .contact-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 22px;
    }

    .contact-btn {
      text-decoration: none;
      padding: 13px 20px;
      border-radius: 35px;
      font-weight: 900;
      background: #ffcc70;
      color: #120803;
      transition: 0.3s;
    }

    .contact-btn:hover {
      background: white;
      transform: translateY(-3px);
    }

    .map-box {
      overflow: hidden;
      border-radius: 24px;
      border: 1px solid rgba(255, 204, 112, 0.22);
      min-height: 370px;
      box-shadow: 0 20px 55px rgba(0,0,0,0.45);
    }

    .map-box iframe {
      width: 100%;
      height: 100%;
      min-height: 370px;
      border: 0;
    }

    .floating-cart {
      position: fixed;
      right: 22px;
      bottom: 96px;
      background: #ffcc70;
      color: #120803;
      border: none;
      padding: 16px 20px;
      border-radius: 50px;
      font-weight: 900;
      box-shadow: 0 15px 40px rgba(0,0,0,0.45);
      z-index: 999;
      cursor: pointer;
      transition: 0.3s;
    }

    .floating-cart:hover {
      transform: scale(1.08);
      background: white;
    }

    .whatsapp-float {
      position: fixed;
      right: 22px;
      bottom: 22px;
      background: #25D366;
      color: white;
      text-decoration: none;
      padding: 16px 20px;
      border-radius: 50px;
      font-weight: 900;
      box-shadow: 0 15px 40px rgba(0,0,0,0.45);
      z-index: 999;
      transition: 0.3s;
    }

    .whatsapp-float:hover {
      transform: scale(1.08);
      background: #1ebe5d;
    }

    .cart-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.65);
      z-index: 1000;
      display: none;
    }

    .cart-drawer {
      position: fixed;
      top: 0;
      right: -420px;
      width: 400px;
      max-width: 92%;
      height: 100vh;
      background: #120b06;
      z-index: 1001;
      padding: 25px;
      border-left: 1px solid rgba(255,204,112,0.25);
      box-shadow: -20px 0 60px rgba(0,0,0,0.55);
      transition: 0.35s;
      overflow-y: auto;
    }

    .cart-drawer.open {
      right: 0;
    }

    .cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      border-bottom: 1px solid rgba(255,204,112,0.16);
      padding-bottom: 18px;
    }

    .cart-header h2 {
      color: #ffcc70;
      font-size: 28px;
    }

    .close-cart {
      background: transparent;
      color: white;
      border: 1px solid rgba(255,204,112,0.3);
      width: 38px;
      height: 38px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 20px;
    }

    .cart-item {
      background: linear-gradient(145deg, #21160f, #100a06);
      border: 1px solid rgba(255,204,112,0.14);
      border-radius: 18px;
      padding: 16px;
      margin-bottom: 14px;
    }

    .cart-item-top {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }

    .cart-item h3 {
      font-size: 17px;
      color: #ffcc70;
    }

    .cart-item p {
      color: white;
      font-weight: 900;
    }

    .qty-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .qty-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .qty-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: none;
      background: #ffcc70;
      color: #120803;
      font-weight: 900;
      cursor: pointer;
    }

    .remove-btn {
      border: none;
      background: transparent;
      color: #ff7676;
      font-weight: 800;
      cursor: pointer;
    }

    .empty-cart {
      color: #d8c3a5;
      text-align: center;
      padding: 40px 10px;
      line-height: 1.6;
    }

    .cart-total {
      margin-top: 22px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,204,112,0.18);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 22px;
      font-weight: 900;
    }

    .checkout-btn {
      width: 100%;
      margin-top: 20px;
      padding: 15px;
      border: none;
      border-radius: 40px;
      background: #25D366;
      color: white;
      font-weight: 900;
      font-size: 16px;
      cursor: pointer;
      transition: 0.3s;
    }

    .checkout-btn:hover {
      background: #1ebe5d;
      transform: translateY(-3px);
    }

    .toast {
      position: fixed;
      left: 50%;
      bottom: 30px;
      transform: translateX(-50%) translateY(120px);
      background: #ffcc70;
      color: #120803;
      padding: 13px 20px;
      border-radius: 40px;
      font-weight: 900;
      z-index: 2000;
      box-shadow: 0 12px 35px rgba(0,0,0,0.4);
      transition: 0.35s;
    }

    .toast.show {
      transform: translateX(-50%) translateY(0);
    }

    footer {
      background: #050302;
      padding: 25px;
      text-align: center;
      color: #bda98c;
      border-top: 1px solid rgba(255,204,112,0.15);
    }

    @media (max-width: 850px) {
      nav {
        flex-direction: column;
        gap: 15px;
        padding: 16px 5%;
      }

      nav a {
        margin: 7px;
        font-size: 14px;
      }

      .hero h1 {
        font-size: 42px;
      }

      .hero p {
        font-size: 18px;
      }

      .about-grid,
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .about img {
        height: 300px;
      }

      section {
        padding: 70px 6%;
      }

      .section-title h2 {
        font-size: 36px;
      }

      .contact-box {
        padding: 28px;
      }

      .floating-cart {
        right: 14px;
        bottom: 86px;
        padding: 14px 16px;
        font-size: 14px;
      }

      .whatsapp-float {
        right: 14px;
        bottom: 14px;
        padding: 14px 16px;
        font-size: 14px;
      }
    }
  </style>
</head>

<body>

  <header>
    <nav>
      <div class="logo">Spice <span>Garden</span></div>

      <div>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#specials">Specials</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <div class="hero">
      <div>
        <h1>Luxury Dining <br><span>Indian Taste</span></h1>
        <p>Premium food, royal ambience, fresh ingredients and unforgettable taste.</p>

        <div class="hero-buttons">
          <a href="#menu" class="btn btn-primary">Explore Menu</a>
          <a href="https://wa.me/${restaurantPhone}?text=Hi%20Spice%20Garden%2C%20I%20want%20to%20book%20a%20table" target="_blank" class="btn btn-outline">Book Table</a>
        </div>
      </div>
    </div>
  </header>

  <section class="about" id="about">
    <div class="section-title">
      <h2>About Our Restaurant</h2>
      <p>A premium restaurant experience made for food lovers.</p>
    </div>

    <div class="about-grid">
      <div class="about-text">
        <h3>Where taste meets luxury</h3>

        <p>
          Spice Garden is a premium dining restaurant serving rich Indian flavours,
          fresh tandoori dishes, biryanis, desserts, mocktails and family combos.
        </p>

        <p>
          Our restaurant is perfect for family dinners, birthday parties, dates,
          office meetups and weekend food cravings.
        </p>

        <div class="hero-buttons">
          <a href="#menu" class="btn btn-primary">View Full Menu</a>
          <a href="tel:+${restaurantPhone}" class="btn btn-outline">Call Now</a>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
        alt="Restaurant interior"
        onerror="this.onerror=null;this.src='${fallbackImage}';"
      >
    </div>

    <div class="stats">
      <div class="stat-card">
        <h3>46+</h3>
        <p>Menu Items</p>
      </div>

      <div class="stat-card">
        <h3>8</h3>
        <p>Food Categories</p>
      </div>

      <div class="stat-card">
        <h3>10 AM</h3>
        <p>Opening Time</p>
      </div>

      <div class="stat-card">
        <h3>4.8★</h3>
        <p>Customer Rating</p>
      </div>
    </div>
  </section>

  <section class="menu-section" id="menu">
    <div class="section-title">
      <h2>Premium Menu With Photos</h2>
      <p>Add items to cart and place the full order directly on WhatsApp.</p>
    </div>

    <div class="filter-bar">
      ${categoryButtons}
    </div>

    ${menuHTML}
  </section>

  <section class="specials" id="specials">
    <div class="section-title">
      <h2>Chef Specials</h2>
      <p>Premium combos for families, students and weekend cravings.</p>
    </div>

    <div class="special-grid">
      <div class="special-card">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
          alt="Royal Family Combo"
          onerror="this.onerror=null;this.src='${fallbackImage}';"
        >
        <div>
          <h3>Royal Family Combo</h3>
          <p>2 Biryanis + 2 Starters + 2 Drinks + Dessert</p>
          <h2>₹799</h2>
        </div>
      </div>

      <div class="special-card">
        <img
          src="/images/biryani-feast.jpg"
          alt="Biryani Feast"
          onerror="this.onerror=null;this.src='${fallbackImage}';"
        >
        <div>
          <h3>Biryani Feast</h3>
          <p>Chicken biryani, kebab, raita and fresh lime soda.</p>
          <h2>₹399</h2>
        </div>
      </div>

      <div class="special-card">
        <img
          src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80"
          alt="Dessert Lover"
          onerror="this.onerror=null;this.src='${fallbackImage}';"
        >
        <div>
          <h3>Dessert Lover</h3>
          <p>Brownie, ice cream, gulab jamun and cold coffee.</p>
          <h2>₹299</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="contact-box">
      <div class="section-title">
        <h2>Book Your Table</h2>
        <p>Reserve your seat or order directly on WhatsApp.</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info">
          <h3>Spice Garden Premium Restaurant</h3>

          <p>📍 BTM Layout, Bangalore</p>
          <p>📞 ${displayPhone}</p>
          <p>📧 spicegarden@example.com</p>
          <p>⏰ Open: 10 AM - 11 PM</p>
          <p>🍽️ Dine-in | Takeaway | Party Orders | Family Dining</p>

          <div class="contact-actions">
            <a class="contact-btn" href="tel:+${restaurantPhone}">Call Now</a>
            <a class="contact-btn" href="https://wa.me/${restaurantPhone}?text=Hi%20Spice%20Garden%2C%20I%20want%20to%20book%20a%20table" target="_blank">WhatsApp Booking</a>
          </div>
        </div>

        <div class="map-box">
          <iframe
            src="https://www.google.com/maps?q=BTM%20Layout%2C%20Bangalore&output=embed"
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <p>© 2026 Spice Garden Premium Restaurant. All rights reserved.</p>
  </footer>

  <button class="floating-cart" onclick="openCart()">
    🛒 Cart <span id="cartCount">0</span>
  </button>

  <a class="whatsapp-float" href="https://wa.me/${restaurantPhone}?text=Hi%20Spice%20Garden%2C%20I%20want%20to%20order%20food" target="_blank">
    WhatsApp
  </a>

  <div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>

  <div class="cart-drawer" id="cartDrawer">
    <div class="cart-header">
      <h2>Your Cart</h2>
      <button class="close-cart" onclick="closeCart()">×</button>
    </div>

    <div id="cartItems"></div>

    <div class="cart-total">
      <span>Total</span>
      <span id="cartTotal">₹0</span>
    </div>

    <button class="checkout-btn" onclick="checkoutWhatsApp()">
      Order on WhatsApp
    </button>
  </div>

  <div class="toast" id="toast">Added to cart</div>

  <script>
    const PHONE = "${restaurantPhone}";
    let cart = [];

    function filterMenu(category, clickedButton) {
      const blocks = document.querySelectorAll(".category-block");
      const buttons = document.querySelectorAll(".filter-btn");

      buttons.forEach(function(button) {
        button.classList.remove("active");
      });

      clickedButton.classList.add("active");

      blocks.forEach(function(block) {
        if (category === "All" || block.dataset.category === category) {
          block.style.display = "block";
        } else {
          block.style.display = "none";
        }
      });
    }

    function addToCartFromButton(button) {
      const name = button.getAttribute("data-name");
      const price = button.getAttribute("data-price");
      addToCart(name, price);
    }

    function priceToNumber(price) {
      return Number(price.replace(/[^0-9]/g, "")) || 0;
    }

    function addToCart(name, price) {
      const existingItem = cart.find(function(item) {
        return item.name === name;
      });

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        cart.push({
          name: name,
          price: price,
          qty: 1
        });
      }

      renderCart();
      showToast(name + " added to cart");
    }

    function increaseQty(name) {
      const item = cart.find(function(cartItem) {
        return cartItem.name === name;
      });

      if (item) {
        item.qty += 1;
      }

      renderCart();
    }

    function decreaseQty(name) {
      const item = cart.find(function(cartItem) {
        return cartItem.name === name;
      });

      if (!item) return;

      item.qty -= 1;

      if (item.qty <= 0) {
        removeItem(name);
      } else {
        renderCart();
      }
    }

    function removeItem(name) {
      cart = cart.filter(function(item) {
        return item.name !== name;
      });

      renderCart();
    }

    function getCartTotal() {
      return cart.reduce(function(total, item) {
        return total + priceToNumber(item.price) * item.qty;
      }, 0);
    }

    function getCartCount() {
      return cart.reduce(function(total, item) {
        return total + item.qty;
      }, 0);
    }

    function safeText(text) {
      return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function renderCart() {
      const cartItems = document.getElementById("cartItems");
      const cartTotal = document.getElementById("cartTotal");
      const cartCount = document.getElementById("cartCount");

      cartCount.textContent = getCartCount();
      cartTotal.textContent = "₹" + getCartTotal();

      if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty.<br>Add food items from the menu.</div>';
        return;
      }

      cartItems.innerHTML = cart.map(function(item) {
        const itemTotal = priceToNumber(item.price) * item.qty;
        const itemName = safeText(item.name);

        return (
          '<div class="cart-item">' +
            '<div class="cart-item-top">' +
              '<h3>' + itemName + '</h3>' +
              '<p>₹' + itemTotal + '</p>' +
            '</div>' +

            '<div class="qty-row">' +
              '<div class="qty-controls">' +
                '<button class="qty-btn" onclick="decreaseQty(' + JSON.stringify(item.name).replace(/"/g, "&quot;") + ')">−</button>' +
                '<strong>' + item.qty + '</strong>' +
                '<button class="qty-btn" onclick="increaseQty(' + JSON.stringify(item.name).replace(/"/g, "&quot;") + ')">+</button>' +
              '</div>' +

              '<button class="remove-btn" onclick="removeItem(' + JSON.stringify(item.name).replace(/"/g, "&quot;") + ')">Remove</button>' +
            '</div>' +
          '</div>'
        );
      }).join("");
    }

    function openCart() {
      document.getElementById("cartDrawer").classList.add("open");
      document.getElementById("cartOverlay").style.display = "block";
    }

    function closeCart() {
      document.getElementById("cartDrawer").classList.remove("open");
      document.getElementById("cartOverlay").style.display = "none";
    }

    function checkoutWhatsApp() {
      if (cart.length === 0) {
        alert("Your cart is empty. Please add items first.");
        return;
      }

      let message = "Hi Spice Garden, I want to place this order:\\n\\n";

      cart.forEach(function(item, index) {
        const itemTotal = priceToNumber(item.price) * item.qty;
        message += (index + 1) + ". " + item.name + " x " + item.qty + " = ₹" + itemTotal + "\\n";
      });

      message += "\\nTotal: ₹" + getCartTotal();
      message += "\\n\\nName:";
      message += "\\nAddress:";
      message += "\\nPayment: Cash/UPI";

      window.open("https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message), "_blank");
    }

    function showToast(text) {
      const toast = document.getElementById("toast");
      toast.textContent = text;
      toast.classList.add("show");

      setTimeout(function() {
        toast.classList.remove("show");
      }, 1600);
    }

    renderCart();
  </script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("Restaurant website running at http://localhost:" + PORT);
});