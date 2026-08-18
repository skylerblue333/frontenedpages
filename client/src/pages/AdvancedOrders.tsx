import { AlertTriangle, BarChart3, FileWarning, Gauge, LockKeyhole, PackageCheck, ShieldCheck, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const orderStates = [
  { label: "Orders, products, and fulfillment records", value: "Unavailable", icon: ShoppingCart },
  { label: "Payments, refunds, shipping, and entitlements", value: "Not configured", icon: PackageCheck },
  { label: "Execution, status, errors, and response time", value: "Not measured", icon: Gauge },
  { label: "Integrations, automation, and reconciliation", value: "Disabled", icon: ShieldCheck },
];

export default function AdvancedOrders() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Advanced Orders"
        description="Order-management services are not connected in this deployment. No order, product, payment, refund, fulfillment, execution, transaction, automation, or operational metric is being reported or changed."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Advanced Orders is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen claimed fully functional live data and real-time updates, exposed generic feature cards and action buttons, and rendered fabricated active-user, transaction, success-rate, and response-time metrics. Those claims and actions were removed because no verified order, payment, fulfillment, integration, or reconciliation contract was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><ShoppingCart aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Order-management readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production order system requires typed order and product contracts, authenticated ownership, inventory and pricing source-of-truth, payment authorization, idempotency, tax and refund rules, fulfillment state transitions, provider reconciliation, fraud controls, notifications, audit, privacy, and clear pending, failed, canceled, refunded, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><PackageCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No order claim</h3><p className="mt-1 text-sm text-muted-foreground">No product, price, inventory, order, line item, entitlement, fulfillment, shipment, or delivery state is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No payment claim</h3><p className="mt-1 text-sm text-muted-foreground">No payment, refund, tax, charge, wallet transaction, card detail, provider result, or financial outcome is initiated or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No metric claim</h3><p className="mt-1 text-sm text-muted-foreground">No active-user count, transaction total, success rate, latency, throughput, revenue, or automation result is reported.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/admin-orders"><Button size="lg" className="bg-primary hover:bg-primary/90">View order status</Button></Link><Link href="/api-status"><Button size="lg" variant="outline">View API status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about order access</Button></Link></div></div></Card>

        <section aria-labelledby="advanced-order-state-heading"><h2 id="advanced-order-state-heading" className="mb-4 text-xl font-semibold">Current order evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{orderStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, confidential order records, or sensitive personal information here. An unavailable order page is not evidence of a product, payment, transaction, fulfillment, refund, or successful operation.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Catalog, inventory, payments, tax, fulfillment, refunds, providers, permissions, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
