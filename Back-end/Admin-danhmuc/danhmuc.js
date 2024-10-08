const category = [
    {
      id: "1",
      name: "Áo Polo",
      quantity: "100",
      size: "20M, 20L, 10XL, 50XXL",
    },
    {
      id: "2",
      name: "Áo Phông",
      quantity: "20",
      size: "2M, 10L, 5XL, 8XXL",
    },
    {
      id: "3",
      name: "Quần Âu",
      quantity: "120",
      size: "20M, 40L, 10XL, 50XXL",
    },
  ];
  function renderCategorys() {
    const tbody = document.getElementById("category-table-body");
    tbody.innerHTML = ""; // Xóa nội dung cũ
  
    category.forEach((category) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${category.id}</td>
            <td>${category.name}</td>
            <td>${category.quantity}</td>      
            <td>${category.size}</td>  
            <td><button class="rejected">Delete</button></td>
        `;
      tbody.appendChild(row);
    });
  }
  export { renderCategorys };
  