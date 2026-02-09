document.addEventListener("DOMContentLoaded", () => {

  // استدعاء العناصر 
  const fileInput = document.getElementById("fileInput");
  const pdfBtn = document.querySelector(".btn-blue");
  const wordBtn = document.querySelector(".btn-light");
  const generateBtn = document.querySelector(".generate");
  const summaryText = document.querySelector(".card p");
  let selectedFile = null;

  // Upload PDF
  pdfBtn.addEventListener("click", () => {
    fileInput.accept = ".pdf";
    fileInput.click();
  });

  // Upload Word
  wordBtn.addEventListener("click", () => {
    fileInput.accept = ".doc,.docx";
    fileInput.click();
  });

  // لما نختار ملف
  fileInput.addEventListener("change", () => {
    selectedFile = fileInput.files[0];
    summaryText.textContent = "Selected file: " + selectedFile.name;
  });

  // Generate
  generateBtn.addEventListener("click", () => {
    if (!selectedFile) {
      summaryText.textContent = "Please upload a file first.";
      return;
    }

    summaryText.textContent =
      "Summary generated for: " + selectedFile.name;
  });

  // Menu Active Switch
const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

});