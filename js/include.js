// DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/components/common/header.html");
  loadComponent("nav", "/components/common/nav.html");
  loadComponent("sideMenu", "/components/common/menu.html");
  loadComponent("footer", "/components/common/footer.html");
});

// 공통 컴포넌트 ID에 맞게 로드
function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(err => console.error("Include load error:", err));
}