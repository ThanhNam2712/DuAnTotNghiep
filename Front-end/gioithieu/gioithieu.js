document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  // Tạo Header
  function createHeader() {
    const header = document.createElement("header");

    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";
    const logoLink = document.createElement("a");
    logoLink.href = "../Home/Home.html";
    const logoImg = document.createElement("img");
    logoImg.src = "../anh/logo.png";
    logoImg.alt = "Logo";
    logoLink.appendChild(logoImg);
    logoDiv.appendChild(logoLink);
    header.appendChild(logoDiv);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const menuItems = [
      { name: "Trang chủ", link: "../Home/Home.html" },
      { name: "Giới thiệu", link: "gioithieu.html" },
      { name: "Liên hệ", link: "../lienhe/lienhe.html" },
    ];

    menuItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.name;
      li.appendChild(a);
      ul.appendChild(li);
    });

    const dropdownLi = document.createElement("li");
    dropdownLi.className = "dropdown";
    const dropdownLink = document.createElement("a");
    dropdownLink.href = "#";
    dropdownLink.textContent = "Bộ sưu tập";
    dropdownLi.appendChild(dropdownLink);

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.className = "dropdown-menu";

    const dropdownItems = [
      { name: "Áo polo", link: "../danhmuc/polo/polo.html" },
      { name: "Áo phông", link: "../danhmuc/phong/phong.html" },
      { name: "Quần áo bộ", link: "../danhmuc/quanaobo/quanaobo.html" },
      { name: "Sơ mi", link: "../danhmuc/somi/somi.html" },
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

    const headerIconsDiv = document.createElement("div");
    headerIconsDiv.className = "header-icons";

    const searchLink = document.createElement("a");
    searchLink.href = "../Home/timkiem.html";
    const searchImg = document.createElement("img");
    searchImg.src = "../anh/searcher.jpg";
    searchImg.alt = "Search";
    searchLink.appendChild(searchImg);

    const userLink = document.createElement("a");
    userLink.href = "../Register/register.html";
    const userImg = document.createElement("img");
    userImg.src = "../anh/user.jpg";
    userImg.alt = "User";
    userLink.appendChild(userImg);

    const cartLink = document.createElement("a");
    cartLink.href = "#";
    const cartImg = document.createElement("img");
    cartImg.src = "../anh/cart.png";
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
      "../anh/banner/banner1.jpg",
      "../anh/banner/banner2.jpg",
      "../anh/banner/banner3.jpg",
      "../anh/banner/banner4.jpg",
      "../anh/banner/banner5.jpg",
      "../anh/banner/banner6.jpg",
      "../anh/banner/banner7.jpg",
      "../anh/banner/banner8.jpg",
      "../anh/banner/banner9.jpg",
      "../anh/banner/banner10.jpg",
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

  // Tạo phần giới thiệu
  function createAboutUs() {
    const aboutUsSection = document.createElement("section");
    aboutUsSection.className = "about-us";

    const aboutUsImg = document.createElement("img");
    aboutUsImg.src = "../anh/aeboutique.webp";
    aboutUsImg.alt = "AE Boutique";

    const aboutUsList = document.createElement("ul");
    const aboutUsText = [
      "AE Boutique là một cửa hàng thời trang chuyên về quần áo, với phong cách trẻ trung, hiện đại và đa dạng. Cửa hàng này hướng đến đối tượng khách hàng yêu thích sự sáng tạo, phong cách và cá tính trong việc lựa chọn trang phục. AE Boutique có thể cung cấp nhiều dòng sản phẩm từ quần áo thường ngày, trang phục công sở cho đến những bộ cánh dự tiệc sang trọng.",
      "Điểm mạnh của AE Boutique là sự cập nhật liên tục các xu hướng thời trang mới nhất, đồng thời mang đến những sản phẩm với chất lượng tốt, giá cả hợp lý. Cửa hàng cũng thường xuyên có các chương trình khuyến mãi và ưu đãi đặc biệt dành cho khách hàng.",
      "Ngoài ra, AE Boutique có thể có dịch vụ mua hàng online, giúp khách hàng dễ dàng lựa chọn và mua sắm các sản phẩm thời trang một cách tiện lợi.",
    ];

    aboutUsText.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      aboutUsList.appendChild(li);
    });

    aboutUsSection.appendChild(aboutUsImg);
    aboutUsSection.appendChild(aboutUsList);

    body.appendChild(aboutUsSection);
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
    fbImg.src = "../anh/fb.png";
    fbImg.alt = "Facebook";
    fbLink.appendChild(fbImg);

    const ytLink = document.createElement("a");
    ytLink.href = "#";
    const ytImg = document.createElement("img");
    ytImg.src = "../anh/youtube.png";
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
    momoImg.src = "../anh/momo.png";
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
  createAboutUs();
  createFooter();
});
