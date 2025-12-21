# Portfolio Website - AI Agent Instructions

## Architecture Overview

This is a **single-page portfolio website** built with React 19, Vite, and Tailwind CSS v4. The app is **dark-theme only** by design—`ThemeContext.jsx` provides a theme context but `isDark` is always `true` and `toggleTheme` is a no-op.

**Core structure:**

- `App.jsx`: Single-page layout with sequential sections (Hero → About → Skills → Experience → Projects → Blog → BeyondCode → Contact → Footer)
- All sections are mounted simultaneously; navigation uses smooth scroll to section IDs
- `ThemeProvider` wraps the app but enforces dark mode only

## Critical Development Workflows

### Local Development

```bash
npm run dev        # Vite dev server on http://localhost:5173
npm run build      # Production build
npm run preview    # Preview production build locally
```

### Deployment

- **Production**: Deployed on Vercel (configured via `vercel.json` for SPA routing)
- **Alternative**: GitHub Pages via `npm run deploy:gh` (builds with base path `/Portfolio/`)
- **Important**: `vite.config.js` has `base: "./"` for Vercel. Change to `"/Portfolio/"` for GitHub Pages

## Project-Specific Conventions

### Animation System

All animations use **Framer Motion** with centralized variants in `src/utils/animations.js`:

- Export reusable animation objects: `fadeInUp`, `fadeInLeft`, `containerVariants`, `itemVariants`, etc.
- Components import these and spread them as motion props: `<motion.div {...fadeInUp}>`
- Custom hook `useScrollAnimation()` handles scroll-triggered animations

**Example:**

```jsx
import { fadeInUp, containerVariants } from "../utils/animations";
<motion.div variants={containerVariants} initial="hidden" animate="visible">
```

### Custom Hooks Pattern

All hooks live in `src/hooks/index.js` and are exported as named exports:

- `useIntersectionObserver(threshold)` - scroll visibility detection
- `useScrollPosition()` - current scroll position
- `useTypingAnimation(strings, typingSpeed, pauseDuration)` - typewriter effect
- Import: `import { useTypingAnimation } from "../hooks";`

### Data Management

**Static data** is centralized in `src/data/`:

- `projects.js`: Exports `projectsData` array, `categories`, `technologies`
- `blogs.js`: Exports `blogsData` array with full blog content embedded
- Project images: Mix of external URLs (Unsplash) and local paths (`/images/`)
- **Important**: Public assets go in `public/` (not `src/assets/`). Vite serves them from root in dev/prod

### Component Patterns

**Image Loading:**
All components with images implement loading states:

```jsx
const [imageLoaded, setImageLoaded] = useState(false);
const [imageError, setImageError] = useState(false);

<img
  onLoad={() => setImageLoaded(true)}
  onError={() => setImageError(true)}
  className={imageLoaded ? "opacity-100" : "opacity-0"}
/>;
```

Show placeholder (gray background + icon) while loading, fallback on error.

**Section IDs:**
Every major section component has an `id` attribute for scroll navigation:

- Hero: `#home`, Projects: `#projects`, Contact: `#contact`, etc.
- Navigation uses `document.getElementById('section')?.scrollInView({ behavior: 'smooth' })`

**Styling:**

- Tailwind CSS v4 via `@tailwindcss/vite` plugin
- Color scheme: Green/emerald gradients (`from-green-400 to-emerald-500`) as brand color
- Background: Always black (`bg-black`)
- Glass morphism: `backdrop-blur-sm` with transparent borders

## Integration Points

### External Services

1. **Web3Forms** (Contact form):

   - `Contact.jsx` submits to `https://api.web3forms.com/submit`
   - Requires `access_key` - currently placeholder `"YOUR_ACCESS_KEY_HERE"`
   - Free service, get key at web3forms.com

2. **External Images**:

   - Unsplash CDN for stock images
   - Local images in `public/images/`: `athletic.jpg`, `convo-screenshot.png`, `nasa-screenshot.png`

3. **Resume Downloads**:
   - PDFs stored in `public/`: `PSRESUME.pdf`, `PSRESUME2.pdf`
   - Download logic in `Hero.jsx`: Creates temporary `<a>` element, triggers download, removes element

### SEO & Meta Files

- `public/robots.txt`, `public/sitemap.xml` for search engines
- `public/google9ffcc115dd2cadc7.html` - Google Search Console verification

## Common Gotchas

1. **Image Paths**: Use `/images/file.jpg` (not `./images/` or `src/assets/`) for images in `public/`
2. **Base Path**: Remember to toggle `vite.config.js` base between `"./"` (Vercel) and `"/Portfolio/"` (GitHub Pages)
3. **Dark Theme**: Don't implement light mode—this is intentionally dark-only
4. **Animations**: Always use `motion.*` components from framer-motion, not raw HTML elements when animations are needed
5. **Scroll Behavior**: HTML has `scroll-behavior: smooth` in CSS, no need for scroll libraries

## Adding New Content

**New Project:**

1. Add object to `projectsData` in `src/data/projects.js`
2. Required fields: `id`, `title`, `description`, `image`, `tags`, `category`, `status`, `year`
3. Add screenshot to `public/images/` if local image

**New Blog Post:**

1. Add object to `blogsData` in `src/data/blogs.js`
2. Content is markdown string in `content` field
3. Use `excerpt` for preview, `readTime` for display

**New Section:**

1. Create component in `src/components/`
2. Import and add to `App.jsx` between existing sections
3. Add section `id` for navigation
4. Update `Navbar.jsx` if nav link needed

## Tech Stack Summary

- **React 19** (latest features, concurrent rendering)
- **Vite 7** (build tool, fast HMR)
- **Tailwind CSS v4** (via Vite plugin, not PostCSS)
- **Framer Motion 12** (animations)
- **Lucide React** (icon library, prefer over heroicons/fontawesome)
- **ESLint 9** (flat config in `eslint.config.js`)
