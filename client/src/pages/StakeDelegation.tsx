import { AlertTriangle, BarChart3, Coins, LockKeyhole, Network, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const delegationStates = [
  { label: "Chain and validator registry", value: "Not configured", icon: Network },
  { label: "Delegation positions and rewards", value: "Unavailable", icon: BarChart3 },
  { label: "Wallet permission and signing", value: "Disabled", icon: LockKeyhole },
  { label: "Unstaking and settlement", value: "Unavailable", icon: ShieldAlert },
];

export default function StakeDelegation() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Stake Delegation"
        description="Stake delegation is not enabled in this deployment. No validator, stake balance, reward, lockup, or transaction result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Delegation actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a proof-of-stake chain, validator registry, staking contract, wallet, reward ledger, or settlement monitor. It does not delegate, undelegate, claim rewards, calculate returns, or confirm a transaction. No staking or financial outcome should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Delegation readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production delegation system requires a chain and validator allowlist, validator commission and uptime provenance, stake and lockup rules, wallet permission boundaries, transaction simulation, reward and slashing accounting, unbonding and redelegation handling, fee disclosure, and independently verified settlement. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Network aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Network boundary</h3>
                  <p className="text-sm text-muted-foreground">No chain, validator, commission, uptime, voting power, delegation capacity, or contract source is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Coins aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Position boundary</h3>
                  <p className="text-sm text-muted-foreground">No stake, delegation, reward, APY, APR, compounding, commission, slashing, or unbonding data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Settlement boundary</h3>
                  <p className="text-sm text-muted-foreground">No wallet permission, signature, delegation transaction, withdrawal, confirmation, or settlement evidence is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/staking-dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View staking status</Button>
              </Link>
              <Link href="/a-p-y-tracking">
                <Button size="lg" variant="outline">View yield status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="delegation-state-heading">
          <h2 id="delegation-state-heading" className="mb-4 text-xl font-semibold">Current delegation state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {delegationStates.map(({ label, value, icon: Icon }) => (
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
            Do not enter seed phrases or private keys into this deployment and do not treat this page as evidence of a validator, delegation position, reward, withdrawal, or settled transaction. Verify chain state, validator status, fees, lockups, slashing risk, and settlement through independently trusted sources until the required integration is available.
          </p>
        </Card>
      </div>
    </div>
  );
}
