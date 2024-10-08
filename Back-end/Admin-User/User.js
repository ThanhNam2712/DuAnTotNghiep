const users = [
  {
    id: "1",
    name: "Nguyen Van A",
    email: "dodinhcanh90@gmail.com",
    phone: "0974468416",
    dateJoined: "03/10/2024",
    role: "admin",
  },
  {
    id: "2",
    name: "Nguyen Van B",
    email: "dodinhcanh900@gmail.com",
    phone: "0974468417",
    dateJoined: "03/10/2024",
    role: "user",
  },
];

// Hàm hiển thị người dùng
function renderUsers() {
  const tbody = document.getElementById("user-table-body");
  tbody.innerHTML = ""; // Xóa nội dung cũ

  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.dateJoined}</td>
          <td><button class="rejected">Delete</button><button class="verified">Update</button></td>
          <td>...</td>
          <td>${user.role}</td>
      `;
    tbody.appendChild(row);
  });
}

export { renderUsers };
