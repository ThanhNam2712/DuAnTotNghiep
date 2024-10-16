const products = [
  "Áo phông",
  "Sản phẩm B",
  "Sản phẩm C",
  "Sản phẩm D",
  "Sản phẩm E",
];

document.getElementById("searchButton").addEventListener("click", function () {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Xóa kết quả cũ

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchInput)
  );

  if (filteredProducts.length > 0) {
    filteredProducts.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product");
      productItem.textContent = product;
      productList.appendChild(productItem);
    });
  } else {
    productList.innerHTML = "<p>Không tìm thấy sản phẩm nào.</p>";
  }
});
