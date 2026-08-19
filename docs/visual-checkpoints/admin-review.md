# Admin visual checkpoint

Admin was repaired from a signed-out runtime crash caused by `getLoginUrl()` receiving incomplete URL configuration. The previous route also queried platform and moderation data, defaulted to unsupported uptime and version values, displayed user and post counts, exposed AI moderation accuracy, and rendered untyped moderation logs. It now renders safely with a secure OAuth sign-in action and a truthful admin-readiness boundary. No administrator role, platform statistic, health result, version, moderation decision, log, or privileged mutation is exposed.

Files: `admin-desktop.webp`, `admin-mobile.png`.

The 390px capture was reviewed for readable signed-out disclosure, stacked admin/health/moderation/audit cards, visible security/audit/contact links, server-enforcement warning, and absence of horizontal overflow.
