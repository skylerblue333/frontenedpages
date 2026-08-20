# ITServicesPortal visual checkpoint

ITServicesPortal was rewritten as a truthful client-portal readiness boundary. The previous portal displayed an invented client identity, project and ticket records, security activity, reports, uptime, spend, invoices, balances, billing dates, download controls, create-ticket controls, and logout behavior without authenticated organization scope, source-backed records, access controls, privacy, security, payment, or authorization boundaries. Those claims and unsupported actions were removed. A visual verification initially exposed a `Search is not defined` runtime error; the existing Search icon was imported, the production bundle passed, and the registered route `/i-t-services-portal` was reloaded successfully.

No auth check, organization lookup, project query, ticket query, report query, download, invoice query, balance or spend calculation, payment, refund, notification, export, deletion, API request, database read or write, logout mutation, or personal-data operation is read, calculated, displayed, asserted, initiated, or simulated.

Files: `it-services-portal-desktop.webp`, `it-services-portal-mobile.png`.

The 390px capture was reviewed for readable wrapped unavailable disclosure, stacked client-portal cards, stacked engagement/support/report/billing surfaces, portal/privacy/security/financial/regulated-data/authorization warn-and-proceed notice, safe IITR/service/support/financial/privacy/security/evidence/contact links, and absence of horizontal overflow or fake client identity, projects, tickets, reports, uptime, spend, invoices, balances, payments, downloads, support commitments, or production portal claims.
