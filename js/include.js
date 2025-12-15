document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/components/common/header.html");
  loadComponent("nav", "/components/common/nav.html");
  loadComponent("sideMenu", "/components/common/menu.html");
  loadComponent("footer", "/components/common/footer.html");
});

function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(err => console.error("Include load error:", err));
}