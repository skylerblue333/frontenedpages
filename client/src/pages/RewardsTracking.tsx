import { AlertTriangle, BarChart3, Database, Gift, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const trackingStates = [
  { label: "Reward event ledger", value: "Not configured", icon: Database },
  { label: "Accrual and balance data", value: "Unavailable", icon: BarChart3 },
  { label: "Redemption and entitlement state", value: "Unavailable", icon: Gift },
  { label: "Payout and settlement", value: "Disabled", icon: LockKeyhole },
];

export default function RewardsTracking() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Rewards Tracking"
        description="Rewards tracking is not enabled in this deployment. No event, points, balance, accrual, redemption, entitlement, or payout result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Reward tracking is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to an event ledger, user account, reward program, token contract, redemption service, notification channel, or payout processor. It cannot prove that activity earned a reward, that a balance is owed, or that a redemption or payment succeeded. No reward or financial result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Tracking readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production reward tracker requires canonical event provenance, immutable and idempotent ledger entries, program and eligibility rules, expiry and reversal logic, balance reconciliation, redemption limits, entitlement delivery, audit history, privacy controls, and independently verified payout and settlement state. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Database aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Event boundary</h3>
                  <p className="text-sm text-muted-foreground">No source event, user identity, program rule, eligibility condition, expiration, reversal, or anti-abuse record is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Ledger boundary</h3>
                  <p className="text-sm text-muted-foreground">No points, tokens, balance, accrual, conversion, history, reconciliation, or entitlement data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Redemption boundary</h3>
                  <p className="text-sm text-muted-foreground">No redemption, claim, transfer, payout, notification, transaction, confirmation, or settlement evidence is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/reward-system">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View reward status</Button>
              </Link>
              <Link href="/rewards-monitoring">
                <Button size="lg" variant="outline">View monitoring status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="rewards-tracking-state-heading">
          <h2 id="rewards-tracking-state-heading" className="mb-4 text-xl font-semibold">Current tracking state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trackingStates.map(({ label, value, icon: Icon }) => (
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
            <ShieldAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not treat this page as evidence of earned rewards, an account balance, an entitlement, a redemption, a payout, or a settled transaction. Verify program rules, event history, ledger state, and settlement through independently trusted sources until the required integration is available.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
