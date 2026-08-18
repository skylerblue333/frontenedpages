import { AlertTriangle, CreditCard, PackageCheck, ReceiptText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const checkoutStates = [
  { label: "Cart and pricing", value: "Not configured", icon: ReceiptText },
  { label: "Payment authorization", value: "Unavailable", icon: CreditCard },
  { label: "Inventory and fulfillment", value: "Unavailable", icon: PackageCheck },
];

export default function CheckoutFlow() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Checkout Flow"
        description="Checkout is not enabled in this deployment. No cart total, payment authorization, order, inventory, or fulfillment result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-amber-400/30 bg-amber-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <div>
              <h2 className="font-semibold text-amber-100">Checkout actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/80">
                This page does not calculate a payable total, collect payment details, authorize a charge, reserve inventory, create an order, issue a receipt, or claim fulfillment. No purchase should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Checkout readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production checkout requires a trusted catalog, server-side price calculation, tax and shipping rules, inventory reservation, payment-provider authorization, idempotent order creation, receipt delivery, cancellation and refund handling, and fulfillment status tracking. Those services are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ReceiptText aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Order boundary</h3>
                  <p className="text-sm text-muted-foreground">No catalog, cart, price, tax, shipping, discount, or order identifier is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <CreditCard aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Payment boundary</h3>
                  <p className="text-sm text-muted-foreground">No payment provider, authorization, capture, tokenization, or refund state is connected.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <PackageCheck aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Fulfillment boundary</h3>
                  <p className="text-sm text-muted-foreground">No inventory reservation, shipment, delivery estimate, cancellation, or fulfillment record is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/marketplace">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View marketplace status</Button>
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

        <section aria-labelledby="checkout-state-heading">
          <h2 id="checkout-state-heading" className="mb-4 text-xl font-semibold">Current checkout state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {checkoutStates.map(({ label, value, icon: Icon }) => (
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
            Do not enter payment details into this deployment and do not treat this page as evidence that a purchase, charge, order, receipt, or delivery exists. Use an independently verified commerce provider until checkout integrations are available.
          </p>
        </Card>
      </div>
    </div>
  );
}
