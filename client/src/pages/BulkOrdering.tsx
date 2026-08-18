import { AlertTriangle, ClipboardList, CreditCard, PackageCheck, ReceiptText, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const bulkStates = [
  { label: "Catalog and bulk pricing", value: "Not configured", icon: ReceiptText },
  { label: "Inventory and allocation", value: "Unavailable", icon: PackageCheck },
  { label: "Payment and order creation", value: "Disabled", icon: CreditCard },
  { label: "Shipping and fulfillment", value: "Unavailable", icon: ClipboardList },
];

export default function BulkOrdering() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Bulk Ordering"
        description="Bulk ordering is not enabled in this deployment. No catalog, quantity discount, inventory, payment, order, shipping, or fulfillment result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Bulk-order actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not calculate bulk pricing, reserve inventory, authorize payment, create an order, generate a quote, schedule shipping, or claim fulfillment. No purchase, availability, or delivery result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Bulk-commerce readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production bulk-order flow requires a trusted catalog, quantity and customer-specific pricing, minimum-order rules, tax and shipping calculation, inventory reservation, quote expiry, payment authorization, idempotent order creation, procurement approval, cancellation and refund handling, and shipment and fulfillment tracking. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ReceiptText aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Quote boundary</h3>
                  <p className="text-sm text-muted-foreground">No product, quantity, price tier, discount, minimum order, tax, shipping, quote, or expiration is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <PackageCheck aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Supply boundary</h3>
                  <p className="text-sm text-muted-foreground">No stock, allocation, reservation, procurement approval, warehouse, shipment, or delivery record is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Transaction boundary</h3>
                  <p className="text-sm text-muted-foreground">No payment, order, receipt, refund, cancellation, shipment, or fulfillment evidence is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/order-placement">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View order status</Button>
              </Link>
              <Link href="/checkout-flow">
                <Button size="lg" variant="outline">View checkout status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="bulk-state-heading">
          <h2 id="bulk-state-heading" className="mb-4 text-xl font-semibold">Current bulk-order state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {bulkStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter payment details, procurement credentials, or shipping information into this deployment. Do not treat this page as evidence of a quote, inventory allocation, purchase, order, or delivery.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
