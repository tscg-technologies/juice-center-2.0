/**
 * JUICE CENTER - MASTER JAVASCRIPT
 * Pure Vanilla JavaScript: Menu Data, Cart State, Filters, Modal, Forms & Utilities
 */

// -----------------------------------------------------------------------------
// 1. MENU DATA STORE (Centralized & easily editable beverage catalog)
// -----------------------------------------------------------------------------
const JUICE_MENU = [
  // Fresh Fruit Juices
  {
    id: 'fj-1',
    name: 'Fresh Orange Juice',
    category: 'fresh-juices',
    subCategory: 'citrus',
    price: 60,
    desc: 'Pure cold-pressed sweet citrus oranges packed with natural vitamin C.',
    image: 'assets/images/orange-juice.jpg',
    placeholderClass: 'placeholder-orange',
    placeholderIcon: '🍊',
    label: 'FRESH ORANGE JUICE',
    isVeg: true,
    popular: true,
    rating: 4.9
  },
  {
    id: 'fj-2',
    name: 'Watermelon Juice',
    category: 'fresh-juices',
    subCategory: 'refresher',
    price: 50,
    desc: 'Hydrating, naturally sweet ruby red watermelon nectar, freshly crushed.',
    image: 'assets/images/watermelon-juice.jpg',
    placeholderClass: 'placeholder-watermelon',
    placeholderIcon: '🍉',
    label: 'WATERMELON JUICE',
    isVeg: true,
    popular: true,
    rating: 4.8
  },
  {
    id: 'fj-3',
    name: 'Pineapple Juice',
    category: 'fresh-juices',
    subCategory: 'tropical',
    price: 60,
    desc: 'Tangy-sweet ripe golden pineapples with a refreshing tropical punch.',
    image: 'assets/images/fresh-fruit-counter.jpg',
    placeholderClass: 'placeholder-mango',
    placeholderIcon: '🍍',
    label: 'PINEAPPLE JUICE',
    isVeg: true,
    popular: false,
    rating: 4.7
  },
  {
    id: 'fj-4',
    name: 'Mango Juice',
    category: 'fresh-juices',
    subCategory: 'seasonal',
    price: 70,
    desc: 'Rich, luscious pulp from naturally ripened sweet Alphonso mangoes.',
    image: 'assets/images/mango-smoothie.jpg',
    placeholderClass: 'placeholder-mango',
    placeholderIcon: '🥭',
    label: 'MANGO JUICE',
    isVeg: true,
    popular: true,
    rating: 4.9
  },
  {
    id: 'fj-5',
    name: 'Pomegranate Juice',
    category: 'fresh-juices',
    subCategory: 'seasonal',
    price: 80,
    desc: 'Antioxidant-rich fresh ruby pomegranate pearls cold-pressed to perfection.',
    image: 'assets/images/pomegranate-juice.jpg',
    placeholderClass: 'placeholder-pomegranate',
    placeholderIcon: '🫐',
    label: 'POMEGRANATE JUICE',
    isVeg: true,
    popular: true,
    rating: 4.9
  },
  {
    id: 'fj-6',
    name: 'Fresh Apple Juice',
    category: 'fresh-juices',
    subCategory: 'seasonal',
    price: 70,
    desc: 'Crisp, crisp sweet orchard apples blended fresh upon your order.',
    image: 'assets/images/fresh-fruit-counter.jpg',
    placeholderClass: 'placeholder-watermelon',
    placeholderIcon: '🍎',
    label: 'APPLE JUICE',
    isVeg: true,
    popular: false,
    rating: 4.6
  },
  {
    id: 'fj-7',
    name: 'Sweet Lime Juice (Mosambi)',
    category: 'fresh-juices',
    subCategory: 'citrus',
    price: 60,
    desc: 'Classic invigorating sweet lime juice with a delicate hint of black salt.',
    image: 'assets/images/virgin-mojito.jpg',
    placeholderClass: 'placeholder-green',
    placeholderIcon: '🍋',
    label: 'SWEET LIME JUICE',
    isVeg: true,
    popular: true,
    rating: 4.8
  },
  {
    id: 'fj-8',
    name: 'Special Mixed Fruit Juice',
    category: 'fresh-juices',
    subCategory: 'mixed',
    price: 90,
    desc: 'A vibrant handcrafted fusion of orange, pineapple, apple, and watermelon.',
    image: 'assets/images/hero-juice-spread.jpg',
    placeholderClass: 'placeholder-orange',
    placeholderIcon: '🍹',
    label: 'MIXED FRUIT JUICE',
    isVeg: true,
    popular: true,
    rating: 4.9
  },

  // Milkshakes
  {
    id: 'ms-1',
    name: 'Chocolate Milkshake',
    category: 'milkshakes',
    subCategory: 'classic',
    price: 90,
    desc: 'Velvety rich cocoa syrup churned with chilled whole milk and ice cream.',
    image: 'assets/images/chocolate-milkshake.jpg',
    placeholderClass: 'placeholder-chocolate',
    placeholderIcon: '🍫',
    label: 'CHOCOLATE MILKSHAKE',
    isVeg: true,
    popular: true,
    rating: 4.8
  },
  {
    id: 'ms-2',
    name: 'Vanilla Milkshake',
    category: 'milkshakes',
    subCategory: 'classic',
    price: 80,
    desc: 'Aromatic pure vanilla extract blended into creamy chilled milk shake.',
    image: 'assets/images/chocolate-milkshake.jpg',
    placeholderClass: 'placeholder-orange',
    placeholderIcon: '🍦',
    label: 'VANILLA MILKSHAKE',
    isVeg: true,
    popular: false,
    rating: 4.6
  },
  {
    id: 'ms-3',
    name: 'Strawberry Milkshake',
    category: 'milkshakes',
    subCategory: 'fruit',
    price: 90,
    desc: 'Garden-fresh sweet strawberries whipped with thick creamy milk.',
    image: 'assets/images/pomegranate-juice.jpg',
    placeholderClass: 'placeholder-pomegranate',
    placeholderIcon: '🍓',
    label: 'STRAWBERRY MILKSHAKE',
    isVeg: true,
    popular: true,
    rating: 4.8
  },
  {
    id: 'ms-4',
    name: 'Mango Milkshake',
    category: 'milkshakes',
    subCategory: 'fruit',
    price: 90,
    desc: 'Sweet, sunny mango puree whipped with farm-fresh milk and ice cream.',
    image: 'assets/images/mango-smoothie.jpg',
    placeholderClass: 'placeholder-mango',
    placeholderIcon: '🥭',
    label: 'MANGO MILKSHAKE',
    isVeg: true,
    popular: true,
    rating: 4.9
  },
  {
    id: 'ms-5',
    name: 'Banana Milkshake',
    category: 'milkshakes',
    subCategory: 'fruit',
    price: 70,
    desc: 'Wholesome ripe bananas blended with creamy milk for a nourishing drink.',
    image: 'assets/images/mango-smoothie.jpg',
    placeholderClass: 'placeholder-mango',
    placeholderIcon: '🍌',
    label: 'BANANA MILKSHAKE',
    isVeg: true,
    popular: false,
    rating: 4.5
  },
  {
    id: 'ms-6',
    name: 'Oreo Milkshake',
    category: 'milkshakes',
    subCategory: 'chocolate',
    price: 110,
    desc: 'Crushed chocolate sandwich biscuits spun into an ultra-thick milkshake.',
    image: 'assets/images/chocolate-milkshake.jpg',
    placeholderClass: 'placeholder-chocolate',
    placeholderIcon: '🍪',
    label: 'OREO MILKSHAKE',
    isVeg: true,
    popular: true,
    rating: 4.9
  },

  // Smoothies
  {
    id: 'sm-1',
    name: 'Mango Smoothie',
    category: 'smoothies',
    subCategory: 'tropical',
    price: 100,
    desc: 'Thick, frosty golden mango smoothie blended with chilled natural yogurt.',
    image: 'assets/images/mango-smoothie.jpg',
    placeholderClass: 'placeholder-mango',
    placeholderIcon: '🥭',
    label: 'MANGO SMOOTHIE',
    isVeg: true,
    popular: true,
    rating: 4.8
  },
  {
    id: 'sm-2',
    name: 'Strawberry Smoothie',
    category: 'smoothies',
    subCategory: 'berry',
    price: 110,
    desc: 'A tart-sweet berry blend with rich probiotics and crushed ice.',
    image: 'assets/images/pomegranate-juice.jpg',
    placeholderClass: 'placeholder-pomegranate',
    placeholderIcon: '🍓',
    label: 'STRAWBERRY SMOOTHIE',
    isVeg: true,
    popular: true,
    rating: 4.7
  },
  {
    id: 'sm-3',
    name: 'Banana Energy Smoothie',
    category: 'smoothies',
    subCategory: 'creamy',
    price: 90,
    desc: 'Wholesome potassium powerhouse with honey, banana, and smooth yogurt.',
    image: 'assets/images/mango-smoothie.jpg',
    placeholderClass: 'placeholder-mango',
    placeholderIcon: '🍌',
    label: 'BANANA SMOOTHIE',
    isVeg: true,
    popular: false,
    rating: 4.6
  },
  {
    id: 'sm-4',
    name: 'Mixed Berry Smoothie',
    category: 'smoothies',
    subCategory: 'berry',
    price: 120,
    desc: 'Vibrant mix of raspberries, blueberries, and strawberries in thick yogurt.',
    image: 'assets/images/pomegranate-juice.jpg',
    placeholderClass: 'placeholder-berry',
    placeholderIcon: '🫐',
    label: 'MIXED BERRY SMOOTHIE',
    isVeg: true,
    popular: true,
    rating: 4.9
  },
  {
    id: 'sm-5',
    name: 'Tropical Fruit Smoothie',
    category: 'smoothies',
    subCategory: 'tropical',
    price: 120,
    desc: 'Exotic blend of pineapple, passion fruit tones, and sweet mango.',
    image: 'assets/images/hero-juice-spread.jpg',
    placeholderClass: 'placeholder-orange',
    placeholderIcon: '🍍',
    label: 'TROPICAL SMOOTHIE',
    isVeg: true,
    popular: false,
    rating: 4.8
  },

  // Mocktails & Refreshers
  {
    id: 'sp-1',
    name: 'Virgin Mojito',
    category: 'special-drinks',
    subCategory: 'mocktail',
    price: 90,
    desc: 'Fresh garden spearmint leaves, muddled lemon wedges, sugar, and sparkling soda.',
    image: 'assets/images/virgin-mojito.jpg',
    placeholderClass: 'placeholder-green',
    placeholderIcon: '🌱',
    label: 'VIRGIN MOJITO',
    isVeg: true,
    popular: true,
    rating: 4.9
  },
  {
    id: 'sp-2',
    name: 'Blue Lagoon Cooler',
    category: 'special-drinks',
    subCategory: 'mocktail',
    price: 100,
    desc: 'Refreshing citrus curaçao flavor mixed with zesty lime and crisp effervescent soda.',
    image: 'assets/images/virgin-mojito.jpg',
    placeholderClass: 'placeholder-cool',
    placeholderIcon: '🌊',
    label: 'BLUE LAGOON',
    isVeg: true,
    popular: true,
    rating: 4.8
  },
  {
    id: 'sp-3',
    name: 'Mint Lemon Cooler',
    category: 'special-drinks',
    subCategory: 'lime',
    price: 70,
    desc: 'Freshly squeezed lemon juice with crushed mint leaves and cooling rock salt.',
    image: 'assets/images/virgin-mojito.jpg',
    placeholderClass: 'placeholder-green',
    placeholderIcon: '🍃',
    label: 'MINT LEMON COOLER',
    isVeg: true,
    popular: false,
    rating: 4.7
  },
  {
    id: 'sp-4',
    name: 'Watermelon Mint Cooler',
    category: 'special-drinks',
    subCategory: 'refresher',
    price: 80,
    desc: 'Chilled watermelon juice infused with crushed mint and a splash of lime.',
    image: 'assets/images/watermelon-juice.jpg',
    placeholderClass: 'placeholder-watermelon',
    placeholderIcon: '🍉',
    label: 'WATERMELON COOLER',
    isVeg: true,
    popular: true,
    rating: 4.8
  },
  {
    id: 'sp-5',
    name: 'Orange Mint Cooler',
    category: 'special-drinks',
    subCategory: 'refresher',
    price: 80,
    desc: 'Sun-ripened orange juice layered with fragrant mint and crushed ice.',
    image: 'assets/images/orange-juice.jpg',
    placeholderClass: 'placeholder-orange',
    placeholderIcon: '🍊',
    label: 'ORANGE MINT COOLER',
    isVeg: true,
    popular: false,
    rating: 4.7
  },

  // Falooda
  {
    id: 'fl-1',
    name: 'Classic Rose Falooda',
    category: 'special-drinks',
    subCategory: 'falooda',
    price: 100,
    desc: 'Fragrant rose syrup, vermicelli, sabja basil seeds, chilled milk, and vanilla ice cream.',
    image: 'assets/images/royal-falooda.jpg',
    placeholderClass: 'placeholder-pomegranate',
    placeholderIcon: '🍨',
    label: 'CLASSIC FALOODA',
    isVeg: true,
    popular: true,
    rating: 4.9
  },
  {
    id: 'fl-2',
    name: 'Royal Kesar Falooda',
    category: 'special-drinks',
    subCategory: 'falooda',
    price: 130,
    desc: 'Regal saffron essence, layered with dry fruits, vermicelli, and rich ice cream.',
    image: 'assets/images/royal-falooda.jpg',
    placeholderClass: 'placeholder-mango',
    placeholderIcon: '👑',
    label: 'ROYAL FALOODA',
    isVeg: true,
    popular: true,
    rating: 5.0
  },
  {
    id: 'fl-3',
    name: 'Mango Falooda',
    category: 'special-drinks',
    subCategory: 'falooda',
    price: 120,
    desc: 'Seasonal sweet mango pulp layered with vermicelli, basil seeds, and mango scoop.',
    image: 'assets/images/mango-smoothie.jpg',
    placeholderClass: 'placeholder-mango',
    placeholderIcon: '🥭',
    label: 'MANGO FALOODA',
    isVeg: true,
    popular: false,
    rating: 4.8
  },
  {
    id: 'fl-4',
    name: 'Chocolate Falooda',
    category: 'special-drinks',
    subCategory: 'falooda',
    price: 130,
    desc: 'Indulgent cocoa drizzle, chocolate noodles, nuts, and decadent chocolate ice cream.',
    image: 'assets/images/chocolate-milkshake.jpg',
    placeholderClass: 'placeholder-chocolate',
    placeholderIcon: '🍫',
    label: 'CHOCOLATE FALOODA',
    isVeg: true,
    popular: false,
    rating: 4.8
  },

  // Fresh Lime Drinks & Combos
  {
    id: 'lm-1',
    name: 'Fresh Lime Soda (Sweet & Salt)',
    category: 'special-drinks',
    subCategory: 'lime',
    price: 40,
    desc: 'Classic sparkling soda infused with freshly pressed lime juice and balanced spices.',
    image: 'assets/images/virgin-mojito.jpg',
    placeholderClass: 'placeholder-green',
    placeholderIcon: '🍋',
    label: 'FRESH LIME SODA',
    isVeg: true,
    popular: true,
    rating: 4.8
  },
  {
    id: 'lm-2',
    name: 'Sweet Lime Water (Nimbu Pani)',
    category: 'special-drinks',
    subCategory: 'lime',
    price: 50,
    desc: 'Pure mineral water, fresh yellow lime, raw cane sugar, and roasted cumin spice.',
    image: 'assets/images/virgin-mojito.jpg',
    placeholderClass: 'placeholder-green',
    placeholderIcon: '🍋',
    label: 'SWEET LIME WATER',
    isVeg: true,
    popular: false,
    rating: 4.6
  },
  {
    id: 'lm-3',
    name: 'Mint Lemon Juice',
    category: 'special-drinks',
    subCategory: 'lime',
    price: 50,
    desc: 'Soothing blend of zesty lemon juice, crushed peppermint, and Himalayan pink salt.',
    image: 'assets/images/virgin-mojito.jpg',
    placeholderClass: 'placeholder-green',
    placeholderIcon: '🍃',
    label: 'MINT LEMON JUICE',
    isVeg: true,
    popular: true,
    rating: 4.7
  },
  {
    id: 'lm-4',
    name: 'Seasonal Special Juice',
    category: 'special-drinks',
    subCategory: 'special',
    price: 90,
    desc: 'Chef curated market-fresh seasonal fruits cold-pressed into a wholesome booster.',
    image: 'assets/images/hero-juice-spread.jpg',
    placeholderClass: 'placeholder-orange',
    placeholderIcon: '✨',
    label: 'SEASONAL SPECIAL JUICE',
    isVeg: true,
    popular: true,
    rating: 4.9
  }
];

// -----------------------------------------------------------------------------
// 2. SHOPPING CART STATE MANAGEMENT (Vanilla JS + LocalStorage)
// -----------------------------------------------------------------------------
const CART_STORAGE_KEY = 'juice_center_cart';
const DELIVERY_FEE = 20; // Illustrative demo delivery fee

let cart = [];

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Could not read cart from localStorage', e);
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.warn('Could not save cart to localStorage', e);
  }
  updateCartUI();
}

function addToCart(drinkId, quantity = 1) {
  const item = JUICE_MENU.find(d => d.id === drinkId);
  if (!item) return;

  const existingIndex = cart.findIndex(c => c.id === drinkId);
  if (existingIndex > -1) {
    cart[existingIndex].qty += quantity;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      placeholderIcon: item.placeholderIcon,
      qty: quantity
    });
  }

  saveCart();
  showToast(`Added ${item.name} to cart!`);
}

function updateCartQuantity(drinkId, delta) {
  const index = cart.findIndex(c => c.id === drinkId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
    showToast('Item removed from cart.');
  }
  saveCart();
}

function removeFromCart(drinkId) {
  cart = cart.filter(c => c.id !== drinkId);
  saveCart();
  showToast('Item removed from cart.');
}

function clearCart() {
  cart = [];
  saveCart();
}

function getCartCalculations() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const delivery = subtotal > 0 ? DELIVERY_FEE : 0;
  const grandTotal = subtotal + delivery;

  return { subtotal, totalCount, delivery, grandTotal };
}

function updateCartUI() {
  const { subtotal, totalCount, delivery, grandTotal } = getCartCalculations();

  // Update Header Badges
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  // Update Cart Drawer Items
  const drawerItems = document.getElementById('cartDrawerItems');
  if (drawerItems) {
    if (cart.length === 0) {
      drawerItems.innerHTML = `
        <div class="cart-empty-message">
          <div class="cart-empty-icon">🥤</div>
          <h4>Your cart is empty</h4>
          <p>Explore our fresh menu and add your favorite beverages!</p>
        </div>
      `;
    } else {
      drawerItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-placeholder">
            ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-sm);">` : item.placeholderIcon}
          </div>
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">₹${item.price} each</div>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
            <span class="qty-count">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove item">✕</button>
        </div>
      `).join('');
    }
  }

  // Update Cart Drawer Footers
  const subtotalEl = document.getElementById('cartSubtotal');
  const deliveryEl = document.getElementById('cartDelivery');
  const totalEl = document.getElementById('cartGrandTotal');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (deliveryEl) deliveryEl.textContent = `₹${delivery}`;
  if (totalEl) totalEl.textContent = `₹${grandTotal}`;

  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0;
    if (cart.length === 0) {
      checkoutBtn.style.opacity = '0.5';
      checkoutBtn.style.cursor = 'not-allowed';
    } else {
      checkoutBtn.style.opacity = '1';
      checkoutBtn.style.cursor = 'pointer';
    }
  }
}

// -----------------------------------------------------------------------------
// 3. TOAST NOTIFICATIONS
// -----------------------------------------------------------------------------
function showToast(message, isError = false) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${isError ? 'toast-error' : ''}`;
  toast.innerHTML = `<span>${isError ? '⚠️' : '✅'}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// -----------------------------------------------------------------------------
// 4. CARD RENDERING HELPER (Generates Beverage Cards with Images)
// -----------------------------------------------------------------------------
function createDrinkCard(drink) {
  return `
    <article class="beverage-card" data-id="${drink.id}" data-category="${drink.category}">
      <div class="beverage-card-media">
        <div class="image-placeholder ${drink.placeholderClass}">
          <img src="${drink.image}" alt="${drink.name}" class="beverage-photo" loading="lazy" onerror="this.style.display='none'">
          <span class="placeholder-icon">${drink.placeholderIcon}</span>
          <span class="placeholder-label">${drink.label}</span>
        </div>
        ${drink.isVeg ? '<span class="beverage-badge-veg" title="100% Pure Vegetarian" aria-label="Vegetarian"></span>' : ''}
        ${drink.popular ? '<span class="beverage-tag">★ Popular</span>' : ''}
      </div>
      <div class="beverage-card-body">
        <h3 class="beverage-title">${drink.name}</h3>
        <p class="beverage-desc">${drink.desc}</p>
        <div class="beverage-card-footer">
          <div class="beverage-price">₹${drink.price} <span>/ serving</span></div>
          <button class="btn btn-add-cart" onclick="addToCart('${drink.id}')" aria-label="Add ${drink.name} to cart">
            <span>+</span> Add
          </button>
        </div>
      </div>
    </article>
  `;
}

// -----------------------------------------------------------------------------
// 5. GLOBAL INTERACTIVE CONTROLLERS
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Cart
  loadCart();

  // 2. Mobile Nav Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // 3. Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  });

  // 4. Cart Drawer Toggle Controls
  const cartOpenBtns = document.querySelectorAll('.cart-toggle-btn, [data-action="open-cart"]');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');

  function openCartDrawer() {
    cartOverlay?.classList.add('active');
    cartDrawer?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartOverlay?.classList.remove('active');
    cartDrawer?.classList.remove('active');
    document.body.style.overflow = '';
  }

  cartOpenBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  }));

  cartCloseBtn?.addEventListener('click', closeCartDrawer);
  cartOverlay?.addEventListener('click', closeCartDrawer);

  // 5. Checkout Modal Controls
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
  const checkoutCancelBtn = document.getElementById('checkoutCancelBtn');
  const checkoutForm = document.getElementById('checkoutForm');

  if (checkoutBtn && checkoutModal) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;
      closeCartDrawer();
      checkoutModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const { subtotal, delivery, grandTotal, totalCount } = getCartCalculations();
      const modalSummary = document.getElementById('modalOrderSummary');
      if (modalSummary) {
        modalSummary.innerHTML = `
          <div style="background: var(--color-cream); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.2rem; font-size: 0.9rem;">
            <div><strong>Items:</strong> ${totalCount} drink(s)</div>
            <div><strong>Subtotal:</strong> ₹${subtotal} | <strong>Delivery:</strong> ₹${delivery}</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary); margin-top: 0.4rem;">Demo Total Payable: ₹${grandTotal}</div>
          </div>
        `;
      }
    });

    function closeCheckout() {
      checkoutModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    checkoutCloseBtn?.addEventListener('click', closeCheckout);
    checkoutCancelBtn?.addEventListener('click', closeCheckout);

    checkoutForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('orderName')?.value.trim();
      const phone = document.getElementById('orderPhone')?.value.trim();
      const address = document.getElementById('orderAddress')?.value.trim();

      if (!name || !phone || !address) {
        showToast('Please fill in all required fields.', true);
        return;
      }

      closeCheckout();
      const orderRef = 'JC-' + Math.floor(100000 + Math.random() * 900000);
      
      const successModal = document.getElementById('orderSuccessModal');
      const orderRefSpan = document.getElementById('confirmedOrderRef');
      if (orderRefSpan) orderRefSpan.textContent = orderRef;

      if (successModal) {
        successModal.classList.add('active');
      } else {
        alert(`Demo Order Confirmed!\nOrder Reference: ${orderRef}\nThank you, ${name}! This is a frontend demo order.`);
      }

      clearCart();
    });
  }

  const successCloseBtn = document.getElementById('successCloseBtn');
  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', () => {
      document.getElementById('orderSuccessModal')?.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // 6. Back-To-Top Button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 7. FAQ Accordion Functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 8. Contact Form Validation
  const contactForm = document.getElementById('contactEnquiryForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const phoneInput = document.getElementById('contactPhone');
      const msgInput = document.getElementById('contactMessage');

      [nameInput, emailInput, phoneInput, msgInput].forEach(inp => {
        inp?.closest('.form-group')?.classList.remove('has-error');
      });

      if (!nameInput?.value.trim()) {
        nameInput?.closest('.form-group')?.classList.add('has-error');
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput?.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput?.closest('.form-group')?.classList.add('has-error');
        isValid = false;
      }

      const phoneRegex = /^[0-9+\s-]{8,15}$/;
      if (!phoneInput?.value.trim() || !phoneRegex.test(phoneInput.value.trim())) {
        phoneInput?.closest('.form-group')?.classList.add('has-error');
        isValid = false;
      }

      if (!msgInput?.value.trim()) {
        msgInput?.closest('.form-group')?.classList.add('has-error');
        isValid = false;
      }

      if (isValid) {
        showToast('Enquiry received! (Frontend Demo Mode)');
        contactForm.reset();
        const successNotice = document.getElementById('contactSuccessNotice');
        if (successNotice) {
          successNotice.style.display = 'block';
          setTimeout(() => { successNotice.style.display = 'none'; }, 6000);
        }
      } else {
        showToast('Please fix the highlighted fields.', true);
      }
    });
  }

  // 9. Lightbox for Gallery
  setupGalleryLightbox();
});

// -----------------------------------------------------------------------------
// 6. GALLERY LIGHTBOX LOGIC
// -----------------------------------------------------------------------------
function setupGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-card');
  const lightboxModal = document.getElementById('lightboxModal');
  if (!galleryItems.length || !lightboxModal) return;

  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');
  const previewEl = document.getElementById('lightboxPreview');

  let currentIndex = 0;
  const itemsData = Array.from(galleryItems).map(item => ({
    title: item.getAttribute('data-title') || 'Juice Center Showcase',
    category: item.getAttribute('data-category') || 'Beverage',
    image: item.getAttribute('data-image') || '',
    placeholderClass: item.getAttribute('data-placeholder-class') || 'placeholder-orange',
    label: item.getAttribute('data-label') || 'GALLERY IMAGE'
  }));

  function openLightbox(index) {
    currentIndex = index;
    const data = itemsData[currentIndex];
    if (!data) return;

    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = `Category: ${data.category.toUpperCase()}`;
    if (previewEl) {
      previewEl.className = `lightbox-placeholder-preview image-placeholder ${data.placeholderClass}`;
      if (data.image) {
        previewEl.innerHTML = `
          <img src="${data.image}" alt="${data.title}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-md);">
        `;
      } else {
        previewEl.innerHTML = `
          <span class="placeholder-icon" style="font-size: 3.5rem;">🍹</span>
          <span class="placeholder-label">${data.label}</span>
        `;
      }
    }

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % itemsData.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + itemsData.length) % itemsData.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
  });

  closeBtn?.addEventListener('click', closeLightbox);
  nextBtn?.addEventListener('click', showNext);
  prevBtn?.addEventListener('click', showPrev);

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}
