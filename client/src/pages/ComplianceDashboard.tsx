import { AlertTriangle, BarChart3, FileCheck, Gavel, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const dashboardStates = [
  { label: "Compliance framework", value: "Not configured", icon: FileCheck },
  { label: "Control and evidence status", value: "Unavailable", icon: ShieldCheck },
  { label: "Findings and remediation", value: "Unavailable", icon: Gavel },
  { label: "Reporting and certification", value: "Not reported", icon: BarChart3 },
];

export default function ComplianceDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Compliance Dashboard"
        description="Compliance reporting is not connected in this deployment. No framework, control, evidence, finding, remediation, certification, or score is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Compliance reporting is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to an approved framework, control register, evidence store, finding workflow, remediation tracker, legal review, audit process, certification body, or reporting source of truth. It cannot show a compliance posture, determine a requirement, verify a control, track an issue, or claim that a report or certification is complete.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Reporting readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production compliance dashboard needs a named framework and scope, mapped controls, owners, evidence freshness, test and sampling results, exceptions, risk treatment, remediation due dates, approval history, legal interpretation, immutable audit records, access controls, report versioning, and a clear distinction between internal reporting, audit, certification, and legal advice. None of those data sources are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No framework claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No jurisdiction, framework, scope, control owner, or reporting period is selected or asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No posture claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No compliance percentage, score, control status, evidence freshness, or certification readiness is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gavel aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No finding claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No finding, severity, exception, owner, remediation, due date, approval, or closure is inferred.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/compliance-checker"><Button size="lg" className="bg-primary hover:bg-primary/90">View checker status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about reporting</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="dashboard-state-heading">
          <h2 id="dashboard-state-heading" className="mb-4 text-xl font-semibold">Current reporting evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dashboardStates.map(({ label, value, icon: Icon }) => (
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
              This screen is not an audit, certification, legal opinion, or proof of compliance. Do not export, publish, or rely on a compliance report until its sources, methodology, approvals, and evidence are independently verified.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
