import { AlertTriangle, FolderGit2, GitBranch, LockKeyhole, Search, ShieldCheck } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function CodeRepository() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-background"><PageHeader icon={FolderGit2} title="Code Repository" subtitle="Repository browsing is protected and is not connected to a repository provider in this session." /><main className="mx-auto max-w-2xl px-4 py-12"><Card className="border border-border/50 bg-card p-8"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><LockKeyhole aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-2xl font-semibold">Sign in to access repository data</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">No repositories, branches, commits, files, pull requests, issues, activity, permissions, or security results are loaded while you are signed out. This page does not create a repository or invent an empty repository state.</p><Button className="mt-6" onClick={startLogin}>Sign in securely</Button></div></div></Card></main></div>;
  }

  return <div className="min-h-screen bg-background"><PageHeader icon={FolderGit2} title="Code Repository" subtitle="Authenticated repository browsing is not connected to a provider or data source in this deployment." /><main className="mx-auto max-w-6xl space-y-8 px-4 py-8"><Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Repository integration unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">Authentication alone does not authorize a repository provider. No verified connection, organization or repository scope, branch permission, file access, webhook, revision source, or audit trail is available through this route. Repository data and mutation controls remain unavailable.</p></div></div></Card><section aria-labelledby="repository-state-heading"><h2 id="repository-state-heading" className="mb-4 text-xl font-semibold">Repository evidence</h2><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"><State icon={FolderGit2} label="Repositories and files" value="Unavailable" /><State icon={GitBranch} label="Branches and revisions" value="Unavailable" /><State icon={ShieldCheck} label="Permissions and security" value="Unavailable" /><State icon={Search} label="Search and activity" value="Unavailable" /></div></section><Card className="border border-border/50 bg-card p-5"><p className="text-sm leading-6 text-muted-foreground">Do not assume that sign-in grants repository access. Do not enter access tokens, private keys, passwords, seed phrases, or confidential source code into an unconnected integration. No repository action, commit, file change, pull request, issue, or deployment is performed here.</p></Card></main></div>;
}

function State({ icon: Icon, label, value }: { icon: typeof FolderGit2; label: string; value: string }) {
  return <Card className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>;
}
