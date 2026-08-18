import { AlertTriangle, BarChart3, Blocks, FileText, ShieldAlert, Tag } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const tokenStates = [
  { label: "Token identity and contract", value: "Not configured", icon: Tag },
  { label: "Chain and metadata source", value: "Unavailable", icon: Blocks },
  { label: "Supply, price, and market data", value: "Unavailable", icon: BarChart3 },
  { label: "Verification and ownership", value: "Unavailable", icon: ShieldAlert },
];

export default function TokenInformation() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Token Information"
        description="Token information is not enabled in this deployment. No contract, supply, price, utility, ownership, or market result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-amber-400/30 bg-amber-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <div>
              <h2 className="font-semibold text-amber-100">Token metadata is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/80">
                This page does not connect to a canonical token registry, verified contract, chain indexer, market-data provider, governance source, or ownership verifier. It cannot report a token address, supply, holders, price, utility, market value, or entitlement. No token or financial claim should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Token-data readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production token-information surface requires a chain and contract allowlist, verified source code and metadata, decimal and supply rules, mint and burn controls, holder and transfer indexing, price provenance, market-status freshness, governance references, and independent verification of ownership and permissions. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Tag aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Identity boundary</h3>
                  <p className="text-sm text-muted-foreground">No symbol, name, contract address, chain ID, decimals, supply, mint, burn, or permissions are configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Market boundary</h3>
                  <p className="text-sm text-muted-foreground">No price, market cap, liquidity, volume, holder count, performance, exchange listing, or financial value is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Verification boundary</h3>
                  <p className="text-sm text-muted-foreground">No source-code verification, ownership proof, transfer history, governance record, or contract safety assessment is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/crypto">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View crypto status</Button>
              </Link>
              <Link href="/chain-explorer">
                <Button size="lg" variant="outline">View chain status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost"><FileText aria-hidden="true" className="mr-2 h-4 w-4" /> View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="token-state-heading">
          <h2 id="token-state-heading" className="mb-4 text-xl font-semibold">Current token state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tokenStates.map(({ label, value, icon: Icon }) => (
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
            Do not rely on this page for token ownership, contract safety, market value, or an investment decision. Verify contract address, source code, supply, holders, permissions, and market data through independently trusted sources until the required integration is available.
          </p>
        </Card>
      </div>
    </div>
  );
}
