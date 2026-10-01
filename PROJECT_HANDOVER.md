# ByteSpace Frontend Assessment – Project Briefing & Handover Guide

> **Author / Developer:** Md. Rakibul Islam  
> **Repository:** [github.com/rakibutsho/ByteSpace](https://github.com/rakibutsho/ByteSpace)  
> **Figma Design Link:** [ByteSpace New Check website](https://www.figma.com/design/FbnB1urxerPlO8spMiT3xd/ByteSpace-New-Check-website--Copy-?node-id=0-1&p=f&t=uitupGoPWBDQFczR-0)

---

## 1. Project Context & Assessment Rules

This project is a competitive **Frontend Assessment** evaluated among ~20 developers.

### Scope Requirements:
1. **Landing Page (Required - Mandatory):**
   - Implement the complete landing page from the Figma design pixel-perfectly.
   - Must be fully responsive across mobile, tablet, and desktop viewports.
2. **Login and Signup Pages (Bonus / Extra Credit):**
   - Implement split-screen visual auth pages for extra credit.
   - Utilize existing custom boilerplate components (`MyFormWrapper`, `MyFormInputText`, `MyFormInputPassword`, `MyFormCheckbox`).
3. **Git & Branching Rules (Strictly Enforced):**
   - **Never commit directly to `main` or `master`.**
   - Work on a dedicated feature branch (`feature/byte-space-ui`).
   - Create a Pull Request (PR) from the feature branch into `main`.
   - Maintain clean, descriptive commit messages.
   - Repository must remain **Public** for evaluation.
4. **Deployment Rules:**
   - Deploy to Vercel.
   - Verify that the live production link is publicly accessible with no build errors or broken assets.

---

## 2. Tech Stack & Environment Architecture

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`)
- **Animation & Icons:** `motion` (`motion/react`), `lucide-react`, `@hugeicons/react`
- **State & Form Management:** Redux Toolkit + Redux Persist, `react-hook-form`
- **UI Primitives:** Radix UI (`@radix-ui/react-dialog`, `@radix-ui/react-slot`), `sonner` for toast notifications
- **Development OS Environment:**
  - Running on Windows with **WSL2** (`/mnt/c/Users/rakib/Desktop/Projects/next-ui-boilerplate`).
  - Node.js & npm are installed inside WSL.

---

## 3. Figma Design Audit & Tokens

- **Brand Name:** ByteSpace (EdTech & Learning Management Platform)
- **Primary Color:** Electric / Royal Blue (`#004BE4` / `#0047FF`)
- **Accent Color:** Neon Lime / Cyber Lemon (`#CCFF00`)
- **Neutral Background:** Clean White (`#FFFFFF`) with subtle grid overlay patterns on hero & banners
- **Dark Background:** Deep Navy / Slate (`#0A0F1D`) for Footer and community cards
- **Key Visual Elements:**
  - Hero Student cutout (`/images/hero-student.png`)
  - 3D Doodles (`/images/doodles/`):
    - `neon-spiral.svg`
    - `white-sprial-small.svg`
    - `white-circel.svg`
    - `NeonCone.svg`
    - `whiteTriangle.png`
    - `white-sprial.svg`
    - `neonCircel.png`

---

## 4. Components Architecture & Structure

```text
src/
├── app/
│   ├── (authLayout)/
│   │   └── auth/
│   │       ├── layout.tsx
│   │       ├── signin/page.tsx   # Split-screen SignIn with MyFormWrapper
│   │       └── signup/page.tsx   # Split-screen SignUp with MyFormWrapper
│   ├── (commonLayout)/
│   │   ├── layout.tsx            # Wraps Navbar + Children + Footer
│   │   └── page.tsx              # Renders <Home />
│   ├── globals.css               # Tailwind CSS v4 setup & theme variables
│   └── layout.tsx                # Root layout with fonts, Redux, & Sonner
├── components/
│   ├── common/
│   │   ├── form/
│   │   │   ├── MyFormWrapper.tsx        # FormProvider wrapper
│   │   │   ├── MyFormInputText.tsx      # Controlled input
│   │   │   ├── MyFormInputPassword.tsx  # Controlled password with eye toggle
│   │   │   └── MyFormCheckbox.tsx       # Controlled checkbox
│   │   ├── Navbar/
│   │   │   ├── Logo.tsx                 # Reusable ByteSpace Logo (light/dark)
│   │   │   └── Navbar.tsx               # Transparent header with mobile drawer
│   │   └── Footer/
│   │       └── Footer.tsx               # Modern multi-column dark footer
│   └── home/
│       ├── Home.tsx                     # Main landing page orchestrator
│       ├── HeroSection.tsx              # Hero with 3D doodles, search, & 3 cards
│       ├── PartnerBanner.tsx            # Trust logos banner
│       ├── TopCoursesSection.tsx        # Filterable courses with category pills
│       ├── CourseCard.tsx               # Reusable course card component
│       ├── WhyChooseUsSection.tsx       # 4-card feature highlights
│       ├── CommunityStatsSection.tsx    # 50k+ student stats banner
│       └── TestimonialsSection.tsx      # Student reviews & ratings
```

---

## 5. Important Bug Fixes & Gotchas

### Issue 1: WSL2 `Bus error` with Turbopack and React Compiler
- **Symptom:** Next.js 16 crashed on `npm run dev` and `npm run build` with `Bus error` in WSL.
- **Cause:** Turbopack and experimental React Compiler attempt `mmap` shared-memory operations across the Windows WSL2 `/mnt/c/` filesystem bridge (9P filesystem).
- **Resolution Applied:**
  1. Updated `package.json` scripts to use Webpack mode:
     ```json
     "dev": "next dev --webpack",
     "build": "next build --webpack"
     ```
  2. Set `reactCompiler: false` in `next.config.ts`.
  3. Added `images.unsplash.com` to `remotePatterns` in `next.config.ts` for course and testimonial photos.

---

## 6. Git Workflow & Deployment Checklist

### Current Branches:
- `main`: Default branch on GitHub.
- `feature/byte-space-ui`: Current active working branch containing all code.

### Commands to Sync & Push:
```bash
# In WSL terminal:
git add .
git commit -m "feat: implement ByteSpace landing page and auth pages with responsive components"
git push -u origin feature/byte-space-ui
```

### Pull Request & Vercel Steps:
1. Open PR: Target `main` &larr; Source `feature/byte-space-ui`.
2. Connect repo on Vercel:
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Verify public URL displays both `/` (landing page) and `/auth/signin` & `/auth/signup`.
