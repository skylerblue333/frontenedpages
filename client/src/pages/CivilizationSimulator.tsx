import { AlertTriangle, BarChart3, FileWarning, Globe2, Landmark, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const simulationStates = [
  { label: "Simulation model, era rules, and scenario state", value: "Not configured", icon: BarChart3 },
  { label: "Population, agents, territories, and activity", value: "Not measured", icon: UsersRound },
  { label: "Economy, tokens, governance, and treasury", value: "Not connected", icon: Landmark },
  { label: "Permissions, safety, provenance, and audit", value: "Not available", icon: ShieldCheck },
];

export default function CivilizationSimulator() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={Globe2} title="Civilization Simulator" subtitle="Civilization simulation services are not connected in this deployment. No era, population, agent activity, token supply, governance result, territory, economy, score, or future-state outcome is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Civilization simulation is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed a cinematic civilization dashboard with a 34% civilization score, 1,247 citizens, 89,421 AI actions, 8.4M SKY444 tokens minted, seven territories, governance values, economic health, and a 1,000-year future narrative. No verified simulation engine, population source, token ledger, governance dataset, territory model, scenario contract, or audit trail was connected. Those claims were removed because this route cannot establish that the numbers or outcomes are simulated, current, or real.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Globe2 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Simulation readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production civilization simulator requires explicit model boundaries, deterministic scenario inputs, versioned rules, time-step semantics, population and agent definitions, economic and governance models, token and treasury separation, reproducible outputs, safety review, provenance, privacy, and a clear distinction between fictional scenario content and live platform data. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No simulation claim</h3><p className="mt-1 text-sm text-muted-foreground">No era, score, scenario, timeline, population, agent, growth rate, forecast, ranking, or future-state result is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Landmark aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No ledger claim</h3><p className="mt-1 text-sm text-muted-foreground">No token, balance, supply, economy, treasury, proposal, vote, pass rate, territory, revenue, or transaction is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No governance claim</h3><p className="mt-1 text-sm text-muted-foreground">No citizen, agent, law, ministry, council, reward, permission, policy, external action, or audit event is created or granted.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/chain-explorer"><Button size="lg" className="bg-primary hover:bg-primary/90">View blockchain status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about simulation access</Button></Link></div></div></Card>

        <section aria-labelledby="simulation-state-heading"><h2 id="simulation-state-heading" className="mb-4 text-xl font-semibold">Current simulation evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{simulationStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not interpret this page as a real digital nation, economic forecast, governance system, token ledger, population registry, or investment opportunity. Do not enter passwords, access tokens, seed phrases, private keys, wallet addresses, or sensitive personal information here.</p></div></Card>
      </main>
    </div>
  );
}
