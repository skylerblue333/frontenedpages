import { AlertTriangle, CreditCard, FileText, FileWarning, LockKeyhole, Receipt, RefreshCw, Search, ShieldCheck, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const billingStates = [
  { label: "Customers, accounts, invoices, and line items", value: "Unavailable", icon: FileText },
  { label: "Payments, refunds, disputes, and settlement", value: "Not configured", icon: CreditCard },
  { label: "Subscriptions, tax, currency, and balances", value: "Disabled", icon: WalletCards },
  { label: "Receipts, permissions, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function BillingHistory() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Billing History"
        description="Billing-history services are not connected in this deployment. No customer, invoice, charge, payment, refund, dispute, subscription, tax, balance, receipt, or settlement result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Billing History is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified billing provider, customer identity, invoice schema, payment ledger, refund and dispute workflow, subscription state, tax calculation, currency rules, receipt service, or audit contract was connected. Those controls were removed because the screen cannot establish that a charge or balance exists.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Receipt aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Billing readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production billing history requires provider-backed customer identity, immutable invoice and payment records, currency and tax semantics, authorization boundaries, payment-method tokenization, refund and dispute state, subscription lifecycle, reconciliation, receipt delivery, privacy, retention, audit, and clear pending, paid, failed, refunded, disputed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No invoice claim</h3><p className="mt-1 text-sm text-muted-foreground">No customer, invoice, line item, amount, currency, tax, payment method, due date, balance, or receipt is displayed or created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><CreditCard aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No payment claim</h3><p className="mt-1 text-sm text-muted-foreground">No charge, authorization, capture, refund, dispute, payout, settlement, subscription, or wallet transaction is initiated or confirmed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No privacy claim</h3><p className="mt-1 text-sm text-muted-foreground">No payment method, tax identifier, billing address, customer profile, export, notification, or retention decision is read or changed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/payments"><Button size="lg" className="bg-primary hover:bg-primary/90">View payment status</Button></Link><Link href="/subscriptions"><Button size="lg" variant="outline">View subscription status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about billing</Button></Link></div></div></Card>

        <section aria-labelledby="billing-state-heading"><h2 id="billing-state-heading" className="mb-4 text-xl font-semibold">Current billing evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{billingStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, full payment-card data, tax identifiers, confidential invoices, or sensitive personal information here. An unavailable billing page is not evidence that a charge, invoice, balance, refund, subscription, or tax result exists.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Customers, providers, payments, subscriptions, tax, receipts, privacy, billing support, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /><RefreshCw aria-hidden="true" /></div>
      </main>
    </div>
  );
}
