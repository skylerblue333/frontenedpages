# ErrorDialog visual checkpoint

ErrorDialog was upgraded from a generic page with an activate/deactivate toggle that did not represent a real error or operation state. It now states that it has no request, action, error code, source, user context, diagnostic record, retry policy, or recovery evidence to inspect, and provides only safe home/back/contact links.

No dialog dismissal, retry, sign-in, API request, database read or write, error lookup, log access, recovery action, redirect, mutation, notification, or sensitive-data operation is read, calculated, displayed, asserted, initiated, or simulated.

Files: `error-dialog-desktop.webp`, `error-dialog-mobile.png`.

The 390px capture was reviewed for readable error-dialog disclosure, safe home/back/contact navigation, error/diagnostic boundary, sensitive-action warn-and-proceed notice, and absence of horizontal overflow.
