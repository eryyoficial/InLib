
/*=================================== SWIPER HERO =======================================*/
var swiper = new Swiper(".heroSwiper", {
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
/*=================================== SWIPER NOVIDADES =======================================*/
var newsSwiper = new Swiper(".newsSwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  speed: 3000, // Velocidade do deslizar (em milissegundos)
  autoplay: {
    delay: 0, // Deslizar continuamente sem intervalo
    disableOnInteraction: false, // Não desativar autoplay após interação
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      this.autoplay.start(); // Inicia o autoplay quando a inicialização do Swiper ocorrer
    },
  }
});


// Selecionando todos os slides
const slides = document.querySelectorAll('.newsSwiper .swiper-slide');

let timeout; // Variável para armazenar o timeout

// Função para retomar o deslizar após 1 segundo
function resumeAutoplay() {
  // Aguardar 1 segundo antes de retomar o deslizar
  timeout = setTimeout(() => {
    newsSwiper.autoplay.start(); // Retoma o deslizar
  }, 1000); // 1000 ms = 1 segundo
}

// Adicionando os eventos aos slides
slides.forEach(slide => {
  slide.addEventListener('mouseenter', function () {
    // Para o deslizar quando o mouse entra no slide
    newsSwiper.autoplay.stop();

    // Se o mouse entrar em um slide antes de 1 segundo, reseta o contador
    clearTimeout(timeout);
  });

  slide.addEventListener('mouseleave', function () {
    // Quando o mouse sai do slide, inicia a contagem para retomar o deslizar após 1 segundo
    resumeAutoplay();
  });
});





/*===================================Animação para o contador=======================================*/
function startCounters() {
  const counters = document.querySelectorAll(".estatisticas .bola-circular h2");
  const limits = [200, 3000, 10, 20];

  counters.forEach((counter, index) => {
    let start = 0;
    const limit = limits[index];
    const increment = Math.ceil(limit / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= limit) {
        start = limit;
        clearInterval(interval);
        counter.style.color = "#1B326D";
      }
      counter.textContent = `+${start}`;
    }, 45);
  });
}

function isSectionVisible(section) {
  const rect = section.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function handleCounters() {
  const section = document.querySelector(".container.stats");

  if (isSectionVisible(section)) {
    startCounters();
    document.removeEventListener("scroll", handleCounters);
  }
}


window.addEventListener("load", handleCounters);


document.addEventListener("scroll", handleCounters);



/*=================================== BIBLIOTECA: SWIPER CATEGORIAS =======================================*/
 