import { AlertTriangle, Award, BarChart3, Coins, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const rewardStates = [
  { label: "Reward rules and programs", value: "Not configured", icon: Award },
  { label: "Eligibility and accrual", value: "Unavailable", icon: BarChart3 },
  { label: "User reward balance", value: "Unavailable", icon: Coins },
  { label: "Claim and payout execution", value: "Disabled", icon: LockKeyhole },
];

export default function RewardSystem() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Reward System"
        description="Rewards are not enabled in this deployment. No points, tokens, eligibility, balance, accrual, claim, or payout result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Reward actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect a reward ledger, eligibility rules, event processor, token contract, user account balance, payout service, or claim transaction. It does not award, accrue, convert, redeem, or confirm rewards. No user entitlement or financial outcome should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Reward readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production rewards system requires explicit program rules, event provenance, anti-abuse controls, eligibility and expiration logic, ledger idempotency, balance reconciliation, tax and privacy treatment, redemption limits, payout authorization, and independent verification of any token or financial settlement. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Award aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Program boundary</h3>
                  <p className="text-sm text-muted-foreground">No reward program, event rule, eligibility condition, expiration, multiplier, or anti-abuse policy is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Ledger boundary</h3>
                  <p className="text-sm text-muted-foreground">No points, tokens, balance, accrual, conversion, redemption, history, or reconciliation data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Payout boundary</h3>
                  <p className="text-sm text-muted-foreground">No claim permission, payout, token transfer, transaction hash, confirmation, or financial entitlement is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/block-rewards">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View block reward status</Button>
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

        <section aria-labelledby="reward-system-state-heading">
          <h2 id="reward-system-state-heading" className="mb-4 text-xl font-semibold">Current reward-system state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {rewardStates.map(({ label, value, icon: Icon }) => (
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
              Do not treat this page as evidence of earned points, token ownership, eligibility, a redeemable balance, a payout, or a confirmed transaction. Verify reward rules, ledgers, expiry, and settlement through independently trusted sources until the required integration is available.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
