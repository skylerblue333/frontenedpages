# AccountSettings visual checkpoint

AccountSettings was upgraded from client-only fake account behavior: localStorage email loading, an unsupported “Email verified” claim, password and 2FA controls without a server contract, notification toggles with local state and fake success toasts, and account deletion by clearing browser storage. It now requires a secure OAuth sign-in check and clearly reports that account identity, credentials, sessions, MFA, notifications, export, retention, and deletion services are unavailable or disabled. No account mutation is performed.

Files: `account-settings-desktop.webp`, `account-settings-mobile.png`.

The 390px capture was reviewed for readable signed-out disclosure, stacked account/security/notification/deletion cards, visible security/privacy/contact links, sensitive-data warning, and absence of horizontal overflow.
