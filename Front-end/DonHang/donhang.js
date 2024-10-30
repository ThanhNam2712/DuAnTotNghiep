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
const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");
const logoLink = document.createElement("a");
logoLink.href = "../Home/Home.html";
const logoImg = document.createElement("img");
logoImg.src = "../anh/logo.png";
logoImg.alt = "Logo";
logoLink.appendChild(logoImg);
logoDiv.appendChild(logoLink);

const nav = document.createElement("nav");
const navList = document.createElement("ul");
const navItems = [
  { href: "../Home/Home.html", text: "Trang chủ" },
  { href: "../gioithieu/gioithieu.html", text: "Giới thiệu" },
  { href: "../lienhe/lienhe.html", text: "Liên hệ" },
];
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
dropdown.classList.add("dropdown");
const dropdownLink = document.createElement("a");
dropdownLink.href = "#";
dropdownLink.textContent = "Bộ sưu tập";
dropdown.appendChild(dropdownLink);

const dropdownMenu = document.createElement("ul");
dropdownMenu.classList.add("dropdown-menu");
const dropdownItems = [
  { href: "../danhmuc/polo/polo.html", text: "Áo polo" },
  { href: "../danhmuc/phong/phong.html", text: "Áo phông" },
  { href: "../danhmuc/quanaobo/quanaobo.html", text: "Quần áo bộ" },
  { href: "../danhmuc/somi/somi.html", text: "Áo sơ mi" },
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
headerIconsDiv.appendChild(
  createIconLink("../Home/timkiem.html", "../anh/searcher.jpg", "Search")
);
headerIconsDiv.appendChild(
  createIconLink("../Register/register.html", "../anh/user.jpg", "User")
);
headerIconsDiv.appendChild(createIconLink("#", "../anh/cart.png", "Cart"));
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
