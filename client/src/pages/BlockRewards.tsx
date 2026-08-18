import { AlertTriangle, BarChart3, Blocks, Coins, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const rewardStates = [
  { label: "Chain and issuance rules", value: "Not configured", icon: Blocks },
  { label: "Reward indexer", value: "Unavailable", icon: BarChart3 },
  { label: "User rewards and payouts", value: "Unavailable", icon: Coins },
  { label: "Claim execution", value: "Disabled", icon: LockKeyhole },
];

export default function BlockRewards() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Block Rewards"
        description="Block reward data is not enabled in this deployment. No issuance, reward balance, payout, claim, or distribution result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Reward actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a chain, block indexer, issuance schedule, validator or miner records, reward ledger, wallet, or payout service. It does not calculate rewards, create claims, or confirm distributions. No reward or financial result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Reward-data readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production block-reward surface requires an explicit chain and issuance model, canonical block data, reorganization handling, address and validator attribution, reward and fee accounting, payout reconciliation, claim authorization, and independently verified settlement. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Blocks aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Chain boundary</h3>
                  <p className="text-sm text-muted-foreground">No chain ID, block height, issuance rule, validator set, miner attribution, or canonical source is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Accounting boundary</h3>
                  <p className="text-sm text-muted-foreground">No reward amount, fee split, balance, payout, historical distribution, or market value is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Claim boundary</h3>
                  <p className="text-sm text-muted-foreground">No claim permission, signature, payout request, transaction hash, confirmation, or settlement evidence is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/chain-explorer">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View chain status</Button>
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

        <section aria-labelledby="reward-state-heading">
          <h2 id="reward-state-heading" className="mb-4 text-xl font-semibold">Current reward state</h2>
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
          <p className="text-sm leading-6 text-muted-foreground">
            Do not enter wallet keys into this deployment and do not treat this page as evidence of issued rewards, an owed balance, a payout, a claim, or a confirmed transaction. Verify issuance, attribution, fees, and settlement through independently trusted sources until the required integration is available.
          </p>
        </Card>
      </div>
    </div>
  );
}
