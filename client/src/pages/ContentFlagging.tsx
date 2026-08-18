import { AlertTriangle, FileCheck2, Gavel, LockKeyhole, ScanSearch, ShieldAlert, UserRoundCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const moderationStates = [
  { label: "Reports and content evidence", value: "Unavailable", icon: FileCheck2 },
  { label: "Policy classification and confidence", value: "Not configured", icon: ScanSearch },
  { label: "Human review and appeals", value: "Not verified", icon: UserRoundCheck },
  { label: "Enforcement and audit history", value: "Disabled", icon: Gavel },
];

export default function ContentFlagging() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Content Flagging"
        description="Content moderation is not connected in this deployment. No report, policy violation, confidence score, review result, enforcement action, or appeal state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Content moderation is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to a content-report intake service, evidence store, policy taxonomy, classifier, reviewer queue, appeal workflow, or enforcement ledger. It cannot establish that content was reported, violated a rule, received an AI score, was reviewed, removed, restricted, restored, or appealed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Moderation readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Responsible moderation requires authenticated report ownership, preserved evidence, clear policy definitions, model and human-review methodology, uncertainty and false-positive handling, reviewer access controls, appeal and restoration processes, proportional enforcement, notification, retention, privacy, transparency, audit trails, and incident response. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileCheck2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No report claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No reporter, content item, evidence, reason, timestamp, target, or report status is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ScanSearch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No classification claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No policy category, AI score, confidence, reviewer decision, violation, or safety conclusion is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gavel aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No enforcement claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No removal, restriction, warning, ban, restoration, appeal, notification, or audit event is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/security-dashboard"><Button size="lg" className="bg-primary hover:bg-primary/90">View security status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about moderation access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="moderation-state-heading">
          <h2 id="moderation-state-heading" className="mb-4 text-xl font-semibold">Current moderation evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {moderationStates.map(({ label, value, icon: Icon }) => (
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
              Do not submit private content, identity documents, or sensitive personal information here. An unavailable moderation state is not proof that content is safe, unsafe, reported, reviewed, removed, or restored.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
