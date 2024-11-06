// Sample data for districts and wards
const addressData = {
    "Hà Nội": {
      "Ba Đình": ["Phường Cống Vị", "Phường Điện Biên"],
      "Đống Đa": ["Phường Cát Linh", "Phường Khâm Thiên"]
    },
    "Hồ Chí Minh": {
      "Quận 1": ["Phường Bến Nghé", "Phường Phạm Ngũ Lão"],
      "Quận 3": ["Phường Võ Thị Sáu", "Phường Phạm Ngũ Lão"]
    }
  };
  
  function populateDistricts() {
    const city = document.getElementById("city").value;
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");
    
    // Clear previous options
    districtSelect.innerHTML = '<option value="">Chọn Quận/Huyện</option>';
    wardSelect.innerHTML = '<option value="">Chọn Xã/Phường/Thị trấn</option>';
  
    if (addressData[city]) {
      Object.keys(addressData[city]).forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.text = district;
        districtSelect.add(option);
      });
    }
  }
  
  function populateWards() {
    const city = document.getElementById("city").value;
    const district = document.getElementById("district").value;
    const wardSelect = document.getElementById("ward");
  
    // Clear previous options
    wardSelect.innerHTML = '<option value="">Chọn Xã/Phường/Thị trấn</option>';
  
    if (addressData[city] && addressData[city][district]) {
      addressData[city][district].forEach(ward => {
        const option = document.createElement("option");
        option.value = ward;
        option.text = ward;
        wardSelect.add(option);
      });
    }
  }
  