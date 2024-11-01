import { handleSlider } from "./slider";
import "./style.css";
import "./media.css";
document.querySelector("#app").innerHTML = `
      <a href="#hero" class="skip-link" role="doc-tip" tabindex="0">
        Skip to main content
      </a>
      <header class="header">
        <nav class="nav">
          <div class="nav_top">
            <div class="wrapper">
              <div class="left" tabindex="0">
                Welcome to worldwide Megamart!
              </div>
              <div class="right">
                <a href="#" class="link">
                  <i class="fa-solid fa-location-dot"></i> Deliver to
                  <strong>432631</strong>
                </a>
                <a href="#" class="link">
                  <img src="/assets/truck-icon.svg" alt="truck icon" />
                  Track your order
                </a>
                <a href="#" class="link">
                  <img src="/assets/Discount.svg" alt="discount icon" />
                  All Offers
                </a>
              </div>
            </div>
          </div>
          <div class="nav_bottom">
            <div class="wrapper">
              <div class="left">
                <button
                  id="sidebar-btn"
                  aria-label="open sidebar button"
                  tabindex="0">
                  <img src="/assets/bars.webp" alt="bars" />
                </button>
                <div id="logo"><a href="index.html">MegaMart</a></div>
              </div>
              <div class="right">
                <div class="search-input">
                  <button class="magnifying-glass" aria-label="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <input
                    type="search"
                    class="input"
                    placeholder="Search essentials, groceries and more..."
                    aria-label="Search input"
                    name="search input" />
                  <button class="input-list" aria-label="search list">
                    <i class="fa-solid fa-list-ul"></i>
                  </button>
                </div>
                <div class="sign-up_cart">
                  <button class="sign-up">
                    <i class="fa-regular fa-user"></i>
                    Sign Up/Sign In
                  </button>
                  <button id="cart">
                    <img src="/assets/shopping-cart.svg" alt="shopping cart" />
                    Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="categories">
          <div class="wrapper">
            <div class="groceries category">
              <button class="toggle-btn">
                Groceries <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="category-content grocery">
                <a href="#">Meet</a>
                <a href="#">Baking</a>
                <a href="#">Pet food</a>
                <a href="#">Drinks</a>
                <a href="#">Pasta & Cereals</a>
              </div>
            </div>
            <div class="premium-fruits category">
              <button class="toggle-btn">
                Premium Fruits <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="category-content premium-fruit">
                <a href="#">Avocado</a>
                <a href="#">Bananas</a>
                <a href="#">Berries</a>
                <a href="#">Grapes</a>
                <a href="#">Kiwi</a>
                <a href="#">Melons</a>
                <a href="#">Peaches</a>
                <a href="#">Plums</a>
              </div>
            </div>
            <div class="home-kitchen category">
              <button class="toggle-btn">
                Home & Kitchen <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="category-content home-kitchen-content">
                <a href="#">Blenders</a>
                <a href="#">Mixers</a>
                <a href="#">Vacuum Cleaners</a>
                <a href="#">Washing machines</a>
                <a href="#">Toasters</a>
                <a href="#">Juicers</a>
                <a href="#">Refrigerators</a>
              </div>
            </div>
            <div class="fashions category">
              <button class="toggle-btn">
                Fashions <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="category-content fashion-content">
                <a href="#">Casual</a>
                <a href="#">Minimalist</a>
                <a href="#">Formal</a>
                <a href="#">Vintage</a>
                <a href="#">Streetwear</a>
                <a href="#">Preppy</a>
                <a href="#">Artsy</a>
              </div>
            </div>
            <div class="category">
              <button class="toggle-btn">
                Electronics <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="category-content">
                <a href="#">Speaker</a>
                <a href="#">Alarm Clock</a>
                <a href="#">Hair Dryer</a>
                <a href="#">Fan</a>
                <a href="#">Headphones</a>
              </div>
            </div>
            <div class="category">
              <button class="toggle-btn">
                Beauty <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="category-content">
                <a href="#">Oral Care</a>
                <a href="#">Skin care</a>
                <a href="#">Sun care</a>
                <a href="#">Hair care</a>
                <a href="#">Decorative cosmetics</a>
              </div>
            </div>
            <div class="category">
              <button class="toggle-btn">
                Home Improvement <i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="category-content">
                <a href="#">Meet</a>
                <a href="#">Baking</a>
                <a href="#">Pet food</a>
                <a href="#">Drinks</a>
                <a href="#">Pasta & Cereals</a>
              </div>
            </div>
            <div class="premium-fruits category">
              <button class="toggle-btn">
                Sports, Toys & Luggage<i class="fa-solid fa-chevron-down"></i>
              </button>
              <div class="category-content">
                <a href="#">Meet</a>
                <a href="#">Baking</a>
                <a href="#">Pet food</a>
                <a href="#">Drinks</a>
                <a href="#">Pasta & Cereals</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside class="sidebar">
        <div class="wrapper">
          <span class="sidebar-heading" role="heading"> MegaMart </span>
          <div class="sidebar-content">
            <ul role="menu">
              <li class="item">
                <button
                  id="sidebar-close-btn"
                  aria-label="Close Sidebar"
                  role="menuitem"
                  tabindex="0">
                  <i class="fa-solid fa-xmark"></i> Close
                </button>
              </li>
              <li class="item">
                <button class="sign-up" role="menuitem" tabindex="0">
                  <i class="fa-regular fa-user"></i>
                  Sign Up/Sign In
                </button>
              </li>
              <li class="item">
                <button class="cart" role="menuitem" tabindex="0">
                  <i class="fa-solid fa-cart-shopping"></i>Cart
                </button>
              </li>
              <li class="item">
                <a href="#" aria-label="Delivery" role="menuitem" tabindex="0">
                  <i class="fa-solid fa-location-dot"></i> Deliver to
                  <strong>432631</strong>
                </a>
              </li>
              <li class="item">
                <a href="#" aria-label="order" role="menuitem" tabindex="0">
                  <i class="fa-solid fa-truck"></i> Track your order
                </a>
              </li>
              <li class="item">
                <a href="#" aria-label="offer" role="menuitem">
                  <i class="fa-solid fa-tag"></i>All Offers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <main id="hero" class="main" role="main">
        <div class="slider">
          <div class="slider-content">
            <div class="slide fade">
              <div class="slide-title">
                <h1 class="heading1">Best Deal Online on smart watches</h1>
                <h2 class="heading2">SMART WEARABLE.</h2>
                <p class="heading3">Up to 80% OFF</p>
              </div>
              <img
                src="/assets/main-watch.webp"
                alt="Smart Watch"
                class="slider-image"
                loading="eager" />
            </div>
            <div class="slide fade">
              <div class="slide-title">
                <h1 class="heading1">Elevate Your Space with Unique Decor</h1>
                <h2 class="heading2">Diverse Styles.</h2>
                <p class="heading3">Up to 50% OFF</p>
              </div>
              <img
                src="/assets/main-plant.webp"
                alt="Decor"
                class="slider-image"
                loading="eager" />
            </div>
            <!-- Add more slides as needed -->
          </div>

          <button class="prev-slide">&#10094;</button>
          <button class="next-slide">&#10095;</button>
          <div class="slider-dots">
            <span class="dot active"></span>
            <span class="dot"></span>
          </div>
        </div>
        <section class="sm-sc" role="navigation">
          <div class="wrapper">
            <div class="sm-tab tab">
              <p tabindex="0">
                Grab the best deal on
                <span class="blue-word">Smartphones</span>
              </p>
              <button class="sm-viewall">
                View all
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div class="sm-wrapper">
              <div
                class="phone"
                aria-label="galaxy S22 Ultra"
                role="button"
                tabindex="0">
                <div class="phone-img">
                  <img
                    src="/assets/galaxys22.webp"
                    alt="phone, smartphone, phone image"
                    loading="lazy" />
                  <div class="discount">
                    <span>30%<br />OFF</span>
                  </div>
                </div>
                <div class="phone-bio">
                  <span class="phone-name"> Galaxy S22 Ultra </span>
                  <span class="phone-price">
                    <b>$560</b>
                    <span
                      class="line-through"
                      style="text-decoration: line-through"
                      >$800</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $240</div>
              </div>
              <div
                class="phone"
                aria-label="Galaxy M13 4Gb / 64Gb"
                role="button"
                tabindex="0">
                <div class="phone-img">
                  <img
                    src="/assets/galaxym13.webp"
                    alt="phone, smartphone, phone image"
                    loading="lazy" />
                  <div class="discount">
                    <span>20%<br />OFF</span>
                  </div>
                </div>
                <div class="phone-bio">
                  <span class="phone-name">Galaxy M13 (4GB | 64 GB )</span>
                  <span class="phone-price">
                    <b>$160</b>
                    <span
                      class="line-through"
                      style="text-decoration: line-through"
                      >$200</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $40</div>
              </div>
              <div
                class="phone"
                aria-label="Galaxy M33 4Gb / 64Gb"
                role="button"
                tabindex="0">
                <div class="phone-img">
                  <img
                    src="/assets/galaxym33.webp"
                    alt="phone, smartphone, phone image"
                    loading="lazy" />
                  <div class="discount">
                    <span>10%<br />OFF</span>
                  </div>
                </div>
                <div class="phone-bio">
                  <span class="phone-name">Galaxy M33 (4GB | 64 GB )</span>
                  <span class="phone-price">
                    <b>$270</b>
                    <span
                      class="line-through"
                      style="text-decoration: line-through"
                      >$300</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $30</div>
              </div>
              <div
                class="phone"
                aria-label="Galaxy M53 4Gb / 64Gb"
                role="button"
                tabindex="0">
                <div class="phone-img">
                  <img
                    src="/assets/galaxym53.webp"
                    alt="phone, smartphone, phone image"
                    loading="lazy" />
                  <div class="discount">
                    <span>20%<br />OFF</span>
                  </div>
                </div>
                <div class="phone-bio">
                  <span class="phone-name">Galaxy M53 (4GB | 64 GB )</span>
                  <span class="phone-price">
                    <b>$400</b>
                    <span
                      class="line-through"
                      style="text-decoration: line-through"
                      >$500</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $100</div>
              </div>
              <div
                class="phone"
                aria-label="Galaxy S22 Ultra"
                role="button"
                tabindex="0">
                <div class="phone-img">
                  <img
                    src="/assets/galaxys22-2.webp"
                    alt="phone, smartphone, phone image"
                    loading="lazy" />
                  <div class="discount">
                    <span>10%<br />OFF</span>
                  </div>
                </div>
                <div class="phone-bio">
                  <span class="phone-name">Galaxy S22 Ultra</span>
                  <span class="phone-price">
                    <b>$900</b>
                    <span
                      class="line-through"
                      style="text-decoration: line-through"
                      >$1000</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $100</div>
              </div>
            </div>
          </div>
        </section>
        <section class="top-categories">
          <div class="wrapper">
            <div class="top-categories-tab tab">
              <p role="contentinfo" tabindex="0">
                Shop From <span class="blue-word">Top Categories</span>
              </p>
              <button class="viewall-btn">
                View all
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div class="items-wrapper">
              <div class="item" tabindex="0" role="button">
                <div class="item-img">
                  <img
                    src="/assets/galaxys22.webp"
                    alt="image"
                    loading="lazy"
                    role="img" />
                </div>
                <p role="contentinfo">Mobile</p>
              </div>
              <div class="item" tabindex="0" role="button">
                <div class="item-img">
                  <img
                    src="/assets/cosmetics.webp"
                    alt="image"
                    loading="lazy"
                    role="img" />
                </div>
                <p role="contentinfo">Cosmetics</p>
              </div>
              <div class="item" tabindex="0" role="button">
                <div class="item-img">
                  <img
                    src="/assets/washingmachine.webp"
                    alt="image"
                    loading="lazy"
                    role="img"
                    class="washing-machine" />
                </div>
                <p role="contentinfo">Electronics</p>
              </div>
              <div class="item" tabindex="0" role="button">
                <div class="item-img">
                  <img
                    src="/assets/sofa.webp"
                    alt="image"
                    loading="lazy"
                    role="img"
                    class="furniture" />
                </div>
                <p role="contentinfo">Furniture</p>
              </div>
              <div class="item" tabindex="0" role="button">
                <div class="item-img">
                  <img
                    src="/assets/image5.webp"
                    alt="image"
                    loading="lazy"
                    role="img"
                    class="watch" />
                </div>
                <p role="contentinfo">Watches</p>
              </div>
              <div class="item" tabindex="0" role="button">
                <div class="item-img">
                  <img
                    src="/assets/flower-pot.webp"
                    alt="image"
                    loading="lazy"
                    role="img"
                    class="decor" />
                </div>
                <p role="contentinfo">Decor</p>
              </div>
              <div class="item" tabindex="0" role="button">
                <div class="item-img">
                  <img
                    src="/assets/jewelry.webp"
                    alt="image"
                    loading="lazy"
                    role="img"
                    class="jewelry" />
                </div>
                <p role="contentinfo">Accessories</p>
              </div>
            </div>
          </div>
        </section>
        <section class="electronics-sc">
          <div class="wrapper">
            <div class="electronics-tab tab">
              <p role="contentinfo" tabindex="0">
                Top <span class="blue-word">Electronics</span>
              </p>
              <button id="view-electronics" class="viewall-btn">
                View all
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div class="electronics-wrapper">
              <div class="brands">
                <div class="brands1">
                  <div
                    class="item iphone"
                    aria-label="IPhone, UP to 30% OFF"
                    role="button"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name">IPHONE</span>
                      <img
                        src="/assets/apple-logo.webp"
                        loading="lazy"
                        class="brand-logo"
                        alt="iPhone logo" />
                      <span class="discount-price">UP to 30% OFF</span>
                    </div>
                    <img
                      src="/assets/iphone15.svg"
                      alt="logo"
                      loading="lazy"
                      class="phone-image" />
                  </div>
                  <div
                    class="item realme"
                    aria-label="Realme, UP to 40% OFF"
                    role="button"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name">realme</span>
                      <img
                        src="/assets/realme-logo.webp"
                        alt="logo"
                        class="brand-logo"
                        loading="lazy" />
                      <span class="discount-price">UP to 40% OFF</span>
                    </div>
                    <img
                      src="/assets/realme.svg"
                      loading="lazy"
                      alt="phone image"
                      class="phone-image" />
                  </div>
                  <div
                    class="item xiaomi"
                    aria-label="Xiaomi, UP to 50% OFF"
                    role="button"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name">Xiaomi</span>
                      <img
                        src="/assets/xiaomi-logo.webp"
                        alt="logo"
                        class="brand-logo"
                        loading="lazy" />
                      <span class="discount-price">UP to 80% OFF</span>
                    </div>
                    <img
                      src="/assets/xiaomi.svg"
                      alt="phone image"
                      loading="lazy"
                      class="phone-image" />
                  </div>
                </div>
                <div class="brands2">
                  <div
                    class="item vivo"
                    aria-label="VIVO, UP to 30% OFF"
                    role="button"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name">Vivo</span>
                      <img
                        src="/assets/vivo-logo.webp"
                        alt="logo"
                        class="brand-logo"
                        loading="lazy" />
                      <span class="discount-price">UP to 30% OFF</span>
                    </div>
                    <img
                      src="/assets/vivo-phone.webp"
                      alt="phone image"
                      loading="lazy"
                      class="phone-image" />
                  </div>
                  <div
                    class="item samsung"
                    aria-label="Samsung, UP to 10% OFF"
                    role="button"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name">Samsung</span>
                      <img
                        src="/assets/samsung-logo.png"
                        alt="logo"
                        class="brand-logo"
                        loading="lazy" />
                      <span class="discount-price">UP to 10% OFF</span>
                    </div>
                    <img
                      src="/assets/samsung-phone.png"
                      alt="phone image"
                      loading="lazy"
                      class="phone-image" />
                  </div>
                  <div
                    class="item oppo"
                    aria-label="OPPO, UP to
                  50% OFF"
                    role="button"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name">OPPO</span>
                      <img
                        src="/assets/oppo-logo.png"
                        alt="logo"
                        class="brand-logo"
                        loading="lazy" />
                      <span class="discount-price">UP to 50% OFF</span>
                    </div>
                    <img
                      src="/assets/oppo-phone.webp"
                      alt="phone image"
                      loading="lazy"
                      class="phone-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="daily-essentials-sc">
          <div class="wrapper">
            <div class="daily-essentials-tab tab">
              <p role="contentinfo" tabindex="0">
                Shop From <span class="blue-word">Top Categories</span>
              </p>
              <button class="viewall-btn">
                View all
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div class="products-wrapper">
              <div class="product" tabindex="0">
                <div class="product-img"></div>
                <span class="product-name">Daily Essentials</span>
                <span class="bold discount-price">UP to 50% OFF</span>
              </div>
              <div class="product" tabindex="0">
                <div class="product-img"></div>
                <span class="product-name">Vegitables</span>
                <span class="bold discount-price">UP tp 20% OFF</span>
              </div>
              <div class="product" tabindex="0">
                <div class="product-img"></div>
                <span class="product-name">Fruits</span>
                <span class="bold discount-price">UP to 15% OFF</span>
              </div>
              <div class="product" tabindex="0">
                <div class="product-img"></div>
                <span class="product-name">Strowberry</span>
                <span class="bold discount-price">UP to 25% OFF</span>
              </div>
              <div class="product" tabindex="0">
                <div class="product-img"></div>
                <span class="product-name">Mango</span>
                <span class="bold discount-price">UP to 30% OFF</span>
              </div>
              <div class="product" tabindex="0">
                <div class="product-img"></div>
                <span class="product-name">Cherry</span>
                <span class="bold discount-price">UP to 50% OFF</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer" id="footer">
        <div class="wrapper">
          <div class="left">
            <a href="index.html" class="logo" tabindex="0" aria-label="logo">
              MegaMart
            </a>
            <div class="contact-us">
              <span class="bold" tabindex="0" role="contentinfo"
                >Contact Us</span
              >
              <span class="whats-app" tabindex="0"
                ><i class="fa-brands fa-whatsapp"></i> Whats App
                <a href="telto:" class="whats-app_number">+1 202-918-2132</a>
              </span>
            </div>
            <div class="call-us">
              <span class="call-us" tabindex="0">
                <i class="fa-solid fa-phone-volume"></i>
                Call Us
                <a href="telto:" class="call-us_number">+1 202-918-2132</a>
              </span>
            </div>
            <div class="download-app">
              <span class="bold" tabindex="0">Download App</span>
              <div class="download-buttons">
                <button
                  class="download-btn"
                  aria-label="download on Appstore button">
                  <img
                    src="/assets/app-store.webp"
                    alt="Download on App Store"
                    loading="lazy" />
                </button>
                <button
                  class="download-btn"
                  aria-label="Download on Google Play button">
                  <img
                    src="/assets/google-play.webp"
                    alt="Download on Google Play"
                    loading="lazy" />
                </button>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="row1">
              <span tabindex="0">Most Popular Categories</span>
              <ul class="list" role="listbox">
                <li class="list-item">
                  <a href="#" role="listitem">Staples</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Beverages</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Personal Care</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Home Care</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Baby Care</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Vagetables & Fruits</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Snaks & Foods</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Diary & Bakery</a>
                </li>
              </ul>
            </div>
            <div class="row2">
              <span tabindex="0">Customer Services</span>
              <ul class="list" role="listbox">
                <li class="list-item">
                  <a href="#" role="listitem">About Us</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Terms & Conditions</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">FAQ</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Privacy Policy</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">E-waste Policy</a>
                </li>
                <li class="list-item">
                  <a href="#" role="listitem">Cancellation & Return Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom">
            © 2022 All rights reserved. Abdumalik Bozorov Scroll.M Ltd.
          </div>
        </div>
      </footer>
    <div class="darker-overlay"></div>
`;

function setupCategoryDropdowns() {
  const categories = document.querySelectorAll(".category");
  categories.forEach((category) => {
    const button = category.querySelector(".toggle-btn");
    const content = category.querySelector(".category-content");
    const chevronIcon = button.querySelector(".fa-chevron-down");
    button.addEventListener("click", () => {
      categories.forEach((otherCategory) => {
        const otherContent = otherCategory.querySelector(".category-content");
        const otherChevronIcon =
          otherCategory.querySelector(".fa-chevron-down");
        if (otherContent !== content) {
          otherContent.classList.remove("show");
          otherContent.style.height = 0;
          otherContent.style.border = "none";
          otherChevronIcon.classList.remove("rotate");
        }
      });
      content.classList.toggle("show");
      if (content.classList.contains("show")) {
        content.style.height = content.scrollHeight + "px";
        content.style.border = "1px solid var(--light-stroke)";
        chevronIcon.classList.add("rotate");
      } else {
        content.style.height = 0;
        chevronIcon.classList.remove("rotate");
      }
    });
  });
}
setupCategoryDropdowns();

const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.getElementById("sidebar-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
sidebarOpenBtn.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0px)";
});
sidebarCloseBtn.addEventListener("click", () => {
  sidebar.style.transform = `translateX(-100%)`;
});
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !sidebarOpenBtn.contains(e.target)) {
    sidebar.style.transform = `translateX(-100%)`;
  }
});

const electronicsSlider = document.querySelector(".brands");
const electronicsSlides = document.querySelectorAll(".brands > div");
const electronicsViewAllBtn = document.querySelector("#view-electronics");
handleSlider(electronicsSlider, electronicsSlides, electronicsViewAllBtn);

const nextSlideBtn = document.querySelector(".next-slide");
const prevSlideBtn = document.querySelector(".prev-slide");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;
const totalSlides = slides.length;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "flex" : "none";
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex);
  });
}

updateSlides();

prevSlideBtn.addEventListener("click", () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : totalSlides - 1;
  updateSlides();
});

nextSlideBtn.addEventListener("click", () => {
  slideIndex = slideIndex < totalSlides - 1 ? slideIndex + 1 : 0;
  updateSlides();
});

setInterval(() => {
  slideIndex = slideIndex < totalSlides - 1 ? slideIndex + 1 : 0;
  updateSlides();
}, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    updateSlides();
  });
});
