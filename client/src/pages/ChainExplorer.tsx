import { AlertTriangle, Blocks, Database, ExternalLink, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const chainStates = [
  { label: "Network configuration", value: "Not configured", icon: Blocks },
  { label: "RPC or indexer status", value: "Unavailable", icon: Database },
  { label: "Verification status", value: "Unavailable", icon: ShieldAlert },
];

export default function ChainExplorer() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Chain Explorer"
        description="Blockchain exploration is not enabled in this deployment. No block, address, transaction, balance, or confirmation data is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-amber-400/30 bg-amber-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <div>
              <h2 className="font-semibold text-amber-100">Chain data is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/80">
                This page does not connect to a blockchain node, RPC provider, indexer, explorer API, wallet, or custody service. It cannot look up blocks, addresses, transactions, balances, fees, confirmations, or finality. No blockchain event should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Explorer readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production explorer requires an explicit network allowlist, trusted RPC or indexer sources, chain-reorganization handling, address and transaction validation, rate limits, freshness indicators, and independent verification of returned data. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Blocks aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Network boundary</h3>
                  <p className="text-sm text-muted-foreground">No chain ID, network allowlist, node endpoint, or indexed block height is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Database aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Data boundary</h3>
                  <p className="text-sm text-muted-foreground">No live block, address, token, balance, transaction, fee, or confirmation data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Verification boundary</h3>
                  <p className="text-sm text-muted-foreground">No source freshness, reorganization status, finality, or independent cross-check is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/documentation">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View documentation</Button>
              </Link>
              <Link href="/contact-us-form">
                <Button size="lg" variant="outline">Ask about integration</Button>
              </Link>
              <a href="https://github.com/skylerblue333/frontenedpages" target="_blank" rel="noreferrer">
                <Button size="lg" variant="ghost">
                  View source <ExternalLink aria-hidden="true" className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </Card>

        <section aria-labelledby="chain-state-heading">
          <h2 id="chain-state-heading" className="mb-4 text-xl font-semibold">Current chain state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {chainStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
                    <p className="text-lg font-semibold">{value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Never use this page as proof that a transaction exists, a balance is controlled, a block is final, or a network is healthy. Verify high-risk blockchain activity through an independently trusted explorer until the required integration is available.
          </p>
        </Card>
      </div>
    </div>
  );
}
