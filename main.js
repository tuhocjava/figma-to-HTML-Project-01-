// Lắng nghe sự kiện di chuột lên các link của thanh navbar
const navLinks = document.querySelectorAll(".nav-list li a");
console.log(navLinks);
navLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    addActive(link);
  });
});
function clearActive() {
  navLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
  });
}
function addActive(item) {
  clearActive();
  item.classList.add("active");
}
// Lắng nghe sự kiện di chuột lên các item blog
const blogItems = document.querySelectorAll(".blog-item");
const blogFooterItems = document.querySelectorAll(".blog-footer__item");
blogItems.forEach((item, index) => {
  item.addEventListener("mouseover", (e) => {
    clearActiveBlogFooter();
    blogFooterItems[index].classList.add("cta-active");
  });
});
function clearActiveBlogFooter() {
  blogFooterItems.forEach((item) => {
    if (item.classList.contains("cta-active")) {
      item.classList.remove("cta-active");
    }
  });
}
// Lắng nghe sự kiện khi di chuột qua các icon mạng xã hội
