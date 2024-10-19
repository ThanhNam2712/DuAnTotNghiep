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
