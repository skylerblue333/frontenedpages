import { AlertTriangle, ArrowLeftRight, Blocks, FileWarning, Gauge, KeyRound, LockKeyhole, Network, Search, ShieldAlert, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const bridgeStates = [
  { label: "Source/destination networks, assets, routes, and limits", value: "Unavailable", icon: Network },
  { label: "Wallet custody, signing, nonce, fee, and slippage", value: "Not configured", icon: KeyRound },
  { label: "Locks, messages, confirmations, relays, and settlement", value: "Disabled", icon: Blocks },
  { label: "Failures, refunds, monitoring, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function BridgeTransactions() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Bridge Transactions"
        description="Cross-chain bridge services are not connected in this deployment. No network, asset, route, wallet, signing request, fee, slippage, lock, message, confirmation, relay, settlement, refund, or transaction result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Bridge Transactions are unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified network allowlist, bridge route, asset registry, custody model, signing boundary, fee and slippage policy, nonce handling, lock-and-mint or burn-and-release protocol, relay provider, confirmation policy, refund flow, or audit contract was connected. Those controls were removed because the screen cannot establish that a cross-chain transfer is valid, authorized, final, or recoverable.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><ArrowLeftRight aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Cross-chain readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production bridging requires explicit source and destination networks, canonical assets and decimals, route limits, user-controlled signing, private-key isolation, nonce and replay protection, fee and slippage disclosure, message and relay verification, confirmations and finality, idempotency, failure and refund state, monitoring, privacy, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Network aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No route claim</h3><p className="mt-1 text-sm text-muted-foreground">No chain, token, bridge, contract, route, amount, limit, fee, slippage, or asset conversion is selected or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><KeyRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No signing claim</h3><p className="mt-1 text-sm text-muted-foreground">No wallet, private key, seed phrase, nonce, signature, approval, allowance, transaction request, or custody operation is initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldAlert aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No settlement claim</h3><p className="mt-1 text-sm text-muted-foreground">No lock, burn, mint, relay, message, confirmation, finality, refund, balance change, or successful transfer is asserted.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/wallet-connect"><Button size="lg" className="bg-primary hover:bg-primary/90">View wallet status</Button></Link><Link href="/blockchain-monitor"><Button size="lg" variant="outline">View chain status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about bridge access</Button></Link></div></div></Card>

        <section aria-labelledby="bridge-state-heading"><h2 id="bridge-state-heading" className="mb-4 text-xl font-semibold">Current bridge evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{bridgeStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Never enter passwords, access tokens, seed phrases, private keys, wallet credentials, confidential transaction data, or sensitive personal information here. An unavailable bridge page is not evidence that a route, quote, signature, lock, relay, confirmation, settlement, refund, or successful transfer exists.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Networks, assets, wallets, custody, bridge providers, transactions, monitoring, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Gauge aria-hidden="true" /><Blocks aria-hidden="true" /><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
