# SKYCOIN4444 Visual Checkpoint Index

This index records only screenshots that were actually rendered and reviewed. A screen is not marked visually complete when a capture shows a lazy-loading fallback or when an authenticated internal state could not be verified.

| Screen | Desktop | Mobile | Review status | Integration boundary |
|---|---|---|---|---|
| AdvancedSearch | `docs/visual-checkpoints/advanced-search-desktop.webp` | `docs/visual-checkpoints/advanced-search-mobile.png` | Reviewed at desktop and 390px mobile | Search backend, indexes, ranking, permissions, privacy, and audit integrations are unavailable and explicitly not claimed. |
| CashFlowAnalysis | `docs/visual-checkpoints/cash-flow-analysis-desktop.webp` | `docs/visual-checkpoints/cash-flow-analysis-mobile.png` | Reviewed unauthenticated access state at desktop and 390px mobile | Financial data is not exposed without verified authentication and connected financial integrations. |

## Capture notes

The application initially failed to start because the installed `cookie` package exposes `parseCookie`, not `parse`; both server imports were corrected. The full server still requires a configured database connection in this sandbox, so visual capture uses the frontend-only Vite renderer. The frontend production bundle now completes with warnings about the analytics placeholder and resizable-panel API compatibility; those warnings remain separate follow-up hardening items.
