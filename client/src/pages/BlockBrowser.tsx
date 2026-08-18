import { AlertTriangle, Blocks, Database, Hash, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const blockStates = [
  { label: "Chain configuration", value: "Not configured", icon: Blocks },
  { label: "Block and transaction index", value: "Unavailable", icon: Database },
  { label: "Hash and timestamp verification", value: "Unavailable", icon: Hash },
  { label: "Network health", value: "Unavailable", icon: ShieldAlert },
];

export default function BlockBrowser() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Block Browser"
        description="Block browsing is not enabled in this deployment. No block height, hash, timestamp, miner, transaction, or network-health data is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-amber-400/30 bg-amber-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <div>
              <h2 className="font-semibold text-amber-100">Block data is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/80">
                This page does not connect to a blockchain node, RPC provider, indexer, or explorer API. It cannot look up blocks, hashes, timestamps, transactions, miner or validator attribution, confirmations, finality, or network health. No chain event should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Block-data readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production block browser requires an explicit network allowlist, canonical node or indexer sources, pagination and rate limits, reorganization handling, freshness indicators, hash and timestamp validation, transaction status verification, and independent cross-checks. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Blocks aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Chain boundary</h3>
                  <p className="text-sm text-muted-foreground">No chain ID, network allowlist, block height, node endpoint, or canonical tip is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Hash aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Data boundary</h3>
                  <p className="text-sm text-muted-foreground">No block hash, timestamp, parent hash, transaction count, miner, validator, or confirmation data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Verification boundary</h3>
                  <p className="text-sm text-muted-foreground">No reorganization, finality, freshness, node disagreement, or independent verification status is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/chain-explorer">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View chain status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="outline">View documentation</Button>
              </Link>
              <Link href="/contact-us-form">
                <Button size="lg" variant="ghost">Ask about integration</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="block-state-heading">
          <h2 id="block-state-heading" className="mb-4 text-xl font-semibold">Current block-browser state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {blockStates.map(({ label, value, icon: Icon }) => (
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
            Do not use this page as proof that a block, transaction, confirmation, miner, validator, or healthy network exists. Verify high-risk blockchain activity through independently trusted explorers and nodes until the required integration is available.
          </p>
        </Card>
      </div>
    </div>
  );
}
