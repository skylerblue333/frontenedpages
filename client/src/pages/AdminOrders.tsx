import { AlertTriangle, FileText, LockKeyhole, Package, ReceiptText, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const orderStates = [
  { label: "Order source of truth", value: "Unavailable", icon: Package },
  { label: "Payment and refund ledger", value: "Unavailable", icon: ReceiptText },
  { label: "Tax and jurisdiction evidence", value: "Not configured", icon: FileText },
  { label: "Admin authorization and audit", value: "Unavailable", icon: LockKeyhole },
];

export default function AdminOrders() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Admin Orders"
        description="Order, payment, tax, fulfillment, refund, and administrative evidence are not connected in this deployment. No order, revenue, or compliance result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Administrative order data is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen contained hardcoded orders, buyer identities, prices, fees, taxes, countries, statuses, revenue totals, and a CSV export labeled for tax compliance. Those values were static and did not prove a real order ledger, payment authorization, refund, fulfillment, tax obligation, or admin permission. They have been removed rather than presented as operational records.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Package aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Commerce administration readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production order administration requires a server-side order and payment ledger, verified identity and tenant scope, catalog and inventory source of truth, pricing and tax calculation, provider webhooks, idempotency, refund and dispute workflows, fulfillment reconciliation, role-based access, sensitive-data minimization, audit records, and jurisdiction-specific accounting ownership. None of those controls are connected here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ReceiptText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No order claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No order ID, buyer, product, amount, payment method, status, refund, or fulfillment state is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No tax claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No tax rate, jurisdiction, filing, compliance status, accountant export, or accounting result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldAlert aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No admin claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No privileged user, permission, bulk action, export, status update, or audit event is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/payments"><Button size="lg" className="bg-primary hover:bg-primary/90">View payment status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about order access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="order-state-heading">
          <h2 id="order-state-heading" className="mb-4 text-xl font-semibold">Current order evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {orderStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Do not use this page for fulfillment, refunds, financial reconciliation, tax filing, customer support, or administrative decisions until authoritative server-side records and access controls are connected and independently verified.
          </p>
        </Card>
      </main>
    </div>
  );
}
