// Datos de ejemplo de productos
let products = JSON.parse(localStorage.getItem("products")) || [];

// Limpiar productos antiguos si existen menos de 4
if (products.length < 4) {
  localStorage.removeItem("products");
  products = [];
}

// Agregar productos predeterminados si no existen
if (products.length === 0) {
  products = [
    // Camisetas
    {
      id: 1,
      name: "Camiseta Clásica Azul",
      price: 19.99,
      category: "Camisetas",
      description: "Camiseta de algodón 100% cómoda y suave",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%232563eb' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECamiseta Azul%3C/text%3E%3C/svg%3E"
    },
    {
      id: 4,
      name: "Camiseta Roja Básica",
      price: 17.99,
      category: "Camisetas",
      description: "Camiseta roja con tela resistente",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23dc2626' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECamiseta Roja%3C/text%3E%3C/svg%3E"
    },
    {
      id: 5,
      name: "Camiseta Blanca Premium",
      price: 24.99,
      category: "Camisetas",
      description: "Camiseta blanca de alta calidad",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ffffff' width='200' height='200' stroke='%23ddd' stroke-width='1'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='%23333' text-anchor='middle' dominant-baseline='middle'%3ECamiseta Blanca%3C/text%3E%3C/svg%3E"
    },
    {
      id: 6,
      name: "Camiseta Negra Deportiva",
      price: 22.99,
      category: "Camisetas",
      description: "Camiseta negra con tecnología deportiva",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23111827' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECamiseta Negra%3C/text%3E%3C/svg%3E"
    },
    // Zapatos
    {
      id: 2,
      name: "Zapatos Deportivos",
      price: 89.99,
      category: "Zapatos",
      description: "Zapatillas deportivas cómodas y duraderas",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f97316' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EZapatillas%3C/text%3E%3C/svg%3E"
    },
    {
      id: 7,
      name: "Zapatos Casuales Negros",
      price: 65.99,
      category: "Zapatos",
      description: "Zapatos negros ideales para uso diario",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23000000' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EZapatos Negros%3C/text%3E%3C/svg%3E"
    },
    {
      id: 8,
      name: "Tenis Blancos Premium",
      price: 99.99,
      category: "Zapatos",
      description: "Tenis blancos de alta gama",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f5f5f5' width='200' height='200' stroke='%23ccc' stroke-width='2'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='%23333' text-anchor='middle' dominant-baseline='middle'%3ETenis Blancos%3C/text%3E%3C/svg%3E"
    },
    {
      id: 9,
      name: "Botas de Trabajo",
      price: 129.99,
      category: "Zapatos",
      description: "Botas resistentes para trabajo",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23654321' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBotas de Trabajo%3C/text%3E%3C/svg%3E"
    },
    // Pantalones
    {
      id: 3,
      name: "Pantalones Jeans",
      price: 59.99,
      category: "Pantalones",
      description: "Jeans de alta calidad y ajuste perfecto",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%231e40af' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPantalones Jeans%3C/text%3E%3C/svg%3E"
    },
    {
      id: 10,
      name: "Pantalones Grises Casual",
      price: 49.99,
      category: "Pantalones",
      description: "Pantalones grises cómodos para el día a día",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%236b7280' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPantalones Grises%3C/text%3E%3C/svg%3E"
    },
    {
      id: 11,
      name: "Pantalones Negros Elegantes",
      price: 74.99,
      category: "Pantalones",
      description: "Pantalones negros para ocasiones especiales",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23111827' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPantalones Negros%3C/text%3E%3C/svg%3E"
    },
    {
      id: 12,
      name: "Pantalones Deportivos",
      price: 54.99,
      category: "Pantalones",
      description: "Pantalones deportivos con tecnología transpirable",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%2306b6d4' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPantalones Deportivos%3C/text%3E%3C/svg%3E"
    }
  ];
  localStorage.setItem("products", JSON.stringify(products));
}

const productsGrid = document.getElementById("productsGrid");
const cartPanel = document.getElementById("cartPanel");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const scrollToProductsBtn = document.getElementById("scrollToProducts");
const yearSpan = document.getElementById("year");

let cart = [];

// Obtener clave de carrito del usuario actual
function getCartKey() {
  const loggedUser = localStorage.getItem("loggedUser");
  return loggedUser ? `cart_${loggedUser}` : "cart";
}

// Cargar carrito desde localStorage
function loadCart() {
  const cartKey = getCartKey();
  const savedCart = localStorage.getItem(cartKey);
  if (savedCart) {
    cart = JSON.parse(savedCart);
  } else {
    cart = [];
  }
}

// Guardar carrito en localStorage
function saveCart() {
  const cartKey = getCartKey();
  localStorage.setItem(cartKey, JSON.stringify(cart));
}


// Obtener categoría de la página actual
function getCurrentCategory() {
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  if (filename.includes('camisetas')) return 'Camisetas';
  if (filename.includes('zapatos')) return 'Zapatos';
  if (filename.includes('pantalones')) return 'Pantalones';
  return null; // Mostrar todos
}

// --- Wishlist helpers ---
function getWishlistKey() {
  const loggedUser = localStorage.getItem('loggedUser');
  return loggedUser ? `wishlist_${loggedUser}` : 'wishlist';
}

function loadWishlist() {
  const key = getWishlistKey();
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  const key = getWishlistKey();
  localStorage.setItem(key, JSON.stringify(list));
}

function addToWishlist(productId) {
  const productsList = JSON.parse(localStorage.getItem('products')) || [];
  const product = productsList.find(p => p.id === productId);
  if (!product) return false;

  let list = loadWishlist();
  // store ids to keep it simple
  const exists = list.find(i => (i.id ? i.id : i) === productId) || list.includes(productId);
  if (exists) return false;
  list.push(productId);
  saveWishlist(list);
  return true;
}


// Renderizar productos
function renderProducts() {
  if (!productsGrid) return;
  
  productsGrid.innerHTML = "";
  
  // Filtrar productos por categoría si es necesario
  const category = getCurrentCategory();
  const filteredProducts = category ? products.filter(p => p.category === category) : products;
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b7280;">No hay productos en esta categoría.</p>';
    return;
  }
  
  filteredProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <div style="flex: 1;">
        ${product.image ? `<img src="${product.image}" alt="${product.name}" class="product-image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">` : `<div class="product-image" style="width: 100%; height: 200px; background: #ddd; display: flex; align-items: center; justify-content: center; border-radius: 8px;">Sin imagen</div>`}
        <h4 class="product-name">${product.name}</h4>
        <p class="product-description">${product.description}</p>
      </div>
      <div class="product-footer">
        <span class="product-price">${product.price.toFixed(2)} €</span>
        <div style="display:flex;gap:.5rem;align-items:center;">
          <button class="view-details-btn" data-id="${product.id}">Ver detalles</button>
          <button class="add-wish-btn" data-id="${product.id}" style="background:#f59e0b;color:#fff;border:none;padding:.35rem .6rem;border-radius:999px;cursor:pointer">➕​</button>
        </div>
      </div>
    `;
    
    // Al hacer clic en la tarjeta, ir al detalle del producto (si el objetivo es el botón de detalle)
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("view-details-btn")) {
        window.location.href = `product-detail.html?id=${product.id}`;
      }
    });

    // Botón añadir a wishlist (detener propagación para que no active el click de la tarjeta)
    const wishBtn = card.querySelector('.add-wish-btn');
    if (wishBtn) {
      wishBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const id = Number(wishBtn.getAttribute('data-id'));
        const added = addToWishlist(id);
        if (added) {
          alert('Añadido a tu lista de deseos');
        } else {
          alert('El producto ya está en tu lista');
        }
      });
    }
    
    productsGrid.appendChild(card);
  });
}

// Actualizar carrito
function renderCart() {
  if (!cartItemsContainer) return;
  
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío.</p>';
  } else {
    cart.forEach((item) => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-qty">Cantidad: ${item.quantity}</div>
        </div>
        <div>
          <div>${(item.price * item.quantity).toFixed(2)} €</div>
          <button class="cart-item-remove" data-id="${item.id}">Eliminar</button>
        </div>
      `;
      cartItemsContainer.appendChild(row);
    });
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartCount) cartCount.textContent = totalItems;
  if (cartTotal) cartTotal.textContent = totalPrice.toFixed(2) + " €";
  
  saveCart();
}

// Añadir producto
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

// Eliminar producto
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

// Eventos
if (cartItemsContainer) {
  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-item-remove")) {
      const id = Number(e.target.getAttribute("data-id"));
      removeFromCart(id);
    }
  });
}

if (openCartBtn) {
  openCartBtn.addEventListener("click", () => {
    if (cartPanel) cartPanel.classList.add("open");
  });
}

if (closeCartBtn) {
  closeCartBtn.addEventListener("click", () => {
    if (cartPanel) cartPanel.classList.remove("open");
  });
}

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    const loggedUser = localStorage.getItem("loggedUser");

    if (!loggedUser) {
      alert("Debes iniciar sesión para continuar con el pago.");
      return;
    }

    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    
    // Agregar al historial de compras
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.email === loggedUser);
    if (user) {
      const purchaseDate = new Date().toLocaleDateString("es-ES");
      const purchaseItems = cart.map(item => `${item.name} (x${item.quantity})`).join(", ");
      const purchaseAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
      user.purchases.push(`${purchaseDate} - ${purchaseItems} - €${purchaseAmount}`);
      localStorage.setItem("users", JSON.stringify(users));
    }
    
    // Redirigir a pago.html
    window.location.href = "pago.html";
  });
}

if (scrollToProductsBtn) {
  scrollToProductsBtn.addEventListener("click", () => {
    if (productsGrid) productsGrid.scrollIntoView({ behavior: "smooth" });
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Mostrar/ocultar botón de checkout según sesión
function updateCheckoutButtonVisibility() {
  const loggedUser = localStorage.getItem("loggedUser");
  if (checkoutBtn) {
    checkoutBtn.style.display = loggedUser ? "block" : "none";
  }
}

// Inicializar visibilidad del botón
updateCheckoutButtonVisibility();

// FUNCIONALIDAD DE AUTENTICACIÓN
// Inicializar usuarios en localStorage si no existen
function initializeUsers() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }
}

initializeUsers();

const defaultAdmin = {
  email: "admin@mait.com",
  password: "admin123",
  name: "Administrador",
  role: "admin",
  phone: "",
  address: "",
  photo: "",
  purchases: []
};

let usersList = JSON.parse(localStorage.getItem("users")) || [];

if (!usersList.find(u => u.email === defaultAdmin.email)) {
  usersList.push(defaultAdmin);
  localStorage.setItem("users", JSON.stringify(usersList));
}

// Modales
const registerModal = document.getElementById("registerModal");
const loginModal = document.getElementById("loginModal");
const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");
const closeModals = document.querySelectorAll(".closeModal");

// Abrir formularios
if (btnLogin) {
  btnLogin.addEventListener("click", () => {
    loginModal.style.display = "flex";
  });
}

if (btnRegister) {
  btnRegister.addEventListener("click", () => {
    registerModal.style.display = "flex";
  });
}

// Cerrar modales
closeModals.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.target.closest(".modal").style.display = "none";
  });
});

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (e) => {
  if (e.target.id === "registerModal") registerModal.style.display = "none";
  if (e.target.id === "loginModal") loginModal.style.display = "none";
});

// Registro
const registerBtn = document.getElementById("registerBtn");
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const name = document.getElementById("regName").value.trim();

    if (!email || !password || !name) {
      alert("Por favor completa todos los campos");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users"));
    if (users.find(u => u.email === email)) {
      alert("Este correo ya está registrado");
      return;
    }

    users.push({ email, password, name, phone: "", address: "", photo: "", purchases: [] });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Cuenta creada exitosamente. Ahora puedes iniciar sesión.");
    registerModal.style.display = "none";
    document.getElementById("regEmail").value = "";
    document.getElementById("regPassword").value = "";
    document.getElementById("regName").value = "";
  });
}

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("logEmail").value.trim();
    const password = document.getElementById("logPassword").value.trim();

    if (!email || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      alert("Correo o contraseña incorrectos");
      return;
    }

    localStorage.setItem("loggedUser", email);
    alert("¡Bienvenido " + user.name + "!");

    // Cerrar modal y limpiar inputs
    loginModal.style.display = "none";
    document.getElementById("logEmail").value = "";
    document.getElementById("logPassword").value = "";

    // Mostrar botón de checkout
    updateCheckoutButtonVisibility();

    // Cargar carrito
    loadCart();
    renderCart();

    // Redirección según rol
    if (user.role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "perfil.html";
    }
  });
}

// Inicializar
loadCart();
if (productsGrid) renderProducts();
renderCart();

const btnCamisetas = document.getElementById("openCamisetasBtn");
const btnZapatos = document.getElementById("openZapatosBtn");
const btnPantalones = document.getElementById("openPantalonesBtn");

if (btnCamisetas) {
  btnCamisetas.addEventListener("click", () => {
    window.location.href = "camisetas.html";
  });
}

if (btnZapatos) {
  btnZapatos.addEventListener("click", () => {
    window.location.href = "zapatos.html";
  });
}

if (btnPantalones) {
  btnPantalones.addEventListener("click", () => {
    window.location.href = "pantalones.html";
  });
}
