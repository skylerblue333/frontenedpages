import { AlertTriangle, CheckSquare, FileWarning, FileSignature, LockKeyhole, ShieldCheck, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const closingStates = [
  { label: "Transaction, parties, obligations, and approvals", value: "Unavailable", icon: CheckSquare },
  { label: "Documents, signatures, conditions, and dates", value: "Not configured", icon: FileSignature },
  { label: "Payments, escrow, settlement, and completion", value: "Disabled", icon: WalletCards },
  { label: "Permissions, legal review, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function ClosingChecklist() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={CheckSquare} title="Closing Checklist" subtitle="Closing-workflow services are not connected in this deployment. No transaction, party, obligation, approval, document, signature, payment, settlement, completion, or audit result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Closing checklist is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified transaction or deal schema, party identity, obligation registry, document store, signature provider, approval workflow, payment or escrow service, settlement state, legal review, privacy boundary, or audit contract was connected. Those controls were removed because this route cannot establish that a closing task is complete or that an action is authorized.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><CheckSquare aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Closing readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production closing workflow requires verified parties, authoritative obligations and conditions, documents and version control, signature and approval semantics, dates and dependencies, payment and settlement boundaries, legal and compliance review, access controls, privacy, retention, exception handling, and auditable completion evidence. None of those controls are available through this route. This page does not provide legal or financial advice.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><CheckSquare aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No completion claim</h3><p className="mt-1 text-sm text-muted-foreground">No task, condition, milestone, due date, dependency, approval, status, completion percentage, or obligation is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><FileSignature aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No document claim</h3><p className="mt-1 text-sm text-muted-foreground">No document, version, signature, signer, legal review, consent, authorization, or acceptance is created or verified.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No settlement claim</h3><p className="mt-1 text-sm text-muted-foreground">No payment, escrow, invoice, transfer, refund, settlement, closing, notification, external action, or audit event is executed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/transaction-status"><Button size="lg" className="bg-primary hover:bg-primary/90">View transaction status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about closing access</Button></Link></div></div></Card>

        <section aria-labelledby="closing-state-heading"><h2 id="closing-state-heading" className="mb-4 text-xl font-semibold">Current closing evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{closingStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment credentials, contracts, signatures, government identifiers, or sensitive personal information here. An unavailable closing page is not evidence that an obligation, approval, signature, payment, settlement, or legal completion exists.</p></div></Card>
      </main>
    </div>
  );
}
