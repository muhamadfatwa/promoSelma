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


  /*fungsi balik ke halaman terakhir*/
  function pindah(url) {
    // Simpan posisi scroll saat ini
    localStorage.setItem('scrollPos', window.scrollY);
    // Pindah ke halaman detail
    window.location.href = url;
  }
  
  // Saat halaman promo dimuat
  window.addEventListener('load', () => {
    const scrollPos = localStorage.getItem('scrollPos');
    if (scrollPos) {
      window.scrollTo(0, parseInt(scrollPos)); // kembalikan posisi scroll
      localStorage.removeItem('scrollPos'); // hapus supaya tidak mengganggu
    }
  });
  