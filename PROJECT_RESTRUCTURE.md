# Project Restructure Proposal: Stix N Vibes

This document outlines a comprehensive restructuring of the Stix N Vibes codebase to improve maintainability, scalability, and developer experience.

## 1. Directory Structure Overview

```text
StixNVibes/
├── docs/                        # Project documentation (moved from root)
│   ├── BRAND_COPY.md
│   ├── CONTENT_STATUS.md
│   ├── DELIVERABLES.md
│   ├── IMPLEMENTATION_NOTES.md
│   ├── MIGRATION_GUIDE.md
│   ├── SETUP_INSTRUCTIONS.md
│   └── TEMPLATES.md
├── scripts/                     # Tooling and setup scripts
│   ├── setup-copilot-instructions.js
│   ├── setup-copilot-instructions.bat
│   └── setup-dirs.js
├── public/                      # Static assets (not processed by Vite)
│   └── assets/
│       ├── videos/              # Organized video assets
│       └── stickers/            # Raw sticker assets
├── src/
│   ├── assets/                  # Assets processed by Vite (icons, small images)
│   ├── components/              # Modular component architecture
│   │   ├── ui/                  # Atomic/Generic UI components
│   │   │   ├── Logo.jsx
│   │   │   ├── Marquee.jsx
│   │   │   ├── WordsPullUp.jsx
│   │   │   └── AnimatedLetter.jsx
│   │   ├── layout/              # Global layout components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── effects/             # Visual and background effects
│   │   │   ├── BackgroundEffects.jsx
│   │   │   ├── CinematicAmbientBackground.jsx
│   │   │   └── KineticBg.jsx
│   │   └── features/            # Complex, standalone features
│   │       ├── DinoGame3D.jsx
│   │       ├── StickerChaos.jsx
│   │       └── DashboardPreview.jsx
│   ├── pages/                   # Organized by route/domain
│   │   ├── Landing/             # Main Landing Page and its sections
│   │   │   ├── LandingPage.jsx  # Main Entry
│   │   │   └── sections/        # Section-specific components
│   │   │       ├── Hero.jsx
│   │   │       ├── Showcase.jsx
│   │   │       ├── WhyVibes.jsx
│   │   │       ├── SocialProof.jsx
│   │   │       └── FinalCTA.jsx
│   │   ├── Shop/                # E-commerce/Pack routes
│   │   │   ├── StickerPacks.jsx
│   │   │   └── CustomOrders.jsx
│   │   ├── Brand/               # B2B and Collab routes
│   │   │   ├── ForBrands.jsx
│   │   │   └── CustomCollabs.jsx
│   │   └── Info/                # Static informational routes
│   │       ├── OurStory.jsx
│   │       ├── FAQ.jsx
│   │       ├── Inquiries.jsx
│   │       └── NotFound.jsx
│   ├── hooks/                   # Custom React hooks
│   ├── utils/                   # Shared utility functions (moved from lib/)
│   ├── styles/                  # Global styles (App.css, index.css)
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 2. Key Improvements

### Root Cleanup
The root directory is currently crowded with documentation and utility scripts. Moving documentation to `docs/` and scripts to `scripts/` makes the project configuration files (`package.json`, `vite.config.js`, etc.) easier to find.

### Component Categorization
Grouping components by their role (`ui`, `layout`, `effects`, `features`) prevents the `src/components` folder from becoming a flat list of unrelated files.
- **UI:** Reusable, low-level components.
- **Layout:** High-level wrappers.
- **Effects:** Specialized visual-only components (often R3F or Framer Motion heavy).
- **Features:** Complex logic-heavy components.

### Domain-Driven Pages
The `src/pages` directory is currently a mix of full pages and what appear to be sections of the landing page (e.g., `Hero.jsx`, `Showcase.jsx`). 
- **Landing/**: Consolidates the main entry point and its specific sections.
- **Shop/**, **Brand/**, **Info/**: Groups routes by logical domain, making navigation and code-splitting more intuitive.

### Asset Management
- **public/assets/videos/**: Clearly separates large media files.
- **src/assets/**: Intended for smaller assets that benefit from Vite's optimization and hashing.

### Utility Migration
Moving `lib/utils.js` to `src/utils/` follows standard React conventions more closely than a top-level `lib` folder.

## 3. Implementation Steps

1. **Create Directories:** Use the `setup-dirs.js` logic (expanded) to create the new folder structure.
2. **Move Docs & Scripts:** Relocate `.md` and root `.js` files.
3. **Refactor Components:** Move components to their respective sub-folders and update import paths globally.
4. **Organize Pages:** Identify which files are standalone routes vs. landing page sections and move accordingly.
5. **Update Imports:** Standardize imports (ideally using Vite aliases like `@/components/ui/Logo`).
6. **Validate:** Run `npm run build` to ensure no broken imports remain.
