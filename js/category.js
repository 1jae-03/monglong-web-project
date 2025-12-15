
document.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  const category = document.getElementById("categorySection");

  const headerBottom = header.getBoundingClientRect().bottom;

  if (headerBottom <= 0) {
    nav.classList.add("fixed-top");
    category.classList.add("fixed");
    document.body.classList.add("has-fixed-category");
  } else {
    nav.classList.remove("fixed-top");
    category.classList.remove("fixed");
    document.body.classList.remove("has-fixed-category");
  }
});