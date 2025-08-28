addEventListener('scroll', e => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

const sliderContainer = document.getElementById('textSlider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let currentIndex = 0;

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Инициализация
updateSlider();

const sections = document.querySelectorAll('.main_article_hero');

sections.forEach(section => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // observer.unobserve(entry.target); // отключить после первого появления
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
});

const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ut facere pariatur consequatur labore totam similique omnis id minus iure quas aliquid ea, impedit nam aliquam vero sint autem beatae!";

const element = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // задержка между символами (в миллисекундах)
  }
}

typeWriter();
