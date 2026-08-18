import { AlertTriangle, BarChart3, FileWarning, LockKeyhole, Scale, ShieldCheck, SlidersHorizontal, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const governanceStates = [
  { label: "AI inventory, owners, and model versions", value: "Not configured", icon: BarChart3 },
  { label: "Policies, approvals, and risk assessments", value: "Not verified", icon: Scale },
  { label: "Automation, tools, and decision permissions", value: "Disabled", icon: Workflow },
  { label: "Security, privacy, audit, and incident evidence", value: "Unavailable", icon: ShieldCheck },
];

export default function AIGovernance() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Governance"
        description="AI governance controls are not connected in this deployment. No policy coverage, model inventory, risk assessment, performance metric, security certification, approval, or automation state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">AI governance is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen displayed advanced analytics, autonomous decision-making, robust encryption, processing and uptime metrics, latency, throughput, and action buttons without connected governance workflows or measurement evidence. Those claims and inert actions were removed rather than presenting unsupported controls or certifications.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Scale aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Governance readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production AI governance requires an inventory of models and use cases, named owners, risk classification, data and privacy assessments, policy and approval workflows, evaluation evidence, monitoring, incident response, access controls, human oversight, vendor and license review, change management, retention rules, and audit-ready records. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No metric claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No uptime, latency, throughput, processing speed, accuracy, safety, coverage, or compliance metric is invented.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <SlidersHorizontal aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No control claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No policy, approval, model setting, automation, decision, encryption, or security control can be configured here.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No certification claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No compliance certification, robust protection, audit completion, incident readiness, or privacy guarantee is represented.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/ai-control-center"><Button size="lg" className="bg-primary hover:bg-primary/90">View AI controls</Button></Link>
              <Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about governance access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="governance-state-heading">
          <h2 id="governance-state-heading" className="mb-4 text-xl font-semibold">Current governance evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {governanceStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter passwords, access tokens, seed phrases, private keys, regulated data, confidential business information, or personal information here. Governance status must be based on current evidence, not static marketing copy.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model inventory, policy workflows, approvals, security, privacy, incident response, billing, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
