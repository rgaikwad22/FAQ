const dropdowns = document.querySelectorAll(".dropdown");
const faqs = document.querySelectorAll(".faq-dropdown");

const handleDropdown = function (i) {
  faqs[i].classList.toggle("active");
}

dropdowns.forEach((dropdown, i) => {
  dropdown.addEventListener("click", () => handleDropdown(i));
});
