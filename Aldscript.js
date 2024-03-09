function togglePopup() {
document.getElementById("popup-1").classList.toggle("active");
    }
    const btnPrint = document.querySelector(".btn-print");

    btnPrint.addEventListener("click", () => window.print());