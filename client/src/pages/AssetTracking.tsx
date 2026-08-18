import { AlertTriangle, BarChart3, Database, LockKeyhole, PackageSearch, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const assetStates = [
  { label: "Asset registry", value: "Not configured", icon: Database },
  { label: "Holdings and valuation data", value: "Unavailable", icon: BarChart3 },
  { label: "Ownership and transfer history", value: "Unavailable", icon: PackageSearch },
  { label: "Reconciliation and verification", value: "Unavailable", icon: ShieldAlert },
];

export default function AssetTracking() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Asset Tracking"
        description="Asset tracking is not enabled in this deployment. No holding, balance, valuation, performance, ownership, or transfer result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Asset tracking is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a portfolio, custody, blockchain, market-data, inventory, or accounting source. It cannot prove that an asset is held, calculate a value or return, verify ownership, or record a transfer. No financial, inventory, or ownership result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Asset-data readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production asset tracker requires a typed asset registry, source-of-truth ownership records, valuation methodology, price and inventory freshness, corporate-action or transfer handling, reconciliation, access controls, audit history, and independent verification of financial or blockchain data. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Database aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Registry boundary</h3>
                  <p className="text-sm text-muted-foreground">No asset type, identifier, account, wallet, custodian, inventory record, or source-of-truth relationship is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Valuation boundary</h3>
                  <p className="text-sm text-muted-foreground">No balance, price, market value, cost basis, return, performance, liquidity, or inventory quantity is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Ownership boundary</h3>
                  <p className="text-sm text-muted-foreground">No custody proof, transfer history, reconciliation, audit event, authorization, or settlement evidence is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/portfolio">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View portfolio status</Button>
              </Link>
              <Link href="/crypto">
                <Button size="lg" variant="outline">View crypto status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="asset-state-heading">
          <h2 id="asset-state-heading" className="mb-4 text-xl font-semibold">Current asset state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {assetStates.map(({ label, value, icon: Icon }) => (
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
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not use this page as evidence of asset ownership, custody, value, profitability, inventory, or transfer completion. Verify holdings and valuations through independently trusted records until the required integration is available.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
