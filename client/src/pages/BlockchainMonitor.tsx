import { AlertTriangle, Blocks, Database, FileSearch, FileWarning, Gauge, LockKeyhole, Network, Search, ShieldAlert, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const chainStates = [
  { label: "Networks, nodes, indexers, and chain identity", value: "Unavailable", icon: Network },
  { label: "Blocks, timestamps, transactions, and confirmations", value: "Not configured", icon: Blocks },
  { label: "Reorganizations, finality, latency, and health", value: "Not measured", icon: Gauge },
  { label: "Addresses, balances, privacy, and audit", value: "Disabled", icon: ShieldCheck },
];

export default function BlockchainMonitor() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Blockchain Monitor"
        description="Blockchain-monitoring services are not connected in this deployment. No network, node, block, transaction, address, balance, confirmation, finality, reorganization, latency, or chain-health result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Blockchain Monitor is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified chain allowlist, node or indexer provider, block parser, transaction decoder, confirmation policy, reorganization handler, health probe, address privacy boundary, or audit contract was connected. Those controls were removed because the screen cannot establish that blockchain data is current, authentic, final, or safe to act on.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Blocks aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Chain-observability readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production blockchain monitoring requires explicit network and address-format allowlists, canonical RPC or indexer sources, block and transaction decoding, pagination, freshness, confirmation and finality semantics, reorganization handling, rate limits, privacy controls, health probes, audit, and clear syncing, stale, partial, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Network aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No network claim</h3><p className="mt-1 text-sm text-muted-foreground">No chain, network, node, indexer, contract, token, block, validator, or network-health source is configured or queried.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><FileSearch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No transaction claim</h3><p className="mt-1 text-sm text-muted-foreground">No address, balance, nonce, transaction, event, confirmation, finality, timestamp, fee, or settlement result is displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldAlert aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No safety claim</h3><p className="mt-1 text-sm text-muted-foreground">No reorganization handling, authenticity check, ownership proof, privacy decision, alert, or operational recommendation is available.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/chain-explorer"><Button size="lg" className="bg-primary hover:bg-primary/90">View chain status</Button></Link><Link href="/address-lookup"><Button size="lg" variant="outline">View address status</Button></Link><Link href="/wallet"><Button size="lg" variant="outline">View wallet status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about chain monitoring</Button></Link></div></div></Card>

        <section aria-labelledby="blockchain-state-heading"><h2 id="blockchain-state-heading" className="mb-4 text-xl font-semibold">Current chain evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{chainStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, wallet credentials, confidential transaction data, or sensitive personal information here. An unavailable blockchain page is not evidence that a network, address, balance, transaction, confirmation, finality, or settlement exists.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Networks, nodes, indexers, wallets, addresses, transactions, privacy, alerts, audit, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Database aria-hidden="true" /><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
