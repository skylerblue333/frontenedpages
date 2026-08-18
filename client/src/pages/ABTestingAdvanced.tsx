import { AlertTriangle, BarChart3, FileWarning, GitBranch, LockKeyhole, Microscope, ShieldCheck, Split, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const advancedExperimentStates = [
  { label: "Multivariate experiments and variant governance", value: "Unavailable", icon: Split },
  { label: "Segmentation, allocation, and exposure events", value: "Not configured", icon: Users },
  { label: "Statistical analysis, guardrails, and heterogeneity", value: "Not measured", icon: Microscope },
  { label: "Feature flags, staged release, and rollback", value: "Disabled", icon: GitBranch },
];

export default function ABTestingAdvanced() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Advanced A/B Testing"
        description="Advanced experimentation services are not connected in this deployment. No multivariate test, segment, allocation, exposure, statistical result, guardrail, feature flag, rollout, or rollback state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Advanced experimentation is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified multivariate experiment registry, allocation service, segment contract, statistical engine, feature-flag system, consent boundary, or rollback control was connected. Those controls were removed because the screen cannot establish that an advanced experiment exists or that any result is valid.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Microscope aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Advanced experimentation readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production advanced-experimentation system requires pre-registration, deterministic allocation, segment eligibility, exposure and contamination controls, sample-ratio monitoring, power and sequential methods, multiple-comparison handling, heterogeneity analysis, guardrails, privacy, approvals, staged rollout, rollback, and clear partial, stale, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Users aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No segment claim</h3><p className="mt-1 text-sm text-muted-foreground">No audience, cohort, allocation, variant, exposure, account, or behavioral segment is selected, assigned, or stored.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No analysis claim</h3><p className="mt-1 text-sm text-muted-foreground">No lift, confidence interval, p-value, significance, guardrail, subgroup result, causal conclusion, or winning variant is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No release claim</h3><p className="mt-1 text-sm text-muted-foreground">No feature flag, staged release, approval, rollout, rollback, notification, or production configuration is changed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/ab-testing"><Button size="lg" className="bg-primary hover:bg-primary/90">View A/B testing status</Button></Link><Link href="/analytics"><Button size="lg" variant="outline">View analytics status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about advanced testing</Button></Link></div></div></Card>

        <section aria-labelledby="advanced-experiment-state-heading"><h2 id="advanced-experiment-state-heading" className="mb-4 text-xl font-semibold">Current advanced-testing evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{advancedExperimentStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential hypotheses, proprietary metrics, or sensitive personal information here. An unavailable advanced-testing page is not evidence of a valid experiment, statistical result, rollout, or product decision.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Experiments, feature flags, events, identity, analytics, approvals, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
