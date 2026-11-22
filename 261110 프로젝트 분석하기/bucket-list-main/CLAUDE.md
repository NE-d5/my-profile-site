# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

No build, lint, or test tooling and no package manifest. Run the app by opening `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000   # then open http://localhost:8000
```

Tailwind is loaded from `cdn.tailwindcss.com`, so styling needs network access.

## Architecture

Vanilla JS, no framework. Two scripts share the global scope:

- `js/storage.js`: `BucketStorage` object literal. The only code that touches `localStorage` (key `bucketList`). Every mutation runs load → modify → save. Nothing is cached in memory; each method reloads from storage.
- `js/app.js`: `BucketListApp` class. Created on `DOMContentLoaded` and assigned to the global `let app`. UI state is `currentFilter` and `editingId`.
- Load order matters: `storage.js` must come before `app.js` in `index.html`.

Data flow: user event → `BucketListApp` handler → `BucketStorage` mutation → `render()`. `render()` calls `updateStats()` and rebuilds the whole list with `innerHTML` from `createBucketItemHTML()`. There is no incremental DOM update, so any new per-item interaction must go through a re-render.

Item buttons call `app.<method>(...)` from inline `onclick` attributes in the template string. That is why `app` must stay a global. Switching to event delegation would remove the dependency.

Item shape: `{ id, title, completed, createdAt, completedAt }`. `id` is `Date.now().toString()`. New items are `unshift`ed to the top of the list.

Styling: Tailwind utility classes in `index.html` handle most layout. `css/styles.css` holds overrides only: filter button states, animations, a 640px breakpoint for item layout, and a `prefers-color-scheme: dark` block that overrides Tailwind classes by name (`.bg-white`, `.text-gray-800`, `.text-gray-600`, `.border-gray-300`). Renaming those classes in the HTML silently breaks dark mode.

## Known pitfalls

- `escapeHtml` uses `textContent` → `innerHTML`, which does not escape `"`. Titles are interpolated into double-quoted `onclick` attributes, so a `"` in a title breaks the markup. The real fix is event delegation with `data-id` instead of inline handlers.
- README is out of date. The folder is `bucket-list-main`, not `bucket-list`. The `assets/` folder it lists does not exist. `createdAt` is an ISO timestamp, not a date string. Trust the code over the README.
