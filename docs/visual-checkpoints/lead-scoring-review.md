# LeadScoring visual checkpoint

LeadScoring was hardened from a screen that exposed an unauthenticated sign-in pseudo-action and inert New, settings, search, and loading controls without lead identity, consent, source provenance, scoring methodology, calibration, conversion uncertainty, revenue attribution, fairness, privacy, or authorization boundaries. Those unsupported claims and controls were removed. No lead, score, probability, ranking, conversion, revenue, recommendation, or behavioral profile is displayed or calculated from this page. The registered route is `/lead-scoring`.

No auth check, lead query, identity lookup, score calculation, ranking, probability, conversion or revenue attribution, recommendation, profiling, search, settings mutation, API request, database read or write, notification, export, deletion, or personal-data operation is read, calculated, displayed, asserted, initiated, or simulated.

Files: `lead-scoring-desktop.webp`, `lead-scoring-mobile.png`.

The 390px capture was reviewed for readable wrapped unavailable disclosure, stacked lead-analytics cards, stacked provenance/methodology/conversion/privacy surfaces, financial/privacy/profiling/fairness/security/authorization warn-and-proceed notice, safe CRM/analytics/attribution/privacy/security links, and absence of horizontal overflow or fake lead identity, score, probability, ranking, conversion, revenue, recommendation, profiling, fairness, or production analytics claims.

Build note: `pnpm exec vite build` passed after explicitly restoring `allowBuilds.esbuild: true` in `pnpm-workspace.yaml`; the full development server remains unavailable without database configuration, so this checkpoint uses the successful static production preview and does not assert backend availability.
