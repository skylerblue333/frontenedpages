import { AlertTriangle, Coins, Cpu, DollarSign, LockKeyhole, Network, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const poolStates = [
  { label: "Pool directory and network", value: "Unavailable", icon: Network },
  { label: "Hash-rate and worker telemetry", value: "Not configured", icon: Cpu },
  { label: "Payout and fee accounting", value: "Unavailable", icon: DollarSign },
  { label: "Mining authorization and settlement", value: "Disabled", icon: LockKeyhole },
];

export default function MiningPoolSelector() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Mining Pool Selector"
        description="Mining pool services are not connected in this deployment. No pool, network, hash rate, payout, fee, worker, or mining result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Mining pool integration is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to pool discovery, chain or algorithm configuration, worker telemetry, authenticated pool APIs, payout accounting, fee schedules, wallet custody, or settlement verification. It cannot determine whether a pool exists, is reachable, is profitable, accepted work, found a share, or paid a reward.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Coins aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Pool selection readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production pool selector requires verified network and algorithm support, independently sourced pool identity, TLS and endpoint validation, worker authentication, secure credential handling, live telemetry with freshness, share and block accounting, fee and payout rules, minimums, variance and profitability assumptions, failure and reconnect handling, custody boundaries, idempotency, reconciliation, and clear mining-risk disclosures. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Network aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No pool claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No pool name, endpoint, algorithm, network, region, uptime, or connectivity status is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Cpu aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No work claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No worker, hash rate, share, block, difficulty, telemetry, mining session, or profitability result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No payout claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No fee, minimum payout, reward, wallet address, credential, transfer, or settlement action is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/crypto-mine"><Button size="lg" className="bg-primary hover:bg-primary/90">View mining status</Button></Link>
              <Link href="/crypto-hub"><Button size="lg" variant="outline">View crypto status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about mining access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="pool-state-heading">
          <h2 id="pool-state-heading" className="mb-4 text-xl font-semibold">Current pool evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {poolStates.map(({ label, value, icon: Icon }) => (
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
              Never enter a mining credential or private key here. Do not connect hardware, authorize work, or make a profitability decision based on an unavailable pool state.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
