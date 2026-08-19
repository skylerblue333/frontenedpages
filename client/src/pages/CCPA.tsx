import { AlertTriangle, ClipboardCheck, Database, FileWarning, Fingerprint, Gavel, LockKeyhole, Search, ShieldCheck, Trash2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const privacyStates = [
  { label: "Identity, residency, consent, and request ownership", value: "Unavailable", icon: Fingerprint },
  { label: "Data inventory, purposes, vendors, and retention", value: "Not configured", icon: Database },
  { label: "Access, deletion, correction, opt-out, and appeal", value: "Disabled", icon: ClipboardCheck },
  { label: "Legal review, deadlines, disclosures, and audit", value: "Not available", icon: ShieldCheck },
];

export default function CCPA() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="CCPA Privacy Rights"
        description="CCPA privacy-rights services are not connected in this deployment. No identity, residency, consent, data inventory, consumer request, access export, deletion, correction, opt-out, appeal, disclosure, deadline, or compliance result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">CCPA Privacy Rights are unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified privacy request intake, identity and residency verification, data inventory, processing-purpose map, vendor record, retention policy, legal review, request deadline, disclosure workflow, deletion executor, opt-out mechanism, appeal path, or audit contract was connected. Those controls were removed because the screen cannot establish that a privacy request is valid, fulfilled, or legally complete.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><ShieldCheck aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Privacy-rights readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production privacy-rights handling requires jurisdiction and residency semantics, identity verification, request authentication, data-source discovery, purpose and category mapping, service-provider coordination, retention and legal-hold rules, access and deletion safeguards, opt-out and appeal workflows, deadline tracking, minimization, secure delivery, legal review, and audit. None of those controls are available through this route. This screen is informational and is not legal advice or a compliance certification.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><ClipboardCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No request claim</h3><p className="mt-1 text-sm text-muted-foreground">No consumer, identity, residency, request type, ticket, deadline, status, verification, export, deletion, correction, or appeal is recorded.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Trash2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No deletion claim</h3><p className="mt-1 text-sm text-muted-foreground">No account, profile, wallet, content, analytics, provider, backup, or personal record is discovered, changed, deleted, or retained.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Gavel aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No compliance claim</h3><p className="mt-1 text-sm text-muted-foreground">No legal conclusion, CCPA applicability decision, disclosure, certification, deadline result, vendor attestation, or audit evidence is issued.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/privacy"><Button size="lg" className="bg-primary hover:bg-primary/90">View privacy status</Button></Link><Link href="/data-management"><Button size="lg" variant="outline">View data status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about privacy rights</Button></Link></div></div></Card>

        <section aria-labelledby="privacy-state-heading"><h2 id="privacy-state-heading" className="mb-4 text-xl font-semibold">Current privacy evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{privacyStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, government identifiers, confidential data requests, or sensitive personal information here. An unavailable privacy-rights page is not evidence that a request was received, verified, fulfilled, deleted, disclosed, appealed, or legally complete.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Identity, data sources, providers, deletion, security, legal review, privacy, permissions, and observability remain separate integrations. This screen does not replace any of them and does not provide legal advice.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
