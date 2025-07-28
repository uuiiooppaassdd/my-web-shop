// ตัวแปรเก็บตะกร้าสินค้า
let cart = [];
let cartCount = 0;

// ฟังก์ชันเพิ่มสินค้าในตะกร้า
function addToCart(productName) {
  cart.push(productName);
  cartCount++;

  // แจ้งเตือนสินค้าเพิ่มเข้าตะกร้า
  alert(`เพิ่ม ${productName} เข้าตะกร้าแล้ว!`);

  // อัปเดตจำนวนในตะกร้าหากมี UI ตะกร้า
  updateCartDisplay();
}

// (ถ้ามีระบบแสดงจำนวนในตะกร้า)
function updateCartDisplay() {
  const cartBadge = document.getElementById("cart-count");
  if (cartBadge) {
    cartBadge.textContent = cartCount;
  }
}
