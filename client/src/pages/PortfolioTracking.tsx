import { AlertTriangle, BarChart3, Database, LineChart, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const trackingStates = [
  { label: "Portfolio source", value: "Not configured", icon: Database },
  { label: "Holdings and valuation data", value: "Unavailable", icon: BarChart3 },
  { label: "Performance and benchmark data", value: "Unavailable", icon: LineChart },
  { label: "Account access and execution", value: "Disabled", icon: LockKeyhole },
];

export default function PortfolioTracking() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Portfolio Tracking"
        description="Portfolio tracking is not enabled in this deployment. No holding, balance, valuation, return, benchmark, or performance result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Portfolio tracking is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a brokerage, custodian, wallet, exchange, accounting ledger, market-data source, or benchmark provider. It cannot prove holdings, calculate value or returns, compare performance, or initiate a trade. No financial or ownership result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Tracking readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production portfolio tracker requires authenticated account connections, source-of-truth holdings, transaction and corporate-action ingestion, price and benchmark provenance, cost-basis and tax methodology, freshness indicators, reconciliation, access controls, and independent verification of valuation and performance calculations. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Database aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Source boundary</h3>
                  <p className="text-sm text-muted-foreground">No account, custodian, wallet, exchange, holding, transaction, or corporate-action source is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Valuation boundary</h3>
                  <p className="text-sm text-muted-foreground">No balance, price, cost basis, market value, return, benchmark, allocation, or performance data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Reconciliation boundary</h3>
                  <p className="text-sm text-muted-foreground">No freshness, mismatch, access, tax, ownership, order, fee, or settlement evidence is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/portfolio">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View portfolio status</Button>
              </Link>
              <Link href="/portfolio-optimization">
                <Button size="lg" variant="outline">View optimization status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="tracking-state-heading">
          <h2 id="tracking-state-heading" className="mb-4 text-xl font-semibold">Current tracking state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trackingStates.map(({ label, value, icon: Icon }) => (
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
            <ShieldAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not use this page as personalized financial advice or evidence of a portfolio, balance, valuation, return, benchmark comparison, trade, or settlement. Verify all account and performance information through independently trusted records until the required integration is available.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
