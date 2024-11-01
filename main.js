import { handleSlider } from "./slider";
import "./style.css";
import "./media.css";
document.querySelector("#app").innerHTML = `
      <a href="#hero" class="skip-link" tabindex="0">
        Skip to main content
      </a>
      <header class="header">
        <nav class="nav" aria-label="Main navigation">
          <div class="nav_top">
            <div class="wrapper">
              <div class="left" tabindex="0" aria-label="Welcome message">
                Welcome to worldwide Megamart!
              </div>
              <div class="right">
                <a
                  href="#"
                  class="link"
                  aria-label="Delivery location, postal code 432631">
                  <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                  Deliver to <strong>432631</strong>
                </a>
                <a href="#" class="link" aria-label="Track your order">
                  <img
                    src="/assets/truck-icon.svg"
                    alt="truck icon"
                    aria-hidden="true" />
                  Track your order
                </a>
                <a href="#" class="link" aria-label="View all offers">
                  <img
                    src="/assets/Discount.svg"
                    alt="discount icon"
                    aria-hidden="true" />
                  All Offers
                </a>
              </div>
            </div>
          </div>
          <div class="nav_bottom">
            <div class="wrapper">
              <div class="left">
                <button id="sidebar-btn" aria-label="Open sidebar" tabindex="0">
                  <img src="/assets/bars.webp" alt="menu icon" />
                </button>
                <div id="logo">
                  <a href="index.html" aria-label="Home page">MegaMart</a>
                </div>
              </div>
              <div class="right">
                <div class="search-input">
                  <button class="magnifying-glass" aria-label="Search">
                    <i
                      class="fa-solid fa-magnifying-glass"
                      aria-hidden="true"></i>
                  </button>
                  <input
                    type="search"
                    class="input"
                    placeholder="Search essentials, groceries and more..."
                    aria-label="Search for products"
                    name="search" />
                  <button
                    class="input-list"
                    aria-label="View search suggestions">
                    <i class="fa-solid fa-list-ul" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="sign-up_cart">
                  <button class="sign-up" aria-label="Sign up or Sign in">
                    <i class="fa-regular fa-user" aria-hidden="true"></i>
                    Sign Up/Sign In
                  </button>
                  <button id="cart" aria-label="View cart">
                    <img
                      src="/assets/shopping-cart.svg"
                      alt="shopping cart icon"
                      aria-hidden="true" />
                    Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="categories" aria-label="Product categories">
          <div class="wrapper">
            <div class="groceries category">
              <button
                class="toggle-btn"
                aria-expanded="false"
                aria-controls="groceries-content">
                Groceries
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>
              <div
                id="groceries-content"
                class="category-content grocery"
                aria-hidden="true">
                <a href="#">Meat</a>
                <a href="#">Baking</a>
                <a href="#">Pet food</a>
                <a href="#">Drinks</a>
                <a href="#">Pasta & Cereals</a>
              </div>
            </div>
            <div class="premium-fruits category">
              <button
                class="toggle-btn"
                aria-expanded="false"
                aria-controls="premium-fruits-content">
                Premium Fruits
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>
              <div
                id="premium-fruits-content"
                class="category-content premium-fruit"
                aria-hidden="true">
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
              <button
                class="toggle-btn"
                aria-expanded="false"
                aria-controls="home-kitchen-content">
                Home & Kitchen
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>
              <div
                id="home-kitchen-content"
                class="category-content home-kitchen-content"
                aria-hidden="true">
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
              <button
                class="toggle-btn"
                aria-expanded="false"
                aria-controls="fashions-content">
                Fashions
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>
              <div
                class="category-content fashion-content"
                id="fashions-content"
                aria-hidden="true">
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
              <button
                class="toggle-btn"
                aria-expanded="false"
                aria-controls="electronics-content">
                Electronics
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>
              <div
                class="category-content"
                id="electronics-content"
                aria-hidden="true">
                <a href="#">Speaker</a>
                <a href="#">Alarm Clock</a>
                <a href="#">Hair Dryer</a>
                <a href="#">Fan</a>
                <a href="#">Headphones</a>
              </div>
            </div>
            <div class="category">
              <button
                class="toggle-btn"
                aria-expanded="false"
                aria-controls="beauty-content">
                Beauty
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>
              <div
                class="category-content"
                id="beauty-content"
                aria-hidden="true">
                <a href="#">Oral Care</a>
                <a href="#">Skin care</a>
                <a href="#">Sun care</a>
                <a href="#">Hair care</a>
                <a href="#">Decorative cosmetics</a>
              </div>
            </div>
            <div class="category">
              <button
                class="toggle-btn"
                aria-expanded="false"
                aria-controls="home-improvement-content">
                Home Improvement
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>
              <div
                class="category-content"
                id="home-improvement-content"
                aria-hidden="true">
                <a href="#">Meet</a>
                <a href="#">Baking</a>
                <a href="#">Pet food</a>
                <a href="#">Drinks</a>
                <a href="#">Pasta & Cereals</a>
              </div>
            </div>
            <div class="premium-fruits category">
              <button
                class="toggle-btn"
                aria-expanded="false"
                aria-controls="premium-fruits-content">
                Sports, Toys & Luggage<i
                  class="fa-solid fa-chevron-down"
                  aria-hidden="true"></i>
              </button>
              <div
                class="category-content"
                id="premium-fruits-content"
                aria-hidden="true">
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
      <aside class="sidebar" aria-labelledby="sidebar-heading">
        <div class="wrapper">
          <h2 id="sidebar-heading" class="sidebar-heading">MegaMart</h2>
          <div class="sidebar-content">
            <ul role="menu" aria-label="Sidebar Navigation">
              <li class="item">
                <button
                  id="sidebar-close-btn"
                  aria-label="Close Sidebar"
                  aria-controls="sidebar"
                  aria-expanded="true"
                  role="menuitem">
                  <i class="fa-solid fa-xmark" aria-hidden="true"></i> Close
                </button>
              </li>
              <li class="item">
                <button
                  class="sign-up"
                  aria-label="Sign Up or Sign In"
                  role="menuitem">
                  <i class="fa-regular fa-user" aria-hidden="true"></i>
                  Sign Up/Sign In
                </button>
              </li>
              <li class="item">
                <button class="cart" aria-label="Open Cart" role="menuitem">
                  <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                  Cart
                </button>
              </li>
              <li class="item">
                <a href="#" aria-label="Delivery Location" role="menuitem">
                  <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                  Deliver to
                  <strong>432631</strong>
                </a>
              </li>
              <li class="item">
                <a href="#" aria-label="Track Order" role="menuitem">
                  <i class="fa-solid fa-truck" aria-hidden="true"></i> Track
                  your order
                </a>
              </li>
              <li class="item">
                <a href="#" aria-label="All Offers" role="menuitem">
                  <i class="fa-solid fa-tag" aria-hidden="true"></i>
                  All Offers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <main id="hero" class="main" role="main">
        <div class="slider" aria-labelledby="slider-heading">
          <div class="slider-content">
            <div class="slide fade" aria-live="polite">
              <div class="slide-title">
                <h1 id="slider-heading" class="heading1">
                  Best Deal Online on smart watches
                </h1>
                <h2 class="heading2">SMART WEARABLE.</h2>
                <p class="heading3">Up to 80% OFF</p>
              </div>
              <img
                src="/assets/main-watch.webp"
                alt="Smart Watch"
                class="slider-image"
                loading="eager" />
            </div>
            <div class="slide fade" aria-live="polite">
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

          <button class="prev-slide" aria-label="Previous Slide">
            &#10094;
          </button>
          <button class="next-slide" aria-label="Next Slide">&#10095;</button>
          <div
            class="slider-dots"
            role="tablist"
            aria-label="Slide Navigation Dots">
            <button
              class="dot active"
              role="tab"
              aria-selected="true"
              tabindex="0"
              aria-label="Slide 1"></button>
            <button
              class="dot"
              role="tab"
              aria-selected="false"
              tabindex="-1"
              aria-label="Slide 2"></button>
          </div>
        </div>
        <section class="sm-sc" role="region" aria-labelledby="sm-heading">
          <div class="wrapper">
            <div
              class="sm-tab tab"
              role="navigation"
              aria-label="Smartphone Deals Navigation">
              <p tabindex="0">
                Grab the best deal on
                <span class="blue-word" id="sm-heading">Smartphones</span>
              </p>
              <button class="sm-viewall" aria-label="View All Smartphones">
                View all
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
            <div class="sm-wrapper" role="list">
              <div
                class="phone"
                aria-label="Galaxy S22 Ultra on sale for $560, previously $800"
                role="button"
                tabindex="0">
                <div class="phone-img">
                  <img
                    src="/assets/galaxys22.webp"
                    alt="Galaxy S22 Ultra smartphone"
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
                      aria-hidden="true"
                      >$800</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $240</div>
              </div>
              <div
                class="phone"
                aria-label="Galaxy M13 on sale for $160, previously $200"
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
                      aria-hidden="true"
                      >$200</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $40</div>
              </div>
              <div
                class="phone"
                aria-label="Galaxy M33 4Gb / 64Gb on sale for $270, previously $300"
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
                      aria-hidden="true"
                      >$300</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $30</div>
              </div>
              <div
                class="phone"
                aria-label="Galaxy M53 4Gb / 64Gb on sale for $400, previously $500"
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
                      aria-hidden="true"
                      >$500</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $100</div>
              </div>
              <div
                class="phone"
                aria-label="Galaxy S22 Ultra on sale for $900, previously $1000"
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
                      aria-hidden="true"
                      >$1000</span
                    >
                  </span>
                </div>
                <div class="save-price">Save - $100</div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="top-categories"
          aria-labelledby="top-categories-heading">
          <div class="wrapper">
            <div class="top-categories-tab tab">
              <p
                id="top-categories-heading"
                tabindex="0"
                role="heading"
                aria-level="2">
                Shop From <span class="blue-word">Top Categories</span>
              </p>
              <button class="viewall-btn" aria-label="View all top categories">
                View all
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
            <div
              class="items-wrapper"
              role="list"
              aria-label="Top Categories List">
              <div
                class="item"
                tabindex="0"
                role="listitem"
                aria-label="Mobile category, view items">
                <div class="item-img">
                  <img
                    src="/assets/galaxys22.webp"
                    alt="Mobile category"
                    loading="lazy" />
                </div>
                <p class="item-name">Mobile</p>
              </div>
              <div
                class="item"
                tabindex="0"
                role="listitem"
                aria-label="Cosmetics category, view items">
                <div class="item-img">
                  <img
                    src="/assets/cosmetics.webp"
                    alt="Cosmetics category"
                    loading="lazy" />
                </div>
                <p class="item-name">Cosmetics</p>
              </div>
              <div
                class="item"
                tabindex="0"
                role="listitem"
                aria-label="Electronics category, view items">
                <div class="item-img">
                  <img
                    src="/assets/washingmachine.webp"
                    alt="Electronics category"
                    loading="lazy"
                    class="washing-machine" />
                </div>
                <p class="item-name">Electronics</p>
              </div>
              <div
                class="item"
                tabindex="0"
                role="listitem"
                aria-label="Furniture category, view items">
                <div class="item-img">
                  <img
                    src="/assets/sofa.webp"
                    alt="Furniture category"
                    loading="lazy"
                    class="furniture" />
                </div>
                <p class="item-name">Furniture</p>
              </div>
              <div
                class="item"
                tabindex="0"
                role="listitem"
                aria-label="Watches category, view items">
                <div class="item-img">
                  <img
                    src="/assets/image5.webp"
                    alt="Watches category"
                    loading="lazy"
                    class="watch" />
                </div>
                <p class="item-name">Watches</p>
              </div>
              <div
                class="item"
                tabindex="0"
                role="listitem"
                aria-label="Decor category, view items">
                <div class="item-img">
                  <img
                    src="/assets/flower-pot.webp"
                    alt="Decor category"
                    loading="lazy"
                    class="decor" />
                </div>
                <p class="item-name">Decor</p>
              </div>
              <div
                class="item"
                tabindex="0"
                role="listitem"
                aria-label="Accessories category, view items">
                <div class="item-img">
                  <img
                    src="/assets/jewelry.webp"
                    alt="Accessories category"
                    loading="lazy"
                    class="jewelry" />
                </div>
                <p class="item-name">Accessories</p>
              </div>
            </div>
          </div>
        </section>

        <section class="electronics-sc" aria-labelledby="electronics-heading">
          <div class="wrapper">
            <div class="electronics-tab tab">
              <p
                id="electronics-heading"
                role="heading"
                aria-level="2"
                tabindex="0">
                Top <span class="blue-word">Electronics</span>
              </p>
              <button
                id="view-electronics"
                class="viewall-btn"
                aria-label="View all electronics deals">
                View all
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
            <div
              class="electronics-wrapper"
              role="list"
              aria-label="Electronics Deals List">
              <div class="brands">
                <div class="brands1">
                  <div
                    class="item iphone"
                    role="listitem"
                    aria-label="IPhone - Up to 30% OFF"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name" aria-hidden="true">IPHONE</span>
                      <img
                        src="/assets/apple-logo.webp"
                        loading="lazy"
                        class="brand-logo"
                        alt="Apple iPhone brand logo" />
                      <span class="discount-price" aria-hidden="true"
                        >UP to 30% OFF</span
                      >
                    </div>
                    <img
                      src="/assets/iphone15.svg"
                      alt="iPhone 15 model, discount available"
                      loading="lazy"
                      class="phone-image" />
                  </div>
                  <div
                    class="item realme"
                    role="listitem"
                    aria-label="Realme - Up to 40% OFF"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name" aria-hidden="true">Realme</span>
                      <img
                        src="/assets/realme-logo.webp"
                        loading="lazy"
                        class="brand-logo"
                        alt="Realme brand logo" />
                      <span class="discount-price" aria-hidden="true"
                        >UP to 40% OFF</span
                      >
                    </div>
                    <img
                      src="/assets/realme.svg"
                      loading="lazy"
                      alt="Realme phone model, discount available"
                      class="phone-image" />
                  </div>
                  <div
                    class="item xiaomi"
                    role="listitem"
                    aria-label="Xiaomi - Up to 50% OFF"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name" aria-hidden="true">Xiaomi</span>
                      <img
                        src="/assets/xiaomi-logo.webp"
                        loading="lazy"
                        class="brand-logo"
                        alt="Xiaomi brand logo" />
                      <span class="discount-price" aria-hidden="true"
                        >UP to 50% OFF</span
                      >
                    </div>
                    <img
                      src="/assets/xiaomi.svg"
                      alt="Xiaomi phone model, discount available"
                      loading="lazy"
                      class="phone-image" />
                  </div>
                </div>
                <div class="brands2">
                  <div
                    class="item vivo"
                    role="listitem"
                    aria-label="Vivo - Up to 30% OFF"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name" aria-hidden="true">Vivo</span>
                      <img
                        src="/assets/vivo-logo.webp"
                        loading="lazy"
                        class="brand-logo"
                        alt="Vivo brand logo" />
                      <span class="discount-price" aria-hidden="true"
                        >UP to 30% OFF</span
                      >
                    </div>
                    <img
                      src="/assets/vivo-phone.webp"
                      alt="Vivo phone model, discount available"
                      loading="lazy"
                      class="phone-image" />
                  </div>
                  <div
                    class="item samsung"
                    role="listitem"
                    aria-label="Samsung - Up to 10% OFF"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name" aria-hidden="true">Samsung</span>
                      <img
                        src="/assets/samsung-logo.png"
                        loading="lazy"
                        class="brand-logo"
                        alt="Samsung brand logo" />
                      <span class="discount-price" aria-hidden="true"
                        >UP to 10% OFF</span
                      >
                    </div>
                    <img
                      src="/assets/samsung-phone.png"
                      alt="Samsung phone model, discount available"
                      loading="lazy"
                      class="phone-image" />
                  </div>
                  <div
                    class="item oppo"
                    role="listitem"
                    aria-label="OPPO - Up to 50% OFF"
                    tabindex="0">
                    <div class="texts">
                      <span class="phone-name" aria-hidden="true">OPPO</span>
                      <img
                        src="/assets/oppo-logo.png"
                        loading="lazy"
                        class="brand-logo"
                        alt="OPPO brand logo" />
                      <span class="discount-price" aria-hidden="true"
                        >UP to 50% OFF</span
                      >
                    </div>
                    <img
                      src="/assets/oppo-phone.webp"
                      alt="OPPO phone model, discount available"
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
                <span class="product-name">Vegetables</span>
                <span class="bold discount-price">UP tp 20% OFF</span>
              </div>
              <div class="product" tabindex="0">
                <div class="product-img"></div>
                <span class="product-name">Fruits</span>
                <span class="bold discount-price">UP to 15% OFF</span>
              </div>
              <div class="product" tabindex="0">
                <div class="product-img"></div>
                <span class="product-name">Strawberry</span>
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
                <a href="tel:+12029182132" class="call-us_number"
                  >+1 202-918-2132</a
                >
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
              <ul class="list">
                <li class="list-item">
                  <a href="#">Staples</a>
                </li>
                <li class="list-item">
                  <a href="#">Beverages</a>
                </li>
                <li class="list-item">
                  <a href="#">Personal Care</a>
                </li>
                <li class="list-item">
                  <a href="#">Home Care</a>
                </li>
                <li class="list-item">
                  <a href="#">Baby Care</a>
                </li>
                <li class="list-item">
                  <a href="#">Vegetables & Fruits</a>
                </li>
                <li class="list-item">
                  <a href="#">Snacks & Foods</a>
                </li>
                <li class="list-item">
                  <a href="#">Diary & Bakery</a>
                </li>
              </ul>
            </div>
            <div class="row2">
              <span tabindex="0">Customer Services</span>
              <ul class="list">
                <li class="list-item">
                  <a href="#">About Us</a>
                </li>
                <li class="list-item">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li class="list-item">
                  <a href="#">FAQ</a>
                </li>
                <li class="list-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li class="list-item">
                  <a href="#">E-waste Policy</a>
                </li>
                <li class="list-item">
                  <a href="#">Cancellation & Return Policy</a>
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
