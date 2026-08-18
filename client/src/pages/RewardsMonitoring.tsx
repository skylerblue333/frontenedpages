import { AlertTriangle, BellRing, Database, LineChart, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const monitoringStates = [
  { label: "Reward data source", value: "Not configured", icon: Database },
  { label: "Accrual and balance telemetry", value: "Unavailable", icon: LineChart },
  { label: "Alerts and notifications", value: "Disabled", icon: BellRing },
  { label: "Payout and settlement health", value: "Unavailable", icon: ShieldAlert },
];

export default function RewardsMonitoring() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Rewards Monitoring"
        description="Reward monitoring is not enabled in this deployment. No accrual, balance, rate, alert, payout, or settlement-health result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Reward monitoring is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a reward ledger, event stream, user balance service, rate source, payout processor, notification channel, or incident monitor. It cannot detect missing accruals, failed payouts, stale data, or account anomalies. No reward or operational status should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Monitoring readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Production rewards monitoring requires canonical event ingestion, idempotent ledger reconciliation, freshness and completeness checks, rate and balance methodology, alert thresholds, notification delivery, incident ownership, audit trails, privacy controls, and independent verification of payout and settlement state. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Database aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Source boundary</h3>
                  <p className="text-sm text-muted-foreground">No event stream, ledger, account, token, protocol, reward rate, or payout source is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BellRing aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Alert boundary</h3>
                  <p className="text-sm text-muted-foreground">No freshness, missing event, balance mismatch, accrual, payout, anomaly, or notification status is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Settlement boundary</h3>
                  <p className="text-sm text-muted-foreground">No reward balance, claim, transfer, payout, transaction, confirmation, or incident resolution is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/reward-system">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View reward status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="outline">View documentation</Button>
              </Link>
              <Link href="/contact-us-form">
                <Button size="lg" variant="ghost">Ask about integration</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="monitoring-state-heading">
          <h2 id="monitoring-state-heading" className="mb-4 text-xl font-semibold">Current monitoring state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {monitoringStates.map(({ label, value, icon: Icon }) => (
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
              Do not treat this page as evidence that rewards accrued, a balance is owed, an alert was delivered, a payout succeeded, or a settlement was verified. Use independently trusted records until the required monitoring integration is available.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
