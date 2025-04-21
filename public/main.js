import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { ref, set, get, push, remove, update } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

// 🔹 Cek apakah user sudah login
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User Logged In:", user.email);
        document.getElementById("user-email").innerText = `Welcome, ${user.email}`;
        loadCart(user.uid);
        loadClothes();
    } else {
        console.log("User Logged Out");
        document.getElementById("user-email").innerText = "Please Log In";
    }
});

// 🔹 Fungsi Login
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login Berhasil!");
        })
        .catch((error) => {
            alert("Login Gagal! " + error.message);
        });
}

// 🔹 Fungsi Logout
function logout() {
    signOut(auth)
        .then(() => {
            alert("Logout Berhasil!");
        })
        .catch((error) => {
            alert("Logout Gagal! " + error.message);
        });
}

// 🔹 Tambah Item ke Cart (CREATE)
function addToCart(userId, productId, productName, price) {
    const cartRef = ref(db, `carts/${userId}/${productId}`);

    get(cartRef).then((snapshot) => {
        if (snapshot.exists()) {
            // Jika produk sudah ada, update jumlahnya
            const existingItem = snapshot.val();
            updateCartQuantity(userId, productId, existingItem.quantity + 1);
        } else {
            // Jika belum ada, tambahkan produk baru
            set(cartRef, {
                productId,
                productName,
                price,
                quantity: 1
            }).then(() => {
                alert(`${productName} added to cart!`);
                loadCart(userId);
            }).catch((error) => {
                console.error("Error adding to cart:", error);
            });
        }
    });
}

// 🔹 Load Cart (READ)
function loadCart(userId) {
    const cartRef = ref(db, `carts/${userId}`);
    get(cartRef).then((snapshot) => {
        const cartData = snapshot.val();
        const cartContainer = document.getElementById("cart-container");
        cartContainer.innerHTML = "";

        if (cartData) {
            Object.keys(cartData).forEach((key) => {
                const item = cartData[key];
                cartContainer.innerHTML += `
                    <div>
                        <p>${item.productName} - $${item.price} x ${item.quantity}</p>
                        <button onclick="updateCartQuantity('${userId}', '${key}', ${item.quantity - 1})">-</button>
                        <button onclick="updateCartQuantity('${userId}', '${key}', ${item.quantity + 1})">+</button>
                        <button onclick="removeFromCart('${userId}', '${key}')">Remove</button>
                    </div>
                `;
            });
        } else {
            cartContainer.innerHTML = "<p>No items in cart</p>";
        }
    });
}

// 🔹 Update Jumlah Barang di Cart (UPDATE)
function updateCartQuantity(userId, productId, newQuantity) {
    const cartItemRef = ref(db, `carts/${userId}/${productId}`);

    if (newQuantity > 0) {
        update(cartItemRef, { quantity: newQuantity }).then(() => {
            loadCart(userId);
        }).catch((error) => {
            console.error("Error updating cart:", error);
        });
    } else {
        removeFromCart(userId, productId);
    }
}

// 🔹 Hapus Item dari Cart (DELETE)
function removeFromCart(userId, productId) {
    const cartItemRef = ref(db, `carts/${userId}/${productId}`);
    remove(cartItemRef).then(() => {
        alert("Item removed from cart!");
        loadCart(userId);
    }).catch((error) => {
        console.error("Error removing item:", error);
    });
}

// 🔹 Load Clothes dari Database
function loadClothes() {
    const clothesRef = ref(db, "clothes");
    get(clothesRef).then((snapshot) => {
        const clothesData = snapshot.val();
        const clothesContainer = document.getElementById("clothes-container");
        clothesContainer.innerHTML = "";

        if (clothesData) {
            Object.keys(clothesData).forEach((key) => {
                const item = clothesData[key];
                clothesContainer.innerHTML += `
                    <div>
                        <h3>${item.name}</h3>
                        <p>Price: $${item.price}</p>
                        <button onclick="addToCart(auth.currentUser.uid, '${key}', '${item.name}', ${item.price})">
                            Add to Cart
                        </button>
                    </div>
                `;
            });
        } else {
            clothesContainer.innerHTML = "<p>No clothes available</p>";
        }
    });
}

// 🔹 Event Listeners
document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("logout-btn").addEventListener("click", logout);
