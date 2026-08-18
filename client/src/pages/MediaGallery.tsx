import { AlertTriangle, FileImage, FileLock2, FolderOpen, LockKeyhole, ScanSearch, Settings2, UploadCloud } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const mediaStates = [
  { label: "Images, videos, albums, and ownership", value: "Unavailable", icon: FileImage },
  { label: "Storage, processing, and thumbnails", value: "Not configured", icon: FolderOpen },
  { label: "Search, metadata, and moderation", value: "Not verified", icon: ScanSearch },
  { label: "Create, upload, edit, and delete actions", value: "Disabled", icon: Settings2 },
];

export default function MediaGallery() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Media Gallery"
        description="Media-management services are not connected in this deployment. No image, video, album, owner, storage object, processing job, moderation result, or gallery mutation is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Media gallery is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen exposed a sign-in gate, New action, search, settings, and an empty gallery state, but no verified media-storage or gallery contract was connected. This page cannot establish that an image, video, album, owner, upload, thumbnail, metadata record, moderation result, edit, share, or deletion exists or succeeded.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><FileImage aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Media-management readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production media management requires authenticated object ownership, signed upload and download URLs, type and size validation, malware and content scanning, image and video processing isolation, metadata and privacy controls, album and sharing authorization, moderation, retention and deletion, search indexing, quota enforcement, audit evidence, and clear success, failure, and quarantine states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileImage aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No asset claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No file, image, video, album, owner, thumbnail, metadata, date, size, or asset count is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ScanSearch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No safety claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No file type, malware, content, copyright, moderation, privacy, or sharing decision is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Settings2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No mutation claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No create, upload, process, rename, move, share, download, publish, or delete action can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/content-upload"><Button size="lg" className="bg-primary hover:bg-primary/90">View upload status</Button></Link>
              <Link href="/content-vault"><Button size="lg" variant="outline">View vault status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about gallery access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="media-state-heading">
          <h2 id="media-state-heading" className="mb-4 text-xl font-semibold">Current media evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {mediaStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not upload identity documents, private media, credentials, seed phrases, private keys, or sensitive personal data here. An unavailable gallery state is not proof that a file was stored, deleted, scanned, shared, or kept private.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <UploadCloud aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Upload, storage, processing, moderation, access, and deletion remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
