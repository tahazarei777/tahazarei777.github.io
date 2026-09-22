// ===== Skills Data =====
const skills = [
  { name: "Python", level: "Advanced" },
  { name: "Django", level: "Advanced" },
  { name: "Django REST Framework", level: "Advanced" },
  { name: "GraphQL (Strawberry)", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" },
  { name: "Caching in Django", level: "Intermediate" },
  { name: "Threading in Django", level: "Intermediate" },
];

// ===== Projects Data =====
const projects = [
  {
    icon: "📈",
    title: "MetaTrader Algorithmic Trading Bot",
    desc: "A Python-driven trading bot that retrieves live candlestick price data and automatically decides to open buy or sell trades based on configurable logic. Integrated with MetaTrader through a Django REST Framework backend for order execution and trade management.",
    tags: ["Python", "Django REST", "MetaTrader API", "Automation"],
    role: "Backend Developer",
    link: "",
  },
  {
    icon: "☀️",
    title: "Solar Panel Management Platform — Noor Center",
    desc: "A nationwide platform for managing and monitoring solar panel systems across distributed installations. Built backend services and REST API endpoints with Django to support real-time monitoring, reporting, and panel health tracking.",
    tags: ["Django", "REST API", "IoT", "Nationwide"],
    role: "Backend Developer (Team)",
    featured: true,
    link: "",
  },
  {
    icon: "🪙",
    title: "Crypto Trading Platform — Polygon Integration",
    desc: "Backend system built with Django that connects to the Polygon network through a JavaScript-based bridge for crypto asset exchange and transaction handling. Designed REST endpoints to manage trades, wallet interactions, and real-time blockchain data.",
    tags: ["Django", "REST API", "Polygon", "JavaScript", "Blockchain"],
    role: "Backend Developer",
    link: "",
  },
  {
    icon: "🍽️",
    title: "Notalia — Digital Menu System",
    desc: "A digital menu and ordering system for a cafe/restaurant. Built with Django and WebSocket support for real-time order updates pushed to the kitchen, alongside a REST API for menu management and order history.",
    tags: ["Django", "WebSocket", "REST API", "Real-time"],
    role: "Backend Developer",
    link: "",
  },
  {
    icon: "🏋️",
    title: "Sports Club Management System",
    desc: "A management platform for a sports club covering member registration, subscription tracking, class scheduling, and attendance. Built backend services and APIs with Django to streamline daily club operations.",
    tags: ["Django", "REST API", "Management System"],
    role: "Backend Developer",
    link: "",
  },
];

// ===== Render Skills =====
const skillsGrid = document.getElementById("skillsGrid");
skills.forEach((s) => {
  const levelClass =
    s.level === "Advanced" ? "level-advanced" : "level-intermediate";
  skillsGrid.insertAdjacentHTML(
    "beforeend",
    `<div class="skill-card">
       <span class="skill-name">${s.name}</span>
       <span class="skill-level ${levelClass}">${s.level}</span>
     </div>`
  );
});

// ===== Render Projects =====
const projectsGrid = document.getElementById("projectsGrid");
projects
  .filter((p) => !p.featured) // Featured goes in HTML separately
  .forEach((p) => {
    const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
    const role = p.role ? `<span class="project-role">${p.role}</span>` : "";
    const link = p.link
      ? `<a href="${p.link}" class="project-link" target="_blank" rel="noopener">View on GitHub →</a>`
      : "";

    projectsGrid.insertAdjacentHTML(
      "beforeend",
      `<article class="project-card">
         <div class="project-icon">${p.icon}</div>
         <h3>${p.title}</h3>
         ${role}
         <p>${p.desc}</p>
         <div class="tags">${tags}</div>
         ${link}
       </article>`
    );
  });

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// ===== Mobile Menu =====
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ===== Year =====
document.getElementById("year").textContent = new Date().getFullYear();
