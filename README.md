# Moon — Bar & Restaurant

A premium one-page site for **Moon**, a bar and restaurant in Bistupur, Jamshedpur.
Dark, lunar art direction · editorial layout · scroll-driven motion · zero build step.

## Run locally
It's a plain static site — no build needed.

```bash
# any static server works, e.g.
npx serve .
# or
python -m http.server 5173
```
Then open the printed URL.

## Structure
```
index.html            # markup + content
assets/css/style.css  # the lunar design system
assets/js/main.js     # reveal, parallax, nav, starfield
```

## Things to swap in (client placeholders)
- **Photos** — currently tasteful Unsplash stock with graceful dark-gradient fallbacks.
  Replace the `src` URLs in `index.html` (Experience rows + Gallery) with Moon's own photos.
- **Hours** — `12 Noon — 11 PM` is a placeholder (marked with `*`). Confirm and edit in the Visit section.
- **Menus** — both buttons link to the shared Google Drive folder. If you get direct PDF links,
  point "The Kitchen" and "The Bar" at the respective files.

## Wired-in details
- Phone / WhatsApp: +91 92637 83025
- Instagram: @moon_jamshedpur
- Google Maps embed + directions link
- Address: Unite Mall, H2N/52, L Road, Bistupur, Jamshedpur 831001

## Deploy
Static — drop it on Vercel / Netlify, or `vercel deploy`. No config required.
