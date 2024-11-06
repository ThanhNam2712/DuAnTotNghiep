// Tạo cấu trúc HTML cho trang đơn hàng
document.body.innerHTML = `
  <h1>Danh sách đơn hàng</h1>
  <table id="orderTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Người đặt</th>
        <th>SDT</th>  
        <th>Địa chỉ</th>
        <th>Danh mục</th>
        <th>Tổng tiền</th>
        <th>Trạng thái</th>
        <th>Thời gian đặt</th>
        <th>Thao tác</th>
        
      </tr>
    </thead>
    <tbody id="orderTableBody">
      <!-- Dynamic rows will be injected by JavaScript -->
    </tbody>
  </table>
`;

// **Header**

const header = document.createElement("header");
header.innerHTML = `
    <div class="logo">
      <a href="../Home/Home.html">
        <img src="../anh/logo.png" alt="Logo" />
      </a>
    </div>
    <nav>
      <ul>
        <li><a href="../Home/Home.html">Trang chủ</a></li>
        <li><a href="gioithieu.html">Giới thiệu</a></li>
        <li><a href="../lienhe/lienhe.html">Liên hệ</a></li>
        <li class="dropdown">
          <a href="#">Bộ sưu tập</a>
          <ul class="dropdown-menu">
            <li><a href="../danhmuc/polo/polo.html">Áo polo</a></li>
            <li><a href="../danhmuc/phong/phong.html">Áo phông</a></li>
            <li><a href="../danhmuc/quanaobo/quanaobo.html">Quần áo bộ</a></li>
            <li><a href="../danhmuc/somi/somi.html">Sơ mi</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="header-icons">
      <form id="searchForm" onsubmit="return searchProduct()" style="display: flex; align-items: center; gap: 10px; border: 1px solid #ddd; padding: 8px; border-radius: 5px;">
        <input type="text" id="searchInput" placeholder="Tìm kiếm sản phẩm..." style="border: none; outline: none" />
        <button type="submit" style="background: none; border: none; cursor: pointer">🔍</button>
        <a href="../Register/register.html" style="display: flex; align-items: center; justify-content: center">
          <svg width="24" height="24" fill="#007bff" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.86 0-7 3.14-7 7 0 .553.447 1 1 1h12c.553 0 1-.447 1-1 0-3.86-3.14-7-7-7z" />
          </svg>
        </a>
        <a href="../DonHang/donhang.html" style="display: flex; align-items: center; justify-content: center">
          <svg width="24" height="24" fill="#007bff" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18c-1.104 0-2 .897-2 2s.896 2 2 2 2-.897 2-2-.896-2-2-2zm10 0c-1.104 0-2 .897-2 2s.896 2 2 2 2-.897 2-2-.896-2-2-2zM7 6h13c.553 0 1 .447 1 1s-.447 1-1 1h-1.333l-1.085 4.86c-.168.754-.855 1.285-1.625 1.285h-5.358c-.77 0-1.457-.531-1.625-1.285L5.333 8H4C3.447 8 3 7.553 3 7s.447-1 1-1h3c.48 0 .897.34.98.807L7 6zm0 0z" />
          </svg>
        </a>
      </form>
    </div>
  `;
const logoDiv = document.createElement("div");
const logoLink = document.createElement("a");
const logoImg = document.createElement("img");

logoLink.appendChild(logoImg);
logoDiv.appendChild(logoLink);

const nav = document.createElement("nav");
const navList = document.createElement("ul");
const navItems = [];
navItems.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = item.href;
  a.textContent = item.text;
  li.appendChild(a);
  navList.appendChild(li);
});

// Dropdown menu cho "Bộ sưu tập"
const dropdown = document.createElement("li");

const dropdownLink = document.createElement("a");

dropdown.appendChild(dropdownLink);

const dropdownMenu = document.createElement("ul");

const dropdownItems = [];
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

header.appendChild(logoDiv);
header.appendChild(nav);
header.appendChild(headerIconsDiv);
document.body.prepend(header);

// **Banner**
const bannerSection = document.createElement("section");
bannerSection.classList.add("banner");
const bannerContainer = document.createElement("div");
bannerContainer.classList.add("banner-container");
const bannerImages = [
  "../anh/banner/banner1.jpg",
  "../anh/banner/banner2.jpg",
  "../anh/banner/banner3.jpg",
  "../anh/banner/banner4.jpg",
  "../anh/banner/banner5.jpg",
];
bannerImages.forEach((src) => {
  const bannerSlide = document.createElement("div");
  bannerSlide.classList.add("banner-slide");
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Banner ${src}`;
  bannerSlide.appendChild(img);
  bannerContainer.appendChild(bannerSlide);
});
const bannerControls = document.createElement("div");
bannerControls.classList.add("banner-controls");
bannerControls.appendChild(createButton("prev", "&#10094;", -1));
bannerControls.appendChild(createButton("next", "&#10095;", 1));
bannerSection.appendChild(bannerContainer);
bannerSection.appendChild(bannerControls);
document.body.insertBefore(bannerSection, document.body.children[1]);

// **Footer**
const footer = document.createElement("footer");
const footerHr = document.createElement("hr");
footer.appendChild(footerHr);
const footerContainer = document.createElement("div");
footerContainer.classList.add("footer-container");
const footerItems = [
  {
    title: "Shop AE Boutique",
    content:
      "Shop AE Boutique chuyên buôn, sỉ, lẻ, order hàng thời trang, giá tốt nhất thị trường.",
    socialIcons: [
      {
        href: "https://www.facebook.com/aeboutique69",
        src: "../anh/fb.png",
        alt: "Facebook",
      },
      { href: "#", src: "../anh/youtube.png", alt: "YouTube" },
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
    paymentIcons: [{ src: "../anh/momo.png", alt: "Momo" }],
  },
];
footerItems.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("footer-item");
  const title = document.createElement("h5");
  title.textContent = item.title;
  div.appendChild(title);
  if (item.content) {
    const content = document.createElement("h6");
    content.textContent = item.content;
    div.appendChild(content);
  }
  if (item.socialIcons) {
    const socialDiv = document.createElement("div");
    socialDiv.classList.add("social-icons");
    item.socialIcons.forEach((icon) => {
      const a = document.createElement("a");
      a.href = icon.href;
      const img = document.createElement("img");
      img.src = icon.src;
      img.alt = icon.alt;
      a.appendChild(img);
      socialDiv.appendChild(a);
    });
    div.appendChild(socialDiv);
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
    div.appendChild(ul);
  }
  if (item.paymentIcons) {
    const paymentDiv = document.createElement("div");
    paymentDiv.classList.add("payment-icons");
    item.paymentIcons.forEach((icon) => {
      const img = document.createElement("img");
      img.src = icon.src;
      img.alt = icon.alt;
      paymentDiv.appendChild(img);
    });
    div.appendChild(paymentDiv);
  }
  footerContainer.appendChild(div);
});
footer.appendChild(footerContainer);
document.body.appendChild(footer);

// Các hàm phụ trợ
function createIconLink(href, src, alt) {
  const a = document.createElement("a");
  a.href = href;
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  a.appendChild(img);
  return a;
}

function createButton(className, innerHTML, direction) {
  const button = document.createElement("button");
  button.classList.add(className);
  button.innerHTML = innerHTML;
  button.onclick = () => changeSlide(direction);
  return button;
}

function changeSlide(direction) {
  console.log("Chuyển slide theo hướng:", direction);
}
// Fetch data from JSON server
function fetchOrders() {
  fetch("http://localhost:3000/orders")
    .then((response) => response.json())
    .then((data) => {
      renderTable(data);
    })
    .catch((error) => console.error("Error fetching orders:", error));
}

// Render the table
function renderTable(orders) {
  const tableBody = document.getElementById("orderTableBody");
  tableBody.innerHTML = "";

  orders.forEach((order) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customerName}</td>
            <td>${order.phoneNumber}</td>
            <td>${order.address}</td>
            <td>${order.productName}</td>
            <td>${order.totalPrice}</td>
            <td>
                <span class="status ${getStatusClass(order.status)}">${
      order.status
    }</span>
            </td>
            <td>${order.orderDate}</td>
            <td class="actions">
                <button class="details-btn" onclick="viewDetails(${
                  order.id
                })">Xem chi tiết</button>
                ${
                  order.status === "Chờ xác nhận"
                    ? `<button class="cancel-btn" onclick="cancelOrder(${order.id})">Hủy đơn hàng</button>`
                    : ""
                }
            </td>
        `;
    tableBody.appendChild(row);
  });
}

// Hàm lấy class trạng thái
function getStatusClass(status) {
  switch (status) {
    case "Hủy":
      return "cancelled";
    case "Chờ xác nhận":
      return "pending";
    case "Đã Xác nhận":
      return "confirmed";
    default:
      return "";
  }
}

// Chi tiết đơn hàng
function viewDetails(orderId) {
  alert(`Xem chi tiết đơn hàng có ID: ${orderId}`);
}

// Xóa đơn hang
function cancelOrder(orderId) {
  console.log(`Đang hủy đơn hàng ID: ${orderId}`);
  if (confirm(`Bạn có chắc muốn hủy đơn hàng có ID: ${orderId}?`)) {
    fetch(`http://localhost:3000/orders/${orderId}`)
      .then((response) => response.json())
      .then((order) => {
        console.log("Đơn hàng trước khi hủy:", order);
        order.status = "Hủy";
        return fetch(`http://localhost:3000/orders/${orderId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        });
      })
      .then((response) => {
        console.log("Kết quả cập nhật:", response);
        if (!response.ok) {
          throw new Error("Không thể hủy đơn hàng");
        }
        return response.json();
      })
      .then(() => {
        console.log(`Đơn hàng ID: ${orderId} đã được hủy.`);
        alert(`Đơn hàng ID: ${orderId} đã được hủy.`);
        fetchOrders();
      })
      .catch((error) => {
        console.error("Lỗi khi hủy đơn hàng:", error);
        alert("Lỗi khi hủy đơn hàng!");
      });
  }
}

fetchOrders();
