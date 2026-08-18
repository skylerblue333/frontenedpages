import { AlertTriangle, ClipboardList, CreditCard, LockKeyhole, Package, RefreshCw, ShieldAlert, Truck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const orderStates = [
  { label: "Order source and account", value: "Not configured", icon: ClipboardList },
  { label: "Payment and receipt records", value: "Unavailable", icon: CreditCard },
  { label: "Shipment and fulfillment records", value: "Unavailable", icon: Truck },
  { label: "Refund and reconciliation", value: "Unavailable", icon: ShieldAlert },
];

export default function OrderHistory() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Order History"
        description="Order history is not enabled in this deployment. No order, amount, payment, shipment, refund, review, or fulfillment record is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Order records are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to an authenticated order ledger, marketplace, payment provider, shipping carrier, fulfillment system, review service, or refund processor. It cannot prove a purchase, sale, amount, delivery, escrow state, invoice, review, refund, or completion. No commerce result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Order-history readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production order-history surface requires authenticated buyer and seller scopes, a source-of-truth order ledger, typed line items and prices, payment and refund reconciliation, shipment and fulfillment events, cancellation and dispute handling, review authorization, privacy controls, pagination, and audit history. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ClipboardList aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Record boundary</h3>
                  <p className="text-sm text-muted-foreground">No buyer, seller, order ID, line item, quantity, amount, currency, date, status, or account relationship is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <CreditCard aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Payment boundary</h3>
                  <p className="text-sm text-muted-foreground">No payment authorization, capture, receipt, escrow, refund, dispute, invoice, or financial total is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Truck aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Fulfillment boundary</h3>
                  <p className="text-sm text-muted-foreground">No inventory, shipment, tracking number, delivery event, cancellation, review, or fulfillment confirmation is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/order-placement">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View order status</Button>
              </Link>
              <Link href="/payments">
                <Button size="lg" variant="outline">View payment status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="history-state-heading">
          <h2 id="history-state-heading" className="mb-4 text-xl font-semibold">Current order-history state</h2>
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
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter payment details, marketplace credentials, or shipping information into this deployment. Do not treat this page as evidence that an order, payment, delivery, review, refund, or fulfillment event exists.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <RefreshCw aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Refreshing this page cannot create or retrieve order records while the required authenticated commerce integrations are unavailable.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <Package aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Verify order, payment, shipping, refund, and review records through independently trusted commerce systems until this integration is implemented and audited.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
