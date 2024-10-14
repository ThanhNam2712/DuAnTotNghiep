document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn"); // Nút đăng ký
    const nameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='text'][placeholder='Vui lòng nhập email']");
    const passwordInput = document.querySelector("input[type='password'][placeholder='Vui lòng nhập mật khẩu']");
    const confirmPasswordInput = document.querySelector("input[type='password'][placeholder='Vui lòng nhập lại mật khẩu']");

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function validateForm() {
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if (!nameValue || !emailValue || !passwordValue || !confirmPasswordValue) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return false;
        }

        if (!isValidEmail(emailValue)) {
            alert("Email không hợp lệ. Vui lòng nhập lại.");
            return false;
        }

        if (passwordValue.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự.");
            return false;
        }

        if (passwordValue !== confirmPasswordValue) {
            alert("Mật khẩu không khớp. Vui lòng nhập lại.");
            return false;
        }

        return true;
    }

    function checkEmailExists(email) {
        return fetch(`http://localhost:3000/users?email=${email}`)
            .then(response => response.json())
            .then(users => {
                return users.length > 0;
            });
    }

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (!validateForm()) {
            return;
        }

        checkEmailExists(emailValue).then(emailExists => {
            if (emailExists) {
                alert("Email đã tồn tại. Vui lòng sử dụng email khác.");
                return;
            }

            const newUser = {
                name: nameValue,
                email: emailValue,
                password: passwordValue
            };

            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(response => {
                console.log("Response status:", response.status); // In trạng thái phản hồi

                if (response.status === 201) { // Trạng thái 201: Đã tạo thành công
                    alert("Đăng ký thành công! Chuyển hướng đến trang đăng nhập.");
                    window.location.href = "../Login/login.html"; // Chuyển hướng sang trang đăng nhập
                } else {
                    return response.json().then(data => {
                        console.error("Lỗi từ server:", data);
                        alert("Đăng ký thất bại. Vui lòng thử lại.");
                    });
                }
            })
            .catch(error => {
                console.error("Lỗi khi đăng ký:", error);
                alert("Đăng ký thất bại. Vui lòng thử lại.");
            });
        });
    });
});
