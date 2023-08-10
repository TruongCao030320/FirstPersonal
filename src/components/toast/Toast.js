import "./Toast.css";
function toast({ title = "", text = "", type = "success", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    console.log("lay dc main kh", main);
    const removeToast = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(removeToast);
      }
    };
    const icons = {
      success: "fa-solid fa-check",
      error: "fa-solid fa-triangle-exclamation",
      warning: "fa-sharp fa-solid fa-triangle-exclamation",
    };
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${
      duration / 1000
    }s forwards`;
    toast.innerHTML = `
            <div class="toast__icon"><i class="${icons[type]}"></i></div>
            <div class="toast__content">
            <div class="toast__title">${title}</div>
            <div class="toast__text">
                ${text}
            </div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark" style="font-size: 24px"></i>
            </div>
      `;
    main.appendChild(toast);
  }
}
export function showSuccessToast() {
  toast({
    title: "Sất sịt",
    text: "Nút success nè",
    type: "success",
    duration: 1000,
  });
}
