// ============================================================
// NOVA KEY SHOP
// APP.JS COMPLET
// ============================================================


// ============================================================
// PRODUITS
// ============================================================

const products = [

  // ==========================================================
  // ROBLOX
  // ==========================================================

  {
    id: "roblox-100",
    name: "Roblox Card - 100 ROBUX",
    price: 1.19,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/13504/616x353/roblox-card-100-robux-100-robux-pc-jeu-cover.jpg?v=1677828910"
  },

  {
    id: "roblox-300",
    name: "Roblox Card - 300 ROBUX",
    price: 3.95,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/18880/616x353/roblox-300-robux-300-robux-pc-jeu-europe-cover.jpg?v=1742283940"
  },

  {
    id: "roblox-400",
    name: "Roblox Card - 400 ROBUX",
    price: 6.49,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/15265/616x353/roblox-card-400-robux-400-robux-pc-jeu-cover.jpg?v=1699346075"
  },

  {
    id: "roblox-1500",
    name: "Roblox Card - 1500 ROBUX",
    price: 9.59,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/23409/616x353/roblox-1500-robux-pc-cover.jpg?v=1785919991"
  },

  {
    id: "roblox-800",
    name: "Roblox Card - 800 ROBUX",
    price: 9.91,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/10437/616x353/roblox-800-robux-pc-cover.jpg?v=1767788892"
  },

  {
    id: "roblox-1000",
    name: "Roblox Card - 1000 ROBUX",
    price: 10.49,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/22952/616x353/roblox-1000-robux-pc-cover.jpg?v=1781173294"
  },

  {
    id: "roblox-2000",
    name: "Roblox Card - 2000 ROBUX",
    price: 21.99,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/15168/616x353/roblox-card-2000-robux-pc-cover.jpg?v=1767788872"
  },

  {
    id: "roblox-1700",
    name: "Roblox Card - 1700 ROBUX",
    price: 23.99,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/7994/616x353/roblox-1700-robux-pc-cover.jpg?v=1767788932"
  },

  {
    id: "roblox-2500",
    name: "Roblox Card - 2500 ROBUX",
    price: 26.99,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/18652/616x353/roblox-2500-robux-2500-robux-pc-jeu-europe-cover.jpg?v=1740132827"
  },

  {
    id: "roblox-3000",
    name: "Roblox Card - 3000 ROBUX",
    price: 34.99,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/18878/616x353/roblox-3000-robux-pc-cover.jpg?v=1767788845"
  },

  {
    id: "roblox-4000",
    name: "Roblox Card - 4000 ROBUX",
    price: 39.99,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/18879/616x353/roblox-4000-robux-pc-cover.jpg?v=1767788831"
  },

  {
    id: "roblox-4500",
    name: "Roblox Card - 4500 ROBUX",
    price: 44.99,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/7995/616x353/roblox-4500-robux-pc-cover.jpg?v=1767788921"
  },

  {
    id: "roblox-5250",
    name: "Roblox Card - 5250 ROBUX",
    price: 51.99,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/21588/616x353/roblox-5250-robux-pc-battle-net-cover.jpg?v=1770902730"
  },

  {
    id: "roblox-10000",
    name: "Roblox Card - 10000 ROBUX",
    price: 89.99,
    category: "Roblox",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/10435/616x353/roblox-10000-robux-pc-cover.jpg?v=1767788900"
  },


  // ==========================================================
  // FORTNITE
  // ==========================================================

  {
    id: "fortnite-legendes-fraiches",
    name: "Fortnite Pack Légendes fraîches + 1000 V-Bucks",
    price: 6.89,
    category: "Fortnite",
    platform: "Xbox",
    image:
      "https://gaming-cdn.com/images/products/9584/616x353/fortnite-pack-legendes-fraiches-1000-v-bucks-xbox-one-xbox-series-x-s-microsoft-store-cover.jpg?v=1781175723"
  },

  {
    id: "fortnite-cobalt-star",
    name: "Fortnite Cobalt Star Bundle + 1000 V-Bucks",
    price: 15.99,
    category: "Fortnite",
    platform: "PlayStation 5",
    image:
      "https://gaming-cdn.com/images/products/18008/616x353/fortnite-cobalt-star-bundle-1000-v-bucks-playstation-5-playstation-store-cover.jpg?v=1781184809"
  },

  {
    id: "fortnite-flowering-chaos",
    name: "Fortnite Flowering Chaos + 1000 V-Bucks",
    price: 12.69,
    category: "Fortnite",
    platform: "PlayStation 5",
    image:
      "https://gaming-cdn.com/images/products/21199/616x353/fortnite-flowering-chaos-1000-v-bucks-playstation-5-playstation-store-cover.jpg?v=1781184757"
  },

  {
    id: "fortnite-legendes-animees",
    name: "Fortnite - Pack Légendes animées",
    price: 10.99,
    category: "Fortnite",
    platform: "PlayStation 5",
    image:
      "https://gaming-cdn.com/images/products/12592/616x353/fortnite-pack-legendes-animees-playstation-5-jeu-playstation-store-europe-cover.jpg?v=1748419162"
  },

  {
    id: "fortnite-darkfire-ice",
    name: "Fortnite - Darkfire & Ice Bundle + 1000 V-Bucks",
    price: 17.19,
    category: "Fortnite",
    platform: "Nintendo Switch",
    image:
      "https://gaming-cdn.com/images/products/20656/616x353/fortnite-darkfire-ice-bundle-1000-v-bucks-switch-nintendo-eshop-cover.jpg?v=1781184777"
  },

  {
    id: "fortnite-transformers",
    name: "Fortnite - Transformers Pack + 1000 V-Bucks",
    price: 15.99,
    category: "Fortnite",
    platform: "PlayStation 4",
    image:
      "https://gaming-cdn.com/images/products/14693/616x353/fortnite-transformers-pack-1000-v-bucks-playstation-4-playstation-store-cover.jpg?v=1781185876"
  },

  {
    id: "fortnite-darkfire",
    name: "Fortnite - Darkfire Bundle",
    price: 19.99,
    category: "Fortnite",
    platform: "Nintendo Switch",
    image:
      "https://gaming-cdn.com/images/products/5733/616x353/fortnite-darkfire-bundle-switch-jeu-nintendo-eshop-europe-cover.jpg?v=1730385293"
  },

  {
    id: "fortnite-5000-vbucks",
    name: "Fortnite - 5000 V-Bucks Gift Card (Epic Games)",
    price: 36.20,
    category: "Fortnite",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/8158/616x353/fortnite-5000-v-bucks-gift-card-5000-v-bucks-pc-jeu-epic-games-cover.jpg?v=1699365704"
  },

  {
    id: "fortnite-batman",
    name: "Fortnite - The Batman Who Laughs Outfit",
    price: 8.99,
    category: "Fortnite",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/9954/616x353/fortnite-the-batman-who-laughs-outfit-pc-jeu-epic-games-cover.jpg?v=1666177682"
  },

  {
    id: "fortnite-lumiere-dechue",
    name: "Fortnite - Pack Lumière déchue",
    price: 3.60,
    category: "Fortnite",
    platform: "Xbox",
    image:
      "https://gaming-cdn.com/images/products/9848/616x353/fortnite-pack-lumiere-dechue-xbox-one-xbox-series-x-s-jeu-microsoft-store-europe-cover.jpg?v=1739374928"
  },

  {
    id: "fortnite-catwoman",
    name: "Fortnite - Catwoman's Grappling Claw Pickaxe",
    price: 8.99,
    category: "Fortnite",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/9608/616x353/fortnite-catwoman-s-grappling-claw-pickaxe-pc-jeu-epic-games-cover.jpg?v=1702478626"
  },

  {
    id: "fortnite-1000-vbucks",
    name: "Fortnite - 1000 V-Bucks Gift Card (Epic Games)",
    price: 8.59,
    category: "Fortnite",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/8156/616x353/fortnite-1000-v-bucks-gift-card-1000-v-bucks-pc-jeu-epic-games-cover.jpg?v=1701258416"
  },

  {
    id: "fortnite-2800-vbucks",
    name: "Fortnite - 2800 V-Bucks Gift Card (Epic Games)",
    price: 22.69,
    category: "Fortnite",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/8157/616x353/fortnite-2800-v-bucks-gift-card-2800-v-bucks-pc-jeu-epic-games-cover.jpg?v=1716909867"
  },

  {
    id: "fortnite-iris",
    name: "Fortnite - Pack Iris + 600 V-Bucks",
    price: 2.77,
    category: "Fortnite",
    platform: "Xbox",
    image:
      "https://gaming-cdn.com/images/products/6828/616x353/fortnite-pack-iris-600-v-bucks-xbox-one-xbox-one-jeu-microsoft-store-europe-cover.jpg?v=1736957194"
  },

  {
    id: "fortnite-13500-vbucks",
    name: "Fortnite - 13500 V-Bucks Gift Card (Epic Games)",
    price: 82.99,
    category: "Fortnite",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/10451/616x353/fortnite-13500-v-bucks-gift-card-13500-v-bucks-pc-jeu-epic-games-cover.jpg?v=1701258558"
  },

  {
    id: "epic-37-fortnite",
    name: "Epic Games Gift Card 37 EUR - Fortnite 4500 V-Bucks",
    price: 35.89,
    category: "Fortnite",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/22600/616x353/epic-games-gift-card-37eur-fortnite-4500-v-bucks-gift-card-epic-games-cover.jpg?v=1781614127"
  },

  {
    id: "epic-23-fortnite",
    name: "Epic Games Gift Card 23 EUR - Fortnite 2400 V-Bucks",
    price: 22.31,
    category: "Fortnite",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/22599/616x353/epic-games-gift-card-23eur-fortnite-2400-v-bucks-gift-card-epic-games-cover.jpg?v=1781614121"
  },

  {
    id: "epic-90-fortnite",
    name: "Epic Games Gift Card 90 EUR - Fortnite 12500 V-Bucks",
    price: 87.30,
    category: "Fortnite",
    platform: "PC",
    image:
      "https://gaming-cdn.com/images/products/22586/616x353/epic-games-gift-card-90eur-fortnite-12500-v-bucks-gift-card-epic-games-cover.jpg?v=1778169070"
  }

];


// ============================================================
// CONFIGURATION
// ============================================================

const CART_STORAGE_KEY =
  "novaKeyShopCart";

const PAYPAL_USERNAME =
  "SH0PNOVA";


// ============================================================
// ÉTAT
// ============================================================

let cart = loadCart();

let activeCategory = "Tous";

let searchTerm = "";


// ============================================================
// DOM
// ============================================================

const productsGrid =
  document.getElementById(
    "productsGrid"
  );

const categoriesContainer =
  document.getElementById(
    "categories"
  );

const searchInput =
  document.getElementById(
    "searchInput"
  );

const sortSelect =
  document.getElementById(
    "sortSelect"
  );

const resultCount =
  document.getElementById(
    "resultCount"
  );

const cartButton =
  document.getElementById(
    "cartButton"
  );

const cartCount =
  document.getElementById(
    "cartCount"
  );

const cartDrawer =
  document.getElementById(
    "cartDrawer"
  );

const drawerOverlay =
  document.getElementById(
    "drawerOverlay"
  );

const closeCartButton =
  document.getElementById(
    "closeCart"
  );

const cartItems =
  document.getElementById(
    "cartItems"
  );

const cartTotal =
  document.getElementById(
    "cartTotal"
  );

const checkoutButton =
  document.getElementById(
    "checkoutButton"
  );

const toastContainer =
  document.getElementById(
    "toastContainer"
  );

const homeButton =
  document.getElementById(
    "homeButton"
  );


// ============================================================
// FORMAT PRIX
// ============================================================

function formatPrice(price) {

  return price.toLocaleString(
    "fr-FR",
    {
      style: "currency",
      currency: "EUR"
    }
  );
}


// ============================================================
// CHARGER PANIER
// ============================================================

function loadCart() {

  try {

    const saved =
      localStorage.getItem(
        CART_STORAGE_KEY
      );

    if (!saved) {
      return [];
    }

    const parsed =
      JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;

  } catch (error) {

    console.error(
      "Erreur chargement panier :",
      error
    );

    return [];
  }
}


// ============================================================
// SAUVEGARDER PANIER
// ============================================================

function saveCart() {

  try {

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );

  } catch (error) {

    console.error(
      "Erreur sauvegarde panier :",
      error
    );
  }
}


// ============================================================
// CATÉGORIES
// ============================================================

function renderCategories() {

  const categories = [
    "Tous",
    ...new Set(
      products.map(
        product =>
          product.category
      )
    )
  ];

  categoriesContainer.innerHTML =
    "";

  categories.forEach(
    category => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "category" +
        (
          category ===
          activeCategory
            ? " active"
            : ""
        );

      if (category === "Tous") {

        button.textContent =
          "✨ Tous";

      } else if (
        category === "Roblox"
      ) {

        button.textContent =
          "🎮 Roblox";

      } else if (
        category === "Fortnite"
      ) {

        button.textContent =
          "🟣 Fortnite";

      } else {

        button.textContent =
          category;
      }

      button.addEventListener(
        "click",
        () => {

          activeCategory =
            category;

          renderCategories();

          renderProducts();

        }
      );

      categoriesContainer.appendChild(
        button
      );
    }
  );
}


// ============================================================
// FILTRER
// ============================================================

function getFilteredProducts() {

  let filtered =
    products.filter(
      product => {

        const matchesCategory =
          activeCategory === "Tous" ||
          product.category ===
            activeCategory;

        const searchableText =
          (
            product.name +
            " " +
            product.category +
            " " +
            product.platform
          ).toLowerCase();

        const matchesSearch =
          searchableText.includes(
            searchTerm.toLowerCase()
          );

        return (
          matchesCategory &&
          matchesSearch
        );
      }
    );


  const sort =
    sortSelect.value;


  if (sort === "price-low") {

    filtered.sort(
      (a, b) =>
        a.price - b.price
    );

  } else if (
    sort === "price-high"
  ) {

    filtered.sort(
      (a, b) =>
        b.price - a.price
    );

  } else if (
    sort === "name"
  ) {

    filtered.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name,
          "fr"
        )
    );
  }


  return filtered;
}


// ============================================================
// AFFICHER PRODUITS
// ============================================================

function renderProducts() {

  const filtered =
    getFilteredProducts();

  productsGrid.innerHTML =
    "";


  resultCount.textContent =
    `${filtered.length} produit${
      filtered.length > 1
        ? "s"
        : ""
    }`;


  if (
    filtered.length === 0
  ) {

    productsGrid.innerHTML = `
      <div class="empty">

        <div
          style="
            font-size:42px;
            margin-bottom:12px;
          "
        >
          🔎
        </div>

        <strong>
          Aucun produit trouvé
        </strong>

        <div style="margin-top:7px;">
          Essaie une autre recherche
          ou catégorie.
        </div>

      </div>
    `;

    return;
  }


  filtered.forEach(
    product => {

      const card =
        document.createElement(
          "article"
        );

      card.className =
        "product-card";


      card.innerHTML = `
        <img
          class="product-image"
          src="${escapeAttribute(
            product.image
          )}"
          alt="${escapeAttribute(
            product.name
          )}"
          loading="lazy"
          onerror="
            this.style.opacity='0.25'
          "
        >

        <div class="product-body">

          <div class="product-category">
            ${escapeHTML(
              product.category
            )}
          </div>

          <div class="product-name">
            ${escapeHTML(
              product.name
            )}
          </div>

          <div class="product-platform">
            🎮 ${escapeHTML(
              product.platform
            )}
          </div>

          <div class="product-bottom">

            <div class="product-price">
              ${formatPrice(
                product.price
              )}
            </div>

            <button
              class="add-btn"
              data-product-id="${escapeAttribute(
                product.id
              )}"
            >
              Ajouter
            </button>

          </div>

        </div>
      `;


      const addButton =
        card.querySelector(
          ".add-btn"
        );


      addButton.addEventListener(
        "click",
        () => {

          addToCart(
            product.id
          );

        }
      );


      productsGrid.appendChild(
        card
      );

    }
  );
}


// ============================================================
// AJOUTER AU PANIER
// ============================================================

function addToCart(productId) {

  const product =
    products.find(
      item =>
        item.id === productId
    );


  if (!product) {
    return;
  }


  const existing =
    cart.find(
      item =>
        item.id === productId
    );


  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({
      id: product.id,
      quantity: 1
    });
  }


  saveCart();

  updateCartUI();

  showToast(
    `${product.name} ajouté au panier`
  );
}


// ============================================================
// SUPPRIMER
// ============================================================

function removeFromCart(
  productId
) {

  cart =
    cart.filter(
      item =>
        item.id !== productId
    );

  saveCart();

  updateCartUI();
}


// ============================================================
// QUANTITÉ
// ============================================================

function changeQuantity(
  productId,
  amount
) {

  const item =
    cart.find(
      cartItem =>
        cartItem.id === productId
    );


  if (!item) {
    return;
  }


  item.quantity += amount;


  if (item.quantity <= 0) {

    removeFromCart(
      productId
    );

    return;
  }


  saveCart();

  updateCartUI();
}


// ============================================================
// ARTICLES COMPLETS
// ============================================================

function getCartProducts() {

  return cart
    .map(
      item => {

        const product =
          products.find(
            p =>
              p.id === item.id
          );

        if (!product) {
          return null;
        }

        return {
          ...product,
          quantity:
            item.quantity
        };

      }
    )
    .filter(Boolean);
}


// ============================================================
// TOTAL
// ============================================================

function getCartTotal() {

  return getCartProducts()
    .reduce(
      (
        total,
        product
      ) => {

        return (
          total +
          product.price *
          product.quantity
        );

      },
      0
    );
}


// ============================================================
// QUANTITÉ PANIER
// ============================================================

function getCartQuantity() {

  return cart.reduce(
    (
      total,
      item
    ) => {

      return (
        total +
        item.quantity
      );

    },
    0
  );
}


// ============================================================
// AFFICHER PANIER
// ============================================================

function renderCart() {

  const cartProducts =
    getCartProducts();


  cartItems.innerHTML =
    "";


  if (
    cartProducts.length === 0
  ) {

    cartItems.innerHTML = `
      <div class="empty">

        <div
          style="
            font-size:42px;
            margin-bottom:12px;
          "
        >
          🛒
        </div>

        <strong>
          Ton panier est vide
        </strong>

        <div style="margin-top:7px;">
          Ajoute un produit pour commencer.
        </div>

      </div>
    `;

  } else {

    cartProducts.forEach(
      product => {

        const item =
          document.createElement(
            "div"
          );

        item.className =
          "cart-item";


        item.innerHTML = `
          <img
            src="${escapeAttribute(
              product.image
            )}"
            alt="${escapeAttribute(
              product.name
            )}"
          >

          <div>

            <div class="cart-item-name">
              ${escapeHTML(
                product.name
              )}
            </div>

            <div class="cart-item-price">
              ${formatPrice(
                product.price
              )}
              × ${product.quantity}
            </div>

            <div class="quantity-controls">

              <button
                class="quantity-btn"
                data-action="minus"
              >
                −
              </button>

              <button
                class="quantity-btn"
                data-action="plus"
              >
                +
              </button>

            </div>

          </div>

          <button
            class="remove-item"
            data-action="remove"
            title="Supprimer"
          >
            ✕
          </button>
        `;


        item
          .querySelector(
            '[data-action="minus"]'
          )
          .addEventListener(
            "click",
            () => {

              changeQuantity(
                product.id,
                -1
              );

            }
          );


        item
          .querySelector(
            '[data-action="plus"]'
          )
          .addEventListener(
            "click",
            () => {

              changeQuantity(
                product.id,
                1
              );

            }
          );


        item
          .querySelector(
            '[data-action="remove"]'
          )
          .addEventListener(
            "click",
            () => {

              removeFromCart(
                product.id
              );

            }
          );


        cartItems.appendChild(
          item
        );

      }
    );
  }


  const total =
    getCartTotal();


  cartTotal.textContent =
    formatPrice(total);


  checkoutButton.disabled =
    cartProducts.length === 0;
}


// ============================================================
// UPDATE PANIER
// ============================================================

function updateCartUI() {

  cartCount.textContent =
    getCartQuantity();

  renderCart();
}


// ============================================================
// OUVRIR PANIER
// ============================================================

function openCart() {

  cartDrawer.classList.add(
    "open"
  );

  drawerOverlay.classList.add(
    "open"
  );

  document.body.style.overflow =
    "hidden";
}


// ============================================================
// FERMER PANIER
// ============================================================

function closeCart() {

  cartDrawer.classList.remove(
    "open"
  );

  drawerOverlay.classList.remove(
    "open"
  );

  document.body.style.overflow =
    "";
}


// ============================================================
// PAYPAL
// ============================================================

function payWithPayPal() {

  const total =
    getCartTotal();


  if (
    total <= 0
  ) {

    showToast(
      "Ton panier est vide."
    );

    return;
  }


  /*
   * Exemple :
   *
   * Total = 15.99 €
   *
   * URL générée :
   *
   * https://paypal.me/SH0PNOVA/15.99
   */


  const amount =
    total.toFixed(2);


  const paypalUrl =
    `https://paypal.me/${PAYPAL_USERNAME}/${amount}`;


  window.location.href =
    paypalUrl;
}


// ============================================================
// TOAST
// ============================================================

function showToast(
  message
) {

  const toast =
    document.createElement(
      "div"
    );

  toast.className =
    "toast";

  toast.textContent =
    "✓ " + message;


  toastContainer.appendChild(
    toast
  );


  setTimeout(
    () => {

      toast.style.opacity =
        "0";

      toast.style.transform =
        "translateY(10px)";


      setTimeout(
        () => {

          toast.remove();

        },
        250
      );

    },
    2200
  );
}


// ============================================================
// SÉCURITÉ HTML
// ============================================================

function escapeHTML(
  value
) {

  return String(value)
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );
}


function escapeAttribute(
  value
) {

  return escapeHTML(value);
}


// ============================================================
// RECHERCHE
// ============================================================

searchInput.addEventListener(
  "input",
  event => {

    searchTerm =
      event.target.value.trim();

    renderProducts();

  }
);


// ============================================================
// TRI
// ============================================================

sortSelect.addEventListener(
  "change",
  () => {

    renderProducts();

  }
);


// ============================================================
// PANIER
// ============================================================

cartButton.addEventListener(
  "click",
  openCart
);


closeCartButton.addEventListener(
  "click",
  closeCart
);


drawerOverlay.addEventListener(
  "click",
  closeCart
);


// ============================================================
// PAYPAL
// ============================================================

checkoutButton.addEventListener(
  "click",
  payWithPayPal
);


// ============================================================
// ACCUEIL
// ============================================================

homeButton.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


// ============================================================
// ESCAPE
// ============================================================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeCart();

    }

  }
);


// ============================================================
// INITIALISATION
// ============================================================

function init() {

  renderCategories();

  renderProducts();

  updateCartUI();

}


init();
