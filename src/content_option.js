import { mainBackground, p1, p2, p3, p4, p5, p6 } from "./config/Image";

const logotext = "FaraOFF";
const meta = {
  title: "Nuranov",
  description:
    "Я — Farrux Nuranov, frontend-разработчик, создаю современные и удобные веб-приложения. Люблю превращать идеи в живой код и делаю интерфейсы, которые работают быстро и выглядят стильно.",
};

const introdata = {
  title: "Я — Farrux Nuranov",
  animated: {
    first: "Люблю писать чистый код",
    second: "Создаю современные сайты",
    third: "Frontend-разработчик с душой",
  },
  description:
    "Разрабатываю сайты, которые не только красиво выглядят, но и работают быстро, удобно и без лишней сложности.",
  your_img_url: mainBackground,
};

const dataabout = {
  title: "Немного обо мне",
  aboutme:
    "Я — фронтенд-разработчик с годовым опытом в IT. На данный момент работаю в Abstract-IT, где создаю веб-приложения и интерфейсы: от учебных онлайн-дашбордов и админ-панелей до стильных лендингов и корпоративных сайтов. Стремлюсь писать чистый и поддерживаемый код, создавать удобный и современный UI, а также постоянно развиваться в новых технологиях.",
};
const worktimeline = [
  {
    jobtitle: "Frontend разработчик",
    where: "Abstract-IT",
    date: "2025 — настоящее время",
    description:
      "Разработка и поддержка веб-приложений: онлайн-дашборды, админ-панели, учебные платформы, лендинги, проекты в стиле Cargo. Работа с React, Redux, API интеграциями и UI/UX оптимизацией.",
  },
];

const skills = [
  {
    name: "React",
    value: 75,
  },
  {
    name: "JavaScript (ES6+)",
    value: 70,
  },
  {
    name: "SCSS / CSS3",
    value: 80,
  },
  {
    name: "HTML5",
    value: 95,
  },
  {
    name: "Figma",
    value: 75,
  },
];

const services = [
  {
    title: "UI & UX Дизайн",
    description:
      "Разрабатываю современные и понятные интерфейсы, уделяя внимание как визуальной эстетике, так и удобству пользователя.",
  },
  {
    title: "Веб-разработка",
    description:
      "Создаю адаптивные, быстрые и оптимизированные сайты с чистым кодом, которые отлично работают на любых устройствах.",
  },
  {
    title: "SPA и Frontend",
    description:
      "Разрабатываю интерактивные одностраничные приложения (SPA) на React с плавными анимациями и продуманной архитектурой.",
  },
];

// content_option.js
const dataportfolio = [
  {
    title: "Brand Landing — логотип/брендинг",
    img: p1,
    description:
      "Маркетинговый лендинг с акцентом на бренд: крупная типографика, CTA, адаптив и аккуратная анимация.",
    tech: ["HTML5", "SCSS", "JS"],
    demo: "", // добавишь, если есть хостинг
    code: "", // репозиторий/архив
  },
  {
    title: "Ameen Class — промо сайта",
    img: p2,
    description:
      "Промо-страница образовательной платформы: хиро-блок, CTA, секции преимуществ. Чистый UI.",
    tech: ["React", "Vite", "SCSS"],
    demo: "",
    code: "",
  },
  {
    title: "CTRANS — админка (лиды)",
    img: p3,
    description:
      "Дашборд логистики: фильтры, статусы, действия по лидам, экспорт. Упор на UX и стабильность.",
    tech: ["React", "Redux Toolkit", "SCSS"],
    demo: "",
    code: "",
  },
  {
    title: "TOTEMBO — eCommerce UI",
    img: p4,
    description:
      "Каталог с карточками и скидками, адаптивные плитки, чистая типографика и сетка.",
    tech: ["React", "SCSS"],
    demo: "",
    code: "https://github.com/FarruxNuranov/Totemboadaptive",
  },
  {
    title: "FaraOff — личное портфолио",
    img: p5,
    description:
      "Мой сайт-портфолио: тёмная тема с градиентом, локализация, анимации и секции проектов.",
    tech: ["React", "i18next", "SCSS"],
    demo: "",
    code: "",
  },
  {
    title: "Ameen Class — страница курса (LMS)",
    img: p6,
    description:
      "Страница урока в LMS: плеер, оглавление, материалы, комментарии и прогресс.",
    tech: ["React", "RTK", "Responsive UI"],
    demo: "",
    code: "",
  },
];

const contactConfig = {
  YOUR_EMAIL: "Farruxnuranov2001@gmail.com",
  description:
    "Если у вас есть проект или вопрос — напишите. Открыт к сотрудничеству и интересным задачам.",

  YOUR_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  YOUR_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  YOUR_USER_ID: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const socialprofils = {
  github: "https://github.com/farruxnuranov/",
  facebook: "https://www.facebook.com/farrux.nuranov.7",
  linkedin: "https://www.linkedin.com/in/farrux-nuranov-6311832ab/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
