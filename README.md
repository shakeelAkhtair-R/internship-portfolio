# Shakeel Akhtiar — Internship Portfolio

A premium academic internship portfolio website built with React, Vite, and Tailwind CSS. It documents a teaching internship in English grammar at The Pioneers School and College, Jamshoro, as part of the BS English — Applied Linguistics programme.

## Features

- Single-page portfolio with hash-based navigation
- 12 sections: Overview, Student Profile, Internship Placement, Learning Objectives, Teaching Activities, Reflective Journal, Daily Logbook, Weekly Log, Evidence & Documents, Supervisor Recognition, Final Reflection, and Contact
- Responsive design (desktop sidebar, mobile slide-out menu)
- Accessible navigation with active section tracking
- Internship progress tracker (67 of 80 hours)
- Five weekly reflective journal entries with expandable cards
- Document download buttons for PDFs
- Google Drive link to supporting documents
- Supervisor recognition section
- Contact footer with email and WhatsApp links
- Reduced-motion support

## Files You Need to Add

After the website is generated, add these files yourself:

1. **Student photo:** Place a photo at `public/images/student-photo.jpg`
   - If missing, an elegant placeholder with the initials "SA" is shown.

2. **Daily internship log PDF:** Place the file at `public/documents/daily-log.pdf`
   - If missing, a placeholder message is shown instead of the download button.

3. **Weekly reflective log PDF:** Place the file at `public/documents/weekly-log.pdf`
   - If missing, a placeholder message is shown instead of the download button.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build outputs to `dist/`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch — the included workflow (`.github/workflows/deploy.yml`) will build and deploy automatically.

The site uses relative base paths (`base: './'`) and hash-based navigation, so it works correctly from any repository name without additional configuration.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React icons
- TypeScript
