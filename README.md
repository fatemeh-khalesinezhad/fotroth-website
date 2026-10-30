# 📸 FOTROTH Visual House v1.4.0

*A premium, cinematic digital platform for a luxury photography & creative direction collective.  
Featuring museum-style exhibition wings, advanced scroll-triggered animations, and full bilingual (EN/FA) support.*

![FOTROTH Interface Preview](./assets/preview.webp)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](#)
[![Lenis](https://img.shields.io/badge/Lenis-000000?style=for-the-badge&logo=javascript&logoColor=white)](#)

## 📖 Overview

**FOTROTH** is not just a portfolio; it's a **Visual House**. Built as a fully client-side Multi-Page Architecture (MPA), it serves as the digital home for photographers and art directors **Amir Moghadam** and **Mohammad Karimi**. 

The platform moves away from traditional grid portfolios, instead presenting commercial and fine-art masterworks through **8 curated Exhibition Wings**. Every interaction—from the custom luxury cursor to the ambient studio soundscapes—is designed to feel expensive, deliberate, and cinematic.

## 🎥 Demo Video

*(Click the image below to watch the full interactive experience)*

[![FOTROTH Video Demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

## ✨ Features

### 🎬 Cinematic Visuals & Motion
- **Lenis Smooth Scroll** integrated seamlessly with **GSAP ScrollTrigger** for buttery-smooth page transitions.
- **Cinematic Hero Slider** with auto-advancing full-screen imagery.
- **Ambient Soundscape** (Web Audio API) that persists across pages and fades in/out based on user interaction.
- **Custom Luxury Cursor** with contextual text (e.g., "VIEW", "ENTER WING").
- **Camera Viewfinder Overlay** (toggleable HUD) with dynamic camera settings display.

### 🖼️ Museum-Quality Collections
- **8 Exhibition Wings**: Cosmetics, Foods, Industrial, Architecture, Portrait, Products, and more.
- **Masonry Grid Layout** dynamically generated from a centralized data store.
- **Full-Screen Lightbox** with technical metadata (Optics, Lighting Architecture, Client) and thumbnail navigation.
- **Image Protection Layer** to deter casual downloading and right-click saving.

### 🌐 Full Bilingual Architecture (EN / FA)
- **Native RTL Support** with custom typography (Vazirmatn / Amiri) for the Persian language.
- **Instant Language Switcher** without page reloads.
- **State Persistence**: Theme (Dark/Light) and Language preferences are saved in `localStorage`.

### 🎓 Masterclass & Mentorship
- Exclusive photography academy programs.
- Dynamic **Admission Modal** with form validation and `mailto:` backend integration.
- **The Collective**: Dossier modals for Amir Moghadam and Mohammad Karimi, featuring their real biographies, commercial credits, and expertise.

### 📝 Editorial Journal
- **Behind-the-Scenes (BTS)** articles documenting the grueling process of industrial and culinary photography.
- Slide-out **Drawer Interface** for an immersive reading experience.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Core** | HTML5, CSS3 (Custom Variables, Flexbox/Grid), Vanilla JavaScript (ES6+) |
| **Animation** | GSAP 3.12, ScrollTrigger |
| **Scrolling** | Lenis Smooth Scroll |
| **Icons** | Lucide Icons |
| **Audio** | HTML5 Audio + Web Audio API (for camera shutter synth) |
| **Fonts** | Google Fonts (Playfair Display, Syne, Vazirmatn, Amiri) |
| **Architecture** | Modular Data Layer (`/data/*.js`) acting as a mock API/CMS |

## 🚀 Installation & Setup

This project is completely **frontend-only** (No Node.js, No PHP, No Database required to run).

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/fotroth-website.git
