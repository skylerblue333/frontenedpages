import { AlertTriangle, CalendarClock, FileText, MapPin, PackageSearch, RefreshCcw, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const trackingStates = [
  { label: "Order and fulfillment ledger", value: "Unavailable", icon: FileText },
  { label: "Carrier and tracking source", value: "Not connected", icon: MapPin },
  { label: "Shipment events and delivery estimate", value: "Not reported", icon: CalendarClock },
  { label: "Refund and support workflow", value: "Unavailable", icon: ShieldCheck },
];

export default function OrderTracking() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Order Tracking"
        description="Order and shipment tracking are not connected in this deployment. No order, carrier, tracking number, shipment event, delivery date, refund, or fulfillment result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Order tracking is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to an order ledger, fulfillment provider, carrier API, tracking-number verifier, inventory source, delivery estimate, refund workflow, or customer-support case system. It cannot determine whether an order exists, shipped, moved, arrived, was delayed, was refunded, or requires action.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><PackageSearch aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Fulfillment readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production order tracking requires authenticated order ownership, immutable order and fulfillment records, inventory and shipment reconciliation, carrier and region coverage, signed webhook verification, event freshness and deduplication, status transitions, delivery estimates with uncertainty, exception handling, privacy-safe address access, refund and dispute workflows, and clear support ownership. None of those sources are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No order claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No order ID, item, payment state, inventory status, ownership, or fulfillment record is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MapPin aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No carrier claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No carrier, tracking number, location, scan event, delivery estimate, delay, or proof of delivery is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <RefreshCcw aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No outcome claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No refund, replacement, dispute, support case, notification, or resolution is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/admin-orders"><Button size="lg" className="bg-primary hover:bg-primary/90">View order status</Button></Link>
              <Link href="/payments"><Button size="lg" variant="outline">View payment status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about an order</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="tracking-state-heading">
          <h2 id="tracking-state-heading" className="mb-4 text-xl font-semibold">Current tracking evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trackingStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Do not submit a tracking number, address, payment credential, or personal information here until a verified order-support workflow is available. An unavailable state is not proof that an order was canceled or never shipped.
          </p>
        </Card>
      </main>
    </div>
  );
}
