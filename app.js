// Datos de ejemplo de productos
const products = [
  { id: 1, name: "Camiseta básica", description: "Camiseta unisex de algodón orgánico.", price: 19.99 },
  { id: 2, name: "Sudadera con capucha", description: "Sudadera cómoda para el día a día.", price: 39.99 },
  { id: 3, name: "Taza personalizada", description: "Taza de cerámica lista para tu diseño.", price: 12.5 },
  { id: 4, name: "Mochila urbana", description: "Mochila resistente con varios compartimentos.", price: 49.0 }
];

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

// Cargar carrito desde localStorage
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

// Guardar carrito en localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


// Renderizar productos
function renderProducts() {
  if (!productsGrid) return;
  
  productsGrid.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div>
        <div class="product-image">Imagen del producto</div>
        <h4 class="product-name">${product.name}</h4>
        <p class="product-description">${product.description}</p>
      </div>
      <div class="product-footer">
        <span class="product-price">${product.price.toFixed(2)} €</span>
        <button data-id="${product.id}">Añadir</button>
      </div>
    `;
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
if (productsGrid) {
  productsGrid.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = Number(e.target.getAttribute("data-id"));
      addToCart(id);
    }
  });
}

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
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    alert("Aquí iría el proceso de pago real (Stripe, PayPal, etc.).");
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

// Cargar carrito
loadCart();
renderCart();

// Redirección según rol (IMPORTANTE: nada debe ir debajo)
if (user.role === "admin") {
    window.location.href = "admin.html";
} else {
    window.location.href = "perfil.html";
}

// Inicializar
loadCart();
if (productsGrid) renderProducts();
renderCart();
// Botones de navegación a páginas de categorías
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

// Abrir modales
document.getElementById("btnLogin").onclick = () => {
  document.getElementById("loginModal").style.display = "block";
};

document.getElementById("btnRegister").onclick = () => {
  document.getElementById("registerModal").style.display = "block";
};

// Cerrar modales
document.querySelectorAll(".closeModal").forEach(btn => {
  btn.onclick = () => {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("registerModal").style.display = "none";
  };
});

// REGISTRO
document.getElementById("registerBtn").onclick = () => {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (!email || !password) {
    alert("Completa todos los campos");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.email === email)) {
    alert("Este correo ya está registrado");
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Usuario registrado correctamente");
  document.getElementById("registerModal").style.display = "none";
};

// LOGIN
document.getElementById("loginBtn").onclick = () => {
  const email = document.getElementById("logEmail").value;
  const password = document.getElementById("logPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Correo o contraseña incorrectos");
    return;
  }

  localStorage.setItem("loggedUser", email);
  alert("Sesión iniciada");
  window.location.href = "perfil.html";
  updateUserUI();
};

// Mostrar usuario logueado
function updateUserUI() {
  const user = localStorage.getItem("loggedUser");
  if (user) {
    document.querySelector(".auth-buttons").innerHTML = `
      <span>Hola, ${user}</span>
      <button id="logoutBtn">Cerrar sesión</button>
    `;

    document.getElementById("logoutBtn").onclick = () => {
      localStorage.removeItem("loggedUser");
      location.reload();
    };
  }
}

updateUserUI();

function updateUserUI() {
  const user = localStorage.getItem("loggedUser");
  if (user) {
    document.querySelector(".auth-buttons").innerHTML = `
      <a href="perfil.html">Mi Perfil</a>
      <button id="logoutBtn">Cerrar sesión</button>
    `;

    document.getElementById("logoutBtn").onclick = () => {
      localStorage.removeItem("loggedUser");
      location.reload();
    };
  }
}

// Abrir modales
document.getElementById("btnLogin").onclick = () => {
  document.getElementById("loginModal").style.display = "block";
};

document.getElementById("btnRegister").onclick = () => {
  document.getElementById("registerModal").style.display = "block";
};

// Cerrar modales
document.querySelectorAll(".closeModal").forEach(btn => {
  btn.onclick = () => {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("registerModal").style.display = "none";
  };
});

// REGISTRO
document.getElementById("registerBtn").onclick = () => {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const name = document.getElementById("regName").value;

  if (!email || !password || !name) {
    alert("Completa todos los campos");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.email === email)) {
    alert("Este correo ya está registrado");
    return;
  }

  users.push({
    email,
    password,
    name,
    phone: "",
    address: "",
    photo: "",
    purchases: []
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Usuario registrado correctamente");
  window.location.href = "perfil.html";
};

// LOGIN
document.getElementById("loginBtn").onclick = () => {
  const email = document.getElementById("logEmail").value;
  const password = document.getElementById("logPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Correo o contraseña incorrectos");
    return;
  }

  localStorage.setItem("loggedUser", email);
  window.location.href = "perfil.html";
};

// Mostrar usuario logueado en el header
function updateUserUI() {
  const user = localStorage.getItem("loggedUser");
  if (user) {
    document.querySelector(".auth-buttons").innerHTML = `
      <a href="perfil.html">Mi Perfil</a>
      <button id="logoutBtn">Cerrar sesión</button>
    `;

    document.getElementById("logoutBtn").onclick = () => {
      localStorage.removeItem("loggedUser");
      location.reload();
    };
  }
}

updateUserUI();

document.getElementById("checkoutBtn").onclick = () => {
  const email = localStorage.getItem("loggedUser");
  if (!email) {
    alert("Debes iniciar sesión para comprar");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(u => u.email === email);

  user.purchases.push("Compra realizada el " + new Date().toLocaleString());

  localStorage.setItem("users", JSON.stringify(users));

  alert("Compra finalizada");
};
