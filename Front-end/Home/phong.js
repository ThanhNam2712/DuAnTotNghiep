document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  // Tạo Header
  function createHeader() {
    const header = document.createElement("header");

    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";
    const logoLink = document.createElement("a");
    logoLink.href = "Home.html";
    const logoImg = document.createElement("img");
    logoImg.src = "ảnh/logo.png";
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
          { name: "Sơ mi", link: "somi.html" }, // Thay đổi ở đây
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

    const headerIconsDiv = document.createElement("div");
    headerIconsDiv.className = "header-icons";

    const searchLink = document.createElement("a");
    searchLink.href = "timkiem.html";
    const searchImg = document.createElement("img");
    searchImg.src = "ảnh/searcher.jpg";
    searchImg.alt = "Search";
    searchLink.appendChild(searchImg);

    const userLink = document.createElement("a");
    userLink.href = "../Register/register.html";
    const userImg = document.createElement("img");
    userImg.src = "ảnh/user.jpg";
    userImg.alt = "User";
    userLink.appendChild(userImg);

    const cartLink = document.createElement("a");
    cartLink.href = "#";
    const cartImg = document.createElement("img");
    cartImg.src = "ảnh/cart.png";
    cartImg.alt = "Cart";
    cartLink.appendChild(cartImg);

    headerIconsDiv.appendChild(searchLink);
    headerIconsDiv.appendChild(userLink);
    headerIconsDiv.appendChild(cartLink);
    header.appendChild(headerIconsDiv);

    body.appendChild(header);
  }

  // Tạo Banner
  function createBanner() {
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
      "ảnh/banner/banner6.jpg",
      "ảnh/banner/banner7.jpg",
      "ảnh/banner/banner8.jpg",
      "ảnh/banner/banner9.jpg",
      "ảnh/banner/banner10.jpg",
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

    const bannerControls = document.createElement("div");
    bannerControls.className = "banner-controls";

    const prevButton = document.createElement("button");
    prevButton.className = "prev";
    prevButton.textContent = "❮";
    prevButton.onclick = () => changeSlide(-1);

    const nextButton = document.createElement("button");
    nextButton.className = "next";
    nextButton.textContent = "❯";
    nextButton.onclick = () => changeSlide(1);

    bannerControls.appendChild(prevButton);
    bannerControls.appendChild(nextButton);

    section.appendChild(bannerContainer);
    section.appendChild(bannerControls);

    body.appendChild(section);
  }

  // Tạo phần sản phẩm mới
  function createNewProducts() {
    const newProductsSection = document.createElement("section");
    newProductsSection.className = "new-products";

    const title = document.createElement("h3");
    title.textContent = "Áo Phông";
    const hr = document.createElement("hr");
    newProductsSection.appendChild(title);
    newProductsSection.appendChild(hr);

    const productContainer = document.createElement("div");
    productContainer.className = "product-container";

    const products = [
      {
        img: "ảnh/p1.jpg",
        name: "Áo phông DSQ trắng ngực họa tiết Love",
        price: 500000,
        rating: "★★★★★",
      },
      {
        img: "ảnh/p2.jpg",
        name: "Áo phông DSQ đen ngực họa tiết Love",
        price: 490000,
        rating: "★★★★★",
      },
      {
        img: "ảnh/p3.jpg",
        name: "Áo phông DSQ trắng ngực chữ đen LikeAuth",
        price: 399000,
        rating: "★★★★★",
      },
      {
        img: "ảnh/p4.jpg",
        name: "Áo phông DSQ đen ngực chữ trắng LikeAuth",
        price: 399000,
        rating: "★★★★★",
      },
      {
        img: "ảnh/p5.jpg",
        name: "Áo phông Balen trắng chữ đen LikeAuth",
        price: 450000,
        rating: "★★★★★",
      },
    ];

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      const productImage = document.createElement("div");
      productImage.className = "product-image";
      const img = document.createElement("img");
      img.src = product.img;
      img.alt = product.name;

      const iconsDiv = document.createElement("div");
      iconsDiv.className = "icons";

      const cartButton = document.createElement("button");
      cartButton.className = "cart-icon";
      cartButton.onclick = () => addToCart(product.name, product.price);
      const cartImg = document.createElement("img");
      cartImg.src = "ảnh/cart.png";
      cartImg.alt = "Giỏ hàng";
      cartImg.width = 20;
      cartImg.height = 20;
      cartButton.appendChild(cartImg);
      iconsDiv.appendChild(cartButton);

      const viewButton = document.createElement("button");
      viewButton.className = "view-icon";
      viewButton.onclick = () => viewProduct(product.name);
      const viewImg = document.createElement("img");
      viewImg.src = "ảnh/view.png";
      viewImg.alt = "Xem sản phẩm";
      viewImg.width = 20;
      viewImg.height = 20;
      viewButton.appendChild(viewImg);
      iconsDiv.appendChild(viewButton);

      productImage.appendChild(img);
      productImage.appendChild(iconsDiv);
      productCard.appendChild(productImage);

      const productDetails = document.createElement("div");
      productDetails.className = "product-details";
      const productName = document.createElement("h4");
      productName.textContent = product.name;
      const productRating = document.createElement("div");
      productRating.className = "rating";
      productRating.textContent = product.rating;
      const productPrice = document.createElement("p");
      productPrice.className = "price";
      productPrice.textContent = `${product.price.toLocaleString("vi-VN")}₫`;

      productDetails.appendChild(productName);
      productDetails.appendChild(productRating);
      productDetails.appendChild(productPrice);
      productCard.appendChild(productDetails);

      productContainer.appendChild(productCard);
    });

    newProductsSection.appendChild(productContainer);
    body.appendChild(newProductsSection);
  }

  // Tạo Footer
  function createFooter() {
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
      "Shop AE Boutique chuyên buôn, sỉ, lẻ, order hàng thời trang, giá tốt nhất thị trường. Nơi mua sắm mới nhất cho những khách hàng yêu quý.";
    shopInfo.appendChild(h5Shop);
    shopInfo.appendChild(h6Shop);

    const socialIcons = document.createElement("div");
    socialIcons.className = "social-icons";
    const fbLink = document.createElement("a");
    fbLink.href = "https://www.facebook.com/aeboutique69";
    const fbImg = document.createElement("img");
    fbImg.src = "ảnh/fb.png";
    fbImg.alt = "Facebook";
    fbLink.appendChild(fbImg);

    const ytLink = document.createElement("a");
    ytLink.href = "#";
    const ytImg = document.createElement("img");
    ytImg.src = "ảnh/youtube.png";
    ytImg.alt = "YouTube";
    ytLink.appendChild(ytImg);

    socialIcons.appendChild(fbLink);
    socialIcons.appendChild(ytLink);
    shopInfo.appendChild(socialIcons);

    const quickLinks = document.createElement("div");
    quickLinks.className = "footer-item";
    const h5Links = document.createElement("h5");
    h5Links.textContent = "Liên kết nhanh";
    quickLinks.appendChild(h5Links);
    const ulLinks = document.createElement("ul");
    const linkItems = [
      "Hướng dẫn đặt hàng",
      "Hướng dẫn thanh toán",
      "Chính sách đổi trả hàng",
      "Liên hệ với chúng tôi",
    ];
    linkItems.forEach((linkText) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = linkText;
      li.appendChild(a);
      ulLinks.appendChild(li);
    });
    quickLinks.appendChild(ulLinks);

    const hotlineDiv = document.createElement("div");
    hotlineDiv.className = "footer-item";
    const h5Hotline = document.createElement("h5");
    h5Hotline.textContent = "Hotline hỗ trợ 24/7";
    const hotline = document.createElement("div");
    hotline.className = "hotline";
    const hotlineSpan = document.createElement("span");
    hotlineSpan.textContent = "0975986096";
    hotline.appendChild(hotlineSpan);

    const h5Payment = document.createElement("h5");
    h5Payment.textContent = "Chấp nhận thanh toán";
    const paymentIcons = document.createElement("div");
    paymentIcons.className = "payment-icons";
    const momoImg = document.createElement("img");
    momoImg.src = "ảnh/momo.png";
    momoImg.alt = "Momo";
    paymentIcons.appendChild(momoImg);

    hotlineDiv.appendChild(h5Hotline);
    hotlineDiv.appendChild(hotline);
    hotlineDiv.appendChild(h5Payment);
    hotlineDiv.appendChild(paymentIcons);

    footerContainer.appendChild(shopInfo);
    footerContainer.appendChild(quickLinks);
    footerContainer.appendChild(hotlineDiv);

    footer.appendChild(footerContainer);
    body.appendChild(footer);
  }

  // Hàm khởi tạo trang
  function init() {
    createHeader();
    createBanner();
    createNewProducts();
    createFooter();
  }

  init();

  // Các hàm phụ trợ
  function changeSlide(direction) {
    // Logic thay đổi slide (cần được hiện thực hóa)
  }

  function addToCart(productName, price) {
    alert(
      `${productName} đã được thêm vào giỏ hàng với giá ${price.toLocaleString(
        "vi-VN"
      )}₫`
    );
  }

  function viewProduct(productName) {
    alert(`Xem sản phẩm: ${productName}`);
  }
});
