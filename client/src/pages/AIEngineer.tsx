import { AlertTriangle, Bot, Code2, FileWarning, GitBranch, LockKeyhole, Network, Play, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const engineeringStates = [
  { label: "Agent identities, models, and levels", value: "Unavailable", icon: Bot },
  { label: "Chat, code generation, review, and audit", value: "Disabled", icon: Code2 },
  { label: "Autonomous sprints and task execution", value: "Blocked", icon: Play },
  { label: "Repository, deployment, Web3, and security actions", value: "Not configured", icon: GitBranch },
];

export default function AIEngineer() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Engineer"
        description="AI engineering services are not connected in this deployment. No agent, model, code result, autonomous sprint, repository action, deployment, blockchain action, or security result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">AI Engineer is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen presented 44 named agents with specialties and levels, called unverified chat procedures, and exposed an autonomous sprint workflow that could imply multi-agent planning, coding, testing, security auditing, deployment, repository changes, Web3 work, and production-ready results. Those backend contracts, permissions, execution boundaries, and evidence were not verified, so the action surface was removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Sparkles aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Safe autonomous-engineering readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production AI engineering system requires an authenticated model registry, explicit agent configuration, least-privilege tool permissions, isolated execution, secret redaction, dependency and license controls, repository branch protection, human approval gates, deployment safeguards, blockchain transaction controls, security-test evidence, audit logs, rate and cost limits, and explicit success, failure, timeout, rollback, and retry states. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Users aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No agent claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No named agent, specialty, level, orchestration, expertise, or multi-agent coordination is presented as active.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Code2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No engineering claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No chat, code, review, refactor, test, documentation, audit, security result, deployment, or production-readiness claim is fabricated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Network aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No side-effect claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No repository write, commit, pull request, deployment, wallet action, blockchain transaction, or external system change can occur here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/ai-code-studio"><Button size="lg" className="bg-primary hover:bg-primary/90">View code-studio status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about engineering access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="engineering-state-heading">
          <h2 id="engineering-state-heading" className="mb-4 text-xl font-semibold">Current engineering evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {engineeringStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not provide passwords, access tokens, seed phrases, private keys, proprietary code, production credentials, or confidential infrastructure details here. AI-generated code and security output must never be treated as secure, tested, audited, deployed, or production-ready without independent verification.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, execution, repositories, deployments, secrets, blockchain networks, approvals, billing, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>

        <div className="sr-only">AI Engineer is currently unavailable.</div>
        <ShieldCheck aria-hidden="true" className="hidden" />
      </main>
    </div>
  );
}
