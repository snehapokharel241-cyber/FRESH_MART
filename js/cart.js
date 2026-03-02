// Shared Cart Logic - Fresh Mart
// Uses localStorage so cart persists across all pages

function getCart() {
    return JSON.parse(localStorage.getItem('freshMartCart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('freshMartCart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(name, price) {
    const cart = getCart();
    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    saveCart(cart);
    showToast(`${name} added to cart!`);
}

function removeFromCart(name) {
    let cart = getCart().filter(i => i.name !== name);
    saveCart(cart);
}

function clearCart() {
    saveCart([]);
}

function getCartTotal() {
    return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
    return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartUI() {
    const count = getCartCount();
    const total = getCartTotal();
    const countEl = document.getElementById('cart-count');
    const totalEl = document.getElementById('cart-total');
    if (countEl) countEl.innerText = count;
    if (totalEl) totalEl.innerText = total;
}

function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Please add items to your cart first!');
        return;
    }
    const itemList = cart.map(i => `${i.name} x${i.qty}`).join(', ');
    const total = getCartTotal();
    const finalAmount = total + 150;
    const message = `*Fresh Mart Order*%0A-----------------------%0A*Items:* ${itemList}%0A*Subtotal:* Rs. ${total}%0A*Delivery:* Rs. 150%0A*Grand Total:* Rs. ${finalAmount}%0A-----------------------%0A*Address:* Shankernagar, Rupandehi`;
    window.open(`https://wa.me/9779847076207?text=${message}`, '_blank');
}

function showToast(msg) {
    let toast = document.getElementById('fm-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'fm-toast';
        toast.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:#27ae60;color:white;padding:12px 24px;border-radius:30px;font-weight:bold;z-index:9999;transition:opacity 0.5s;font-family:Segoe UI,sans-serif;box-shadow:0 4px 15px rgba(0,0,0,0.2);';
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.opacity = '1';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.style.opacity = '0', 2000);
}

// Init cart display on page load
window.addEventListener('DOMContentLoaded', updateCartUI);
