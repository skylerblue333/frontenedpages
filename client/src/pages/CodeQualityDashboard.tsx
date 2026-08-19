import { AlertTriangle, BarChart3, Code2, FileWarning, GitBranch, LockKeyhole, ShieldCheck, TestTube } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const reviewStates = [
  { label: "Provider, model, prompt, and code context", value: "Unavailable", icon: Code2 },
  { label: "Quality score, ratings, issues, and suggestions", value: "Not calculated", icon: BarChart3 },
  { label: "Repository, revision, tests, and reproducible evidence", value: "Not connected", icon: GitBranch },
  { label: "Secrets, privacy, permissions, and audit", value: "Not available", icon: ShieldCheck },
];

export default function CodeQualityDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={BarChart3} title="Code Quality Dashboard" subtitle="AI code-review services are not connected in this deployment. No code, provider, quality score, ratings, issues, suggestions, repository action, or audit result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">AI code review is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen offered a code textarea, language selector, Evaluate Code button, quality grade, 100-point score, ratings, issue counts, suggestions, Auto-Improve Code, and Compare Versions actions. No verified model or provider, prompt boundary, source handling, repository authorization, test or lint runner, quality rubric, provenance, secret policy, or audit contract was connected. Those inputs and claims were removed because this route cannot establish that an AI review is accurate, safe, private, or appropriate to apply.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Code2 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">AI review readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production code review requires a verified provider and model, explicit source and prompt boundaries, language and dependency context, a versioned rubric, deterministic or reproducible evidence, test and lint integration, human review, diff and rollback controls, licensing and provenance, secret and personal-data handling, privacy, rate limits, and auditable changes. None of those controls are available through this route. This page does not generate, score, improve, or certify code.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No score claim</h3><p className="mt-1 text-sm text-muted-foreground">No grade, quality score, rating, issue count, severity, suggestion, explanation, or recommendation is calculated or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><TestTube aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No validation claim</h3><p className="mt-1 text-sm text-muted-foreground">No test, lint, typecheck, security scan, performance check, accessibility result, or release gate is run or asserted.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No mutation claim</h3><p className="mt-1 text-sm text-muted-foreground">No code, repository, branch, file, patch, commit, auto-improvement, version comparison, secret, or external action is read or changed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/code-quality"><Button size="lg" className="bg-primary hover:bg-primary/90">View quality status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about review access</Button></Link></div></div></Card>

        <section aria-labelledby="review-state-heading"><h2 id="review-state-heading" className="mb-4 text-xl font-semibold">Current code-review evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{reviewStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, API keys, access tokens, seed phrases, private keys, proprietary source code, credentials, or confidential repository details here. An unavailable AI review page is not evidence that code was evaluated, scored, improved, tested, secured, licensed, or ready to merge.</p></div></Card>
      </main>
    </div>
  );
}
