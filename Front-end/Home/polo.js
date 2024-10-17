// Hàm tải dữ liệu JSON từ db.json
async function loadProducts() {
  try {
    const response = await fetch("db.json"); // Đường dẫn đến file JSON
    const data = await response.json();
    return data.products; // Lấy danh sách sản phẩm
  } catch (error) {
    console.error("Lỗi khi tải sản phẩm:", error);
    return [];
  }
}

// Tạo Header
function createHeader() {
  const body = document.querySelector("body");
  const header = document.createElement("header");

  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  const logoLink = document.createElement("a");
  logoLink.href = "Home.html";
  const logoImg = document.createElement("img");
  logoImg.src = "ảnh/logo.png"; // Thay bằng đường dẫn ảnh logo
  logoImg.alt = "Logo";
  logoLink.appendChild(logoImg);
  logoDiv.appendChild(logoLink);
  header.appendChild(logoDiv);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const menuItems = [
    { name: "Trang chủ", link: "Home.html" },
    { name: "Giới thiệu", link: "gioithieu.html" },
    { name: "Liên hệ", link: "lienhe.html" },
    { name: "Bộ sưu tập", link: "#" },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.name;
    li.appendChild(a);

    if (item.name === "Bộ sưu tập") {
      const dropdownMenu = document.createElement("ul");
      dropdownMenu.className = "dropdown-menu";

      const dropdownItems = [
        { name: "Áo polo", link: "polo.html" },
        { name: "Áo phông", link: "phong.html" },
        { name: "Quần áo bộ", link: "quanaobo.html" },
        { name: "Sơ mi", link: "somi.html" },
      ];

      dropdownItems.forEach((dropdownItem) => {
        const dropdownLi = document.createElement("li");
        const dropdownA = document.createElement("a");
        dropdownA.href = dropdownItem.link;
        dropdownA.textContent = dropdownItem.name;
        dropdownLi.appendChild(dropdownA);
        dropdownMenu.appendChild(dropdownLi);
      });

      li.className = "dropdown";
      li.appendChild(dropdownMenu);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);
  header.appendChild(nav);
  body.appendChild(header);
}

// Tạo Banner
function createBanner() {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  section.className = "banner";

  const bannerContainer = document.createElement("div");
  bannerContainer.className = "banner-container";

  const bannerImages = [
    "ảnh/banner/banner1.jpg",
    "ảnh/banner/banner2.jpg",
    "ảnh/banner/banner3.jpg",
    "ảnh/banner/banner4.jpg",
    "ảnh/banner/banner5.jpg",
  ];

  bannerImages.forEach((src) => {
    const bannerSlide = document.createElement("div");
    bannerSlide.className = "banner-slide";
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Banner ${src}`;
    bannerSlide.appendChild(img);
    bannerContainer.appendChild(bannerSlide);
  });

  section.appendChild(bannerContainer);
  body.appendChild(section);
}

// Tạo Footer
function createFooter() {
  const body = document.querySelector("body");
  const footer = document.createElement("footer");
  const hr = document.createElement("hr");
  footer.appendChild(hr);

  const footerContainer = document.createElement("div");
  footerContainer.className = "footer-container";

  const shopInfo = document.createElement("div");
  shopInfo.className = "footer-item";
  const h5Shop = document.createElement("h5");
  h5Shop.textContent = "Shop AE Boutique";
  const h6Shop = document.createElement("h6");
  h6Shop.textContent =
    "Shop AE Boutique chuyên buôn, sỉ, lẻ, order hàng thời trang, giá tốt nhất thị trường.";
  shopInfo.appendChild(h5Shop);
  shopInfo.appendChild(h6Shop);

  footerContainer.appendChild(shopInfo);
  footer.appendChild(footerContainer);
  body.appendChild(footer);
}

// Tạo phần sản phẩm mới từ JSON
async function createNewProducts() {
  const products = await loadProducts(); // Lấy sản phẩm từ db.json

  const body = document.querySelector("body");
  const newProductsSection = document.createElement("section");
  newProductsSection.className = "new-products";

  const title = document.createElement("h3");
  title.textContent = "Áo Polo";
  const hr = document.createElement("hr");
  newProductsSection.appendChild(title);
  newProductsSection.appendChild(hr);

  const productContainer = document.createElement("div");
  productContainer.className = "product-container";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const productImage = document.createElement("div");
    productImage.className = "product-image";
    const img = document.createElement("img");
    img.src = `ảnh/${product.image}`; // Đường dẫn lấy từ JSON
    img.alt = product.name;

    productImage.appendChild(img);
    productCard.appendChild(productImage);

    const productDetails = document.createElement("div");
    productDetails.className = "product-details";
    const productName = document.createElement("h4");
    productName.textContent = product.name;
    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.textContent = `${parseInt(product.price).toLocaleString(
      "vi-VN"
    )}₫`;

    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);
    productCard.appendChild(productDetails);

    productContainer.appendChild(productCard);
  });

  newProductsSection.appendChild(productContainer);
  body.appendChild(newProductsSection);
}

// Hàm khởi tạo trang
function init() {
  createHeader();
  createBanner();
  createNewProducts();
  createFooter();
}

// Gọi hàm khởi tạo
document.addEventListener("DOMContentLoaded", init);
