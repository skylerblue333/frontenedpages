import { AlertTriangle, Braces, FileWarning, GitBranch, LockKeyhole, ShieldCheck, WandSparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const formatterStates = [
  { label: "Formatter engine, parser, language, and configuration", value: "Unavailable", icon: Braces },
  { label: "Source file, repository, workspace, and branch", value: "Not connected", icon: GitBranch },
  { label: "Formatted output, diff, validation, and tests", value: "Not calculated", icon: WandSparkles },
  { label: "Secrets, permissions, provenance, and audit", value: "Not available", icon: ShieldCheck },
];

export default function CodeFormatter() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={Braces} title="Code Formatter" subtitle="Code-formatting services are not connected in this deployment. No formatter, parser, source file, repository, output, diff, validation, test, or audit result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Code formatting is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified formatter engine, parser, language support, configuration source, file or repository connection, diff workflow, validation runner, test contract, permission boundary, secret handling, or audit trail was connected. Those controls were removed because this route cannot establish that formatting is correct, lossless, compatible, or safe to apply.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Braces aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Formatter readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production formatting requires a trusted parser and printer, supported-language contract, versioned configuration, encoding and line-ending handling, source and repository authorization, lossless diff review, validation, test and lint checks, safe write and rollback behavior, provenance, privacy, rate limits, and auditable mutations. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Braces aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No formatting claim</h3><p className="mt-1 text-sm text-muted-foreground">No parser, printer, language, configuration, formatting result, syntax change, or code-quality result is calculated or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><GitBranch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No file claim</h3><p className="mt-1 text-sm text-muted-foreground">No source file, repository, workspace, branch, dependency, pull request, commit, patch, or write operation is read or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No security claim</h3><p className="mt-1 text-sm text-muted-foreground">No secret, token, private key, permission, provenance, vulnerability, privacy, validation, or audit result is inspected or asserted.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/code-completion"><Button size="lg" className="bg-primary hover:bg-primary/90">View code-assistance status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about formatter access</Button></Link></div></div></Card>

        <section aria-labelledby="formatter-state-heading"><h2 id="formatter-state-heading" className="mb-4 text-xl font-semibold">Current formatter evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{formatterStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, API keys, access tokens, seed phrases, private keys, proprietary source code, credentials, or confidential repository details here. An unavailable formatter page is not evidence that code was parsed, formatted, validated, tested, or safely written.</p></div></Card>
      </main>
    </div>
  );
}
