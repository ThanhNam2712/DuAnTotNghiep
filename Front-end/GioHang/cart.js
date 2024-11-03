fetch("path/to/db.json")
  .then((response) => response.json())
  .then((data) => {
    const products = data.products;
    const productContainer = document.getElementById("product-container");

    products.forEach((product) => {
      const productElement = `
        <tr>
          <td class="product-info">
            <img src="${product.image}" alt="${product.name}">
            <span class="product-name">${product.name}</span>
          </td>
          <td>${product.price}</td>
          <td class="quantity-wrapper">
            <button class="quantity-btn">-</button>
            <input type="text" class="quantity-input" value="${product.quantity}" />
            <button class="quantity-btn">+</button>
          </td>
          <td>${product.price}</td> <!-- Ví dụ đơn giản, bạn có thể tính tổng ở đây -->
        </tr>
      `;
      productContainer.innerHTML += productElement;
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
