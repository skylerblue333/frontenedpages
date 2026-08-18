import { AlertTriangle, BarChart3, ClipboardList, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const orderStates = [
  { label: "Market and instrument metadata", value: "Not configured", icon: BarChart3 },
  { label: "Order validation and matching", value: "Unavailable", icon: ClipboardList },
  { label: "User permissions and execution", value: "Disabled", icon: LockKeyhole },
  { label: "Risk and settlement", value: "Unavailable", icon: ShieldAlert },
];

export default function OrderTypes() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Order Types"
        description="Trading order types are not enabled in this deployment. No order, price, fill, leverage, margin, risk, or settlement result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Order execution is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a market, instrument registry, order book, matching engine, broker, wallet, risk engine, or settlement system. It cannot create, validate, route, cancel, fill, or confirm an order. No trading or financial outcome should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Order-system readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production order system requires supported instruments, market-data provenance, precise order and time-in-force semantics, server-side validation, account permissions, buying-power or collateral checks, idempotency, rate limits, matching or venue routing, partial-fill and cancellation handling, audit logs, and independently verified settlement. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Market boundary</h3>
                  <p className="text-sm text-muted-foreground">No instrument, quote, order book, tick size, lot size, trading session, or market status is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ClipboardList aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Order boundary</h3>
                  <p className="text-sm text-muted-foreground">No order type, price, quantity, time-in-force, validation, queue, fill, cancellation, or order identifier is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Risk boundary</h3>
                  <p className="text-sm text-muted-foreground">No buying power, collateral, leverage, margin, exposure, fee, slippage, fill, or settlement evidence is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/crypto-exchange">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View exchange status</Button>
              </Link>
              <Link href="/derivatives-trading">
                <Button size="lg" variant="outline">View derivatives status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="order-state-heading">
          <h2 id="order-state-heading" className="mb-4 text-xl font-semibold">Current order state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {orderStates.map(({ label, value, icon: Icon }) => (
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
            Do not enter exchange credentials, wallet keys, or collateral into this deployment. Do not treat this page as evidence that an order exists, a price is valid, a fill occurred, a position opened, or a trade settled.
          </p>
        </Card>
      </div>
    </div>
  );
}
