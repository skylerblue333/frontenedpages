import { AlertTriangle, Bot, Gauge, LockKeyhole, Radio, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const botStates = [
  { label: "Market-data feeds", value: "Not configured", icon: Radio },
  { label: "Execution venue", value: "Unavailable", icon: Gauge },
  { label: "Automation status", value: "Disabled", icon: Bot },
  { label: "Risk controls", value: "Unavailable", icon: ShieldAlert },
];

export default function ArbitrageBot() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Arbitrage Bot"
        description="Automated arbitrage is not enabled in this deployment. No spread, latency, profitability, uptime, order, or execution result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Automated trading is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect exchanges, market-data feeds, wallets, order books, execution venues, risk controls, or monitoring. It does not identify arbitrage opportunities, place orders, manage capital, or claim profit. No trading action should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Arbitrage readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production arbitrage system requires authenticated exchange connections, synchronized market data, fee and slippage models, capital and withdrawal controls, order idempotency, rate-limit handling, partial-fill recovery, inventory reconciliation, kill switches, audit logs, and independently verified performance measurement. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Radio aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Data boundary</h3>
                  <p className="text-sm text-muted-foreground">No live exchange quotes, spread, order book, latency, fee, slippage, or market freshness data is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Bot aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Automation boundary</h3>
                  <p className="text-sm text-muted-foreground">No strategy, scheduler, capital allocation, order submission, cancellation, or kill switch is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Risk boundary</h3>
                  <p className="text-sm text-muted-foreground">No performance, uptime, throughput, profit, exposure, loss, reconciliation, or security certification is claimed.</p>
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

        <section aria-labelledby="bot-state-heading">
          <h2 id="bot-state-heading" className="mb-4 text-xl font-semibold">Current automation state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {botStates.map(({ label, value, icon: Icon }) => (
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
            Do not provide exchange credentials, API keys, wallet keys, or funds to this deployment. Do not treat this page as evidence of a running bot, a profitable strategy, a completed order, or any verified performance result.
          </p>
        </Card>
      </div>
    </div>
  );
}
