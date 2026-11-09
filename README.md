# Bells University of Technology — Website

<img width="1905" height="1083" alt="Bells University homepage" src="https://github.com/user-attachments/assets/20ab5c60-9d65-4ff0-a2db-44b62d59f73d" />

A university website UI built with **Next.js**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Features

| Feature | Description |
|---|---|
| **AI Chat Assistant** | Powered by Groq (LLaMA 3) — answers student queries about admissions, programs, fees, and placements in real-time |
| **Admission Popup** | Optional admissions prompt (disabled by default) |
| **Hero Section** | Full-screen campus imagery with animated stats counter and Quick Links grid |
| **From the Founder's Diary** | Cinematic founder section with scroll-animated portrait and vision statement |
| **Programs Explorer** | Filterable tabs across Undergraduate / Postgraduate / Doctoral / Certification with detailed modals |
| **Campus Life Slideshow** | Auto-playing image carousel with smooth transitions |
| **Interactive Map** | Embedded Google Map with location details |
| **Testimonials** | Animated alumni carousel with photos |
| **Responsive** | Fully optimised for mobile, tablet, and desktop |
| **Micro-animations** | Framer Motion scroll-triggered animations throughout |
| **Custom Favicon** | Graduation cap SVG icon |

---

## 🎨 Design Philosophy

Three core values guided every design decision:

1. **Clean Minimalism** — Generous whitespace, restrained color usage, and strong typographic hierarchy ensure every element earns its place. Inspired by the best academic sites globally.
2. **Readability & UX** — Inter (sans-serif body) + Playfair Display (serif headings) pairing, soft section backgrounds, and high-contrast text make scanning effortless on any device.
3. **Orthogonality** — The codebase is structured so that each component does one thing well. Layout, sections, and UI utilities are independently changeable without side effects.

### Inspiration Sites Researched
- [JGU](https://jguni.in/) — Clean academic navigation patterns
- [Bates College](https://www.bates.edu/) — Premium academic aesthetics and hero design

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `brand-primary` | `#c0392b` | CTAs, accents, highlights |
| `brand-secondary` | `#0d213b` | Headings, navbar, dark sections |
| `brand-accent` | `#e2b13c` | Gold decorative accents |

### Typography
- **Headings**: *Playfair Display* (Serif) — authoritative and academic
- **Body**: *Inter* (Sans-serif) — modern and highly legible

---

## 📁 Folder Structure

```text
college-landing/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Main page — composes all sections
│   ├── icon.svg            # Custom favicon (graduation cap)
│   └── globals.css         # Design tokens, utility classes
├── components/
│   ├── layout/             # Persistent UI
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/           # Page sections (one concern each)
│   │   ├── Hero.tsx
│   │   ├── Founder.tsx
│   │   ├── About.tsx
│   │   ├── Programs.tsx
│   │   ├── Campus.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── MapSection.tsx
│   └── ui/                 # Floating overlays
│       ├── AdmissionPopup.tsx
│       └── ChatWidget.tsx
└── public/
    └── assets/             # All local images
```

---

## 🚀 Setup & Installation

```bash
# 1. Clone
git clone https://github.com/coderMayank69/College-LandingPage.git
cd College-LandingPage

# 2. Install dependencies
npm install

# 3. (Optional) Add environment variable for chat
echo "NEXT_PUBLIC_GROQ_API_KEY=your_key_here" > .env.local

# 4. Run locally
npm run dev
```

---

## 🖼️ Previews

### Programs Section
<img width="1899" height="1083" alt="Programs" src="https://github.com/user-attachments/assets/edb944dc-bedc-4a70-8595-870bea4d1f28" />
<img width="1923" height="1083" alt="Program Modal" src="https://github.com/user-attachments/assets/f9a7ee92-990c-4900-a5cd-8cf51b335605" />

### Campus Life
<img width="1892" height="1083" alt="Campus" src="https://github.com/user-attachments/assets/20922d38-e883-49b1-ad24-6f4a10845093" />

### Contact / CTA
<img width="1905" height="1083" alt="CTA" src="https://github.com/user-attachments/assets/5f9dd6c5-f716-48c3-8a15-917c8846b93c" />

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **AI Chat**: Groq API (LLaMA 3 8B)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter + Playfair Display)

---

## 📄 License
MIT License. Designed and developed by [Mayank Singh](https://codermayank69.vercel.app).
