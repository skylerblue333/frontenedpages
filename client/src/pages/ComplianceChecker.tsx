import { AlertTriangle, FileCheck, Gavel, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const checkStates = [
  { label: "Control catalog", value: "Unavailable", icon: FileCheck },
  { label: "Evidence and test results", value: "Not verified", icon: ShieldCheck },
  { label: "Jurisdictional assessment", value: "Unavailable", icon: Gavel },
  { label: "Certification or attestation", value: "Not reported", icon: LockKeyhole },
];

export default function ComplianceChecker() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Compliance Checker"
        description="Compliance checks are not connected in this deployment. No control, evidence, jurisdiction, certification, score, or pass/fail result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Compliance assessment is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to a control catalog, jurisdictional rules, evidence store, test framework, policy owner, legal review, certification body, or attestation workflow. It cannot determine whether a requirement applies, a control operates effectively, a jurisdiction is covered, or a certification or filing exists.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Assessment readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production compliance checker requires a defined framework and jurisdiction, mapped controls, accountable owners, evidence sources, test procedures, sampling and time periods, exceptions, remediation and due dates, legal interpretation, review and approval, immutable records, access controls, and a clear distinction between internal assessment, audit, certification, and legal advice. None of those inputs are available here.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No control claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No control, policy, procedure, owner, scope, frequency, or operating result is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No evidence claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No test, sample, exception, remediation, evidence file, audit, certification, or attestation is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gavel aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No legal claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No jurisdictional conclusion, regulatory status, legal advice, or compliance score is provided.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/compliance-center"><Button size="lg" className="bg-primary hover:bg-primary/90">View compliance status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about assessment access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="check-state-heading">
          <h2 id="check-state-heading" className="mb-4 text-xl font-semibold">Current assessment evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {checkStates.map(({ label, value, icon: Icon }) => (
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
              This screen is not legal advice, an audit, a certification, or proof of compliance. Do not submit sensitive evidence or rely on it for regulatory, contractual, financial, or security decisions until an approved assessment workflow is connected.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
