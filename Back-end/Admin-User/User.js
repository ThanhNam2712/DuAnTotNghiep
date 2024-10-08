let users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "dodinhcanh90@gmail.com",
    phone: "0974468416",
    joined: "03/10/2024",
    role: "Admin",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    email: "dodinhcanh900@gmail.com",
    phone: "0984468416",
    joined: "03/10/2024",
    role: "User",
  },
];

// Hàm xóa người dùng
function deleteUser(userId) {
  const confirmation = confirm("Bạn có chắc chắn muốn xóa người dùng này?");

  if (confirmation) {
    // Xóa người dùng khỏi mảng users
    users = users.filter((user) => user.id !== userId);
    renderUsers();
  }
}
// Đưa hàm deleteUser vào phạm vi toàn cục
window.deleteUser = deleteUser;

export function renderUsers() {
  const tbody = document.getElementById("user-table-body");
  tbody.innerHTML = "";

  users.forEach((user) => {
    const row = document.createElement("tr");
    row.id = `user-row-${user.id}`; // Thêm ID vào từng hàng

    row.innerHTML = `
          <td>${user.id}</td>
           <td>${user.name}</td>
          <td>${user.email}</td>
           <td>${user.phone}</td>
           <td>${user.dateJoined}</td>          
          <td>${user.role}</td>
         <td><button onclick="deleteUser(${user.id})" class="rejected">Xóa người dùng </button></td>
      `;
    tbody.appendChild(row);
  });
}
