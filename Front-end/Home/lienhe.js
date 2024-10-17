document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  // Tạo header
  function createHeader() {
    const header = document.createElement("header");

    // Logo
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

    // Navigation
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const pages = [
      { name: "Trang chủ", href: "Home.html" },
      { name: "Giới thiệu", href: "gioithieu.html" },
      { name: "Liên hệ", href: "lienhe.html" },
    ];

    pages.forEach((page) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = page.href;
      a.textContent = page.name;
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Dropdown menu
    const dropdownLi = document.createElement("li");
    dropdownLi.className = "dropdown";
    const dropdownLink = document.createElement("a");
    dropdownLink.href = "#";
    dropdownLink.textContent = "Bộ sưu tập";
    dropdownLi.appendChild(dropdownLink);

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
      dropdownA.href = dropdownItem.link; // Sử dụng link từ object
      dropdownA.textContent = dropdownItem.name;
      dropdownLi.appendChild(dropdownA);
      dropdownMenu.appendChild(dropdownLi);
    });

    dropdownLi.appendChild(dropdownMenu);
    ul.appendChild(dropdownLi);

    dropdownLi.appendChild(dropdownMenu);
    ul.appendChild(dropdownLi);

    nav.appendChild(ul);
    header.appendChild(nav);

    // Header icons
    const headerIconsDiv = document.createElement("div");
    headerIconsDiv.className = "header-icons";

    const searchLink = document.createElement("a");
    searchLink.href = "#";
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

  // Tạo banner
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

    section.appendChild(bannerContainer);

    // Controls
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

    section.appendChild(bannerControls);
    body.appendChild(section);
  }

  // Tạo trang liên hệ
  function createContactPage() {
    const h1 = document.createElement("h1");
    h1.textContent = "Trang liên hệ";
    body.appendChild(h1);

    const hr = document.createElement("hr");
    body.appendChild(hr);

    const container = document.createElement("div");
    container.className = "container";

    const mapDiv = document.createElement("div");
    mapDiv.className = "map";

    const iframe = document.createElement("iframe");
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.902052405348!2d105.76590777401322!3d21.03623718600873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aa8bf6e74527%3A0xa7b3d32bc78964a1!2zNzAgQ8O0IERp4buHbiwgUGjGsOG7nW5nIFRoacOqbiBOYW0sIE5hbSBU4buLIEzGsMahbSwgSGFub2k!5e0!3m2!1sen!2s!4v1697747893652!5m2!1sen!2s";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    mapDiv.appendChild(iframe);

    const contactInfoDiv = document.createElement("div");
    contactInfoDiv.className = "contact-info";

    const h2 = document.createElement("h2");
    h2.textContent = "Liên hệ với chúng tôi";
    contactInfoDiv.appendChild(h2);

    const address = document.createElement("p");
    address.innerHTML =
      "<strong>Địa chỉ:</strong> Ngõ 70 Cầu Diễn - Phường Phúc Diễn - Nam Từ Liêm - Hà Nội";
    contactInfoDiv.appendChild(address);

    const email = document.createElement("p");
    email.innerHTML = "<strong>Email:</strong> huybuong218@gmail.com";
    contactInfoDiv.appendChild(email);

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Điện thoại:</strong> 0978508696";
    contactInfoDiv.appendChild(phone);

    const workingHours = document.createElement("p");
    workingHours.innerHTML =
      "<strong>Thời gian làm việc:</strong> Thứ 2 – Chủ nhật: 8h30 – 21h30";
    contactInfoDiv.appendChild(workingHours);

    container.appendChild(mapDiv);
    container.appendChild(contactInfoDiv);
    body.appendChild(container);
  }

  // Tạo footer
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

  createHeader();
  createBanner();
  createContactPage();
  createFooter();
});
