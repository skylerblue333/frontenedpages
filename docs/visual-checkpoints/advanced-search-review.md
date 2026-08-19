# AdvancedSearch visual checkpoint

## Desktop

The browser-rendered desktop checkpoint shows the upgraded Advanced Search page with a truthful unavailable boundary, explicit search-readiness requirements, evidence cards, privacy disclosure, and action links. No fabricated query, result, ranking, count, or privacy decision is presented.

## Mobile

The first 390px Chromium capture reached the app’s `Loading...` fallback because the lazy route was captured before the module finished rendering. After adding an 8-second virtual-time wait, the route rendered correctly. The reviewed mobile checkpoint shows readable heading and boundary copy, stacked content, and no horizontal overflow in the captured viewport.

## Files

- `advanced-search-desktop.webp`
- `advanced-search-mobile.png` (accepted after delayed recapture and visual review)
