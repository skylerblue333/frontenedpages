import { AlertTriangle, BarChart3, Cpu, Database, Hammer, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const miningStates = [
  { label: "Mining workers", value: "Not configured", icon: Cpu },
  { label: "Pool and chain data", value: "Unavailable", icon: Database },
  { label: "Rewards and balances", value: "Unavailable", icon: BarChart3 },
  { label: "Start/stop execution", value: "Disabled", icon: LockKeyhole },
];

export default function MiningDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Mining Dashboard"
        description="Mining is not enabled in this deployment. No hash rate, worker, reward, balance, profitability, uptime, or mining-session result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Mining actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not start or stop miners, connect pools, read chain work, calculate rewards, value assets, or send payouts. It does not simulate earnings or claim that mining is active. No mining or financial result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Mining readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production mining system requires approved hardware and worker identities, pool and chain configuration, authenticated control actions, verified hashrate and share accounting, difficulty and reward methodology, payout reconciliation, energy and infrastructure monitoring, failure recovery, and independently sourced market valuation. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Cpu aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Worker boundary</h3>
                  <p className="text-sm text-muted-foreground">No miner process, worker count, hashrate, hardware profile, pool, or uptime monitor is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Reward boundary</h3>
                  <p className="text-sm text-muted-foreground">No coins, rewards, payout, profitability, USD value, efficiency, difficulty, or historical session data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Control boundary</h3>
                  <p className="text-sm text-muted-foreground">No start, stop, pool credential, payout, administrative wallet, or operational control is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/mining-calculator">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View calculator status</Button>
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

        <section aria-labelledby="mining-state-heading">
          <h2 id="mining-state-heading" className="mb-4 text-xl font-semibold">Current mining state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {miningStates.map(({ label, value, icon: Icon }) => (
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
            <Hammer aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not provide pool credentials, payout addresses, wallet keys, or funds to this deployment. Do not treat this page as evidence of active mining, generated coins, rewards, profitability, or operational uptime.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
