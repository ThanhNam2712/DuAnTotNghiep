// Cập nhật số lượng và subtotal
function updateQuantity(action, button) {
  const row = button.closest('tr');
  const quantityInput = row.querySelector('.quantity-input');
  let quantity = parseInt(quantityInput.value);
  const price = parseInt(row.querySelector('.price').getAttribute('data-price'));

  if (action === 'increase') {
    quantity++;
  } else if (action === 'decrease' && quantity > 1) {
    quantity--;
  }

  quantityInput.value = quantity;

  // Cập nhật subtotal
  const subtotal = row.querySelector('.subtotal');
  subtotal.textContent = formatCurrency(price * quantity);

  // Cập nhật tổng tiền
  updateTotal();
}

// Tính toán tổng giỏ hàng
function updateTotal() {
  const rows = document.querySelectorAll('.cart-item');
  let total = 0;

  rows.forEach(row => {
    const subtotal = parseInt(row.querySelector('.subtotal').textContent.replace(/\D/g, ''));
    total += subtotal;
  });

  document.getElementById('total').textContent = formatCurrency(total);
}

// Định dạng tiền tệ
function formatCurrency(value) {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

// Xóa sản phẩm khỏi giỏ hàng
function removeItem(button) {
  const row = button.closest('tr');
  row.remove();

  // Cập nhật lại tổng sau khi xóa sản phẩm
  updateTotal();
}

// Khởi động tổng giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', updateTotal);
