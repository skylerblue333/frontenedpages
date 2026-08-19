import { AlertTriangle, CheckCircle2, CloudUpload, Database, FileCheck2, FileWarning, LockKeyhole, Search, ShieldCheck, Table2, UploadCloud } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const uploadStates = [
  { label: "Files, formats, schema, columns, and ownership", value: "Unavailable", icon: Table2 },
  { label: "Validation, preview, mapping, and duplicate handling", value: "Not configured", icon: FileCheck2 },
  { label: "Storage, processing, retries, and partial failures", value: "Disabled", icon: CloudUpload },
  { label: "Permissions, retention, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function BulkUpload() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Bulk Upload"
        description="Bulk-upload services are not connected in this deployment. No file, row, schema, mapping, validation, preview, upload, processing job, imported record, failure, retry, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Bulk Upload is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, and described a CSV product-import tool, but no verified file input, MIME and size validation, schema contract, preview, column mapping, duplicate strategy, object-storage provider, processing queue, rollback policy, privacy boundary, or audit contract was connected. Those controls were removed because the screen cannot establish that an upload is safe, valid, complete, or reversible.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><UploadCloud aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Import-workflow readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production bulk upload requires authenticated ownership, file-type and size validation, malware scanning, schema and column mapping, preview and dry-run semantics, row-level errors, duplicate and idempotency rules, isolated storage, bounded processing, partial-failure and rollback policy, access controls, privacy filtering, retention and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><FileCheck2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No file claim</h3><p className="mt-1 text-sm text-muted-foreground">No CSV, spreadsheet, image, document, row, column, schema, mapping, preview, record count, or validation result is displayed or stored.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No import claim</h3><p className="mt-1 text-sm text-muted-foreground">No product, user, wallet, content, education, marketplace, payment, or administrative record is created or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No processing claim</h3><p className="mt-1 text-sm text-muted-foreground">No upload, scan, queue, progress, success count, failure count, retry, rollback, notification, or audit event is recorded.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/content-upload"><Button size="lg" className="bg-primary hover:bg-primary/90">View upload status</Button></Link><Link href="/content-vault"><Button size="lg" variant="outline">View content status</Button></Link><Link href="/access-control"><Button size="lg" variant="outline">View access status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about bulk upload</Button></Link></div></div></Card>

        <section aria-labelledby="upload-state-heading"><h2 id="upload-state-heading" className="mb-4 text-xl font-semibold">Current import evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{uploadStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, provider credentials, confidential spreadsheets, personal data, or sensitive business records here. An unavailable bulk-upload page is not evidence that a file was accepted, scanned, stored, processed, imported, or deleted.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Files, schemas, storage, records, permissions, queues, privacy, notifications, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><CheckCircle2 aria-hidden="true" /><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
