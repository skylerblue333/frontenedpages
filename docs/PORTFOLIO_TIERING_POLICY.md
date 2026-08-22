# SKYCOIN4444 portfolio tiering policy

The portfolio will be made credible by assigning each repository one honest role. The goal is not to inflate the repository count or force every experiment to pretend to be a product. A repository earns a higher tier through executable evidence: a clear responsibility, reproducible installation, passing typecheck/build/tests, a documented runtime entrypoint, security boundaries, and a real integration contract.

## Tiers

| Tier | Meaning | Minimum evidence | Required disposition |
|---|---|---|---|
| Core platform | A user-facing or shared infrastructure product that other components depend on | Reproducible build, integration tests, documented API, persistence/auth boundary where required, CI success, deployment evidence or explicit local-only status | Maintain and expand deliberately |
| Product component | A focused service, client, library, or domain module with one concrete responsibility | Executable entrypoint, typed contract, unit/integration tests, documented limitations, CI validation | Keep and integrate through contracts |
| Research or experiment | A prototype, exploration, design study, or incomplete implementation | Honest README, explicit non-production label, reproducible checks where possible | Keep only if it informs a roadmap; otherwise archive |
| Archive | Duplicate, generated, placeholder-heavy, abandoned, or superseded work | Repository status note and preservation of history | Stop adding features; link to the canonical successor |

## Current evidence-based assignments

| Repository | Provisional tier | Evidence and limitation |
|---|---|---|
| `TS-Express-API` | Product component | Typed file-backed record API with `/health`, `/ready`, create/list/read routes, eight passing local tests, successful GitHub Actions, OpenAPI contract, and tracked-dependency cleanup. It is not yet authenticated or database-backed. |
| `frontenedpages` | Product component | Large frontend source tree with production build checkpoints and truthful screen boundaries. It is not evidence of a complete backend or a live ecosystem. |
| `skycoin4444` | Core platform candidate, unverified | Substantial full-stack tree with Drizzle and tRPC signals, but its CI currently exposes roughly 890 TypeScript errors and generic feature routers. It must remain unverified until those contracts are implemented or unsupported screens are removed. |
| `SKYCOIN4444-Ecosystem` | Core platform candidate, unverified | Substantial full-stack tree with database and test signals. No production claim is made until locked install, typecheck, tests, build, and runtime behavior pass. |
| `skycoin4444hopeAIShadowchat` | Product candidate, unverified | Substantial source tree and tests are present, but frozen installation is currently blocked by package-manager/lockfile drift. |
| `ShadowChat-Core` and `ShadowChat-Pro-Edition` | Product candidates, unverified | Large overlapping codebases with tests and full-stack scripts. Canonical ownership and runtime evidence must be established before both are treated as separate products. |

## Metric policy

Repository count, GitHub disk usage, lines of code, and generated screen count are inventory measurements only. Product metrics must be computed from real runs and labeled with their measurement window and source. Examples include test count and pass rate, build duration, API request/response behavior, coverage, error rate, latency under a stated load, deployment revision, and externally verified user or transaction data. No revenue projection, user count, AI score, token balance, market price, success rate, or security certification will be stated without evidence.

## Consolidation rule

Before adding a repository, the owner must identify its unique responsibility, canonical successor, public/private status, license, runtime, contract, test plan, and deployment status. If it duplicates an existing codebase or contains only generated scaffolding, the default action is archive or merge—not another feature pass.

## Coordination rule

Every chat must inspect `git status`, fetch the remote branch, rebase concurrent work, run relevant checks, push, verify the remote commit SHA, and record the CI conclusion. A local commit is not a shipped deliverable.

**Status:** Policy published as a working engineering standard; repository assignments remain provisional until direct validation completes.

**Author:** Manus AI
