// ============================================================
// NOVA KEY SHOP
// APP.JS
// ============================================================


// ============================================================
// PRODUITS
// ============================================================

const products = [

  {
    id: "roblox-100",
    name: "Roblox Card - 100 ROBUX",
    price: 1.19,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/13504/616x353/roblox-card-100-robux-100-robux-pc-jeu-cover.jpg?v=1677828910"
  },

  {
    id: "roblox-300",
    name: "Roblox Card - 300 ROBUX",
    price: 3.95,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/18880/616x353/roblox-300-robux-300-robux-pc-jeu-europe-cover.jpg?v=1742283940"
  },

  {
    id: "roblox-400",
    name: "Roblox Card - 400 ROBUX",
    price: 6.49,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/15265/616x353/roblox-card-400-robux-400-robux-pc-jeu-cover.jpg?v=1699346075"
  },

  {
    id: "roblox-1500",
    name: "Roblox Card - 1500 ROBUX",
    price: 9.59,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/23409/616x353/roblox-1500-robux-pc-cover.jpg?v=1785919991"
  },

  {
    id: "roblox-800",
    name: "Roblox Card - 800 ROBUX",
    price: 9.91,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/10437/616x353/roblox-800-robux-pc-cover.jpg?v=1767788892"
  },

  {
    id: "roblox-1000",
    name: "Roblox Card - 1000 ROBUX",
    price: 10.49,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/22952/616x353/roblox-1000-robux-pc-cover.jpg?v=1781173294"
  },

  {
    id: "roblox-2000",
    name: "Roblox Card - 2000 ROBUX",
    price: 21.99,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/15168/616x353/roblox-card-2000-robux-pc-cover.jpg?v=1767788872"
  },

  {
    id: "roblox-1700",
    name: "Roblox Card - 1700 ROBUX",
    price: 23.99,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/7994/616x353/roblox-1700-robux-pc-cover.jpg?v=1767788932"
  },

  {
    id: "roblox-2500",
    name: "Roblox Card - 2500 ROBUX",
    price: 26.99,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/18652/616x353/roblox-2500-robux-2500-robux-pc-jeu-europe-cover.jpg?v=1740132827"
  },

  {
    id: "roblox-3000",
    name: "Roblox Card - 3000 ROBUX",
    price: 34.99,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/18878/616x353/roblox-3000-robux-pc-cover.jpg?v=1767788845"
  },

  {
    id: "roblox-4000",
    name: "Roblox Card - 4000 ROBUX",
    price: 39.99,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/18879/616x353/roblox-4000-robux-pc-cover.jpg?v=1767788831"
  },

  {
    id: "roblox-4500",
    name: "Roblox Card - 4500 ROBUX",
    price: 44.99,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/7995/616x353/roblox-4500-robux-pc-cover.jpg?v=1767788921"
  },

  {
    id: "roblox-5250",
    name: "Roblox Card - 5250 ROBUX",
    price: 51.99,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/21588/616x353/roblox-5250-robux-pc-battle-net-cover.jpg?v=1770902730"
  },

  {
    id: "roblox-10000",
    name: "Roblox Card - 10000 ROBUX",
    price: 89.99,
    category: "Roblox",
    platform: "PC",
    image: "https://gaming-cdn.com/images/products/10435/616x353/roblox-10000-robux-pc-cover.jpg?v=1767788900"
  }

];


// ============================================================
// CONFIGURATION
// ============================================================

const CART_STORAGE_KEY = "novaKeyShopCart";

const PAYPAL_USERNAME = "SH0PNOVA";


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
  document.getElementById("productsGrid");

const categoriesContainer =
  document.getElementById("categories");

const searchInput =
  document.getElementById("searchInput");

const sortSelect =
  document.getElementById("sortSelect");

const resultCount =
  document.getElementById("resultCount");

const cartButton =
  document.getElementById("cartButton");

const cartCount =
  document.getElementById("cartCount");

const cartDrawer =
  document.getElementById("cartDrawer");

const drawerOverlay =
  document.getElementById("drawerOverlay");

const closeCartButton =
  document.getElementById("closeCart");

const cartItems =
  document.getElementById("cartItems");

const cartTotal =
  document.getElementById("cartTotal");

const checkoutButton =
  document.getElementById("checkoutButton");

const toastContainer =
  document.getElementById("toastContainer");

const homeButton =
  document.getElementById("homeButton");


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
// CHARGER LE PANIER
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
      "Impossible de charger le panier :",
      error
    );

    return [];
  }
}


// ============================================================
// SAUVEGARDER LE PANIER
// ============================================================

function saveCart() {

  try {

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );

  } catch (error) {

    console.error(
      "Impossible de sauvegarder le panier :",
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
        product => product.category
      )
    )
  ];

  categoriesContainer.innerHTML = "";

  categories.forEach(
    category => {

      const button =
        document.createElement("button");

      button.className =
        "category" +
        (
          category === activeCategory
            ? " active"
            : ""
        );

      button.textContent =
        category === "Tous"
          ? "✨ Tous"
          : category;

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
// FILTRER LES PRODUITS
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

  } else if (sort === "price-high") {

    filtered.sort(
      (a, b) =>
        b.price - a.price
    );

  } else if (sort === "name") {

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
// AFFICHER LES PRODUITS
// ============================================================

function renderProducts() {

  const filtered =
    getFilteredProducts();

  productsGrid.innerHTML = "";


  resultCount.textContent =
    `${filtered.length} produit${
      filtered.length > 1
        ? "s"
        : ""
    }`;


  if (filtered.length === 0) {

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
        () =>
          addToCart(
            product.id
          )
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
// SUPPRIMER DU PANIER
// ============================================================

function removeFromCart(productId) {

  cart =
    cart.filter(
      item =>
        item.id !== productId
    );

  saveCart();

  updateCartUI();
}


// ============================================================
// MODIFIER QUANTITÉ
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
// PRODUITS DU PANIER
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
// TOTAL DU PANIER
// ============================================================

function getCartTotal() {

  return getCartProducts()
    .reduce(
      (
        total,
        product
      ) =>
        total +
        product.price *
        product.quantity,
      0
    );
}


// ============================================================
// QUANTITÉ TOTALE
// ============================================================

function getCartQuantity() {

  return cart.reduce(
    (
      total,
      item
    ) =>
      total +
      item.quantity,
    0
  );
}


// ============================================================
// AFFICHER LE PANIER
// ============================================================

function renderCart() {

  const cartProducts =
    getCartProducts();


  cartItems.innerHTML = "";


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

            <div
              style="
                display:flex;
                gap:6px;
                margin-top:8px;
              "
            >

              <button
                class="close-btn"
                style="
                  width:28px;
                  height:28px;
                "
                data-action="minus"
              >
                −
              </button>

              <button
                class="close-btn"
                style="
                  width:28px;
                  height:28px;
                "
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
            () =>
              changeQuantity(
                product.id,
                -1
              )
          );


        item
          .querySelector(
            '[data-action="plus"]'
          )
          .addEventListener(
            "click",
            () =>
              changeQuantity(
                product.id,
                1
              )
          );


        item
          .querySelector(
            '[data-action="remove"]'
          )
          .addEventListener(
            "click",
            () =>
              removeFromCart(
                product.id
              )
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
// METTRE À JOUR L'INTERFACE DU PANIER
// ============================================================

function updateCartUI() {

  cartCount.textContent =
    getCartQuantity();

  renderCart();
}


// ============================================================
// OUVRIR LE PANIER
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
// FERMER LE PANIER
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
// PAIEMENT PAYPAL
// ============================================================

function payWithPayPal() {

  const total =
    getCartTotal();


  if (total <= 0) {

    showToast(
      "Ton panier est vide."
    );

    return;
  }


  /*
   * Exemple :
   *
   * total = 31.48
   *
   * URL :
   *
   * https://paypal.me/SH0PNOVA/31.48
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

function showToast(message) {

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
        () =>
          toast.remove(),
        250
      );

    },
    2200
  );
}


// ============================================================
// SÉCURITÉ HTML
// ============================================================

function escapeHTML(value) {

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


function escapeAttribute(value) {

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
// OUVRIR PANIER
// ============================================================

cartButton.addEventListener(
  "click",
  openCart
);


// ============================================================
// FERMER PANIER
// ============================================================

closeCartButton.addEventListener(
  "click",
  closeCart
);


drawerOverlay.addEventListener(
  "click",
  closeCart
);


// ============================================================
// BOUTON PAYPAL
// ============================================================

checkoutButton.addEventListener(
  "click",
  payWithPayPal
);


// ============================================================
// BOUTON ACCUEIL
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
// TOUCHE ESCAPE
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
