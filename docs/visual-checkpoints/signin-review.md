# Signin visual checkpoint

Signin was hardened from an unsafe mock-auth flow that accepted email and password, encoded both with base64 into localStorage, claimed successful sign-in, redirected to the dashboard, and displayed demo credentials. That was not authentication. Those operations and claims were removed.

The page documents server-side credential verification, rate limits, anti-abuse controls, generic errors, secure session cookies, MFA/challenges, device/session evidence, revocation/recovery, verified identity and role scope, lockout, audit events, privacy, support, and explicit success/failure/retry states. Files: `signin-desktop.webp`, `signin-mobile.png`.
