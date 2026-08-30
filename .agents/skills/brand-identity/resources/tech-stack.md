# Preferred Tech Stack & Implementation Rules

When generating code, pages, or UI components for this Google Ads Expert portfolio, you **MUST** strictly adhere to the following technology stack and design system.

---

## Core Stack
* **Framework:** Next.js (App Router, React 19, TypeScript)
* **Styling Engine:** Tailwind CSS v4 (Mandatory. Dark Deep Ocean aesthetic by default)
* **Motion & Micro-interactions:** Motion (`motion/react` or `motion`)
* **Component Primitives:** Tailwind utility compositions
* **Icons:** Lucide React (`lucide-react`) & React Icons (`react-icons`)

---

## Visual Design & Theme: Deep Ocean / Electric Blue / Glass

### 1. Color System Application
* **Canvas / Main Background:** `#020617` (Deepest Navy) / `#030B1C` (Midnight Navy).
* **Card & Section Containers:** `#06132B` (Deep Ocean Navy) or `#081B3A` (Dark Blue) with subtle glass borders `rgba(215, 239, 255, 0.14)`.
* **Primary Interactive Elements:** `#155EEF` (Primary Electric Blue) with hover state `#1677FF`.
* **Energy / Accents / Badges:** `#00C2FF` (Cyan Blue) / `#29D9FF` (Bright Cyan).
* **Text Contrast:**
  - **Headings & Metric Numbers:** `#FFFFFF` (Pure White) or `#F8FBFF` (Near White).
  - **Body Copy:** `#E5E7EB` (Cool Light Gray).
  - **Muted Descriptions & Captions:** `#94A3B8` (Slate Gray).

### 2. Glassmorphism & Glow Tokens
* **Glass Card Pattern:**
  - Background: `rgba(255, 255, 255, 0.05)` or `bg-slate-900/60`
  - Backdrop Blur: `backdrop-blur-md`
  - Border: `border border-sky-200/15` (`rgba(215, 239, 255, 0.14)`)
  - Hover Highlight: `hover:border-cyan-400/30 transition-all duration-300`
* **Glow Energy Effects:**
  - Primary CTA Glow: `shadow-[0_0_25px_rgba(0,140,255,0.35)]`
  - Electric Cyan Glow: `shadow-[0_0_35px_rgba(0,194,255,0.45)]`
  - Subtle Section Glow: Radial gradients with `rgba(21, 94, 239, 0.20)`

---

## Typography Hierarchy Rules

* **Main Headings (`h1`, `h2`, `h3`, Hero titles):**
  - **Font:** `Poppins` (`font-poppins`)
  - **Weights:** Semibold (600), Bold (700), or Extrabold (800)
  - **Tracking & Leading:** Tight letter tracking (`tracking-tight`) with prominent contrast.
* **Subheadings, Body, Labels, & Metrics (`p`, `span`, `button`, data points):**
  - **Font:** `Inter` (`font-inter`)
  - **Weights:** Regular (400), Medium (500), or Semibold (600)
  - **Leading:** Relaxed line-height for readability (`leading-relaxed`).

---

## Component & Section Guidelines (Google Ads Expert)

1. **Layout & Container Width:**
   - Always use full width (`w-full`) for sections and page wrappers.
   - **Do NOT constrain with `max-w-7xl`** or narrow container widths.
   - Keep sections fluid across the entire screen width with gentle horizontal padding for breathing room (e.g., `px-4 sm:px-6 md:px-8 lg:px-12`).
2. **Hero Section:**
   - Bold Poppins value proposition focused on high-ROAS Google Ads management, scalable client acquisition, and verified ROI.
   - High-contrast CTA with electric glow effect.
   - Live metrics summary strip (e.g., "$10M+ Ad Spend Managed", "4.8x Avg ROAS", "150+ Campaigns Scaled").
3. **Case Studies & Proof of Performance:**
   - Glassmorphic stat cards showcasing before/after ROAS, CPA reduction, and revenue growth.
4. **Services Breakdown:**
   - Search Ads, Performance Max (PMax), YouTube Ads, Retargeting & Tracking Audits.
5. **Interactive Audit / Lead Capture:**
   - Clean, conversion-optimized consultation / audit booking card.
6. **Motion Guidelines:**
   - Smooth entrance reveals (`opacity: 0, y: 20` $\rightarrow$ `opacity: 1, y: 0`).
   - Staggered card displays and hover scaling (`hover:scale-[1.02]`).

---

## Forbidden Patterns
* Do NOT use restrictive container widths like `max-w-7xl` or boxed layouts; keep the design full-width with light horizontal padding.
* Do NOT use light mode by default; the brand identity is an immersive Deep Ocean dark theme.
* Do NOT use generic purple or warm-toned gradients unless specifically serving as a secondary contrast accent.
* Do NOT use un-styled borders; always use glass borders (`rgba(215, 239, 255, 0.14)`).
* Do NOT mix arbitrary fonts; stick exclusively to `Poppins` for headings and `Inter` for body.
