# Dalu Flooring — React.js (Vite + Tailwind CSS)

> **"Inspired by Nature, Perfected by Living."**  
> Luxury architectural flooring company profile and bespoke surface catalog website.  
> Converted from Laravel to **React 18 + Vite + Tailwind CSS** with full responsiveness, interactive carousels, catalog filtering, and Vercel deployment configuration.

---

## 💎 Design System & Palette

- **Background:** `#E8E6DC` (warm stone sand)
- **Cards & Navbar Surface:** `#FAF7EE` / `#FBF9EC` (refined cream)
- **Primary Brand Color:** `#3d2b1f` (deep espresso walnut)
- **Typography:**
  - Headings: `Instrument Serif` (Google Fonts) with italic highlights
  - Body & UI: `Plus Jakarta Sans` / `Inter`
- **Trademark:** **BENCHCODE™** included on all footers and mobile drawers.

---

## 🚀 Quick Start (Local Development)

```bash
cd daluflooringreactcode

# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

The app will start at `http://localhost:5173/`.

---

## 📦 Production Build & Vercel Deployment

### Build Locally
```bash
npm run build
```
The output will be placed in the `dist/` directory.

### Deploy to Vercel
1. Import the repository `https://github.com/benchcodedev/daluflooring.git` on [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Root Directory: `./` (or `daluflooringreactcode` if deploying from parent mono-repo).
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. `vercel.json` is already included to support client-side routing on all deep links (`/flooring-types`, `/about`, `/projects`, `/quote`).

---

## 📂 Project Structure

```
daluflooringreactcode/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── products/   # 8 high-resolution authentic flooring & marble textures
│       └── projects/   # 6 architectural commission photography assets
├── src/
│   ├── components/
│   │   ├── Footer.jsx      # Global footer with BENCHCODE trademark
│   │   ├── Layout.jsx      # Main layout wrapper
│   │   ├── Navbar.jsx      # Sticky pill navbar with services dropdown
│   │   ├── ProductCard.jsx # Signature product card with dimensions & icons
│   │   └── ScrollToTop.jsx # Automatic scroll restoration on navigation
│   ├── data/
│   │   ├── products.js     # 8 products (marble, oak herringbone, walnut, terrazzo)
│   │   ├── projects.js     # 6 luxury commissions
│   │   ├── services.js     # 5 disciplines with scope of works
│   │   ├── siteConfig.js   # Brand copywriting, contacts, socials
│   │   └── testimonials.js # Verified client reviews
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── QuotePage.jsx
│   │   └── ServiceDetailPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---
Crafted by **BENCHCODE™**
