# OrderTypes visual checkpoint

OrderTypes was reviewed as an already-hardened truthful order-system boundary. It explicitly states that trading order types are not enabled and reports no order, price, fill, leverage, margin, risk, or settlement result. It documents that the page does not connect to a market, instrument registry, order book, matching engine, broker, wallet, risk engine, or settlement system and cannot create, validate, route, cancel, fill, or confirm an order. The registered route is `/order-types`.

The page retains only readiness evidence: supported instruments, market-data provenance, precise order and time-in-force semantics, server-side validation, account permissions, buying-power or collateral checks, idempotency, rate limits, matching or venue routing, partial-fill and cancellation handling, audit logs, and independently verified settlement. No trading or financial outcome is inferred.

Files: `order-types-desktop.webp`, `order-types-mobile.png`.

The 390px capture was reviewed for readable unavailable disclosure, responsive market/order/risk boundary cards, safe exchange/derivatives/documentation links, credentials/wallet/collateral warning, and absence of horizontal overflow or fake instruments, quotes, order books, order types, prices, fills, leverage, margin, exposure, fees, slippage, positions, or settlement claims.
