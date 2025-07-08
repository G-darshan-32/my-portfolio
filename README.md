
# 💼 Balaji S - Portfolio

Welcome to my **personal portfolio website**, built using **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.  
This site showcases my journey as a Software Developer & Data Scientist — highlighting my projects, skills, certifications, and contact info in a clean, elegant layout.

---

## 🚀 Live Demo

🔗 [Click to View My Portfolio](https://balaji-29-s.github.io/my-resume/)

---

## 🖼️ Features

- ⚡ Lightning-fast with Vite
- 🌙 Light/Dark Theme with toggle and saved preference
- 💼 Dynamic project showcase with GitHub integration
- 📜 Certification cards with clickable links
- 🎬 Smooth animations with Framer Motion
- 📱 Fully responsive for mobile and desktop

---

## 🛠️ Tech Stack

- **Frontend**: React + Tailwind CSS + Vite
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages

---

## 📁 Project Structure

```bash
my-resume/
├── src/
│   ├── components/        # All reusable sections
│   ├── media/             # Assets like resume, certificates, images
│   ├── App.jsx            # Main layout
│   └── main.jsx           # Entry point
├── index.html             # Root HTML file
├── vite.config.js         # Vite configuration
├── package.json
└── README.md
````

---

## 🧑‍💻 Getting Started

### 📦 Prerequisites

* Node.js ≥ 16.x
* npm
* Git

---

### 🚀 Local Development

```bash
git clone https://github.com/balaji-29-s/my-resume.git
cd my-resume
npm install
npm run dev
```

Your site runs at:
📍 `http://localhost:5173/`

---

## 📤 Deploying to GitHub Pages

### 1. Set correct base in `vite.config.js`

```js
export default defineConfig({
  base: '/my-resume/',
  plugins: [react()],
});
```

### 2. Add deploy scripts to `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. Deploy

```bash
npm install --save-dev gh-pages
npm run deploy
```

Deployed at 👉 [https://balaji-29-s.github.io/my-resume/](https://balaji-29-s.github.io/my-resume/)

---

## ✍️ Customization

### Update Page Title

Edit `index.html` in root:

```html
<title>Balaji S - Portfolio</title>
```

### Add Your Projects

Update `src/components/Projects.jsx`:

```js
{
  title: "Your Project Title",
  description: "Short description...",
  github: "https://github.com/your/project"
}
```

---

## 📬 Contact

For collaborations, feedback, or hiring:

* 📧 Email: [bs8315@srmist.edu.in](mailto:bs8315@srmist.edu.in)


---

## 📜 License

Licensed under [MIT License](LICENSE)

---

### ✨ Thank You for Visiting!



