# ShoppingCart visual checkpoint

ShoppingCart was hardened from a generic authenticated CRUD shell with unsupported Sign In, New, Search, Settings, loading, and empty-data behavior. No cart, item, product, variant, inventory, price, discount, tax, shipping, recommendation, checkout, order, payment, address, customer, privacy, or authorization backend was established. Those controls and claims were removed.

The page documents authenticated cart ownership, item/variant/quantity validation, inventory reservation, durable persistence, price and currency provenance, discounts/taxes/fees/shipping, rounding/expiration, order creation, payment authorization/3DS/fraud/idempotency, refund semantics, address protection, fulfillment, notification, privacy, retention/deletion, auditability, role scope, and honest operational states. Files: `shopping-cart-desktop.webp`, `shopping-cart-mobile.png`.
