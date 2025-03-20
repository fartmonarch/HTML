// loading.js

window.addEventListener("load", function () {
  const loadingOverlay = document.getElementById("loading-overlay");
  if (loadingOverlay) {
    // 添加渐隐效果
    loadingOverlay.style.opacity = "0";
    // 等待动画结束后再将 loading 层隐藏（例如 500 毫秒后）
    setTimeout(function () {
      loadingOverlay.style.display = "none";
    }, 10000);
  }
});
