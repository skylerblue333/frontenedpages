import { AlertTriangle, ClipboardCheck, CreditCard, PackageCheck, ReceiptText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const orderStates = [
  { label: "Catalog and order pricing", value: "Not configured", icon: ReceiptText },
  { label: "Payment authorization", value: "Unavailable", icon: CreditCard },
  { label: "Inventory reservation", value: "Unavailable", icon: PackageCheck },
  { label: "Order confirmation", value: "Disabled", icon: ClipboardCheck },
];

export default function OrderPlacement() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Order Placement"
        description="Order placement is not enabled in this deployment. No item, price, payment, inventory, order number, or fulfillment result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Order actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not calculate an order total, authorize a payment, reserve inventory, create an order, issue an order number, generate a receipt, or claim fulfillment. No purchase or order should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Order readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production order flow requires a trusted catalog, server-side prices and taxes, stock reservation, shipping and identity validation, payment authorization, idempotent order creation, receipt delivery, cancellation and refund handling, fraud controls, and fulfillment tracking. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ReceiptText aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Order boundary</h3>
                  <p className="text-sm text-muted-foreground">No product, quantity, price, tax, shipping, discount, or order identifier is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <CreditCard aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Payment boundary</h3>
                  <p className="text-sm text-muted-foreground">No payment provider, authorization, capture, fraud decision, or refund state is available.</p>
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
              <Link href="/checkout-flow">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View checkout status</Button>
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
            Do not enter payment details or personal shipping information into this deployment. Do not treat this page as evidence that an order, payment, receipt, inventory reservation, or delivery exists.
          </p>
        </Card>
      </div>
    </div>
  );
}
