# Kanamarlapudi Naga Sai Jayram — Premium Personal Portfolio

A custom-designed, editorial, high-performance personal portfolio website for **Kanamarlapudi Naga Sai Jayram** (Jayram), Computer Science Engineering student at SRM University–AP, Full-Stack Developer, and Software Engineer.

Designed with an editorial aesthetic inspired by modern creative developer portfolios (deep charcoal & black backgrounds, warm white typography, restrained electric blue accents, Space Grotesk & Inter typography, and authentic handwritten signature branding).

---

## 🌟 Key Features

1. **Authentic Personal Branding**:
   - **Hero Portrait**: High-resolution authentic photograph integrated into a bespoke editorial portrait frame.
   - **Handwritten Signature**: Real signature (`K.n.S.jayram`) extracted with transparent background processing, featured across the Hero, About, and Contact closeout.
   - **Dynamic Role Cycler**: Fluid entrance and text rotation across Jayram's key focus areas (*Full-Stack Developer*, *Frontend Developer*, *Software Engineering Enthusiast*, *AI/ML Explorer*).
   - **Live IST Clock**: Real-time IST time ticker and status indicator (*Open to Software Engineering Opportunities*).

2. **Editorial Storytelling & About Section**:
   - Academic standing at **SRM University–AP** (CGPA: **9.28 / 10**).
   - Key highlights across Web Development, Cloud & Databases, and Electronic Thermal Physics Research.
   - Core philosophy: *"Build with purpose. Learn continuously. Improve every day."*

3. **Curated Skills Matrix**:
   - Grouped into Programming Languages, Frontend, Backend & Databases, Developer Tools, ANSYS Simulation, and CS Fundamentals.
   - Honest categorization without arbitrary percentage bars.

4. **Featured Projects & Research**:
   - **Microsoft Student Community Web Platform** (React.js, Node.js, MongoDB, Firebase).
   - **CineMates Club Full-Stack Platform** (React.js, Backend APIs, Event Workflows).
   - **Electronic Cooling & Thermal Management Research** (Visually distinct research card for ANSYS simulations, cooling loops, and ML-based prediction).
   - **Interactive Specifications Modal**: Deep dive into architecture, challenges, contributions, and verified repositories.

5. **Verified Timeline & Recognition**:
   - Complete professional internship timeline (*MSC SRMAP*, *KissanShakti*, *CoE Electronic Cooling*, *CineMates Club*).
   - Academic honors (*Dean’s Certificate for Academic Excellence*).
   - Verified certifications (*Google Cloud Generative AI Virtual Internship*, *SQL Bootcamp*).

6. **Contact Section & Direct Dispatch**:
   - Form validation with name, email, subject, and message fields.
   - Direct mail client formatting with fallback copy buttons.
   - Interactive confetti celebration and signature seal: *"Always learning. Always building."*

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 18/19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + Custom Design Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Badges & Code), Instrument Serif (Accents)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Badges
- **Micro-interactions**: Canvas Confetti

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg                       # Custom monogram favicon ("J")
│   └── images/
│       ├── jayram-profile.jpg            # Original portrait
│       ├── jayram-profile-portrait.jpg   # Framed hero crop
│       ├── jayram-profile-mono.jpg       # Editorial monochrome variation
│       ├── jayram-signature.png          # Transparent authentic signature
│       ├── jayram-signature-white.png    # Warm white ink version (dark background)
│       └── jayram-signature-accent.png   # Electric blue ink version
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                    # Sticky blur nav, live clock, mobile drawer
│   │   ├── Hero.jsx                      # Headline, portrait, signature, CTAs, ticker
│   │   ├── About.jsx                     # Editorial story, philosophy, stats
│   │   ├── Skills.jsx                    # Categorized tech badges & icons
│   │   ├── Projects.jsx                  # Project cards, research card, detail modal
│   │   ├── Experience.jsx                # Professional timeline
│   │   ├── Education.jsx                 # SRM University-AP degree & coursework
│   │   ├── Achievements.jsx              # Dean's Certificate & certifications
│   │   ├── Contact.jsx                   # Contact cards, form, signature finale
│   │   ├── Footer.jsx                    # Dynamic copyright & quick navigation
│   │   └── Icons.jsx                     # Dedicated SVG icons
│   ├── data/
│   │   └── portfolioData.js              # Central configuration file for all content
│   ├── App.jsx                           # Main layout composition
│   ├── index.css                         # Custom styles & design tokens
│   └── main.jsx                          # React root mounting
├── index.html                            # SEO, OpenGraph tags, JSON-LD Schema
├── tailwind.config.js                    # Editorial color tokens & fonts
├── vercel.json                           # Vercel deployment rewrite rules
├── netlify.toml                          # Netlify deployment rewrite rules
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (version 18+ or 20+)
- npm or pnpm

### Installation
```bash
# Clone or navigate to the portfolio directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 🏗️ Production Build

To test and compile the production bundle:

```bash
npm run build
```

This generates optimized static files in the `dist/` directory ready for any web host.

---

## 🌐 Deployment Instructions

### 1. Deploying to Vercel
1. Push this repository to your GitHub account (`https://github.com/KNSJAYRAM/portfolio`).
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Keep the default settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. (The included `vercel.json` ensures all routes work seamlessly).

### 2. Deploying to Netlify
1. Go to [Netlify](https://www.netlify.com/) and click **"Add new site" -> "Import an existing project"**.
2. Select your GitHub repository.
3. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy Site**. (The included `netlify.toml` handles routing).

---

## ✏️ How to Customize Your Content

All website content is centrally stored in:
👉 `src/data/portfolioData.js`

### 1. Updating Personal Details or Social Links
Edit `personalInfo` in `src/data/portfolioData.js`:
- Name, headline, status badge, email, phone
- GitHub or LinkedIn URLs

### 2. Adding a New Project
In `src/data/portfolioData.js`, add a new object to the `projectsData` array:
```javascript
{
  id: "new-project",
  title: "Your Project Title",
  tagline: "Short tagline",
  organization: "Organization or Personal",
  role: "Lead Developer",
  period: "2026",
  isResearch: false,
  visible: true,
  description: "Detailed description...",
  highlights: ["Feature 1", "Feature 2"],
  technologies: ["React", "Python"],
  links: {
    github: "https://github.com/KNSJAYRAM/...",
    live: null
  }
}
```

### 3. Replacing Your Photograph or Signature
Place new images in `public/images/`:
- Photograph: `public/images/jayram-profile.jpg`
- Signature: `public/images/jayram-signature-white.png`

### 4. Updating Your Resume
Replace `public/resume.pdf` with your updated resume PDF.

---

## 📜 License & Copyright
© 2026 Kanamarlapudi Naga Sai Jayram. All rights reserved.
