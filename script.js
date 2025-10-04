function pindah(url){
    window.location.href=url;
}

/*kode untuk membatasi waktu promo*/

function pindah(halaman) {
  window.location.href = halaman;
}

  document.addEventListener("DOMContentLoaded", function () {
    const promoBoxes = document.querySelectorAll(".promo-box");
  
    promoBoxes.forEach(box => {
      const expiredDate = box.getAttribute("data-expired");
      const now = new Date();
      const expired = new Date(expiredDate);
  
      if (now > expired) {
        const img = box.querySelector("img");
        const overlay = box.querySelector(".overlay");
        const button = box.querySelector("button");
  
        if (img) img.classList.add("expired");
        if (overlay) overlay.classList.add("show");
        if (button) button.disabled = true;
      }
    });
  });

  function toggleMenu(el) {
    const nav = document.querySelector("nav");
    nav.classList.toggle("show");
    el.classList.toggle("active");
  }
