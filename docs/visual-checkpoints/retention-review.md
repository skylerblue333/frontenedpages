# Retention visual checkpoint

Retention was hardened while preserving its authenticated `audienceLockIn` integration for streak, loyalty, badge, quest, fan-level, and activity operations. Explicit `any` casts and fabricated fallback values were removed. The page now renders only validated backend fields, uses truthful loading and error states, avoids example quests and reward promises, and discloses that any SKY4 issuance, NFT, token balance, or financial outcome requires verified ledger, custody, network, tax, anti-abuse, and authorization controls.

The registered route is `/retention`. In the unauthenticated static preview, the page clearly states that sign-in is required and shows no fallback profile, points, streak, reward, or wallet value. The activity mutation remains available only for an authenticated user and reports backend success or failure without simulating local state.

Files: `retention-desktop.webp`, `retention-mobile.png`.
