# Dubai Design State – Profile Page (React + Vite + Tailwind)

A responsive profile page for a fictional government entity, matching the provided desktop and mobile mockups.  
Includes form validation, mocked image upload with preview, and a toast success message.

## Tech
- React + Vite
- Tailwind CSS
- Heroicons (React)
- react-hot-toast

## Setup
```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev
```

Open the printed localhost URL. Resize the window to see the desktop ↔ mobile layouts or use browser device toolbar to see responsive view..

## Structure
```
src/
  components/
    Navbar.jsx        # Top bar with menu, search, notifications, avatar
    ProfileForm.jsx   # Responsive form + validation + image upload + toast
    Sidebar.jsx   # Responsive form + validation + image upload + toast
  App.jsx
  main.jsx
  index.css
```

## ✅ Requirements Covered
- Mobile-first, responsive two-column desktop layout
- Semantic labels and inputs, accessible names
- Client-side validation (required + email format)
- Mocked image upload with preview (no backend)
- Save button triggers success toast
- Pixel-aligned paddings, colors, radii to the mockups

## 📝 Notes
- Colors use Tailwind defaults plus a custom `brand.blue` that matches the mockup Save button.
- Icons supplied via `@heroicons/react` so no extra assets are needed.
- No persistence by design; this demo focuses on UI/UX and validation.
```

