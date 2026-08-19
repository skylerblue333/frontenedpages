import { AlertTriangle, BookOpen, FileImage, FileWarning, Globe2, KeyRound, LockKeyhole, Palette, Search, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const brandStates = [
  { label: "Brand assets, owners, usage rights, and licenses", value: "Unavailable", icon: FileImage },
  { label: "Colors, typography, components, and versions", value: "Not configured", icon: Palette },
  { label: "Approvals, accessibility, distribution, and review", value: "Disabled", icon: Workflow },
  { label: "Permissions, downloads, retention, and audit", value: "Not available", icon: ShieldCheck },
];

export default function BrandGuidelines() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Brand Guidelines"
        description="Brand-governance services are not connected in this deployment. No asset, owner, license, color, type scale, component rule, version, approval, accessibility review, download, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Brand Guidelines are unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified brand registry, asset store, ownership and license model, design-token source, version history, approval workflow, accessibility checker, distribution permission, or audit contract was connected. Those controls were removed because the screen cannot establish that a guideline or brand asset is current, authorized, or approved.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BookOpen aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Brand-governance readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production brand governance requires authoritative assets and design tokens, ownership and license evidence, versioning, approval and deprecation state, accessibility review, usage restrictions, download permissions, secure distribution, retention and deletion, privacy, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Palette aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No guideline claim</h3><p className="mt-1 text-sm text-muted-foreground">No logo, color, typography, component, voice, spacing, icon, token, example, version, or canonical standard is displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><KeyRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No rights claim</h3><p className="mt-1 text-sm text-muted-foreground">No owner, license, usage restriction, approval, attribution, consent, publication permission, or download authorization is inferred.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Globe2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No distribution claim</h3><p className="mt-1 text-sm text-muted-foreground">No asset package, link, export, email, social share, external delivery, or brand-compliance decision is created or sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/content-vault"><Button size="lg" className="bg-primary hover:bg-primary/90">View content status</Button></Link><Link href="/media-gallery"><Button size="lg" variant="outline">View media status</Button></Link><Link href="/access-control"><Button size="lg" variant="outline">View access status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about brand governance</Button></Link></div></div></Card>

        <section aria-labelledby="brand-state-heading"><h2 id="brand-state-heading" className="mb-4 text-xl font-semibold">Current brand evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{brandStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential brand assets, license documents, unreleased campaigns, or sensitive personal information here. An unavailable brand-guidelines page is not evidence that an asset is owned, licensed, current, approved, accessible, or safe to distribute.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Assets, content, design tokens, rights, access, accessibility, publishing, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
