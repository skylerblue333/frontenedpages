import { AlertTriangle, FileCheck, Gavel, LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const complianceStates = [
  { label: "Identity verification", value: "Unavailable", icon: UserRound },
  { label: "Compliance assessment", value: "Not calculated", icon: ShieldCheck },
  { label: "Consent records", value: "Unavailable", icon: FileCheck },
  { label: "Data-rights requests", value: "Unavailable", icon: Gavel },
];

export default function ComplianceCenter() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Compliance Center"
        description="Compliance, identity verification, consent, data-rights, and regulatory evidence are not connected in this deployment."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Compliance services are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The registered compliance route is not backed by verified KYC, consent, data-rights, audit, policy, or regulatory services. This page does not collect identity documents or sensitive personal data, calculate a compliance score or risk result, approve identity, record consent, submit an export or deletion request, provide a legal deadline, or claim that any regulatory obligation has been met.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><ShieldCheck aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Compliance readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production compliance program requires a defined jurisdictional scope, legal basis, privacy notices, age and identity controls, an approved verification provider, data minimization and retention rules, consent versioning and withdrawal, access and deletion workflows, lawful exceptions, escalation and review, immutable evidence, role-based access, encryption, breach handling, and qualified legal and compliance ownership. None of these conclusions can be produced by this frontend-only surface.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UserRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No identity claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No document, identity, age, address, KYC level, risk score, approval, or rejection is collected or displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No consent claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No consent type, legal basis, version, timestamp, withdrawal, or processing preference is recorded here.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gavel aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No rights claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No access, correction, export, deletion, retention, deadline, fulfillment, or regulatory result is asserted.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/security"><Button size="lg" className="bg-primary hover:bg-primary/90">View security status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about compliance</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="compliance-state-heading">
          <h2 id="compliance-state-heading" className="mb-4 text-xl font-semibold">Current compliance evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {complianceStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not upload identity documents, private identifiers, financial information, or other sensitive personal data to this page. Do not rely on it as legal advice, proof of identity, a compliance certification, or evidence that a data-rights request was received or completed.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
