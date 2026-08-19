import { FileCode2, FolderOpen, GitBranch, LockKeyhole, Search, ShieldCheck } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function CodeSamples() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-background"><PageHeader icon={FileCode2} title="Code Samples" subtitle="Sample browsing is protected and is not connected to a verified catalog in this session." /><main className="mx-auto max-w-2xl px-4 py-12"><Card className="border border-border/50 bg-card p-8"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><LockKeyhole aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-2xl font-semibold">Sign in to access code samples</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">No code samples, language metadata, repository links, downloads, provenance, licensing, or search results are loaded while you are signed out. This page does not create sample records or invent an empty catalog.</p><Button className="mt-6" onClick={startLogin}>Sign in securely</Button></div></div></Card></main></div>;
  }

  return <div className="min-h-screen bg-background"><PageHeader icon={FileCode2} title="Code Samples" subtitle="Authenticated sample browsing is not connected to a verified catalog or repository provider in this deployment." /><main className="mx-auto max-w-6xl space-y-8 px-4 py-8"><Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Sample catalog unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">No verified catalog connection, repository scope, source provenance, license record, language parser, search index, download service, or sample mutation contract is available. Code samples and related metadata remain unavailable rather than being represented with fabricated content.</p></div></div></Card><section aria-labelledby="samples-state-heading"><h2 id="samples-state-heading" className="mb-4 text-xl font-semibold">Sample catalog evidence</h2><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"><State icon={FolderOpen} label="Samples and source files" value="Unavailable" /><State icon={GitBranch} label="Repository and revision" value="Unavailable" /><State icon={Search} label="Search and filtering" value="Unavailable" /><State icon={ShieldCheck} label="Provenance and license" value="Unavailable" /></div></section><Card className="border border-border/50 bg-card p-5"><p className="text-sm leading-6 text-muted-foreground">Do not assume that sign-in grants access to private source code. Do not enter access tokens, private keys, passwords, seed phrases, or confidential code into an unconnected catalog. No sample is created, downloaded, executed, published, or changed here.</p></Card></main></div>;
}

function State({ icon: Icon, label, value }: { icon: typeof FolderOpen; label: string; value: string }) {
  return <Card className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>;
}
