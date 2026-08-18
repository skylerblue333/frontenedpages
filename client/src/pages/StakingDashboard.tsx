import { AlertTriangle, BarChart3, Coins, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const stakingStates = [
  { label: "Supported staking protocols", value: "Not configured", icon: Coins },
  { label: "User positions and rewards", value: "Unavailable", icon: BarChart3 },
  { label: "Wallet signing", value: "Disabled", icon: LockKeyhole },
  { label: "Risk and settlement", value: "Unavailable", icon: ShieldAlert },
];

export default function StakingDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Staking Dashboard"
        description="Staking is not enabled in this deployment. No position, balance, APY, reward, lockup, or transaction result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Staking actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to staking contracts, validators, wallets, reward accounting, price oracles, or settlement monitors. It does not stake, unstake, claim rewards, calculate returns, or confirm a transaction. No staking outcome should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Staking readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production staking system requires an explicit protocol and validator allowlist, contract and network validation, wallet permission boundaries, lockup and withdrawal rules, reward methodology, slashing and downtime handling, price provenance, fee disclosure, transaction idempotency, and independently verified settlement. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Coins aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Protocol boundary</h3>
                  <p className="text-sm text-muted-foreground">No supported chain, contract, validator, token, lockup, fee, or withdrawal rule is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Reward boundary</h3>
                  <p className="text-sm text-muted-foreground">No position, principal, APY, APR, reward accrual, compounding, price, or historical performance data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Risk boundary</h3>
                  <p className="text-sm text-muted-foreground">No slashing, validator failure, liquidity, lockup, withdrawal, loss, or settlement status is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/a-p-y-tracking">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View yield status</Button>
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

        <section aria-labelledby="staking-state-heading">
          <h2 id="staking-state-heading" className="mb-4 text-xl font-semibold">Current staking state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stakingStates.map(({ label, value, icon: Icon }) => (
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
            Do not enter wallet keys into this deployment and do not treat this page as an investment recommendation or evidence of a staking position, reward, or transaction. Verify contract state, validator status, fees, lockups, slashing risk, and settlement through independently trusted providers until the required integration is available.
          </p>
        </Card>
      </div>
    </div>
  );
}
