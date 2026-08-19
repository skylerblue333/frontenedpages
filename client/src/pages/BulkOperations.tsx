import { AlertTriangle, CheckSquare, ClipboardList, FileWarning, Layers3, LockKeyhole, RotateCcw, Search, ShieldCheck, Workflow, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const bulkStates = [
  { label: "Records, selection, scope, and authorization", value: "Unavailable", icon: CheckSquare },
  { label: "Validation, batching, idempotency, and queue state", value: "Not configured", icon: Layers3 },
  { label: "Partial failures, retries, rollback, and completion", value: "Disabled", icon: RotateCcw },
  { label: "Side effects, permissions, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function BulkOperations() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Bulk Operations"
        description="Bulk-operation services are not connected in this deployment. No record set, selection, validation, batch, queue, mutation, retry, rollback, completion, or external side effect is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Bulk Operations are unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified record source, selection model, scope and authorization policy, validation schema, idempotency key, execution queue, partial-failure strategy, retry and rollback behavior, notification provider, or audit contract was connected. Those controls were removed because the screen cannot establish that a batch mutation is safe, complete, or reversible.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Layers3 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Batch-workflow readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production bulk operations require explicit scope, authorization, dry-run and validation semantics, bounded batch size, idempotency, concurrency control, queue and progress state, partial failure handling, retry and rollback policy, side-effect receipts, rate limits, privacy filtering, audit, and clear draft, validated, queued, running, partially failed, completed, cancelled, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><CheckSquare aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No selection claim</h3><p className="mt-1 text-sm text-muted-foreground">No records, filters, scope, actor, permission, preview, count, mutation plan, or dry-run result is displayed or created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Zap aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No mutation claim</h3><p className="mt-1 text-sm text-muted-foreground">No account, wallet, content, user, education, AI, marketplace, payment, or administrative record is changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><RotateCcw aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No completion claim</h3><p className="mt-1 text-sm text-muted-foreground">No queue, progress, success count, failure count, retry, rollback, notification, receipt, or audit event is recorded.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/action-panel"><Button size="lg" className="bg-primary hover:bg-primary/90">View action status</Button></Link><Link href="/automation-rules"><Button size="lg" variant="outline">View automation status</Button></Link><Link href="/access-control"><Button size="lg" variant="outline">View access status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about bulk operations</Button></Link></div></div></Card>

        <section aria-labelledby="bulk-state-heading"><h2 id="bulk-state-heading" className="mb-4 text-xl font-semibold">Current batch evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{bulkStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, provider credentials, confidential record lists, or sensitive personal information here. An unavailable bulk-operations page is not evidence that a mutation ran, completed, partially failed, rolled back, or changed an external system.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Records, identity, permissions, workflows, queues, providers, notifications, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><ClipboardList aria-hidden="true" /><Workflow aria-hidden="true" /><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
