import { AlertTriangle, BarChart3, Coins, FileWarning, LockKeyhole, TimerReset } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const optionStates = [
  { label: "Available staking assets", value: "Unavailable", icon: Coins },
  { label: "APY and reward terms", value: "Not reported", icon: BarChart3 },
  { label: "Lock, fee, and penalty terms", value: "Not configured", icon: TimerReset },
  { label: "Stake and withdrawal execution", value: "Disabled", icon: LockKeyhole },
];

export default function StakingOptions() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Staking Options"
        description="Staking options are not connected in this deployment. No asset, APY, reward, lock, fee, penalty, position, or execution term is being offered."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Staking options are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to verified assets, pool contracts, reward-emission rules, pricing, lock and unlock semantics, fee schedules, slashing or penalty rules, custody, or transaction settlement. It cannot present an APY, promise a reward, calculate a return, or authorize staking or withdrawal.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Coins aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Terms readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A trustworthy staking-options page requires authoritative contract addresses and chain, asset eligibility, pool capacity, reward and emission methodology, variable-rate disclosures, lock and unlock rules, fees, penalties, slashing, claim timing, withdrawal behavior, custody and signing, failure recovery, reconciliation, audit evidence, and plain-language risk disclosures. None of those terms are verified here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No yield claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No APY, APR, reward rate, projection, return, participant count, or capacity is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <TimerReset aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No term claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No lock period, unlock date, fee, penalty, slashing, claim timing, or withdrawal rule is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileWarning aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No action claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No position, balance, signature, staking transaction, reward claim, transfer, or settlement can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/staking-portal"><Button size="lg" className="bg-primary hover:bg-primary/90">View staking status</Button></Link>
              <Link href="/wallet"><Button size="lg" variant="outline">View wallet status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about staking options</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="option-state-heading">
          <h2 id="option-state-heading" className="mb-4 text-xl font-semibold">Current staking-option evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {optionStates.map(({ label, value, icon: Icon }) => (
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
              Never enter a seed phrase or private key here. Do not stake, withdraw, or make a financial decision based on an unavailable option or unsupported term.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
