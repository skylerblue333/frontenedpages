import { AlertTriangle, Clock3, Database, FileSearch, LockKeyhole, ShieldAlert, UserRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const auditStates = [
  { label: "Event source and schema", value: "Not configured", icon: Database },
  { label: "Actor, time, and request context", value: "Unavailable", icon: UserRound },
  { label: "Retention and tamper evidence", value: "Unavailable", icon: Clock3 },
  { label: "Review and compliance evidence", value: "Disabled", icon: ShieldAlert },
];

export default function AuditLogs() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Audit Logs"
        description="Audit logging is not enabled in this deployment. No event, actor, timestamp, request context, retention, or compliance result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Audit evidence is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to an append-only event store, identity source, request context, clock-synchronized logging pipeline, retention policy, tamper-evidence control, alerting system, or review workflow. It cannot prove that an action occurred, who performed it, when it occurred, what data was affected, or that logs are complete. No security or compliance conclusion should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Audit readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production audit-log surface requires a defined event taxonomy, actor and service identity, authorization context, request correlation, trusted timestamps, before-and-after semantics, sensitive-data redaction, append-only storage, integrity controls, retention and deletion rules, alerting, access review, export, and independent evidence of completeness. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Database aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Event boundary</h3>
                  <p className="text-sm text-muted-foreground">No event taxonomy, schema, source, correlation ID, before-and-after value, or redaction policy is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <UserRound aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Identity boundary</h3>
                  <p className="text-sm text-muted-foreground">No user, service, role, permission, IP, device, request, or authentication context is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Evidence boundary</h3>
                  <p className="text-sm text-muted-foreground">No retention, integrity, export, alert, review, incident, deletion, or compliance evidence is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/security">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View security status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="outline"><FileSearch aria-hidden="true" className="mr-2 h-4 w-4" /> View documentation</Button>
              </Link>
              <Link href="/contact-us-form">
                <Button size="lg" variant="ghost">Ask about observability</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="audit-state-heading">
          <h2 id="audit-state-heading" className="mb-4 text-xl font-semibold">Current audit state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {auditStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
                    <p className="text-lg font-semibold">{value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not treat this page as evidence that a security event was logged, an actor was identified, logs are complete, data was retained, or a compliance obligation was satisfied. Use independently trusted observability and audit systems until the required integration is available.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
