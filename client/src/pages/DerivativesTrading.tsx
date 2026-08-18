import { AlertTriangle, BarChart3, CircleDollarSign, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const derivativeStates = [
  { label: "Market and contract metadata", value: "Not configured", icon: BarChart3 },
  { label: "Margin and collateral", value: "Unavailable", icon: CircleDollarSign },
  { label: "Order execution", value: "Disabled", icon: LockKeyhole },
  { label: "Risk and liquidation", value: "Unavailable", icon: ShieldAlert },
];

export default function DerivativesTrading() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Derivatives Trading"
        description="Derivatives trading is not enabled in this deployment. No contract, price, margin, leverage, liquidation, position, or order result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Derivatives actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not provide options or futures contracts, calculate leverage or margin, accept collateral, create positions, place orders, estimate liquidation, or claim settlement. No trading or risk outcome should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Derivatives readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production derivatives venue requires contract specifications, trusted market data, mark and index prices, margin tiers, collateral custody, order matching, funding and settlement rules, liquidation controls, position accounting, risk limits, and independently verified execution. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Market boundary</h3>
                  <p className="text-sm text-muted-foreground">No contract, underlying, expiry, strike, index, mark price, funding rate, or order book is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <CircleDollarSign aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Collateral boundary</h3>
                  <p className="text-sm text-muted-foreground">No margin account, leverage, collateral balance, maintenance threshold, or position size is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Risk boundary</h3>
                  <p className="text-sm text-muted-foreground">No liquidation price, loss estimate, risk limit, settlement state, or execution evidence is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/crypto-exchange">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View exchange status</Button>
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

        <section aria-labelledby="derivative-state-heading">
          <h2 id="derivative-state-heading" className="mb-4 text-xl font-semibold">Current derivatives state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {derivativeStates.map(({ label, value, icon: Icon }) => (
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
            Derivatives can create losses beyond the initial deposit and may be unsuitable for many users. Do not use this page as an investment recommendation or evidence that an order, position, margin balance, liquidation event, or settlement exists.
          </p>
        </Card>
      </div>
    </div>
  );
}
