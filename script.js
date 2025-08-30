// addEventListener('scroll', e => {
//   document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
// })
window.addEventListener('load', function() {
    // Добавляем класс к тегу body
    document.body.classList.add('loaded');
    
    // Необязательно: можно совсем удалить прелоадер из DOM через секунду
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.remove();
        }
    }, 1000); // Задержка в 1 секунду для плавности
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`);
});

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



const comments = [
  {
    name: "Андрей Судаков",
    time: "29 октября 2024",
    text: "Цикл супер, жду каждый день продолжение) читается легко, юмор присутствует) автору спасибо👍😉",
    likes: "+9"
  },
  {
    name: "владимир",
    time: "6 июня в 11:33",
    text: "Первая книга замечательная.приключения интрига. любовные приключения все очень здорово.Лора просто. отпад.вот  за иметь такую. Автору большое спасибо за работу.Цикл большой читаем дальше.",
    likes: "+3"
  },
  {
    name: "Tata-tata",
    time: "29 октября 2024",
    text: "Читаю с удовольствием и интересом, жду новых глав, чтобы приятно провести время за утренней чашечкой чая! Не стоит ждать от цикла глубокой философии и открытия тайн мироздания, заумных мыслей и часовых описаний природы, политики или техник. Читается легко, интересно, сюжет динамичный, захватывает! Автору вдохновения и новых поклонников!",
    likes: "+3"
  },
  {
    name: "Максим Карпов",
    time: "29 октября 2024",
    text: "Супер топ, очень нравится погружаться в атмосферу писателя, захватывает и подстегивает для чтения следующей книги, спасибо большое автору!",
    likes: "+3"
  },
  {
    name: "Андрей Петрушин",
    time: "29 октября 2024",
    text: "Книжка супер, как и весь цикл. Новые главы выходят чуть ли не каждый день, так что рекомендую!",
    likes: "+3"
  },
  {
    name: "Никита Луппов",
    time: "29 октября 2024",
    text: "Топ книга прочитал все книги что уже вышли жду проды)",
    likes: "+9"
  },
  {
    name: "Useless",
    time: "30 июля 2023",
    text: "Случайно зацепил взглядом и решил почитать. Вообще не пожалел, персонажи в отличие от многих других работ на сайте(даже тех, которые под «бестселлер») очень живые, надеюсь автор и дальше не будет забивать на этот момент. Так же понравилось, что у героя в окружении не 500 баб как во многих других боярках) Знаю, плюс такой себе, но как меня достало это явление… Желаю автору хорошего настроения и желания в продолжении работ.",
    likes: "+6"
  },
  {
    name: "Владимир Тарасов",
    time: "29 октября 2024",
    text: "Книга просто класс, но если попросят описать еë мемом я отвечу так - Шëл 2050 год, вышла уже 74 книга цикла 'Дорогой барон' 😂",
    likes: "+3"
  },
  {
    name: "Макс",
    time: "29 октября 2024",
    text: "Читаю много, читаю с удовольствием.И этот цикл читаю с удовольствием. 'Пасхалки' или отсылки к современным видео произведениям радуют. Рекомендую",
    likes: "+3"
  },
  {
    name: "Karina",
    time: "29 октября 2024",
    text: "Спасибо автору. Книга 🔥, цикл 🔥!!! Ждем продолжение))) ",
    likes: "+3"
  },
  {
    name: "Алан Смоленский",
    time: "29 июля 2023",
    text: "Случайно наткнулся на книгу. И очень рад. В полном восторге. Запоем прочел 18 глав. И с большим нетерпением буду ждать все последующие главы.👍 👍 ",
    likes: "+6"
  },
  {
    name: "Роман Шамров",
    time: "29 октября 2024",
    text: "хоспадиии, 20 книг чистейшего кайфа, читается просто на изи, для тех кто хочет просто порелаксить под интересную историю 🤓 100 деталек Болванчика из 10🤗 ",
    likes: "+3"
  },
  {
    name: "Станислав Гал",
    time: "24 августа 2023",
    text: "Потрясающая книга! Прочитал на одном дыхании! Автор, браво! Отлично обыграл моменты попаданства и помощника!",
    likes: "+1"
  },

];

const slider = document.getElementById('textSlider');

let currentIndex_comments = 0;

// Функция для создания слайда
function createSlide(comment) {
  const slide = document.createElement('div');
  slide.className = 'slide';

  slide.innerHTML = `
    <div class="comment">
      <div class="comment_name_time">
        <div class="comment_name">${comment.name}</div>
        <div class="comment_time">${comment.time}</div>
      </div>
      <div class="comment_text">${comment.text}</div>
      <div class="comment_like">${comment.likes}</div>
    </div>
  `;
  return slide;
}

// Инициализация слайдера
function initSlider() {
  comments.forEach(comment => {
    const slide = createSlide(comment);
    slider.appendChild(slide);
  });
}

// Перемещение слайдов
function showSlide(index) {
  const total = comments.length;
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;
  currentIndex_comments = index;
  const offset = -index * 100; // в процентах
  slider.style.transform = `translateX(${offset}%)`;
}

// Обработчики кнопок
document.querySelector('.prev-button').addEventListener('click', () => {
  showSlide(currentIndex_comments - 1);
});

document.querySelector('.next-button').addEventListener('click', () => {
  showSlide(currentIndex_comments + 1);
});

// Инициализация при загрузке
initSlider();
showSlide(currentIndex_comments);