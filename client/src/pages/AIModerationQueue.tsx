import { AlertTriangle, BarChart3, FileWarning, LockKeyhole, Shield, ShieldCheck, Users, Workflow, XCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const moderationStates = [
  { label: "Moderation queue and report records", value: "Unavailable", icon: Shield },
  { label: "AI flags, confidence, and model evaluation", value: "Not measured", icon: BarChart3 },
  { label: "Approve, remove, suspend, and appeal actions", value: "Disabled", icon: Workflow },
  { label: "Admin authorization, audit, and retention", value: "Not verified", icon: LockKeyhole },
];

export default function AIModerationQueue() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Moderation Queue"
        description="Moderation services are not connected in this deployment. No report, queue item, AI flag, accuracy score, content decision, account action, or audit record is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">AI Moderation Queue is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen called unverified moderation queue, stats, and resolve procedures and displayed AI accuracy, auto-moderated counts, action labels, content IDs, reasons, and approve/remove mutations. Those values and actions were not backed by verified contracts, model evidence, authorization, or audit handling, so the operational queue was removed rather than implying that content has been reviewed or changed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><ShieldCheck aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Moderation readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production moderation requires authenticated admin authorization, tenant isolation, report provenance, policy versioning, model and threshold metadata, human review, appeal handling, explainable evidence, false-positive monitoring, protected content access, immutable audit logs, rate limits, incident response, and explicit success, failure, timeout, and retry states. No such controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Shield aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No queue claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No report, content item, user, action, reason, timestamp, status, count, or queue-clear state is fabricated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No AI metric claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No accuracy, confidence, toxicity, spam, fraud, policy, recall, precision, or model-performance metric is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Workflow aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No enforcement claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No approve, remove, flag, suspend, restore, notify, appeal, or other content or account mutation can occur here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/admin"><Button size="lg" className="bg-primary hover:bg-primary/90">View admin status</Button></Link>
              <Link href="/ai-governance"><Button size="lg" variant="outline">View AI governance status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about moderation access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="moderation-state-heading">
          <h2 id="moderation-state-heading" className="mb-4 text-xl font-semibold">Current moderation evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {moderationStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, health details, confidential reports, or sensitive personal information here. Moderation decisions require current policy, evidence, authorized reviewers, and appeal safeguards.</p></div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3"><Users aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Content reports, models, policies, admin permissions, appeals, retention, audit, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div>
        </Card>

        <div className="sr-only"><XCircle aria-hidden="true" /></div>
      </main>
    </div>
  );
}
