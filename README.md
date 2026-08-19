# 🚀 Shemaiah Paramesvaran — Portfolio Website

A personal portfolio built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, **GSAP**, and **Motion / Framer Motion**. Features interactive 3D elements, custom resume viewing & doodling, blog posts, and a live contact form.

---

## ✨ Key Features

- ⌨️ **Interactive 3D Keyboard** — Interactive keycaps representing skills with hover and click effects
- 📄 **Interactive Resume Page** — Built-in document viewer with pencil doodle layer & direct PDF download
- 🌌 **Space Theme Aesthetic** — Dark mode palette, glowing particle animations, and smooth scrolling
- 📬 **Formspree Contact Integration** — Direct message delivery configured to `https://formspree.io/f/xeajvepa`
- 📱 **Fully Responsive Layout** — Optimized performance across mobile, tablet, and desktop viewports

---

## 📁 Repository Structure

```text
shemaiahnewweb/
├── public/                         # Static assets & public files
│   ├── Shemaiah_Paramesvaran_Resume.pdf
│   └── assets/                     # Logos, screenshots & 3D keyboard scene
├── src/
│   ├── app/                        # Next.js App Router pages & API endpoints
│   │   ├── page.tsx                # Portfolio homepage
│   │   ├── resume/                 # Interactive resume viewer
│   │   ├── blogs/                  # Blog section
│   │   └── api/                    # API routes (contact form & analytics)
│   ├── components/                 # UI components & section modules
│   │   ├── sections/               # Hero, Experience, Projects, Skills, Contact
│   │   ├── ui/                     # Reusable design components & buttons
│   │   └── ContactForm.tsx         # Contact form component
│   ├── content/                    # MDX blog posts
│   ├── data/                       # Configs, constants, experience & projects
│   ├── hooks/                      # Custom React hooks
│   └── lib/                        # Utility functions & helpers
├── package.json                    # Dependencies & scripts
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── LICENSE                         # MIT License
└── README.md                       # Project documentation
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animations** | GSAP, Motion / Framer Motion, Lenis Smooth Scroll |
| **3D Elements** | Spline Runtime |
| **Form Delivery** | Formspree |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shemwild/shemaiahnewweb.git
cd shemaiahnewweb
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
