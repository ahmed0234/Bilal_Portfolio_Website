---
name: brand-identity
description: >-
  Provides the single source of truth for the Google Ads Expert portfolio design system, Deep Ocean and Electric Blue color palette, glassmorphism tokens, Poppins and Inter typography, tech stack, and conversion-focused copywriting. Use when generating UI components, styling pages, writing copy, or building sections for the portfolio website.
---

# Google Ads Expert Portfolio — Brand Identity & Design System

**Theme:** Deep Ocean / Electric Blue / Glass  
**Typography:** Poppins (Headings) + Inter (Body & Subheadings)  
**Tone:** Data-driven, ROI-focused, elite performance marketing

This skill defines the visual tokens, design constraints, and technical rules for the Google Ads Expert portfolio website. Strictly adhere to these guidelines to ensure visual consistency and high conversion performance.

---

## Reference Documentation Router

Consult the specific resource files below before creating or modifying UI components, layouts, or copy:

### 1. Visual Design, Palette & Glass Tokens
If you need exact color hex codes (Deep Ocean blues, Electric Cyan energy, Glass highlights), glow values, or radii:
👉 **[`resources/design-tokens.json`](./resources/design-tokens.json)**

### 2. Tech Stack, Tailwind Rules & Components
If you are writing JSX, styling with Tailwind CSS v4, animating with Motion, or structuring portfolio sections (Hero, Case Studies, ROAS Metrics, Audits):
👉 **[`resources/tech-stack.md`](./resources/tech-stack.md)**

### 3. Copywriting, Persona & Case Study Tone
If you are crafting headlines, value propositions, service descriptions, CTA buttons, or client proof points:
👉 **[`resources/voice-tone.md`](./resources/voice-tone.md)**

---

## Quick Reference: Core Color & Font Mapping

| Token Group | Values / Classes | Purpose |
| :--- | :--- | :--- |
| **Canvas Background** | `#020617` (Deepest Navy) / `#030B1C` | Page base canvas |
| **Cards & Glass** | `#06132B`, `#081B3A`, `rgba(255,255,255,0.05)` | Glassmorphic containers |
| **Glass Borders** | `rgba(215, 239, 255, 0.14)` | Card and section outlines |
| **Primary Action** | `#155EEF` (Electric Blue) $\rightarrow$ `#1677FF` | Main CTA buttons & links |
| **Energy Glows** | `#00C2FF`, `#29D9FF`, `rgba(0,194,255,0.45)` | Stat badges, glow shadows |
| **Heading Font** | `Poppins` (`font-poppins`, weights 600-800) | Main titles & hero text |
| **Body Font** | `Inter` (`font-inter`, weights 400-600) | Descriptions, stats, subheadings |
