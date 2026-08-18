import { AlertTriangle, BarChart3, BookOpenCheck, Coins, Cpu, FileWarning, LockKeyhole, Network } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const researchStates = [
  { label: "Market and asset data", value: "Unavailable", icon: BarChart3 },
  { label: "Mining and pool telemetry", value: "Not connected", icon: Network },
  { label: "Profitability and ROI analysis", value: "Not reported", icon: Cpu },
  { label: "Research sources and review", value: "Not verified", icon: BookOpenCheck },
];

export default function CryptoResearchHub() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Crypto Research Hub"
        description="Crypto research data is not connected in this deployment. No price, market cap, volume, change, pool, profitability, ROI, mining, or investment conclusion is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Crypto research is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen contained hardcoded coin prices, market caps, volumes, changes, mining characteristics, pool shares, fees, block data, profitability, and randomized price-history charts. Those values were not sourced, timestamped, or independently verified. They have been removed rather than presented as current market or mining research.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Coins aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Research readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Trustworthy crypto research requires authoritative market and chain sources, timestamps and freshness, asset and network identity, methodology, cross-source reconciliation, historical data provenance, pool and mining telemetry, electricity and hardware assumptions, variance and uncertainty, source citations, conflict review, risk disclosures, and a separation between information and financial advice. None of those sources are connected here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No market claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No price, market cap, volume, change, chart, exchange rate, liquidity, or asset valuation is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Cpu aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No mining claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No algorithm, difficulty, block reward, block time, pool share, fee, hash rate, profitability, or ROI is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileWarning aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No recommendation claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No forecast, ranking, trading signal, investment recommendation, mining recommendation, or financial conclusion is provided.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/crypto-hub"><Button size="lg" className="bg-primary hover:bg-primary/90">View crypto status</Button></Link>
              <Link href="/risk-analysis"><Button size="lg" variant="outline">View risk status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about research access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="research-state-heading">
          <h2 id="research-state-heading" className="mb-4 text-xl font-semibold">Current research evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {researchStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              This screen is not investment, financial, tax, or mining advice. Do not trade, mine, purchase hardware, transfer assets, or make a financial decision based on an unavailable research state.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
