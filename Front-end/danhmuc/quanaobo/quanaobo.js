document.addEventListener("DOMContentLoaded", function () {
  // Tạo phần Header
  const header = document.createElement("header");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");
  const logoLink = document.createElement("a");
  logoLink.href = "../../Home/Home.html";
  const logoImg = document.createElement("img");
  logoImg.src = "../../anh/logo.png";
  logoImg.alt = "Logo";
  logoLink.appendChild(logoImg);
  logoDiv.appendChild(logoLink);

  const nav = document.createElement("nav");
  const navList = document.createElement("ul");

  const navItems = [
    { href: "../../Home/Home.html", text: "Trang chủ" },
    { href: "../../gioithieu/gioithieu.html", text: "Giới thiệu" },
    { href: "../../lienhe/lienhe.html", text: "Liên hệ" },
  ];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    navList.appendChild(li);
  });

  // Tạo dropdown cho bộ sưu tập
  const dropdown = document.createElement("li");
  dropdown.classList.add("dropdown");
  const dropdownLink = document.createElement("a");
  dropdownLink.href = "#";
  dropdownLink.textContent = "Bộ sưu tập";
  dropdown.appendChild(dropdownLink);

  const dropdownMenu = document.createElement("ul");
  dropdownMenu.classList.add("dropdown-menu");

  const dropdownItems = [
    { href: "../polo/polo.html", text: "Áo polo" },
    { href: "../phong/phong.html", text: "Áo phông" },
    { href: "quanaobo.html", text: "Quần áo bộ" },
    { href: "../somi/somi.html", text: "Áo sơ mi" },
  ];

  dropdownItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    dropdownMenu.appendChild(li);
  });

  dropdown.appendChild(dropdownMenu);
  navList.appendChild(dropdown);

  nav.appendChild(navList);

  const headerIconsDiv = document.createElement("div");
  headerIconsDiv.classList.add("header-icons");

  const searchIcon = createIconLink(
    "../../Home/timkiem.html",
    "../../anh/searcher.jpg",
    "Search"
  );
  const userIcon = createIconLink(
    "../../Register/register.html",
    "../../anh/user.jpg",
    "User"
  );
  const cartIcon = createIconLink("#", "../../anh/cart.png", "Cart");

  headerIconsDiv.appendChild(searchIcon);
  headerIconsDiv.appendChild(userIcon);
  headerIconsDiv.appendChild(cartIcon);

  header.appendChild(logoDiv);
  header.appendChild(nav);
  header.appendChild(headerIconsDiv);

  // Thêm header vào body
  document.body.appendChild(header);

  // Tạo phần banner
  const bannerSection = document.createElement("section");
  bannerSection.classList.add("banner");

  const bannerContainer = document.createElement("div");
  bannerContainer.classList.add("banner-container");

  const bannerImages = [
    "../../../anh/banner/banner1.jpg",
    "../../..//anh/banner/banner2.jpg",
    "../../..//anh/banner/banner3.jpg",
    "../../..//anh/banner/banner4.jpg",
    "../../..//anh/banner/banner5.jpg",
    "../../..//anh/banner/banner6.jpg",
    "../../..//anh/banner/banner7.jpg",
    "../../..//anh/banner/banner8.jpg",
    "../../..//anh/banner/banner9.jpg",
    "../../..//anh/banner/banner10.jpg",
  ];

  bannerImages.forEach((src) => {
    const bannerSlide = document.createElement("div");
    bannerSlide.classList.add("banner-slide");
    const img = document.createElement("img");
    img.src = `../anh/banner/${src}`;
    img.alt = `Banner ${src}`;
    bannerSlide.appendChild(img);
    bannerContainer.appendChild(bannerSlide);
  });

  const bannerControls = document.createElement("div");
  bannerControls.classList.add("banner-controls");

  const prevButton = document.createElement("button");
  prevButton.classList.add("prev");
  prevButton.innerHTML = "&#10094;";
  prevButton.onclick = () => changeSlide(-1);

  const nextButton = document.createElement("button");
  nextButton.classList.add("next");
  nextButton.innerHTML = "&#10095;";
  nextButton.onclick = () => changeSlide(1);

  bannerControls.appendChild(prevButton);
  bannerControls.appendChild(nextButton);

  bannerSection.appendChild(bannerContainer);
  bannerSection.appendChild(bannerControls);

  // Thêm banner vào body
  document.body.appendChild(bannerSection);

  // Tạo phần sản phẩm mới
  const newProductsSection = document.createElement("section");
  newProductsSection.classList.add("new-products");

  const productTitle = document.createElement("h3");
  productTitle.textContent = "Quần Áo Bộ";

  const productHr = document.createElement("hr");

  const productContainer = document.createElement("div");
  productContainer.classList.add("product-container");

  const productImages = [
    {
      src: "../../anh/b1.jpg",
      name: "Bộ hè Jordan trắng viền đỏ",
      price: 850000,
    },
    {
      src: "../../anh/b2.jpg",
      name: "Bộ hè Jordan đen viền đỏ",
      price: 850000,
    },
    {
      src: "../../anh/b3.jpg",
      name: "Bộ hè Hydro xanh nõn chuối chấm bi",
      price: 830000,
    },
    {
      src: "../../anh/b4.jpg",
      name: "Bộ hè Hydro tia sét xanh chấm bi",
      price: 830000,
    },
  ];

  productImages.forEach((product, index) => {
    const productImageDiv = document.createElement("div");
    productImageDiv.classList.add("product-image");
    productImageDiv.id = `product-image-${index + 1}`;

    const img = document.createElement("img");
    img.src = `../anh/${product.src}`;
    img.alt = `Hình sản phẩm ${index + 1}`;
    productImageDiv.appendChild(img);

    // Tạo div chứa tên và giá sản phẩm
    const productInfoDiv = document.createElement("div");
    productInfoDiv.classList.add("product-info");

    const productName = document.createElement("p");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `${product.price.toLocaleString()} đ`;

    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);
    productImageDiv.appendChild(productInfoDiv);

    // Tạo div chứa icon giỏ hàng
    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");

    const cartButton = document.createElement("button");
    cartButton.classList.add("cart-icon");
    cartButton.onclick = () => addToCart(product.name, product.price);

    const cartImg = document.createElement("img");
    cartImg.src = "../../anh/cart.png";
    cartImg.alt = "Giỏ hàng";
    cartImg.width = 20;
    cartImg.height = 20;

    cartButton.appendChild(cartImg);
    iconsDiv.appendChild(cartButton);
    productImageDiv.appendChild(iconsDiv);

    productContainer.appendChild(productImageDiv);
  });

  newProductsSection.appendChild(productTitle);
  newProductsSection.appendChild(productHr);
  newProductsSection.appendChild(productContainer);

  // Thêm phần sản phẩm mới vào body
  document.body.appendChild(newProductsSection);

  // Tạo phần footer
  const footer = document.createElement("footer");

  const footerHr = document.createElement("hr");
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer-container");

  const footerItems = [
    {
      title: "Shop AE Boutique",
      content:
        "Shop AE Boutique chuyên buôn, sỉ, lẻ, order hàng thời trang, giá tốt nhất thị trường. Nơi mua sắm mới nhất cho những khách hàng yêu quý.",
      socialIcons: [
        {
          href: "https://www.facebook.com/aeboutique69",
          src: "../../anh/fb.png",
          alt: "Facebook",
        },
        { href: "#", src: "../../anh/youtube.png", alt: "YouTube" },
      ],
    },
    {
      title: "Liên kết nhanh",
      links: [
        "Hướng dẫn đặt hàng",
        "Hướng dẫn thanh toán",
        "Chính sách đổi trả hàng",
        "Liên hệ với chúng tôi",
      ],
    },
    {
      title: "Chấp nhận thanh toán",

      paymentIcons: [{ src: "../../anh/momo.png", alt: "Momo" }],
    },
  ];

  // Xử lý từng phần tử footer
  footerItems.forEach((item) => {
    const footerItemDiv = document.createElement("div");
    footerItemDiv.classList.add("footer-item");

    const title = document.createElement("h5");
    title.textContent = item.title;
    footerItemDiv.appendChild(title);

    if (item.content) {
      const content = document.createElement("h6");
      content.textContent = item.content;
      footerItemDiv.appendChild(content);
    }

    if (item.socialIcons) {
      const socialIconsDiv = document.createElement("div");
      socialIconsDiv.classList.add("social-icons");

      item.socialIcons.forEach((icon) => {
        const a = document.createElement("a");
        a.href = icon.href;
        const img = document.createElement("img");
        img.src = icon.src;
        img.alt = icon.alt;
        a.appendChild(img);
        socialIconsDiv.appendChild(a);
      });

      footerItemDiv.appendChild(socialIconsDiv);
    }

    if (item.links) {
      const ul = document.createElement("ul");
      item.links.forEach((linkText) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = linkText;
        li.appendChild(a);
        ul.appendChild(li);
      });
      footerItemDiv.appendChild(ul);
    }

    if (item.paymentIcons) {
      const paymentIconsDiv = document.createElement("div");
      paymentIconsDiv.classList.add("payment-icons");

      item.paymentIcons.forEach((icon) => {
        const img = document.createElement("img");
        img.src = icon.src;
        img.alt = icon.alt;
        paymentIconsDiv.appendChild(img);
      });

      footerItemDiv.appendChild(paymentIconsDiv);
    }

    footerContainer.appendChild(footerItemDiv);
  });

  footer.appendChild(footerHr);
  footer.appendChild(footerContainer);

  // Thêm footer vào body
  document.body.appendChild(footer);
});

// Hàm tạo icon
function createIconLink(href, src, alt) {
  const a = document.createElement("a");
  a.href = href;
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  a.appendChild(img);
  return a;
}

// Hàm chuyển slide
function changeSlide(direction) {
  console.log("Chuyển slide theo hướng:", direction);
}

// Hàm thêm vào giỏ hàng
function addToCart(productName, price) {
  console.log(
    `Sản phẩm: ${productName}, Giá: ${price} đã được thêm vào giỏ hàng`
  );
}
