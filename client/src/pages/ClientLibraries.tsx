import { AlertTriangle, Code2, Download, FileWarning, LockKeyhole, PackageCheck, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const libraryStates = [
  { label: "Packages, SDKs, versions, and release provenance", value: "Unavailable", icon: PackageCheck },
  { label: "Downloads, registries, documentation, and examples", value: "Not configured", icon: Download },
  { label: "Runtime compatibility, support, and API contracts", value: "Not verified", icon: Code2 },
  { label: "Signing, vulnerabilities, permissions, and audit", value: "Not available", icon: ShieldCheck },
];

export default function ClientLibraries() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={Code2} title="Client Libraries" subtitle="Client-library services are not connected in this deployment. No package, SDK, version, download, registry, compatibility, vulnerability, support, or audit result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Client libraries are unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified package registry, SDK source, release signing, version policy, download service, documentation, compatibility matrix, vulnerability feed, support contract, permission boundary, or audit trail was connected. Those controls were removed because this route cannot establish that a client library is official, current, safe, compatible, or supported.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Code2 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">SDK distribution readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production client-library catalog requires a trusted source repository, package names and scopes, signed releases, semantic versioning, dependency and compatibility policy, documentation, examples, provenance, vulnerability and deprecation handling, support ownership, download integrity, API contracts, privacy, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><PackageCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No package claim</h3><p className="mt-1 text-sm text-muted-foreground">No package, SDK, namespace, version, release, maintainer, dependency, API surface, changelog, or support status is displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Download aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No download claim</h3><p className="mt-1 text-sm text-muted-foreground">No registry lookup, install command, archive, binary, documentation link, example, download count, or integration request is executed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No security claim</h3><p className="mt-1 text-sm text-muted-foreground">No signature, checksum, vulnerability scan, compatibility result, permission, secret, token, or security certification is asserted.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/api-marketplace"><Button size="lg" className="bg-primary hover:bg-primary/90">View API status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about SDK access</Button></Link></div></div></Card>

        <section aria-labelledby="library-state-heading"><h2 id="library-state-heading" className="mb-4 text-xl font-semibold">Current library evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{libraryStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, package credentials, registry tokens, or confidential source code here. An unavailable client-library page is not evidence that a package, SDK, release, download, compatibility result, or security property exists.</p></div></Card>
      </main>
    </div>
  );
}
