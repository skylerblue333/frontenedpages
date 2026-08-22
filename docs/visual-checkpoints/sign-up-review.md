# SignUp visual checkpoint

SignUp was hardened from an unsafe client-only flow that accepted credentials in the browser, encoded email and password with base64 into localStorage, claimed account creation and email verification, advertised social signup, and displayed starter SKY4, DOGE, and TRUMP balances without a verified backend. Those operations and claims were removed.

The page documents server-side identity records, duplicate detection, email/phone ownership, password hashing, rate limits, abuse protection, MFA/recovery, secure session cookies, versioned terms/privacy consent, eligibility, retention/deletion, role scope, audit logging, and explicit success/failure/retry states. Files: `sign-up-desktop.webp`, `sign-up-mobile.png`.
