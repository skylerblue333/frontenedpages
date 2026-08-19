import { AlertTriangle, Archive, Database, FileImage, FileWarning, FolderOpen, LockKeyhole, Search, ShieldCheck, UploadCloud } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const assetStates = [
  { label: "Asset records, storage, and metadata", value: "Unavailable", icon: Database },
  { label: "Ownership, rights, versions, and approvals", value: "Not configured", icon: ShieldCheck },
  { label: "Uploads, transformations, downloads, and delivery", value: "Disabled", icon: UploadCloud },
  { label: "Search, retention, deletion, and audit", value: "Not available", icon: Archive },
];

export default function AssetManagement() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Asset Management"
        description="Asset-management services are not connected in this deployment. No asset, file, metadata, owner, license, version, approval, upload, download, transformation, delivery, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Asset Management is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified asset registry, object-storage provider, metadata schema, ownership and rights model, version history, approval workflow, upload validation, delivery service, or audit contract was connected. Those controls were removed because the screen cannot establish that an asset exists, is authorized, or is safely stored.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><FolderOpen aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Asset-library readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production asset library requires authenticated ownership, object-storage isolation, MIME and size validation, malware scanning, metadata and derivative rules, rights and license evidence, versioning, approvals, access controls, signed delivery, retention and deletion, backup, privacy filtering, audit, and clear upload, processing, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><FileImage aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No asset claim</h3><p className="mt-1 text-sm text-muted-foreground">No image, video, audio, document, brand file, marketing asset, metadata record, thumbnail, derivative, or download is displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No rights claim</h3><p className="mt-1 text-sm text-muted-foreground">No owner, license, consent, attribution, approval, publication status, usage restriction, or permission decision is inferred.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><UploadCloud aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No storage claim</h3><p className="mt-1 text-sm text-muted-foreground">No upload, processing, conversion, signed URL, delivery, backup, deletion, or external share is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/media-gallery"><Button size="lg" className="bg-primary hover:bg-primary/90">View media status</Button></Link><Link href="/content-vault"><Button size="lg" variant="outline">View content status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about asset access</Button></Link></div></div></Card>

        <section aria-labelledby="asset-state-heading"><h2 id="asset-state-heading" className="mb-4 text-xl font-semibold">Current asset evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{assetStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential files, unreleased creative work, or sensitive personal information here. An unavailable asset page is not evidence that a file is stored, owned, licensed, approved, private, backed up, or deliverable.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Storage, content, rights, uploads, downloads, backups, privacy, permissions, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
