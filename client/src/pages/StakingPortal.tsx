import { AlertTriangle, BarChart3, Coins, Gift, LockKeyhole, ShieldCheck, TimerReset } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const stakingStates = [
  { label: "Pools and terms", value: "Unavailable", icon: Coins },
  { label: "APY and reward accounting", value: "Not reported", icon: BarChart3 },
  { label: "User positions and custody", value: "Unavailable", icon: LockKeyhole },
  { label: "Claim and withdrawal", value: "Disabled", icon: Gift },
];

export default function StakingPortal() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Staking Portal"
        description="Staking services are not connected in this deployment. No APY, pool, position, reward, lock period, penalty, claim, or withdrawal result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Staking is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed 8–20% APY, historical performance, reward projections, total staked value, active stakers, lock periods, penalties, user positions, earned rewards, and successful staking or reward-claim mutations. The registered staking backend route is currently a generic feature router, so those claims and controls were not verified and have been removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Coins aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Staking readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production staking service requires verified asset and chain configuration, transparent pool terms, source-of-truth balances, custody and signing boundaries, reward-emission and accounting rules, lock and unlock semantics, early-withdrawal treatment, slashing and failure handling, idempotent mutations, claim and settlement verification, reconciliation, rate limits, audit evidence, and clear financial risk disclosures. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No yield claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No APY, rate history, projection, daily reward, participant count, or total staked metric is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <TimerReset aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No lock claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No pool, lock period, unlock date, minimum, penalty, slashing, or withdrawal term is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No custody claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No position, balance, earned reward, claim, signature, transfer, or settlement action can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/wallet"><Button size="lg" className="bg-primary hover:bg-primary/90">View wallet status</Button></Link>
              <Link href="/crypto-hub"><Button size="lg" variant="outline">View crypto status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about staking access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="staking-state-heading">
          <h2 id="staking-state-heading" className="mb-4 text-xl font-semibold">Current staking evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stakingStates.map(({ label, value, icon: Icon }) => (
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
              Never enter a seed phrase or private key here. Do not stake, transfer, or make a financial decision based on a rendered APY, projection, empty state, or unavailable status.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
