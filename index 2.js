const btn = document.querySelector(".login-btn");

btn.onclick = function () {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (email === "walaa@gimal.com" && password === "1234") {
    window.location.href = "./index.html";    // الصفحه الى هيووح ليهاا
  } else {
    alert("الإيميل أو كلمة السر غلط");
  }
};