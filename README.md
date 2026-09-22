
# 🌐 Mohammad Taha Zarei — Portfolio

> Personal portfolio website of **Mohammad Taha Zarei**, a Python / Django Backend Developer based in Kashan, Iran.

[![Live Site](https://img.shields.io/badge/Live-tahazarei777.github.io-4ade80?style=for-the-badge&logo=github)](https://tahazarei777.github.io)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## 📖 About

This repository hosts my personal portfolio website, built from scratch with vanilla **HTML, CSS, and JavaScript** — no frameworks, no build tools. It's deployed for free on **GitHub Pages**.

The site showcases:
- 🧑‍💻 My background and experience as a backend developer
- 🛠 Technical skills and tools I work with
- 🚀 A selection of real-world projects I've contributed to
- 📬 Ways to get in touch

---

## ✨ Features

- ⚡ **Zero dependencies** — pure HTML/CSS/JS, no npm, no bundler
- 📱 **Fully responsive** — optimized for mobile, tablet, and desktop
- 🎨 **Custom dark theme** — with green/blue accent palette
- 🧩 **Data-driven projects** — projects and skills rendered dynamically from JS arrays
- 🎯 **Featured project section** — highlights the nationwide Noor Center platform
- 🖨 **Print-friendly** — clean layout for printing the portfolio
- ♿ **Accessibility-aware** — supports `prefers-reduced-motion`
- 🚀 **Fast** — loads instantly, no external libraries (except Google Fonts)

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, Grid, custom properties, `clamp()`) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | Inter, JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages |

---

## 📂 Project Structure

```

tahazarei777.github.io/
├── index.html       # Main HTML structure
├── style.css        # Responsive styling with CSS variables
├── script.js        # Skills & projects data + dynamic rendering
├── resume.pdf       # Downloadable resume
└── README.md        # This file

```

---

## 🚀 Featured Projects

### ☀️ Solar Panel Management Platform — Noor Center
> **Nationwide** platform for managing and monitoring solar panel systems across distributed installations.
> **Stack:** Django · REST API · IoT

### 📈 MetaTrader Algorithmic Trading Bot
> Python-driven trading bot that retrieves live candlestick data and executes buy/sell trades based on configurable logic.
> **Stack:** Python · Django REST · MetaTrader API

### 🪙 Crypto Trading Platform — Polygon Integration
> Backend system connecting Django to the Polygon network through a JavaScript bridge for crypto asset exchange.
> **Stack:** Django · REST API · Polygon · JavaScript

### 🍽 Notalia — Digital Menu System
> Real-time digital menu and ordering system for cafes and restaurants.
> **Stack:** Django · WebSocket · REST API

### 🏋 Sports Club Management System
> Management platform for member registration, subscriptions, class scheduling, and attendance.
> **Stack:** Django · REST API

---

## 🖥 Run Locally

Clone the repo and open `index.html` — that's it. No build step required.

```bash
git clone https://github.com/tahazarei777/tahazarei777.github.io.git
cd tahazarei777.github.io
```

Option 1 — Open directly:

```bash
open index.html         # macOS
xdg-open index.html     # Linux
start index.html        # Windows
```

Option 2 — Run with a local server (recommended):

```bash
python -m http.server 8000
```

Then visit: http://localhost:8000

---

🌍 Deployment

This site is automatically deployed via GitHub Pages.

Any push to the main branch is published at:

```
https://tahazarei777.github.io
```

No CI/CD, no workflows — GitHub Pages serves the static files directly.

---

🎨 Customization

Want to reuse this template? Here's what you need to change:

1. Update your info in index.html

Search for:

· Mohammad Taha Zarei → your name
· m0mad6955@gmail.com → your email
· tahazarei777 → your GitHub username

2. Edit skills in script.js

```javascript
const skills = [
  { name: "Python", level: "Advanced" },
  // add yours...
];
```

3. Edit projects in script.js

```javascript
const projects = [
  {
    icon: "📈",
    title: "Your Project",
    desc: "Short description...",
    tags: ["Django", "REST API"],
    role: "Backend Developer",
    link: "https://github.com/...",
  },
  // add yours...
];
```

4. Change the color theme

In style.css, edit the :root variables:

```css
:root {
  --bg: #0b0f19;
  --accent: #4ade80;
  --accent-2: #38bdf8;
  /* ... */
}
```

---

📫 Contact

Platform Link
📧 Email m0mad6955@gmail.com
💻 GitHub @tahazarei777
📍 Location Kashan, Isfahan, Iran

---

📄 License

This project is licensed under the MIT License — feel free to fork, modify, and use it as a starting point for your own portfolio.

See LICENSE for details.

---

⭐ Support

If you found this template helpful, consider giving it a star ⭐ — it means a lot!

---

<p align="center">
  <sub>Built with ❤️ and a Django mindset by <a href="https://github.com/tahazarei777">Mohammad Taha Zarei</a></sub>
</p>
