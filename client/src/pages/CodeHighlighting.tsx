import { AlertTriangle, Braces, FileWarning, FileCode2, GitBranch, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const highlightingStates = [
  { label: "Source content, language, parser, and theme", value: "Unavailable", icon: FileCode2 },
  { label: "Repository, file, branch, and revision", value: "Not connected", icon: GitBranch },
  { label: "Syntax tokens, line mapping, and rendered output", value: "Not calculated", icon: Braces },
  { label: "Secret redaction, permissions, provenance, and audit", value: "Not available", icon: ShieldCheck },
];

export default function CodeHighlighting() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={FileCode2} title="Code Highlighting" subtitle="Code-highlighting services are not connected in this deployment. No source content, language, parser, repository, file, syntax token, rendered output, or audit result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Code highlighting is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen was a coming-soon placeholder and provided no verified source-content contract, language detector, parser, theme, repository or file connection, revision or branch boundary, secret-redaction policy, rendering pipeline, accessibility contract, or audit trail. No code viewer is shown because this route cannot establish that displayed source is authentic, current, safe to expose, or correctly classified.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><FileCode2 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Source-rendering readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production syntax highlighting requires authorized source content, language and version detection, a trusted parser and theme, safe tokenization, line and location fidelity, repository revision semantics, secret and personal-data redaction, access controls, performance limits, accessible contrast and navigation, provenance, and auditable reads. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><FileCode2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No source claim</h3><p className="mt-1 text-sm text-muted-foreground">No source file, snippet, language, parser, syntax token, line number, theme, or rendered code is displayed or inferred.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><GitBranch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No repository claim</h3><p className="mt-1 text-sm text-muted-foreground">No repository, workspace, branch, revision, dependency, pull request, commit, or file is read, searched, linked, or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No exposure claim</h3><p className="mt-1 text-sm text-muted-foreground">No secret, token, private key, credential, personal data, permission, provenance, vulnerability, or audit result is inspected or asserted.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/code-formatter"><Button size="lg" className="bg-primary hover:bg-primary/90">View formatter status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about source access</Button></Link></div></div></Card>

        <section aria-labelledby="highlighting-state-heading"><h2 id="highlighting-state-heading" className="mb-4 text-xl font-semibold">Current highlighting evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{highlightingStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, API keys, access tokens, seed phrases, private keys, proprietary source code, credentials, or confidential repository details here. An unavailable highlighting page is not evidence that source code was loaded, classified, rendered, redacted, or safe to expose.</p></div></Card>
      </main>
    </div>
  );
}
