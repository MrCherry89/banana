const detailsSwiper = new Swiper(".detailsSwiper", {
    slidesPerView: 1, 
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    speed: 600,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    observer: true,
    observeParents: true,
  
    breakpoints: {
      576: { 
        slidesPerView: 1,
      },
      768: { 
        slidesPerView: 1,
      },
      992: { 
        slidesPerView: 1,
      },
      1200: { 
        slidesPerView: "auto",
      }
    }
  });


const styleSwiper = new Swiper(".styleSwiper", {
    slidesPerView: 1, 
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    speed: 600,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    observer: true,
    observeParents: true,
  
    breakpoints: {
      576: { 
        slidesPerView: 1,
      },
      768: { 
        slidesPerView: 1,
      },
      992: { 
        slidesPerView: 1,
      },
      1200: { 
        slidesPerView: "auto",
      }
    }
  });
const wordsSwiper = new Swiper(".wordsSwiper", {
    slidesPerView: 1, 
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    speed: 600,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    observer: true,
    observeParents: true,
  
    breakpoints: {
      576: { 
        slidesPerView: 1,
      },
      768: { 
        slidesPerView: 1,
      },
      992: { 
        slidesPerView: 1,
      },
      1200: { 
        slidesPerView: "auto",
      }
    }
  });

  const items = document.querySelectorAll(".a-accordion-item");

items.forEach(item => {
  const header = item.querySelector(".a-accordion-header");

  header.addEventListener("click", () => {
    // Если нажали на открытую — просто закрыть её
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      return;
    }

    // Закрыть все остальные
    items.forEach(i => i.classList.remove("active"));

    // Открыть текущую
    item.classList.add("active");
  });
});

// Изначально открыт первый
items[0].classList.add("active");



  