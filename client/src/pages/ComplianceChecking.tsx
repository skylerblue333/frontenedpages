import { AlertTriangle, FileCheck, Gavel, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const verificationStates = [
  { label: "Applicable requirements", value: "Unavailable", icon: Gavel },
  { label: "Control implementation", value: "Not verified", icon: ShieldCheck },
  { label: "Supporting evidence", value: "Unavailable", icon: FileCheck },
  { label: "Verification outcome", value: "Not reported", icon: LockKeyhole },
];

export default function ComplianceChecking() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Compliance Checking"
        description="Compliance verification is not connected in this deployment. No requirement, control, evidence, exception, certification, or pass/fail result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Verification is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to a defined compliance framework, jurisdictional rule set, control owner, evidence repository, testing procedure, exception process, legal reviewer, auditor, or certification workflow. It cannot verify that a requirement applies, a control works, evidence is complete, or a finding was resolved.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Verification readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A trustworthy compliance check requires a specified framework and period, applicable requirements, mapped controls, evidence provenance and freshness, repeatable test steps, sampling, exceptions, remediation, approval, retention, access control, independent review, and explicit language separating an internal check from an audit, certification, or legal opinion. Those inputs are not available here.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gavel aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No scope claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No framework, jurisdiction, requirement, period, applicability, or legal interpretation is selected.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No evidence claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No control test, sample, evidence item, exception, remediation, or approval is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No outcome claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No pass, fail, score, certification, audit opinion, or compliance conclusion is asserted.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/compliance-checker"><Button size="lg" className="bg-primary hover:bg-primary/90">View checker status</Button></Link>
              <Link href="/compliance-dashboard"><Button size="lg" variant="outline">View reporting status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about verification</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="verification-state-heading">
          <h2 id="verification-state-heading" className="mb-4 text-xl font-semibold">Current verification evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {verificationStates.map(({ label, value, icon: Icon }) => (
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
              This screen is not legal advice, an audit, a certification, or proof of compliance. Do not upload sensitive evidence or rely on this unavailable state for regulatory, contractual, financial, or security decisions.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
