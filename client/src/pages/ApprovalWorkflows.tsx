import { AlertTriangle, ClipboardCheck, LockKeyhole, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const workflowStates = [
  { label: "Workflow definitions", value: "Not configured", icon: ClipboardCheck },
  { label: "Approver identities", value: "Unavailable", icon: Users },
  { label: "Decision records", value: "Unavailable", icon: LockKeyhole },
];

export default function ApprovalWorkflows() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Approval Workflows"
        description="Approval workflows are not enabled in this deployment. No request, approver, decision, or audit result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-amber-400/30 bg-amber-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <div>
              <h2 className="font-semibold text-amber-100">Workflow actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/80">
                This page does not create approval requests, assign reviewers, record decisions, send notifications, or claim that a workflow has completed. No governance action should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Approval readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production workflow requires versioned policies, authenticated actors, role-based permissions, conflict-of-interest controls, immutable decision records, notification delivery, expiration handling, and auditable changes. Those services are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ClipboardCheck aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Policy boundary</h3>
                  <p className="text-sm text-muted-foreground">No approval rules, thresholds, delegation, or escalation policy is active.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Users aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Identity boundary</h3>
                  <p className="text-sm text-muted-foreground">No approver directory, role assignment, or permission check is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <LockKeyhole aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Audit boundary</h3>
                  <p className="text-sm text-muted-foreground">No decision, timestamp, evidence, notification, or immutable audit record is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/documentation">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View documentation</Button>
              </Link>
              <Link href="/contact-us-form">
                <Button size="lg" variant="outline">Ask about integration</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="workflow-state-heading">
          <h2 id="workflow-state-heading" className="mb-4 text-xl font-semibold">Current workflow state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {workflowStates.map(({ label, value, icon: Icon }) => (
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
          <p className="text-sm leading-6 text-muted-foreground">
            Do not treat this page as evidence that a request was approved, rejected, escalated, or recorded. Use an independently verified workflow system until the required integration is available.
          </p>
        </Card>
      </div>
    </div>
  );
}
