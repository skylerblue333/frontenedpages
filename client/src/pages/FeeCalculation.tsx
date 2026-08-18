import { AlertTriangle, Calculator, CreditCard, Database, FileText, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const feeStates = [
  { label: "Fee schedules and provider sources", value: "Not configured", icon: Database },
  { label: "Quote and cost calculation", value: "Unavailable", icon: Calculator },
  { label: "Payment, gas, and venue costs", value: "Unavailable", icon: CreditCard },
  { label: "Disclosure and settlement", value: "Disabled", icon: ShieldAlert },
];

export default function FeeCalculation() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Fee Calculation"
        description="Fee calculation is not enabled in this deployment. No fee schedule, quote, gas estimate, spread, commission, or settlement cost is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Fee calculations are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a payment provider, exchange, blockchain node, bridge, broker, order book, pricing source, or settlement ledger. It cannot calculate or confirm a fee, gas cost, spread, commission, slippage, tax, quote, or final amount. No transaction or financial result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Fee-data readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production fee surface requires canonical fee schedules, provider and venue contracts, live price and gas sources, network and congestion context, order and route parameters, taxes and discounts, quote expiry, rounding and currency rules, slippage and execution disclosure, and independently verified final settlement. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Database aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Source boundary</h3>
                  <p className="text-sm text-muted-foreground">No fee schedule, provider, venue, chain, route, network, gas source, instrument, or account context is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Calculator aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Quote boundary</h3>
                  <p className="text-sm text-muted-foreground">No fee, gas, spread, commission, slippage, tax, discount, quote expiry, currency conversion, or total cost is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Settlement boundary</h3>
                  <p className="text-sm text-muted-foreground">No approval, authorization, execution, transaction, fill, receipt, or final settlement evidence is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/payments">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View payment status</Button>
              </Link>
              <Link href="/order-types">
                <Button size="lg" variant="outline">View order status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost"><FileText aria-hidden="true" className="mr-2 h-4 w-4" /> View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="fee-state-heading">
          <h2 id="fee-state-heading" className="mb-4 text-xl font-semibold">Current fee state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {feeStates.map(({ label, value, icon: Icon }) => (
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
            Do not treat this page as a fee quote or evidence of a transaction cost. Verify all fees, gas, spreads, commissions, taxes, route costs, quote expiry, and final settlement through independently trusted sources before authorizing any financial action.
          </p>
        </Card>
      </div>
    </div>
  );
}
