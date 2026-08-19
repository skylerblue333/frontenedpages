import { AlertTriangle, Code2, FileWarning, GitBranch, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const completionStates = [
  { label: "Model, provider, prompt, and code context", value: "Unavailable", icon: Sparkles },
  { label: "Repository, language, dependencies, and tests", value: "Not configured", icon: GitBranch },
  { label: "Generated suggestions, patches, and quality checks", value: "Disabled", icon: Code2 },
  { label: "Secrets, permissions, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function CodeCompletion() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={Code2} title="Code Completion" subtitle="AI code-completion services are not connected in this deployment. No model, prompt, code context, suggestion, patch, test, quality score, repository action, or audit result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Code completion is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen was a coming-soon placeholder and provided no verified AI provider, model, prompt or code-context contract, repository connection, language and dependency metadata, patch workflow, test runner, quality policy, secret boundary, or audit trail. No editor or generation control is shown because this route cannot establish that generated code is safe, correct, licensed, or appropriate to apply.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Code2 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">AI code-assistance readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production code completion requires a verified model and provider, explicit prompt and context boundaries, repository authorization, language and dependency awareness, secure handling of secrets, diff review, test and lint validation, licensing and provenance checks, human approval, privacy, rate limits, and auditable mutations. None of those controls are available through this route. This page does not produce code or a software-quality guarantee.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Sparkles aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No generation claim</h3><p className="mt-1 text-sm text-muted-foreground">No prompt, model, code context, completion, suggestion, explanation, quality score, or recommendation is generated or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><GitBranch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No repository claim</h3><p className="mt-1 text-sm text-muted-foreground">No repository, branch, file, dependency, issue, pull request, commit, patch, test, lint, or deployment action is read or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No safety claim</h3><p className="mt-1 text-sm text-muted-foreground">No secret, token, private key, license, vulnerability, privacy, permission, runtime, or security result is inspected or asserted.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/ai-control-center"><Button size="lg" className="bg-primary hover:bg-primary/90">View AI status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about code access</Button></Link></div></div></Card>

        <section aria-labelledby="completion-state-heading"><h2 id="completion-state-heading" className="mb-4 text-xl font-semibold">Current code-completion evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{completionStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, API keys, access tokens, seed phrases, private keys, proprietary source code, credentials, or confidential repository details here. An unavailable code-completion page is not evidence that generated code is correct, secure, licensed, tested, or ready to merge.</p></div></Card>
      </main>
    </div>
  );
}
