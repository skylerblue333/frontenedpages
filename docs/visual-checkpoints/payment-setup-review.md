# PaymentSetup visual checkpoint

PaymentSetup was hardened from a generic activation shell with an inert Activate or Deactivate toggle that did not connect a merchant, organization, provider account, test/live environment, credential vault, billing profile, payment method, webhook verifier, setup validation, privacy, or authorization workflow. It was replaced with this explicit payment-configuration readiness boundary. No merchant, credential, secret, provider, billing, method, webhook, environment, setup, or availability state is displayed, entered, stored, transmitted, verified, or mutated from this page. The registered route is `/payment-setup`.

No auth check, provider lookup, credential input, secret storage, environment selection, billing profile update, payment-method setup, webhook registration, validation, API request, database read or write, export, or deletion is read, calculated, displayed, asserted, initiated, or simulated.

Files: `payment-setup-desktop.webp`, `payment-setup-mobile.png`.

The 390px capture was reviewed for readable wrapped unavailable disclosure, stacked payment-configuration readiness cards, stacked merchant/provider/billing/payment-data surfaces, payments/credentials/personal-data/privacy/safety/accessibility/security/compliance/authorization warn-and-proceed notice, safe payment/provider/method/security/privacy links, and absence of horizontal overflow or fake provider connectivity, merchant identity, credentials, billing setup, payment methods, webhook verification, test/live separation, compliance, or privacy claims.
